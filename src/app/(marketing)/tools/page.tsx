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
  {
    name: "Full Stack Assessment",
    description:
      "Evaluate where your operation sits across all five stacks. Get a complete picture and prioritize next steps.",
    href: "/tools/stack-assessment",
    color: "#4AA88C",
    number: 0,
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

      {/* Hero row: Quiz + Tracker side by side */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {/* Diagnostic Quiz */}
        <Link
          href="/tools/diagnostic-quiz"
          className="p-8 rounded-2xl border-2 border-[#3D2E7C] bg-[#3D2E7C]/5 hover:bg-[#3D2E7C]/10 transition-colors group flex flex-col"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold text-white bg-[#3D2E7C] px-2.5 py-0.5 rounded-full">
              2 minutes
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#3D2E7C] transition-colors mb-3">
            Not sure where to start?
          </h2>
          <p className="text-gray-600 flex-1">
            7 questions to find out which part of your operation needs
            attention first. Get a personalised starting point across all
            five stacks.
          </p>
          <p className="text-[#3D2E7C] font-semibold text-sm mt-4 group-hover:underline">
            Take the quiz &rarr;
          </p>
        </Link>

        {/* Baseline Tracker — flagship */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-[#3D2E7C] to-[#5B4A9E] text-white flex flex-col">
          <h2 className="text-2xl font-bold mb-3">
            Ready to build your baseline?
          </h2>
          <p className="text-white/80 mb-6 flex-1">
            Enter the operational data you already have — energy bills, input
            invoices, waste records. Build a defensible baseline across 8
            domains with auto-calculated emissions and CSV exports. Free
            forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/signup"
              className="inline-block bg-white text-[#3D2E7C] px-5 py-2.5 rounded-lg font-semibold hover:bg-white/90 transition-colors text-center text-sm"
            >
              Start Tracking — Free
            </Link>
            <Link
              href="/tracker"
              className="inline-block border border-white/30 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-white/10 transition-colors text-center text-sm"
            >
              See what&apos;s included
            </Link>
          </div>
        </div>
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
                {tool.number || "✦"}
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

      {/* Response Generator — live */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Response Generator
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <Link
          href="/signup"
          className="p-8 rounded-2xl border-2 border-[#3D2E7C] bg-[#3D2E7C]/5 hover:bg-[#3D2E7C]/10 transition-colors group flex flex-col"
        >
          <span className="text-xs font-semibold text-white bg-[#3D2E7C] px-2.5 py-0.5 rounded-full self-start mb-4">
            €39 one-time
          </span>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#3D2E7C] transition-colors mb-3">
            Upload a questionnaire. Get answers.
          </h3>
          <p className="text-gray-600 flex-1">
            Upload a buyer questionnaire — EcoVadis, CDP, CSRD, or any
            format — and generate draft answers backed by your tracked data.
            Review, edit, and export as CSV. Your baseline does the heavy
            lifting.
          </p>
          <p className="text-[#3D2E7C] font-semibold text-sm mt-4 group-hover:underline">
            Get started &rarr;
          </p>
        </Link>

        <Link
          href="/see-it-in-action"
          className="p-8 rounded-2xl border border-gray-200 hover:border-gray-400 transition-colors group flex flex-col"
        >
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#3D2E7C] transition-colors mb-3">
            See how it works
          </h3>
          <p className="text-gray-600 flex-1">
            See sample questionnaire responses generated from real operational
            data — with confidence scores, data sources, and exportable
            answers.
          </p>
          <p className="text-[#3D2E7C] font-semibold text-sm mt-4 group-hover:underline">
            View demo &rarr;
          </p>
        </Link>
      </div>

      {/* Coming Soon */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Coming Soon</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-8 rounded-2xl border border-gray-200 bg-gray-50 flex flex-col">
          <span className="text-xs font-semibold text-gray-500 bg-gray-200 px-2.5 py-0.5 rounded-full self-start mb-4">
            Coming Soon
          </span>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            The Full Five Stacks Platform
          </h3>
          <p className="text-gray-600 flex-1">
            From building your defensible baseline through operational
            efficiency, margin recovery, and structural resilience — all
            the way to a compounding engine that turns sustainability into
            lasting competitive advantage. One platform, five stacks, the
            complete journey.
          </p>
        </div>
      </div>
    </div>
  );
}
