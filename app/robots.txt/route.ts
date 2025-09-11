
import { NextResponse } from 'next/server'
export function GET() {
  return new Response(
    `# Robots.txt for nanobananaguide.ai
# 允许所有搜索引擎爬取

User-agent: *
Allow: /

# 优先爬取重要页面
Allow: /image-editor
Allow: /editor
Allow: /guide/
Allow: /tutorials/
Allow: /cases/
Allow: /faq/

# 禁止爬取的目录
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /private/
Disallow: /*.json$
Disallow: /*?*utm_*
Disallow: /*?*fbclid*
Disallow: /*?*gclid*

# 站点地图位置
Sitemap: https://nanobananaguide.ai/sitemap.xml

# 爬取延迟（毫秒）
Crawl-delay: 1

# 特定搜索引擎优化
User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: Baiduspider
Allow: /
Crawl-delay: 2

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /`,
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  )
}
