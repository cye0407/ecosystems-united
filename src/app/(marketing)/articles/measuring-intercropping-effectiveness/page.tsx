import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "Measuring Intercropping Effectiveness: Key Metrics and Methods",
  description: "Land Equivalent Ratio, Competitive Ratio, and other metrics help you objectively evaluate whether your intercropping system is actually delivering benefits.",
  keywords: ["intercropping", "polyculture", "crop diversity", "companion planting", "measuring", "effectiveness", "agriculture", "sustainability"],
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/framework/stack-4-resilience" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Stack 4: Adaptive Resilience
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#3B7D6E] text-white flex items-center justify-center font-bold text-sm">
            4
          </div>
          <span className="text-sm text-gray-500">Stack 4: Adaptive Resilience</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Measuring Intercropping Effectiveness: Key Metrics and Methods
        </h1>
        <p className="text-xl text-gray-600">
          Strong production and output are priorities. These metrics help you objectively evaluate whether your intercropping system is actually delivering benefits.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          Although there are many motivations for choosing to intercrop—risk reduction, soil health, pest management—strong production remains a priority. Without a means to measure effectiveness, you can't objectively evaluate outcomes or adjust practices accordingly.
        </p>
        <p>
          Several established metrics exist for evaluating intercropping systems. Each answers different questions about system performance.
        </p>

        <h2>Land Equivalent Ratio (LER)</h2>
        <p>
          The <strong>Land Equivalent Ratio</strong> is the most common and fundamental intercropping metric. It answers the question: how much land would you need, using monocultures, to produce the same output as your intercropped system?
        </p>
        <p className="bg-gray-100 p-4 rounded font-mono text-sm">
          LER = (Intercrop Yield A / Monoculture Yield A) + (Intercrop Yield B / Monoculture Yield B)
        </p>
        <p>
          <strong>Interpretation:</strong>
        </p>
        <ul>
          <li><strong>LER greater than 1.0:</strong> Advantageous pairing—intercropping produces more than equivalent monoculture area</li>
          <li><strong>LER equal to 1.0:</strong> Neutral—intercropping produces the same as monocultures</li>
          <li><strong>LER less than 1.0:</strong> Disadvantageous pairing—monocultures would be more productive</li>
        </ul>
        <p>
          An LER of 1.25 means you would need 25% more land to produce the same output using separate monocultures. This is a meaningful efficiency gain.
        </p>
        <p>
          LER is useful for measuring maximum production, comparing crop combinations, and evaluating agronomic practices. To calculate it properly, you need monoculture comparison plots—ideally side-by-side with your intercropped area under the same conditions.
        </p>

        <h2>Income Equivalence Ratio (IER)</h2>
        <p>
          The <strong>Income Equivalence Ratio</strong> uses a similar approach to LER but measures yield in terms of net income rather than physical production.
        </p>
        <p>
          IER accounts for the reality that different crops have different market values. A combination might have a low LER but high IER if the intercropped system favors a higher-value crop.
        </p>
        <p>
          <strong>Limitation:</strong> IER fluctuates with crop prices, so it may not accurately gauge long-term productivity. A combination that looks good when prices favor one crop may look poor when prices shift.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Competitive Ratio (CR)</h2>
        <p>
          Using LER data, the <strong>Competitive Ratio</strong> measures how competitive the two (or more) crops are with each other, accounting for their sowing proportions.
        </p>
        <p>
          This helps you understand whether one crop is dominating at the expense of another. A well-balanced intercrop should show relatively equal competitive ratios—both crops contributing proportionally to the system's output.
        </p>
        <p>
          If one crop has a much higher CR than another, you might adjust:
        </p>
        <ul>
          <li>Planting ratios (more of the less competitive crop)</li>
          <li>Spacing (give the weaker competitor more room)</li>
          <li>Timing (plant the weaker competitor earlier)</li>
          <li>Cultivar selection (choose more competitive varieties of the weaker crop)</li>
        </ul>

        <h2>Monetary Advantage Index (MAI)</h2>
        <p>
          The <strong>Monetary Advantage Index</strong> provides an indication of the economic advantage of an intercropping system in actual currency terms rather than ratios.
        </p>
        <p>
          While LER tells you the system is 25% more land-efficient, MAI tells you that translates to $X more income per acre. This makes it easier to compare intercropping benefits against the additional costs (labor, management complexity) it requires.
        </p>

        <h2>Area Time Equivalent Ratio (ATER)</h2>
        <p>
          The <strong>Area Time Equivalent Ratio</strong> incorporates time by accounting for the duration of crop growth in the evaluation.
        </p>
        <p>
          This matters for relay intercropping where crops occupy the land for different periods. A system might look efficient by LER but less impressive when you account for the total time the land is occupied.
        </p>
        <p>
          ATER is particularly useful when comparing systems with different growing season lengths or when evaluating whether relay intercropping is more efficient than sequential monocultures.
        </p>

        <h2>Practical Measurement Approach</h2>
        <p>
          For most operations, start with LER as your primary metric:
        </p>
        <ol>
          <li><strong>Establish comparison plots:</strong> Plant monocultures of each component crop alongside your intercropped area, under identical conditions</li>
          <li><strong>Measure yields carefully:</strong> Harvest and weigh each crop separately from both intercropped and monoculture plots</li>
          <li><strong>Calculate LER:</strong> Use the formula to determine whether your combination is advantageous</li>
          <li><strong>Track over multiple seasons:</strong> One season's results may not represent long-term performance</li>
        </ol>
        <p>
          Add IER and MAI calculations when you want to understand economic implications. Use CR when you need to fine-tune crop balance. Apply ATER when time efficiency matters for your system.
        </p>

        <h2>The Stack 4 Connection</h2>
        <p>
          Measurement is central to Stack 4 implementation. Without data, you can't know whether sustainable practices are actually delivering value.
        </p>
        <p>
          These intercropping metrics connect directly to the broader Five Stacks approach:
        </p>
        <ul>
          <li>They provide objective evidence for Stack 1 certification claims</li>
          <li>They generate the baseline data Stack 2 requires for efficiency evaluation</li>
          <li>They help identify circular value opportunities in Stack 3</li>
          <li>They verify that Stack 4 practices are working as expected</li>
          <li>They build the data foundation for Stack 5 storytelling</li>
        </ul>
        <p>
          Start measuring now—even imperfectly—so you have data to work with as you refine your system.
        </p>
      </article>

      {/* Bottom CTA - Stack 4 */}
      <div className="mt-12 p-8 bg-[#3B7D6E] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to measure what matters?</h3>
        <p className="text-white/80 mb-4">
          Effective intercropping requires measurement. These metrics help you evaluate whether your practices are delivering the benefits you expect.
        </p>
        <p className="text-white/80 mb-6">
          Stack 4 focuses on sustainable practices that generate measurable returns. The framework helps you implement practices systematically and verify results with data—turning assumptions into evidence.
        </p>
        <Link href="/framework/stack-4-resilience" className="inline-block bg-white text-[#3B7D6E] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          Get Started with Stack 4 →
        </Link>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/introduction-to-intercropping" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3B7D6E] transition-colors">
            <span className="font-medium text-gray-900">Introduction to Intercropping →</span>
            <span className="block text-sm text-gray-600">The basics of multi-crop systems</span>
          </Link>
          <Link href="/articles/advantages-disadvantages-intercropping" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3B7D6E] transition-colors">
            <span className="font-medium text-gray-900">Advantages and Disadvantages of Intercropping →</span>
            <span className="block text-sm text-gray-600">A balanced look at benefits and challenges</span>
          </Link>
          <Link href="/articles/intercropping-practices" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3B7D6E] transition-colors">
            <span className="font-medium text-gray-900">Intercropping Practices →</span>
            <span className="block text-sm text-gray-600">Specialized approaches like push-pull and companion planting</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
