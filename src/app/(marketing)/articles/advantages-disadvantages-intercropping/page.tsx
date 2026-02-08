import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "Advantages and Disadvantages of Intercropping: A Balanced Assessment",
  description: "Intercropping offers yield stability, improved soil health, and pest control—but requires more knowledge and labor. Here's a balanced look at the trade-offs.",
  keywords: ["intercropping", "polyculture", "crop diversity", "companion planting", "advantages", "disadvantages", "agriculture", "sustainability"],
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
          Advantages and Disadvantages of Intercropping: A Balanced Assessment
        </h1>
        <p className="text-xl text-gray-600">
          Intercropping has real benefits—but also real challenges. Understanding both helps you decide whether it fits your operation.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          Intercropping—growing two or more crops together—has been practiced for centuries across cultures. Indigenous farming communities like the Maya developed systems combining maize, beans, and squash. African and Asian agricultural systems have long employed intercropping to maintain soil fertility and enhance crop resilience.
        </p>
        <p>
          Modern research confirms many traditional benefits, but also highlights challenges. Here's a balanced assessment to help you evaluate whether intercropping makes sense for your operation.
        </p>

        <h2>Advantages of Intercropping</h2>

        <h3>Increased Yield Stability</h3>
        <p>
          Diversifying crops within the same plot reduces the risk of total crop failure from pests, diseases, or weather. If one crop suffers, others may compensate. This risk reduction can be more valuable than absolute yield maximization in some contexts.
        </p>

        <h3>Improved Soil Health</h3>
        <p>
          Different crops contribute different nutrients and organic matter to soil. Legumes fix nitrogen that benefits companion crops. Varied root systems improve soil structure at multiple depths. This can reduce fertilizer requirements and prevent soil degradation over time.
        </p>

        <h3>Pest and Disease Control</h3>
        <p>
          Certain plant combinations naturally repel pests or disrupt their life cycles. Crop diversity makes it harder for pest populations to build up. This can reduce reliance on chemical pesticides—a cost savings and potential certification benefit.
        </p>

        <h3>Efficient Land Use</h3>
        <p>
          Intercropping can achieve higher productivity per unit of land than monoculture. When the Land Equivalent Ratio exceeds 1.0, you're getting more output from the same area. This is particularly valuable when land is limited or expensive.
        </p>

        <h3>Weed Suppression</h3>
        <p>
          Dense, diverse plant coverage can naturally suppress weed growth by competing for light and space. Ground-covering crops like squash shade out weeds without herbicides.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Disadvantages of Intercropping</h2>

        <h3>Complex Management</h3>
        <p>
          Intercropping requires careful planning and knowledge of crop compatibility, planting schedules, and resource allocation. You need to understand each crop's needs and how they interact. This learning curve is real and takes time to navigate.
        </p>

        <h3>Potential Nutrient Competition</h3>
        <p>
          Without proper planning, crops may compete for essential nutrients, water, or light—potentially reducing yields for all crops. Choosing complementary combinations with different rooting depths and nutrient needs is essential but not always straightforward.
        </p>

        <h3>Labor Intensive</h3>
        <p>
          Compared to monoculture, intercropping typically requires more manual labor for planting, maintenance, and especially harvesting. Mechanization is more difficult with multiple crops at different heights and maturities.
        </p>

        <h3>Harvesting Complexity</h3>
        <p>
          Different crops mature at different times, requiring multiple harvests or careful timing. Equipment designed for single-crop harvesting may not work well. This can increase labor costs and logistical challenges.
        </p>

        <h3>Market Constraints</h3>
        <p>
          Not all markets support diversified crop production. If you're producing smaller quantities of multiple crops rather than large volumes of one, finding buyers may be more difficult. Processing and storage requirements differ by crop.
        </p>

        <h2>Making the Decision</h2>
        <p>
          Intercropping tends to make more sense when:
        </p>
        <ul>
          <li>Land is limited or expensive relative to labor</li>
          <li>You're targeting markets that value diversity or specific combinations</li>
          <li>Pest or disease pressure is high and chemical inputs are costly or undesirable</li>
          <li>Soil health improvement is a priority</li>
          <li>You have (or can develop) the knowledge to manage complex systems</li>
          <li>Risk reduction is more important than maximizing single-crop yield</li>
        </ul>
        <p>
          Monoculture may be more appropriate when:
        </p>
        <ul>
          <li>Labor is expensive relative to land</li>
          <li>Mechanization is essential for your scale</li>
          <li>Markets demand large, consistent volumes of single crops</li>
          <li>You lack the time or resources to develop intercropping expertise</li>
        </ul>

        <h2>The Stack 4 Approach</h2>
        <p>
          Stack 4 is about implementing sustainable practices that deliver measurable returns. Intercropping can be one of those practices—but only if you:
        </p>
        <ul>
          <li>Choose combinations proven to work in your conditions</li>
          <li>Start small enough to learn without catastrophic risk</li>
          <li>Measure results using metrics like Land Equivalent Ratio</li>
          <li>Compare actual performance to monoculture alternatives</li>
          <li>Adjust based on data rather than assumptions</li>
        </ul>
        <p>
          Many of intercropping's potential negatives can be overcome with education, planning, and measurement. The key is honest assessment of whether the benefits outweigh the costs for your specific situation.
        </p>
      </article>

      {/* Bottom CTA - Stack 4 */}
      <div className="mt-12 p-8 bg-[#3B7D6E] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to evaluate sustainable practices for your operation?</h3>
        <p className="text-white/80 mb-4">
          Intercropping is one of many Stack 4 options. The right practices depend on your specific situation, goals, and constraints.
        </p>
        <p className="text-white/80 mb-6">
          Stack 4 focuses on sustainable practices that generate measurable returns. The framework helps you evaluate options systematically—choosing practices that fit your operation and measuring whether they deliver expected benefits.
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
          <Link href="/articles/intercropping-practices" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3B7D6E] transition-colors">
            <span className="font-medium text-gray-900">Intercropping Practices →</span>
            <span className="block text-sm text-gray-600">Detailed approaches including push-pull methods</span>
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
