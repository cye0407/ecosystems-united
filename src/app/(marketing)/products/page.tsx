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
  Gauge,
  Calculator,
  ListChecks,
  TreeStructure,
} from "@phosphor-icons/react/dist/ssr";
import PageCTA from "@/components/marketing/PageCTA";
import WaitlistForm from "@/components/marketing/WaitlistForm";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Free baseline tracker, response packs, assessments, workshops, and certification tools for agricultural SMEs.",
};

const trackerFeatures = [
  "8 operational data domains",
  "Auto-calculated emissions (IPCC Tier 1)",
  "CSV exports and multi-site dashboard",
  "No seat limits, no time limit",
];

const responseFeatures = [
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
    desc: "Beyond ESG. Use your operational data to answer any structured questionnaire. Tenders, procurement forms, grant applications.",
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
        <p className="text-xl text-gray-600">
          Build your baseline. Respond to questionnaires. Improve your
          operation. Learn the framework. Everything connects through the same
          operational data.
        </p>
      </div>

      {/* ==================== 1. BUILD ==================== */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-3xl font-bold text-primary">1</div>
          <h2 className="text-2xl font-bold text-gray-900">Build Your Baseline</h2>
        </div>
        <p className="text-gray-600 mb-8">
          Collect and structure the operational data you already have. Energy
          bills, input invoices, water meters, waste records, worker hours.
          This is the foundation everything else builds on.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-6">
          {/* Free Tracker */}
          <div className="border-2 border-primary rounded-lg p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <ChartBar size={28} weight="duotone" className="text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wide text-white bg-primary px-2 py-1 rounded">
                Free
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              Baseline Tracker
            </h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-gray-900">&euro;0</span>
              <span className="text-gray-500 ml-2">forever</span>
            </div>
            <p className="text-gray-600 mb-6">
              Your operational data across 8 domains, structured and exportable
              from day one.
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
              className="block text-center bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-[#3d8f76] transition-colors mt-auto"
            >
              Start Tracking — Free
            </Link>
            <Link
              href="/tracker"
              className="block text-center text-sm text-gray-500 hover:text-primary mt-2 transition-colors"
            >
              Learn more about the tracker →
            </Link>
          </div>

          {/* Supporting items */}
          <div className="flex flex-col gap-4">
            <Link
              href="/book"
              className="p-5 border border-gray-200 rounded-lg hover:border-primary transition-colors group flex items-start gap-4 flex-1"
            >
              <BookOpen size={24} weight="duotone" className="text-primary mt-0.5 shrink-0" />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    The Modern Sustainability Playbook
                  </h4>
                  <span className="text-xs text-green-600 font-medium">Free</span>
                </div>
                <p className="text-sm text-gray-600">
                  Understand why operational data is the foundation. The
                  thinking behind what to track and why it matters.
                </p>
              </div>
            </Link>

            <Link
              href="/tools/soil-health-checklist"
              className="p-5 border border-gray-200 rounded-lg hover:border-primary transition-colors group flex items-start gap-4 flex-1"
            >
              <ListChecks size={24} weight="duotone" className="text-primary mt-0.5 shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors mb-1">
                  Soil Health Checklist
                </h4>
                <p className="text-sm text-gray-600">
                  Practical checklist for assessing and tracking soil health
                  indicators on your operation.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== 2. RESPOND ==================== */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-3xl font-bold text-[#3D2E7C]">2</div>
          <h2 className="text-2xl font-bold text-gray-900">Respond to Questionnaires</h2>
        </div>
        <p className="text-gray-600 mb-8">
          Upload a questionnaire (Excel, CSV, PDF, or Word). The engine matches
          each question to answer templates and fills them with your tracked
          data. Rules-based logic, not guesswork.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* ESG Pack */}
          <div className="rounded-lg p-8 text-white bg-gradient-to-br from-[#3D2E7C] to-[#5B4A9E] flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <Robot size={28} weight="duotone" className="text-white/90" />
              <span className="text-xs font-semibold uppercase tracking-wide bg-white/20 px-2 py-1 rounded">
                Available now
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-1">ESG Response Pack</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">&euro;39</span>
              <span className="text-white/70 ml-2">first questionnaire</span>
              <div className="text-white/60 text-sm mt-1">
                &euro;19 each additional
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
              className="block text-center bg-white text-[#3D2E7C] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors mt-auto"
            >
              See It In Action
            </Link>
          </div>

          {/* GlobalG.A.P. Pack */}
          <div className="rounded-lg p-8 text-white bg-gradient-to-br from-[#2E5C3D] to-[#4A9E5B] flex flex-col">
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
              <span className="text-4xl font-bold">&euro;39</span>
              <span className="text-white/70 ml-2">first questionnaire</span>
              <div className="text-white/60 text-sm mt-1">
                &euro;19 each additional
              </div>
            </div>
            <p className="text-white/80 mb-6">
              Farm assurance certification audits and IFA checklists.
              Auto-generate responses from your tracked farm data: land use,
              crop records, fertilizer applications, livestock.
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
              className="block text-center bg-white text-[#2E5C3D] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors mt-auto"
            >
              See It In Action
            </Link>
          </div>
        </div>

        {/* Workshop */}
        <div className="mt-8 border border-gray-200 rounded-lg p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Chalkboard size={24} weight="duotone" className="text-[#5B4A9E]" />
                <h3 className="text-lg font-bold text-gray-900">
                  Which Ecolabel Is Right For Your Farm?
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wide text-[#5B4A9E] bg-[#5B4A9E]/10 px-2 py-1 rounded">
                  &euro;35
                </span>
              </div>
              <p className="text-gray-600">
                90-minute live workshop. Which certifications actually open
                markets, what they cost, and how to prepare your data before you
                apply. Small group (max 20), recording included, templates you keep.
              </p>
            </div>
            <Link
              href="/workshops/ecolabel-certification"
              className="inline-block bg-[#5B4A9E] text-white px-6 py-3 rounded font-semibold hover:bg-[#4A3D8C] transition-colors shrink-0 text-center"
            >
              Learn More &amp; Reserve
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== 3. IMPROVE ==================== */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-3xl font-bold text-[#5B4A9E]">3</div>
          <h2 className="text-2xl font-bold text-gray-900">Improve Your Operation</h2>
        </div>
        <p className="text-gray-600 mb-8">
          Every response shows you where your data gaps are. Assess where your
          operation sits, find the leaks, and prioritize what to fix first.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Stack Assessment — hero card */}
          <div className="border-2 border-[#5B4A9E] rounded-lg p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <TreeStructure size={28} weight="duotone" className="text-[#5B4A9E]" />
              <span className="text-xs font-semibold uppercase tracking-wide text-white bg-[#5B4A9E] px-2 py-1 rounded">
                Free
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              Stack Assessment
            </h3>
            <div className="mb-4">
              <span className="text-sm text-gray-500">5 minutes, no signup required</span>
            </div>
            <p className="text-gray-600 mb-6">
              Evaluate where your operation sits across all five capability
              levels: baseline, efficiency, circularity, resilience, and
              regeneration. Get a score and a prioritized action list.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-sm text-gray-700">
                <Check size={18} weight="bold" className="text-[#5B4A9E] mt-0.5 shrink-0" />
                Score across all 5 stacks
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-700">
                <Check size={18} weight="bold" className="text-[#5B4A9E] mt-0.5 shrink-0" />
                See exactly where the gaps are
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-700">
                <Check size={18} weight="bold" className="text-[#5B4A9E] mt-0.5 shrink-0" />
                Prioritized next steps
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-700">
                <Check size={18} weight="bold" className="text-[#5B4A9E] mt-0.5 shrink-0" />
                No account needed
              </li>
            </ul>
            <Link
              href="/tools/stack-assessment"
              className="block text-center bg-[#5B4A9E] text-white px-6 py-3 rounded font-semibold hover:bg-[#4A3D8C] transition-colors mt-auto"
            >
              Take the Assessment
            </Link>
          </div>

          {/* Supporting tools */}
          <div className="flex flex-col gap-4">
            <Link
              href="/tools/diagnostic-quiz"
              className="p-5 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors group flex items-start gap-4 flex-1"
            >
              <Gauge size={24} weight="duotone" className="text-[#5B4A9E] mt-0.5 shrink-0" />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-gray-900 group-hover:text-[#5B4A9E] transition-colors">
                    Diagnostic Quiz
                  </h4>
                  <span className="text-xs text-gray-400">2 min</span>
                </div>
                <p className="text-sm text-gray-600">
                  Not sure where to start? 7 questions to find out which part of
                  your operation needs attention first.
                </p>
              </div>
            </Link>

            <Link
              href="/tools/energy-calculator"
              className="p-5 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors group flex items-start gap-4 flex-1"
            >
              <Calculator size={24} weight="duotone" className="text-[#5B4A9E] mt-0.5 shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 group-hover:text-[#5B4A9E] transition-colors mb-1">
                  Energy ROI Calculator
                </h4>
                <p className="text-sm text-gray-600">
                  Input your energy consumption and see what efficiency
                  improvements would save in euros and CO&#8322;.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== RESOURCES ==================== */}
      <section className="mb-20">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-6">
          Resources
        </h2>

        <div className="border border-gray-200 rounded-lg p-8 flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <FileText size={24} weight="duotone" className="text-gray-700" />
              <h3 className="text-lg font-bold text-gray-900">112+ Guides &amp; Articles</h3>
              <span className="text-xs font-semibold uppercase tracking-wide text-white bg-gray-700 px-2 py-1 rounded">
                Free
              </span>
            </div>
            <p className="text-gray-600">
              Practical guides on ESG compliance, ecolabels, GlobalG.A.P.
              certification, regenerative agriculture, soil management, water,
              biodiversity, and more. Written for operators, not consultants.
            </p>
          </div>
          <Link
            href="/articles"
            className="inline-block bg-gray-900 text-white px-6 py-3 rounded font-semibold hover:bg-gray-800 transition-colors shrink-0 text-center"
          >
            Browse Guides
          </Link>
        </div>
      </section>

      {/* ==================== COMING SOON ==================== */}
      <section className="mb-20">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
          Coming Soon
        </h2>
        <p className="text-gray-600 mb-8">
          More response packs and tools on the way. Leave your email to be
          first in line.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {comingSoon.map((item) => (
            <div
              key={item.title}
              className="border border-dashed border-gray-300 rounded-lg p-6 flex flex-col"
            >
              <item.icon
                size={32}
                weight="duotone"
                className="text-gray-400 mb-4"
              />
              <h4 className="font-semibold text-gray-900 mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 mb-4 flex-1">{item.desc}</p>
              <WaitlistForm
                feature={item.feature}
                variant="compact"
                buttonLabel="Join Waitlist"
              />
            </div>
          ))}
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
