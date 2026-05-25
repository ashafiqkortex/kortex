import { NextRequest, NextResponse } from "next/server";
import { COMING_SOON_HTML } from "@/lib/coming-soon";

// While the site is in pre-launch, the apex domain (kortexconsulting.com)
// serves a coming-soon page. The Next.js app continues to serve normally
// on all other hosts — staging.kortexconsulting.com, *.workers.dev,
// localhost during dev, etc.
//
// To FLIP the apex to the full site:
//   1. Delete this file (or set APEX_HOST to something that won't match)
//   2. Commit + push — Cloudflare Workers Builds redeploys automatically
//   3. Visiting kortexconsulting.com will now serve the full Next.js site
const APEX_HOST = "kortexconsulting.com";

export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") || "").toLowerCase();

  if (host === APEX_HOST) {
    return new NextResponse(COMING_SOON_HTML, {
      status: 200,
      headers: {
        "content-type": "text/html; charset=utf-8",
        // Brief cache so a flip propagates within minutes; revisit
        // when the apex moves off the coming-soon page.
        "cache-control": "public, max-age=300, s-maxage=300",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  // Match all paths so any URL under kortexconsulting.com lands on the
  // coming-soon page — nobody should accidentally find /services etc.
  // while we're still pre-launch. Excludes Next.js internals + static
  // assets so the rest of the Worker still functions normally for the
  // staging host on the same project.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
