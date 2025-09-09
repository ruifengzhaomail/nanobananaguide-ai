
import { NextResponse } from 'next/server'
export function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: https://nanobananaguide.ai/sitemap.xml\n`
  return new NextResponse(body, { headers: { 'Content-Type': 'text/plain' } })
}
