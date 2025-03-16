import { NextRequest, NextResponse } from 'next/server';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { i18n } from './src/i18n-config';

// Use the locales from i18n-config
const locales = i18n.locales;
const defaultLocale = i18n.defaultLocale;

// Get the preferred locale from the request
function getLocale(request: NextRequest): string {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get the best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  
  // If no languages are found, use the default locale
  if (!languages || languages.length === 0) {
    languages = [defaultLocale];
  }

  return matchLocale(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Skip for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('/favicon.ico') ||
    pathname.includes('.') // Skip files with extensions
  ) {
    return;
  }
  
  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale in the pathname
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    
    // e.g. incoming request is /products
    // The new URL is /en/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}; 