import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Does CSRD Affect Your Farm?",
  description:
    "What the EU Corporate Sustainability Reporting Directive means for agricultural businesses. Plain-language guides on CSRD, VSME, and Scope 1-2-3.",
};

const guides = [
  {
    href: "/articles/csrd-vsme-agricultural-suppliers",
    title: "What the regulations say",
    desc: "CSRD and VSME decoded for agricultural suppliers. What applies to you and what doesn't.",
  },
  {
    href: "/articles/scope-1-2-3-agriculture",
    title: "Emissions categories explained",
    desc: "Scope 1, 2, and 3 in plain language, with examples from farm operations.",
  },
  {
    href: "/articles/esg-reporting-small-farms",
    title: "The 80/20 starting guide",
    desc: "You don't need to report on everything. Here's what actually matters for small farms.",
  },
  {
    href: "/articles/building-baseline",
    title: "From gut feel to defensible data",
    desc: "How to go from 'we think we're OK' to numbers you can stand behind.",
  },
];

export default function CSRDPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <nav className="mb-10">
        <Link
          href="/articles"
          className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#3D2E7C] transition-colors"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            &larr;
          </span>{" "}
          Back to Guides
        </Link>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Does CSRD affect your farm?
      </h1>

      <div className="prose prose-gray max-w-none mb-12">
        <p className="text-lg text-gray-600">
          The Corporate Sustainability Reporting Directive is cascading through
          European supply chains. Even if you&apos;re not directly in scope, your
          buyers probably are &mdash; and their reporting requirements flow
          downstream to you. Here&apos;s what it actually means for your
          operation.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-sm font-semibold text-[#3D2E7C] uppercase tracking-wide mb-4">
          Start here
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Read these in order &mdash; each builds on the last.
        </p>
        <div className="space-y-4">
          {guides.map((guide, i) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group flex items-start gap-4 p-5 rounded-lg border border-gray-200 hover:border-[#3D2E7C]/40 hover:shadow-sm transition-all"
            >
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#3D2E7C] text-white text-sm font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 group-hover:text-[#3D2E7C] transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{guide.desc}</p>
              </div>
              <span className="text-gray-300 group-hover:text-[#3D2E7C] transition-colors mt-1">
                &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <div className="p-8 rounded-lg text-white" style={{ backgroundColor: "#1a1a2e" }}>
        <h2 className="text-2xl font-bold mb-3">
          See where your operation stands
        </h2>
        <p className="text-white/80 mb-6">
          The Stack 1 assessment maps your current data across 8 operational
          domains. It shows you what you already have and what you&apos;d need
          for CSRD-aligned reporting.
        </p>
        <Link
          href="/tools/metrics-assessment"
          className="inline-block px-6 py-3 rounded font-semibold transition-colors"
          style={{ backgroundColor: "#3D2E7C", color: "#fff" }}
        >
          Take the Stack 1 Assessment
        </Link>
        <p className="text-sm text-white/60 mt-3">
          5 minutes. No signup. See where you stand.
        </p>
      </div>
    </div>
  );
}
