import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Five Stacks Framework",
  description:
    "A systematic approach to sustainability that builds competitive advantage. Transform compliance burden into operational excellence.",
};

const stacks = [
  {
    num: 1,
    title: "Core Metrics",
    slug: "stack-1-metrics",
    color: "#3D2E7C",
    principle: "If it can't be measured, it can't be defended",
    outcome: "Defensible baseline data for emissions, energy, water, waste, land use",
  },
  {
    num: 2,
    title: "Operational Efficiency",
    slug: "stack-2-efficiency",
    color: "#5B4A9E",
    principle: "Fix leaks before adding new initiatives",
    outcome: "Data reveals patterns—where margins leak, where processes waste",
  },
  {
    num: 3,
    title: "Circular Value Creation",
    slug: "stack-3-circularity",
    color: "#7B6BB8",
    principle: "What you discard can become margin",
    outcome: "Transform insights into strategic advantages",
  },
  {
    num: 4,
    title: "Adaptive Resilience",
    slug: "stack-4-resilience",
    color: "#9A8CD0",
    principle: "Systems must absorb shocks without breaking",
    outcome: "Multiple value streams so you're not dependent on one thing",
  },
  {
    num: 5,
    title: "Regenerative Advantage",
    slug: "stack-5-regenerative",
    color: "#B8ADE3",
    principle: "Build systems that improve as they operate",
    outcome: "Organizational capability to steer dynamically",
  },
];

export default function FrameworkPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          The Five Stacks Framework
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          A systematic approach to sustainability that builds competitive
          advantage. Each stack builds on the previous, creating compounding
          capability.
        </p>
        <p className="text-gray-600">
          Most sustainability frameworks focus on reporting what you already do.
          Five Stacks focuses on building operational capability—turning
          compliance burden into genuine business advantage.
        </p>
      </div>

      {/* Core Philosophy */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16 max-w-3xl">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Core Philosophy
        </h2>
        <blockquote className="text-xl text-gray-700 italic border-l-4 border-accent pl-4">
          &ldquo;Your operations are an ecosystem. Ecosystems don&apos;t survive by being
          efficient—they survive by being adaptive.&rdquo;
        </blockquote>
        <p className="text-gray-600 mt-4">
          Sustainability isn&apos;t a target. It&apos;s the capacity to respond appropriately
          to context. The Five Stacks build that capacity systematically.
        </p>
      </div>

      {/* Stacks Grid */}
      <div className="space-y-6 mb-16">
        {stacks.map((stack) => (
          <Link
            key={stack.num}
            href={`/framework/${stack.slug}`}
            className="block p-6 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors group"
          >
            <div className="flex items-start gap-6">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0"
                style={{ backgroundColor: stack.color }}
              >
                {stack.num}
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {stack.title}
                  </h3>
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </div>
                <p className="text-gray-600 italic mb-2">{stack.principle}</p>
                <p className="text-sm text-gray-500">{stack.outcome}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Implementation CTA */}
      <div className="bg-[#1a1a2e] rounded-lg p-8 text-white">
        <h2 className="text-2xl font-bold mb-3">Ready to implement?</h2>
        <p className="text-white/80 mb-6">
          The Implementation Guide provides the complete roadmap: economic data,
          case studies, decision frameworks, 12-month timeline, and funding
          resources.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link
            href="/framework/implementation"
            className="inline-block bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-primary-dark transition-colors"
          >
            Read Implementation Guide →
          </Link>
          <Link
            href="/tools/stack-assessment"
            className="inline-block bg-white/10 text-white px-6 py-3 rounded font-semibold hover:bg-white/20 transition-colors"
          >
            Take the Assessment
          </Link>
        </div>
      </div>
    </div>
  );
}
