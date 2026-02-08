import type { ArticleMeta } from "@/lib/article-metadata";

const BASE_URL = "https://ecosystemsunited.com";

export default function ArticleJsonLd({ meta }: { meta: ArticleMeta }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    author: {
      "@type": "Organization",
      name: "Ecosystems United",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Ecosystems United",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
    datePublished: meta.datePublished,
    dateModified: meta.datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/articles/${meta.slug}`,
    },
    keywords: meta.keywords.join(", "),
    articleSection: meta.category,
    inLanguage: "en",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
