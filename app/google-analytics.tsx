'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

// 为window.gtag添加类型声明
declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
    dataLayer: any[];
  }
}

// Google Analytics测量ID
const GA_MEASUREMENT_ID = 'G-2JBQX8HQMR'; // 实际的GA4测量ID

function GoogleAnalyticsInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && window.gtag) {
      // 当路由变化时发送页面浏览事件
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
        custom_map: {
          'custom_parameter_1': 'page_category',
          'custom_parameter_2': 'user_engagement'
        }
      });
      
      // 发送页面浏览事件
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: url,
        content_group1: getPageCategory(pathname),
        content_group2: 'nano_banana_guide'
      });
      
      // 跟踪用户参与度
      trackUserEngagement();
    }
  }, [pathname, searchParams]);
  
  // 获取页面分类
  const getPageCategory = (path: string) => {
    if (path.includes('/guide/')) return 'guide';
    if (path.includes('/tutorials/')) return 'tutorial';
    if (path.includes('/compare')) return 'comparison';
    if (path.includes('/cases')) return 'case_study';
    return 'general';
  };
  
  // 跟踪用户参与度
  const trackUserEngagement = () => {
    // 滚动深度跟踪
    let maxScroll = 0;
    const trackScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
        maxScroll = scrollPercent;
        window.gtag('event', 'scroll', {
          event_category: 'engagement',
          event_label: `${scrollPercent}%`,
          value: scrollPercent
        });
      }
    };
    
    // 页面停留时间跟踪
    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent > 0 && timeSpent % 30 === 0) { // 每30秒发送一次
        window.gtag('event', 'timing_complete', {
          name: 'page_read_time',
          value: timeSpent
        });
      }
    };
    
    // 添加事件监听器
    window.addEventListener('scroll', trackScroll, { passive: true });
    const timeInterval = setInterval(trackTimeOnPage, 30000);
    
    // 清理函数
    return () => {
      window.removeEventListener('scroll', trackScroll);
      clearInterval(timeInterval);
    };
  };

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // 基础配置
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname + window.location.search,
              send_page_view: false, // 我们手动发送页面浏览事件
              custom_map: {
                'custom_parameter_1': 'page_category',
                'custom_parameter_2': 'user_engagement'
              },
              // 增强电子商务跟踪
              enhanced_conversions: true,
              // 用户ID跟踪（如果有登录系统）
              user_id: localStorage.getItem('user_id') || undefined,
              // 自定义维度
              custom_parameter_1: 'nano_banana_guide',
              custom_parameter_2: 'ai_image_editing'
            });
            
            // 跟踪关键交互
            gtag('event', 'page_view', {
              page_title: document.title,
              page_location: window.location.href,
              content_group1: 'initial_load',
              content_group2: 'nano_banana_guide'
            });
            
            // 跟踪外部链接点击
            document.addEventListener('click', function(e) {
              const link = e.target.closest('a');
              if (link && link.hostname !== window.location.hostname) {
                gtag('event', 'click', {
                  event_category: 'outbound',
                  event_label: link.href,
                  transport_type: 'beacon'
                });
              }
            });
            
            // 跟踪文件下载
            document.addEventListener('click', function(e) {
              const link = e.target.closest('a');
              if (link && /\.(pdf|doc|docx|xls|xlsx|ppt|pptx|zip|rar|7z|exe|dmg)$/i.test(link.href)) {
                gtag('event', 'file_download', {
                  event_category: 'engagement',
                  event_label: link.href,
                  transport_type: 'beacon'
                });
              }
            });
            
            // 跟踪搜索行为
            const trackSearch = (query) => {
              gtag('event', 'search', {
                search_term: query,
                event_category: 'engagement'
              });
            };
            
            // 跟踪表单提交
            document.addEventListener('submit', function(e) {
              const form = e.target;
              if (form.tagName === 'FORM') {
                gtag('event', 'form_submit', {
                  event_category: 'engagement',
                  event_label: form.id || form.className || 'unknown_form'
                });
              }
            });
            
            // 跟踪视频播放（如果有）
            const trackVideo = (action, videoTitle) => {
              gtag('event', 'video_' + action, {
                event_category: 'video',
                event_label: videoTitle
              });
            };
            
            // 导出全局函数供其他组件使用
            window.trackCustomEvent = function(eventName, parameters) {
              gtag('event', eventName, parameters);
            };
            
            window.trackConversion = function(conversionId, value) {
              gtag('event', 'conversion', {
                send_to: conversionId,
                value: value,
                currency: 'USD'
              });
            };
          `,
        }}
      />
    </>
  );
}

export default function GoogleAnalytics() {
  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsInner />
    </Suspense>
  );
}