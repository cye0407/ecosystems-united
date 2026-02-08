import ArticleSchemaAndTags from "@/components/marketing/ArticleSchemaAndTags";

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ArticleSchemaAndTags />
    </>
  );
}
