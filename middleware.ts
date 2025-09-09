
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl
  const host = req.headers.get('host') || ''

  if (host === 'www.nanobananaguide.ai') {
    url.host = 'nanobananaguide.ai'
    return NextResponse.redirect(url, 301)
  }
  if (host === 'nanobanana-howto.com' || host === 'www.nanobanana-howto.com') {
    url.hostname = 'nanobananaguide.ai'
    url.protocol = 'https'
    url.pathname = '/tutorials/get-started'
    url.search = ''
    return NextResponse.redirect(url, 301)
  }
  if (host === 'nanobanana101.com' || host === 'www.nanobanana101.com') {
    url.hostname = 'nanobananaguide.ai'
    url.protocol = 'https'
    url.pathname = '/guide/101'
    url.search = ''
    return NextResponse.redirect(url, 301)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|robots.txt|sitemap.xml|assets|prompts).*)"],
}
