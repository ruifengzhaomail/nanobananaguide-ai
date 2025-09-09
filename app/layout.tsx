
import './globals.css'
import TopNavBar from '@/components/TopNavBar'
import Footer from '@/components/Footer'
import PerformanceMonitor from '@/components/PerformanceMonitor'
import { websiteSchema, organizationSchema } from '@/lib/seo'

export const metadata = {
  metadataBase: new URL('https://nanobananaguide.ai'),
  title: {
    default: 'Nano Banana AI Guide - Complete Tutorial & Best Practices',
    template: '%s | Nano Banana Guide'
  },
  description: 'Master Nano Banana AI with our comprehensive guide. Learn advanced techniques, best practices, and real-world use cases for AI image generation.',
  keywords: [
    'Nano Banana AI tutorial',
    'AI image generation guide', 
    'Gemini 2.5 Flash Image',
    'AI image editing',
    'artificial intelligence tools',
    'image to image AI',
    'text to image generation',
    'AI art creation',
    'machine learning images',
    'digital art AI'
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
    locale: 'en_US',
    url: 'https://nanobananaguide.ai',
    title: 'Nano Banana AI Guide - Complete Tutorial & Best Practices',
    description: 'Master Nano Banana AI with our comprehensive guide. Learn advanced techniques, best practices, and real-world use cases for AI image generation.',
    siteName: 'Nano Banana Guide AI',
    images: [
      {
        url: '/og-image.jpg',
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
    images: ['/og-image.jpg'],
    creator: '@nanobananaguide',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://nanobananaguide.ai',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [websiteSchema, organizationSchema]
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
        />
        <link rel="canonical" href="https://nanobananaguide.ai" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <PerformanceMonitor />
        <TopNavBar />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
