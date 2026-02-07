import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard", "/data", "/exports", "/respond", "/settings", "/onboarding", "/login", "/signup", "/forgot-password"],
      },
    ],
    sitemap: "https://ecosystemsunited.com/sitemap.xml",
  };
}
