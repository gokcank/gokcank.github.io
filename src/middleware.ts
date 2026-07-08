import createMiddleware from 'next-intl/middleware';

export default function middleware(req: any) {
  return createMiddleware({
    locales: ['tr', 'en'],
    defaultLocale: 'tr'
  })(req);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
