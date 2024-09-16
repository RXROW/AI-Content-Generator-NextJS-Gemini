import { NextResponse } from 'next/server';
import { clerkMiddleware } from "@clerk/nextjs/server";

// Define the protected routes
const isProtectedRoute = (pathname: string) => {
  return pathname === '/' || pathname.startsWith('/dashboard');
};

// Main middleware function
export default clerkMiddleware((auth, req) => {
  const { pathname } = req.nextUrl; // Extract the pathname from the request
  const { userId }:any = auth;          // Get the userId from ClerkMiddlewareAuth

  console.log("Middleware is running for:", pathname);  // Log the current path

  // Check if the route is protected and user is unauthenticated
  if (isProtectedRoute(pathname) && !userId) {
    console.log("User is not authenticated, redirecting to /sign-in");

    // Temporary check: return a custom message instead of redirecting
    return new NextResponse('Middleware is working: User not authenticated', { status: 401 });

 
  }

  // Allow the request to continue if authenticated or not a protected route
  console.log("User is authenticated or accessing a non-protected route.");
  return NextResponse.next();
});

// Middleware configuration for applying routes
export const config = {
  matcher: [
    '/',                      // Home page
    '/dashboard/:path*',       // Dashboard and all its sub-paths
    '/api/:path*',             // API routes
  ],
};
