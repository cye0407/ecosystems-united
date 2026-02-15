import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Interactive tools to assess your sustainability position and build operational capability.",
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

const otherTools = [
  {
    name: "Full Stack Assessment",
    description:
      "Evaluate where your operation sits across all five stacks. Get a complete picture and prioritize next steps.",
    href: "/tools/stack-assessment",
    status: "available",
  },
  {
    name: "Soil Health Checklist",
    description:
      "A practical checklist for assessing and tracking soil health indicators on your operation.",
    href: "/tools/soil-health-checklist",
    status: "available",
  },
  {
    name: "Response Generator",
    description:
      "Upload sustainability questionnaires and generate answers from your operational data. Coming soon.",
    href: "/tools",
    status: "coming-soon",
  },
  {
    name: "Baseline Calculator",
    description:
      "Calculate baseline metrics for emissions, energy, water, and waste across your operation. Coming soon.",
    href: "/tools",
    status: "coming-soon",
  },
];

export default function ToolsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Tools</h1>
        <p className="text-xl text-gray-600">
          Interactive tools to assess your sustainability position and build
          operational capability.
        </p>
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

      {/* Other Tools */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Tools</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {otherTools.map((tool) => (
          <Link
            key={tool.name}
            href={tool.href}
            className="block p-6 border border-gray-200 rounded-lg hover:border-primary transition-colors group"
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                {tool.name}
              </h3>
              {tool.status === "coming-soon" && (
                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded">
                  Coming Soon
                </span>
              )}
            </div>
            <p className="text-gray-600">{tool.description}</p>
          </Link>
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
