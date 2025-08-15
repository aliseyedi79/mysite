// import createMiddleware from 'next-intl/middleware';
// import { routing } from './i18n/routing';
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
//
// export default createMiddleware(routing);
//
// export const config = {
//   // Match all pathnames except for
//   // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
//   // - … the ones containing a dot (e.g. `favicon.ico`)
//   matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
// };

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '' || pathname === '/') {
    return NextResponse.redirect(new URL('/fa', request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
