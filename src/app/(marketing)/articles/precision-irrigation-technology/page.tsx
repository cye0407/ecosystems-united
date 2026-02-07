import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "Precision Irrigation Technology: Sensors, VRI, and ROI",
  description: "How precision irrigation pays for itself through water savings and yield improvement. Practical economics for farm operations considering the upgrade from soil moisture sensors to variable rate systems.",
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/framework/stack-2-efficiency" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#5B4A9E] transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Stack 2: Operational Efficiency
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#5B4A9E] text-white flex items-center justify-center font-bold text-sm">
            2
          </div>
          <span className="text-sm text-gray-500">Stack 2: Operational Efficiency</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Precision Irrigation Technology: Sensors, VRI, and ROI
        </h1>
        <p className="text-xl text-gray-600">
          Precision irrigation technology&mdash;from soil moisture sensors to variable rate systems&mdash;pays for itself through water savings and yield improvement. Here&apos;s the practical economics for operations considering the upgrade.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          Precision irrigation is the application of water in precise amounts at precise times to specific field zones based on actual crop need rather than calendar schedules or field-wide averages. The technology ranges from basic soil moisture sensors to fully automated variable rate irrigation (VRI) systems that adjust application rates on the fly.
        </p>
        <p>
          The fundamental promise is simple: use less water, get better yields. The question is whether the technology cost is justified by the savings. For most irrigated operations facing water constraints or rising energy costs, the answer is yes&mdash;but the economics vary significantly by system type, field conditions, and existing infrastructure.
        </p>

        <h2>The Problem with Calendar-Based Irrigation</h2>
        <p>
          Traditional irrigation schedules operate on fixed intervals&mdash;water every three days, run the system for six hours, apply two inches per week. This approach ignores actual soil moisture, weather conditions, crop growth stage, and field variability.
        </p>
        <p>
          The result is systematic over- and under-irrigation. Some parts of the field get too much water, leading to deep percolation losses, nutrient leaching, and waterlogged roots. Other parts get too little, resulting in drought stress and yield loss. The field-wide average might look acceptable, but the variation is costing you money in wasted inputs and lost production.
        </p>
        <p>
          Research consistently shows that calendar-based irrigation typically applies 15&ndash;30% more water than the crop actually needs. On a 100-hectare operation using 500mm of irrigation water annually, that&apos;s 75,000&ndash;150,000 cubic metres of excess water&mdash;and the energy cost to pump it. If you&apos;re paying for water by volume or facing abstraction limits, this waste directly impacts your bottom line and your licence to operate.
        </p>

        <h2>Soil Moisture Sensors: The Entry Point</h2>
        <p>
          Soil moisture sensors are the most accessible precision irrigation technology. They measure actual water content in the root zone and tell you when irrigation is needed rather than relying on guesswork or fixed schedules.
        </p>

        <h3>Sensor Types and Costs</h3>
        <p>
          <strong>Tensiometers</strong> measure soil water tension&mdash;how hard plant roots have to work to extract water. They&apos;re simple, reliable, and cheap: &pound;100&ndash;200 per sensor. The downside is they require manual reading and work best in relatively uniform soils. They&apos;re a good starting point for operations testing precision irrigation without significant capital commitment.
        </p>
        <p>
          <strong>Capacitance probes</strong> measure soil moisture electronically at multiple depths. They provide continuous data, often with wireless transmission to a phone or computer. Prices range from &pound;500&ndash;1,500 per sensor depending on depth capability and data features. For a 50-hectare field with moderate variability, you might install 3&ndash;5 sensors at a total cost of &pound;2,500&ndash;7,500.
        </p>
        <p>
          <strong>Neutron probes</strong> are more expensive (&pound;4,000&ndash;8,000) but offer high accuracy across deep soil profiles. They&apos;re primarily used in research and high-value horticultural operations where precision justifies the cost.
        </p>

        <h3>Basic Sensor Economics</h3>
        <p>
          A 50-hectare irrigated field using 450mm of water annually applies 225,000 cubic metres. If sensors reduce over-irrigation by 20%, you save 45,000 cubic metres of water per year.
        </p>
        <p>
          Water cost assumptions:
        </p>
        <ul>
          <li>Mains water: &pound;1.50&ndash;2.00 per cubic metre = &pound;67,500&ndash;90,000 annual saving</li>
          <li>Pumped groundwater: &pound;0.05&ndash;0.15 per cubic metre (energy only) = &pound;2,250&ndash;6,750 annual saving</li>
          <li>Surface water with abstraction licence: &pound;0.02&ndash;0.08 per cubic metre = &pound;900&ndash;3,600 annual saving</li>
        </ul>
        <p>
          For a &pound;5,000 sensor installation, payback ranges from less than one season (mains water) to 1&ndash;2 seasons (pumped groundwater) to 2&ndash;5 seasons (low-cost surface water). Even the longest payback period is well within the sensor lifespan of 8&ndash;12 years.
        </p>
        <p>
          Yield improvements add to the return. Eliminating drought stress during critical growth stages&mdash;flowering, grain fill, fruit sizing&mdash;typically increases yields by 5&ndash;15% on fields that were previously under-irrigated in some zones. For a wheat crop yielding 8 tonnes per hectare at &pound;200 per tonne, a 10% yield increase is worth &pound;80,000 on 50 hectares. That&apos;s a first-season return that dwarfs the sensor investment.
        </p>

        <h2>Weather-Based Scheduling: Adding Atmospheric Data</h2>
        <p>
          Weather-based irrigation scheduling combines soil moisture data with atmospheric conditions&mdash;temperature, humidity, wind speed, solar radiation&mdash;to calculate evapotranspiration (ET) and predict future crop water demand.
        </p>
        <p>
          These systems range from simple smartphone apps using regional weather data (&pound;50&ndash;200 per year subscription) to on-farm weather stations with automated scheduling software (&pound;2,000&ndash;5,000 installed).
        </p>
        <p>
          The advantage is forward-looking decision-making. Rather than reacting to soil moisture depletion, you anticipate demand and irrigate proactively&mdash;avoiding stress before it happens. This is particularly valuable for high-value crops where even transient water stress affects quality and marketability.
        </p>
        <p>
          Weather-based scheduling typically adds 5&ndash;10% to the water savings achieved by soil sensors alone, primarily by reducing stress-response irrigation that over-applies water to compensate for past deficits.
        </p>

      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Variable Rate Irrigation: Zone-Specific Management</h2>
        <p>
          Variable rate irrigation (VRI) applies different amounts of water to different zones within the same field based on soil type, topography, crop health, or management objectives. It&apos;s the next step up in precision&mdash;and the next step up in cost.
        </p>

        <h3>VRI Technology Options</h3>
        <p>
          <strong>Zone control for center pivot systems:</strong> Divides the pivot into manageable zones (typically 2&ndash;8) and adjusts application rates by speeding up or slowing down the pivot or pulsing individual sprinkler valves. Retrofit kits for existing pivots cost &pound;8,000&ndash;20,000 depending on pivot size and control sophistication.
        </p>
        <p>
          <strong>Precision sprinkler control:</strong> Individual nozzle control across the entire pivot span, enabling very fine-grained management. New systems with precision control cost &pound;40,000&ndash;80,000 for a 50-hectare pivot&mdash;a substantial premium over standard pivots at &pound;30,000&ndash;50,000.
        </p>
        <p>
          <strong>GPS-guided boom control:</strong> For boom irrigation systems, GPS guidance enables zone-specific application by automatically adjusting boom sections based on field position. Retrofit costs are &pound;5,000&ndash;12,000.
        </p>

        <h3>VRI Economics</h3>
        <p>
          VRI delivers value in two ways: reducing over-application in high-performing zones and preventing under-application in problem areas.
        </p>
        <p>
          Typical savings on heterogeneous fields:
        </p>
        <ul>
          <li>Water use reduction: 15&ndash;30% compared to uniform application</li>
          <li>Energy savings: 15&ndash;30% (proportional to water reduction)</li>
          <li>Yield increase: 8&ndash;20% by eliminating localized stress and waterlogging</li>
        </ul>
        <p>
          For a 50-hectare field with significant soil variability, assume a &pound;15,000 VRI retrofit to an existing center pivot. Water savings of 20% on 225,000 cubic metres is 45,000 cubic metres&mdash;worth &pound;2,250&ndash;6,750 annually in pumping costs (using groundwater assumptions above). A 12% yield increase on a potato crop yielding 50 tonnes per hectare at &pound;180 per tonne is worth &pound;54,000.
        </p>
        <p>
          Combined annual benefit: &pound;56,250&ndash;60,750. Payback on the &pound;15,000 investment is under four months. Even if actual results hit only half the expected yield increase, payback is still under one year&mdash;and the system has a 10&ndash;15 year operational life.
        </p>
        <p>
          The economics are most compelling on fields with clear variability&mdash;sandy patches mixed with heavier soils, slopes that affect drainage, or areas with different crop history. On highly uniform fields, simpler sensor-based scheduling may deliver 80% of the benefit at 20% of the cost.
        </p>

        <h2>Implementation: Getting Started Without Over-Committing</h2>
        <p>
          The biggest mistake is trying to upgrade everything at once. Precision irrigation is most successful when phased in strategically, learning from each step before moving to the next.
        </p>

        <h3>Phase 1: Measurement (Year 1)</h3>
        <p>
          Start with soil moisture sensors on a representative field or field zone. Install 2&ndash;4 sensors to capture variability. Spend a season learning what they tell you&mdash;how quickly the soil dries, when irrigation is actually needed, where your current schedule over- or under-applies.
        </p>
        <p>
          This phase typically costs &pound;2,000&ndash;5,000 and generates immediate savings by eliminating unnecessary irrigation events. More importantly, it builds your understanding of field-specific water dynamics and proves the concept before larger investments.
        </p>

        <h3>Phase 2: Scheduling Integration (Year 2)</h3>
        <p>
          Add weather-based scheduling and expand sensor coverage to additional fields. Start adjusting irrigation timing and duration based on sensor data rather than fixed schedules. Track water use, energy costs, and yield results against previous years.
        </p>
        <p>
          Additional investment: &pound;3,000&ndash;8,000. By this point, you have a clear picture of which fields benefit most from precision management and where uniform irrigation is adequate.
        </p>

        <h3>Phase 3: Variable Rate (Year 3+)</h3>
        <p>
          If Phase 1 and 2 results justify it, retrofit VRI to fields with proven variability. Use the data you&apos;ve already collected to define management zones and programme initial application maps. Fine-tune based on observed crop response.
        </p>
        <p>
          Investment: &pound;8,000&ndash;20,000 per field or system. At this stage, you&apos;re investing based on measured results from earlier phases, not theoretical benefits&mdash;which significantly reduces risk.
        </p>

        <h2>The Non-Financial Benefits</h2>
        <p>
          Beyond direct cost savings and yield increases, precision irrigation delivers operational benefits that are harder to quantify but equally real:
        </p>
        <p>
          <strong>Regulatory security:</strong> Demonstrating efficient water use strengthens abstraction licence renewals and positions you favorably if restrictions are introduced. In water-stressed regions, this is increasingly a licence-to-operate issue.
        </p>
        <p>
          <strong>Buyer relationships:</strong> Major food buyers and retailers now include water stewardship in supplier assessments. Precision irrigation data provides the evidence they&apos;re asking for.
        </p>
        <p>
          <strong>Labour efficiency:</strong> Automated systems reduce the time spent on irrigation decisions and management. For operations where labor is constrained, this matters.
        </p>
        <p>
          <strong>Reduced disease pressure:</strong> Avoiding over-watering reduces foliar disease incidence and soil-borne pathogens, lowering fungicide costs and crop losses.
        </p>

        <h2>The Stack 2 Connection</h2>
        <p>
          Precision irrigation is operational efficiency in action. You&apos;re finding waste&mdash;water applied where it&apos;s not needed, yields lost where water is insufficient&mdash;and eliminating it through better information and control.
        </p>
        <p>
          The Five Stacks approach emphasizes measuring first, then fixing leaks before adding complexity. Precision irrigation follows this exactly: sensors measure what&apos;s actually happening, reveal where your current system is inefficient, and enable targeted improvements that pay for themselves rapidly.
        </p>
        <p>
          The farms that succeed with precision irrigation are those that treat it as an operational upgrade, not a technology experiment. Start with measurement, prove the value, expand systematically. The technology is proven, the economics are sound, and the payback periods are short enough that even conservative operations can justify the investment.
        </p>
      </article>

      {/* Bottom CTA - Stack 2 */}
      <div className="mt-12 p-8 bg-[#5B4A9E] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to upgrade your irrigation efficiency?</h3>
        <p className="text-white/80 mb-4">
          Precision irrigation is a core efficiency opportunity in Stack 2 of the Five Stacks Framework&mdash;measuring resource use and eliminating operational waste.
        </p>
        <p className="text-white/80 mb-6">
          Stack 2 focuses on finding where water, energy, and inputs are wasted in your current operation. Precision irrigation gives you the data to see it and the control to fix it. The investments pay back quickly and position your operation for tightening water regulations and buyer requirements.
        </p>
        <Link href="/framework/stack-2-efficiency" className="inline-block bg-white text-[#5B4A9E] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          Get Started with Stack 2 &rarr;
        </Link>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/agricultural-irrigation" className="block p-4 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors">
            <span className="font-medium text-gray-900">Agricultural Irrigation Methods &rarr;</span>
            <span className="block text-sm text-gray-600">Understanding different irrigation systems and their efficiency trade-offs</span>
          </Link>
          <Link href="/articles/water-recycling-efficiency" className="block p-4 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors">
            <span className="font-medium text-gray-900">Water Recycling and Efficiency &rarr;</span>
            <span className="block text-sm text-gray-600">Practical water management strategies for agricultural operations</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
