'use client';

import { useEffect } from 'react';

// 性能监控组件
export default function PerformanceMonitor() {
  useEffect(() => {
    // 只在生产环境和支持 Performance API 的浏览器中运行
    if (process.env.NODE_ENV !== 'production' || typeof window === 'undefined' || !window.performance) {
      return;
    }

    // 监控页面加载性能
    const measurePageLoad = () => {
      try {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const metrics = {
            // 页面加载时间
            pageLoadTime: navigation.loadEventEnd - navigation.fetchStart,
            // DOM 内容加载时间
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
            // 首次内容绘制时间
            firstContentfulPaint: 0,
            // 最大内容绘制时间
            largestContentfulPaint: 0,
            // 累积布局偏移
            cumulativeLayoutShift: 0,
            // 首次输入延迟
            firstInputDelay: 0
          };

          // 获取 FCP (First Contentful Paint)
          const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
          if (fcpEntry) {
            metrics.firstContentfulPaint = fcpEntry.startTime;
          }

          // 记录基础性能指标
          console.log('Performance Metrics:', {
            'Page Load Time': `${metrics.pageLoadTime.toFixed(2)}ms`,
            'DOM Content Loaded': `${metrics.domContentLoaded.toFixed(2)}ms`,
            'First Contentful Paint': `${metrics.firstContentfulPaint.toFixed(2)}ms`
          });

          // 发送性能数据到分析服务（可选）
          // sendPerformanceData(metrics);
        }
      } catch (error) {
        console.warn('Performance monitoring error:', error);
      }
    };

    // 监控 Web Vitals
    const observeWebVitals = () => {
      try {
        // 监控 LCP (Largest Contentful Paint)
        if ('PerformanceObserver' in window) {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log('LCP:', `${lastEntry.startTime.toFixed(2)}ms`);
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // 监控 CLS (Cumulative Layout Shift)
          const clsObserver = new PerformanceObserver((list) => {
            let clsValue = 0;
            for (const entry of list.getEntries()) {
              if (!(entry as any).hadRecentInput) {
                clsValue += (entry as any).value;
              }
            }
            if (clsValue > 0) {
              console.log('CLS:', clsValue.toFixed(4));
            }
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });

          // 监控 FID (First Input Delay)
          const fidObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              const fid = (entry as any).processingStart - entry.startTime;
              console.log('FID:', `${fid.toFixed(2)}ms`);
            }
          });
          fidObserver.observe({ entryTypes: ['first-input'] });
        }
      } catch (error) {
        console.warn('Web Vitals monitoring error:', error);
      }
    };

    // 监控资源加载性能
    const monitorResources = () => {
      try {
        const resources = performance.getEntriesByType('resource');
        const slowResources = resources.filter(resource => resource.duration > 1000);
        
        if (slowResources.length > 0) {
          console.warn('Slow loading resources:', slowResources.map(resource => ({
            name: resource.name,
            duration: `${resource.duration.toFixed(2)}ms`,
            size: (resource as any).transferSize || 'unknown'
          })));
        }
      } catch (error) {
        console.warn('Resource monitoring error:', error);
      }
    };

    // 页面加载完成后执行监控
    if (document.readyState === 'complete') {
      setTimeout(() => {
        measurePageLoad();
        monitorResources();
      }, 100);
    } else {
      window.addEventListener('load', () => {
        setTimeout(() => {
          measurePageLoad();
          monitorResources();
        }, 100);
      });
    }

    // 开始监控 Web Vitals
    observeWebVitals();

    // 监控内存使用（如果支持）
    const monitorMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        console.log('Memory Usage:', {
          'Used JS Heap Size': `${(memory.usedJSHeapSize / 1048576).toFixed(2)} MB`,
          'Total JS Heap Size': `${(memory.totalJSHeapSize / 1048576).toFixed(2)} MB`,
          'JS Heap Size Limit': `${(memory.jsHeapSizeLimit / 1048576).toFixed(2)} MB`
        });
      }
    };

    // 每30秒监控一次内存使用
    const memoryInterval = setInterval(monitorMemory, 30000);

    return () => {
      clearInterval(memoryInterval);
    };
  }, []);

  // 这个组件不渲染任何内容
  return null;
}

// 发送性能数据到分析服务的函数（可选实现）
// function sendPerformanceData(metrics: any) {
//   // 可以发送到 Google Analytics, Vercel Analytics 等
//   if (typeof gtag !== 'undefined') {
//     gtag('event', 'page_load_time', {
//       value: Math.round(metrics.pageLoadTime),
//       custom_parameter: 'performance_monitoring'
//     });
//   }
// }