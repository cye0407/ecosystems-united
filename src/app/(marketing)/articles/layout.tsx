import type { Metadata } from "next";
import ArticleSchemaAndTags from "@/components/marketing/ArticleSchemaAndTags";
import ArticleCTA from "@/components/marketing/ArticleCTA";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Practical sustainability guides for agricultural businesses and SMEs. Problem-focused content that helps you implement, not just understand.",
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ArticleCTA />
      <ArticleSchemaAndTags />
    </>
  );
}
