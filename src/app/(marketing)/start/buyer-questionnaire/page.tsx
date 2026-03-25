import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Just Received a Buyer Questionnaire?",
  description:
    "Practical steps when a retailer asks for sustainability data. Where to start, what they're asking for, and how to build a response system.",
};

const guides = [
  {
    href: "/articles/first-esg-questionnaire",
    title: "Where to start",
    desc: "The first steps when a sustainability questionnaire lands on your desk.",
  },
  {
    href: "/articles/buyer-scope-3-request",
    title: "What they're actually asking for",
    desc: "Decoding Scope 3 requests and what data buyers need from you.",
  },
  {
    href: "/articles/missing-esg-data",
    title: "How to respond honestly with gaps",
    desc: "You won't have everything. Here's how to answer without guessing.",
  },
  {
    href: "/articles/building-esg-response-system",
    title: "Build a system, not a one-off",
    desc: "Turn this questionnaire into a repeatable process for the next one.",
  },
];

export default function BuyerQuestionnairePage() {
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
        Just received a buyer questionnaire?
      </h1>

      <div className="prose prose-gray max-w-none mb-12">
        <p className="text-lg text-gray-600">
          A retailer or supply chain partner just asked for your sustainability
          data. You&apos;re not behind &mdash; most agricultural businesses get
          the same request with the same short deadline. You just need a system,
          not a scramble.
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

      <div className="p-8 rounded-lg text-white mb-8" style={{ backgroundColor: "#3D2E7C" }}>
        <h2 className="text-2xl font-bold mb-3">
          Need to respond now?
        </h2>
        <p className="text-white/80 mb-6">
          The Response Generator drafts answers to buyer questionnaires
          directly from your operational data. Upload your questionnaire,
          review the answers, export as CSV. Done.
        </p>
        <Link
          href="/signup"
          className="inline-block px-6 py-3 rounded font-semibold transition-colors bg-white text-[#3D2E7C] hover:bg-white/90"
        >
          Get Started — €39 per questionnaire
        </Link>
        <p className="text-sm text-white/60 mt-3">
          Includes the free baseline tracker across all 8 domains.
        </p>
      </div>

      <div className="p-8 rounded-lg text-white" style={{ backgroundColor: "#1a1a2e" }}>
        <h2 className="text-2xl font-bold mb-3">
          Not ready to respond yet? See where you stand.
        </h2>
        <p className="text-white/80 mb-6">
          The Stack 1 assessment maps your current data across 8 operational
          domains. It shows you exactly what you have and what&apos;s missing.
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
