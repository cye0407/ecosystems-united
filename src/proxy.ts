import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ---------------------------------------------------------------------------
// Edge bot block.
//
// Denies bad-faith / aggressive scraper user-agents with a 403 before any page
// is served. Match is a case-insensitive substring of the User-Agent header.
//
// Kept deliberately tight: legitimate search and SEO crawlers (Googlebot,
// bingbot, SemrushBot, AhrefsBot) are NOT blocked. Add or remove entries below.
// User-agents are trivially spoofable, so this stops honest-but-unwanted bots
// (which is most of them); for a determined abuser, add an IP rule in the
// Vercel Firewall dashboard as well.
// ---------------------------------------------------------------------------

const BLOCKED_USER_AGENTS = [
  "bytespider", // ByteDance / TikTok AI scraper — aggressive, ignores robots.txt, no referral value
  "bytedance",
  // --- uncomment any of these to also block ---
  // "dataforseobot",  // DataForSEO
  // "petalbot",       // Huawei / Petal
  // "mj12bot",        // Majestic
  // "dotbot",         // Moz
  // "blexbot",        // WebMeUp
  // "gptbot",         // OpenAI training crawler (opt out of AI training)
  // "ccbot",          // Common Crawl
  // "claudebot",      // Anthropic training crawler
  // "perplexitybot",  // Perplexity
  // "amazonbot",      // Amazon
];

// ---------------------------------------------------------------------------
// Geo analytics filter.
//
// Traffic from these countries is overwhelmingly data-center scraper egress
// (headless browsers that execute the analytics beacon and show up as
// "visitors"), not audience — the site's ICP is DACH/EU agri. Pages are still
// served normally; the proxy just stamps a cookie that src/lib/analytics.ts
// reads to skip recording site_events, so Supabase numbers reflect humans.
// The cookie is cleared again for non-filtered geos so shared/roaming devices
// don't stay muted. Vercel sets x-vercel-ip-country in production only —
// local dev is never filtered.
// ---------------------------------------------------------------------------

const FILTERED_GEO_COUNTRIES = new Set(["SG"]);
export const GEO_FILTER_COOKIE = "eu_geo_filtered";

export function proxy(req: NextRequest) {
  const ua = req.headers.get("user-agent")?.toLowerCase() ?? "";
  if (ua && BLOCKED_USER_AGENTS.some((bot) => ua.includes(bot))) {
    return new NextResponse("Forbidden", {
      status: 403,
      headers: { "content-type": "text/plain" },
    });
  }

  const country = req.headers.get("x-vercel-ip-country")?.toUpperCase() ?? "";
  const res = NextResponse.next();
  if (FILTERED_GEO_COUNTRIES.has(country)) {
    res.cookies.set(GEO_FILTER_COOKIE, "1", { path: "/", sameSite: "lax" });
  } else if (req.cookies.has(GEO_FILTER_COOKIE)) {
    res.cookies.delete(GEO_FILTER_COOKIE);
  }
  return res;
}

export const config = {
  // Run on everything except Next internals; robots.txt + sitemap stay public.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
