import Link from "next/link";

export default function Stack4Page() {
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
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: '#9A8CD0' }}>
            4
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Resilience</h1>
            <p className="text-gray-500 italic">Design for volatility</p>
          </div>
        </div>
        
        <p className="text-xl text-gray-600">
          Efficiency without resilience is fragile. Stack 4 builds the capacity to flex — not just 
          survive disruptions, but adapt to shifts before they become crises.
        </p>
      </header>

      {/* Main Content */}
      <div className="space-y-8">
        
        {/* The Problem */}
        <section className="prose prose-lg prose-gray max-w-none">
          <p>
            You've built visibility, stopped the leaks, and started capturing circular value. 
            Your operation is efficient. But efficient systems can also be brittle — optimized 
            for conditions that may not hold.
          </p>
          <p>
            Supply chains break. Key customers leave. Regulations change. Weather patterns shift. 
            Input prices spike. The question isn't whether disruption will happen — it's whether 
            your operation can absorb it without breaking.
          </p>
          <p>
            Stack 4 builds adaptive capacity. Not just backup plans, but the ability to sense 
            shifts early, flex when conditions change, and recover quickly when things go wrong.
          </p>
        </section>

        {/* Three Lenses */}
        <section className="bg-gray-50 rounded-lg p-6 border-l-4" style={{ borderLeftColor: '#9A8CD0' }}>
          <h2 className="text-lg font-semibold text-[#4AA88C] mb-4">The three lenses</h2>
          
          <div className="space-y-4">
            <div>
              <p className="font-medium text-gray-900 mb-1">Your operation</p>
              <p className="text-gray-600 text-sm">
                What could break you? Single points of failure, concentration risk, brittle systems. 
                Map where one failure cascades into many, where you're dependent on single suppliers 
                or customers, where your processes have no slack.
              </p>
            </div>
            
            <div>
              <p className="font-medium text-gray-900 mb-1">Your environment</p>
              <p className="text-gray-600 text-sm">
                What's shifting around you? Regulatory changes, market transformations, climate 
                impacts, technology disruptions. Build sensing mechanisms that catch signals early, 
                not when they've already become problems.
              </p>
            </div>
            
            <div>
              <p className="font-medium text-gray-900 mb-1">Your budget</p>
              <p className="text-gray-600 text-sm">
                What's the cost of fragility vs. the cost of redundancy? Resilience isn't free, 
                but neither is disruption. Calculate the actual cost of your vulnerabilities — 
                including probability-weighted downside scenarios.
              </p>
            </div>
          </div>
        </section>

        {/* Scenario Planning Callout */}
        <section className="bg-[#B8ADE3]/10 border border-[#9A8CD0]/30 p-6 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">This is where prediction becomes possible</h2>
          <p className="text-gray-600 mb-4">
            With your baseline from Stacks 1-3, you can model scenarios:
          </p>
          <ul className="text-gray-600 space-y-2">
            <li><strong>Plan A:</strong> Business as usual — current trajectory</li>
            <li><strong>Plan B:</strong> Moderate disruption — supply chain shock, price spike, key customer loss</li>
            <li><strong>Plan C:</strong> Major shift — regulatory change, market transformation, climate event</li>
            <li><strong>Plan D:</strong> Opportunity scenario — what if that emerging trend accelerates in your favor?</li>
          </ul>
          <p className="text-gray-600 mt-4">
            You're not guessing anymore. You're running scenarios against real data, seeing what 
            breaks first, and building contingencies before you need them.
          </p>
        </section>

        {/* What You're Building */}
        <section>
          <h2 className="text-lg font-semibold text-[#4AA88C] mb-4">What you're building</h2>
          <div className="prose prose-lg prose-gray max-w-none">
            <p>
              A resilience architecture includes:
            </p>
            <ul>
              <li><strong>Vulnerability map</strong> — single points of failure, concentration risks, brittle dependencies</li>
              <li><strong>Sensing mechanisms</strong> — early warning systems for external shifts that matter to you</li>
              <li><strong>Response protocols</strong> — what you do when specific triggers fire, before you're in crisis mode</li>
              <li><strong>Redundancy design</strong> — backup capacity that pays for itself in normal operations</li>
            </ul>
            <p>
              The goal isn't to prevent all disruption — that's impossible. The goal is to ensure 
              that disruption doesn't cascade into catastrophe, and that recovery is fast.
            </p>
          </div>
        </section>

        {/* Milestone + Unlocks */}
        <section className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="font-semibold text-gray-900 mb-2">The milestone</h2>
          <p className="text-gray-600 mb-6">
            You've completed Stack 4 when you've mapped vulnerabilities, built appropriate redundancy, 
            have sensing mechanisms for external shifts, and can run scenarios with confidence. 
            You know what could break you and have plans for when it tries.
          </p>
          
          <h2 className="font-semibold text-gray-900 mb-2">What this unlocks</h2>
          <ul className="text-gray-600 space-y-2">
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">→</span>
              <span>Risk assessment that satisfies investor due diligence</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">→</span>
              <span>Supply chain resilience documentation for enterprise customers</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">→</span>
              <span>Scenario planning that informs capital allocation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">→</span>
              <span>Insurance and lending applications with demonstrated risk management</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">→</span>
              <span>Board-ready contingency plans</span>
            </li>
          </ul>
        </section>

        {/* Systemic Impact */}
        <section>
          <h2 className="text-lg font-semibold text-[#4AA88C] mb-3">The systemic impact</h2>
          <p className="text-gray-600">
            Climate adaptation is resilience. Supply chain robustness is resilience. The same 
            capabilities that protect your business also prepare you for climate-related disclosure 
            requirements. When regulators ask about climate risk, you'll have answers — not because 
            you did compliance work, but because resilience work produces the same outputs.
          </p>
        </section>

        {/* Common Starting Points */}
        <section className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-[#4AA88C] mb-4">Common starting points</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900 mb-2">The close call</p>
              <p className="text-gray-600 text-sm">A disruption almost broke you — supply chain failure, key person leaving, customer loss. Stack 4 ensures the next one doesn't.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900 mb-2">The concentration risk</p>
              <p className="text-gray-600 text-sm">Too much revenue from one customer, too much supply from one vendor, too much knowledge in one person. Stack 4 diversifies strategically.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900 mb-2">The regulatory horizon</p>
              <p className="text-gray-600 text-sm">New rules are coming and you're not sure how they'll affect you. Stack 4 builds scenario models so you're not surprised.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900 mb-2">The investor question</p>
              <p className="text-gray-600 text-sm">Lenders or investors want to see your risk management. Stack 4 gives you something real to show them.</p>
            </div>
          </div>
        </section>

        {/* What Good Looks Like */}
        <section>
          <h2 className="text-lg font-semibold text-[#4AA88C] mb-3">What good looks like</h2>
          <p className="text-gray-600 mb-4">A complete Stack 4 implementation means:</p>
          <ul className="text-gray-600 space-y-2">
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">✓</span>
              <span>You've mapped your critical vulnerabilities and concentration risks</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">✓</span>
              <span>You have early warning systems for the external shifts that matter most</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">✓</span>
              <span>You can run scenario models with real data from your operation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">✓</span>
              <span>You have documented response protocols for your top risk scenarios</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">✓</span>
              <span>Your redundancy investments pay for themselves in normal operations</span>
            </li>
          </ul>
          <p className="text-gray-600 mt-4">
            You don't need to be prepared for everything. You need to be prepared for the things 
            that would actually break you — and flexible enough to handle the things you didn't predict.
          </p>
        </section>

        {/* Common Mistakes */}
        <section>
          <h2 className="text-lg font-semibold text-[#4AA88C] mb-3">Common mistakes</h2>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-gray-900 mb-1">Resilience as pure cost</p>
              <p className="text-gray-600 text-sm">Backup systems that only activate in crisis are expensive insurance. Design redundancy that generates value in normal operations — capacity you can sell, relationships that bring other benefits.</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-1">Planning for the last crisis</p>
              <p className="text-gray-600 text-sm">The next disruption won't look like the last one. Build adaptive capacity, not just specific contingencies for scenarios you've already seen.</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-1">Ignoring slow-moving risks</p>
              <p className="text-gray-600 text-sm">Sudden shocks get attention, but gradual shifts — market changes, regulatory drift, climate impacts — can be just as dangerous. Include both in your sensing mechanisms.</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-1">Resilience without the foundation</p>
              <p className="text-gray-600 text-sm">You can't model scenarios without baseline data (Stack 1). You can't build slack into a leaky operation (Stack 2). The sequence exists for a reason.</p>
            </div>
          </div>
        </section>

      </div>

      {/* CTA Box */}
      <div className="mt-12 p-8 bg-[#9A8CD0] rounded-lg text-white">
        <h2 className="text-xl font-bold mb-2">Ready to design for volatility?</h2>
        <p className="text-white/80 mb-6">
          Start with the free Resilience assessment to map your critical vulnerabilities, 
          or get the complete toolkit to build adaptive capacity.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/tools/resilience-assessment" 
            className="inline-block bg-white text-[#9A8CD0] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            Free Assessment →
          </Link>
          <Link 
            href="/tools/resilience-toolkit" 
            className="inline-block bg-white/10 text-white px-6 py-3 rounded font-semibold hover:bg-white/20 transition-colors"
          >
            Explore Toolkit
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link 
          href="/framework/stack-3-circularity" 
          className="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#4AA88C] transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: '#7B6BB8' }}>
              3
            </div>
            <div>
              <p className="text-sm text-gray-500">Previous</p>
              <p className="font-medium text-gray-900">Circularity</p>
            </div>
          </div>
        </Link>
        <Link 
          href="/framework/stack-5-regeneration" 
          className="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#4AA88C] transition-colors"
        >
          <div className="flex items-center gap-3 justify-end text-right">
            <div>
              <p className="text-sm text-gray-500">Next</p>
              <p className="font-medium text-gray-900">Regeneration</p>
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: '#B8ADE3' }}>
              5
            </div>
          </div>
        </Link>
      </div>

      {/* Last updated */}
      <p className="mt-8 text-sm text-gray-500 text-center">
        Last updated: January 2026
      </p>
    </div>
  );
}
