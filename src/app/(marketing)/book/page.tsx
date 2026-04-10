import Link from "next/link";
import Image from "next/image";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "The Modern Sustainability Playbook | Free Download",
  description:
    "Download The Modern Sustainability Playbook for free. A practical guide for SMEs who want sustainability that pays for itself.",
  keywords: ["modern sustainability", "sustainability playbook", "free book", "SME sustainability", "five stacks", "operational excellence"],
};

export default function BookPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
        {/* Book Cover */}
        <div className="flex justify-center">
          <Image
            src="/book-cover.png"
            alt="The Modern Sustainability Playbook"
            width={400}
            height={560}
            className="rounded-lg shadow-xl"
            priority
          />
        </div>

        {/* Book Info */}
        <div>
          <span className="text-sm font-medium text-green-600 mb-3 block">Free Download</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Modern Sustainability Playbook
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Sustainability has a reputation problem. This book fixes it.
          </p>
          <p className="text-gray-600 mb-4">
            Written for SME owners and operations leaders who are tired of
            sustainability being framed as a cost center, a compliance burden,
            or someone else&apos;s problem. The Modern Sustainability Playbook
            reframes sustainability as an operational strategy that pays for
            itself.
          </p>
          <p className="text-gray-600 mb-8">
            Built on the Five Stacks Framework, this book walks you through
            the progression from visibility to efficiency to margin recovery
            to resilience. No jargon. No virtue signaling. Just a practical
            path from where you are to where the money is.
          </p>

          <a
            href="https://catyeldi.lemonsqueezy.com/checkout/buy/58bd0c97-22e1-4335-bd3f-2e854fba86e1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Get the Book (Free)
          </a>

          <p className="text-sm text-gray-400 mt-3">
            Enter your email and the PDF is delivered instantly.
          </p>
        </div>
      </div>

      {/* What's Inside */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What&apos;s Inside</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border border-gray-200 rounded-xl">
            <h3 className="font-semibold text-gray-900 mb-2">Sustainability Has a Reputation Problem</h3>
            <p className="text-sm text-gray-600">
              Why the current model of sustainability is failing SMEs, and what
              to do instead. The shift from compliance-first to operations-first.
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-xl">
            <h3 className="font-semibold text-gray-900 mb-2">The Five Stacks Framework</h3>
            <p className="text-sm text-gray-600">
              A sequential capability model: Visibility, Efficiency, Circularity,
              Resilience, Regeneration. Each stack builds on the last.
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-xl">
            <h3 className="font-semibold text-gray-900 mb-2">The Economics of Each Stack</h3>
            <p className="text-sm text-gray-600">
              How each level of sustainability capability creates measurable
              business value. Real numbers, not aspirations.
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-xl">
            <h3 className="font-semibold text-gray-900 mb-2">Where to Start</h3>
            <p className="text-sm text-gray-600">
              Practical first steps for operations under 250 people. What to
              track, what to ignore, and how to build momentum.
            </p>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Who This Book Is For</h2>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start gap-3">
            <span className="text-green-600 mt-1">&#10003;</span>
            SME owners and operators who want sustainability that pays for itself
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 mt-1">&#10003;</span>
            Operations leaders tasked with &ldquo;doing something about sustainability&rdquo; without a dedicated team
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 mt-1">&#10003;</span>
            Sustainability practitioners tired of the current model and looking for a better frame
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 mt-1">&#10003;</span>
            Agricultural businesses navigating CSRD, buyer questionnaires, and certification requirements
          </li>
        </ul>
      </section>

      {/* Second CTA */}
      <div className="p-8 bg-[#3D2E7C] rounded-lg text-white text-center">
        <h3 className="text-2xl font-bold mb-3">Read the Book. Then Build the Baseline.</h3>
        <p className="text-white/80 mb-6 max-w-xl mx-auto">
          The book gives you the framework. The platform gives you the tools
          to implement it. Start tracking your baseline data for free.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://catyeldi.lemonsqueezy.com/checkout/buy/58bd0c97-22e1-4335-bd3f-2e854fba86e1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#3D2E7C] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            Get the Book (Free)
          </a>
          <Link
            href="/signup"
            className="inline-block bg-white/10 border border-white/30 text-white px-6 py-3 rounded font-semibold hover:bg-white/20 transition-colors"
          >
            Start Tracking Free
          </Link>
        </div>
      </div>

      <div className="mt-12">
        <NewsletterSignup />
      </div>
    </div>
  );
}
