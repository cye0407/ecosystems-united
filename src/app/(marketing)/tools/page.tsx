import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Free interactive tools to assess your operation, find efficiency gains, and build sustainability capability.",
};

const stackAssessments = [
  {
    name: "Stack 1: The Defensible Baseline",
    description:
      "Do you have visibility into your operation? Evaluate your baseline data, tracking, and measurement capability.",
    href: "/tools/metrics-assessment",
    color: "#3D2E7C",
    number: 1,
  },
  {
    name: "Stack 2: Operational Efficiency",
    description:
      "Where are you bleeding margin? Identify operational leaks, waste, and redundancy across your processes.",
    href: "/tools/efficiency-assessment",
    color: "#5B4A9E",
    number: 2,
  },
  {
    name: "Stack 3: Margin Recovery",
    description:
      "What value is leaving your system uncaptured? Map waste streams, idle assets, and monetization opportunities.",
    href: "/tools/circularity-assessment",
    color: "#7B6BB8",
    number: 3,
  },
  {
    name: "Stack 4: Structural Resilience",
    description:
      "How fragile is your operation? Evaluate single points of failure, concentration risk, and contingency planning.",
    href: "/tools/resilience-assessment",
    color: "#9A8CD0",
    number: 4,
  },
  {
    name: "Stack 5: The Compounding Engine",
    description:
      "Can you prove your advantage? Assess your positioning, certifications, and ability to command premium pricing.",
    href: "/tools/regeneration-assessment",
    color: "#B8ADE3",
    number: 5,
  },
];

const calculators = [
  {
    name: "Energy Efficiency ROI Calculator",
    description:
      "Input your energy consumption and see exactly what efficiency improvements would save you — in euros and CO₂.",
    href: "/tools/energy-calculator",
    status: "available" as const,
  },
  {
    name: "Soil Health Checklist",
    description:
      "A practical checklist for assessing and tracking soil health indicators on your operation.",
    href: "/tools/soil-health-checklist",
    status: "available" as const,
  },
  {
    name: "Full Stack Assessment",
    description:
      "Evaluate where your operation sits across all five stacks. Get a complete picture and prioritize next steps.",
    href: "/tools/stack-assessment",
    status: "available" as const,
  },
];

const comingSoon = [
  {
    name: "Response Generator",
    description:
      "Upload sustainability questionnaires and generate answers from your operational data.",
    href: "/tools",
    status: "coming-soon" as const,
  },
  {
    name: "Baseline Calculator",
    description:
      "Calculate baseline metrics for emissions, energy, water, and waste across your operation.",
    href: "/tools",
    status: "coming-soon" as const,
  },
];

export default function ToolsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Tools</h1>
        <p className="text-xl text-gray-600">
          Free interactive tools to assess your operation, find efficiency
          gains, and build sustainability capability.
        </p>
      </div>

      {/* Diagnostic Quiz — featured */}
      <div className="mb-16">
        <Link
          href="/tools/diagnostic-quiz"
          className="block p-8 rounded-lg border-2 border-[#3D2E7C] bg-[#3D2E7C]/5 hover:bg-[#3D2E7C]/10 transition-colors group"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold text-white bg-[#3D2E7C] px-2.5 py-0.5 rounded-full">
              Start here
            </span>
            <span className="text-xs text-gray-500">2 minutes</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#3D2E7C] transition-colors mb-2">
            Where Should You Start?
          </h2>
          <p className="text-gray-600">
            7 questions to find out which part of your operation needs attention
            first. Get a personalised starting point across all five stacks.
          </p>
        </Link>
      </div>

      {/* Stack Assessments */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Stack Assessments
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {stackAssessments.map((tool) => (
          <Link
            key={tool.name}
            href={tool.href}
            className="block p-5 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors group"
          >
            <div className="flex items-start gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5"
                style={{ backgroundColor: tool.color }}
              >
                {tool.number}
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary transition-colors mb-1">
                  {tool.name}
                </h3>
                <p className="text-sm text-gray-600">{tool.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Calculators & Checklists */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Calculators &amp; Checklists
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {calculators.map((tool) => (
          <Link
            key={tool.name}
            href={tool.href}
            className="block p-6 border border-gray-200 rounded-lg hover:border-primary transition-colors group"
          >
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors mb-2">
              {tool.name}
            </h3>
            <p className="text-sm text-gray-600">{tool.description}</p>
          </Link>
        ))}
      </div>

      {/* Coming Soon */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Coming Soon</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {comingSoon.map((tool) => (
          <div
            key={tool.name}
            className="p-6 border border-gray-200 rounded-lg opacity-60"
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-semibold text-gray-900">
                {tool.name}
              </h3>
              <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded">
                Coming Soon
              </span>
            </div>
            <p className="text-sm text-gray-600">{tool.description}</p>
          </div>
        ))}
      </div>

      {/* App CTA */}
      <div className="mt-16 p-8 bg-primary/5 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Full toolkit coming soon
        </h2>
        <p className="text-gray-600">
          The Ecosystems United app will include the complete Response Generator,
          data entry for all 8 operational domains, progress tracking, and
          export tools.
        </p>
      </div>
    </div>
  );
}
