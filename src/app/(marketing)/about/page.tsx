import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ecosystems United helps agricultural businesses and SMEs turn sustainability compliance into competitive advantage.",
};

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          About Ecosystems United
        </h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            We help agricultural businesses and SMEs turn sustainability
            compliance into competitive advantage.
          </p>

          <h2>The Problem We Solve</h2>
          <p>
            Sustainability reporting is becoming mandatory. CSRD, Scope 3
            requirements, buyer questionnaires—the pressure is real. But most
            tools treat sustainability as a reporting burden, not an operational
            opportunity.
          </p>
          <p>
            The result: companies spend money on compliance that delivers no
            business value. They answer questionnaires reactively. They don&apos;t
            build capability.
          </p>

          <h2>Our Approach</h2>
          <p>
            The Five Stacks Framework turns this around. Instead of starting
            with what you have to report, we start with what would actually make
            your operation more competitive, more resilient, more adaptable.
          </p>
          <p>
            Each stack builds capability that happens to also satisfy compliance
            requirements. Measurement enables efficiency. Efficiency enables
            circular value creation. Circular operations enable resilience.
            Resilience enables regenerative positioning.
          </p>
          <p>
            By the time you&apos;re answering sustainability questionnaires, you&apos;re
            not just reporting what you do—you&apos;re showcasing genuine operational
            advantage.
          </p>

          <h2>Who We Serve</h2>
          <p>
            We focus on mid-market SMEs (50-500 employees) in agriculture, food
            & beverage, and related sectors. Operations large enough to have
            real sustainability exposure, small enough that every improvement
            matters.
          </p>
          <p>
            Our tools are built for operations managers and sustainability
            leads who need to deliver results, not consultants who need
            billable hours.
          </p>

          <h2>What We Believe</h2>
          <ul>
            <li>
              <strong>Sustainability = adaptivity.</strong> Not a target, but
              the capacity to respond appropriately to context.
            </li>
            <li>
              <strong>Data without action is overhead.</strong> Measurement
              should lead to improvement, not just reporting.
            </li>
            <li>
              <strong>Compliance follows capability.</strong> Build real
              operational advantage; compliance becomes a byproduct.
            </li>
            <li>
              <strong>Transparency builds trust.</strong> Every data point
              shows its confidence level. Know what&apos;s solid and what needs
              verification.
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Ready to build capability?
          </h3>
          <p className="text-gray-600 mb-6">
            Start with Stack 1—build your baseline and understand the landscape.
            Everything else follows.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/framework"
              className="inline-block bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-primary-dark transition-colors"
            >
              Explore the Framework
            </Link>
            <Link
              href="/dashboard"
              className="inline-block border border-gray-300 text-gray-700 px-6 py-3 rounded font-semibold hover:bg-gray-50 transition-colors"
            >
              Launch the App
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
