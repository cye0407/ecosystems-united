import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "The Complete Guide to Intercropping for Farms",
  description: "How intercropping and multi-crop systems build resilience, reduce inputs, and stabilize yields. Practical guide for temperate farms.",
  keywords: ["intercropping", "multi-crop systems", "resilience", "agriculture", "sustainability", "cereal-legume", "companion planting", "polyculture", "pest management", "climate resilience"],
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/articles" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> All guides
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          The Complete Guide to Intercropping for Farms
        </h1>
        <p className="text-xl text-gray-600">
          How multi-crop systems reduce risk, cut input costs, and stabilize yields&mdash;without requiring a PhD in agronomy.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          Monoculture is efficient right up until it isn&rsquo;t. One pest outbreak, one price collapse, one season of wrong weather&mdash;and a single-crop system has no fallback. Intercropping is the oldest risk management tool in agriculture, and it is making a serious comeback for a reason that has nothing to do with nostalgia: it works on the balance sheet.
        </p>
        <p>
          This guide covers what intercropping actually involves at an operational level, how to measure whether it is paying off, and where to start if you have never grown two crops in the same field. Every section links to a deeper article so you can drill into the details that matter for your specific operation.
        </p>

        <h2>What Intercropping Is (and What It Is Not)</h2>
        <p>
          Intercropping means growing two or more crops simultaneously in the same field during the same season. The crops share space, light, water, and nutrients&mdash;and when the pairing is right, they share the benefits too. Nitrogen fixation from a legume feeds the cereal next to it. A tall crop provides wind shelter for a shorter one. A fast-maturing species covers the soil while a slow one establishes.
        </p>
        <p>
          It is not the same as crop rotation, where different crops follow each other across seasons. And it is not simply polyculture, though the two overlap. If you are unclear on where the line sits, our comparison of <Link href="/articles/intercropping-vs-polyculture" className="text-[#9A8CD0] hover:underline">intercropping versus polyculture</Link> lays out the practical differences and when each approach makes sense.
        </p>
        <p>
          For a broader orientation on the principles and history, the <Link href="/articles/introduction-to-intercropping" className="text-[#9A8CD0] hover:underline">introduction to intercropping</Link> covers the fundamentals without assuming prior experience.
        </p>

        <h2>Types of Intercropping: Picking the Right Layout</h2>
        <p>
          Not all intercropping looks the same. The spatial arrangement you choose determines how easy the system is to manage with existing equipment and how much yield benefit you can realistically capture.
        </p>
        <ul>
          <li><strong>Row intercropping</strong> alternates rows of different crops. This is the most machinery-friendly option and the easiest entry point for conventional farms. You can plant and harvest each crop independently with standard equipment.</li>
          <li><strong>Strip intercropping</strong> uses wider bands of each crop&mdash;typically several rows per strip. It retains many of the ecological benefits while making field operations straightforward.</li>
          <li><strong>Mixed intercropping</strong> sows two or more species together without distinct rows. This maximizes canopy coverage and soil interaction but makes selective harvesting difficult. It works well when both crops are harvested together or when one is a cover species.</li>
          <li><strong>Relay intercropping</strong> staggers planting dates so the second crop is sown into the first before harvest. This extends the growing season and can squeeze two revenue streams from one field without full overlap.</li>
        </ul>
        <p>
          The right layout depends on your equipment, labour availability, and which crops you are combining. Our detailed guide to <Link href="/articles/intercropping-practices" className="text-[#9A8CD0] hover:underline">intercropping practices</Link> walks through each system with implementation specifics for temperate operations.
        </p>

        <h2>The Economics: Why the Numbers Work</h2>
        <p>
          The case for intercropping is not ideological. It is financial. Three mechanisms drive the margin improvement:
        </p>
        <p>
          <strong>Yield stability.</strong> A monoculture either hits or misses. An intercrop hedges the bet. If one species underperforms, the other often compensates&mdash;sometimes overcompensates. Over a five-year window, total output per hectare from a well-designed intercrop tends to be more stable than from either crop grown alone.
        </p>
        <p>
          <strong>Reduced inputs.</strong> Cereal-legume intercrops routinely cut nitrogen fertilizer requirements by 30&ndash;50% because the legume fixes its own. Mixed canopies suppress weeds, reducing herbicide passes. Diverse root zones improve water infiltration, lowering irrigation demand where it applies. Every input you do not buy is margin you keep.
        </p>
        <p>
          <strong>Market diversification.</strong> Two crops from one field means two revenue streams. If the wheat price drops, the bean price might hold. This is portfolio theory applied at field scale.
        </p>
        <p>
          None of this is guaranteed. Poor pairings, wrong timing, and mismatched equipment will erode the benefit. For an honest assessment of where intercropping falls short, read the <Link href="/articles/advantages-disadvantages-intercropping" className="text-[#9A8CD0] hover:underline">intercropping pros and cons</Link> breakdown before committing field area.
        </p>

        <h2>Getting Started: Cereal-Legume as Your Entry Point</h2>
        <p>
          If you have never intercropped before, start with a cereal-legume combination. It is the most studied, most forgiving, and most likely to produce a measurable benefit in year one.
        </p>
        <p>
          Winter wheat with field beans. Spring barley with peas. Oats with vetch. The cereal provides structure; the legume fixes nitrogen and fills the lower canopy. The science behind these pairings is deep, and the operational logistics are well documented.
        </p>
        <p>
          Our <Link href="/articles/intercropping-cereal-legume" className="text-[#9A8CD0] hover:underline">cereal-legume intercropping</Link> guide covers variety selection, seeding rates, row spacing, fertility management, and harvest logistics for the most common temperate combinations. Start there. Run one field for one season. Then scale based on what you learn.
        </p>
        <p>
          For operations already working within organic certification&mdash;or considering the transition&mdash;intercropping takes on additional importance. Without synthetic nitrogen, the legume component is not just helpful; it is essential. The guide to <Link href="/articles/intercropping-organic-systems" className="text-[#9A8CD0] hover:underline">intercropping in organic systems</Link> addresses the specific constraints and opportunities.
        </p>

        <h2>Measuring Whether It Is Actually Working</h2>
        <p>
          &ldquo;It looked good&rdquo; is not a metric. If you are going to allocate field area to intercropping, you need to know whether the system outperforms the monoculture alternative.
        </p>
        <p>
          The standard metric is the <strong>Land Equivalent Ratio (LER)</strong>. An LER above 1.0 means the intercrop produced more total output per hectare than growing the same crops separately. Most well-designed cereal-legume systems achieve an LER between 1.1 and 1.3&mdash;meaning 10&ndash;30% more productive use of land.
        </p>
        <p>
          But LER is not the only number that matters. You also need to track input costs per hectare, gross margin per hectare, yield stability across seasons, and the labour or machinery overhead of managing the system. Our guide to <Link href="/articles/measuring-intercropping-effectiveness" className="text-[#9A8CD0] hover:underline">measuring intercropping effectiveness</Link> covers how to calculate LER correctly, the common mistakes that inflate or deflate the number, and the complementary metrics that give you the full economic picture.
        </p>
        <p>
          For operations reporting under CSRD or responding to buyer ESG questionnaires, intercropping data feeds directly into biodiversity and land-use disclosures. Track it properly from the start and you generate compliance data as a byproduct of good agronomy.
        </p>

        <h2>Pest Management Without Extra Sprays</h2>
        <p>
          One of the most consistently documented benefits of intercropping is reduced pest pressure. The mechanisms are straightforward: a mixed canopy disrupts pest host-finding behaviour, supports higher populations of beneficial insects, and creates physical barriers to pest movement.
        </p>
        <p>
          Cereal aphid populations in wheat-bean intercrops are typically 30&ndash;60% lower than in wheat monocultures. The bean canopy harbours predatory insects&mdash;ladybirds, hoverflies, ground beetles&mdash;that suppress the aphids before they reach economic thresholds.
        </p>
        <p>
          This is not a replacement for integrated pest management. It is a layer within it. The detailed breakdown of <Link href="/articles/intercropping-pest-management" className="text-[#9A8CD0] hover:underline">intercropping for pest management</Link> covers which crop combinations provide the strongest suppressive effects and how to design your system to maximize natural enemy habitat.
        </p>
        <p>
          Companion planting operates on similar principles at a smaller scale. If you are managing high-value horticultural crops or diversified vegetable production, the <Link href="/articles/companion-planting-introduction" className="text-[#9A8CD0] hover:underline">companion planting introduction</Link> provides the species-pairing evidence base.
        </p>

        <h2>Climate Resilience Through Diversity</h2>
        <p>
          Weather volatility is increasing. Drought, heat stress, unseasonal frost, and waterlogging events are becoming more frequent across European and North American temperate zones. A monoculture has one response to stress. An intercrop has two or more.
        </p>
        <p>
          Different species respond differently to the same conditions. In a dry year, the deep-rooted legume may access subsoil moisture the cereal cannot reach. In a wet year, the cereal&rsquo;s faster canopy closure may suppress the waterlogging-sensitive component but still produce a viable yield on its own. The system degrades gracefully instead of failing completely.
        </p>
        <p>
          This is the resilience argument in operational terms: not that intercropping prevents crop failure, but that it narrows the range of outcomes. Your worst year gets less bad. For farms where a single catastrophic season can threaten the business, that matters more than marginal gains in the average year.
        </p>
        <p>
          Our deep dive into <Link href="/articles/intercropping-climate-resilience" className="text-[#9A8CD0] hover:underline">intercropping for climate resilience</Link> examines the evidence from European field trials and models the yield stability effect across different climate scenarios.
        </p>

        <h2>Common Mistakes That Kill the Benefit</h2>
        <p>
          Intercropping fails most often for operational reasons, not agronomic ones. Here are the patterns we see repeatedly:
        </p>
        <ul>
          <li><strong>Wrong crop pairing.</strong> Not all species combinations work. Competitive pairings&mdash;where both crops occupy the same root zone, canopy layer, and nutrient niche&mdash;suppress each other instead of complementing. Match species by complementarity, not convenience.</li>
          <li><strong>Ignoring harvest logistics.</strong> If the two crops mature at different times and you cannot selectively harvest, you have a problem. Plan the harvest before you plant.</li>
          <li><strong>Seeding rate errors.</strong> An intercrop is not two full monoculture rates in the same field. Each component needs a reduced rate&mdash;typically 40&ndash;70% of its monoculture rate depending on the system.</li>
          <li><strong>No baseline comparison.</strong> Without monoculture control strips or historical data, you cannot calculate whether the intercrop actually outperformed. Always keep comparison data.</li>
          <li><strong>Scaling too fast.</strong> One trial field in year one. Two or three in year two. Full adoption in year three if the numbers hold. Anything faster is gambling, not farming.</li>
          <li><strong>Treating it as set-and-forget.</strong> Intercropping requires observation and adjustment. Variety selection, seeding ratios, and spatial arrangement need tuning based on your specific soil, climate, and market conditions.</li>
        </ul>

        <h2>Where Intercropping Fits in Your Resilience Strategy</h2>
        <p>
          Intercropping is not a silver bullet. It is one tool in the resilience stack&mdash;alongside crop rotation, soil health management, water infrastructure, and financial hedging. But it is a tool that delivers on multiple fronts simultaneously: yield stability, input reduction, biodiversity, pest suppression, and climate adaptation.
        </p>
        <p>
          For operations beginning their sustainability journey, a single cereal-legume trial field is one of the highest-return, lowest-risk experiments available. The data you generate feeds into compliance reporting. The margin improvement funds further investment. The operational learning builds capacity for more complex systems down the road.
        </p>
        <p>
          Start small. Measure everything. Scale what works.
        </p>
      </article>

      {/* Newsletter (D-021 mid-2) */}
      <div className="mt-12">
        <NewsletterSignup />
      </div>

      {/* Bottom CTA Section */}
      <div className="mt-12 p-8 bg-gray-900 rounded-lg text-white">
        <h3 className="text-xl font-bold mb-2">Assess your operation&rsquo;s resilience</h3>
        <p className="text-gray-400 mb-6">
          The resilience assessment identifies where your operation is most exposed to climate, market, and supply chain disruption&mdash;and where intercropping and diversification can close the gaps.
        </p>
        <Link href="/tools/resilience-assessment" className="inline-block bg-[#9A8CD0] text-white px-5 py-2 rounded font-medium hover:bg-[#8578b8] transition-colors">
          Take the Assessment &rarr;
        </Link>
      </div>

      {/* Article Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-500 mb-4">All intercropping articles:</p>
        <div className="space-y-3">
          <Link href="/articles/introduction-to-intercropping" className="block p-4 border border-gray-200 rounded-lg hover:border-[#9A8CD0] transition-colors">
            <span className="font-medium text-gray-900">Introduction to Intercropping &rarr;</span>
            <span className="block text-sm text-gray-600">Fundamentals and principles for getting started</span>
          </Link>
          <Link href="/articles/intercropping-practices" className="block p-4 border border-gray-200 rounded-lg hover:border-[#9A8CD0] transition-colors">
            <span className="font-medium text-gray-900">Intercropping Practices &rarr;</span>
            <span className="block text-sm text-gray-600">Row, strip, mixed, and relay systems in detail</span>
          </Link>
          <Link href="/articles/intercropping-cereal-legume" className="block p-4 border border-gray-200 rounded-lg hover:border-[#9A8CD0] transition-colors">
            <span className="font-medium text-gray-900">Cereal-Legume Intercropping &rarr;</span>
            <span className="block text-sm text-gray-600">The most proven pairing for temperate farms</span>
          </Link>
          <Link href="/articles/advantages-disadvantages-intercropping" className="block p-4 border border-gray-200 rounded-lg hover:border-[#9A8CD0] transition-colors">
            <span className="font-medium text-gray-900">Intercropping Pros and Cons &rarr;</span>
            <span className="block text-sm text-gray-600">Honest assessment of benefits and trade-offs</span>
          </Link>
          <Link href="/articles/measuring-intercropping-effectiveness" className="block p-4 border border-gray-200 rounded-lg hover:border-[#9A8CD0] transition-colors">
            <span className="font-medium text-gray-900">Measuring Effectiveness &rarr;</span>
            <span className="block text-sm text-gray-600">LER, gross margin, and the metrics that matter</span>
          </Link>
          <Link href="/articles/intercropping-pest-management" className="block p-4 border border-gray-200 rounded-lg hover:border-[#9A8CD0] transition-colors">
            <span className="font-medium text-gray-900">Intercropping for Pest Management &rarr;</span>
            <span className="block text-sm text-gray-600">Using crop diversity to suppress pest pressure</span>
          </Link>
          <Link href="/articles/intercropping-climate-resilience" className="block p-4 border border-gray-200 rounded-lg hover:border-[#9A8CD0] transition-colors">
            <span className="font-medium text-gray-900">Intercropping for Climate Resilience &rarr;</span>
            <span className="block text-sm text-gray-600">Yield stability under increasing weather volatility</span>
          </Link>
          <Link href="/articles/intercropping-organic-systems" className="block p-4 border border-gray-200 rounded-lg hover:border-[#9A8CD0] transition-colors">
            <span className="font-medium text-gray-900">Intercropping in Organic Systems &rarr;</span>
            <span className="block text-sm text-gray-600">Managing without synthetic inputs</span>
          </Link>
          <Link href="/articles/intercropping-vs-polyculture" className="block p-4 border border-gray-200 rounded-lg hover:border-[#9A8CD0] transition-colors">
            <span className="font-medium text-gray-900">Intercropping vs. Polyculture &rarr;</span>
            <span className="block text-sm text-gray-600">Understanding the practical differences</span>
          </Link>
          <Link href="/articles/companion-planting-introduction" className="block p-4 border border-gray-200 rounded-lg hover:border-[#9A8CD0] transition-colors">
            <span className="font-medium text-gray-900">Companion Planting Introduction &rarr;</span>
            <span className="block text-sm text-gray-600">Species pairing for smaller-scale systems</span>
          </Link>
        </div>
      </div>

    </div>
  );
}
