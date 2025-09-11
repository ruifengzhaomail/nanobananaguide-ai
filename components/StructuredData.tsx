'use client';

import { usePathname } from 'next/navigation';
import Head from 'next/head';

interface StructuredDataProps {
  type?: 'website' | 'article' | 'howto' | 'faq' | 'breadcrumb' | 'organization';
  data?: any;
}

export default function StructuredData({ type = 'website', data }: StructuredDataProps) {
  const pathname = usePathname();
  
  const getStructuredData = () => {
    const baseUrl = 'https://nanobananaguide.com';
    const currentUrl = `${baseUrl}${pathname}`;
    
    switch (type) {
      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Nano Banana Guide',
          alternateName: 'AI图像编辑指南',
          url: baseUrl,
          description: '专业的AI图像编辑工具指南，提供详细的教程、技巧和最佳实践，帮助用户掌握现代图像处理技术。',
          inLanguage: 'zh-CN',
          potentialAction: {
            '@type': 'SearchAction',
            target: `${baseUrl}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Nano Banana Guide',
            url: baseUrl,
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/logo.png`,
              width: 512,
              height: 512
            },
            sameAs: [
              'https://twitter.com/nanobananaguide',
              'https://github.com/nanobananaguide',
              'https://youtube.com/@nanobananaguide'
            ]
          },
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'AI图像编辑指南',
                url: `${baseUrl}/guide`
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: '教程中心',
                url: `${baseUrl}/tutorials`
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: '工具比较',
                url: `${baseUrl}/compare`
              }
            ]
          }
        };
        
      case 'article':
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data?.title || '专业AI图像编辑指南',
          description: data?.description || '学习如何使用AI工具进行专业图像编辑',
          image: data?.image || `${baseUrl}/images/default-article.jpg`,
          author: {
            '@type': 'Organization',
            name: 'Nano Banana Guide',
            url: baseUrl
          },
          publisher: {
            '@type': 'Organization',
            name: 'Nano Banana Guide',
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/logo.png`
            }
          },
          datePublished: data?.publishedDate || new Date().toISOString(),
          dateModified: data?.modifiedDate || new Date().toISOString(),
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': currentUrl
          },
          articleSection: data?.category || 'AI图像编辑',
          keywords: data?.keywords || ['AI图像编辑', '图像处理', '教程', '指南'],
          wordCount: data?.wordCount || 1000,
          inLanguage: 'zh-CN'
        };
        
      case 'howto':
        return {
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: data?.title || 'AI图像编辑教程',
          description: data?.description || '详细的AI图像编辑步骤指南',
          image: data?.image || `${baseUrl}/images/howto-default.jpg`,
          estimatedCost: {
            '@type': 'MonetaryAmount',
            currency: 'CNY',
            value: '0'
          },
          supply: data?.supplies || [
            {
              '@type': 'HowToSupply',
              name: 'AI图像编辑软件'
            },
            {
              '@type': 'HowToSupply', 
              name: '待编辑的图像文件'
            }
          ],
          tool: data?.tools || [
            {
              '@type': 'HowToTool',
              name: 'Photoshop',
              url: 'https://www.adobe.com/products/photoshop.html'
            },
            {
              '@type': 'HowToTool',
              name: 'GIMP',
              url: 'https://www.gimp.org/'
            }
          ],
          step: data?.steps || [
            {
              '@type': 'HowToStep',
              name: '准备工作',
              text: '打开AI图像编辑软件并导入图像',
              image: `${baseUrl}/images/step1.jpg`
            },
            {
              '@type': 'HowToStep',
              name: '应用AI效果',
              text: '选择合适的AI滤镜或效果',
              image: `${baseUrl}/images/step2.jpg`
            },
            {
              '@type': 'HowToStep',
              name: '调整参数',
              text: '微调效果参数以达到最佳效果',
              image: `${baseUrl}/images/step3.jpg`
            }
          ],
          totalTime: data?.duration || 'PT15M',
          yield: '1个编辑完成的图像文件'
        };
        
      case 'faq':
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data?.faqs || [
            {
              '@type': 'Question',
              name: '什么是AI图像编辑？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'AI图像编辑是使用人工智能技术来自动或半自动地处理和增强图像的过程。它可以包括背景移除、图像增强、风格转换等功能。'
              }
            },
            {
              '@type': 'Question',
              name: '哪些AI工具最适合初学者？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '对于初学者，我们推荐Canva、Remove.bg、Photoshop的AI功能等用户友好的工具。这些工具提供直观的界面和自动化功能。'
              }
            },
            {
              '@type': 'Question',
              name: 'AI图像编辑是否免费？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '许多AI图像编辑工具提供免费版本，但通常有功能限制。专业功能可能需要付费订阅。我们的指南涵盖了各种价位的选择。'
              }
            }
          ]
        };
        
      case 'breadcrumb':
        if (!pathname) return null;
        const pathSegments = pathname.split('/').filter(Boolean);
        const breadcrumbItems = [
          {
            '@type': 'ListItem',
            position: 1,
            name: '首页',
            item: baseUrl
          }
        ];
        
        let currentPath = baseUrl;
        pathSegments.forEach((segment, index) => {
          currentPath += `/${segment}`;
          breadcrumbItems.push({
            '@type': 'ListItem',
            position: index + 2,
            name: getPageTitle(segment),
            item: currentPath
          });
        });
        
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbItems
        };
        
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Nano Banana Guide',
          alternateName: 'AI图像编辑指南',
          url: baseUrl,
          logo: `${baseUrl}/logo.png`,
          description: '专业的AI图像编辑工具指南和教程平台',
          foundingDate: '2024',
          sameAs: [
            'https://twitter.com/nanobananaguide',
            'https://github.com/nanobananaguide',
            'https://youtube.com/@nanobananaguide'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+86-400-123-4567',
            contactType: 'customer service',
            availableLanguage: ['Chinese', 'English']
          },
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'CN',
            addressRegion: '北京市',
            addressLocality: '朝阳区'
          }
        };
        
      default:
        return null;
    }
  };
  
  const getPageTitle = (segment: string): string => {
    const titleMap: { [key: string]: string } = {
      'guide': '指南',
      'tutorials': '教程',
      'compare': '比较',
      'cases': '案例',
      'tools': '工具',
      'blog': '博客',
      'about': '关于',
      'contact': '联系',
      'privacy': '隐私政策',
      'terms': '服务条款'
    };
    return titleMap[segment] || segment;
  };
  
  const structuredData = getStructuredData();
  
  if (!structuredData) return null;
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
}

// 导出便捷组件
export function WebsiteStructuredData() {
  return <StructuredData type="website" />;
}

export function ArticleStructuredData(props: {
  title: string;
  description: string;
  image?: string;
  publishedDate?: string;
  modifiedDate?: string;
  category?: string;
  keywords?: string[];
  wordCount?: number;
}) {
  return <StructuredData type="article" data={props} />;
}

export function HowToStructuredData(props: {
  title: string;
  description: string;
  image?: string;
  steps: Array<{
    name: string;
    text: string;
    image?: string;
  }>;
  duration?: string;
  supplies?: Array<{ name: string }>;
  tools?: Array<{ name: string; url?: string }>;
}) {
  return <StructuredData type="howto" data={props} />;
}

export function FAQStructuredData(props: {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}) {
  const formattedFaqs = props.faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }));
  
  return <StructuredData type="faq" data={{ faqs: formattedFaqs }} />;
}

export function BreadcrumbStructuredData() {
  return <StructuredData type="breadcrumb" />;
}

export function OrganizationStructuredData() {
  return <StructuredData type="organization" />;
}