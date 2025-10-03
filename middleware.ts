import { NextRequest, NextResponse } from 'next/server';
import { getI18nConfig } from './src/app/i18n/i18n-config';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const { locales, defaultLocale } = getI18nConfig();
  
  // Check if the pathname starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameHasLocale) return;
  
  // Redirect to default locale if no locale is present
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};