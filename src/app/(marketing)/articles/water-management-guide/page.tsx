import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "The Complete Guide to Water Management for Farms",
  description: "Irrigation systems, drainage, water quality, and infrastructure planning for agricultural operations.",
  keywords: ["water management", "irrigation", "agricultural drainage", "water quality", "precision irrigation", "rainwater harvesting", "drought resilience", "subsurface drainage", "farm water", "efficiency"],
};

export default function WaterManagementGuidePage() {
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
          The Complete Guide to Water Management for Farms
        </h1>
        <p className="text-xl text-gray-600">
          Irrigation, drainage, water quality, and infrastructure planning for productive agricultural operations.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          Water is the single resource that connects every aspect of a farm operation. It determines what you can grow, when you can grow it, how much you can produce, and whether your land remains productive in ten years. Yet on most agricultural operations, water infrastructure evolved reactively &mdash; a borehole here, a ditch there, an irrigation reel bought during a dry summer and never properly integrated into the broader system.
        </p>
        <p>
          This guide covers the full scope of on-farm water management: getting water to crops, getting excess water off fields, maintaining water quality, and building the infrastructure resilience to handle both drought and deluge. Every section links to detailed guidance on specific aspects of the system. The goal is to help you see water as a single connected infrastructure rather than a set of isolated problems.
        </p>

        <h2>Understanding Your Water Balance</h2>
        <p>
          Before investing in any water infrastructure, you need to understand the water balance on your operation. How much comes in as rainfall? How much do you abstract from boreholes, rivers, or mains supply? How much leaves through drainage, evapotranspiration, and runoff? The gap between what your crops need and what arrives naturally is the space where irrigation fills in. The surplus between what arrives and what the soil can absorb is the space where drainage takes over.
        </p>
        <p>
          Most farms have never mapped this balance explicitly. They irrigate when crops look stressed and drain when fields flood. That reactive approach works until it does not &mdash; until a dry year coincides with an abstraction licence review, or a wet autumn overwhelms drainage that has not been maintained in a decade.
        </p>

        <h2>Irrigation Fundamentals</h2>
        <p>
          <Link href="/articles/agricultural-irrigation">Agricultural irrigation</Link> is the foundation of water management for any operation that cannot rely solely on rainfall. Whether you are irrigating high-value horticultural crops, supplementing grassland during dry spells, or maintaining consistent moisture for arable rotations, the principles are the same: deliver the right amount of water to the right place at the right time, with minimal waste.
        </p>
        <p>
          The gap between good and poor irrigation practice is enormous. A well-designed system operating at 85&ndash;90% application efficiency delivers nearly all its water to the root zone. A poorly maintained system with worn nozzles, incorrect pressure, and no scheduling discipline might lose 40% or more to wind drift, runoff, and deep percolation below the root zone. That lost water is not just a resource problem &mdash; it is an energy cost, a nutrient leaching risk, and an abstraction licence liability.
        </p>

        <h2>Planning and Designing Irrigation Systems</h2>
        <p>
          The difference between irrigation that works and irrigation that becomes a perpetual headache almost always comes down to the planning stage. <Link href="/articles/irrigation-system-planning">Planning an irrigation system</Link> means matching the water source capacity to the peak demand of the cropping plan, sizing mains and laterals for the flow rates required, selecting application equipment appropriate to the field geometry and soil type, and building in the flexibility to adapt as rotations change.
        </p>
        <p>
          Too many systems are designed around what the supplier had in stock rather than what the operation actually needs. A centre pivot makes no sense on a 3-hectare field. A travelling rain gun wastes water on high-value crops that need precise, low-volume application. The system design must start from the crop water requirement and work backwards through the hydraulics to the source.
        </p>
        <p>
          Key design parameters include peak daily crop water demand (typically 4&ndash;6mm per day for temperate arable crops, higher for intensive horticulture), soil infiltration rate (which determines maximum application intensity), source yield (borehole or river abstraction capacity), and storage volume if supply cannot meet instantaneous peak demand.
        </p>

        <h2>Precision Irrigation Technology</h2>
        <p>
          Once the physical infrastructure is right, <Link href="/articles/precision-irrigation-technology">precision irrigation technology</Link> transforms how efficiently that infrastructure operates. Soil moisture sensors, weather station integration, variable rate application, and automated scheduling can reduce water use by 15&ndash;30% compared to calendar-based or visual scheduling while maintaining or improving yields.
        </p>
        <p>
          The technology landscape has matured considerably. Capacitance probes that cost thousands a decade ago now have affordable alternatives. Wireless sensor networks can cover an entire farm without running cable. Cloud-based platforms aggregate soil moisture, weather forecast, and crop model data into actionable irrigation recommendations. The barrier is no longer cost &mdash; it is implementation knowledge. Sensors installed at the wrong depth, in unrepresentative locations, or without proper calibration generate data that misleads rather than informs.
        </p>
        <p>
          Start simple. A single soil moisture monitoring point in your most important field, checked against actual irrigation decisions, will teach you more about your operation&rsquo;s water dynamics than the most sophisticated system installed without understanding.
        </p>

        <h2>Supplementing Supply: Rainwater Harvesting</h2>
        <p>
          Abstraction licences are tightening across most of Europe. Climate variability means the summers when you need water most are the summers when rivers are lowest and aquifers are depleted. <Link href="/articles/rainwater-harvesting-agriculture">Rainwater harvesting for farms</Link> provides a buffer against both regulatory and climatic uncertainty by capturing winter rainfall for summer use.
        </p>
        <p>
          The economics depend heavily on scale and context. Roof runoff from large agricultural buildings &mdash; grain stores, livestock housing, packing sheds &mdash; can yield significant volumes. A 2,000 square metre roof in a region receiving 700mm of annual rainfall theoretically captures 1,400 cubic metres per year. Even at 70% collection efficiency, that is nearly 1,000 cubic metres of water that does not come from your borehole or your abstraction licence allocation.
        </p>
        <p>
          Storage is the main cost. Lined reservoirs, tanks, or converted lagoons each have different cost profiles and planning implications. The key calculation is whether the capital cost of storage, amortised over its lifespan, is less than the cost of the water it replaces &mdash; including the increasingly real cost of abstraction licence risk.
        </p>

        <h2>Agricultural Drainage: The Other Half of Water Management</h2>
        <p>
          Irrigation gets the investment. Drainage gets neglected. Yet on many farms, particularly in Northern Europe and other high-rainfall regions, <Link href="/articles/agricultural-drainage">agricultural drainage</Link> has a bigger impact on productivity than irrigation ever will. Waterlogged soils restrict root development, delay fieldwork windows, reduce nutrient availability, and create conditions for crop disease.
        </p>
        <p>
          Surface drainage &mdash; ditches, grips, and land forming &mdash; handles the visible water. But the water you cannot see is often the bigger problem. Perched water tables, compaction layers that prevent vertical drainage, and failing pipe systems create persistent wet spots that reduce yields year after year without an obvious cause.
        </p>
        <p>
          Most drainage systems in established agricultural areas were installed decades ago. Many are approaching or past their design life. Knowing where your drains are, what condition they are in, and whether they are still functioning as designed is fundamental infrastructure knowledge that too many operations lack.
        </p>

        <h2>Subsurface Drainage Design</h2>
        <p>
          When existing drainage fails or new land needs draining, <Link href="/articles/subsurface-drainage-design">subsurface drainage design</Link> determines whether the investment delivers returns for decades or creates problems within years. Drain spacing, depth, gradient, pipe diameter, filter material, and outfall design all interact. Get any one wrong and the system underperforms or fails entirely.
        </p>
        <p>
          Drain spacing is driven by soil hydraulic conductivity &mdash; how fast water moves through the soil profile. Heavy clay soils with low conductivity need drains at 5&ndash;10 metre spacings. Free-draining sandy loams might function well at 20&ndash;40 metre spacings. Installing drains at the wrong spacing is an expensive mistake because the only fix is more drains.
        </p>
        <p>
          Equally critical is the outfall. Every metre of subsurface drain eventually delivers water to a ditch, watercourse, or pumped sump. If the outfall is blocked, submerged, or undersized, the entire upstream system backs up. Outfall maintenance is the lowest-cost, highest-impact drainage intervention on most farms, yet it is routinely ignored until fields are flooding.
        </p>

        <h2>Water Quality: Protecting the Resource</h2>
        <p>
          <Link href="/articles/water-quality-management-farms">Water quality management</Link> is where water infrastructure meets regulatory compliance and environmental responsibility. Nitrate vulnerable zones, phosphorus loading limits, pesticide stewardship requirements, and sediment management obligations all flow from how you manage water on your land.
        </p>
        <p>
          The connection between water management and water quality is direct. Over-irrigation leaches nitrates below the root zone and into groundwater. Poor drainage concentrates nutrients in surface runoff. Unmanaged field margins allow sediment to reach watercourses. Each of these is both an environmental problem and a measurable efficiency loss &mdash; nutrients that leave the field are nutrients that did not feed the crop.
        </p>
        <p>
          Buffer strips, constructed wetlands, sediment traps, and cover cropping all play roles in water quality protection. But the most effective intervention is getting the core water management right in the first place. A field that is neither over-irrigated nor poorly drained loses far fewer nutrients than one suffering from either extreme.
        </p>

        <h2>Drought Resilience: Planning for Water Scarcity</h2>
        <p>
          Climate projections across most agricultural regions point in the same direction: more variable rainfall, hotter summers, and increasing competition for water resources. <Link href="/articles/drought-resilience-water-management">Drought resilience planning</Link> is no longer a nice-to-have &mdash; it is infrastructure planning for the climate that is arriving.
        </p>
        <p>
          Resilience is not just about having more water. It is about using less, storing more, and having contingency plans when supply falls short. Crop selection, soil organic matter management, irrigation scheduling discipline, and diversified water sources all contribute. A farm with three independent water sources (mains, borehole, and harvested rainwater) is fundamentally more resilient than one relying on a single borehole, regardless of total volume available.
        </p>
        <p>
          The economic case for resilience investments becomes clearer with every drought year. Lost yield from a single unirrigated dry summer often exceeds the annualised cost of the infrastructure that would have prevented it. The farms that invested in storage and efficiency before the drought are the ones that maintained production &mdash; and maintained their buyer contracts &mdash; while neighbours struggled.
        </p>

        <h2>Integrating Water Management Across the Operation</h2>
        <p>
          The real gains come when irrigation, drainage, water quality, and supply resilience are managed as a single system rather than four separate problems. Water harvested from building roofs supplements irrigation supply. Drainage water, if clean enough, feeds back into storage. Precision irrigation reduces drainage volumes and nutrient leaching simultaneously. Soil health improvements increase both water-holding capacity (reducing irrigation demand) and infiltration rate (reducing surface drainage problems).
        </p>
        <p>
          This integrated approach is what efficiency really means &mdash; not doing less, but getting more from every input. Water is the clearest example because it touches every part of the operation and every litre saved, stored, or better applied compounds across the entire production system.
        </p>

        <h2>Where to Start</h2>
        <p>
          If you are unsure where your biggest water management gains lie, start with an honest assessment of your current infrastructure:
        </p>
        <ul>
          <li><strong>Do you know your total water use by source?</strong> If not, install meters or start logging. You cannot manage what you do not measure.</li>
          <li><strong>When did you last survey your drainage system?</strong> If the answer involves the word &ldquo;never,&rdquo; that is your first priority on any farm with installed drains.</li>
          <li><strong>Are you scheduling irrigation based on data or instinct?</strong> Even basic soil moisture monitoring changes decisions immediately.</li>
          <li><strong>What happens to your operation in a drought year?</strong> If the answer is &ldquo;we lose the crop,&rdquo; that is an unmanaged business risk, not an act of nature.</li>
          <li><strong>Do you know where your nutrients end up?</strong> If water is leaving your fields carrying nitrogen and phosphorus, you are paying for fertiliser that feeds the river instead of the crop.</li>
        </ul>
        <p>
          Each of these questions points to a specific area of the detailed guides linked throughout this page. Start with the biggest gap, build the infrastructure to close it, then move to the next. Water management is not a project with a completion date. It is an ongoing operational discipline that compounds in value every year you practice it.
        </p>
      </article>

      {/* Newsletter (D-021 mid-2) */}
      <div className="mt-12">
        <NewsletterSignup />
      </div>

      {/* Bottom CTA Section */}
      <div className="mt-12 p-8 bg-gray-900 rounded-lg text-white">
        <h3 className="text-xl font-bold mb-2">Benchmark your water efficiency</h3>
        <p className="text-gray-400 mb-6">
          The efficiency assessment identifies where your operation is losing water, energy, and money &mdash; and which infrastructure investments deliver the fastest returns. Takes 5 minutes. No signup required.
        </p>
        <Link href="/tools/efficiency-assessment" className="inline-block bg-[#5B4A9E] text-white px-5 py-2 rounded font-medium hover:bg-[#4a3d82] transition-colors">
          Take the Efficiency Assessment &rarr;
        </Link>
      </div>

      {/* Article Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-500 mb-4">Detailed guides in this series:</p>
        <div className="space-y-3">
          <Link href="/articles/agricultural-irrigation" className="block p-4 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors">
            <span className="font-medium text-gray-900">Agricultural Irrigation &rarr;</span>
            <span className="block text-sm text-gray-600">Fundamentals of getting water to crops efficiently and reliably</span>
          </Link>
          <Link href="/articles/precision-irrigation-technology" className="block p-4 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors">
            <span className="font-medium text-gray-900">Precision Irrigation Technology &rarr;</span>
            <span className="block text-sm text-gray-600">Sensors, scheduling, and variable rate application for measurable water savings</span>
          </Link>
          <Link href="/articles/drought-resilience-water-management" className="block p-4 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors">
            <span className="font-medium text-gray-900">Drought Resilience Planning &rarr;</span>
            <span className="block text-sm text-gray-600">Building water supply security for increasingly variable climate conditions</span>
          </Link>
        </div>
      </div>

    </div>
  );
}
