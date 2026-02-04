import Link from "next/link";

export const metadata = {
  title: "Tools",
  description: "Free assessments for each stack of the Five Stacks Framework.",
};

const stacks = [
  {
    num: 1,
    title: "Metrics",
    subtitle: "Build your baseline",
    color: "#3D2E7C",
    question: "Can you see clearly?",
    assessmentDesc: "Evaluate your visibility and measurement capability. Where are the gaps in your baseline?",
    slug: "metrics",
  },
  {
    num: 2,
    title: "Efficiency",
    subtitle: "Stop the leaks",
    color: "#5B4A9E",
    question: "Are you leaking value?",
    assessmentDesc: "Identify your biggest efficiency opportunities. Where is margin escaping?",
    slug: "efficiency",
  },
  {
    num: 3,
    title: "Circularity",
    subtitle: "Capture the lost margin",
    color: "#7B6BB8",
    question: "Are you capturing value?",
    assessmentDesc: "Find value leaving your system uncaptured. What outputs could become inputs?",
    slug: "circularity",
  },
  {
    num: 4,
    title: "Resilience",
    subtitle: "Design for volatility",
    color: "#9A8CD0",
    question: "Can you absorb shocks?",
    assessmentDesc: "Map your vulnerabilities and concentration risks. What could break you?",
    slug: "resilience",
  },
  {
    num: 5,
    title: "Regeneration",
    subtitle: "Compound advantage",
    color: "#B8ADE3",
    question: "Are you compounding advantage?",
    assessmentDesc: "Evaluate your positioning and certification readiness. Are you capturing market value?",
    slug: "regeneration",
  },
];

export default function ToolsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Tools
      </h1>
      <p className="text-xl text-gray-600 mb-4">
        Free assessments to see where you stand.
      </p>
      <p className="text-gray-600 mb-12">
        Each stack has an assessment that shows your current capability and where to focus.
      </p>

      {/* Quick Start */}
      <div className="mb-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Not sure where to start?</h2>
        <p className="text-gray-600 mb-4">
          The Stack Assessment tells you which stack needs attention first. Takes 3 minutes.
        </p>
        <Link 
          href="/tools/stack-assessment"
          className="inline-flex items-center gap-2 bg-[#4AA88C] text-white px-5 py-2 rounded font-medium hover:bg-[#3d8f76] transition-colors"
        >
          Take the Stack Assessment →
        </Link>
      </div>
      
      {/* Stack Assessments */}
      <h2 className="text-lg font-semibold text-[#4AA88C] mb-6">Individual stack assessments</h2>
      <div className="space-y-4">
        {stacks.map((stack) => (
          <Link 
            key={stack.num}
            href={`/tools/${stack.slug}-assessment`}
            className="block bg-gray-50 rounded-lg p-5 border-l-4 hover:bg-gray-100 transition-colors"
            style={{ borderLeftColor: stack.color }}
          >
            <div className="flex items-start gap-4">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                style={{ backgroundColor: stack.color }}
              >
                {stack.num}
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-2 mb-1">
                  <h3 className="text-lg font-bold text-gray-900">{stack.title}</h3>
                  <span className="text-gray-500 italic text-sm">{stack.subtitle}</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{stack.assessmentDesc}</p>
                <span className="text-[#4AA88C] text-sm font-medium">Take assessment →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 p-8 bg-[#1a1a2e] rounded-lg text-white">
        <h2 className="text-xl font-bold mb-2">Want to understand the system first?</h2>
        <p className="text-white/80 mb-6">
          The Implementation Guide explains how the stacks connect and what completion 
          looks like at each level.
        </p>
        <Link 
          href="/framework/implementation" 
          className="inline-block bg-[#4AA88C] text-white px-6 py-3 rounded font-semibold hover:bg-[#3d8f76] transition-colors"
        >
          Read the Implementation Guide →
        </Link>
      </div>

      {/* Last updated */}
      <p className="mt-8 text-sm text-gray-500 text-center">
        Last updated: January 2026
      </p>
    </div>
  );
}
