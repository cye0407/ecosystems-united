import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "The Different Types of Ecolabels: Type I, II, and III Explained",
  description: "Understanding the three types of ecolabels—from third-party certified to self-declared claims. Know what level of verification backs the labels you see.",
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
          The Different Types of Ecolabels: Type I, II, and III Explained
        </h1>
        <p className="text-xl text-gray-600">
          Not all ecolabels carry the same weight. Understanding the three types helps you evaluate what level of verification actually backs the claims you see.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          With growing concern about production systems' environmental impact, many efforts aim to shift both producer and consumer behavior. Ecolabelling is one approach that works on two fronts: informing consumers about environmental impact and encouraging producers to improve sustainability.
        </p>
        <p>
          At present, three different types of ecolabels exist: Type I, Type II, and Type III. Each offers different levels of verification, transparency, and credibility. Knowing the differences helps you assess which certifications actually mean something.
        </p>

        <h2>Type I Ecolabels: The Third-Party Standard</h2>
        <p>
          Type I is the "classic" ecolabel—it evaluates environmental quality compared with other products of comparable function. These are what most people think of when they hear "certification."
        </p>
        <p>
          <strong>Type I ecolabels are:</strong>
        </p>
        <ul>
          <li>Designed to be consumer-friendly and informative</li>
          <li>Based on fulfillment of defined criteria</li>
          <li>Awarded by a certified third-party program</li>
          <li>Often government-supported</li>
          <li>Criteria defined by independent experts with input from interest groups</li>
          <li>Evaluation requirements publicly available</li>
          <li>Certification granted for specific time periods, requiring recertification</li>
        </ul>
        <p>
          Type I is considered the gold standard for consumer education because an independent certifying body does the verification. Common examples include EU Ecolabel, Blauer Engel, Marine Stewardship Council, Forest Stewardship Council, and Fair Trade.
        </p>
        <p>
          For agricultural operations seeking certification, Type I labels represent the most credible market signal—but also require the most rigorous documentation and compliance.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Type II Ecolabels: Self-Declared Claims</h2>
        <p>
          Type II ecolabels are claims made by manufacturers, importers, retailers, or distributors about environmental characteristics—think "dolphin safe" or "recyclable packaging."
        </p>
        <p>
          <strong>Type II ecolabels are:</strong>
        </p>
        <ul>
          <li>Self-declared by the company making the claim</li>
          <li>Focused on a particular quality (e.g., compostable, recycled content)</li>
          <li>Not independently certified</li>
          <li>Should be verifiable, but verification isn't required</li>
          <li>Can raise validity questions when unverifiable</li>
        </ul>
        <p>
          While Type II labels can highlight valuable product attributes, their self-declared nature means they should be approached with scrutiny. Without independent verification, these claims risk falling into greenwashing territory.
        </p>
        <p>
          For operations making their own sustainability claims, the key is ensuring claims are specific, verifiable, and backed by data you can produce if challenged.
        </p>

        <h2>Type III Ecolabels: Life Cycle Declarations</h2>
        <p>
          Type III ecolabels are voluntary declarations covering a product or service's entire life cycle sustainability. They work differently from Type I and II.
        </p>
        <p>
          <strong>Type III ecolabels:</strong>
        </p>
        <ul>
          <li>May or may not be third-party certified</li>
          <li>Are often Business-to-Business (B2B) in nature</li>
          <li>Don't certify any specific quality</li>
          <li>Facilitate independent conclusions about sustainability</li>
          <li>Focus on standardized data reporting rather than pass/fail criteria</li>
        </ul>
        <p>
          While less familiar to general consumers, Type III ecolabels play a crucial role in B2B sustainability communication. Environmental Product Declarations (EPDs) are the most common example—they provide standardized data that allows buyers to compare products and make informed decisions.
        </p>
        <p>
          For operations in supply chains with sophisticated sustainability requirements, Type III declarations are increasingly relevant. They're what corporate buyers use to calculate their Scope 3 emissions.
        </p>

        <h2>Why the Type Matters</h2>
        <p>
          Understanding ecolabel types helps you make strategic decisions:
        </p>
        <ul>
          <li><strong>If you're pursuing certification:</strong> Type I labels offer the strongest market signal but require the most investment. Match your certification strategy to your market channels.</li>
          <li><strong>If you're making claims:</strong> Self-declared Type II claims need solid documentation behind them. Unverifiable claims create liability.</li>
          <li><strong>If you're selling B2B:</strong> Type III declarations may be what your buyers actually need for their reporting requirements.</li>
          <li><strong>If you're evaluating suppliers:</strong> Ask what type of certification backs their claims. The answer reveals the verification level.</li>
        </ul>

        <h2>The Measurement Connection</h2>
        <p>
          All three ecolabel types require data—they just use it differently. Type I requires proving you meet defined criteria. Type II requires backing up your specific claims. Type III requires comprehensive life cycle data.
        </p>
        <p>
          This is why understanding ecolabels is part of Stack 1. Before pursuing any certification path, you need baseline measurement systems that can produce the documentation certification requires. The label type determines what kind of data you need.
        </p>
      </article>

      {/* Bottom CTA - Stack 1 */}
      <div className="mt-12 p-8 bg-[#3D2E7C] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to build your measurement foundation?</h3>
        <p className="text-white/80 mb-4">
          Understanding ecolabel types is part of Stack 1 in the Five Stacks Framework—knowing both your internal data and the external certification landscape you're operating in.
        </p>
        <p className="text-white/80 mb-6">
          Stack 1 focuses on building defensible baseline data for core sustainability metrics. This is the foundation that makes any certification path possible and buyer questionnaires answerable. Without measurement systems in place, certification attempts waste time and money.
        </p>
        <Link href="/framework/stack-1-metrics" className="inline-block bg-white text-[#3D2E7C] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          Get Started with Stack 1 →
        </Link>
      </div>
    </div>
  );
}
