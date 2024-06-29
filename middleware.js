import { NextResponse } from 'next/server'

export function middleware(request) {
  console.log('Middleware running for URL:', request.nextUrl.pathname);
  
  const userCookie = request.cookies.get('user')
  console.log('User cookie:', userCookie);

  let isLoggedIn = false;
  if (userCookie && userCookie.value) {
    try {
      const userData = JSON.parse(userCookie.value);
      isLoggedIn = !!userData.accessToken;
    } catch (error) {
      console.error('Error parsing user cookie:', error);
    }
  }

  // Protect routes that start with /dashboard
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  // Redirect logged-in users away from login/register pages
  if (isLoggedIn && (request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/register')) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/register'],
}