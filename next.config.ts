import type { NextConfig } from "next";
import { wordpressRedirects } from "./src/lib/wordpress-redirects";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Experimental features
  experimental: {
    // Enable server actions
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },

  // WordPress → Next.js redirects (SEO preservation)
  // Handles both /slug and /slug/ (trailing slash) patterns
  async redirects() {
    const withTrailingSlash = wordpressRedirects.map((r) => ({
      source: r.source + '/',
      destination: r.destination,
      permanent: r.permanent,
    }));

    // Catch-all patterns (checked after specific redirects)
    const catchAllRedirects = [
      // WordPress date-based permalinks: /2019/11/15/slug → /slug (then caught by wordpress redirects)
      {
        source: '/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug*',
        destination: '/:slug*',
        permanent: true as const,
      },
      // WordPress category pages including /page/N pagination
      {
        source: '/category/:path*',
        destination: '/articles',
        permanent: true as const,
      },
      // WordPress tag archive pages (e.g. /tag/aquaculture, /tag/biofuels)
      {
        source: '/tag/:path*',
        destination: '/articles',
        permanent: true as const,
      },
      // WordPress author archive pages
      {
        source: '/author/:path*',
        destination: '/',
        permanent: true as const,
      },
      // WordPress top-level pagination (e.g. /page/2, /page/3)
      {
        source: '/page/:path*',
        destination: '/articles',
        permanent: true as const,
      },
    ];

    return [...wordpressRedirects, ...withTrailingSlash, ...catchAllRedirects];
  },
};

export default nextConfig;
