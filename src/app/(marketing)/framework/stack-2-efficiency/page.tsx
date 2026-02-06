import Link from "next/link";

export default function Stack2Page() {
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
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: '#5B4A9E' }}>
            2
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Efficiency</h1>
            <p className="text-gray-500 italic">Stop the leaks</p>
          </div>
        </div>
        
        <p className="text-xl text-gray-600">
          With visibility established, Stack 2 finds the leaks. Where are you spending more than 
          you need to? Where is effort producing less than it could?
        </p>
      </header>

      {/* Main Content */}
      <div className="space-y-8">
        
        {/* The Problem */}
        <section className="prose prose-lg prose-gray max-w-none">
          <p>
            Every operation leaks value. Energy that heats empty space. Materials that become waste 
            before they become product. Processes that take three steps when one would do. Labor 
            spent on tasks that don't move anything forward.
          </p>
          <p>
            Most businesses know they have inefficiencies. Few know where they are, how much they cost, 
            or which ones are worth fixing first. Without the baseline from Stack 1, efficiency work 
            becomes guesswork — optimizing whatever's visible rather than whatever matters.
          </p>
          <p>
            Stack 2 is systematic leak detection. Find them, size them, prioritize them, fix the ones 
            that pay for themselves.
          </p>
        </section>

        {/* Three Lenses */}
        <section className="bg-gray-50 rounded-lg p-6 border-l-4" style={{ borderLeftColor: '#5B4A9E' }}>
          <h2 className="text-lg font-semibold text-[#4AA88C] mb-4">The three lenses</h2>
          
          <div className="space-y-4">
            <div>
              <p className="font-medium text-gray-900 mb-1">Your operation</p>
              <p className="text-gray-600 text-sm">
                Where are you bleeding margin? Map waste, overuse, redundancy, and friction. 
                Energy, materials, time, labor — anything that costs more than it should or 
                produces less than it could.
              </p>
            </div>
            
            <div>
              <p className="font-medium text-gray-900 mb-1">Your environment</p>
              <p className="text-gray-600 text-sm">
                Where is the market leaking? What inefficiencies exist in your supply chain, 
                your customer relationships, your competitive landscape? Opportunities others 
                are missing become your advantage.
              </p>
            </div>
            
            <div>
              <p className="font-medium text-gray-900 mb-1">Your budget</p>
              <p className="text-gray-600 text-sm">
                What's the ROI on fixing each leak? Not all inefficiencies are worth fixing. 
                Some cost more to address than they're losing. Prioritize by payback period 
                and implementation complexity.
              </p>
            </div>
          </div>
        </section>

        {/* What You're Building */}
        <section>
          <h2 className="text-lg font-semibold text-[#4AA88C] mb-4">What you're building</h2>
          <div className="prose prose-lg prose-gray max-w-none">
            <p>
              A leak map isn't a one-time audit. It's an ongoing system that identifies:
            </p>
            <ul>
              <li><strong>Energy leaks</strong> — heating, cooling, lighting, equipment running when it shouldn't</li>
              <li><strong>Material leaks</strong> — waste, spoilage, overuse, quality issues that create rework</li>
              <li><strong>Process leaks</strong> — redundant steps, bottlenecks, handoff failures, waiting time</li>
              <li><strong>Information leaks</strong> — decisions made without data, knowledge that walks out the door</li>
            </ul>
            <p>
              For each leak, you need: how big is it (annual cost), how hard is it to fix (effort/investment), 
              and what's the payback (ROI timeline). This creates a prioritized action list, not a vague 
              sense that things could be better.
            </p>
          </div>
        </section>

        {/* Milestone + Unlocks */}
        <section className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="font-semibold text-gray-900 mb-2">The milestone</h2>
          <p className="text-gray-600 mb-6">
            You've completed Stack 2 when you've identified your major leaks, prioritized them by ROI, 
            and closed the high-impact ones. You're not just aware of inefficiency — you've captured 
            margin that funds what comes next.
          </p>
          
          <h2 className="font-semibold text-gray-900 mb-2">What this unlocks</h2>
          <ul className="text-gray-600 space-y-2">
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">→</span>
              <span>Margin improvement you can show investors or lenders</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">→</span>
              <span>Cost reduction that funds further sustainability investment</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">→</span>
              <span>Operational improvements that satisfy bank due diligence</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">→</span>
              <span>Evidence for grant applications requiring demonstrated efficiency gains</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">→</span>
              <span>A tighter operation ready for Stack 3's circular value capture</span>
            </li>
          </ul>
        </section>

        {/* Systemic Impact */}
        <section>
          <h2 className="text-lg font-semibold text-[#4AA88C] mb-3">The systemic impact</h2>
          <p className="text-gray-600">
            Every efficiency gain is also a resource reduction — less energy, less waste, fewer inputs 
            for the same output. The cost savings and the emissions reductions are the same action. 
            You're not doing sustainability work separately from operational work. Fixing a leak 
            improves your margin and your environmental footprint simultaneously.
          </p>
        </section>

        {/* Common Starting Points */}
        <section className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-[#4AA88C] mb-4">Common starting points</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900 mb-2">The energy bill shock</p>
              <p className="text-gray-600 text-sm">Energy costs jumped and you can't explain why. Stack 2 breaks down consumption by use, time, and equipment to find what's actually driving cost.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900 mb-2">The margin squeeze</p>
              <p className="text-gray-600 text-sm">Prices are flat, costs are rising, margins are shrinking. Stack 2 finds the operational slack that's eating into profit.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900 mb-2">The waste problem</p>
              <p className="text-gray-600 text-sm">You're paying too much for disposal, or losing too much material before it becomes product. Stack 2 maps where value is leaking out.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900 mb-2">The capacity question</p>
              <p className="text-gray-600 text-sm">You think you need to invest in more capacity, but aren't sure you're using what you have. Stack 2 shows utilization reality.</p>
            </div>
          </div>
        </section>

        {/* What Good Looks Like */}
        <section>
          <h2 className="text-lg font-semibold text-[#4AA88C] mb-3">What good looks like</h2>
          <p className="text-gray-600 mb-4">A complete Stack 2 implementation means:</p>
          <ul className="text-gray-600 space-y-2">
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">✓</span>
              <span>You have a prioritized list of efficiency opportunities with estimated ROI</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">✓</span>
              <span>You've closed the quick wins — high impact, low effort improvements</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">✓</span>
              <span>You can quantify the margin improvement from efficiency work</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">✓</span>
              <span>You have a roadmap for larger efficiency investments with clear payback timelines</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#4AA88C]">✓</span>
              <span>Your operation is tight enough that circular initiatives won't just leak faster</span>
            </li>
          </ul>
          <p className="text-gray-600 mt-4">
            You don't need to fix everything. You need to fix the leaks that matter most and have 
            a system for catching new ones as they emerge.
          </p>
        </section>

        {/* Common Mistakes */}
        <section>
          <h2 className="text-lg font-semibold text-[#4AA88C] mb-3">Common mistakes</h2>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-gray-900 mb-1">Optimizing without measuring</p>
              <p className="text-gray-600 text-sm">Jumping to solutions before you've mapped the problems. You might fix something that wasn't broken while ignoring the real leak. Stack 1 exists for a reason.</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-1">Chasing every leak</p>
              <p className="text-gray-600 text-sm">Some inefficiencies cost more to fix than they're worth. Prioritize by ROI, not by how annoying they are. A 2% leak that costs €50K to fix isn't worth it if a 5% leak costs €5K.</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-1">Ignoring the human layer</p>
              <p className="text-gray-600 text-sm">Process inefficiency is often people inefficiency in disguise — unclear responsibilities, poor communication, incentives that reward the wrong behavior. Technology won't fix culture.</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-1">One-time efficiency projects</p>
              <p className="text-gray-600 text-sm">Efficiency isn't a project with an end date. New leaks emerge as conditions change. Build ongoing detection, not just a point-in-time audit.</p>
            </div>
          </div>
        </section>

      </div>

      {/* CTA Box */}
      <div className="mt-12 p-8 bg-[#5B4A9E] rounded-lg text-white">
        <h2 className="text-xl font-bold mb-2">Ready to find your leaks?</h2>
        <p className="text-white/80 mb-6">
          Start with the free Efficiency assessment to identify your biggest opportunities, 
          or get the complete toolkit to systematically map and close leaks.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/tools/efficiency-assessment" 
            className="inline-block bg-white text-[#5B4A9E] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            Free Assessment →
          </Link>
          <Link 
            href="/tools/efficiency-toolkit" 
            className="inline-block bg-white/10 text-white px-6 py-3 rounded font-semibold hover:bg-white/20 transition-colors"
          >
            Explore Toolkit
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link 
          href="/framework/stack-1-metrics" 
          className="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#4AA88C] transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: '#3D2E7C' }}>
              1
            </div>
            <div>
              <p className="text-sm text-gray-500">Previous</p>
              <p className="font-medium text-gray-900">Metrics</p>
            </div>
          </div>
        </Link>
        <Link 
          href="/framework/stack-3-circularity" 
          className="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#4AA88C] transition-colors"
        >
          <div className="flex items-center gap-3 justify-end text-right">
            <div>
              <p className="text-sm text-gray-500">Next</p>
              <p className="font-medium text-gray-900">Circularity</p>
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: '#7B6BB8' }}>
              3
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
