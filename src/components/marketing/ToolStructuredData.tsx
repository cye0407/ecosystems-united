const BASE_URL = "https://ecosystemsunited.com";

/**
 * Emits SoftwareApplication + BreadcrumbList JSON-LD for a /tools/* page.
 * Server component — rendered from each tool's layout.tsx alongside its metadata
 * export. Makes the free tools eligible for rich app results and SERP breadcrumbs.
 */
export default function ToolStructuredData({
  slug,
  name,
  description,
}: {
  slug: string;
  name: string;
  description: string;
}) {
  const url = `${BASE_URL}/tools/${slug}`;

  const softwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    // All tools listed here are free.
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    provider: {
      "@type": "Organization",
      name: "Ecosystems United",
      url: BASE_URL,
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Tools", item: `${BASE_URL}/tools` },
      { "@type": "ListItem", position: 3, name, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
