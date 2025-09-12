
import './globals.css'
import TopNavBar from '@/components/TopNavBar'
import Footer from '@/components/Footer'
import PerformanceMonitor from '@/components/PerformanceMonitor'
import PerformanceOptimizer from '@/components/PerformanceOptimizer'
import { WebsiteStructuredData, OrganizationStructuredData } from '@/components/StructuredData'
import dynamic from 'next/dynamic'

import ClientOnly from '@/components/ClientOnly'
import GoogleAnalytics from './google-analytics'

import { websiteSchema, organizationSchema } from '@/lib/seo'

export const metadata = {
  metadataBase: new URL('https://nanobananaguide.ai'),
  title: {
    default: 'Nano Banana AI Guide - 最全面的AI图像编辑教程与最佳实践',
    template: '%s | Nano Banana Guide'
  },
  description: '掌握Nano Banana AI图像编辑技术，从入门到精通。我们提供全面的教程、最佳实践和实际案例，帮助您创建令人惊艳的AI生成图像。无论您是初学者还是专业人士，都能在这里找到提升AI图像创作能力的资源。',
  keywords: [
    'Nano Banana AI教程',
    'AI图像生成指南', 
    'Gemini 2.5 Flash图像技术',
    'AI图像编辑工具',
    '人工智能图像处理',
    '图像到图像AI转换',
    '文本到图像生成',
    'AI艺术创作',
    '机器学习图像生成',
    '数字艺术AI工具',
    'AI绘画教程',
    'Nano Banana使用技巧',
    '人工智能图像优化',
    'AI设计工具'
  ],
  authors: [{ name: 'Nano Banana Guide Team' }],
  creator: 'Nano Banana Guide',
  publisher: 'nanobananaguide.ai',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://nanobananaguide.ai',
    title: 'Nano Banana AI Guide - 最全面的AI图像编辑教程与最佳实践',
    description: '掌握Nano Banana AI图像编辑技术，从入门到精通。我们提供全面的教程、最佳实践和实际案例，帮助您创建令人惊艳的AI生成图像。',
    siteName: 'Nano Banana Guide AI',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Nano Banana AI Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nano Banana AI Guide - Complete Tutorial & Best Practices',
    description: 'Master Nano Banana AI with our comprehensive guide. Learn advanced techniques, best practices, and real-world use cases for AI image generation.',
    images: ['/og-image.svg'],
    creator: '@nanobananaguide',
  },
  verification: {
    google: 'ffaef71a80eae973',
  },
  alternates: {
    canonical: 'https://nanobananaguide.ai',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [websiteSchema, organizationSchema]
  }

  return (
    <html lang="zh" suppressHydrationWarning>
      <head>
        <WebsiteStructuredData />
        <OrganizationStructuredData />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
        />
        <link rel="canonical" href="https://nanobananaguide.ai" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Nano Banana Guide" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Nano Banana Guide" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <ClientOnly><GoogleAnalytics /></ClientOnly>
        {/* <PerformanceMonitor /> */}
        {/* <PerformanceOptimizer /> */}
        <TopNavBar />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
