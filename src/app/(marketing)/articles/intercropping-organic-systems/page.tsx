import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "Intercropping in Organic Systems: Why Multi-Crop Approaches Fit Organic Principles",
  description: "Intercropping aligns naturally with organic agriculture's principles of ecology, health, fairness, and care. Here's how they work together.",
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
          Intercropping in Organic Systems: Why Multi-Crop Approaches Fit Organic Principles
        </h1>
        <p className="text-xl text-gray-600">
          Intercropping and organic agriculture share a natural alignment. Multi-crop systems can help meet organic requirements while improving productivity.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          Organic agriculture rests on four core principles established by IFOAM (International Federation of Organic Agriculture Movements):
        </p>
        <ul>
          <li><strong>Ecology:</strong> Supporting ecological systems and cycles</li>
          <li><strong>Health:</strong> Sustaining the well-being of flora and fauna</li>
          <li><strong>Fairness:</strong> Providing common and just environment and life opportunities</li>
          <li><strong>Care:</strong> Managing natural resources responsibly for current and future generations</li>
        </ul>
        <p>
          Intercropping directly supports each of these principles—which is why multi-crop systems have historically been central to organic and sustainable farming approaches.
        </p>

        <h2>How Intercropping Supports Organic Principles</h2>

        <h3>Supporting Biodiversity</h3>
        <p>
          Intercropping inherently incorporates multiple species into a single system. This biodiversity provides two key benefits:
        </p>
        <ul>
          <li><strong>Pest limitation:</strong> Diverse plantings prevent any single pest variety from aggregating by limiting their food source, reducing risk of excessive crop loss</li>
          <li><strong>Beneficial species:</strong> More pollinators and predatory insects are present due to diverse habitats that support their populations</li>
        </ul>
        <p>
          Similar benefits appear in weed management—diverse systems typically show reduced total weed biomass compared to monocultures.
        </p>

        <h3>Nutrient Cycling</h3>
        <p>
          Intercropping supports closed-system production—keeping nutrients cycling within the system rather than requiring external inputs. Nitrogen-fixing legumes used as component crops benefit from their symbiotic relationship with Rhizobia bacteria.
        </p>
        <p>
          These legume-based systems organically increase soil nitrogen content, which encourages mycorrhizal fungus development. This improved fungal network can enhance uptake of phosphorus, copper, zinc, and molybdenum.
        </p>
        <p>
          <strong>Caution:</strong> Legume fatigue may occur if soil becomes overly infested with pathogens from over-cultivation. Rotation and diversity remain important even within intercropped systems.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Circumventing Synthetic Input Restrictions</h2>
        <p>
          Organic certification restricts synthetic fertilizers, herbicides, and pesticides that are commonplace in conventional agriculture. Intercropping helps circumvent these restrictions by:
        </p>
        <ul>
          <li>Reducing pest pressure through diversity (less need for pesticides)</li>
          <li>Suppressing weeds through ground cover and competition (less need for herbicides)</li>
          <li>Building soil fertility through legumes and varied root systems (less need for synthetic fertilizers)</li>
        </ul>
        <p>
          In this sense, intercropping—while rooted in historical agricultural approaches—is being adapted to modern circumstances that include rising demand for organic food, increasing environmental pressures, and growing consumer awareness of production practices.
        </p>

        <h2>Challenging the Productivity Myth</h2>
        <p>
          A common argument against organic production is that it cannot match conventional yields. Intercropping helps counter this argument.
        </p>
        <p>
          When Land Equivalent Ratios exceed 1.0, intercropped systems demonstrate that diverse production can outperform sole cropping—particularly when accounting for total system output rather than single-crop yield.
        </p>
        <p>
          This creates potential for organic production to compete more effectively with conventional agriculture, expanding market access through improved economic viability.
        </p>

        <h2>The Stack 4 Connection</h2>
        <p>
          For operations pursuing or maintaining organic certification (a Stack 1 activity), intercropping provides practical tools to meet organic requirements while potentially improving productivity and profitability.
        </p>
        <p>
          The approach connects multiple stacks:
        </p>
        <ul>
          <li><strong>Stack 1:</strong> Supports organic certification requirements</li>
          <li><strong>Stack 2:</strong> Can improve input efficiency by reducing need for external inputs</li>
          <li><strong>Stack 3:</strong> May create circular value through nitrogen fixation and waste reduction</li>
          <li><strong>Stack 4:</strong> Represents a sustainable practice with measurable outcomes</li>
        </ul>
        <p>
          As conventional agriculture becomes increasingly cost-inefficient—both economically and environmentally—intercropping in organic systems offers a pathway to more resilient, sustainable production.
        </p>
      </article>

      {/* Bottom CTA - Stack 4 */}
      <div className="mt-12 p-8 bg-[#3B7D6E] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to implement sustainable practices?</h3>
        <p className="text-white/80 mb-4">
          Intercropping in organic systems demonstrates how Stack 4 practices can support Stack 1 certification while improving operational performance.
        </p>
        <p className="text-white/80 mb-6">
          The Five Stacks Framework helps you see how different sustainability activities connect and reinforce each other—building systems that are both certified and genuinely sustainable.
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
          <Link href="/articles/measuring-intercropping-effectiveness" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3B7D6E] transition-colors">
            <span className="font-medium text-gray-900">Measuring Intercropping Effectiveness →</span>
            <span className="block text-sm text-gray-600">Metrics to evaluate whether your system is working</span>
          </Link>
          <Link href="/articles/what-are-ecolabels" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3B7D6E] transition-colors">
            <span className="font-medium text-gray-900">What Are Ecolabels? →</span>
            <span className="block text-sm text-gray-600">Understanding organic and other certifications</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
