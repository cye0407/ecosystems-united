import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "Intercropping Practices: From Push-Pull to Companion Planting",
  description: "Beyond basic intercropping patterns, specialized practices like push-pull, trap cropping, and companion planting offer targeted benefits. Here's how they work.",
  keywords: ["intercropping", "polyculture", "crop diversity", "companion planting", "practices", "agriculture", "sustainability"],
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
          Intercropping Practices: From Push-Pull to Companion Planting
        </h1>
        <p className="text-xl text-gray-600">
          Beyond basic intercropping patterns, specialized practices like push-pull, trap cropping, and companion planting offer targeted benefits for pest control and soil health.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          The four main intercropping patterns—row, mixed, strip, and relay—provide the structural foundation. But beyond spatial arrangements, several specialized intercropping practices have been developed to address specific challenges like pest management, soil fertility, and weed control.
        </p>

        <h2>The Four Basic Patterns (Review)</h2>
        <p>
          <strong>Row intercropping:</strong> Two or more crops planted simultaneously in separate rows. Competition for resources depends on row numbers, spacing, and cultivars, though some competition for light and nutrients can be expected.
        </p>
        <p>
          <strong>Mixed intercropping:</strong> Two or more crops grown together without specific row structure. Competition between crops is expected due to close spatial proximity, but well-chosen combinations yield benefits.
        </p>
        <p>
          <strong>Strip intercropping:</strong> Crops grown in independent sections far enough apart to allow independent cultivation and prevent competition, but close enough to allow for complementary benefits.
        </p>
        <p>
          <strong>Relay intercropping:</strong> Crops at different lifecycle stages grown together. Typically, the second crop is planted between flowering and harvest of the first. The Three Sisters method is a complex relay where maize is planted first, beans added when maize is about 15cm tall, and squash planted a week later.
        </p>

        <h2>Specialized Pest Management Practices</h2>

        <h3>Insectary Intercropping</h3>
        <p>
          This approach substitutes one or more rows of the primary crop with flowering plants. The goal is to increase natural enemy populations (beneficial insects that prey on pests) and pollinator populations above ordinary levels, conserving them during times of low prey abundance or nectar availability.
        </p>

        <h3>Trap Cropping</h3>
        <p>
          Trap cropping uses plants more attractive to a specific pest than your main crop. Two approaches exist:
        </p>
        <ul>
          <li>Plant a cultivar more attractive to the target pest alongside the main crop</li>
          <li>Plant the same crop in two intervals so a subsection reaches the pest's preferred maturity before the main crop</li>
        </ul>
        <p>
          The pest is drawn to the trap crop, where it can be mechanically removed or the trap crop itself can be removed to prevent further infestation.
        </p>

        <h3>Repellent Intercropping</h3>
        <p>
          This approach incorporates plant varieties offensive to specific pests into the growing space. The repellent effect can be chemical (volatile compounds that deter pests), physical (structures that interfere with pest movement), or both. More rows of repellent crop are typically needed than in trap cropping.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Push-Pull Intercropping</h2>
        <p>
          Push-pull combines trap and repellent approaches into a single integrated system. This approach has gained significant popularity, particularly in Africa for maize production.
        </p>
        <p>
          The classic push-pull system intercrop Silverleaf desmodium (<em>Desmodium uncinatum</em>) with maize (<em>Zea mays</em>), bordered by Napier grass (<em>Pennisetum purpureum</em>) or Sudan grass. The logic:
        </p>
        <ul>
          <li>Desmodium <strong>repels (pushes)</strong> pests like the maize stemborer away from the maize</li>
          <li>Napier/Sudan grass <strong>attracts (pulls)</strong> stemborer moths, which lay eggs on the grass instead of maize</li>
          <li>Sudan grass produces a gummy substance that traps larvae, preventing them from reaching maturity and reducing overall populations</li>
          <li>Desmodium also encourages Witchweed (<em>Striga hermonthica</em>) seeds to germinate while preventing attachment to maize roots—the Striga dies before maturity, reducing the seed bank over time</li>
          <li>Desmodium fixes nitrogen, improving overall soil fertility</li>
        </ul>
        <p>
          This system addresses multiple problems simultaneously: pest insects, parasitic weeds, and soil fertility.
        </p>

        <h2>Companion Planting</h2>
        <p>
          Companion planting grows a cash crop alongside another plant that isn't harvested, specifically to benefit both the crop and the environment. The companion is often selected for weed competition ability, though other benefits may be sought.
        </p>
        <p>
          Unlike intercropping where all crops are harvested, companion planting sacrifices one crop's harvest value for benefits to the primary crop—similar to how cover crops function between growing seasons, but during the growing season.
        </p>

        <h2>Mixing and Matching</h2>
        <p>
          These practices aren't mutually exclusive. Real-world systems often combine elements:
        </p>
        <ul>
          <li>Row intercropping with trap crop borders</li>
          <li>Relay intercropping with companion plants for weed suppression</li>
          <li>Strip intercropping with insectary rows</li>
        </ul>
        <p>
          The key is matching practices to your specific pest pressures, soil conditions, climate, and management capacity. Systems that work brilliantly in one context may fail in another.
        </p>

        <h2>The Stack 4 Approach</h2>
        <p>
          These specialized intercropping practices represent Stack 4 implementation—sustainable methods that can reduce input costs (pesticides, herbicides, fertilizers) while maintaining or improving yields.
        </p>
        <p>
          The key principles:
        </p>
        <ul>
          <li><strong>Start with proven combinations</strong> for your region and crops</li>
          <li><strong>Understand the mechanism</strong>—why does this combination work?</li>
          <li><strong>Measure results</strong>—are you actually seeing reduced pest pressure, better yields, lower input costs?</li>
          <li><strong>Adapt based on data</strong>—what works in research plots may need adjustment for your specific conditions</li>
        </ul>
      </article>

      {/* Bottom CTA - Stack 4 */}
      <div className="mt-12 p-8 bg-[#3B7D6E] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to implement sustainable practices?</h3>
        <p className="text-white/80 mb-4">
          Intercropping practices like push-pull can significantly reduce input costs while improving outcomes—when properly implemented and measured.
        </p>
        <p className="text-white/80 mb-6">
          Stack 4 focuses on sustainable practices that generate measurable returns. The framework helps you choose practices suited to your operation, implement them correctly, and verify they're delivering expected benefits.
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
          <Link href="/articles/measuring-intercropping-effectiveness" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3B7D6E] transition-colors">
            <span className="font-medium text-gray-900">Measuring Intercropping Effectiveness →</span>
            <span className="block text-sm text-gray-600">Metrics to evaluate whether your system is working</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
