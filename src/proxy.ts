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

export function middleware(req: NextRequest) {
  const ua = req.headers.get("user-agent")?.toLowerCase() ?? "";
  if (ua && BLOCKED_USER_AGENTS.some((bot) => ua.includes(bot))) {
    return new NextResponse("Forbidden", {
      status: 403,
      headers: { "content-type": "text/plain" },
    });
  }
  return NextResponse.next();
}

export const config = {
  // Run on everything except Next internals; robots.txt + sitemap stay public.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
