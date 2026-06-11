import { NextRequest, NextResponse } from "next/server";
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
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  if (path.startsWith("/_next") || path.includes("."))
    return NextResponse.next();
  if (path === "/") return NextResponse.redirect(new URL("/uk", request.url));
  const locale = path.split("/")[1];
  if (!supported.includes(locale))
    return NextResponse.redirect(new URL("/uk" + path, request.url));
  const route = "/" + path.split("/").slice(2).join("/");
  const key = (request.headers.get("x-forwarded-for") ?? "local") + ":" + path;
  if (
    (route.startsWith("/auth") ||
      route.startsWith("/certificate/verify") ||
      route.includes("/tests")) &&
    limited(key, 30)
  )
    return new NextResponse("Rate limit exceeded", { status: 429 });
  const session = request.cookies.get("holos-session")?.value;
  const role = request.cookies.get("holos-role")?.value;
  if (route.startsWith("/cabinet") && !session)
    return NextResponse.redirect(
      new URL("/" + locale + "/auth/sign-in", request.url),
    );
  if (route.startsWith("/admin") && role !== "ADMIN" && role !== "SUPER_ADMIN")
    return NextResponse.redirect(
      new URL("/" + locale + "/auth/sign-in", request.url),
    );
  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
