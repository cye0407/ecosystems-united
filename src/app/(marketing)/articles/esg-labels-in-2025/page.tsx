import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "ESG Labels in 2025: Understanding the Certification Landscape",
  description: "ESG labels go beyond environmental certification to cover social and governance factors. Here's what matters for agricultural operations navigating this landscape.",
  keywords: ["ecolabels", "certification", "sustainability standards", "greenwashing", "esg", "labels", "2025", "agriculture", "sustainability"],
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
          ESG Labels in 2025: Understanding the Certification Landscape
        </h1>
        <p className="text-xl text-gray-600">
          ESG labels cover environmental, social, and governance factors—broader than traditional ecolabels. Understanding this landscape helps you navigate increasingly complex buyer requirements.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          With growing sustainability expectations from buyers, investors, and regulators, ESG labels have become crucial tools for identifying products and companies aligned with environmental, social, and governance standards.
        </p>
        <p>
          Unlike traditional ecolabels that focus mainly on environmental impact, ESG labels cover a broader spectrum: protecting the environment, supporting ethical labor practices, and maintaining transparent governance.
        </p>

        <h2>What ESG Labels Cover</h2>
        <p>
          ESG labels are certifications indicating that a product, service, or company meets specific standards across three dimensions:
        </p>
        <ul>
          <li><strong>Environmental:</strong> Carbon emissions, waste reduction, resource conservation, biodiversity protection</li>
          <li><strong>Social:</strong> Fair wages, safe working conditions, human rights, community impact</li>
          <li><strong>Governance:</strong> Transparency, anti-corruption, responsible business practices, ethical leadership</li>
        </ul>
        <p>
          This broader scope means ESG certifications often require more comprehensive documentation than single-focus ecolabels.
        </p>

        <h2>Environmental ESG Labels</h2>
        <p>
          These labels help identify sustainable and eco-friendly products:
        </p>
        <ul>
          <li><strong>EU Ecolabel:</strong> Recognizes products with low environmental impact across their lifecycle</li>
          <li><strong>Energy Star:</strong> Certifies energy-efficient appliances, electronics, and buildings</li>
          <li><strong>FSC (Forest Stewardship Council):</strong> Ensures wood and paper products come from sustainably managed forests</li>
          <li><strong>Cradle to Cradle Certified:</strong> Evaluates product sustainability, recyclability, and material safety</li>
          <li><strong>Rainforest Alliance:</strong> Supports responsible agriculture and biodiversity conservation</li>
        </ul>

        <h2>Social Responsibility Labels</h2>
        <p>
          These labels indicate fair labor practices, ethical sourcing, and community impact:
        </p>
        <ul>
          <li><strong>Fair Trade Certified:</strong> Ensures fair wages and ethical treatment for farmers and workers</li>
          <li><strong>SA8000:</strong> Verifies strong labor rights and ethical working conditions</li>
          <li><strong>B Corp Certification:</strong> Recognizes companies meeting high social and environmental standards</li>
          <li><strong>GOTS (Global Organic Textile Standard):</strong> Guarantees organic and ethical textile production</li>
        </ul>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Governance and Transparency Labels</h2>
        <p>
          These certifications help identify companies with transparent leadership and ethical business practices:
        </p>
        <ul>
          <li><strong>ISO 26000:</strong> International guidance for corporate social responsibility</li>
          <li><strong>GRI (Global Reporting Initiative):</strong> Encourages transparency in sustainability reporting</li>
          <li><strong>CDP (Carbon Disclosure Project):</strong> Tracks corporate climate action and sustainability efforts</li>
          <li><strong>Ethical Trading Initiative:</strong> Promotes ethical supply chains and fair business practices</li>
        </ul>

        <h2>Comprehensive ESG Certifications</h2>
        <p>
          Some certifications evaluate companies across all three ESG pillars:
        </p>
        <ul>
          <li><strong>B Corp Certification:</strong> Covers environmental impact, worker rights, governance, and transparency</li>
          <li><strong>GRI Standards:</strong> Comprehensive framework for ESG disclosure and reporting</li>
          <li><strong>CDP:</strong> Scores companies on climate change impact, water security, and supply chain sustainability</li>
        </ul>
        <p>
          These comprehensive certifications are particularly relevant for operations selling into corporate supply chains with sophisticated ESG requirements.
        </p>

        <h2>ESG vs. Ecolabels: The Key Difference</h2>
        <p>
          Traditional ecolabels focus primarily on environmental impact. ESG labels expand this to include social factors (how you treat workers, communities, and supply chain partners) and governance factors (how your organization is run).
        </p>
        <p>
          For agricultural operations, this broader scope means ESG certification may require documenting:
        </p>
        <ul>
          <li>Labor practices and working conditions</li>
          <li>Community relationships and impact</li>
          <li>Supply chain ethics and transparency</li>
          <li>Organizational governance and decision-making</li>
        </ul>
        <p>
          The data requirements expand significantly beyond environmental metrics alone.
        </p>

        <h2>Spotting ESG Greenwashing</h2>
        <p>
          With ESG label proliferation, misleading claims have increased. Watch for:
        </p>
        <ul>
          <li>Vague terms without certification backing</li>
          <li>Self-created "certifications" with no independent verification</li>
          <li>Emphasis on one ESG dimension while ignoring others</li>
          <li>Claims without transparent methodology</li>
        </ul>
        <p>
          Legitimate ESG labels come from recognized bodies with publicly available standards and verification processes.
        </p>

        <h2>Implications for Your Operation</h2>
        <p>
          ESG requirements are expanding in corporate supply chains. Understanding this landscape helps you:
        </p>
        <ul>
          <li>Anticipate what buyers will ask for beyond environmental metrics</li>
          <li>Build documentation systems that cover E, S, and G dimensions</li>
          <li>Choose certifications that align with your market channels</li>
          <li>Prepare for CSRD and other regulatory frameworks that use ESG logic</li>
        </ul>
        <p>
          This is Stack 1 territory: knowing the external landscape so you can build the right measurement foundation.
        </p>
      </article>

      {/* Bottom CTA - Stack 1 */}
      <div className="mt-12 p-8 bg-[#3D2E7C] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to build your measurement foundation?</h3>
        <p className="text-white/80 mb-4">
          Understanding ESG certification requirements is part of Stack 1 in the Five Stacks Framework—knowing what the external landscape expects so you can build systems to meet it.
        </p>
        <p className="text-white/80 mb-6">
          Stack 1 focuses on building defensible baseline data for core sustainability metrics. As ESG requirements expand, having solid measurement systems positions you to meet evolving buyer and regulatory expectations.
        </p>
        <Link href="/framework/stack-1-metrics" className="inline-block bg-white text-[#3D2E7C] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          Get Started with Stack 1 →
        </Link>
      </div>
    </div>
  );
}
