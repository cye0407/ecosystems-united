import Link from "next/link";
import type { Metadata } from "next";
import {
  ChartBar,
  Robot,
  Certificate,
  Users,
  FileText,
  Check,
  Chalkboard,
  BookOpen,
} from "@phosphor-icons/react/dist/ssr";
import PageCTA from "@/components/marketing/PageCTA";
import WaitlistForm from "@/components/marketing/WaitlistForm";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Free baseline tracker, rules-based questionnaire response engine (ESG + GlobalG.A.P.), ecolabel workshop, and certification tools for agricultural SMEs.",
};

const trackerFeatures = [
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
    title: "EU Organic Pack",
    feature: "eu-organic-pack",
    desc: "Auto-generate your EU Organic certification application from tracked data. Same engine as ESG and GlobalG.A.P.",
  },
  {
    icon: Certificate,
    title: "B Corp Pack",
    feature: "bcorp-pack",
    desc: "B Impact Assessment responses, matched to your operational data. For values-driven SMEs beyond agriculture.",
  },
  {
    icon: FileText,
    title: "RFP Response Pack",
    feature: "rfp-pack",
    desc: "Beyond ESG — use your operational data to answer any structured questionnaire. Tenders, procurement forms, grant applications.",
  },
  {
    icon: Users,
    title: "Advisor License",
    feature: "advisor-license",
    desc: "White-label the tracker and response tools for your clients. Multi-client dashboard, bulk responses, referral tracking.",
  },
];

