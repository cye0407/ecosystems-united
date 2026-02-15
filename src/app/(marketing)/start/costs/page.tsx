import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Input Costs Eating Your Margins?",
  description:
    "You can't fix what you can't see. Guides on measuring operational efficiency, finding hidden costs, and building a defensible baseline.",
};

const guides = [
  {
    href: "/articles/value-chains-economic-efficiency",
    title: "Where value gets lost",
    desc: "Map your value chain and find where margin disappears between inputs and outputs.",
  },
  {
    href: "/articles/what-gets-measured",
    title: "The core metrics that matter",
    desc: "The measurements that appear on every buyer questionnaire and every efficiency audit.",
  },
  {
    href: "/articles/building-baseline",
    title: "90 days to a defensible baseline",
    desc: "A practical timeline for going from guesswork to real operational data.",
  },
  {
    href: "/articles/esg-competitive-advantage",
    title: "Turn compliance into margin",
    desc: "The same data that answers buyer questionnaires also reveals where you're bleeding money.",
  },
];

export default function CostsPage() {
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
        Input costs eating your margins?
      </h1>

      <div className="prose prose-gray max-w-none mb-12">
        <p className="text-lg text-gray-600">
          Energy, materials, labour, logistics &mdash; costs are rising and
          margins are shrinking. The instinct is to cut, but you can&apos;t fix
          what you can&apos;t see. Measurement comes before optimisation. Build
          visibility into your operation first, then you&apos;ll know exactly
          where to act.
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
          domains. It shows you where visibility exists and where you&apos;re
          flying blind.
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
