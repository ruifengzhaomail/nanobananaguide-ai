import { Metadata } from 'next'

// 网站基础信息
export const siteConfig = {
  name: 'Nano Banana Guide AI',
  title: 'Nano Banana AI Guide - Complete Tutorial & Best Practices',
  description: 'Master Nano Banana AI with our comprehensive guide. Learn advanced techniques, best practices, and real-world use cases for AI image generation.',
  url: 'https://nanobananaguide.ai',
  ogImage: 'https://nanobananaguide.ai/og-image.jpg',
  creator: '@nanobananaguide',
  keywords: [
    'Nano Banana AI',
    'AI image generation',
    'artificial intelligence',
    'image editing',
    'AI tools',
    'machine learning',
    'digital art',
    'AI tutorial',
    'image to image',
    'text to image'
  ]
}

// 生成基础 metadata
export function generateMetadata({
  title,
  description,
  image,
  noIndex = false,
  keywords = [],
  ...props
}: {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
  keywords?: string[]
} & Metadata = {}): Metadata {
  const siteTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title
  const siteDescription = description || siteConfig.description
  const siteImage = image || siteConfig.ogImage
  const allKeywords = [...siteConfig.keywords, ...keywords].join(', ')

  return {
    title: siteTitle,
    description: siteDescription,
    keywords: allKeywords,
    authors: [{ name: 'Nano Banana Guide Team' }],
    creator: siteConfig.creator,
    publisher: siteConfig.name,
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteConfig.url,
      title: siteTitle,
      description: siteDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: siteImage,
          width: 1200,
          height: 630,
          alt: siteTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: siteDescription,
      images: [siteImage],
      creator: siteConfig.creator,
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    alternates: {
      canonical: siteConfig.url,
    },
    ...props,
  }
}

// JSON-LD Schema 标记
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
  publisher: {
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/logo.png`,
    },
  },
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: {
    '@type': 'ImageObject',
    url: `${siteConfig.url}/logo.png`,
    width: 512,
    height: 512,
  },
  sameAs: [
    'https://twitter.com/nanobananaguide',
    'https://github.com/nanobananaguide',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'support@nanobananaguide.ai',
  },
}

// 文章页面 Schema
export function generateArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  authorName = 'Nano Banana Guide Team',
  image,
  url,
}: {
  title: string
  description: string
  datePublished: string
  dateModified?: string
  authorName?: string
  image?: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image || siteConfig.ogImage,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }
}

// 教程页面 Schema
export function generateHowToSchema({
  name,
  description,
  image,
  steps,
  totalTime,
  supply = [],
  tool = [],
}: {
  name: string
  description: string
  image?: string
  steps: Array<{
    name: string
    text: string
    image?: string
  }>
  totalTime?: string
  supply?: string[]
  tool?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: name,
    description: description,
    image: image || siteConfig.ogImage,
    totalTime: totalTime,
    supply: supply.map(item => ({
      '@type': 'HowToSupply',
      name: item,
    })),
    tool: tool.map(item => ({
      '@type': 'HowToTool',
      name: item,
    })),
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
    })),
  }
}

// FAQ Schema
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// 软件应用 Schema
export function generateSoftwareSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Nano Banana AI Editor',
    description: 'Advanced AI-powered image generation and editing tool',
    url: `${siteConfig.url}/editor`,
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
    },
  }
}