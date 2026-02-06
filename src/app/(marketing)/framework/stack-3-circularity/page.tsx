import Link from "next/link";

export default function Stack3Page() {
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
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: '#7B6BB8' }}>
            3
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Circularity</h1>
            <p className="text-gray-500 italic">Capture the lost margin</p>
          </div>
        </div>
        
        <p className="text-xl text-gray-600">
          Every output can be an input. Stack 3 identifies what's leaving your system without 
          being monetized — physical waste, idle assets, data you're not using. The shift is from 
          disposal to deployment.
        </p>
      </header>

      {/* Main Content */}
      <div className="space-y-8">
        
        {/* The Problem */}
        <section className="prose prose-lg prose-gray max-w-none">
          <p>
            After you've built visibility (Stack 1) and stopped the leaks (Stack 2), you have a 
            tight operation. But "tight" isn't the same as "complete." Value is still leaving 
            your system — it's just leaving more slowly.
          </p>
          <p>
            By-products you pay to dispose of could be inputs for someone else. Equipment that 
            sits idle 70% of the time could generate revenue. Heat that escapes your process 
            could warm your building. Data you collect but don't use could inform better decisions 
            or become a product itself.
          </p>
          <p>
            Stack 3 asks: what if nothing left the system without being captured? What if disposal 
            became deployment?
          </p>
        </section>

        {/* Three Lenses */}
        <section className="bg-gray-50 rounded-lg p-6 border-l-4" style={{ borderLeftColor: '#7B6BB8' }}>
          <h2 className="text-lg font-semibold text-[#4AA88C] mb-4">The three lenses</h2>
          
          <div className="space-y-4">
            <div>
              <p className="font-medium text-gray-900 mb-1">Your operation</p>
              <p className="text-gray-600 text-sm">
                What's leaving the system uncaptured? Waste streams, by-products, underused assets, 
                excess capacity, knowledge that isn't being leveraged. Map everything that could 
                have value but currently doesn't.
              </p>
            </div>
            
            <div>
              <p className="font-medium text-gray-900 mb-1">Your environment</p>
              <p className="text-gray-600 text-sm">
                Who needs what you're throwing away? Industrial symbiosis — where your output becomes 
                someone else's input — requires understanding the ecosystem around you. What 
                businesses are nearby? What do they need? What markets exist for your by-products?
              </p>
            </div>
            
            <div>
              <p className="font-medium text-gray-900 mb-1">Your budget</p>
              <p className="text-gray-600 text-sm">
                What's the dollar value of the leakage — revenue potential vs. cost avoidance? 
                Some circular opportunities create new revenue streams. Others just eliminate 
                disposal costs. Both matter, but they require different investment logic.
              </p>
            </div>
          </div>
        </section>

        {/* What You're Building */}
        <section>
          <h2 className="text-lg font-semibold text-[#4AA88C] mb-4">What you're building</h2>
          <div className="prose prose-lg prose-gray max-w-none">
            <p>
              A circular value map identifies every potential capture point:
            </p>
            <ul>
              <li><strong>Physical streams</strong> — waste, by-products, scrap, packaging that could be repurposed or sold</li>
              <li><strong>Energy streams</strong> — heat, cooling, power that could be recovered or redirected</li>
              <li><strong>Asset utilization</strong> — equipment, space, vehicles that sit idle and could generate value</li>
              <li><strong>Information streams</strong> — data, knowledge, relationships that aren't being monetized</li>
            </ul>
            <p>
              For each stream, you need: what is it, how much is there, who could use it, what 
              would it take to capture it, and what's it worth? This transforms "waste management" 
              from a cost center into a strategic function.
            </p>
          </div>
        </section>

        {/* Milestone + Unlocks */}
        <section className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="font-semibold text-gray-900 mb-2">The milestone</h2>
          <p className="text-gray-600 mb-6">
            You've completed Stack 3 when you've mapped your value leakage and have active 
            initiatives reclaiming that margin. You're not just disposing of outputs efficiently — 
            you're capturing value from them.
          </p>
          
          <h2 className="font-semibold text-gray-900 mb-2">What this unlocks</h2>
          <ul className="text-gray-600 space-y-2">
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">→</span>
              <span>New revenue from former waste streams</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">→</span>
              <span>Reduced disposal costs</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">→</span>
              <span>Closed-loop credentials for tenders and partnerships</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">→</span>
              <span>Verified data for sustainability-linked loans and green financing</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">→</span>
              <span>Relationships with ecosystem partners who need your outputs</span>
            </li>
          </ul>
        </section>

        {/* Systemic Impact */}
        <section>
          <h2 className="text-lg font-semibold text-[#4AA88C] mb-3">The systemic impact</h2>
          <p className="text-gray-600">
            Circularity is the engine of environmental sustainability — closing loops, reducing 
            extraction, keeping materials in use longer. When you capture value from outputs 
            instead of disposing of them, you reduce demand for virgin materials and eliminate 
            waste streams simultaneously. Your margin improvement is the environmental metric. 
            They're not separate things.
          </p>
        </section>

        {/* Common Starting Points */}
        <section className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-[#4AA88C] mb-4">Common starting points</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900 mb-2">The disposal cost</p>
              <p className="text-gray-600 text-sm">You're paying significant money to get rid of something. Stack 3 asks: is there someone who would pay for this instead?</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900 mb-2">The by-product question</p>
              <p className="text-gray-600 text-sm">Your process creates something that isn't your main product. Stack 3 explores whether it could become a product for someone else.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900 mb-2">The idle asset</p>
              <p className="text-gray-600 text-sm">Equipment, space, or vehicles sit unused much of the time. Stack 3 finds ways to generate value during downtime.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900 mb-2">The neighbor's need</p>
              <p className="text-gray-600 text-sm">Another business nearby needs something you have excess of — heat, materials, capacity. Stack 3 builds the symbiosis connection.</p>
            </div>
          </div>
        </section>

        {/* What Good Looks Like */}
        <section>
          <h2 className="text-lg font-semibold text-[#4AA88C] mb-3">What good looks like</h2>
          <p className="text-gray-600 mb-4">A complete Stack 3 implementation means:</p>
          <ul className="text-gray-600 space-y-2">
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">✓</span>
              <span>You've mapped all significant output streams and their potential value</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">✓</span>
              <span>You have at least one active circular initiative generating value</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">✓</span>
              <span>You've reduced disposal costs or created new revenue from former waste</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">✓</span>
              <span>You understand the ecosystem around you — who needs what you have</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">✓</span>
              <span>You can document your circular practices for certifications and financing</span>
            </li>
          </ul>
          <p className="text-gray-600 mt-4">
            You don't need to capture everything. You need to capture the high-value streams 
            and have a system for identifying new opportunities as they emerge.
          </p>
        </section>

        {/* Common Mistakes */}
        <section>
          <h2 className="text-lg font-semibold text-[#4AA88C] mb-3">Common mistakes</h2>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-gray-900 mb-1">Circular before efficient</p>
              <p className="text-gray-600 text-sm">Building circular systems on top of a leaky operation just means you're circulating waste. Fix the leaks first (Stack 2), then capture what remains.</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-1">Ignoring transaction costs</p>
              <p className="text-gray-600 text-sm">Finding a buyer for your by-product doesn't help if the cost of cleaning, transporting, and selling it exceeds the value. Include all costs in the calculation.</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-1">Single-partner dependency</p>
              <p className="text-gray-600 text-sm">If your circular model depends on one partner taking your output, what happens when they don't need it anymore? Diversify or have backup plans.</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-1">Forgetting the information layer</p>
              <p className="text-gray-600 text-sm">Physical circularity gets attention, but information circularity — using data you already collect to inform better decisions — often has higher ROI and lower implementation cost.</p>
            </div>
          </div>
        </section>

      </div>

      {/* CTA Box */}
      <div className="mt-12 p-8 bg-[#7B6BB8] rounded-lg text-white">
        <h2 className="text-xl font-bold mb-2">Ready to capture your lost margin?</h2>
        <p className="text-white/80 mb-6">
          Start with the free Circularity assessment to identify your highest-value streams, 
          or get the complete toolkit to map and monetize your outputs.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/tools/circularity-assessment" 
            className="inline-block bg-white text-[#7B6BB8] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            Free Assessment →
          </Link>
          <Link 
            href="/tools/circularity-toolkit" 
            className="inline-block bg-white/10 text-white px-6 py-3 rounded font-semibold hover:bg-white/20 transition-colors"
          >
            Explore Toolkit
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link 
          href="/framework/stack-2-efficiency" 
          className="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#4AA88C] transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: '#5B4A9E' }}>
              2
            </div>
            <div>
              <p className="text-sm text-gray-500">Previous</p>
              <p className="font-medium text-gray-900">Efficiency</p>
            </div>
          </div>
        </Link>
        <Link 
          href="/framework/stack-4-resilience" 
          className="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#4AA88C] transition-colors"
        >
          <div className="flex items-center gap-3 justify-end text-right">
            <div>
              <p className="text-sm text-gray-500">Next</p>
              <p className="font-medium text-gray-900">Resilience</p>
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: '#9A8CD0' }}>
              4
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
