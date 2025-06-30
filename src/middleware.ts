import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_ROUTES = ['/', '/terms-condition'];
const AUTH_ROUTES = ['/login', '/register', '/forgot-password'];
const DASHBOARD_PROTECTED_PREFIXES = ['/dashboard', '/users'];
const ACCOUNT_PROTECTED_PREFIXES = ['/account']; // add if account needs auth

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('token')?.value; // replace 'token' with your cookie name

  // --- 1. Allow public routes
  if (PUBLIC_ROUTES.includes(pathname)) {
    return NextResponse.next();
  }

  // --- 2. Auth pages: redirect to /dashboard if already logged in
  if (AUTH_ROUTES.includes(pathname) && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // --- 3. Protected routes (dashboard, users)
  const isDashboardProtected = DASHBOARD_PROTECTED_PREFIXES.some(prefix =>
    pathname.startsWith(prefix)
  );
  const isAccountProtected = ACCOUNT_PROTECTED_PREFIXES.some(prefix =>
    pathname.startsWith(prefix)
  );

  if ((isDashboardProtected || isAccountProtected) && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // --- 4. Everything else
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Protect all routes except:
     * - static files
     * - public
     * - auth
     */
    '/((?!_next/static|_next/image|favicon.ico|api).*)',
  ],
};
