import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "Closed-Loop Nutrient Systems for Farms: Minimize Leakage, Maximize Cycling",
  description: "How to minimize nutrient leakage and maximize on-farm cycling. A practical guide to closing nitrogen, phosphorus, and potassium loops on your operation.",
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
          Closed-Loop Nutrient Systems for Farms
        </h1>
        <p className="text-xl text-gray-600">
          How to minimize nutrient leakage and maximize on-farm cycling &mdash; turning purchased inputs into retained value.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <h2>The Nutrient Leak</h2>
        <p>
          Most farms operate as open systems. Nutrients arrive as purchased fertilizer and feed. Some leave as sold product. But a significant portion &mdash; often the majority &mdash; leaks out through runoff, volatilization, and leaching. The nutrients you paid for never reach a crop, never leave as a product, never generate revenue. They simply disappear.
        </p>
        <p>
          Every nutrient that leaks is money spent twice: once to buy it, and once in the environmental damage it causes downstream. Nitrogen in waterways drives algal blooms. Phosphorus in runoff degrades aquatic ecosystems. Ammonia volatilization contributes to air quality problems and is eventually redeposited &mdash; often where it&apos;s not wanted.
        </p>
        <p>
          Closing the loop means keeping nutrients cycling within your system rather than flowing through it. It means treating your farm as a biological system with internal cycles, not a factory with inputs and waste streams. The financial logic is straightforward: every kilogram of nutrient you retain is a kilogram you don&apos;t need to purchase again.
        </p>
        <p>
          This isn&apos;t new thinking. Traditional mixed farming systems were inherently circular &mdash; nutrients cycled between crops, livestock, and soil for centuries. Industrial agriculture broke those cycles in pursuit of specialization and scale. Closing the loop is really about restoring cycles that worked, using modern tools to do it more precisely.
        </p>

        <h2>Where Nutrients Leak</h2>
        <p>
          Before you can close loops, you need to know where they&apos;re open. The major leakage pathways are well understood, and each represents a quantifiable opportunity:
        </p>
        <p>
          <strong>Nitrogen volatilization.</strong> Surface-applied fertilizer and manure lose ammonia to the atmosphere &mdash; losses can reach 20-40% of applied nitrogen within days of application. Warm, windy conditions on alkaline soils make this worse. Every tonne of ammonia lost is nitrogen you paid for that never reached a root.
        </p>
        <p>
          <strong>Nitrate leaching.</strong> Nitrate is highly mobile in soil water. On light, sandy soils in wet conditions, nitrate moves below the root zone rapidly &mdash; sometimes within a single heavy rainfall event. Autumn and winter are peak leaching periods when soil moisture exceeds field capacity and crops aren&apos;t actively taking up nutrients.
        </p>
        <p>
          <strong>Phosphorus runoff.</strong> Unlike nitrogen, phosphorus binds to soil particles. It leaves your fields attached to eroding soil or dissolved in surface water. Sloping fields, compacted soils, and heavy rainfall events concentrate P losses. Even small phosphorus losses matter &mdash; it takes very little P to trigger eutrophication in waterways.
        </p>
        <p>
          <strong>Potassium stripping.</strong> Continuous cropping without adequate return removes potassium steadily. Unlike nitrogen, potassium isn&apos;t fixed from the atmosphere. Once it&apos;s gone, it&apos;s gone &mdash; you must purchase replacement. Silage systems are particularly vulnerable because the entire crop is removed, taking potassium with it.
        </p>
        <p>
          Quantify these losses and you quantify the opportunity. A farm-gate nutrient balance &mdash; tracking everything coming in and everything leaving &mdash; reveals the gap. That gap is your leakage, and it&apos;s almost certainly larger than you think.
        </p>

        <h2>Closing the Nitrogen Loop</h2>
        <p>
          Nitrogen is the most expensive and most mobile major nutrient. It&apos;s also the one with the most management options for closing the loop:
        </p>
        <p>
          <strong>Legumes in rotation.</strong> Biological nitrogen fixation is the original closed loop &mdash; converting atmospheric N2 into plant-available nitrogen at no purchase cost. A well-established clover or lucerne crop can fix 150-300 kg N/ha per year. Including legumes in rotation doesn&apos;t just reduce fertilizer bills &mdash; it diversifies your system and breaks pest and disease cycles.
        </p>
        <p>
          <strong>Precision application.</strong> Right rate, right time, right place, right source. Split applications that match crop demand reduce the window for losses. Variable-rate technology targets application to field zones that will actually use the nitrogen. Band placement puts fertilizer near roots rather than on the surface where it volatilizes.
        </p>
        <p>
          <strong>Manure management.</strong> Injection or immediate incorporation of manure reduces ammonia volatilization by 60-90% compared to surface spreading. Timing manure application to match crop uptake rather than spreading when it&apos;s convenient prevents leaching. Covered slurry storage retains nitrogen that would otherwise escape as ammonia.
        </p>
        <p>
          <strong>Cover crops.</strong> Planted after harvest, cover crops capture residual soil nitrogen that would otherwise leach over winter. A cereal rye cover crop can scavenge 30-80 kg N/ha from the soil profile. When terminated, that nitrogen becomes available for the following cash crop &mdash; a nutrient bridge between seasons.
        </p>
        <p>
          <strong>Compost and organic amendments.</strong> Building soil organic nitrogen reserves creates a slow-release nutrient bank. Unlike mineral fertilizer, organic nitrogen releases gradually over years, reducing peak concentrations that drive leaching. Each percentage point increase in soil organic matter represents roughly 1,000 kg N/ha stored in the topsoil.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Closing the Phosphorus and Potassium Loops</h2>
        <p>
          Phosphorus and potassium don&apos;t volatilize like nitrogen, but they still leave the system in significant quantities. The strategies for retention are different:
        </p>
        <p>
          <strong>Soil testing to avoid over-application.</strong> Many fields carry legacy phosphorus from decades of surplus application. Regular soil testing identifies where P levels are already adequate &mdash; and where you can reduce or eliminate applications without affecting yield. Over-applying phosphorus doesn&apos;t increase production, but it does increase the pool available for runoff losses.
        </p>
        <p>
          <strong>Recycling manure and crop residues.</strong> Exporting all nutrients with sold products is unavoidable, but exporting residues and manure is a choice. Returning crop residues to fields recycles potassium and other nutrients. Applying manure to the fields that produced the feed closes the nutrient loop between livestock and crops.
        </p>
        <p>
          <strong>Precision placement.</strong> Banding phosphorus near the seed row increases uptake efficiency compared to broadcast application. Starter fertilizer placed precisely can reduce total P application rates by 30-50% while maintaining or improving crop response.
        </p>
        <p>
          <strong>Green manures and deep-rooting crops.</strong> Some crops scavenge nutrients from deeper in the soil profile and bring them to the surface. Deep-rooted species like chicory, lucerne, and daikon radish access potassium and phosphorus that shallow-rooted cash crops can&apos;t reach, effectively recycling nutrients from subsoil to topsoil.
        </p>
        <p>
          <strong>pH management.</strong> Soil pH directly affects phosphorus availability. In acidic soils, P locks up with iron and aluminium. In alkaline soils, it binds to calcium. Maintaining pH in the optimal range (6.0-7.0 for most crops) maximizes the availability of existing soil phosphorus, reducing the need for additional inputs.
        </p>

        <h2>The Mixed Farming Advantage</h2>
        <p>
          Farms with both crops and livestock have a natural nutrient cycling advantage that specialized operations lack. Livestock convert crop residues, by-products, and pasture into manure. Manure returns nutrients to cropland. The system has built-in feedback loops.
        </p>
        <p>
          <strong>Livestock as nutrient processors.</strong> Animals convert low-value crop residues and by-products &mdash; straw, screenings, damaged grain, cover crop biomass &mdash; into manure, a concentrated nutrient source that can be strategically applied to fields with the greatest need. They add value to materials that would otherwise decompose without benefit.
        </p>
        <p>
          <strong>Rotational grazing builds soil biology.</strong> Managed grazing stimulates root growth, feeds soil organisms through root exudates and dung, and distributes nutrients across pastures. Well-managed grazing systems build soil organic matter, which is the ultimate nutrient bank &mdash; storing nitrogen, phosphorus, potassium, and micronutrients in biologically active forms.
        </p>
        <p>
          <strong>Specialization broke the cycle.</strong> Industrial agriculture separated crops from livestock, concentrating animals in feedlots and crops on arable land. The result: feed nutrients flow one direction, manure accumulates where it&apos;s not needed, and cropland requires purchased fertilizer to replace what was removed. Integration restores the cycle. Even partial integration &mdash; exchanging manure and feed between neighboring specialists &mdash; captures some of this advantage.
        </p>

        <h2>Measuring Your Nutrient Balance</h2>
        <p>
          You can&apos;t manage what you don&apos;t measure, and nutrient cycling is no exception. A simple farm-gate nutrient balance provides the essential metric:
        </p>
        <p>
          <strong>Inputs:</strong> Total N, P, and K coming onto the farm through purchased fertilizer, imported feed, bought-in livestock, atmospheric deposition, and biological fixation.
        </p>
        <p>
          <strong>Outputs:</strong> Total N, P, and K leaving the farm through sold crops, sold livestock, sold milk, exported manure, and any other product streams.
        </p>
        <p>
          <strong>The balance:</strong> Inputs minus outputs equals your nutrient surplus (or deficit). A high surplus means you&apos;re buying nutrients that aren&apos;t leaving as product &mdash; they&apos;re accumulating in soil (sometimes usefully, often excessively) or leaking to the environment. A deficit means you&apos;re mining your soil&apos;s nutrient reserves.
        </p>
        <p>
          The target isn&apos;t zero surplus &mdash; some surplus is inevitable because biological systems aren&apos;t 100% efficient. But reducing surplus while maintaining or increasing output is the clearest indicator of improving nutrient cycling efficiency. Track this annually as a Stack 1 metric, and you&apos;ll have a powerful number for demonstrating continuous improvement.
        </p>
        <p>
          Most farms that calculate their first nutrient balance are surprised by the results. Nitrogen surpluses of 100-200 kg/ha are common in intensive systems &mdash; meaning half or more of purchased nitrogen never leaves as product. That&apos;s not just an environmental problem. It&apos;s a profitability problem hiding in plain sight.
        </p>
        <p>
          Start with the balance. Identify the biggest leaks. Close them one at a time. Measure again. The numbers will tell you whether your system is becoming more circular &mdash; and your input invoices will confirm it.
        </p>
      </article>

      {/* Bottom CTA - Stack 3 */}
      <div className="mt-12 p-8 bg-[#7B6BB8] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to close your nutrient loops?</h3>
        <p className="text-white/80 mb-4">
          Closed-loop nutrient cycling is a core practice within Stack 3 of the Five Stacks Framework &mdash; turning linear waste flows into circular value streams that reduce costs and build soil capital.
        </p>
        <p className="text-white/80 mb-6">
          Stack 3 focuses on transforming operational knowledge into circular systems: identifying what leaks from your operation, capturing it, and cycling it back into productive use. The framework helps you build these capabilities progressively, so each improvement compounds on the last.
        </p>
        <Link href="/framework/stack-3-circularity" className="inline-block bg-white text-[#7B6BB8] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          Explore Stack 3 &rarr;
        </Link>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/circular-economy-explained" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">The Circular Economy Explained &rarr;</span>
            <span className="block text-sm text-gray-600">How circular economy principles transform agricultural waste into margin</span>
          </Link>
          <Link href="/articles/farm-waste-to-value" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">Farm Waste to Value &rarr;</span>
            <span className="block text-sm text-gray-600">Practical pathways for turning agricultural waste streams into revenue</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
