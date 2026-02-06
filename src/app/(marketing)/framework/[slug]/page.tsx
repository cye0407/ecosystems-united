import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const stacks = {
  "stack-1-metrics": {
    num: 1,
    title: "Core Metrics",
    principle: "If it can't be measured, it can't be defended",
    outcome:
      "Know your baseline + understand the external landscape you're operating in",
    description: `You have defensible baseline data for core sustainability metrics (emissions, energy, water, waste, land use). You understand what sustainability requirements mean for your operation, whether that's buyer requests, certification standards, or operational optimization.`,
    keyCapability:
      "Internal data + external context = informed decision-making",
    themes: [
      "What gets measured in agricultural sustainability and why",
      "Building defensible baselines (for any operation size)",
      "Understanding the sustainability landscape",
      "Core metrics explained for agricultural operations",
    ],
    requirement: "None — this is the foundation. Start here.",
    nextStack: "stack-2-efficiency",
    prevStack: null,
    color: "#3D2E7C",
  },
  "stack-2-efficiency": {
    num: 2,
    title: "Operational Efficiency",
    principle: "Fix leaks before adding new initiatives",
    outcome: "Move from passive data collection to informed operational changes",
    description: `Your baseline data reveals patterns specific to your operation. You can identify where YOU waste energy, water, materials. Where YOUR margins leak. Where YOUR processes are inefficient. This isn't reporting for compliance—it's operational intelligence about how your business actually works.`,
    keyCapability:
      "Data becomes actionable intelligence revealing improvement opportunities",
    themes: [
      "Margin leak audits — where you lose profit to 'normal operations'",
      "Energy efficiency analysis and ROI",
      "Waste reduction opportunities",
      "Connecting sustainability metrics to financial performance",
    ],
    requirement: "Stack 1 baseline data — you need something to analyze",
    nextStack: "stack-3-circularity",
    prevStack: "stack-1-metrics",
    color: "#5B4A9E",
  },
  "stack-3-circularity": {
    num: 3,
    title: "Circular Value Creation",
    principle: "What you discard can become margin",
    outcome: "Transform what Stack 2 revealed into strategic advantages",
    description: `You implement based on insights. This could be: waste streams → revenue (byproduct markets), efficiency strength → competitive positioning, social practices → brand advantage, underutilized capacity → new offerings.`,
    keyCapability:
      "Moving from insight to implementation — restructuring operations based on what you learned",
    themes: [
      "Byproduct valorization and waste-to-value pathways",
      "Competitive positioning from efficiency advantages",
      "New revenue models from operational capabilities",
      "Implementation frameworks for circular opportunities",
    ],
    requirement:
      "Stack 2 insights — you need to know what patterns exist before you can transform them",
    nextStack: "stack-4-resilience",
    prevStack: "stack-2-efficiency",
    color: "#7B6BB8",
  },
  "stack-4-resilience": {
    num: 4,
    title: "Adaptive Resilience",
    principle: "Systems must absorb shocks without breaking",
    outcome:
      "Layer multiple value streams so you're not dependent on single crops/products/markets",
    description: `You build operational resilience through portfolio approach. Multiple crops, multiple markets, multiple revenue streams, diversified practices. You're not all-in on one thing that climate, markets, or regulations could disrupt.`,
    keyCapability:
      "Strategic diversification creating operational resilience against shocks",
    themes: [
      "Diversification strategies for agricultural operations",
      "Building flexibility into production systems",
      "Market diversification and risk management",
      "Climate adaptation through operational diversity",
    ],
    requirement:
      "Stack 3 implementations — you're layering additional value streams on top of transformed operations",
    nextStack: "stack-5-regenerative",
    prevStack: "stack-3-circularity",
    color: "#9A8CD0",
  },
  "stack-5-regenerative": {
    num: 5,
    title: "Regenerative Advantage",
    principle: "Build systems that improve as they operate",
    outcome:
      "Organizational capability to steer dynamically across your value portfolio",
    description: `You have a polyculture of value streams and the organizational capability to shift emphasis based on conditions. Markets shift → you adjust production mix. Climate patterns change → you emphasize resilient crops. You can navigate because you deeply know your business and have options.`,
    keyCapability:
      "Strategic agility — sensing changes and steering operations responsively",
    themes: [
      "Decision frameworks for dynamic steering",
      "Sensing mechanisms for market/climate/regulatory shifts",
      "Organizational learning and adaptation capability",
      "Long-term regenerative positioning",
    ],
    requirement:
      "Stacks 2-4 — you need insights, implementations, and diversification before you can navigate strategically",
    nextStack: null,
    prevStack: "stack-4-resilience",
    color: "#B8ADE3",
  },
};

type StackKey = keyof typeof stacks;

export function generateStaticParams() {
  return Object.keys(stacks).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const stack = stacks[slug as StackKey];
  if (!stack) return { title: "Not Found" };

  return {
    title: `Stack ${stack.num}: ${stack.title}`,
    description: stack.description.slice(0, 160),
  };
}

export default async function StackPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const stack = stacks[slug as StackKey];

  if (!stack) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link href="/framework" className="text-primary hover:underline text-sm">
          ← Back to Framework
        </Link>
      </div>

      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="text-accent font-semibold mb-2">Stack {stack.num}</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{stack.title}</h1>
        <p className="text-xl text-gray-600 italic">{stack.principle}</p>
      </div>

      {/* Content */}
      <div className="max-w-3xl space-y-12">
        {/* Outcome */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Outcome</h2>
          <p className="text-gray-600">{stack.outcome}</p>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            What this means
          </h2>
          <p className="text-gray-600">{stack.description}</p>
        </div>

        {/* Key Capability */}
        <div
          className="border-l-4 pl-4"
          style={{ borderColor: stack.color }}
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Key capability
          </h2>
          <p className="text-gray-700">{stack.keyCapability}</p>
        </div>

        {/* Content Themes */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            Content themes
          </h2>
          <ul className="space-y-2">
            {stack.themes.map((theme, i) => (
              <li key={i} className="text-gray-600 flex items-start gap-2">
                <span className="text-primary">•</span>
                {theme}
              </li>
            ))}
          </ul>
        </div>

        {/* Requirement */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            Implementation requirement
          </h2>
          <p className="text-gray-600">{stack.requirement}</p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between pt-8 border-t border-gray-200">
          {stack.prevStack ? (
            <Link
              href={`/framework/${stack.prevStack}`}
              className="text-primary hover:underline"
            >
              ← Previous Stack
            </Link>
          ) : (
            <div />
          )}

          {stack.nextStack ? (
            <Link
              href={`/framework/${stack.nextStack}`}
              className="text-primary hover:underline"
            >
              Next Stack →
            </Link>
          ) : (
            <span className="text-gray-400">You&apos;ve reached the top</span>
          )}
        </div>
      </div>
    </div>
  );
}
