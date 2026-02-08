"use client";

import { usePathname } from "next/navigation";
import { getArticleMeta } from "@/lib/article-metadata";
import ArticleJsonLd from "./ArticleJsonLd";
import ArticleTags from "./ArticleTags";

export default function ArticleSchemaAndTags() {
  const pathname = usePathname();

  // Extract slug from /articles/some-slug
  const segments = pathname.split("/");
  const slug = segments.length === 3 && segments[1] === "articles" ? segments[2] : null;

  if (!slug) return null;

  const meta = getArticleMeta(slug);
  if (!meta) return null;

  return (
    <>
      <ArticleJsonLd meta={meta} />
      <ArticleTags meta={meta} />
    </>
  );
}
