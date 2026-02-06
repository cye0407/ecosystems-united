import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Interactive tools to assess your sustainability position and build operational capability.",
};

const tools = [
  {
    name: "Stack Assessment",
    description:
      "Evaluate where your operation sits in the Five Stacks Framework. Identify gaps and prioritize next steps.",
    href: "/tools/stack-assessment",
    status: "available",
    icon: "📊",
  },
  {
    name: "Soil Health Checklist",
    description:
      "A practical checklist for assessing and tracking soil health indicators on your operation.",
    href: "/tools/soil-health-checklist",
    status: "available",
    icon: "🌱",
  },
  {
    name: "Response Generator",
    description:
      "Upload sustainability questionnaires and generate answers from your operational data.",
    href: "/dashboard",
    status: "app",
    icon: "📝",
  },
  {
    name: "Baseline Calculator",
    description:
      "Calculate baseline metrics for emissions, energy, water, and waste across your operation.",
    href: "/dashboard",
    status: "app",
    icon: "🧮",
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

      <div className="grid md:grid-cols-2 gap-6">
        {tools.map((tool) => (
          <Link
            key={tool.name}
            href={tool.href}
            className="block p-6 border border-gray-200 rounded-lg hover:border-primary transition-colors group"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">{tool.icon}</div>
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {tool.name}
                  </h2>
                  {tool.status === "app" && (
                    <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded">
                      In App
                    </span>
                  )}
                </div>
                <p className="text-gray-600">{tool.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* App CTA */}
      <div className="mt-16 p-8 bg-primary/5 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Full toolkit in the app
        </h2>
        <p className="text-gray-600 mb-6">
          The Ecosystems United app includes the complete Response Generator,
          data entry for all 8 operational domains, progress tracking, and
          export tools.
        </p>
        <Link
          href="/dashboard"
          className="inline-block bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-primary-dark transition-colors"
        >
          Launch the App →
        </Link>
      </div>
    </div>
  );
}
