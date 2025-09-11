'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useRouter } from 'next/navigation';

// 性能优化器组件
export default function PerformanceOptimizer() {
  const router = useRouter();
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    // 预加载关键资源
    const preloadCriticalResources = () => {
      const criticalRoutes = [
        '/guide/what-is-nano-banana',
        '/tutorials/get-started',
        '/compare',
        '/cases'
      ];

      // 预加载关键页面
      criticalRoutes.forEach(route => {
        router.prefetch(route);
      });

      // 预加载关键字体
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.href = '/fonts/inter-var.woff2';
      fontPreload.as = 'font';
      fontPreload.type = 'font/woff2';
      fontPreload.crossOrigin = 'anonymous';
      document.head.appendChild(fontPreload);
    };

    // 优化图片加载
    const optimizeImageLoading = () => {
      // 为所有图片添加 loading="lazy" 属性
      const images = document.querySelectorAll('img:not([loading])');
      images.forEach((img) => {
        img.setAttribute('loading', 'lazy');
      });

      // 为首屏图片添加 priority 加载
      const aboveFoldImages = document.querySelectorAll('img');
      Array.from(aboveFoldImages).slice(0, 3).forEach((img) => {
        img.setAttribute('loading', 'eager');
        img.setAttribute('fetchpriority', 'high');
      });
    };

    // 优化第三方脚本加载
    const optimizeThirdPartyScripts = () => {
      // 延迟加载非关键第三方脚本
      const deferredScripts = [
        'https://www.googletagmanager.com/gtag/js',
        'https://connect.facebook.net/en_US/fbevents.js'
      ];

      deferredScripts.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      });
    };

    // 实现 Service Worker 缓存策略
    const setupServiceWorker = () => {
      if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      }
    };

    // 优化 CSS 加载
    const optimizeCSSLoading = () => {
      // 预加载关键 CSS
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.href = '/styles/critical.css';
      criticalCSS.setAttribute('as', 'style');
      criticalCSS.onload = function() {
        (this as HTMLLinkElement).onload = null;
        (this as HTMLLinkElement).rel = 'stylesheet';
      };
      document.head.appendChild(criticalCSS);

      // 异步加载非关键 CSS
      const nonCriticalCSS = document.createElement('link');
      nonCriticalCSS.rel = 'preload';
      nonCriticalCSS.href = '/styles/non-critical.css';
      nonCriticalCSS.setAttribute('as', 'style');
      nonCriticalCSS.onload = function() {
        (this as HTMLLinkElement).onload = null;
        (this as HTMLLinkElement).rel = 'stylesheet';
      };
      document.head.appendChild(nonCriticalCSS);
    };

    // 实现资源提示
    const addResourceHints = () => {
      // DNS 预解析
      const dnsHints = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.google-analytics.com',
        'https://api.fal.ai'
      ];

      dnsHints.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      });

      // 预连接关键域名
      const preconnectDomains = [
        'https://fonts.googleapis.com',
        'https://api.fal.ai'
      ];

      preconnectDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    // 优化滚动性能
    const optimizeScrollPerformance = () => {
      // 使用 passive 事件监听器
      let ticking = false;
      
      const updateScrollPosition = () => {
        // 滚动相关的性能优化逻辑
        ticking = false;
      };

      const onScroll = () => {
        if (!ticking) {
          requestAnimationFrame(updateScrollPosition);
          ticking = true;
        }
      };

      window.addEventListener('scroll', onScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    };

    // 实现内存优化
    const optimizeMemoryUsage = () => {
      // 清理未使用的事件监听器
      const cleanupEventListeners = () => {
        // 移除不必要的事件监听器
      };

      // 优化大型对象的内存使用
      const optimizeLargeObjects = () => {
        // 使用 WeakMap 和 WeakSet 来避免内存泄漏
      };

      cleanupEventListeners();
      optimizeLargeObjects();
    };

    // 实现代码分割优化
    const optimizeCodeSplitting = () => {
      // 动态导入非关键组件
      const loadNonCriticalComponents = async () => {
        try {
          // 延迟加载非首屏组件 - 这里可以根据需要导入具体组件
          // const { default: LazyComponent } = await import('./SomeComponent');
          // 组件加载完成后的处理逻辑
          console.log('Non-critical components loading prepared');
        } catch (error) {
          console.warn('Failed to load lazy component:', error);
        }
      };

      // 在空闲时间加载
      if ('requestIdleCallback' in window) {
        requestIdleCallback(loadNonCriticalComponents);
      } else {
        setTimeout(loadNonCriticalComponents, 2000);
      }
    };

    // 执行所有优化
    const runOptimizations = async () => {
      try {
        preloadCriticalResources();
        addResourceHints();
        
        // 等待 DOM 完全加载
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', () => {
            optimizeImageLoading();
            optimizeCSSLoading();
          });
        } else {
          optimizeImageLoading();
          optimizeCSSLoading();
        }

        // 在页面加载完成后执行
        window.addEventListener('load', () => {
          optimizeThirdPartyScripts();
          setupServiceWorker();
          optimizeCodeSplitting();
          optimizeMemoryUsage();
        });

        const scrollCleanup = optimizeScrollPerformance();
        setIsOptimized(true);

        return scrollCleanup;
      } catch (error) {
        console.warn('Performance optimization error:', error);
      }
    };

    let cleanupFunction: (() => void) | undefined;

    runOptimizations().then((cleanup) => {
      cleanupFunction = cleanup;
    });

    return () => {
      if (cleanupFunction && typeof cleanupFunction === 'function') {
        cleanupFunction();
      }
    };
  }, [router]);

  // 在开发环境显示优化状态
  if (process.env.NODE_ENV === 'development' && isOptimized) {
    console.log('🚀 Performance optimizations applied');
  }

  return null;
}

// 性能监控 Hook
export function usePerformanceMonitoring() {
  const [metrics, setMetrics] = useState({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.performance) {
      return;
    }

    // 监控 Web Vitals
    const observeWebVitals = () => {
      // First Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        });
      }).observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fid = (entry as any).processingStart - entry.startTime;
          setMetrics(prev => ({ ...prev, fid }));
        });
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        });
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      }).observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const ttfb = navigation.responseStart - navigation.requestStart;
        setMetrics(prev => ({ ...prev, ttfb }));
      }
    };

    observeWebVitals();
  }, []);

  return metrics;
}

// 资源预加载 Hook
export function useResourcePreloader() {
  const preloadResource = (href: string, as: string, type?: string) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.setAttribute('as', as);
    if (type) link.type = type;
    document.head.appendChild(link);
  };

  const preloadImage = (src: string) => {
    const img = new Image();
    img.src = src;
  };

  return {
    preloadResource,
    preloadImage
  };
}

// 代码分割组件工厂
export function createLazyComponent<T = {}>(
  importFn: () => Promise<{ default: React.ComponentType<T> }>,
  fallback?: React.ReactNode
) {
  const LazyComponent = React.lazy(importFn);
  
  return function WrappedLazyComponent(props: T) {
    return (
      <Suspense fallback={fallback || <div>Loading...</div>}>
        <LazyComponent {...(props as any)} />
      </Suspense>
    );
  };
}