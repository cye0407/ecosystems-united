import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata = {
  title: "Introduction to Intercropping: Multi-Crop Systems for Better Land Use",
  description: "Intercropping grows two or more crops together to maximize land use, improve soil health, and reduce risk. Learn the basics of this sustainable practice.",
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
          Introduction to Intercropping: Multi-Crop Systems for Better Land Use
        </h1>
        <p className="text-xl text-gray-600">
          Intercropping grows two or more crops together to maximize land use, improve soil health, and reduce risk. It's one of the oldest—and most effective—sustainable practices.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          Intercropping is a growing method rooted in ecological diversity. In intercropped systems, two or more crops are grown together for a given growing period. The approach has been used for centuries across cultures—most famously in the "Three Sisters" method developed by Native Americans, where maize, pole beans, and winter squash grow together in a mutually beneficial arrangement.
        </p>

        <h2>The Four Main Intercropping Patterns</h2>
        <p>
          There are four common approaches to intercropping, each with different management requirements and outcomes:
        </p>
        <p>
          <strong>Strip intercropping:</strong> Crops are grown simultaneously in independent rows within the same field. The strips are far enough apart to allow independent cultivation while close enough to enable complementary benefits.
        </p>
        <p>
          <strong>Row intercropping:</strong> Crops are grown together with at least one crop planted in defined rows. How and whether the plants compete for resources depends on row numbers, spacing, and cultivar selection.
        </p>
        <p>
          <strong>Mixed intercropping:</strong> There's no specific order to the crops—they grow together without defined row structure. Competition between crops is expected due to close proximity, but well-chosen combinations can still yield benefits.
        </p>
        <p>
          <strong>Relay intercropping:</strong> The growing system is timed around crop lifecycles. Typically, the second crop is planted after the first reaches reproductive stage but before peak maturity. This extends productive use of land across the season.
        </p>

        <h2>The Three Sisters Example</h2>
        <p>
          The most famous intercropping example demonstrates how complementary plants work together:
        </p>
        <ul>
          <li><strong>Maize</strong> provides a structure for beans to climb and shades the squash</li>
          <li><strong>Pole beans</strong> stabilize the maize and fix nitrogen into the soil</li>
          <li><strong>Winter squash</strong> provides ground cover, maintaining moisture and suppressing weeds</li>
        </ul>
        <p>
          Each crop provides something the others need. This is the core principle of successful intercropping—complementary crops that together produce more than they would separately.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Key Principles for Success</h2>
        <p>
          Regardless of which intercropping pattern you choose, successful implementation requires:
        </p>
        <ul>
          <li><strong>Complementary plants:</strong> Crops should have different rooting depths, canopy structures, heights, and nutrient requirements to minimize competition</li>
          <li><strong>Detailed planning:</strong> Understanding the characteristics of your component crops before planting</li>
          <li><strong>Timely sowing:</strong> Getting timing right for each crop in the system</li>
          <li><strong>Appropriate fertilization:</strong> Applying nutrients at the right time for the crop mix</li>
          <li><strong>Pest and weed strategy:</strong> Planning for management across multiple crops</li>
          <li><strong>Efficient harvesting:</strong> Managing harvest timing for different crop maturities</li>
        </ul>
        <p>
          If the wrong plants are grown together or spacing is incorrect, output decreases rather than increases. Intercropping requires more knowledge than monoculture—but the returns can justify the learning investment.
        </p>

        <h2>Measuring Success: The Land Equivalent Ratio</h2>
        <p>
          The most common way to measure intercropping effectiveness is the <strong>Land Equivalent Ratio (LER)</strong>:
        </p>
        <p className="bg-gray-100 p-4 rounded font-mono text-sm">
          LER = (Intercrop Yield 1 / Pure Yield 1) + (Intercrop Yield 2 / Pure Yield 2)
        </p>
        <ul>
          <li><strong>LER greater than 1.0:</strong> The combination is advantageous—you'd need more land to produce the same output with monocultures</li>
          <li><strong>LER less than 1.0:</strong> The combination is disadvantageous—monocultures would be more efficient</li>
        </ul>
        <p>
          An LER of 1.2 means the intercropped system produces 20% more than the same area would if split between monocultures of each crop.
        </p>

        <h2>The Stack 4 Connection</h2>
        <p>
          Intercropping is a Stack 4 sustainable practice—one that can improve both productivity and environmental outcomes when implemented correctly. It offers:
        </p>
        <ul>
          <li>Better land use efficiency (more output per acre)</li>
          <li>Reduced pest and disease pressure through diversity</li>
          <li>Improved soil health through varied root systems</li>
          <li>Risk reduction through crop diversification</li>
          <li>Potential for certification and premium markets</li>
        </ul>
        <p>
          The key is starting with proven combinations and measuring results. Stack 4 practices like intercropping build on the foundation of Stacks 1-3—you need baseline data to know whether your intercropping system is actually delivering the expected benefits.
        </p>
      </article>

      {/* Bottom CTA - Stack 4 */}
      <div className="mt-12 p-8 bg-[#3B7D6E] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to implement sustainable practices?</h3>
        <p className="text-white/80 mb-4">
          Intercropping is one of many Stack 4 practices that can improve both productivity and sustainability—when implemented with proper measurement.
        </p>
        <p className="text-white/80 mb-6">
          Stack 4 focuses on sustainable practices that generate measurable returns. The key is choosing practices that fit your operation, implementing them correctly, and tracking results to verify they're delivering expected benefits.
        </p>
        <Link href="/framework/stack-4-resilience" className="inline-block bg-white text-[#3B7D6E] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          Get Started with Stack 4 →
        </Link>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/advantages-disadvantages-intercropping" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3B7D6E] transition-colors">
            <span className="font-medium text-gray-900">Advantages and Disadvantages of Intercropping →</span>
            <span className="block text-sm text-gray-600">A balanced look at benefits and challenges</span>
          </Link>
          <Link href="/articles/intercropping-practices" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3B7D6E] transition-colors">
            <span className="font-medium text-gray-900">Intercropping Practices →</span>
            <span className="block text-sm text-gray-600">Detailed approaches including push-pull and companion planting</span>
          </Link>
          <Link href="/articles/measuring-intercropping-effectiveness" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3B7D6E] transition-colors">
            <span className="font-medium text-gray-900">Measuring Intercropping Effectiveness →</span>
            <span className="block text-sm text-gray-600">Metrics and methods to evaluate your system</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
