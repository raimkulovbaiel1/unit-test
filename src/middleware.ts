import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Rewrite /Navigation на /navigation (URL остается /Navigation, но контент из /navigation)
  if (pathname === '/Navigation') {
    return NextResponse.rewrite(new URL('/navigation', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/Navigation',
}

