import type { Metadata } from "next";
import {
  Robot,
  ChartBar,
  BookOpen,
} from "@phosphor-icons/react/dist/ssr";
import PageCTA from "@/components/marketing/PageCTA";
import WaitlistForm from "@/components/marketing/WaitlistForm";

export const metadata: Metadata = {
  title: "For Agricultural Advisors",
  description:
    "Run ESG and GlobalG.A.P. questionnaire responses for your farm clients from tracked data, not from scratch. Buy credits, run responses, charge what you want.",
};

export default function ForAdvisorsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Hero */}
      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Your clients&apos; ESG and certification questionnaires, handled.
        </h1>
        <p className="text-xl text-gray-600">
          Big buyers are pushing Scope 3 disclosures down the supply chain, and
          your farm clients are caught in the middle. Questionnaires land on
          their desk and they call you. Our response engine generates defensible
          answers from tracked operational data. 200+ templates across ESG and
          GlobalG.A.P. frameworks. You buy credits, run responses for your
          clients, and charge what you want.
        </p>
      </header>

      {/* What exists today */}
      <section className="mb-16">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-8">
          What You Get Today
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border-2 border-[#3D2E7C] bg-white flex flex-col">
            <Robot
              size={28}
              weight="duotone"
              className="text-[#3D2E7C] mb-3"
            />
            <h3 className="font-semibold text-gray-900 mb-2">
              Questionnaire Response Engine
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Upload an ESG questionnaire (EcoVadis, CDP, CSRD, GRI) or a
              GlobalG.A.P. IFA checklist. The engine matches each question to
              your client&apos;s tracked data and generates audit-ready answers.
            </p>
            <p className="text-sm text-gray-600">
              200+ answer templates. Rules-based, so every answer is traceable
              and auditable. No black-box AI.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200 bg-white flex flex-col">
            <ChartBar
              size={28}
              weight="duotone"
              className="text-primary mb-3"
            />
            <h3 className="font-semibold text-gray-900 mb-2">
              Free Tracker for Every Client
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              8 operational domains (materials, packaging, energy,
              infrastructure, transport, workforce, outputs, context) plus
              ag-specific modules for land use, fertiliser, livestock, and
              crops.
            </p>
            <p className="text-sm text-gray-600">
              Structured around records your clients already have: bills,
              invoices, manifests. Guided prompts, no blank spreadsheets. They
              build their own baseline, you stop chasing them for it.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200 bg-white flex flex-col">
            <BookOpen
              size={28}
              weight="duotone"
              className="text-gray-700 mb-3"
            />
            <h3 className="font-semibold text-gray-900 mb-2">
              Methodology + Education
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              The Five Stacks Framework gives you a structured progression path
              per client, from baseline visibility through operational
              efficiency to competitive positioning.
            </p>
            <p className="text-sm text-gray-600">
              107+ articles across 12 topic guides. A free book. Client
              education material you don&apos;t have to write.
            </p>
          </div>
        </div>
      </section>

      {/* The shift */}
      <section className="mb-16">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          The Shift
        </h2>
        <div className="prose prose-gray max-w-none">
          <p>
            Right now, a good chunk of your billable time goes to grunt work:
            chasing data from clients, organising it into something usable,
            filling out questionnaires line by line. That work is necessary but
            it&apos;s not where you add value.
          </p>
          <p>
            The tracker handles data collection. The response engine handles
            questionnaires. What&apos;s left is the work your clients actually
            need an advisor for: interpreting the data, building a strategy,
            deciding where to invest.
          </p>
          <p>
            <strong>
              You don&apos;t serve fewer clients. You serve more, because the
              per-client overhead drops.
            </strong>
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="mb-16">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-8">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-dark to-primary flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-white">1</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Client Tracks Their Data
            </h3>
            <p className="text-sm text-gray-600">
              Your client signs up for the free tracker and enters operational
              data from records they already keep: energy bills, material
              invoices, waste manifests, crop and livestock logs. Guided
              prompts, not blank spreadsheets.
            </p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-white">2</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Questionnaire Lands, You Upload It
            </h3>
            <p className="text-sm text-gray-600">
              Buyer sends an EcoVadis questionnaire or an auditor needs
              GlobalG.A.P. responses. You upload the file in Excel, CSV, PDF,
              or Word. The engine matches each question to the client&apos;s
              tracked data.
            </p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-white">3</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Review, Deliver, Bill
            </h3>
            <p className="text-sm text-gray-600">
              You review the generated responses, adjust where needed, and
              deliver to your client. The engine did the heavy lifting. You
              bill your advisory rate, not hours of copy-paste.
            </p>
          </div>
        </div>
      </section>

      {/* The economics */}
      <section className="mb-16">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-8">
          The Economics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-gray-200 bg-gray-50 flex flex-col h-full">
            <div className="text-sm font-semibold text-gray-900 mb-2">
              Tracker
            </div>
            <p className="text-sm text-gray-600">
              <strong className="text-gray-900">Free.</strong> For you and
              every client. No per-seat fees, no volume limit, no time limit.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200 bg-gray-50 flex flex-col h-full">
            <div className="text-sm font-semibold text-gray-900 mb-2">
              Responses
            </div>
            <p className="text-sm text-gray-600">
              Standard rate is &euro;39 first questionnaire, &euro;19 each
              additional. Bulk advisor pricing in development. Early adopters
              help shape it.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200 bg-gray-50 flex flex-col h-full">
            <div className="text-sm font-semibold text-gray-900 mb-2">
              Your margin
            </div>
            <p className="text-sm text-gray-600">
              You set your own price to clients. The response engine is your
              back-office. Your client sees your deliverable, not our
              interface.
            </p>
          </div>
        </div>
      </section>

      {/* What's coming */}
      <section className="mb-16">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          On the Roadmap
        </h2>
        <p className="text-gray-600 mb-4">
          Multi-client dashboard (see all your clients&apos; progress in one
          place), advisor referral tracking, white-label assessments, and an
          advisor directory. Early adopters shape the priorities.
        </p>
        <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
          <p className="text-sm font-semibold text-gray-900 mb-2">
            Join the advisor program
          </p>
          <p className="text-sm text-gray-600 mb-3">
            Get early access to bulk pricing and help shape what we build next.
          </p>
          <WaitlistForm
            feature="advisor-program"
            variant="compact"
            buttonLabel="Join Waitlist"
          />
        </div>
      </section>

      {/* CTA */}
      <PageCTA
        heading="Let's talk"
        description="If you're managing farm clients and spending hours on questionnaires, we should have a conversation. 15 minutes. We'll walk you through the engine and talk pricing."
        primaryButton={{
          label: "Get in Touch",
          href: "mailto:contact@ecosystemsunited.com?subject=Advisor%20Program",
        }}
        secondaryButton={{
          label: "Try the Response Engine",
          href: "/see-it-in-action",
        }}
      />
    </div>
  );
}