export default function ProductsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Products</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Tools, response packs, and workshops for agricultural SMEs who need
          their operational data structured, defensible, and ready when someone
          asks.
        </p>
      </div>

      {/* ==================== TOOLS ==================== */}
      <section className="mb-16">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-6">
          Tools
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Free Tracker */}
          <div className="border-2 border-primary rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <ChartBar size={28} weight="duotone" className="text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wide text-white bg-primary px-2 py-1 rounded">
                Free
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              Baseline Tracker
            </h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">€0</span>
              <span className="text-gray-500 ml-2">forever</span>
            </div>
            <p className="text-gray-600 mb-6">
              Collect, structure, and export your operational data across 8
              domains. The foundation everything else builds on.
            </p>
            <ul className="space-y-3 mb-8">
              {trackerFeatures.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-sm text-gray-700"
                >
                  <Check
                    size={18}
                    weight="bold"
                    className="text-primary mt-0.5 shrink-0"
                  />
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

          {/* The Book */}
          <div className="border border-gray-200 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen size={28} weight="duotone" className="text-gray-700" />
              <span className="text-xs font-semibold uppercase tracking-wide text-white bg-gray-700 px-2 py-1 rounded">
                Free
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              The Modern Sustainability Playbook
            </h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">€0</span>
              <span className="text-gray-500 ml-2">PDF download</span>
            </div>
            <p className="text-gray-600 mb-6">
              Sustainability reframed as operational strategy. The Five Stacks
              Framework explained — from visibility to efficiency to margin
              recovery to resilience. No jargon, no virtue signaling.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-sm text-gray-700">
                <Check size={18} weight="bold" className="text-gray-500 mt-0.5 shrink-0" />
                The Five Stacks Framework explained
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-700">
                <Check size={18} weight="bold" className="text-gray-500 mt-0.5 shrink-0" />
                Economics of each capability level
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-700">
                <Check size={18} weight="bold" className="text-gray-500 mt-0.5 shrink-0" />
                Practical first steps for SMEs under 250 people
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-700">
                <Check size={18} weight="bold" className="text-gray-500 mt-0.5 shrink-0" />
                No signup required
              </li>
            </ul>
            <Link
              href="/book"
              className="block text-center bg-gray-900 text-white px-6 py-3 rounded font-semibold hover:bg-gray-800 transition-colors"
            >
              Download the Book
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== RESPONSE PACKS ==================== */}
      <section className="mb-16">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          Response Packs
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Upload a questionnaire — Excel, CSV, PDF, or Word. The engine matches
          each question to answer templates and fills them with your tracked
          data. Rules-based logic, not guesswork.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* ESG Pack */}
          <div className="rounded-lg p-8 text-white bg-gradient-to-br from-[#3D2E7C] to-[#5B4A9E]">
            <div className="flex items-center gap-3 mb-4">
              <Robot size={28} weight="duotone" className="text-white/90" />
              <span className="text-xs font-semibold uppercase tracking-wide bg-white/20 px-2 py-1 rounded">
                Available now
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-1">
              ESG Response Pack
            </h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">€39</span>
              <span className="text-white/70 ml-2">first questionnaire</span>
              <div className="text-white/60 text-sm mt-1">
                €19 each additional
              </div>
            </div>
            <p className="text-white/80 mb-6">
              EcoVadis, CDP, CSRD, GRI, and general sustainability
              questionnaires. 200+ templates across all 8 ESG domains.
            </p>
            <ul className="space-y-3 mb-8">
              {responseFeatures.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-sm text-white/90"
                >
                  <Check
                    size={18}
                    weight="bold"
                    className="text-white/70 mt-0.5 shrink-0"
                  />
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

          {/* GlobalG.A.P. Pack */}
          <div className="rounded-lg p-8 text-white bg-gradient-to-br from-[#2E5C3D] to-[#4A9E5B]">
            <div className="flex items-center gap-3 mb-4">
              <Certificate size={28} weight="duotone" className="text-white/90" />
              <span className="text-xs font-semibold uppercase tracking-wide bg-white/20 px-2 py-1 rounded">
                Available now
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-1">
              GlobalG.A.P. Response Pack
            </h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">€39</span>
              <span className="text-white/70 ml-2">first questionnaire</span>
              <div className="text-white/60 text-sm mt-1">
                €19 each additional
              </div>
            </div>
            <p className="text-white/80 mb-6">
              Farm assurance certification audits and IFA checklists.
              Auto-generate responses from your tracked farm data — land use,
              crop records, fertiliser applications, livestock.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-sm text-white/90">
                <Check size={18} weight="bold" className="text-white/70 mt-0.5 shrink-0" />
                Upload GlobalG.A.P. IFA checklists
              </li>
              <li className="flex items-start gap-3 text-sm text-white/90">
                <Check size={18} weight="bold" className="text-white/70 mt-0.5 shrink-0" />
                Matched to farm-specific data domains
              </li>
              <li className="flex items-start gap-3 text-sm text-white/90">
                <Check size={18} weight="bold" className="text-white/70 mt-0.5 shrink-0" />
                Audit-ready language, traceable to your records
              </li>
              <li className="flex items-start gap-3 text-sm text-white/90">
                <Check size={18} weight="bold" className="text-white/70 mt-0.5 shrink-0" />
                Same rules-based engine as the ESG pack
              </li>
            </ul>
            <Link
              href="/see-it-in-action"
              className="block text-center bg-white text-[#2E5C3D] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
            >
              See It In Action
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== WORKSHOPS ==================== */}
      <section className="mb-16">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-6">
          Workshops
        </h2>

        <div className="border border-gray-200 rounded-lg p-8">
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Chalkboard size={28} weight="duotone" className="text-[#5B4A9E]" />
                <span className="text-xs font-semibold uppercase tracking-wide text-[#5B4A9E] bg-[#5B4A9E]/10 px-2 py-1 rounded">
                  €29
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Which Ecolabel Is Right For Your Farm?
              </h3>
              <p className="text-gray-600 mb-4">
                90-minute live workshop. Which certifications actually open
                markets, what they cost, how to prepare your data before you
                apply. Includes comparison matrix, roadmap template, and audit
                prep checklist.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check size={16} weight="bold" className="text-[#5B4A9E] shrink-0" />
                  90 minutes, live, small group (max 20)
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check size={16} weight="bold" className="text-[#5B4A9E] shrink-0" />
                  Recording included if you can't make the live session
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check size={16} weight="bold" className="text-[#5B4A9E] shrink-0" />
                  Templates and checklists you keep
                </li>
              </ul>
              <Link
                href="/workshops/ecolabel-certification"
                className="inline-block bg-[#5B4A9E] text-white px-6 py-3 rounded font-semibold hover:bg-[#4A3D8C] transition-colors"
              >
                Learn More & Reserve
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== COMING SOON ==================== */}
      <section className="mb-16">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          Coming soon
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          More response packs and tools on the way. Leave your email to be
          first in line.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
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
              <h4 className="font-semibold text-gray-900 mb-2">
                {item.title}
              </h4>
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
