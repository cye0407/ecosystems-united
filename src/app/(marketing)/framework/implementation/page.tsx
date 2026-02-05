"use client";

import Link from "next/link";
import { useState } from "react";

const stackColors = {
  1: '#3D2E7C',
  2: '#5B4A9E',
  3: '#7B6BB8',
  4: '#9A8CD0',
  5: '#B8ADE3',
};

interface StackCardProps {
  number: number;
  title: string;
  subtitle: string;
  slug: string;
  children: React.ReactNode;
}

function StackCard({ number, title, subtitle, slug, children }: StackCardProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const color = stackColors[number as keyof typeof stackColors];

  return (
    <div className="not-prose my-10 bg-gray-50 rounded-lg border-l-4 overflow-hidden" style={{ borderLeftColor: color }}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" 
            style={{ backgroundColor: color }}
          >
            {number}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 m-0">{title}</h3>
            <p className="text-gray-500 italic m-0">{subtitle}</p>
          </div>
        </div>
        <svg 
          className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isExpanded && (
        <div className="px-6 pb-6">
          {children}
          <div className="text-right">
            <Link 
              href={`/framework/${slug}`} 
              className="inline-flex items-center gap-1 mt-4 px-4 py-2 text-sm font-medium text-white rounded hover:opacity-90 transition-opacity"
              style={{ backgroundColor: color }}
            >
              Deep dive on {title} →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ImplementationPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <header className="mb-12">
        <nav className="mb-8">
          <Link href="/framework" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to The Five Stacks
          </Link>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Implementation
        </h1>
        <p className="text-xl text-gray-600">
          How to use The Five Stacks
        </p>
      </header>

      {/* Main Content */}
      <article className="prose prose-lg prose-gray max-w-none">
        
        <p>
          The Five Stacks isn't a one-time assessment. It's an operating system — a way of seeing 
          your business and making decisions that compounds over time.
        </p>

        <p>This guide explains how it works.</p>

        <h2>Start with Fundamentals</h2>

        <p>Before you optimize anything, you need to know what's true.</p>

        <p><strong>Stack 0: Fundamentals</strong> establishes your context:</p>

        <ul>
          <li><strong>What business are you in?</strong> Not the industry — the actual game you're playing. Growth? Stability? Exit? Legacy?</li>
          <li><strong>What environment are you operating in?</strong> Market conditions, competitive landscape, regulatory pressure, customer expectations.</li>
          <li><strong>What are your constraints?</strong> Budget, team capacity, time horizon, risk tolerance.</li>
          <li><strong>What does winning look like?</strong> Not vague success — specific outcomes you'd recognize if you achieved them.</li>
        </ul>

        <p>
          This isn't a one-time exercise. You'll revisit Fundamentals during planning cycles, after 
          major changes, or when something feels off and you can't articulate why.
        </p>

        <p><strong>Don't skip this.</strong> Everything else builds on it.</p>

        <h2>The three lenses</h2>

        <p>Every stack examines your operation through three lenses:</p>

      </article>

      {/* Three Dimensions Table */}
      <div className="my-8 rounded-lg overflow-hidden border border-[#3D2E7C]/20">
        <table className="min-w-full text-sm">
          <thead style={{ backgroundColor: '#3D2E7C' }}>
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-white">Lens</th>
              <th className="px-6 py-4 text-left font-semibold text-white">Question</th>
              <th className="px-6 py-4 text-left font-semibold text-white">Why it matters</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="border-b border-gray-100">
              <td className="px-6 py-4 font-semibold text-gray-900">Your operation</td>
              <td className="px-6 py-4 text-gray-700">What's happening inside?</td>
              <td className="px-6 py-4 text-gray-600">Your processes, costs, capabilities, gaps — the things you control</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="px-6 py-4 font-semibold text-gray-900">Your environment</td>
              <td className="px-6 py-4 text-gray-700">What's happening outside?</td>
              <td className="px-6 py-4 text-gray-600">Market shifts, competitors, regulations, expectations — the things you respond to</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-semibold text-gray-900">Your budget</td>
              <td className="px-6 py-4 text-gray-700">What can you afford? What's the return?</td>
              <td className="px-6 py-4 text-gray-600">Because sustainability that doesn't pay for itself doesn't survive the next budget cycle</td>
            </tr>
          </tbody>
        </table>
      </div>

      <article className="prose prose-lg prose-gray max-w-none">

        <p>
          These aren't separate analyses. They're perspectives on the same reality. A complete 
          picture requires all three.
        </p>

        <h2>The stacks</h2>

      </article>

      {/* Stack 1 */}
      <StackCard number={1} title="Metrics" subtitle="Build your baseline" slug="stack-1-metrics">
        <p className="text-gray-700 mb-4">
          You can't improve what you can't see. Stack 1 builds visibility — what you're doing, 
          what's happening around you, what resources you have to work with.
        </p>

        <p className="font-medium text-gray-900 mb-2">The three lenses</p>
        <div className="space-y-2 mb-6 text-sm">
          <div className="flex gap-3">
            <span className="font-medium text-gray-700 w-32">Your operation</span>
            <span className="text-gray-600">What are we actually doing? Inputs, outputs, costs, flows.</span>
          </div>
          <div className="flex gap-3">
            <span className="font-medium text-gray-700 w-32">Your environment</span>
            <span className="text-gray-600">What game are we playing? Market position, competitive dynamics, regulatory landscape.</span>
          </div>
          <div className="flex gap-3">
            <span className="font-medium text-gray-700 w-32">Your budget</span>
            <span className="text-gray-600">What's our financial reality? Cash position, investment capacity, constraints.</span>
          </div>
        </div>

        {/* Milestone + Unlocks Container */}
        <div className="bg-white p-5 rounded-lg border border-gray-200 mb-4">
          <p className="font-semibold text-gray-900 mb-1">The milestone</p>
          <p className="text-gray-600 text-sm mb-4">
            You've completed Stack 1 when you have a baseline. You know your numbers. You can answer 
            basic questions about your operation without guessing.
          </p>
          
          <p className="font-semibold text-gray-900 mb-2">What this unlocks</p>
          <ul className="text-gray-600 text-sm space-y-1 ml-4 list-disc">
            <li>Respond to buyer sustainability questionnaires with confidence</li>
            <li>Answer Scope 3 data requests from customers</li>
            <li>Complete the data foundation for VSME or CSRD reporting</li>
            <li>Know where your money actually goes before making investment decisions</li>
          </ul>
        </div>

        <p className="text-sm text-gray-600">
          <strong>The systemic impact:</strong> The data you build here is the same data you need 
          for emissions tracking, resource reporting, and regulatory disclosure. One effort, two outcomes.
        </p>
      </StackCard>

      {/* Stack 2 */}
      <StackCard number={2} title="Efficiency" subtitle="Stop the leaks" slug="stack-2-efficiency">
        <p className="text-gray-700 mb-4">
          With visibility established, Stack 2 finds the leaks. Where are you spending more than 
          you need to? Where is effort producing less than it could?
        </p>

        <p className="font-medium text-gray-900 mb-2">The three lenses</p>
        <div className="space-y-2 mb-6 text-sm">
          <div className="flex gap-3">
            <span className="font-medium text-gray-700 w-32">Your operation</span>
            <span className="text-gray-600">Where are we bleeding margin? Waste, overuse, redundancy, friction.</span>
          </div>
          <div className="flex gap-3">
            <span className="font-medium text-gray-700 w-32">Your environment</span>
            <span className="text-gray-600">Where is the market leaking? Opportunities others are missing.</span>
          </div>
          <div className="flex gap-3">
            <span className="font-medium text-gray-700 w-32">Your budget</span>
            <span className="text-gray-600">What's the ROI on fixing each leak? Where do we start?</span>
          </div>
        </div>

        {/* Milestone + Unlocks Container */}
        <div className="bg-white p-5 rounded-lg border border-gray-200 mb-4">
          <p className="font-semibold text-gray-900 mb-1">The milestone</p>
          <p className="text-gray-600 text-sm mb-4">
            You've completed Stack 2 when you've identified your major leaks, prioritized them, 
            and closed the high-impact ones.
          </p>
          
          <p className="font-semibold text-gray-900 mb-2">What this unlocks</p>
          <ul className="text-gray-600 text-sm space-y-1 ml-4 list-disc">
            <li>Margin improvement you can show investors or lenders</li>
            <li>Cost reduction that funds further sustainability investment</li>
            <li>Operational improvements that satisfy bank due diligence</li>
            <li>Evidence for grant applications requiring demonstrated efficiency gains</li>
          </ul>
        </div>

        <p className="text-sm text-gray-600">
          <strong>The systemic impact:</strong> Every efficiency gain is also a resource reduction — 
          less energy, less waste, fewer inputs. The cost savings and the emissions reductions are the same action.
        </p>
      </StackCard>

      {/* Stack 3 */}
      <StackCard number={3} title="Circularity" subtitle="Capture the lost margin" slug="stack-3-circularity">
        <p className="text-gray-700 mb-4">
          Every output can be an input. Stack 3 identifies what's leaving your system without 
          being monetized — physical waste, idle assets, data you're not using. The shift is from 
          disposal to deployment.
        </p>

        <p className="font-medium text-gray-900 mb-2">The three lenses</p>
        <div className="space-y-2 mb-6 text-sm">
          <div className="flex gap-3">
            <span className="font-medium text-gray-700 w-32">Your operation</span>
            <span className="text-gray-600">What's leaving the system uncaptured? Waste streams, by-products, underused assets.</span>
          </div>
          <div className="flex gap-3">
            <span className="font-medium text-gray-700 w-32">Your environment</span>
            <span className="text-gray-600">Who needs what you're throwing away? Where are the symbiosis opportunities?</span>
          </div>
          <div className="flex gap-3">
            <span className="font-medium text-gray-700 w-32">Your budget</span>
            <span className="text-gray-600">What's the dollar value of the leakage — revenue potential vs. cost avoidance?</span>
          </div>
        </div>

        {/* Milestone + Unlocks Container */}
        <div className="bg-white p-5 rounded-lg border border-gray-200 mb-4">
          <p className="font-semibold text-gray-900 mb-1">The milestone</p>
          <p className="text-gray-600 text-sm mb-4">
            You've completed Stack 3 when you've mapped your value leakage and have active 
            initiatives reclaiming that margin.
          </p>
          
          <p className="font-semibold text-gray-900 mb-2">What this unlocks</p>
          <ul className="text-gray-600 text-sm space-y-1 ml-4 list-disc">
            <li>New revenue from former waste streams</li>
            <li>Reduced disposal costs</li>
            <li>Closed-loop credentials for tenders and partnerships</li>
            <li>Verified data for sustainability-linked loans and green financing</li>
          </ul>
        </div>

        <p className="text-sm text-gray-600">
          <strong>The systemic impact:</strong> Circularity is the engine of environmental sustainability — 
          closing loops, reducing extraction, keeping materials in use. Your margin improvement is the 
          environmental metric.
        </p>
      </StackCard>

      {/* Stack 4 */}
      <StackCard number={4} title="Resilience" subtitle="Design for volatility" slug="stack-4-resilience">
        <p className="text-gray-700 mb-4">
          Efficiency without resilience is fragile. Stack 4 builds the capacity to flex — not just 
          survive disruptions, but adapt to shifts before they become crises.
        </p>

        <p className="font-medium text-gray-900 mb-2">The three lenses</p>
        <div className="space-y-2 mb-6 text-sm">
          <div className="flex gap-3">
            <span className="font-medium text-gray-700 w-32">Your operation</span>
            <span className="text-gray-600">What could break us? Single points of failure, concentration risk, brittle systems.</span>
          </div>
          <div className="flex gap-3">
            <span className="font-medium text-gray-700 w-32">Your environment</span>
            <span className="text-gray-600">What's shifting around us? Trends, disruptions, emerging risks.</span>
          </div>
          <div className="flex gap-3">
            <span className="font-medium text-gray-700 w-32">Your budget</span>
            <span className="text-gray-600">What's the cost of fragility vs. the cost of redundancy?</span>
          </div>
        </div>

        {/* Scenario Planning Callout - Light Purple */}
        <div className="bg-[#B8ADE3]/10 border border-[#9A8CD0]/30 p-4 rounded-lg mb-6">
          <p className="font-semibold text-gray-900 mb-2">This is where prediction becomes possible.</p>
          <p className="text-gray-700 text-sm mb-3">
            With your baseline from Stacks 1-3, you can model scenarios:
          </p>
          <ul className="text-gray-700 text-sm space-y-1 ml-4 list-disc">
            <li><strong>Plan A:</strong> Business as usual — current trajectory</li>
            <li><strong>Plan B:</strong> Moderate disruption — supply chain shock, price spike, key customer loss</li>
            <li><strong>Plan C:</strong> Major shift — regulatory change, market transformation, climate event</li>
            <li><strong>Plan D:</strong> Opportunity scenario — what if that emerging trend accelerates in your favor?</li>
          </ul>
          <p className="text-gray-700 text-sm mt-3">
            You're not guessing anymore. You're running scenarios against real data.
          </p>
        </div>

        {/* Milestone + Unlocks Container */}
        <div className="bg-white p-5 rounded-lg border border-gray-200 mb-4">
          <p className="font-semibold text-gray-900 mb-1">The milestone</p>
          <p className="text-gray-600 text-sm mb-4">
            You've completed Stack 4 when you've mapped vulnerabilities, built appropriate redundancy, 
            have sensing mechanisms for external shifts, and can run scenarios with confidence.
          </p>
          
          <p className="font-semibold text-gray-900 mb-2">What this unlocks</p>
          <ul className="text-gray-600 text-sm space-y-1 ml-4 list-disc">
            <li>Risk assessment that satisfies investor due diligence</li>
            <li>Supply chain resilience documentation for enterprise customers</li>
            <li>Scenario planning that informs capital allocation</li>
            <li>Insurance and lending applications with demonstrated risk management</li>
            <li>Board-ready contingency plans</li>
          </ul>
        </div>

        <p className="text-sm text-gray-600">
          <strong>The systemic impact:</strong> Climate adaptation is resilience. Supply chain robustness 
          is resilience. The same capabilities that protect your business also prepare you for 
          climate-related disclosure requirements.
        </p>
      </StackCard>

      {/* Stack 5 */}
      <StackCard number={5} title="Regeneration" subtitle="Compound advantage" slug="stack-5-regeneration">
        <p className="text-gray-700 mb-4">
          With operational capability built, Stack 5 turns it into market position. Premium pricing, 
          preferred partnerships, competitive differentiation — based on proof, not claims.
        </p>

        <p className="font-medium text-gray-900 mb-2">The three lenses</p>
        <div className="space-y-2 mb-6 text-sm">
          <div className="flex gap-3">
            <span className="font-medium text-gray-700 w-32">Your operation</span>
            <span className="text-gray-600">How do we position? Story, proof points, differentiation.</span>
          </div>
          <div className="flex gap-3">
            <span className="font-medium text-gray-700 w-32">Your environment</span>
            <span className="text-gray-600">Where is the landscape going? Future premium opportunities.</span>
          </div>
          <div className="flex gap-3">
            <span className="font-medium text-gray-700 w-32">Your budget</span>
            <span className="text-gray-600">What premium can we capture? What's the payback on positioning investment?</span>
          </div>
        </div>

        {/* Milestone + Unlocks Container */}
        <div className="bg-white p-5 rounded-lg border border-gray-200 mb-4">
          <p className="font-semibold text-gray-900 mb-1">The milestone</p>
          <p className="text-gray-600 text-sm mb-4">
            You've completed Stack 5 when your operational capabilities translate into market advantage — 
            premium pricing, certifications, or preferred partnerships you couldn't access before.
          </p>
          
          <p className="font-semibold text-gray-900 mb-2">What this unlocks</p>
          <ul className="text-gray-600 text-sm space-y-1 ml-4 list-disc">
            <li>Premium pricing backed by documented practices</li>
            <li>Certification readiness (B Corp, industry ecolabels, regenerative standards)</li>
            <li>Preferred supplier status with sustainability-conscious buyers</li>
            <li>Talent attraction — people want to work for companies that mean it</li>
            <li>Brand differentiation that competitors can't fake</li>
          </ul>
        </div>

        <p className="text-sm text-gray-600">
          <strong>The systemic impact:</strong> This is where environmental sustainability becomes visible 
          and verifiable. Ecolabels, certifications, verified claims — all built on the operational proof 
          from Stacks 1-4.
        </p>
      </StackCard>

      <article className="prose prose-lg prose-gray max-w-none">

        <h2>The progression logic</h2>

        <p>The sequence matters. Each stack creates conditions that make the next one possible:</p>

      </article>

      {/* Progression Table - Redesigned */}
      <div className="my-8 space-y-3">
        <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
          <div className="flex items-center gap-2 min-w-[140px]">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs" style={{ backgroundColor: '#3D2E7C' }}>1</div>
            <span className="font-medium text-gray-900">Metrics</span>
          </div>
          <span className="text-gray-400">→</span>
          <span className="text-gray-600 text-sm">Without visibility, you can't find leaks you can't see</span>
        </div>
        <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
          <div className="flex items-center gap-2 min-w-[140px]">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs" style={{ backgroundColor: '#5B4A9E' }}>2</div>
            <span className="font-medium text-gray-900">Efficiency</span>
          </div>
          <span className="text-gray-400">→</span>
          <span className="text-gray-600 text-sm">Circular systems on a leaky operation just leak faster</span>
        </div>
        <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
          <div className="flex items-center gap-2 min-w-[140px]">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs" style={{ backgroundColor: '#7B6BB8' }}>3</div>
            <span className="font-medium text-gray-900">Circularity</span>
          </div>
          <span className="text-gray-400">→</span>
          <span className="text-gray-600 text-sm">Resilience without value capture is just cost</span>
        </div>
        <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
          <div className="flex items-center gap-2 min-w-[140px]">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs" style={{ backgroundColor: '#9A8CD0' }}>4</div>
            <span className="font-medium text-gray-900">Resilience</span>
          </div>
          <span className="text-gray-400">→</span>
          <span className="text-gray-600 text-sm">Positioning claims without operational proof is greenwashing</span>
        </div>
      </div>

      <article className="prose prose-lg prose-gray max-w-none">

        <p>
          You can work on adjacent stacks simultaneously. You might implement efficiency improvements 
          while still building metrics. But you can't skip ahead. Stack 5 without Stacks 1-4 is 
          just narrative without substance.
        </p>

        <h2>The rhythm</h2>

        <p>The Five Stacks isn't a project with an end date. It's an operating rhythm.</p>

        <h3>Initial setup</h3>
        
        <ol>
          <li>Complete Fundamentals — context, constraints, goals</li>
          <li>Assess current state across all 5 stacks (surface level)</li>
          <li>Identify starting point — which stack needs most attention?</li>
          <li>Deep dive on priority stack</li>
          <li>Establish baseline metrics</li>
        </ol>

        <h3>Ongoing operation</h3>
        <ul>
          <li><strong>Continuous:</strong> System tracks metrics, surfaces drift</li>
          <li><strong>Weekly/Monthly:</strong> Check dashboard, note changes, minor adjustments</li>
          <li><strong>Quarterly:</strong> Review progress, update priorities, deep dive one stack</li>
          <li><strong>Annually:</strong> Full Fundamentals review, landscape update, strategy alignment</li>
          <li><strong>Triggered:</strong> Major change? Relevant stack review.</li>
        </ul>

        <p>
          <strong>The system complements your existing tools.</strong> OKRs tell you what you're trying 
          to achieve. EOS gives you meeting rhythms. Annual planning sets direction. The Five Stacks 
          provides the operational visibility that those systems assume you already have.
        </p>

        <h2>What winning looks like</h2>

        <h3>For the 15-person manufacturer</h3>
        <p>
          You started because a major customer asked for Scope 3 data. Six months in, you've got the 
          data foundation (Stack 1), identified €47K in energy waste (Stack 2), and discovered a 
          by-product stream you're now selling instead of paying to dispose of (Stack 3). The Scope 3 
          request? Answered in two days. The customer relationship? Stronger than ever.
        </p>

        <h3>For the family-owned food business</h3>
        <p>
          You needed financing for expansion. Banks wanted to see sustainability credentials. Twelve 
          months of Five Stacks work gave you: documented operational improvements, clear risk management, 
          and a resilience plan with three scenarios modeled. Loan approved. Interest rate better than 
          expected because you demonstrated lower risk.
        </p>

        <h3>For the ag operation preparing for succession</h3>
        <p>
          You're planning to hand over in five years. The Five Stacks baseline gave you — and your 
          successor — clear visibility into what's working, what's fragile, and what the operation 
          actually looks like beyond "how we've always done it." The farm is now documentable, 
          transferable, and positioned for premium markets the next generation can build on.
        </p>

        <h3>For the retail brand tired of competitors' empty claims</h3>
        <p>
          Your competitors make claims they can't back up. You spent 18 months building operational 
          proof — from metrics through resilience. Now you have certifications they can't get, supplier 
          relationships they can't match, and a story that's actually true. Premium pricing follows.
        </p>

        <h2>Success by timeframe</h2>

      </article>

      {/* Visual Timeline */}
      <div className="my-12">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3D2E7C] via-[#7B6BB8] to-[#B8ADE3]"></div>
          
          {/* Short-term */}
          <div className="relative pl-16 pb-12">
            <div className="absolute left-3 w-7 h-7 rounded-full bg-[#3D2E7C] border-4 border-white shadow flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-bold text-[#3D2E7C] bg-[#3D2E7C]/10 px-3 py-1 rounded-full">3-6 months</span>
                <h3 className="text-lg font-bold text-gray-900 m-0">Foundation</h3>
              </div>
              <ul className="text-gray-600 text-sm space-y-2 ml-4 list-disc">
                <li>Clear baseline metrics established</li>
                <li>Major leaks identified and prioritized</li>
                <li>First efficiency improvements showing ROI</li>
                <li>External landscape mapped</li>
                <li>Ready to answer basic sustainability questionnaires</li>
              </ul>
            </div>
          </div>

          {/* Medium-term */}
          <div className="relative pl-16 pb-12">
            <div className="absolute left-3 w-7 h-7 rounded-full bg-[#7B6BB8] border-4 border-white shadow flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-bold text-[#7B6BB8] bg-[#7B6BB8]/10 px-3 py-1 rounded-full">6-18 months</span>
                <h3 className="text-lg font-bold text-gray-900 m-0">Momentum</h3>
              </div>
              <ul className="text-gray-600 text-sm space-y-2 ml-4 list-disc">
                <li>Efficiency gains funding further investment</li>
                <li>Circular value capture initiatives active</li>
                <li>Resilience gaps identified and addressed</li>
                <li>VSME or CSRD data requirements achievable</li>
                <li>Scenario planning operational</li>
                <li>Financing and insurance conversations easier</li>
              </ul>
            </div>
          </div>

          {/* Long-term */}
          <div className="relative pl-16">
            <div className="absolute left-3 w-7 h-7 rounded-full bg-[#B8ADE3] border-4 border-white shadow flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-bold text-[#9A8CD0] bg-[#9A8CD0]/10 px-3 py-1 rounded-full">18+ months</span>
                <h3 className="text-lg font-bold text-gray-900 m-0">Compounding</h3>
              </div>
              <ul className="text-gray-600 text-sm space-y-2 ml-4 list-disc">
                <li>Compounding advantage visible in margins and positioning</li>
                <li>Environmental sustainability provable, not just claimed</li>
                <li>System running as ongoing operating rhythm</li>
                <li>Adaptive capacity built — ready for whatever shifts come</li>
                <li>Certifications and premium positioning earned</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <article className="prose prose-lg prose-gray max-w-none">

        <p className="text-lg font-medium text-gray-900">
          The win state isn't "finished." It's operational capability that compounds — and proof that 
          sustainability is, in fact, good business.
        </p>

        <h2>What the system does</h2>

      </article>

      {/* What System Does Table */}
      <div className="my-8 rounded-lg overflow-hidden border border-[#3D2E7C]/20">
        <table className="min-w-full text-sm">
          <thead style={{ backgroundColor: '#3D2E7C' }}>
            <tr>
              <th className="px-6 py-3 text-left font-semibold text-white">Function</th>
              <th className="px-6 py-3 text-left font-semibold text-white">Example</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="border-b border-gray-100">
              <td className="px-6 py-3 font-medium text-gray-700">Illuminates</td>
              <td className="px-6 py-3 text-gray-600">"Your energy costs are 40% above industry benchmark"</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="px-6 py-3 font-medium text-gray-700">Reflects</td>
              <td className="px-6 py-3 text-gray-600">"You set margin improvement as a goal. Stack 2 hasn't moved in 6 months."</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="px-6 py-3 font-medium text-gray-700">Surfaces gaps</td>
              <td className="px-6 py-3 text-gray-600">"Strong internal metrics, but external landscape not updated since Q1"</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="px-6 py-3 font-medium text-gray-700">Provides context</td>
              <td className="px-6 py-3 text-gray-600">"Companies in your vertical are facing X regulatory shift"</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="px-6 py-3 font-medium text-gray-700">Shares patterns</td>
              <td className="px-6 py-3 text-gray-600">"Organizations with similar profiles often prioritize Y"</td>
            </tr>
            <tr>
              <td className="px-6 py-3 font-medium text-gray-700">Prompts questions</td>
              <td className="px-6 py-3 text-gray-600">"Have you considered...?" / "What would happen if...?"</td>
            </tr>
          </tbody>
        </table>
      </div>

      <article className="prose prose-lg prose-gray max-w-none">

        <h2>What the system does not do</h2>

      </article>

      {/* What System Does NOT Do Table */}
      <div className="my-8 rounded-lg overflow-hidden border border-[#3D2E7C]/20">
        <table className="min-w-full text-sm">
          <thead style={{ backgroundColor: '#3D2E7C' }}>
            <tr>
              <th className="px-6 py-3 text-left font-semibold text-white">Function</th>
              <th className="px-6 py-3 text-left font-semibold text-white">Why not</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="border-b border-gray-100">
              <td className="px-6 py-3 font-medium text-gray-700">Prescribe actions</td>
              <td className="px-6 py-3 text-gray-600">"You should do X" — You decide, not us</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="px-6 py-3 font-medium text-gray-700">Promise outcomes</td>
              <td className="px-6 py-3 text-gray-600">"This will increase profit by Y%" — We don't control your execution</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="px-6 py-3 font-medium text-gray-700">Replace judgment</td>
              <td className="px-6 py-3 text-gray-600">The system informs. You lead.</td>
            </tr>
            <tr>
              <td className="px-6 py-3 font-medium text-gray-700">Take responsibility</td>
              <td className="px-6 py-3 text-gray-600">Your business, your outcomes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <article className="prose prose-lg prose-gray max-w-none">

        <p className="text-lg font-medium text-gray-900">
          The system is a mirror, not a consultant. A navigator, not a driver.
        </p>

        <p>We illuminate. You decide.</p>

        <h2>Common mistakes</h2>

        <h3>Starting with Stack 5</h3>
        <p>
          The most common mistake. You want premium positioning, certifications, market differentiation — 
          so you start there. But without Stacks 1-4, there's nothing to position. Claims without proof 
          is greenwashing.
        </p>
        <p><em>Fix: Build the foundation first. Stack 5 is where you end up, not where you start.</em></p>

        <h3>Skipping Fundamentals</h3>
        <p>
          Jumping straight into metrics and efficiency without establishing context. You end up optimizing 
          for the wrong goals or missing constraints that matter.
        </p>
        <p><em>Fix: Take the time upfront. Revisit when things feel off.</em></p>

        <h3>Treating it as a one-time assessment</h3>
        <p>
          Running through the stacks once, producing a report, filing it away. The value comes from the 
          ongoing rhythm, not the initial snapshot.
        </p>
        <p><em>Fix: Build it into your operating cadence. Quarterly reviews minimum.</em></p>

        <h3>Ignoring the external dimension</h3>
        <p>
          Focusing only on internal operations without tracking what's changing around you. You optimize 
          for a world that no longer exists.
        </p>
        <p><em>Fix: External landscape review is not optional. Build it in.</em></p>

        <h3>Perfectionism in early stacks</h3>
        <p>
          Waiting until Stack 1 metrics are perfect before moving to Stack 2. You don't need perfect 
          data to start finding leaks.
        </p>
        <p><em>Fix: Good enough to act is good enough. Iterate.</em></p>

      </article>

      {/* Bottom CTA */}
      <div className="mt-16 p-8 bg-[#1a1a2e] rounded-lg text-white">
        <p className="text-lg text-white/80 mb-6">
          Ready to see how it works in practice?
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/see-it-in-action" 
            className="inline-block bg-[#4AA88C] text-white px-6 py-3 rounded font-semibold hover:bg-[#3d8f76] transition-colors"
          >
            See It In Action →
          </Link>
          <Link 
            href="/tools" 
            className="inline-block bg-white/10 text-white px-6 py-3 rounded font-semibold hover:bg-white/20 transition-colors"
          >
            Explore Tools →
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
