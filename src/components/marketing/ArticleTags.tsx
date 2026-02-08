import type { ArticleMeta } from "@/lib/article-metadata";

export default function ArticleTags({ meta }: { meta: ArticleMeta }) {
  return (
    <div className="max-w-3xl mx-auto px-6 pb-8">
      <div className="pt-6 border-t border-gray-100">
        <div className="flex flex-wrap gap-2">
          <span
            className="px-3 py-1 text-xs font-medium rounded-full border"
            style={{ borderColor: meta.stackColor, color: meta.stackColor }}
          >
            {meta.stack}
          </span>
          <span
            className="px-3 py-1 text-xs font-medium rounded-full text-white"
            style={{ backgroundColor: meta.categoryColor }}
          >
            {meta.category}
          </span>
          {meta.keywords.slice(0, 6).map((keyword) => (
            <span
              key={keyword}
              className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
