import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "Water Efficiency and Recycling on Farms: Practical Water Management for Agriculture",
  description: "Practical water management for agricultural operations. From irrigation efficiency to dairy parlor recycling, how to reduce water use and build circular reuse systems.",
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/framework/stack-3-circularity" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors">
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
          Water Efficiency and Recycling on Farms
        </h1>
        <p className="text-xl text-gray-600">
          Practical water management for agricultural operations&mdash;both efficiency gains and circular reuse that protect your bottom line and your licence to operate.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <h2>Water Is the Next Carbon</h2>
        <p>
          Carbon dominated the sustainability conversation for the past decade. Water is catching up fast&mdash;and for many agricultural operations, it may end up mattering more.
        </p>
        <p>
          Buyer scrutiny of water use is increasing rapidly. Major food companies and retailers now include water metrics in their supplier assessments alongside carbon. CSRD reporting requirements treat water as a material impact topic. Investors and lenders are starting to price water risk into their decisions.
        </p>
        <p>
          The underlying driver is physical scarcity. Water stress affects more regions every year, including areas that historically took water availability for granted. In England, the Environment Agency has stated that parts of the country will face supply-demand deficits within the next decade. Across Europe, summer droughts are becoming more frequent and more severe.
        </p>
        <p>
          For farms, this translates into operational risk. Abstraction licences are being reviewed and tightened. Regulatory bodies are taking a harder line on over-abstraction from rivers and aquifers. Farms that have operated under generous abstraction limits for decades are finding those limits reduced or made conditional on efficiency improvements.
        </p>
        <p>
          Water efficiency isn&apos;t just an environmental aspiration&mdash;it&apos;s operational security. The farm that can demonstrate efficient water use is better positioned for licence renewals, buyer relationships, and long-term viability. The farm that can&apos;t demonstrate it faces growing risk on every front.
        </p>

        <h2>Where Farms Use Water</h2>
        <p>
          Before improving efficiency, you need to understand where your water actually goes. Most farm operations use water across several categories:
        </p>
        <ul>
          <li><strong>Irrigation:</strong> The dominant use for arable and horticultural operations&mdash;often accounting for 70&ndash;90% of total water consumption on irrigated farms</li>
          <li><strong>Livestock drinking water:</strong> Consistent demand year-round, varying significantly by species and conditions</li>
          <li><strong>Dairy parlour washing:</strong> Substantial volumes required for hygiene compliance&mdash;a typical parlour uses 18&ndash;25 litres per cow per milking</li>
          <li><strong>Crop washing and processing:</strong> Post-harvest washing for vegetables, salad crops, and root crops</li>
          <li><strong>Dust suppression:</strong> Particularly relevant for poultry units, indoor livestock housing, and farm roads during dry periods</li>
          <li><strong>Spraying:</strong> Crop protection and foliar feed applications</li>
        </ul>
        <p>
          The first step is mapping your water use by activity. Install meters where you can and estimate where you can&apos;t. Even rough figures reveal where the biggest savings are&mdash;and they&apos;re often not where you expect. Many operations discover that a single activity dominates their water budget, making the improvement pathway clearer than anticipated.
        </p>

        <h2>Irrigation Efficiency: The Biggest Lever</h2>
        <p>
          For irrigated farms, the choice of irrigation method determines the baseline efficiency of your entire water operation. The differences are significant:
        </p>
        <p>
          <strong>Flood or furrow irrigation</strong> operates at roughly 40&ndash;60% efficiency. Water is applied broadly, and a substantial proportion is lost to evaporation, runoff, or deep percolation below the root zone. It&apos;s cheap to set up but expensive in water terms.
        </p>
        <p>
          <strong>Sprinkler systems</strong> achieve 60&ndash;75% efficiency. They offer better uniformity than flood methods but still lose water to wind drift, evaporation during application, and canopy interception. Overhead irrigation on a hot, windy day can lose 30% of applied water before it reaches the soil.
        </p>
        <p>
          <strong>Drip and trickle irrigation</strong> reaches 85&ndash;95% efficiency. Water is delivered directly to the root zone at low pressure, minimising evaporation and runoff. For high-value crops, the economics are compelling&mdash;less water used, better crop uniformity, and reduced disease pressure from dry foliage.
        </p>
        <p>
          Beyond the delivery method, scheduling makes an enormous difference. Soil moisture monitoring&mdash;using tensiometers, capacitance probes, or weather-based models&mdash;ensures you irrigate only when the crop actually needs water, not on a calendar schedule. Timing irrigation to crop growth stage means you apply more when the plant can use it (flowering, fruit set) and less when demand is low.
        </p>
        <p>
          Variable rate irrigation takes this further by adjusting application across different soil zones within the same field. Sandy areas that drain fast get more frequent, lighter applications. Heavier soils get less frequent, deeper applications. Each step up in precision reduces water use without affecting yields&mdash;and in many cases, yields actually improve because you&apos;re eliminating both drought stress and waterlogging.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Water Recycling Opportunities</h2>
        <p>
          Efficiency reduces how much water you use. Recycling closes the loop and keeps water circulating within your operation rather than treating it as a single-pass resource.
        </p>
        <p>
          <strong>Dairy parlour washwater recycling</strong> is one of the most practical starting points. Parlour washing generates significant volumes&mdash;a 200-cow herd can produce 5,000&ndash;7,000 litres of washwater per day. Recycling systems that treat and reuse this water for pre-rinse cycles can reduce mains or borehole consumption by 40&ndash;60%. The technology is proven, the payback periods are reasonable, and regulatory bodies are increasingly supportive.
        </p>
        <p>
          <strong>Rainwater harvesting</strong> from farm building roofs is often overlooked despite being straightforward. A 1,000 m&sup2; roof in an area receiving 700mm of annual rainfall captures 700,000 litres per year. That&apos;s enough for livestock drinking water, washdown operations, or supplementary irrigation. Storage is the main constraint&mdash;you need sufficient tank capacity to hold water from wet periods for use in dry ones.
        </p>
        <p>
          <strong>Constructed wetlands</strong> offer a low-energy solution for treating and reusing runoff water. They use natural biological processes to remove sediment, nutrients, and contaminants from farmyard runoff, field drainage, or processing water. The treated water can be reused for irrigation or returned to watercourses in better condition than it left. Installation costs vary, but operational costs are minimal.
        </p>
        <p>
          <strong>Greywater reuse</strong> applies to non-food-contact purposes. Water from office facilities, staff amenities, or initial cooling processes can be redirected to landscape irrigation, dust suppression, or equipment washing. It won&apos;t transform your water balance on its own, but it contributes to the overall circular approach.
        </p>

        <h2>The Measurement Imperative</h2>
        <p>
          You can&apos;t manage what you don&apos;t measure. This is true for carbon, true for energy, and especially true for water&mdash;because water use on farms is frequently unmetered and therefore invisible.
        </p>
        <p>
          The foundation is straightforward: meters on boreholes, mains supplies, and key use points. Monthly readings at minimum, weekly or continuous where automated meters allow. Build a picture of where your water goes, when peak demand occurs, and how consumption relates to production outputs.
        </p>
        <p>
          Benchmarking gives your data context. How does your water use compare to regional averages for similar operations? Industry bodies and levy boards publish benchmarks for most agricultural sectors. If you&apos;re above the median, there&apos;s likely low-hanging fruit. If you&apos;re below, you&apos;re in a stronger position to demonstrate good practice.
        </p>
        <p>
          The most useful metric is water use per unit of production: litres per kilogram of crop, litres per litre of milk, litres per kilogram of liveweight gain. This efficiency metric accounts for production scale and makes year-on-year comparison meaningful. It also feeds directly into your Stack 1 sustainability metrics and ESG reporting&mdash;when a buyer asks about your water footprint, this is the number they want.
        </p>
        <p>
          Measurement also reveals leaks. Many farm water systems lose 10&ndash;20% to leaking pipes, troughs, and fittings. A consistent monitoring regime makes these losses visible and quantifiable, turning &ldquo;we should probably fix that&rdquo; into &ldquo;that leak is costing us 50,000 litres a month.&rdquo;
        </p>

        <h2>Investment Priorities: Where to Spend First</h2>
        <p>
          Water efficiency investment follows a consistent hierarchy. Getting the sequence right maximises return and avoids wasting capital on the wrong things.
        </p>
        <p>
          <strong>First: fix leaks and eliminate waste.</strong> This is often free or near-free. Repair leaking troughs, replace worn washers, fix dripping taps, and address visible pipe leaks. Many farms recover thousands of litres per day from this step alone. There&apos;s no point investing in precision irrigation if your existing distribution system is losing water before it reaches the field.
        </p>
        <p>
          <strong>Second: improve scheduling and monitoring.</strong> Low-cost investments&mdash;soil moisture probes, simple weather stations, metering at key use points&mdash;that help you apply water when and where it&apos;s needed rather than on habit. The cost is modest, the impact is immediate, and the data generated informs all subsequent decisions.
        </p>
        <p>
          <strong>Third: upgrade infrastructure.</strong> This is where larger capital goes&mdash;converting from sprinkler to drip irrigation, installing rainwater harvesting systems, building constructed wetlands, or adding parlour water recycling. These investments have longer payback periods, typically 3&ndash;7 years, but they deliver lasting efficiency gains and position the operation for tightening regulatory requirements.
        </p>
        <p>
          The principle is simple: don&apos;t invest in expensive technology to solve problems that basic maintenance would fix. Work from the bottom up. Each layer of investment builds on the previous one and delivers better returns because the foundation is sound.
        </p>
        <p>
          Water management is where efficiency and circularity meet. Every litre saved is a litre you didn&apos;t need to abstract, pump, or pay for. Every litre recycled is a litre that stays in your system rather than leaving as waste. The farm that manages water well manages a resource that will only become more constrained, more regulated, and more valuable.
        </p>
      </article>

      {/* Bottom CTA - Stack 3 */}
      <div className="mt-12 p-8 bg-[#7B6BB8] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to close the loop on water?</h3>
        <p className="text-white/80 mb-4">
          Water efficiency and recycling are core components of Stack 3 in the Five Stacks Framework&mdash;turning operational waste streams into circular value.
        </p>
        <p className="text-white/80 mb-6">
          Stack 3 focuses on transforming what you&apos;ve learned about your operation into new value streams. Water recycling is one of the most practical starting points&mdash;measurable savings, proven technology, and a direct line from efficiency investment to reduced costs and stronger buyer relationships.
        </p>
        <Link href="/framework/stack-3-circularity" className="inline-block bg-white text-[#7B6BB8] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          Get Started with Stack 3 &rarr;
        </Link>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/agricultural-irrigation" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">Agricultural Irrigation &rarr;</span>
            <span className="block text-sm text-gray-600">A deeper look at irrigation systems, scheduling strategies, and water application technology for farms</span>
          </Link>
          <Link href="/articles/life-cycle-assessment-explained" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">Life Cycle Assessment Explained &rarr;</span>
            <span className="block text-sm text-gray-600">Understanding the methodology behind environmental impact measurement&mdash;including water footprinting</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
