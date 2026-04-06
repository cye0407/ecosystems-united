import Link from "next/link";
import type { Metadata } from "next";
import {
  ChartBar,
  Robot,
  Certificate,
  Users,
  FileText,
  Check,
} from "@phosphor-icons/react/dist/ssr";
import PageCTA from "@/components/marketing/PageCTA";
import WaitlistForm from "@/components/marketing/WaitlistForm";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Free baseline tracker for agricultural SMEs. Rules-based questionnaire response engine from €39. Certification packs and advisor tools coming soon.",
};

const freeFeatures = [
  "8 operational data domains",
  "Auto-calculated emissions (IPCC Tier 1)",
  "CSV exports",
  "Multi-site dashboard",
  "Stack assessments",
  "No seat limits, no time limit",
];

const responseFeatures = [
  "Upload any buyer questionnaire",
  "200+ answer templates, matched by rules-based engine",
  "Filled with your tracked baseline data",
  "Deterministic by default, AI-ready if you want it",
  "Confidence scoring per answer",
  "Every answer traceable and auditable",
];

const comingSoon = [
  {
    icon: Certificate,
    title: "Certification Packs",
    feature: "certification-packs",
    desc: "GlobalG.A.P., EU Organic, B Corp — same engine, new questionnaires. Auto-generate certification applications from your tracked data.",
  },
  {
    icon: Users,
    title: "Advisor License",
    feature: "advisor-license",
    desc: "White-label the tracker and response tools for your clients. Multi-client dashboard, bulk responses, referral tracking.",
  },
  {
    icon: FileText,
    title: "RFP Response Pack",
    feature: "rfp-pack",
    desc: "Beyond ESG — use your operational data to answer any structured questionnaire. Tenders, procurement forms, grant applications.",
  },
];

export default function PricingPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Simple, transparent pricing
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Track your data for free. Pay only when a questionnaire lands
          in your inbox. Rules-based logic, not guesswork. No subscriptions.
        </p>
      </div>

      {/* Pricing tiers */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Free Tracker */}
        <div className="border-2 border-primary rounded-lg p-8">
          <div className="flex items-center gap-3 mb-4">
            <ChartBar size={28} weight="duotone" className="text-primary" />
            <span className="text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 px-2 py-1 rounded">
              Available now
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            Baseline Tracker
          </h2>
          <div className="mb-6">
            <span className="text-4xl font-bold text-gray-900">€0</span>
            <span className="text-gray-500 ml-2">forever</span>
          </div>
          <p className="text-gray-600 mb-6">
            Collect, structure, and export your operational data across 8
            domains. The foundation everything else builds on.
          </p>
          <ul className="space-y-3 mb-8">
            {freeFeatures.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                <Check size={18} weight="bold" className="text-primary mt-0.5 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <Link
            href="/signup"
            className="block text-center bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-[#3d8f76] transition-colors"
          >
            Start Tracking — Free
          </Link>
        </div>

        {/* Response Generator */}
        <div className="rounded-lg p-8 text-white bg-gradient-to-br from-[#3D2E7C] to-[#5B4A9E]">
          <div className="flex items-center gap-3 mb-4">
            <Robot size={28} weight="duotone" className="text-white/90" />
            <span className="text-xs font-semibold uppercase tracking-wide bg-white/20 px-2 py-1 rounded">
              Available now
            </span>
          </div>
          <h2 className="text-2xl font-bold mb-1">Response Generator</h2>
          <div className="mb-6">
            <span className="text-4xl font-bold">€39</span>
            <span className="text-white/70 ml-2">first questionnaire</span>
            <div className="text-white/60 text-sm mt-1">
              €19 each additional
            </div>
          </div>
          <p className="text-white/80 mb-6">
            Upload a buyer questionnaire — Excel, CSV, PDF, or Word. The engine
            matches each question to 200+ templates and fills them with your
            tracked data. Deterministic by default, AI-ready if you want it.
          </p>
          <ul className="space-y-3 mb-8">
            {responseFeatures.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-white/90">
                <Check size={18} weight="bold" className="text-white/70 mt-0.5 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <Link
            href="/see-it-in-action"
            className="block text-center bg-white text-[#3D2E7C] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            See It In Action
          </Link>
        </div>
      </div>

      {/* Coming Soon */}
      <section className="mb-16">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          Coming soon
        </h2>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Same engine, more questionnaires
        </h3>
        <p className="text-gray-600 mb-8 max-w-2xl">
          The Response Generator works for any structured questionnaire. We're
          building domain packs for certifications, tenders, and channel
          partners.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {comingSoon.map((item) => (
            <div
              key={item.title}
              className="border border-dashed border-gray-300 rounded-lg p-6"
            >
              <item.icon
                size={32}
                weight="duotone"
                className="text-gray-400 mb-4"
              />
              <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
              <WaitlistForm
                feature={item.feature}
                variant="compact"
                buttonLabel="Join Waitlist"
              />
            </div>
          ))}
        </div>
      </section>

      {/* How it connects */}
      <section className="mb-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          How it works together
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-4 text-center">
          <div className="flex-1">
            <div className="text-3xl font-bold text-primary mb-2">1</div>
            <h4 className="font-semibold text-gray-900 mb-1">Track</h4>
            <p className="text-sm text-gray-600">
              Enter your operational data in the free tracker
            </p>
          </div>
          <div className="text-gray-300 text-2xl hidden md:block">→</div>
          <div className="flex-1">
            <div className="text-3xl font-bold text-[#3D2E7C] mb-2">2</div>
            <h4 className="font-semibold text-gray-900 mb-1">Respond</h4>
            <p className="text-sm text-gray-600">
              Upload a questionnaire and get data-backed answers
            </p>
          </div>
          <div className="text-gray-300 text-2xl hidden md:block">→</div>
          <div className="flex-1">
            <div className="text-3xl font-bold text-[#5B4A9E] mb-2">3</div>
            <h4 className="font-semibold text-gray-900 mb-1">Improve</h4>
            <p className="text-sm text-gray-600">
              Each response shows you where your data gaps are
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <PageCTA
        heading="Start with the free tracker"
        description="No credit card. No time limit. Your operational data, structured and exportable from day one."
        primaryButton={{ label: "Launch Tracker", href: "/signup" }}
        secondaryButton={{
          label: "See it in action",
          href: "/see-it-in-action",
        }}
        bgColor="#3D2E7C"
        centered
      />
    </div>
  );
}
