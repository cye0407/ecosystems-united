import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "Energy from Agricultural Biomass: Turning Residues into Power",
  description: "Practical guide to on-farm energy from biomass. Wood chip boilers, anaerobic digestion, and small-scale options — what works, what doesn't, and whether the economics stack up.",
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/framework/stack-3-circularity" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#7B6BB8] transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Stack 3: Circular Value Creation
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#7B6BB8] text-white flex items-center justify-center font-bold text-sm">
            3
          </div>
          <span className="text-sm text-gray-500">Stack 3: Circular Value Creation</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Energy from Agricultural Biomass: Turning Residues into Power
        </h1>
        <p className="text-xl text-gray-600">
          Every farm generates organic material that could displace purchased energy. The question isn&apos;t whether biomass energy works &mdash; it&apos;s whether the economics work at your scale.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <h2>Farm Biomass You&apos;re Probably Not Using</h2>
        <p>
          Walk around most farms and you&apos;ll find energy sitting in piles. Hedgerow trimmings stacked in corners. Orchard prunings burned in the field. Woodland thinnings left to rot. Straw surplus baled and forgotten. These aren&apos;t waste &mdash; they&apos;re fuel you&apos;re not burning.
        </p>
        <p>
          The range of on-farm biomass is wider than most operators realise. Woody material from hedgerows, orchards, and managed woodland. Straw surplus beyond what&apos;s needed for bedding or soil incorporation. Dedicated energy crops like miscanthus or short rotation coppice if you have marginal land that doesn&apos;t justify food production. Chicken litter from poultry operations. Dairy slurry and cattle manure from livestock housing.
        </p>
        <p>
          Each of these has a different energy content, different handling requirements, and different conversion technologies that suit it best. The mistake most people make is assuming biomass energy means one thing. It doesn&apos;t. The technology you choose depends entirely on what you&apos;ve got and what energy you need.
        </p>
        <p>
          Before investing in anything, do an honest inventory. How much biomass does your operation actually generate? Is it consistent year-round or seasonal? What does it currently cost you to manage or dispose of it? That last question matters more than you&apos;d think &mdash; biomass energy doesn&apos;t just generate value from the energy produced, it eliminates the cost of dealing with material you&apos;d otherwise need to handle anyway.
        </p>

        <h2>Biomass Heating: The Most Proven Option</h2>
        <p>
          If you&apos;re heating farm buildings with oil or LPG, biomass heating is the most straightforward displacement opportunity. Wood chip and pellet boilers are mature technology with decades of track record. They&apos;re not experimental. They&apos;re not cutting-edge. They work.
        </p>
        <p>
          The applications are everywhere on a working farm: heating livestock housing, grain drying, warming glasshouses, domestic heating for the farmhouse. Anywhere you&apos;re currently burning fossil fuel for heat is a candidate.
        </p>
        <p>
          Realistic costs vary significantly by scale. A domestic-scale pellet boiler might run &pound;10,000&ndash;15,000 installed. A larger wood chip system for farm buildings could be &pound;30,000&ndash;80,000 depending on output. On top of the boiler itself, you need fuel storage &mdash; a covered chip store or pellet silo &mdash; and potentially fuel processing equipment if you&apos;re chipping your own material rather than buying in processed fuel.
        </p>
        <p>
          The Renewable Heat Incentive (RHI) or equivalent subsidy schemes, where they still exist, significantly change the economics. With RHI payments, payback on a well-specified system typically runs 5&ndash;8 years. Without subsidy support, you&apos;re looking at longer payback periods &mdash; but the economics can still work if your existing fuel costs are high and your biomass supply is genuinely free or very cheap.
        </p>
        <p>
          The critical factor is fuel supply reliability. A biomass boiler that runs out of fuel in January is worse than useless. If you&apos;re planning to supply fuel from your own operation, be conservative in your estimates. If you&apos;re buying in wood chip or pellets, lock in supply contracts before committing to the boiler.
        </p>

        <h2>Anaerobic Digestion: Powerful but Capital Intensive</h2>
        <p>
          Anaerobic digestion (AD) converts organic material &mdash; manure, slurry, crop waste, food waste &mdash; into biogas and digestate. The biogas can fuel a combined heat and power (CHP) engine to generate electricity and heat simultaneously. The digestate is a nutrient-rich fertiliser that replaces purchased inputs.
        </p>
        <p>
          On paper, AD is the ultimate circular technology. It takes your most problematic waste streams and turns them into energy and fertiliser. In practice, it&apos;s substantially more complex and capital-intensive than biomass heating.
        </p>
        <p>
          AD works best for large livestock operations with consistent, year-round feedstock. A dairy herd of 200+ cows generating slurry daily provides the kind of reliable input an AD plant needs. Seasonal crop waste alone rarely justifies the investment because the plant needs feeding continuously, not just at harvest.
        </p>
        <p>
          Capital costs are significant &mdash; a farm-scale AD plant typically starts at &pound;500,000 and can easily reach several million for larger installations. Government support schemes for electricity generation (feed-in tariffs or their successors) are critical to the financial case. Without them, payback periods stretch beyond what most farm businesses can tolerate.
        </p>
        <p>
          One model worth considering: cooperative AD plants shared between multiple farms. Several operations pool their feedstock, share the capital cost, and split the energy output and digestate. This reduces individual investment while achieving the scale needed to make the numbers work. It requires good relationships and clear agreements, but successful cooperative AD schemes exist across Europe.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Small-Scale Options That Pay Back Quickly</h2>
        <p>
          Not every biomass energy project needs to be industrial-scale. Some of the fastest paybacks come from the simplest interventions.
        </p>
        <p>
          A small biomass boiler for farmhouse heating can displace &pound;2,000&ndash;4,000 per year in oil costs. If you&apos;re supplying your own wood fuel from hedgerow management or woodland thinning &mdash; material you&apos;d need to manage anyway &mdash; the fuel cost is essentially your labour plus chainsaw fuel. Payback on a domestic-scale system using free fuel can be under five years.
        </p>
        <p>
          Straw bale boilers for grain drying are another quick win for arable operations with surplus straw. The technology is straightforward, the fuel is on-site, and grain drying is one of the most energy-intensive operations on an arable farm. Displacing propane or diesel-fired dryers with straw makes immediate financial sense.
        </p>
        <p>
          Firewood production from hedgerow management is the lowest-capital option of all. Managed hedgerows need periodic cutting regardless. Processing that material into firewood &mdash; or even selling it as logs to local customers &mdash; turns a maintenance cost into revenue. You don&apos;t need a boiler for this. You need a chainsaw, a log splitter, and somewhere to season the wood.
        </p>
        <p>
          The common thread: start with what you already have, use technology that&apos;s proven, and target the energy costs that hurt most.
        </p>

        <h2>The Numbers: What Actually Makes Sense at Farm Scale</h2>
        <p>
          Here&apos;s where most biomass energy guides fall apart &mdash; they talk about potential without talking about costs. Let&apos;s be specific.
        </p>
        <p>
          <strong>Biomass heating (wood chip boiler, 100kW):</strong> Capital cost &pound;40,000&ndash;60,000 including fuel store. Annual fuel cost using own material: &pound;1,500&ndash;3,000 (processing and handling). Annual fuel cost displaced: &pound;8,000&ndash;15,000 (heating oil equivalent). Net annual saving: &pound;5,000&ndash;12,000. Payback: 4&ndash;10 years depending on scale and subsidy.
        </p>
        <p>
          <strong>Anaerobic digestion (250kW CHP):</strong> Capital cost &pound;1.5&ndash;2.5 million. Annual operating costs: &pound;80,000&ndash;120,000. Annual revenue (electricity sales + heat use + fertiliser displacement): &pound;200,000&ndash;350,000 with support payments. Net annual return: &pound;80,000&ndash;230,000. Payback: 7&ndash;15 years. Minimum viable scale: typically 200+ dairy cows or equivalent feedstock.
        </p>
        <p>
          <strong>Domestic pellet boiler:</strong> Capital cost &pound;10,000&ndash;15,000. Annual pellet cost: &pound;1,200&ndash;1,800. Annual heating oil displaced: &pound;2,500&ndash;4,000. Net annual saving: &pound;700&ndash;2,200. Payback: 5&ndash;15 years.
        </p>
        <p>
          Don&apos;t forget the hidden costs. Fuel processing equipment &mdash; a wood chipper capable of handling hedgerow material costs &pound;5,000&ndash;20,000 depending on size. Fuel storage needs to be covered and ventilated. Maintenance on biomass boilers is higher than oil boilers &mdash; budget &pound;500&ndash;1,500 per year depending on system size. And your time counts. Someone needs to manage fuel supply, feed the system, and clear ash.
        </p>

        <h2>Energy, Emissions, and Your ESG Story</h2>
        <p>
          Every unit of energy you generate from biomass displaces a unit of fossil fuel. This directly reduces your Scope 1 emissions (on-site combustion of fossil fuels) and potentially your Scope 2 emissions (purchased electricity, if you&apos;re generating your own). That&apos;s the climate case, and it&apos;s straightforward.
        </p>
        <p>
          But the business case runs deeper. On-farm renewable energy is a hedge against energy price volatility. When oil prices spike, your heating costs don&apos;t. When electricity prices surge, your AD plant keeps generating at the same cost. This predictability has genuine financial value that doesn&apos;t show up in simple payback calculations.
        </p>
        <p>
          For ESG reporting &mdash; increasingly important as supply chain sustainability requirements cascade down from large buyers &mdash; on-farm renewable energy is one of the strongest data points you can present. It&apos;s tangible, measurable, and demonstrates genuine operational commitment rather than purchased offsets or aspirational targets.
        </p>
        <p>
          Under CSRD reporting frameworks, your energy mix matters. Being able to document that a meaningful percentage of your operational energy comes from on-farm renewable sources strengthens your position with buyers who face their own Scope 3 reporting obligations. Your renewable energy becomes part of their sustainability story too.
        </p>
        <p>
          The dual benefit is what makes biomass energy genuinely strategic rather than merely virtuous: it reduces costs AND strengthens your market position. That&apos;s the definition of circular value creation &mdash; turning what would be waste into competitive advantage.
        </p>
      </article>

      {/* Bottom CTA - Stack 3 */}
      <div className="mt-12 p-8 bg-[#7B6BB8] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to turn farm biomass into energy and margin?</h3>
        <p className="text-white/80 mb-4">
          On-farm energy generation is Stack 3 &mdash; Circular Value Creation &mdash; in action. Converting residues and waste streams into power, heat, and competitive advantage.
        </p>
        <p className="text-white/80 mb-6">
          The Five Stacks Framework helps you identify which biomass energy opportunities fit your operation, build the business case, and document the sustainability outcomes that matter to buyers and regulators.
        </p>
        <Link href="/framework/stack-3-circularity" className="inline-block bg-white text-[#7B6BB8] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          Explore Stack 3: Circular Value Creation &rarr;
        </Link>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/farm-waste-to-value" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">Farm Waste to Value &rarr;</span>
            <span className="block text-sm text-gray-600">Turning agricultural residues into revenue streams beyond energy</span>
          </Link>
          <Link href="/articles/value-chains-economic-efficiency" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">Value Chains and Economic Efficiency &rarr;</span>
            <span className="block text-sm text-gray-600">How circular thinking restructures the economics of agricultural operations</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
