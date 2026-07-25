import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "The Circular Economy Guide for Farms: Turn Waste Into Revenue",
  description: "How agricultural operations turn waste streams into value streams. Practical guide to materials, nutrients, water circularity, and building circular partnerships.",
  keywords: ["circular economy", "farm waste", "nutrient cycling", "water recycling", "agricultural efficiency", "waste to value", "circular supply chain", "biomass energy"],
};

export default function CircularEconomyGuidePage() {
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
          The Circular Economy Guide for Farms: Turn Waste Into Revenue
        </h1>
        <p className="text-xl text-gray-600">
          Stop throwing money in the skip. Every waste stream leaving your gate is a revenue stream you haven&apos;t captured yet.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          Here is a number that should bother you: the average farm operation pays to dispose of materials that another operation would pay to receive. Manure goes to landfill while the farm next door buys synthetic fertiliser. Crop residues get burned while a biomass plant twenty miles away imports woodchip. Washdown water runs to drain while the polytunnel operation down the road irrigates with mains supply.
        </p>
        <p>
          This is not an environmental problem. It is a financial one. Every tonne of material you pay to remove is a tonne you could sell, exchange, or reuse internally. The{" "}
          <Link href="/articles/circular-economy-explained" className="text-[#7B6BB8] hover:underline">circular economy</Link>{" "}
          is not a theoretical framework dreamed up by Brussels policy officers. It is the oldest idea in agriculture: nothing gets wasted. Your grandparents understood this instinctively. Modern supply chains broke the loop. Your job is to close it again, and get paid for doing so.
        </p>

        <h2>What Circularity Actually Means on a Farm</h2>
        <p>
          Forget the textbook diagrams with arrows going in circles. On a working farm, circularity means three things: materials come back, nutrients come back, and water comes back. Everything else is commentary.
        </p>
        <p>
          <strong>Materials circularity</strong> means the physical stuff flowing through your operation gets reused, repurposed, or sold instead of binned. Packaging, containers, equipment components, building materials, crop covers, silage wrap. Every material that leaves your site as &ldquo;waste&rdquo; left as a cost. Every material that leaves as a product left as revenue. The gap between those two outcomes is your circularity opportunity.
        </p>
        <p>
          <strong>Nutrient circularity</strong> is where agriculture has the biggest advantage over every other industry. You produce biological outputs that contain precisely the inputs other growers need. Manure, digestate, compost, crop residues, processing by-products&mdash;these are not waste. They are fertility in the wrong place. A proper{" "}
          <Link href="/articles/closed-loop-nutrient-cycling" className="text-[#7B6BB8] hover:underline">closed-loop nutrient cycling</Link>{" "}
          programme turns your disposal line into a supply line.
        </p>
        <p>
          <strong>Water circularity</strong> means treating water as the expensive, regulated resource it actually is. Processing wash water, cooling water, irrigation runoff, rainwater capture&mdash;each litre you recirculate is a litre you do not buy from the mains and a litre you do not pay to discharge.{" "}
          <Link href="/articles/water-recycling-efficiency" className="text-[#7B6BB8] hover:underline">Water recycling and efficiency</Link>{" "}
          improvements typically pay back in twelve to eighteen months because water and effluent charges only go in one direction.
        </p>

        <h2>Identifying Your Highest-Value Waste Streams</h2>
        <p>
          Not all waste is created equal. Before you redesign anything, you need to know what is actually leaving your site, in what quantities, and what it costs you.
        </p>
        <p>
          Start with your waste invoices. Pull twelve months of collection and disposal records. Sort them by cost. The streams you pay the most to remove are your highest-priority targets&mdash;not because they are the most environmentally significant, but because eliminating those costs funds everything else you want to do.
        </p>
        <p>
          A{" "}
          <Link href="/articles/life-cycle-assessment-explained" className="text-[#7B6BB8] hover:underline">life cycle assessment</Link>{" "}
          will give you the full picture: where materials enter your operation, how they transform, and where they exit. But you do not need a full LCA to start. You need a waste audit. Weigh it, categorise it, cost it. Most operations find that three or four streams account for 80% of their disposal spend.
        </p>
        <p>
          Then ask the only question that matters: <strong>who would pay for this?</strong>
        </p>
        <p>
          Organic waste has value as compost, animal feed, or anaerobic digestion feedstock. The detailed economics of turning{" "}
          <Link href="/articles/farm-waste-to-value" className="text-[#7B6BB8] hover:underline">farm waste into value</Link>{" "}
          depend on your specific outputs and your local market, but the principle holds everywhere: if it contains energy or nutrients, someone wants it.
        </p>

        <h2>The Three Circular Loops Every Farm Should Run</h2>
        <p>
          Circularity sounds complex until you break it into three practical loops. Each one operates independently. You can start with whichever your operation makes easiest.
        </p>

        <h3>Loop 1: The Nutrient Loop</h3>
        <p>
          This is the big one for agriculture. Nutrients leave your farm in products (good) and in waste (bad). Closing this loop means capturing the nutrients in your waste streams and returning them to productive use&mdash;either on your own land or someone else&apos;s.
        </p>
        <p>
          Composting is the simplest entry point. Anaerobic digestion is the most profitable if you have sufficient feedstock volume, because you capture energy and nutrients simultaneously. Even basic manure management improvements&mdash;covered storage, precision application, soil testing to match application rates to crop needs&mdash;close part of the loop and reduce your bought-fertiliser bill.
        </p>

        <h3>Loop 2: The Energy Loop</h3>
        <p>
          Agricultural operations produce biomass. Biomass contains energy. If you are paying to dispose of biomass while simultaneously paying for energy, you are on the wrong side of both transactions.
        </p>
        <p>
          <Link href="/articles/biomass-energy-farm" className="text-[#7B6BB8] hover:underline">Biomass energy on the farm</Link>{" "}
          is not a fringe idea. It is established technology with proven returns. Woodchip boilers, anaerobic digesters, straw-burning systems&mdash;the right choice depends on your feedstock, your heat and power demand, and your capital position. But the direction is clear: your waste biomass should be powering your operation, not decomposing in a skip.
        </p>

        <h3>Loop 3: The Water Loop</h3>
        <p>
          Water is the most undervalued resource on most farms. Mains water costs are rising. Abstraction licences are tightening. Effluent discharge consent conditions are getting stricter. Every trend makes water recycling more financially attractive.
        </p>
        <p>
          Rainwater harvesting, process water filtration and recirculation, constructed wetlands for natural treatment&mdash;these are not luxury investments. They are infrastructure that reduces your two biggest water costs: buying clean water in and paying to send dirty water out.
        </p>

        <h2>Building Circular Partnerships: Who Needs Your Outputs?</h2>
        <p>
          The most profitable circularity happens between operations, not within them. Industrial symbiosis&mdash;where one operation&apos;s waste becomes another&apos;s input&mdash;creates value that neither party could capture alone.
        </p>
        <p>
          Think about what leaves your farm gate as waste and who within a reasonable radius could use it. Spent grain from a brewery makes excellent cattle feed. Vegetable processing waste is prime AD feedstock. Poultry litter is high-value fertiliser for arable farms. Whey from dairy processing is protein-rich animal feed. Straw is bedding, biomass fuel, or mushroom substrate depending on who is buying.
        </p>
        <p>
          Building{" "}
          <Link href="/articles/circular-supply-chains-food" className="text-[#7B6BB8] hover:underline">circular supply chains in food</Link>{" "}
          requires knowing your neighbours&mdash;not in the social sense, but in the material flow sense. Map the operations within your logistics radius. Identify complementary waste and input profiles. The farm that takes your compost and supplies your straw is not just a neighbour. They are a circular partner, and that relationship is worth more than any individual transaction.
        </p>
        <p>
          Understanding how your operation fits into broader{" "}
          <Link href="/articles/value-chains-economic-efficiency" className="text-[#7B6BB8] hover:underline">value chains and economic efficiency</Link>{" "}
          patterns is essential here. You are not looking for a buyer. You are looking for a loop&mdash;a relationship where materials flow in both directions and both sides save money.
        </p>

        <h2>The Economics: Disposal Cost vs. Symbiosis Revenue</h2>
        <p>
          Every waste stream has two numbers attached to it: what you currently pay to get rid of it, and what someone would pay to receive it. The sum of those two numbers is the value of closing the loop.
        </p>
        <p>
          Consider a dairy farm paying &pound;45 per tonne to dispose of slurry. An arable neighbour is paying &pound;280 per tonne for synthetic nitrogen fertiliser. The slurry contains nitrogen. The disposal cost and the fertiliser cost are the same problem seen from opposite ends. Close the loop, and both operations save money. The economics are not marginal&mdash;they are transformative.
        </p>
        <p>
          This is why circularity is a financial strategy, not an environmental one. Yes, it reduces your carbon footprint. Yes, it looks good in your CSRD reporting. But the primary driver is operational: you stop paying to destroy value and start getting paid to deliver it.
        </p>
        <p>
          Run the numbers on your top five waste streams. For each one, calculate: current annual disposal cost, potential value as an input to another process, capital required to capture that value, and payback period. Most operations find at least one stream where the payback is under two years with minimal capital investment. That is your starting point.
        </p>

        <h2>Measuring Circularity and Reporting It</h2>
        <p>
          You cannot manage what you do not measure, and increasingly you cannot sell what you do not report. Buyers, retailers, and CSRD auditors all want to see circularity metrics. The good news: if you are running circular loops, measuring them is straightforward.
        </p>
        <p>
          <strong>The core metric is your circularity rate:</strong> what percentage of your total material inputs is sourced from recycled, reused, or renewable sources, and what percentage of your outputs goes to recovery rather than disposal? Track these two numbers over time and you have a circularity story that satisfies any reporting framework.
        </p>
        <p>
          Beyond the headline rate, track specifics for each loop: tonnes of material diverted from disposal, litres of water recirculated, kWh of energy generated from waste biomass, kilograms of nutrient returned to land. These operational metrics drive improvement because they connect directly to cost lines your team can influence.
        </p>
        <p>
          Document your methodology. Where does the data come from? How do you weigh or measure inputs and outputs? What assumptions have you made? Documented methodology is the difference between a number that survives audit and a number that does not.
        </p>

        <h2>Where to Start: The 30-Day Circularity Sprint</h2>
        <p>
          You do not need a five-year strategy to start capturing value from circularity. You need thirty days and a clear head.
        </p>
        <p>
          <strong>Week 1:</strong> Audit your waste. Pull invoices, weigh streams, categorise everything leaving your site. Calculate what you are paying to dispose of each stream.
        </p>
        <p>
          <strong>Week 2:</strong> Identify potential partners. Who within your logistics radius needs what you are throwing away? Talk to neighbouring farms, local processors, AD plant operators, composting facilities.
        </p>
        <p>
          <strong>Week 3:</strong> Run the economics. For your top three waste streams, calculate the full value of closing each loop: disposal cost saved plus revenue from the material. Compare against any capital or logistics cost to make it happen.
        </p>
        <p>
          <strong>Week 4:</strong> Close one loop. Pick the stream with the best economics and the lowest barriers. Sign the agreement, arrange logistics, start the flow. One closed loop is worth more than a hundred-page circularity strategy.
        </p>
        <p>
          Circularity is not complicated. It is waste disposal reimagined as supply chain design. Every output finds a use. Every cost becomes a revenue line. The operations that figure this out first do not just comply with CSRD&mdash;they outcompete the ones still paying to throw money in the skip.
        </p>
      </article>

      {/* Newsletter (D-021 mid-2) */}
      <div className="mt-12">
        <NewsletterSignup />
      </div>

      {/* Bottom CTA Section */}
      <div className="mt-12 p-8 bg-gray-900 rounded-lg text-white">
        <h3 className="text-xl font-bold mb-2">How circular is your operation?</h3>
        <p className="text-gray-400 mb-6">
          Take the circularity assessment to identify your highest-value waste streams and the loops worth closing first. Five minutes, zero guesswork.
        </p>
        <Link href="/tools/circularity-assessment" className="inline-block bg-[#7B6BB8] text-white px-5 py-2 rounded font-medium hover:bg-[#6a5aa7] transition-colors">
          Take the Assessment
        </Link>
      </div>

      {/* Article Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-500 mb-4">Explore all Circular Economy &amp; Efficiency articles:</p>
        <div className="space-y-3">
          <Link href="/articles/circular-economy-explained" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">The Circular Economy Explained &rarr;</span>
            <span className="block text-sm text-gray-600">Principles, frameworks, and why it matters for agriculture</span>
          </Link>
          <Link href="/articles/value-chains-economic-efficiency" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">Value Chains and Efficiency &rarr;</span>
            <span className="block text-sm text-gray-600">Where value leaks out and how to capture it</span>
          </Link>
          <Link href="/articles/life-cycle-assessment-explained" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">Life Cycle Assessment Explained &rarr;</span>
            <span className="block text-sm text-gray-600">Map material flows from input to output</span>
          </Link>
          <Link href="/articles/farm-waste-to-value" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">Farm Waste to Value &rarr;</span>
            <span className="block text-sm text-gray-600">Turn disposal costs into revenue streams</span>
          </Link>
          <Link href="/articles/closed-loop-nutrient-cycling" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">Closed-Loop Nutrient Cycling &rarr;</span>
            <span className="block text-sm text-gray-600">Return fertility to land instead of landfill</span>
          </Link>
          <Link href="/articles/biomass-energy-farm" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">Biomass Energy on the Farm &rarr;</span>
            <span className="block text-sm text-gray-600">Generate heat and power from waste biomass</span>
          </Link>
          <Link href="/articles/water-recycling-efficiency" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">Water Recycling &amp; Efficiency &rarr;</span>
            <span className="block text-sm text-gray-600">Recirculate water and cut mains and discharge costs</span>
          </Link>
          <Link href="/articles/circular-supply-chains-food" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">Circular Supply Chains in Food &rarr;</span>
            <span className="block text-sm text-gray-600">Build partnerships where waste flows become supply lines</span>
          </Link>
        </div>
      </div>

    </div>
  );
}
