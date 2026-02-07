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
    return [...wordpressRedirects, ...withTrailingSlash];
  },
};

export default nextConfig;
