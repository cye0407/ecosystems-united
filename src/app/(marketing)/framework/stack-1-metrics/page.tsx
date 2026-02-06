import Link from "next/link";

export default function Stack1Page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <header className="mb-12">
        <nav className="mb-8">
          <Link href="/framework" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to The Five Stacks
          </Link>
        </nav>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: '#3D2E7C' }}>
            1
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Metrics</h1>
            <p className="text-gray-500 italic">Build your baseline</p>
          </div>
        </div>
        
        <p className="text-xl text-gray-600">
          You can't improve what you can't see. Stack 1 builds visibility — what you're doing, 
          what's happening around you, what resources you have to work with.
        </p>
      </header>

      {/* Main Content */}
      <div className="space-y-8">
        
        {/* The Problem */}
        <section className="prose prose-lg prose-gray max-w-none">
          <p>
            Most businesses operate with incomplete visibility. They know revenue and costs at a high level, 
            but can't answer basic questions about their operation: How much energy do we actually use? 
            Where does our waste go? What are our real input costs per unit?
          </p>
          <p>
            When a buyer asks for Scope 3 data, they scramble. When a bank wants sustainability metrics 
            for a loan application, they guess. When regulations require disclosure, they hire consultants 
            to figure out what they should already know.
          </p>
          <p>
            Stack 1 fixes this. Not with a one-time audit, but with a system that makes visibility 
            the default state.
          </p>
        </section>

        {/* Three Lenses */}
        <section className="bg-gray-50 rounded-lg p-6 border-l-4" style={{ borderLeftColor: '#3D2E7C' }}>
          <h2 className="text-lg font-semibold text-[#4AA88C] mb-4">The three lenses</h2>
          
          <div className="space-y-4">
            <div>
              <p className="font-medium text-gray-900 mb-1">Your operation</p>
              <p className="text-gray-600 text-sm">
                What are you actually doing? Map your inputs (energy, water, materials, labor), 
                outputs (products, waste, emissions), and the flows between them. This is the foundation 
                everything else builds on.
              </p>
            </div>
            
            <div>
              <p className="font-medium text-gray-900 mb-1">Your environment</p>
              <p className="text-gray-600 text-sm">
                What game are you playing? Understand your market position, competitive dynamics, 
                regulatory landscape, and customer expectations. External context shapes which metrics 
                matter most.
              </p>
            </div>
            
            <div>
              <p className="font-medium text-gray-900 mb-1">Your budget</p>
              <p className="text-gray-600 text-sm">
                What's your financial reality? Cash position, investment capacity, constraints. 
                Knowing what you can afford to measure — and what you can't afford not to — 
                determines where to start.
              </p>
            </div>
          </div>
        </section>

        {/* What You're Building */}
        <section>
          <h2 className="text-lg font-semibold text-[#4AA88C] mb-4">What you're building</h2>
          <div className="prose prose-lg prose-gray max-w-none">
            <p>
              A baseline isn't just numbers in a spreadsheet. It's a system that captures:
            </p>
            <ul>
              <li><strong>Resource flows</strong> — energy, water, materials in and out</li>
              <li><strong>Cost mapping</strong> — where money actually goes, not where you think it goes</li>
              <li><strong>Production metrics</strong> — output per input, efficiency ratios, utilization rates</li>
              <li><strong>External benchmarks</strong> — how you compare to industry standards and competitors</li>
            </ul>
            <p>
              The goal is a single source of truth you can query when someone asks a question — 
              whether that's a buyer, a bank, a regulator, or yourself.
            </p>
          </div>
        </section>

        {/* Milestone + Unlocks */}
        <section className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="font-semibold text-gray-900 mb-2">The milestone</h2>
          <p className="text-gray-600 mb-6">
            You've completed Stack 1 when you have a baseline. You know your numbers. You can answer 
            basic questions about your operation without guessing.
          </p>
          
          <h2 className="font-semibold text-gray-900 mb-2">What this unlocks</h2>
          <ul className="text-gray-600 space-y-2">
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">→</span>
              <span>Respond to buyer sustainability questionnaires with confidence</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">→</span>
              <span>Answer Scope 3 data requests from customers</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">→</span>
              <span>Complete the data foundation for VSME or CSRD reporting</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">→</span>
              <span>Know where your money actually goes before making investment decisions</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">→</span>
              <span>Move to Stack 2 with the visibility needed to find leaks</span>
            </li>
          </ul>
        </section>

        {/* Systemic Impact */}
        <section>
          <h2 className="text-lg font-semibold text-[#4AA88C] mb-3">The systemic impact</h2>
          <p className="text-gray-600">
            The data you build here is the same data you need for emissions tracking, resource reporting, 
            and regulatory disclosure. You're not doing sustainability work and business work separately — 
            it's one effort with two outcomes. Every metric that helps you run your operation better is 
            also a metric that satisfies external requirements.
          </p>
        </section>

        {/* Common Starting Points */}
        <section className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-[#4AA88C] mb-4">Common starting points</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900 mb-2">The buyer request</p>
              <p className="text-gray-600 text-sm">A major customer asks for your carbon footprint or sustainability data. You realize you don't have it. Stack 1 builds the system so you're never caught off guard again.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900 mb-2">The financing application</p>
              <p className="text-gray-600 text-sm">A bank or investor wants sustainability metrics as part of due diligence. You need credible numbers, not estimates. Stack 1 gives you audit-ready documentation.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900 mb-2">The cost mystery</p>
              <p className="text-gray-600 text-sm">You know you're spending too much on energy or waste, but you can't pinpoint where. Stack 1 maps the flows so you can see what's actually happening.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900 mb-2">The regulatory deadline</p>
              <p className="text-gray-600 text-sm">CSRD, VSME, or industry-specific reporting is coming. You need a data foundation before you can report. Stack 1 builds that foundation.</p>
            </div>
          </div>
        </section>

        {/* What Good Looks Like */}
        <section>
          <h2 className="text-lg font-semibold text-[#4AA88C] mb-3">What good looks like</h2>
          <p className="text-gray-600 mb-4">A complete Stack 1 implementation means:</p>
          <ul className="text-gray-600 space-y-2">
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">✓</span>
              <span>You can pull energy, water, and waste data for any period within 24 hours</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">✓</span>
              <span>Your cost-per-unit calculations are based on actual data, not estimates</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">✓</span>
              <span>You know how you compare to industry benchmarks</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">✓</span>
              <span>You can answer a standard sustainability questionnaire without new research</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">✓</span>
              <span>Your data is documented well enough to survive an audit</span>
            </li>
          </ul>
          <p className="text-gray-600 mt-4">
            This doesn't require enterprise software or a dedicated sustainability team. 
            It requires a system — even if that system is well-organized spreadsheets with 
            clear data collection protocols.
          </p>
        </section>

        {/* Common Mistakes */}
        <section>
          <h2 className="text-lg font-semibold text-[#4AA88C] mb-3">Common mistakes</h2>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-gray-900 mb-1">Measuring everything</p>
              <p className="text-gray-600 text-sm">You don't need perfect data on every input and output. Start with the metrics that matter most — usually energy, key materials, and primary waste streams. Expand from there.</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-1">One-time snapshot</p>
              <p className="text-gray-600 text-sm">A baseline isn't a report you produce once. It's a system that updates. Build for ongoing visibility, not a single deliverable.</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-1">Ignoring external context</p>
              <p className="text-gray-600 text-sm">Your internal metrics mean nothing without benchmarks. Industry standards, competitor performance, regulatory thresholds — external context tells you whether your numbers are good or bad.</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-1">Waiting for perfect data</p>
              <p className="text-gray-600 text-sm">Good enough to act is good enough. Start with what you have, improve as you go. Perfect data that arrives too late is worth less than directional data that arrives now.</p>
            </div>
          </div>
        </section>

      </div>

      {/* Related Articles */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold text-[#4AA88C] mb-4">Go deeper</h2>
        <div className="space-y-3">
          <Link href="/articles/what-gets-measured" className="block p-4 border border-gray-200 rounded-lg hover:border-[#4AA88C] transition-colors">
            <span className="font-medium text-gray-900">What Actually Gets Measured? →</span>
            <span className="block text-sm text-gray-600">The 5-7 core metrics that appear on every buyer questionnaire</span>
          </Link>
          <Link href="/articles/building-baseline" className="block p-4 border border-gray-200 rounded-lg hover:border-[#4AA88C] transition-colors">
            <span className="font-medium text-gray-900">The 90-Day Baseline Approach →</span>
            <span className="block text-sm text-gray-600">How to use data you already have to build audit-defensible baselines</span>
          </Link>
          <Link href="/articles/buyer-scrutiny" className="block p-4 border border-gray-200 rounded-lg hover:border-[#4AA88C] transition-colors">
            <span className="font-medium text-gray-900">Surviving Buyer ESG Scrutiny →</span>
            <span className="block text-sm text-gray-600">Why your buyers need your data, what they actually ask for, and when to be ready</span>
          </Link>
        </div>
      </section>

      {/* CTA Box */}
      <div className="mt-12 p-8 bg-[#3D2E7C] rounded-lg text-white">
        <h2 className="text-xl font-bold mb-2">Ready to build your baseline?</h2>
        <p className="text-white/80 mb-6">
          Start with the free Metrics assessment to see where you stand, or get the complete toolkit 
          to build your system.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/tools/metrics-assessment" 
            className="inline-block bg-white text-[#3D2E7C] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            Free Assessment →
          </Link>
          <Link 
            href="/tools/metrics-toolkit" 
            className="inline-block bg-white/10 text-white px-6 py-3 rounded font-semibold hover:bg-white/20 transition-colors"
          >
            Explore Toolkit
          </Link>
        </div>
      </div>

      {/* Next Stack */}
      <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: '#5B4A9E' }}>
            2
          </div>
          <div>
            <p className="text-sm text-gray-500">Next stack</p>
            <p className="font-semibold text-gray-900">Efficiency — Stopping the leaks</p>
          </div>
        </div>
        <Link 
          href="/framework/stack-2-efficiency" 
          className="text-[#4AA88C] font-medium hover:underline flex items-center gap-1"
        >
          Continue to Stack 2 →
        </Link>
      </div>

      {/* Last updated */}
      <p className="mt-8 text-sm text-gray-500 text-center">
        Last updated: January 2026
      </p>
    </div>
  );
}
