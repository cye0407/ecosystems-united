import Link from "next/link";

export default function Stack5Page() {
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
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: '#B8ADE3' }}>
            5
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Regeneration</h1>
            <p className="text-gray-500 italic">Compound advantage</p>
          </div>
        </div>
        
        <p className="text-xl text-gray-600">
          With operational capability built, Stack 5 turns it into market position. Premium pricing, 
          preferred partnerships, competitive differentiation — based on proof, not claims.
        </p>
      </header>

      {/* Main Content */}
      <div className="space-y-8">
        
        {/* The Problem */}
        <section className="prose prose-lg prose-gray max-w-none">
          <p>
            You've done the work. You have visibility, efficiency, circular value capture, and 
            resilience. Your operation is genuinely better than it was — and probably better than 
            most competitors.
          </p>
          <p>
            But does anyone know? Are you capturing the market value of that operational excellence? 
            Or are you sitting on proof that no one sees?
          </p>
          <p>
            Stack 5 is about positioning — turning operational capability into market advantage. 
            Premium pricing because you can prove what others only claim. Certifications that 
            competitors can't get because they haven't done the work. Partnerships that require 
            credibility you've actually built.
          </p>
        </section>

        {/* Three Lenses */}
        <section className="bg-gray-50 rounded-lg p-6 border-l-4" style={{ borderLeftColor: '#B8ADE3' }}>
          <h2 className="text-lg font-semibold text-[#4AA88C] mb-4">The three lenses</h2>
          
          <div className="space-y-4">
            <div>
              <p className="font-medium text-gray-900 mb-1">Your operation</p>
              <p className="text-gray-600 text-sm">
                How do you position? What's your story, your proof points, your differentiation? 
                You have data now — Stack 5 turns it into a narrative that resonates with the 
                markets and partners that matter.
              </p>
            </div>
            
            <div>
              <p className="font-medium text-gray-900 mb-1">Your environment</p>
              <p className="text-gray-600 text-sm">
                Where is the landscape going? Which certifications will matter in three years? 
                Which buyer requirements are tightening? Which premium opportunities are emerging? 
                Position for where the market is heading, not just where it is.
              </p>
            </div>
            
            <div>
              <p className="font-medium text-gray-900 mb-1">Your budget</p>
              <p className="text-gray-600 text-sm">
                What premium can you actually capture? What's the ROI on certification costs? 
                On marketing investment? On repositioning? Not all positioning opportunities 
                pay back equally.
              </p>
            </div>
          </div>
        </section>

        {/* What You're Building */}
        <section>
          <h2 className="text-lg font-semibold text-[#4AA88C] mb-4">What you're building</h2>
          <div className="prose prose-lg prose-gray max-w-none">
            <p>
              A regenerative position means your advantage compounds over time:
            </p>
            <ul>
              <li><strong>Proof portfolio</strong> — documented evidence of what you've built in Stacks 1-4</li>
              <li><strong>Certification roadmap</strong> — which credentials make sense, in what sequence, with what ROI</li>
              <li><strong>Premium positioning</strong> — pricing and messaging that captures the value of your capability</li>
              <li><strong>Partnership strategy</strong> — relationships that require and reward your operational excellence</li>
            </ul>
            <p>
              The goal is a flywheel: operational excellence enables premium positioning, premium 
              positioning funds further operational investment, which enables higher positioning still.
            </p>
          </div>
        </section>

        {/* Milestone + Unlocks */}
        <section className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="font-semibold text-gray-900 mb-2">The milestone</h2>
          <p className="text-gray-600 mb-6">
            You've completed Stack 5 when your operational capabilities translate into market 
            advantage — premium pricing you couldn't command before, certifications you've earned, 
            or partnerships that were previously out of reach. The proof is paying off.
          </p>
          
          <h2 className="font-semibold text-gray-900 mb-2">What this unlocks</h2>
          <ul className="text-gray-600 space-y-2">
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">→</span>
              <span>Premium pricing backed by documented practices</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">→</span>
              <span>Certification readiness (B Corp, industry ecolabels, regenerative standards)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">→</span>
              <span>Preferred supplier status with sustainability-conscious buyers</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">→</span>
              <span>Talent attraction — people want to work for companies that mean it</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">→</span>
              <span>Brand differentiation that competitors can't fake</span>
            </li>
          </ul>
        </section>

        {/* Systemic Impact */}
        <section>
          <h2 className="text-lg font-semibold text-[#4AA88C] mb-3">The systemic impact</h2>
          <p className="text-gray-600">
            This is where environmental sustainability becomes visible and verifiable. Ecolabels, 
            certifications, verified claims — all built on the operational proof from Stacks 1-4. 
            You're not making claims you can't back up. You're not greenwashing. You've done the 
            work, and Stack 5 makes sure the market knows it.
          </p>
        </section>

        {/* Common Starting Points */}
        <section className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-[#4AA88C] mb-4">Common starting points</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900 mb-2">The certification opportunity</p>
              <p className="text-gray-600 text-sm">A certification would open doors — B Corp, organic, regenerative, industry-specific. Stack 5 ensures you're actually ready, not just applying and hoping.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900 mb-2">The premium buyer</p>
              <p className="text-gray-600 text-sm">A high-value customer wants suppliers who can prove their sustainability practices. Stack 5 gives you the portfolio to win that relationship.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900 mb-2">The competitor problem</p>
              <p className="text-gray-600 text-sm">Competitors are making claims they can't back up, and the market can't tell the difference. Stack 5 creates differentiation they can't copy.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900 mb-2">The story gap</p>
              <p className="text-gray-600 text-sm">You've done great work but can't articulate it effectively. Stack 5 builds the narrative that makes your operational excellence visible.</p>
            </div>
          </div>
        </section>

        {/* What Good Looks Like */}
        <section>
          <h2 className="text-lg font-semibold text-[#4AA88C] mb-3">What good looks like</h2>
          <p className="text-gray-600 mb-4">A complete Stack 5 implementation means:</p>
          <ul className="text-gray-600 space-y-2">
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">✓</span>
              <span>You have a proof portfolio documenting your Stacks 1-4 work</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">✓</span>
              <span>You've earned at least one certification that matters to your market</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">✓</span>
              <span>You're commanding premium pricing or accessing premium partnerships</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">✓</span>
              <span>Your positioning is based on proof, not claims</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">✓</span>
              <span>Competitors can't easily replicate your differentiation because it's built on operational reality</span>
            </li>
          </ul>
          <p className="text-gray-600 mt-4">
            The flywheel is spinning: operational excellence → market premium → reinvestment → 
            higher operational excellence.
          </p>
        </section>

        {/* Common Mistakes */}
        <section>
          <h2 className="text-lg font-semibold text-[#4AA88C] mb-3">Common mistakes</h2>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-gray-900 mb-1">Starting with Stack 5</p>
              <p className="text-gray-600 text-sm">The most common mistake. You want the positioning, the certifications, the premium — so you start here. But without Stacks 1-4, there's nothing to position. Claims without proof is greenwashing.</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-1">Certification for certification's sake</p>
              <p className="text-gray-600 text-sm">Not all certifications matter to your market. Some are expensive to maintain and don't command premiums. Choose credentials that your actual customers and partners value.</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-1">Underselling the work</p>
              <p className="text-gray-600 text-sm">You've built something real, but you describe it like everyone else describes their aspirations. Be specific. Use numbers. Show proof. That's what differentiates you.</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-1">Static positioning</p>
              <p className="text-gray-600 text-sm">Markets move. What's premium today is baseline tomorrow. Stack 5 isn't a destination — it's an ongoing effort to stay ahead of where the market is heading.</p>
            </div>
          </div>
        </section>

      </div>

      {/* CTA Box */}
      <div className="mt-12 p-8 bg-[#B8ADE3] rounded-lg text-white">
        <h2 className="text-xl font-bold mb-2">Ready to compound your advantage?</h2>
        <p className="text-white/80 mb-6">
          Start with the free Positioning assessment to identify your best opportunities, 
          or get the complete toolkit to build your proof portfolio and certification roadmap.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/tools/regeneration-assessment" 
            className="inline-block bg-white text-[#9A8CD0] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            Free Assessment →
          </Link>
          <Link 
            href="/tools/regeneration-toolkit" 
            className="inline-block bg-white/10 text-white px-6 py-3 rounded font-semibold hover:bg-white/20 transition-colors"
          >
            Explore Toolkit
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link 
          href="/framework/stack-4-resilience" 
          className="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#4AA88C] transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: '#9A8CD0' }}>
              4
            </div>
            <div>
              <p className="text-sm text-gray-500">Previous</p>
              <p className="font-medium text-gray-900">Resilience</p>
            </div>
          </div>
        </Link>
        <Link 
          href="/framework/implementation" 
          className="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#4AA88C] transition-colors"
        >
          <div className="flex items-center gap-3 justify-end text-right">
            <div>
              <p className="text-sm text-gray-500">Deep dive</p>
              <p className="font-medium text-gray-900">Implementation Guide</p>
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#4AA88C] text-white font-bold text-sm">
              →
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
