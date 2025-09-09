
import type { MetadataRoute } from 'next'
import { opponents } from '@/data/opponents'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://nanobananaguide.ai'
  const staticRoutes = [
    '/', '/guide/what-is-nano-banana', '/guide/101',
    '/tutorials/get-started', '/compare', '/cases/ecommerce-main-image',
    '/faq/watermark-and-policy'
  ]
  const pages = staticRoutes.map(p => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: p === '/' ? 1 : 0.8
  }))
  const compares = opponents.map(o => ({
    url: `${base}/compare/${o.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7
  }))
  return [...pages, ...compares]
}
