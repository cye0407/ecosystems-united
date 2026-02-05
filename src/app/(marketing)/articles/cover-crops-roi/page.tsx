import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "Cover Crops: Investment, Returns, and the Path to Positive ROI",
  description: "Cover crops typically cost $45-70/acre and break even by Year 2-3. Here's the detailed cost-benefit analysis for your operation.",
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/framework/stack-2-efficiency" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#5B4A9E] transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Stack 2: Operational Efficiency
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
          Cover Crops: Investment, Returns, and the Path to Positive ROI
        </h1>
        <p className="text-xl text-gray-600">
          Cover crops consistently emerge as the highest-ROI first step in soil health programs. Here's the detailed cost-benefit analysis.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          Among all regenerative practices, cover crops offer the best combination of low initial investment, minimal equipment requirements, and multiple compounding benefits. A $45-70/acre investment typically generates positive returns by Year 2-3 and continues building value thereafter.
        </p>
        <p>
          This isn't theory—it's documented across thousands of farms in USDA-SARE surveys and independent research.
        </p>

        <h2>The Investment: What Cover Crops Actually Cost</h2>
        <p>
          Breaking down the per-acre investment:
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left">Category</th>
                <th className="text-left">Cost per Acre</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Seed (3-way mix)</td>
                <td>$25-40</td>
              </tr>
              <tr>
                <td>Planting</td>
                <td>$10-15</td>
              </tr>
              <tr>
                <td>Termination</td>
                <td>$10-15</td>
              </tr>
              <tr>
                <td><strong>Total</strong></td>
                <td><strong>$45-70</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Seed costs have declined—cover crop users now report median seed costs of $16-20/acre, down from $25/acre in earlier surveys. Many varieties can be seeded with existing equipment (standard drills or broadcast), avoiding capital investment.
        </p>

        <h2>The Returns: Where Value Accumulates</h2>
        <p>
          Cover crop returns come from multiple sources, and they compound over time:
        </p>
        <p>
          <strong>Fertilizer savings: $30-50/acre.</strong> Legume cover crops fix nitrogen—hairy vetch can fix 90-160 lbs N/acre, crimson clover up to 130 lbs N/acre. Iowa corn farmers report 30% reductions in nitrogen inputs following vetch. At current fertilizer prices, that's substantial savings.
        </p>
        <p>
          <strong>Yield improvement: $10-25/acre.</strong> Studies indicate cover crops led to 4.5 bu/acre higher average corn yield and 2.8% higher soybean yields even in the first year. At $4.88/bu corn, that's $22/acre before other benefits.
        </p>
        <p>
          <strong>Erosion prevention: $10-20/acre.</strong> Difficult to quantify precisely, but preventing topsoil loss preserves productive capacity. One inch of topsoil takes 500 years to form naturally.
        </p>
        <p>
          <strong>Water management: $15-30/acre.</strong> Better infiltration means earlier field access after rain (2-3 days in documented cases), reduced irrigation needs, and less runoff.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>The ROI Timeline</h2>
        <p>
          USDA-SARE research shows cover crops take an average of 3 years to break even, then provide profitable returns in subsequent years. The pattern:
        </p>
        <ul>
          <li><strong>Year 1:</strong> Net cost likely. Investment exceeds measurable returns as soil biology begins transition.</li>
          <li><strong>Year 2:</strong> Approaching break-even. Fertilizer savings begin to materialize. Yield stability improving.</li>
          <li><strong>Year 3:</strong> Break-even to positive ROI. Compounding benefits from improved soil structure and biology.</li>
          <li><strong>Years 4+:</strong> Increasing returns. Full benefits from nutrient cycling, water retention, and yield stability.</li>
        </ul>
        <p>
          This timeline is similar to other capital investments like liming to adjust soil pH—you invest now for returns that build over time.
        </p>

        <h2>Selecting the Right Mix</h2>
        <p>
          Multi-species mixes outperform single species by combining functional benefits:
        </p>
        <p>
          <strong>The 3-way mix formula:</strong>
        </p>
        <ul>
          <li>1 deep rooter (radish, turnip) for soil decompaction</li>
          <li>1 nitrogen fixer (clover, vetch, pea) for fertility</li>
          <li>1 biomass builder (rye, oat) for organic matter and erosion control</li>
        </ul>
        <p>
          <strong>Cooler climate example:</strong> 2 lbs daikon radish + 15 lbs hairy vetch + 30 lbs cereal rye
        </p>
        <p>
          <strong>Warmer climate example:</strong> 2 lbs yellow sweet clover + 15 lbs crimson clover + 20 lbs annual ryegrass
        </p>

        <h2>Timing Options</h2>
        <p>
          Different planting windows work for different systems:
        </p>
        <ul>
          <li><strong>Late summer/early fall:</strong> Best for winter-hardy species like rye or vetch</li>
          <li><strong>Post-harvest:</strong> Quick-growing mixes in warmer regions</li>
          <li><strong>Frost-seeding:</strong> Broadcast legumes like clover in early spring</li>
          <li><strong>Relay cropping:</strong> Interseed into standing crops just before harvest</li>
        </ul>

        <h2>Documented Success</h2>
        <p>
          <strong>Jeff Olson, Winfield, Iowa (1,300 acres):</strong> Soil organic matter increased from 2.8% to over 4%, improved infiltration, better field access after heavy rains.
        </p>
        <p>
          <strong>David Brandt, Carroll, Ohio:</strong> Since the 1970s, consistent cover cropping with hairy vetch, winter peas, and cereal rye has dramatically reduced commercial fertilizer needs while improving soil health.
        </p>
        <p>
          <strong>Michigan farm:</strong> 4x improvement in water infiltration after just one season of daikon radish.
        </p>

        <h2>The Stack 2 Connection</h2>
        <p>
          Cover crops are a Stack 2 efficiency practice—they fix operational leaks:
        </p>
        <ul>
          <li><strong>Fertilizer leaks:</strong> Nutrients leaving your fields as runoff or volatilization get captured and cycled</li>
          <li><strong>Water leaks:</strong> Better infiltration means more moisture stays in your soil, not running off</li>
          <li><strong>Yield leaks:</strong> Soil degradation costs you production every year—cover crops reverse this</li>
          <li><strong>Equipment leaks:</strong> Fewer tillage passes means less fuel, labor, and wear</li>
        </ul>
        <p>
          The documentation you build tracking cover crop ROI also supports later stacks—providing the data foundation for Stack 5 market positioning when you're ready.
        </p>
      </article>

      {/* Bottom CTA - Stack 2 */}
      <div className="mt-12 p-8 bg-[#5B4A9E] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to fix your efficiency leaks?</h3>
        <p className="text-white/80 mb-4">
          Cover crops are often the highest-ROI first step in agricultural efficiency improvement—fixing fertilizer, water, and yield leaks simultaneously.
        </p>
        <p className="text-white/80 mb-6">
          Stack 2 focuses on moving from passive measurement to operational improvement. The Five Stacks Framework helps you identify your biggest efficiency opportunities and implement changes that pay for themselves.
        </p>
        <Link href="/framework/stack-2-efficiency" className="inline-block bg-white text-[#5B4A9E] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          Explore Stack 2 →
        </Link>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/soil-health-business-case" className="block p-4 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors">
            <span className="font-medium text-gray-900">Soil Health: The Business Case →</span>
            <span className="block text-sm text-gray-600">How healthy soil reduces costs and builds asset value</span>
          </Link>
          <Link href="/articles/regenerative-agriculture-economics" className="block p-4 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors">
            <span className="font-medium text-gray-900">The Economics of Regenerative Agriculture →</span>
            <span className="block text-sm text-gray-600">Financial framework for ecological farming decisions</span>
          </Link>
          <Link href="/articles/measuring-intercropping-effectiveness" className="block p-4 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors">
            <span className="font-medium text-gray-900">Measuring Intercropping Effectiveness →</span>
            <span className="block text-sm text-gray-600">Metrics for multi-crop system evaluation</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
