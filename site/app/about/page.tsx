import Link from "next/link";

export const metadata = {
  title: "About",
  description: "About Ecosystems United and the Five Stacks Framework.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        About
      </h1>
      
      <div className="prose prose-lg prose-gray max-w-none">
        <p className="text-xl text-gray-600">
          Ecosystems United helps companies turn sustainability requirements into operational advantage.
        </p>

        <h2 className="text-[#4AA88C]">The premise</h2>
        
        <p>
          Sustainability regulations are coming for most businesses — CSRD, VSME, supply chain 
          requirements, buyer questionnaires. You can treat this as a compliance cost, or you 
          can use it as a lens to find margin and build resilience.
        </p>

        <p>
          The Five Stacks Framework is an operating system for the second approach. It sequences 
          sustainability work so each step pays for the next: visibility enables efficiency, 
          efficiency funds circularity, circularity builds resilience, resilience earns you the 
          right to premium positioning.
        </p>

        <p>
          We don't do sustainability evangelism. We illuminate. You decide.
        </p>

        <h2 className="text-[#4AA88C]">The approach</h2>
        
        <ul>
          <li><strong>Operations-first</strong> — implementation over ambition</li>
          <li><strong>Margin-aware</strong> — sustainability that doesn't pay for itself doesn't survive the next budget cycle</li>
          <li><strong>Audit-ready</strong> — everything survives scrutiny</li>
          <li><strong>Sequence matters</strong> — each stack builds on the previous one</li>
        </ul>

        <h2 className="text-[#4AA88C]">Who this is for</h2>
        
        <p>
          Companies facing sustainability requirements who want to turn compliance into capability. 
          Manufacturers responding to Scope 3 requests. Food businesses navigating supply chain 
          pressure. Family operations planning for succession. Brands tired of competitors' empty claims.
        </p>

        <p>
          If you're looking for someone to tell you sustainability is a moral imperative, 
          we're not it. If you're looking for a system that makes sustainability make business 
          sense, start with <Link href="/framework" className="text-[#4AA88C] hover:underline">The Five Stacks</Link>.
        </p>

        <h2 className="text-[#4AA88C]">Behind Ecosystems United</h2>

        <p>
          Ecosystems United is built by Yeldi — product manager, systems thinker, and recovering 
          sustainability idealist. After years watching sustainability initiatives fail because 
          they started with vision instead of operations, The Five Stacks emerged as a framework 
          for doing it in the right order.
        </p>

        <p>
          Based in Berlin. Working with companies across Europe.
        </p>

        <h2 className="text-[#4AA88C]">Get in touch</h2>

        <p>
          Questions about the framework, tools, or how this might apply to your situation:
        </p>

        <p>
          <a href="mailto:hello@ecosystems-united.com" className="text-[#4AA88C] hover:underline">
            hello@ecosystems-united.com
          </a>
        </p>
      </div>

      {/* CTA */}
      <div className="mt-12 p-8 bg-[#1a1a2e] rounded-lg text-white">
        <h2 className="text-xl font-bold mb-2">Ready to explore?</h2>
        <p className="text-white/80 mb-6">
          Start with the framework overview or take the free assessment to see where you stand.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/framework" 
            className="inline-block bg-[#4AA88C] text-white px-6 py-3 rounded font-semibold hover:bg-[#3d8f76] transition-colors"
          >
            Explore The Five Stacks →
          </Link>
          <Link 
            href="/tools/stack-assessment" 
            className="inline-block bg-white/10 text-white px-6 py-3 rounded font-semibold hover:bg-white/20 transition-colors"
          >
            Take the Assessment
          </Link>
        </div>
      </div>

      {/* Last updated */}
      <p className="mt-8 text-sm text-gray-500 text-center">
        Last updated: January 2026
      </p>
    </div>
  );
}
