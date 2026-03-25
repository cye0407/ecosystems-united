import Link from "next/link";
import type { Metadata } from "next";
import PageCTA from "@/components/marketing/PageCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ecosystems United builds free sustainability tools for agricultural SMEs. Web-based tracker with CSV exports, no platform lock-in, no monthly seat costs.",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        About Ecosystems United
      </h1>

      <p className="text-xl text-gray-600 mb-16">
        We build tools that help agricultural businesses understand their
        operations, improve them, and prove it when someone asks.
      </p>

      {/* The Problem */}
      <section className="mb-14">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          The Problem
        </h2>
        <div className="prose prose-gray max-w-none">
          <p>
            Your operational data lives in invoices, spreadsheets, and
            people&apos;s heads. When a buyer sends a sustainability
            questionnaire, your team scrambles. When you want to know if a
            change actually improved anything, there&apos;s no baseline to
            compare against.
          </p>
          <p>
            The tools that exist to fix this are either expensive SaaS
            platforms with per-seat pricing or expensive consultants who take
            the data with them. Neither works for a 12-person farm or an
            85-person co-op.
          </p>
        </div>
      </section>

      {/* How We Work */}
      <section className="mb-14">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          How We Work
        </h2>
        <p className="text-2xl font-bold text-gray-900 mb-3">
          We don&apos;t sell expensive SaaS seats.
        </p>
        <p className="text-gray-600 mb-8">
          We provide the frameworks and tools your team needs to own their own
          data. Whether you need a quick assessment or a full Five Stacks
          implementation, we focus on transferring capability to your staff.
        </p>
      </section>

      {/* Three-item grid (wider) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        <Link href="/signup" className="p-6 rounded-2xl border border-gray-200 bg-white text-center hover:border-primary/40 transition-colors block">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-dark to-primary flex items-center justify-center mx-auto mb-4">
            <span className="text-xl font-bold text-white">1</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">
            Free Web Tracker
          </h3>
          <p className="text-sm text-gray-600">
            Enter operational data across 8 domains&mdash;materials, energy,
            waste, water, transport, and more. Browser-based, works on desktop
            and mobile. Your data stays in your browser.
          </p>
          <p className="mt-3 text-sm font-semibold text-primary">
            Get started free &rarr;
          </p>
        </Link>

        <Link href="/see-it-in-action" className="p-6 rounded-2xl border border-gray-200 bg-white text-center hover:border-primary/40 transition-colors block">
          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
            <span className="text-xl font-bold text-white">2</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">
            CSV &amp; Excel Exports
          </h3>
          <p className="text-sm text-gray-600">
            Export your data anytime. Use it in your own spreadsheets, hand it
            to your accountant, send it to a buyer. No lock-in, no proprietary
            formats.
          </p>
          <p className="mt-3 text-sm font-semibold text-primary">
            See how it works &rarr;
          </p>
        </Link>

        <Link href="/see-it-in-action" className="p-6 rounded-2xl border border-gray-200 bg-white text-center hover:border-primary/40 transition-colors block">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mx-auto mb-4">
            <span className="text-xl font-bold text-white">3</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">
            Response Generator
          </h3>
          <p className="text-sm text-gray-600">
            Turn 40 hours of manual reporting into a 15-minute review. Upload
            your buyer&apos;s questionnaire and get drafted answers backed by
            your verified data&mdash;with confidence scores.
          </p>
          <p className="mt-3">
            <span className="text-xs font-medium text-white bg-primary px-2.5 py-1 rounded-full">
              Live — €39
            </span>
            <span className="text-sm font-semibold text-primary ml-2">
              See it in action &rarr;
            </span>
          </p>
        </Link>
      </div>

      {/* Coming Soon - Mobile App */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-lg bg-gray-50 mb-14">
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-primary bg-primary-100 px-2.5 py-0.5 rounded-full shrink-0">
            Coming Soon
          </span>
          <p className="text-sm text-gray-600">
            <strong className="text-gray-900">Mobile app</strong> &mdash; enter
            data wherever you are, in whatever format works for your operation.
          </p>
        </div>
        <a
          href="mailto:contact@ecosystemsunited.com?subject=Mobile%20app%20waitlist"
          className="inline-block bg-primary text-white px-4 py-2 rounded text-sm font-semibold hover:bg-primary-dark transition-colors shrink-0"
        >
          Join the Waitlist
        </a>
      </div>

      {/* Who This Is For */}
        <section className="mb-14">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
            Who This Is For
          </h2>
          <div className="prose prose-gray max-w-none">
            <ul>
              <li>
                Your operational data lives in filing cabinets, spreadsheets,
                and your head&mdash;and it&apos;s not scaling.
              </li>
              <li>
                A buyer just sent you a sustainability questionnaire and you
                have no system for answering it.
              </li>
              <li>
                You&apos;re a consultant or advisor with multiple clients who
                each need a baseline.
              </li>
            </ul>
            <p>
              We focus on mid-market agricultural SMEs (50&ndash;500
              employees)&mdash;operations large enough to have real
              sustainability exposure, small enough that every improvement hits
              the bottom line.
            </p>
            <p>
              If you advise multiple operations,{" "}
              <Link
                href="/for-advisors"
                className="text-primary hover:text-primary-dark"
              >
                see what we&apos;re building for advisors
              </Link>
              .
            </p>
          </div>
        </section>

        {/* What We Believe */}
        <section className="mb-14">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
            What We Believe
          </h2>
          <div className="prose prose-gray max-w-none">
            <ul>
              <li>
                <strong>Sustainability = staying in business.</strong> The
                capacity to keep operating as markets shift, climate changes,
                and buyer demands evolve. Not a certification. Not a marketing
                claim.
              </li>
              <li>
                <strong>Data without action is overhead.</strong> If a metric
                doesn&apos;t lead to a decision, it&apos;s paperwork. Every tool
                we build connects measurement to improvement.
              </li>
              <li>
                <strong>Compliance follows capability.</strong> Build real
                operational advantage first. Compliance reporting becomes a
                byproduct, not a project.
              </li>
              <li>
                <strong>Your data is yours.</strong> Export it, move it, share
                it. We earn your continued use by being useful, not by holding
                your data hostage.
              </li>
            </ul>
          </div>
        </section>

        {/* Founded by Cat Yeldi */}
        <section className="mb-14">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
            Founded By
          </h2>
          <div className="border-l-4 border-[#3D2E7C] pl-6">
            <p className="text-lg font-semibold text-gray-900 mb-3">
              Cat Yeldi
            </p>
            <div className="prose prose-gray max-w-none">
              <p>
                With 10 years navigating EU regulatory frameworks&mdash;from
                bioeconomy policy to EU Ecolabel certification&mdash;Cat
                specialises in translating complex compliance requirements into
                simple, clickable workflows. She built Ecosystems United
                because she saw too many operations teams defeated by paperwork
                that she knew could be automated.
              </p>
              <p>
                The tools that exist are too expensive, too complex, or too
                locked-in. So she built something that works the way operations
                teams actually work&mdash;and keeps the data where it belongs:
                with them.
              </p>
              <p className="text-sm text-gray-500">
                <a
                  href="mailto:contact@ecosystemsunited.com"
                  className="text-primary hover:text-primary-dark"
                >
                  contact@ecosystemsunited.com
                </a>
              </p>
            </div>
          </div>
        </section>

      {/* CTA */}
      <PageCTA
        heading="See where you stand"
        description="The Stack 1 Assessment takes 5 minutes and shows you where your operational data stands across 8 domains. Free, no signup required."
        primaryButton={{ label: "Get the Stack 1 Assessment", href: "/tools/metrics-assessment" }}
        secondaryButton={{ label: "See the Tracker in Action", href: "/see-it-in-action" }}
      />
    </div>
  );
}
