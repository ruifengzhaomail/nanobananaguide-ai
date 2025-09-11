
import type { MetadataRoute } from 'next'
import { opponents } from '@/data/opponents'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://nanobananaguide.ai'
  const staticRoutes = [
    // 核心页面
    '/',
    '/guide/what-is-nano-banana',
    '/guide/101',
    '/tutorials/get-started',
    
    // 比较页面
    '/compare',
    
    // 案例页面
    '/cases',
    '/cases/ecommerce-main-image',
    '/cases/product-photography',
    '/cases/social-media',
    '/cases/content-creation',
    
    // FAQ页面
    '/faq',
    '/faq/watermark-and-policy',
    '/faq/pricing',
    '/faq/technical-support',
    
    // 编辑器页面
    '/editor',
    '/image-editor',
    '/text-to-image',
    
    // 工具箱页面
    '/toolbox',
    
    // 展示页面
    '/showcase',
    
    // 定价页面
    '/pricing',
    
    // 新闻订阅
    '/newsletter',
    
    // API文档
    '/api-docs',
    
    // 博客/资源页面
    '/blog',
    '/resources',
    '/tutorials'
  ]
  const pages = staticRoutes.map(p => {
    let priority = 0.8
    let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly'
    
    // 设置优先级和更新频率
    if (p === '/') {
      priority = 1.0
      changeFrequency = 'daily'
    } else if (p.startsWith('/guide/') || p.startsWith('/tutorials/')) {
      priority = 0.9
      changeFrequency = 'weekly'
    } else if (p.startsWith('/cases/') || p === '/editor' || p === '/image-editor' || p === '/text-to-image') {
      priority = 0.8
      changeFrequency = 'weekly'
    } else if (p.startsWith('/faq/') || p === '/compare') {
      priority = 0.7
      changeFrequency = 'monthly'
    } else if (p === '/blog' || p === '/resources') {
      priority = 0.8
      changeFrequency = 'daily'
    } else if (p === '/toolbox' || p === '/showcase' || p === '/pricing') {
      priority = 0.7
      changeFrequency = 'weekly'
    } else if (p === '/newsletter') {
      priority = 0.6
      changeFrequency = 'monthly'
    }
    
    return {
      url: `${base}${p}`,
      lastModified: new Date(),
      changeFrequency,
      priority
    }
  })
  const compares = opponents.map(o => ({
    url: `${base}/compare/${o.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7
  }))
  return [...pages, ...compares]
}
