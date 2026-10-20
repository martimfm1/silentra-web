import { NextRequest, NextResponse } from "next/server";

const LEGACY_HOSTS = new Set(["silentra.vercel.app"]);
const CANONICAL_HOST = "www.silentra.me";

export function proxy(request: NextRequest) {
  const hostname = request.nextUrl.hostname.toLowerCase();

  if (!LEGACY_HOSTS.has(hostname)) {
    return NextResponse.next();
  }

  // Only redirect navigational requests. Do not rewrite POST/server-action
  // requests sent to a legacy deployment alias.
  if (request.method !== "GET" && request.method !== "HEAD") {
    return NextResponse.next();
  }

  const destination = request.nextUrl.clone();
  destination.protocol = "https:";
  destination.hostname = CANONICAL_HOST;
  destination.port = "";

  return NextResponse.redirect(destination, 308);
}
