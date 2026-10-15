import { NextResponse, type NextRequest } from "next/server";

/**
 * Every page lives under /pt or /en.
 * - "/" goes to the visitor's preferred language.
 * - Old links such as /projects/<slug> keep working (Portuguese by default).
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (/^\/(pt|en)(\/|$)/.test(pathname)) return NextResponse.next();

  const accept = request.headers.get("accept-language")?.toLowerCase() ?? "";
  const locale = pathname === "/" && accept.startsWith("en") ? "en" : "pt";
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/|api/|work/|profile/|cv/|sitemap.xml|robots.txt|favicon.ico|.*\\.[a-z0-9]+$).*)"],
};
