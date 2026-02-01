import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only protect dashboard pages
  if (pathname.startsWith("/dashboard")) {
    const userSession = req.cookies.get("user_session");

    if (!userSession) {
      // User not logged in → redirect to home
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

// Apply middleware only to /dashboard paths
export const config = {
  matcher: ["/dashboard/:path*"], // protects all /dashboard/* routes
};
