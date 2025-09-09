'use client';

import Image from 'next/image';
import { useState } from 'react';
// 简单的类名合并函数
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
}

// 优化的图片组件
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  sizes,
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
  onLoad,
  onError
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // 生成模糊占位符
  const generateBlurDataURL = (w: number, h: number) => {
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#f3f4f6';
      ctx.fillRect(0, 0, w, h);
    }
    return canvas.toDataURL();
  };

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  // 错误状态显示
  if (hasError) {
    return (
      <div 
        className={cn(
          'flex items-center justify-center bg-gray-100 text-gray-400 text-sm',
          className
        )}
        style={{ width, height }}
      >
        <svg 
          className="w-8 h-8" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* 加载状态 */}
      {isLoading && (
        <div 
          className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center"
          style={{ width, height }}
        >
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
        </div>
      )}
      
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        quality={quality}
        sizes={sizes || (fill ? '100vw' : undefined)}
        placeholder={placeholder}
        blurDataURL={blurDataURL || (width && height ? generateBlurDataURL(width, height) : undefined)}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
          fill ? 'object-cover' : ''
        )}
        // 性能优化属性
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        // 现代图片格式支持
        unoptimized={false}
      />
    </div>
  );
}

// 响应式图片组件
export function ResponsiveImage({
  src,
  alt,
  className,
  priority = false,
  quality = 85,
  aspectRatio = 'aspect-video', // 默认16:9
  ...props
}: OptimizedImageProps & {
  aspectRatio?: string;
}) {
  return (
    <div className={cn('relative w-full', aspectRatio, className)}>
      <OptimizedImage
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={quality}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
        {...props}
      />
    </div>
  );
}

// 头像图片组件
export function AvatarImage({
  src,
  alt,
  size = 40,
  className,
  ...props
}: OptimizedImageProps & {
  size?: number;
}) {
  return (
    <div className={cn('relative rounded-full overflow-hidden', className)} style={{ width: size, height: size }}>
      <OptimizedImage
        src={src}
        alt={alt}
        width={size}
        height={size}
        quality={90}
        className="object-cover"
        {...props}
      />
    </div>
  );
}

// 缩略图组件
export function ThumbnailImage({
  src,
  alt,
  className,
  ...props
}: OptimizedImageProps) {
  return (
    <div className={cn('relative w-24 h-24 rounded-lg overflow-hidden', className)}>
      <OptimizedImage
        src={src}
        alt={alt}
        fill
        quality={75}
        sizes="96px"
        className="object-cover"
        {...props}
      />
    </div>
  );
}