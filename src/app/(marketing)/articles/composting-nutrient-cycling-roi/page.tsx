import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "On-Farm Composting: Turning Waste into Fertility",
  description: "Practical ROI analysis of on-farm composting for agricultural operations. Setup costs, nutrient value, payback timelines, and the circular connection to regenerative advantage.",
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/framework/stack-5-regeneration" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#B8ADE3] transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Stack 5: Regenerative Advantage
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#B8ADE3] text-white flex items-center justify-center font-bold text-sm">
            5
          </div>
          <span className="text-sm text-gray-500">Stack 5: Regenerative Advantage</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          On-Farm Composting: Turning Waste into Fertility
        </h1>
        <p className="text-xl text-gray-600">
          Every tonne of compost you produce on-farm displaces purchased inputs, cuts emissions, and builds soil capital. Here&apos;s the practical ROI analysis for agricultural operations.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <h2>The Fertilizer Bill Problem</h2>
        <p>
          Synthetic fertilizer costs have been volatile and trending upward for years. Between supply chain disruptions, energy price swings, and geopolitical uncertainty, budgeting for purchased inputs has become an exercise in guessing. That volatility hits margins hardest on farms where fertilizer represents a significant share of variable costs.
        </p>
        <p>
          On-farm composting offers a structural solution. Every tonne of finished compost you produce displaces purchased fertilizer&mdash;nitrogen, phosphorus, and potassium that you&apos;d otherwise buy at market prices. But the savings go beyond the nutrient value alone. Manufacturing synthetic fertilizer is energy-intensive: producing one tonne of ammonium nitrate requires roughly 1.5 tonnes of CO₂ equivalent in emissions. When you replace that input with on-farm compost, you&apos;re reducing both your costs and your carbon footprint simultaneously.
        </p>
        <p>
          This is the kind of double benefit that makes composting a Stack 5 practice&mdash;it improves your economics <em>and</em> your sustainability story at the same time.
        </p>

        <h2>What Farms Can Compost</h2>
        <p>
          Most farms already generate significant volumes of compostable material. The key is recognising what you have and managing each feedstock appropriately:
        </p>
        <p>
          <strong>Livestock manure and bedding</strong>&mdash;the obvious one. Cattle, poultry, and pig manure mixed with straw or wood shavings provides a nutrient-rich base. Poultry litter is particularly high in nitrogen and phosphorus.
        </p>
        <p>
          <strong>Crop residues:</strong> Straw, stalks, husks, and other post-harvest material. These are carbon-rich and help balance the high nitrogen content of manure.
        </p>
        <p>
          <strong>Food processing waste:</strong> If you have on-farm processing&mdash;juice pressing, vegetable washing, grain cleaning&mdash;the rejected material is excellent compost feedstock.
        </p>
        <p>
          <strong>Green waste from hedgerow and margin management:</strong> Hedge trimmings, grass cuttings from field margins, and prunings. This material would otherwise be burned or left to decompose slowly in place.
        </p>
        <p>
          <strong>Rejected or waste produce:</strong> Undersized vegetables, damaged fruit, and anything that doesn&apos;t meet market specifications. Instead of a disposal cost, it becomes a fertility input.
        </p>
        <p>
          Each feedstock has different carbon-to-nitrogen (C:N) ratios. Manure is typically 15:1 to 25:1, while straw runs 60:1 to 100:1. Successful composting requires blending to achieve a combined ratio of roughly 25:1 to 30:1&mdash;the sweet spot where microbial activity is most efficient.
        </p>

        <h2>The Composting Process for Farms</h2>
        <p>
          Three main approaches work at farm scale, each with different trade-offs:
        </p>
        <p>
          <strong>Windrow composting</strong> is the most common for farms. Materials are arranged in long rows (windrows) and turned periodically with a front-end loader or dedicated turner. It&apos;s low-cost, scalable, and forgiving of imperfect management. Windrows typically reach 55&ndash;65&deg;C within the first week, which is hot enough to kill weed seeds and pathogens.
        </p>
        <p>
          <strong>Static pile composting</strong> requires less labour but takes longer. Aeration comes from passive airflow or forced air piped through the base of the pile. It&apos;s suited to farms where turning equipment or labour is limited.
        </p>
        <p>
          <strong>In-vessel composting</strong> produces the highest-quality output in the shortest time, but requires more capital investment. Enclosed systems give precise control over temperature, moisture, and aeration. In many jurisdictions, in-vessel systems are required if you&apos;re composting food waste from off-farm sources.
        </p>
        <p>
          Regardless of method, the fundamentals are the same: maintain temperatures above 55&deg;C for at least three consecutive days to achieve pathogen kill. Turn windrows every 5&ndash;7 days during the active phase (first 4&ndash;6 weeks). Monitor moisture&mdash;the material should feel like a wrung-out sponge, roughly 50&ndash;60% moisture content. After the active phase, allow 4&ndash;8 weeks of curing before application. Test maturity by checking that temperatures have stabilised at ambient and the material smells earthy, not ammonia-like.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>The Numbers</h2>
        <p>
          Here&apos;s a realistic cost-benefit breakdown for farm-scale windrow composting:
        </p>
        <p>
          <strong>Setup costs:</strong> Loading and turning equipment (many farms already have a front-end loader&mdash;a dedicated compost turner costs &pound;5,000&ndash;&pound;15,000 but isn&apos;t essential to start). A hardstanding or concrete pad for the composting area prevents ground contamination and makes turning easier&mdash;budget &pound;3,000&ndash;&pound;8,000 depending on size. Screening equipment for finished compost is optional but improves consistency.
        </p>
        <p>
          <strong>Ongoing costs:</strong> Labour for turning (2&ndash;4 hours per week during active composting), fuel for equipment, and occasional testing. Most farms estimate 10&ndash;15 hours per month during the composting season.
        </p>
        <p>
          <strong>Value of finished compost:</strong> Quality farm compost typically contains 8&ndash;12 kg nitrogen, 4&ndash;6 kg phosphorus (P₂O₅), and 8&ndash;12 kg potassium (K₂O) per tonne. At current fertilizer prices, the nutrient value alone is &pound;15&ndash;&pound;30 per tonne. Add the soil conditioning value&mdash;improved water retention, better structure, increased biological activity&mdash;and the effective value rises to &pound;30&ndash;&pound;50 per tonne.
        </p>
        <p>
          <strong>Payback timeline:</strong> For farms with existing manure handling infrastructure, payback typically comes within 1&ndash;2 seasons. The hardstanding is the main capital cost; everything else is incremental labour. A 200-head cattle farm producing 1,500&ndash;2,000 tonnes of manure annually can generate 600&ndash;800 tonnes of finished compost&mdash;displacing &pound;18,000&ndash;&pound;40,000 in purchased fertilizer value per year.
        </p>

        <h2>Regulatory Considerations</h2>
        <p>
          Composting regulations vary by jurisdiction and scale, so check your local requirements before starting:
        </p>
        <p>
          <strong>Environmental permits:</strong> Many jurisdictions require permits for composting operations above a certain scale. However, most also provide exemptions for on-farm composting of farm-origin materials for use on the same holding.
        </p>
        <p>
          <strong>Farm-origin exemptions:</strong> If you&apos;re composting your own manure, crop residues, and green waste for use on your own land, you typically fall under agricultural exemptions rather than waste management regulations. This significantly reduces the administrative burden.
        </p>
        <p>
          <strong>Off-farm waste:</strong> Accepting waste from external sources&mdash;neighbouring farms, food processors, or municipal green waste collections&mdash;usually triggers additional permitting requirements. The material may be classified as &ldquo;waste&rdquo; until composting is complete, requiring registered exemptions or environmental permits.
        </p>
        <p>
          <strong>Nitrate vulnerable zones:</strong> If your farm is in a nitrate vulnerable zone (NVZ), restrictions apply to the timing and rates of compost application, just as they do for raw manure. Typical rules limit application to certain months and cap total nitrogen loading per hectare per year.
        </p>
        <p>
          The regulatory landscape is generally supportive of on-farm composting&mdash;policymakers recognise it as a beneficial practice. But getting the paperwork right upfront avoids problems later.
        </p>

        <h2>The Circular Connection</h2>
        <p>
          Composting sits at the intersection of two Five Stacks pillars. It&apos;s <strong>Stack 3 (Circular Value Creation)</strong> in action&mdash;waste becomes a valuable input. And it&apos;s <strong>Stack 5 (Regenerative Advantage)</strong> because every application cycle builds soil capital that compounds over time.
        </p>
        <p>
          The feedback loop works like this: organic waste goes into the composting process. Finished compost goes onto fields. Soil health improves&mdash;better structure, more biological activity, greater water-holding capacity. Healthier soil produces stronger crops with fewer purchased inputs. Crop residues and manure go back into composting. Each cycle reinforces the next.
        </p>
        <p>
          Input costs decrease as your soil becomes more self-sustaining. Yields stabilise as soil biology buffers against weather variability. The waste stream that used to be a disposal problem becomes the foundation of your fertility programme. That&apos;s circularity with a measurable bottom-line impact.
        </p>
        <p>
          For operations building their sustainability documentation, composting provides clear, quantifiable metrics: tonnes of waste diverted, fertilizer purchases displaced, soil organic matter trends over time. These are exactly the numbers that buyers, certifiers, and supply chain partners want to see.
        </p>
      </article>

      {/* Bottom CTA - Stack 5 */}
      <div className="mt-12 p-8 bg-[#B8ADE3] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to close your nutrient loop?</h3>
        <p className="text-white/80 mb-4">
          On-farm composting is one of the most accessible entry points to regenerative practice&mdash;turning an existing waste stream into a fertility asset with payback in as little as one season.
        </p>
        <p className="text-white/80 mb-6">
          Stack 5 helps you document these circular improvements and translate them into market positioning. The Five Stacks Framework connects operational changes like composting to the sustainability narrative that buyers and supply chain partners increasingly demand.
        </p>
        <Link href="/framework/stack-5-regeneration" className="inline-block bg-white text-[#7C6BB5] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          Explore Stack 5 &rarr;
        </Link>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/soil-health-business-case" className="block p-4 border border-gray-200 rounded-lg hover:border-[#B8ADE3] transition-colors">
            <span className="font-medium text-gray-900">Soil Health: The Business Case &rarr;</span>
            <span className="block text-sm text-gray-600">How healthy soil reduces costs and builds long-term asset value</span>
          </Link>
          <Link href="/articles/regenerative-practices-2025" className="block p-4 border border-gray-200 rounded-lg hover:border-[#B8ADE3] transition-colors">
            <span className="font-medium text-gray-900">7 Regenerative Practices Delivering ROI in 2025 &rarr;</span>
            <span className="block text-sm text-gray-600">What&apos;s working and why across diverse operations</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
