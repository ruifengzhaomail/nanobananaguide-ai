'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

// 懒加载 Hook
export function useLazyLoad(options: IntersectionObserverInit = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [hasIntersected, options]);

  return { ref, isIntersecting, hasIntersected };
}

// 懒加载容器组件
interface LazyLoadProps {
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
  once?: boolean;
  offset?: string;
  threshold?: number;
  onIntersect?: () => void;
}

export function LazyLoad({
  children,
  fallback,
  className = '',
  once = true,
  offset = '50px',
  threshold = 0.1,
  onIntersect
}: LazyLoadProps) {
  const { ref, isIntersecting, hasIntersected } = useLazyLoad({
    rootMargin: offset,
    threshold
  });

  useEffect(() => {
    if (isIntersecting && onIntersect) {
      onIntersect();
    }
  }, [isIntersecting, onIntersect]);

  const shouldRender = once ? hasIntersected : isIntersecting;

  return (
    <div ref={ref} className={className}>
      {shouldRender ? children : fallback}
    </div>
  );
}

// 懒加载图片组件
interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export function LazyImage({
  src,
  alt,
  width,
  height,
  className = '',
  placeholder,
  onLoad,
  onError
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { ref, hasIntersected } = useLazyLoad();

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const placeholderElement = (
    <div 
      className={`bg-gray-200 animate-pulse flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      {placeholder || (
        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )}
    </div>
  );

  if (hasError) {
    return (
      <div 
        className={`bg-gray-100 flex items-center justify-center text-gray-400 ${className}`}
        style={{ width, height }}
      >
        <span className="text-sm">加载失败</span>
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      {hasIntersected ? (
        <div className="relative">
          {!isLoaded && placeholderElement}
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            onLoad={handleLoad}
            onError={handleError}
            className={`transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
            }`}
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : (
        placeholderElement
      )}
    </div>
  );
}

// 懒加载内容组件
interface LazyContentProps {
  children: ReactNode;
  skeleton?: ReactNode;
  className?: string;
  delay?: number;
}

export function LazyContent({
  children,
  skeleton,
  className = '',
  delay = 0
}: LazyContentProps) {
  const [showContent, setShowContent] = useState(false);
  const { ref, hasIntersected } = useLazyLoad();

  useEffect(() => {
    if (hasIntersected) {
      if (delay > 0) {
        const timer = setTimeout(() => setShowContent(true), delay);
        return () => clearTimeout(timer);
      } else {
        setShowContent(true);
      }
    }
  }, [hasIntersected, delay]);

  const defaultSkeleton = (
    <div className="animate-pulse space-y-3">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    </div>
  );

  return (
    <div ref={ref} className={className}>
      {showContent ? children : (skeleton || defaultSkeleton)}
    </div>
  );
}

// 懒加载组件工厂
export function createLazyComponent<T extends Record<string, any>>(
  importFn: () => Promise<{ default: React.ComponentType<T> }>
) {
  return function LazyComponent(props: T) {
    const [Component, setComponent] = useState<React.ComponentType<T> | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const { ref, hasIntersected } = useLazyLoad();

    useEffect(() => {
      if (hasIntersected && !Component && !isLoading) {
        setIsLoading(true);
        importFn()
          .then((module) => {
            setComponent(() => module.default);
            setIsLoading(false);
          })
          .catch((err) => {
            setError(err);
            setIsLoading(false);
          });
      }
    }, [hasIntersected, Component, isLoading]);

    if (error) {
      return (
        <div className="p-4 text-red-600 bg-red-50 rounded-lg">
          组件加载失败: {error.message}
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="flex items-center justify-center p-8">
          <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="ml-2 text-gray-600">加载中...</span>
        </div>
      );
    }

    return (
      <div ref={ref}>
        {Component ? <Component {...props} /> : <div className="h-32 bg-gray-100 animate-pulse rounded"></div>}
      </div>
    );
  };
}

// 虚拟滚动组件（用于大列表优化）
interface VirtualScrollProps<T> {
  items: T[];
  itemHeight: number;
  containerHeight: number;
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
  overscan?: number;
}

export function VirtualScroll<T>({
  items,
  itemHeight,
  containerHeight,
  renderItem,
  className = '',
  overscan = 5
}: VirtualScrollProps<T>) {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  const endIndex = Math.min(
    items.length - 1,
    Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan
  );

  const visibleItems = items.slice(startIndex, endIndex + 1);
  const totalHeight = items.length * itemHeight;
  const offsetY = startIndex * itemHeight;

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  return (
    <div
      ref={containerRef}
      className={`overflow-auto ${className}`}
      style={{ height: containerHeight }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {visibleItems.map((item, index) =>
            renderItem(item, startIndex + index)
          )}
        </div>
      </div>
    </div>
  );
}