import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";

const stacks = [
  { num: 1, title: "Metrics", desc: "Build your baseline", slug: "stack-1-metrics", color: "#3D2E7C" },
  { num: 2, title: "Efficiency", desc: "Stop the leaks", slug: "stack-2-efficiency", color: "#5B4A9E" },
  { num: 3, title: "Circularity", desc: "Capture lost margin", slug: "stack-3-circularity", color: "#7B6BB8" },
  { num: 4, title: "Resilience", desc: "Design for volatility", slug: "stack-4-resilience", color: "#9A8CD0" },
  { num: 5, title: "Regeneration", desc: "Compound advantage", slug: "stack-5-regeneration", color: "#B8ADE3" },
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero */}
      <header className="mb-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Turn sustainability into <span className="text-[#4AA88C]">competitive advantage</span>
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          Sustainability regulations are coming. You can treat them as a cost — or use them as a lens to find margin and build resilience.
        </p>
        <p className="text-gray-600 mb-8">
          The Five Stacks is an operating system for companies ready to move beyond compliance narratives and into hard-coded operational advantage.
        </p>
        <div className="flex gap-4">
          <Link 
            href="/framework" 
            className="bg-[#4AA88C] text-white px-6 py-3 rounded font-medium hover:bg-[#3d8f77] transition-colors"
          >
            Explore the Framework
          </Link>
          <Link 
            href="/tools/stack-assessment" 
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded font-medium hover:border-[#4AA88C] hover:text-[#4AA88C] transition-colors"
          >
            Take the Assessment
          </Link>
        </div>
      </header>

      {/* Five Stacks Preview */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">The Five Stacks</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {stacks.map((stack) => (
            <Link 
              key={stack.num}
              href={`/framework/${stack.slug}`}
              className="border border-gray-200 rounded-lg p-4 hover:border-[#4AA88C] transition-colors"
            >
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-3"
                style={{ backgroundColor: stack.color }}
              >
                {stack.num}
              </div>
              <div className="font-medium text-gray-900 mb-1">{stack.title}</div>
              <div className="text-sm text-gray-600">{stack.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mb-20">
        <NewsletterSignup />
      </section>
    </div>
  );
}
