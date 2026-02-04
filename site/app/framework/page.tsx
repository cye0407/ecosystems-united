import Link from "next/link";

const stacks = [
  {
    num: 1,
    title: "Metrics",
    subtitle: "Build your baseline",
    slug: "stack-1-metrics",
    desc: "You can't improve what you can't see. Stack 1 builds visibility — what you're doing, what's happening around you, what resources you have to work with.",
    color: "#3D2E7C"
  },
  {
    num: 2,
    title: "Efficiency",
    subtitle: "Stop the leaks",
    slug: "stack-2-efficiency",
    desc: "With visibility established, Stack 2 finds the leaks. Where are you spending more than you need to? Where is effort producing less than it could?",
    color: "#5B4A9E"
  },
  {
    num: 3,
    title: "Circularity",
    subtitle: "Capture the lost margin",
    slug: "stack-3-circularity",
    desc: "Every output can be an input. Stack 3 identifies what's leaving your system without being monetized — physical waste, idle assets, data you're not using.",
    color: "#7B6BB8"
  },
  {
    num: 4,
    title: "Resilience",
    subtitle: "Design for volatility",
    slug: "stack-4-resilience",
    desc: "Efficiency without resilience is fragile. Stack 4 builds the capacity to flex — not just survive disruptions, but adapt to shifts before they become crises.",
    color: "#9A8CD0"
  },
  {
    num: 5,
    title: "Regeneration",
    subtitle: "Compound advantage",
    slug: "stack-5-regeneration",
    desc: "With operational capability built, Stack 5 turns it into market position. Premium pricing, preferred partnerships, competitive differentiation — based on proof, not claims.",
    color: "#B8ADE3"
  },
];

export default function FrameworkPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          The Five Stacks
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          An operating system for turning sustainability into competitive advantage.
        </p>
        <p className="text-gray-600">
          Each stack builds on the previous one. The sequence matters — skip a step and you're 
          building on a foundation that won't hold.
        </p>
      </div>

      {/* Stacks */}
      <div className="space-y-4 mb-12">
        {stacks.map((stack) => (
          <Link
            key={stack.num}
            href={`/framework/${stack.slug}`}
            className="block bg-gray-50 rounded-lg p-6 border-l-4 hover:bg-gray-100 transition-colors"
            style={{ borderLeftColor: stack.color }}
          >
            <div className="flex items-start gap-4">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                style={{ backgroundColor: stack.color }}
              >
                {stack.num}
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-2 mb-2">
                  <h2 className="text-xl font-bold text-gray-900">
                    {stack.title}
                  </h2>
                  <span className="text-gray-500 italic text-sm">
                    {stack.subtitle}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  {stack.desc}
                </p>
              </div>
              <span className="text-gray-400 text-sm">→</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Progression logic */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Why the sequence matters</h2>
        <p className="text-gray-600 mb-3">
          The Five Stacks is an ecosystem, not a checklist. Each stack creates the conditions 
          for the next — visibility enables efficiency, efficiency funds circularity, circularity 
          builds the foundation for resilience, and resilience earns you the right to claim 
          regenerative advantage.
        </p>
        <p className="text-gray-600">
          Skip a step and you're building on air. Stack 5 without Stacks 1-4 is just narrative 
          without substance. The companies that win are the ones that stack properly.
        </p>
      </div>

      {/* CTA */}
      <div className="p-8 bg-[#1a1a2e] rounded-lg text-white">
        <h2 className="text-xl font-bold mb-2">Ready to go deeper?</h2>
        <p className="text-white/80 mb-6">
          The Implementation guide explains how each stack works, what completion looks like, 
          and what it unlocks for your business.
        </p>
        <Link 
          href="/framework/implementation" 
          className="inline-block bg-[#4AA88C] text-white px-6 py-3 rounded font-semibold hover:bg-[#3d8f76] transition-colors"
        >
          Implementation Guide →
        </Link>
      </div>
    </div>
  );
}
