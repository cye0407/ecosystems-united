import Link from "next/link";
import type { Metadata } from "next";
import PageCTA from "@/components/marketing/PageCTA";
import WaitlistForm from "@/components/marketing/WaitlistForm";

export const metadata: Metadata = {
  title: "For Advisors",
  description:
    "Roll out a free sustainability tracker across your entire client base. Standardized 8-domain data collection, CSV exports, and a structured methodology your clients can follow independently.",
};

export default function ForAdvisorsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Hero */}
      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          For Agricultural Advisors and Consultants
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Stop manually cleaning client data. Give them our tracker, get clean
          CSVs back, and spend your billable hours on strategy instead of data
          entry. Free for you and every client.
        </p>
      </header>

      {/* The Advisor Problem */}
      <section className="mb-16 max-w-3xl">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          The Problem You&apos;re Solving
        </h2>
        <div className="prose prose-gray max-w-none">
          <p>
            Every client tracks sustainability data differently&mdash;or not at
            all. You spend hours per engagement just getting to a common
            baseline. When buyer questionnaires arrive, clients call you in a
            panic because nothing is organised.
          </p>
          <p>
            Existing tools charge per seat. Recommending them to 40 clients
            means 40 licence fees&mdash;and that&apos;s before your clients have
            entered a single data point.
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="mb-16">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          What You Get
        </h2>
        <p className="text-2xl font-bold text-gray-900 mb-8">
          One toolkit, many farms
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-gray-200 bg-white">
            <h3 className="font-semibold text-gray-900 mb-2">
              Free Tracker for Every Client
            </h3>
            <p className="text-sm text-gray-600">
              No per-seat fees. Recommend it to every client. They sign up,
              enter their own data across 8 operational domains, and build their
              own baseline.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200 bg-white">
            <h3 className="font-semibold text-gray-900 mb-2">
              Standardised Data Structure
            </h3>
            <p className="text-sm text-gray-600">
              Every client uses the same 8-domain framework: materials,
              packaging, energy, infrastructure, transport, workforce, outputs,
              context. Comparable across operations.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200 bg-white">
            <h3 className="font-semibold text-gray-900 mb-2">
              CSV Exports You Can Work With
            </h3>
            <p className="text-sm text-gray-600">
              Clients export their data to CSV. You pull it into your own tools,
              spreadsheets, or reporting systems. No API integration needed,
              no proprietary formats.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200 bg-white">
            <h3 className="font-semibold text-gray-900 mb-2">
              Structured Methodology
            </h3>
            <p className="text-sm text-gray-600">
              The Five Stacks Framework gives you a progression path for each
              client. Not just data collection&mdash;a roadmap from baseline to
              operational advantage.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-16">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          How It Works
        </h2>
        <p className="text-2xl font-bold text-gray-900 mb-10">
          Three steps to a productive engagement
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-dark to-primary flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-white">1</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Recommend the Tracker
            </h3>
            <p className="text-sm text-gray-600">
              Send your clients to Ecosystems United. They sign up, install
              the tracker, and start entering data. Takes 15 minutes to set up
              the first domain.
            </p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-white">2</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Clients Build Their Baseline
            </h3>
            <p className="text-sm text-gray-600">
              They enter operational data domain by domain. Energy bills, waste
              manifests, material invoices&mdash;the records they already have.
              You stop chasing spreadsheets.
            </p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-white">3</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              You Add the Strategy
            </h3>
            <p className="text-sm text-gray-600">
              Once clients have 3 months of data, you have something to work
              with. Real numbers, real trends, real gaps. Your advisory work
              starts from a solid foundation.
            </p>
          </div>
        </div>
      </section>

      {/* What's Coming */}
      <section className="mb-16 max-w-3xl">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          What&apos;s Coming
        </h2>
        <p className="text-gray-600 mb-6">
          We&apos;re building the advisor channel now. Early adopters shape the
          roadmap.
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
            <span className="text-xs font-medium text-primary bg-primary-100 px-2.5 py-0.5 rounded-full mt-0.5 shrink-0">
              Coming Soon
            </span>
            <div>
              <p className="font-semibold text-gray-900 text-sm">
                Multi-client dashboard
              </p>
              <p className="text-sm text-gray-600">
                View progress across all your clients from one place. See who
                has entered data, who hasn&apos;t, and where the gaps are.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
            <span className="text-xs font-medium text-primary bg-primary-100 px-2.5 py-0.5 rounded-full mt-0.5 shrink-0">
              Coming Soon
            </span>
            <div>
              <p className="font-semibold text-gray-900 text-sm">
                Advisor referral tracking
              </p>
              <p className="text-sm text-gray-600">
                Know when a client you referred completes their baseline. Track
                adoption across your practice.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
            <span className="text-xs font-medium text-primary bg-primary-100 px-2.5 py-0.5 rounded-full mt-0.5 shrink-0">
              Coming Soon
            </span>
            <div>
              <p className="font-semibold text-gray-900 text-sm">
                White-label assessments
              </p>
              <p className="text-sm text-gray-600">
                Run Five Stacks assessments under your own practice branding.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
            <span className="text-xs font-medium text-primary bg-primary-100 px-2.5 py-0.5 rounded-full mt-0.5 shrink-0">
              Coming Soon
            </span>
            <div>
              <p className="font-semibold text-gray-900 text-sm">
                Advisor directory
              </p>
              <p className="text-sm text-gray-600">
                Listed on ecosystemsunited.com as a Five Stacks advisor.
                Clients find you through the platform.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-gray-50 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-primary bg-primary-100 px-2.5 py-0.5 rounded-full shrink-0">
                Coming Soon
              </span>
              <p className="text-sm text-gray-600">
                <strong className="text-gray-900">Mobile app</strong> &mdash;
                your clients enter data on the go, wherever they are.
              </p>
            </div>
            <WaitlistForm feature="mobile-app-advisors" variant="compact" buttonLabel="Join Waitlist" />
          </div>
        </div>

        <div className="mt-6 p-4 rounded-lg border border-primary/20 bg-primary/5">
          <p className="text-sm font-semibold text-gray-900 mb-2">
            Interested in the advisor program?
          </p>
          <p className="text-sm text-gray-600 mb-3">
            Early adopters shape the roadmap. Leave your email and we'll keep you posted.
          </p>
          <WaitlistForm feature="advisor-program" variant="compact" buttonLabel="Join Waitlist" />
        </div>
      </section>

      {/* The Economics */}
      <section className="mb-16 max-w-3xl">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          The Economics
        </h2>
        <div className="prose prose-gray max-w-none">
          <p>
            <strong>The tracker is free.</strong> For you and for your clients.
            No per-seat fees, no volume pricing, no hidden costs.
          </p>
          <p>
            As clients build their baselines, the data reveals where they&apos;re
            bleeding margin &mdash; energy waste, input inefficiency, transport
            costs. Advanced analysis and response tools are on the roadmap,
            shaped by what advisors like you actually need.
          </p>
          <p>
            You get a tool that makes every client engagement more productive.
            We get distribution through your practice.
          </p>
        </div>
      </section>

      {/* CTA */}
      <PageCTA
        heading="Try it yourself first"
        description="Take the same assessment your clients would take. 5 minutes, no signup. See what the data structure looks like before you recommend it."
        primaryButton={{ label: "Try the Stack 1 Assessment", href: "/tools/metrics-assessment" }}
        secondaryButton={{ label: "See the Tracker in Action", href: "/see-it-in-action" }}
        footnote={<>Want to discuss the advisor program?{" "}<a href="mailto:contact@ecosystemsunited.com" className="text-white/80 hover:text-white underline">contact@ecosystemsunited.com</a></>}
      />
    </div>
  );
}
