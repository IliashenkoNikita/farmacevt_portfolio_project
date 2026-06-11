import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const supported = ["uk", "ru", "en"];
const buckets = new Map<string, { count: number; reset: number }>();

function limited(key: string, max = 60, windowMs = 60_000) {
  const now = Date.now();
  const bucket = buckets.get(key);
  if (!bucket || bucket.reset < now) {
    buckets.set(key, { count: 1, reset: now + windowMs });
    return false;
  }
  bucket.count += 1;
  return bucket.count > max;
}

function redirectTo(request: NextRequest, path: string) {
  const url = request.nextUrl.clone();
  url.pathname = path;
  url.search = "";
  return NextResponse.redirect(url);
}

export function middleware(request: NextRequest) {
  try {
    const path = request.nextUrl.pathname;
    if (path.startsWith("/_next") || path.includes(".")) {
      return NextResponse.next();
    }

    if (path === "/") return redirectTo(request, "/uk");

    const [, locale, ...routeParts] = path.split("/");
    if (!supported.includes(locale)) {
      return redirectTo(request, "/uk" + path);
    }

    const route = "/" + routeParts.join("/");
    const forwardedFor = request.headers.get("x-forwarded-for") ?? "local";
    const key = forwardedFor.split(",")[0].trim() + ":" + path;

    if (
      (route.startsWith("/auth") ||
        route.startsWith("/certificate/verify") ||
        route.includes("/tests")) &&
      limited(key, 30)
    ) {
      return new NextResponse("Rate limit exceeded", { status: 429 });
    }

    const session = request.cookies.get("holos-session")?.value;
    const role = request.cookies.get("holos-role")?.value;

    if (route.startsWith("/cabinet") && !session) {
      return redirectTo(request, "/" + locale + "/auth/sign-in");
    }

    if (
      route.startsWith("/admin") &&
      role !== "ADMIN" &&
      role !== "SUPER_ADMIN"
    ) {
      return redirectTo(request, "/" + locale + "/auth/sign-in");
    }

    return NextResponse.next();
  } catch {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt).*)"],
};
