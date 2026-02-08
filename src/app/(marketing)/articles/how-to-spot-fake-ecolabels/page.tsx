import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "How to Spot Fake Ecolabels: Avoiding Greenwashing in Your Supply Chain",
  description: "Not all sustainability claims are legitimate. Learn to identify misleading ecolabels and protect your operation from greenwashing risks.",
  keywords: ["ecolabels", "certification", "sustainability standards", "greenwashing", "spot", "fake", "agriculture", "sustainability"],
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/framework/stack-1-metrics" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Stack 1: Core Metrics
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#3D2E7C] text-white flex items-center justify-center font-bold text-sm">
            1
          </div>
          <span className="text-sm text-gray-500">Stack 1: Core Metrics</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          How to Spot Fake Ecolabels: Avoiding Greenwashing in Your Supply Chain
        </h1>
        <p className="text-xl text-gray-600">
          Not all sustainability claims are what they appear. Recognizing misleading labels protects your operation—and helps you make credible claims of your own.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          Ecolabels are designed to help identify products meeting specific sustainability criteria. But not all ecolabels are created equal—some are misleading, and others are entirely fabricated. Fake ecolabels deceive buyers by mimicking legitimate certifications without meeting real standards.
        </p>
        <p>
          This matters for two reasons: when evaluating suppliers, you need to distinguish genuine credentials from marketing theater. And when making your own claims, you need to understand what separates credible communication from greenwashing liability.
        </p>

        <h2>What Is Greenwashing?</h2>
        <p>
          Greenwashing refers to false or exaggerated environmental claims designed to appear eco-friendly without substantive backing. A brand might add a green leaf to packaging or use phrases like "all-natural" without any verification.
        </p>
        <p>
          These vague claims create the illusion of sustainability without real environmental benefits. For operations in supply chains, accepting greenwashed inputs creates downstream liability—and making greenwashed claims about your own products creates direct risk.
        </p>

        <h2>Five Signs of a Misleading Ecolabel</h2>

        <h3>1. Vague or Generic Terms</h3>
        <p>
          Be cautious of labels using phrases like "Natural," "Eco-Friendly," or "Green" without certification details. These words alone guarantee nothing about actual sustainability performance.
        </p>

        <h3>2. No Third-Party Certification</h3>
        <p>
          Authentic ecolabels are verified by independent organizations. If there's no certification from a recognized body—just the company's own claim—that's a red flag.
        </p>

        <h3>3. Self-Created Logos</h3>
        <p>
          Some companies design their own "certifications" to mislead buyers. If the ecolabel looks unfamiliar, verify it before trusting the claim. Legitimate certifications have publicly available information about their standards and verification processes.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h3>4. No Transparency</h3>
        <p>
          Legitimate ecolabels have publicly accessible standards and verification criteria. Look for a website or database where you can check the ecolabel's legitimacy. If you can't find information about what the label actually certifies, be skeptical.
        </p>

        <h3>5. Claims That Seem Too Good</h3>
        <p>
          Be skeptical of claims like "100% sustainable" or "completely carbon-neutral" without detailed methodology. If a claim seems unrealistic, it probably is. Genuine sustainability improvements are usually incremental and specific, not absolute.
        </p>

        <h2>Common Greenwashing Tactics</h2>
        <ul>
          <li><strong>Unverified "eco" labels:</strong> Green-colored labels with no certification backing</li>
          <li><strong>Self-created seals:</strong> Invented logos designed to look official</li>
          <li><strong>Selective highlighting:</strong> Emphasizing one positive attribute (recycled content) while ignoring negatives (excessive plastic, high emissions)</li>
          <li><strong>Irrelevant claims:</strong> Highlighting something that's legally required anyway, or that applies to all products in the category</li>
          <li><strong>Hidden trade-offs:</strong> Claiming one benefit while creating a larger problem elsewhere</li>
        </ul>

        <h2>How to Verify Legitimate Ecolabels</h2>
        <ul>
          <li><strong>Look for recognized certification bodies:</strong> EU Ecolabel, Fair Trade, FSC, USDA Organic, and similar established programs</li>
          <li><strong>Verify criteria online:</strong> Reputable ecolabels publish their standards and certification processes</li>
          <li><strong>Use verification tools:</strong> Ecolabel Index and similar platforms help check authenticity</li>
          <li><strong>Request documentation:</strong> Legitimate certifications come with audit reports and certificates you can verify</li>
        </ul>

        <h2>Implications for Your Own Claims</h2>
        <p>
          Understanding greenwashing isn't just about evaluating suppliers—it's about making sure your own sustainability communication is credible.
        </p>
        <p>
          If you're making environmental claims about your products or operation:
        </p>
        <ul>
          <li>Be specific about what you're claiming and what evidence backs it</li>
          <li>Use recognized third-party certifications where possible</li>
          <li>Avoid vague terms without clear definitions</li>
          <li>Document your methodology so claims can be verified</li>
          <li>Update claims when circumstances change</li>
        </ul>
        <p>
          Credible sustainability claims require data. This is the Stack 1 foundation—you can't make defensible claims without measurement systems that produce verifiable evidence.
        </p>
      </article>

      {/* Bottom CTA - Stack 1 */}
      <div className="mt-12 p-8 bg-[#3D2E7C] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to build your measurement foundation?</h3>
        <p className="text-white/80 mb-4">
          Understanding greenwashing risks is part of Stack 1 in the Five Stacks Framework—knowing how to evaluate claims and make credible ones of your own.
        </p>
        <p className="text-white/80 mb-6">
          Stack 1 focuses on building defensible baseline data for core sustainability metrics. With solid measurement systems, your claims become verifiable—protecting you from greenwashing accusations and building credibility with buyers who know the difference.
        </p>
        <Link href="/framework/stack-1-metrics" className="inline-block bg-white text-[#3D2E7C] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          Get Started with Stack 1 →
        </Link>
      </div>
    </div>
  );
}
