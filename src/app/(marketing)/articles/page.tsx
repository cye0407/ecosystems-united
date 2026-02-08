import Link from "next/link";
import type { Metadata } from "next";
import { guideCategories } from "@/lib/article-metadata";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Practical sustainability guides for agricultural businesses and SMEs. Problem-focused content that helps you implement, not just understand.",
};

export default function GuidesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Guides</h1>
        <p className="text-xl text-gray-600 mb-4">
          Practical sustainability guides for agricultural businesses and SMEs.
          Problem-focused content that helps you implement, not just understand.
        </p>
        <p className="text-gray-600">
          Every guide connects back to the{" "}
          <Link href="/framework" className="text-primary hover:underline">
            Five Stacks Framework
          </Link>
          —because sustainability that doesn&apos;t improve operations isn&apos;t sustainable.
        </p>
      </div>

      {/* Featured: Implementation Guide */}
      <div className="mb-12">
        <Link
          href="/framework/implementation"
          className="block p-6 bg-gradient-to-r from-[#1a1a2e] to-[#2d2d4a] rounded-lg text-white hover:opacity-95 transition-opacity"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs bg-primary text-white px-2 py-1 rounded">
              Pillar Guide
            </span>
          </div>
          <h2 className="text-2xl font-bold mb-2">
            Five Stacks Implementation Guide
          </h2>
          <p className="text-white/70 mb-3">
            The complete guide to implementing the Five Stacks Framework.
            Economic data, case studies, decision matrix, 12-month roadmap, and
            funding resources.
          </p>
          <span className="text-primary font-medium">Read the full guide →</span>
        </Link>
      </div>

      {/* Interactive Tools callout */}
      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              Want to assess your operation?
            </h2>
            <p className="text-gray-600">
              Take our interactive assessments to identify where you are and
              what to focus on next.
            </p>
          </div>
          <Link
            href="/tools"
            className="inline-block bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-primary-dark transition-colors whitespace-nowrap"
          >
            View Tools →
          </Link>
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-12">
        {guideCategories.map((category) => (
          <section key={category.name}>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {category.name}
              </h2>
              <p className="text-gray-600">{category.description}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.guides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/articles/${guide.slug}`}
                  className="flex flex-col p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors group h-28"
                >
                  <h3 className="font-medium text-gray-900 group-hover:text-primary transition-colors mb-1 line-clamp-2">
                    {guide.title} →
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {guide.desc}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Framework CTA */}
      <div className="mt-16 p-8 bg-[#1a1a2e] rounded-lg text-white">
        <h2 className="text-2xl font-bold mb-3">Looking for structure?</h2>
        <p className="text-white/80 mb-6">
          These guides provide depth on specific topics. The Five Stacks
          Framework shows how they connect into a systematic approach to
          sustainability that builds competitive advantage.
        </p>
        <Link
          href="/framework"
          className="inline-block bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-primary-dark transition-colors"
        >
          Explore the Framework →
        </Link>
      </div>
    </div>
  );
}
