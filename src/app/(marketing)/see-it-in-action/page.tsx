import Link from "next/link";
import type { Metadata } from "next";
import PageCTA from "@/components/marketing/PageCTA";
import {
  Cube,
  Package,
  Lightning,
  Buildings,
  Truck,
  UsersThree,
  Recycle,
  GlobeHemisphereWest,
  TreeStructure,
  FileText,
  CheckCircle,
  Shield,
  Database,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title:
    "Sustainability Data Tracker for Suppliers — See It In Action | Ecosystems United",
  description:
    "Free ESG data tracker for suppliers. Enter operational data across 8 domains, build a defensible sustainability baseline, and auto-generate answers to buyer questionnaires like EcoVadis and CDP.",
};

// Sample domain data matching mockData.ts (GreenTech Manufacturing GmbH)
const domains = [
  {
    name: "Materials",
    icon: Cube,
    description: "Raw materials & components",
    gradient: "from-stack-1 to-stack-2",
    metric: "840k",
    unit: "kg",
    entries: 24,
  },
  {
    name: "Packaging",
    icon: Package,
    description: "Primary & secondary packaging",
    gradient: "from-stack-2 to-stack-3",
    metric: "12.4k",
    unit: "kg",
    entries: 6,
  },
  {
    name: "Energy",
    icon: Lightning,
    description: "Electricity, fuels & water",
    gradient: "from-stack-3 to-stack-4",
    metric: "498k",
    unit: "kWh",
    entries: 36,
  },
  {
    name: "Infrastructure",
    icon: Buildings,
    description: "Sites, buildings & assets",
    gradient: "from-stack-4 to-stack-5",
    metric: "2",
    unit: "sites",
    entries: 4,
  },
  {
    name: "Transport",
    icon: Truck,
    description: "Inbound & outbound logistics",
    gradient: "from-stack-1 to-stack-3",
    metric: "180k",
    unit: "tkm",
    entries: 24,
  },
  {
    name: "Workforce",
    icon: UsersThree,
    description: "Employees, H&S & training",
    gradient: "from-stack-2 to-stack-4",
    metric: "125",
    unit: "FTE",
    entries: 18,
  },
  {
    name: "Outputs",
    icon: Recycle,
    description: "Waste, products & emissions",
    gradient: "from-stack-3 to-stack-5",
    metric: "34k",
    unit: "kg",
    entries: 12,
  },
  {
    name: "Context",
    icon: GlobeHemisphereWest,
    description: "External & financial context",
    gradient: "from-primary-dark to-primary",
    metric: "100",
    unit: "%",
    entries: 2,
  },
];

const sampleResponses = [
  {
    question: "What is your total annual energy consumption?",
    answer:
      "Our total electricity consumption for 2024 was 498,200 kWh across two sites (Berlin HQ and Warsaw production facility). Sources include grid electricity (62%), on-site solar generation (23%), and power purchase agreements (15%).",
    confidence: "high" as const,
  },
  {
    question: "Describe your waste management practices and recycling rates.",
    answer:
      "We generated 34,000 kg of waste in 2024. Metal scrap (recyclable) accounts for 68% and is sold to certified recyclers. General waste (22%) goes to licensed disposal. Hazardous waste (used cutting oils, 10%) is handled by an approved contractor with full chain-of-custody documentation.",
    confidence: "medium" as const,
  },
  {
    question: "What percentage of your raw materials come from recycled sources?",
    answer:
      "70% of our steel inputs and 50% of our aluminum inputs are from recycled sources, verified through supplier certificates of origin. This represents a weighted average of 63% recycled content across primary material inputs by mass.",
    confidence: "high" as const,
  },
];

const confidenceStyles = {
  high: "bg-green-100 text-green-800",
  medium: "bg-amber-100 text-amber-800",
};

export default function SeeItInActionPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Hero */}
      <header className="mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          From Operational Data to Questionnaire Answers
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Enter the data you already have — energy bills, waste manifests,
          material invoices. Build a defensible baseline. Then let the tool draft
          your buyer questionnaire responses automatically.
        </p>
        <Link
          href="/signup"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
        >
          Start Your Baseline →
        </Link>
        <p className="text-sm text-gray-500 mt-3">
          Free plan includes all 8 domains, CSV exports, and multi-site support.
        </p>
      </header>

      {/* Section 1: Dashboard Preview */}
      <section className="mb-20">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          Your Dashboard
        </h2>
        <p className="text-2xl font-bold text-gray-900 mb-8">
          All 8 domains at a glance
        </p>

        {/* Progress Banner (static mockup) */}
        <div className="relative mb-6 p-6 rounded-2xl bg-gradient-to-r from-stack-1 via-stack-3 to-primary overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-1/4 w-24 h-24 bg-white/5 rounded-full translate-y-1/2" />

          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-white/20 items-center justify-center">
                <TreeStructure className="w-8 h-8 text-white" weight="duotone" />
              </div>
              <div className="text-white">
                <div className="text-sm font-medium text-white/80 mb-1">
                  Metrics — Baseline Completeness
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">8</span>
                  <span className="text-xl text-white/70">/ 8 domains</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-center text-white">
                <div className="text-2xl font-bold">126</div>
                <div className="text-xs text-white/70">Records</div>
              </div>
              <div className="text-center text-white">
                <div className="text-2xl font-bold">2</div>
                <div className="text-xs text-white/70">Sites</div>
              </div>
              <div className="hidden md:block w-32">
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="text-xs text-white/70 mt-1 text-right">
                  100%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Domain Cards Grid (static) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {domains.map((domain) => {
            const Icon = domain.icon;
            return (
              <div
                key={domain.name}
                className="relative p-5 rounded-2xl bg-white border border-gray-200 overflow-hidden"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${domain.gradient}`}
                />

                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br shadow-sm ${domain.gradient}`}
                  >
                    <Icon className="w-6 h-6 text-white" weight="duotone" />
                  </div>
                </div>

                <h3 className="font-semibold text-gray-900 mb-1">
                  {domain.name}
                </h3>
                <p className="text-xs text-gray-500 mb-4">
                  {domain.description}
                </p>

                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">
                      {domain.metric}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">
                      {domain.unit}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-primary bg-primary-100 px-2 py-1 rounded-full">
                    {domain.entries} entries
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-gray-500 mt-4">
          Sample data from a mid-size manufacturing company — 12 months, 2
          sites, 126 records.
        </p>
      </section>

      {/* Section 2: How It Works */}
      <section className="mb-20">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          How It Works
        </h2>
        <p className="text-2xl font-bold text-gray-900 mb-10">
          Three steps to a defensible baseline
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-dark to-primary flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-white">1</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Enter Your Data
            </h3>
            <p className="text-sm text-gray-600">
              Domain by domain, month by month. Energy bills, waste manifests,
              material invoices — the records you already have.
            </p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-white">2</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Build Your Baseline
            </h3>
            <p className="text-sm text-gray-600">
              12 months across 8 domains gives you a defensible operational
              baseline. The dashboard tracks your completeness in real time.
            </p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-white">3</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Answer Any Questionnaire
            </h3>
            <p className="text-sm text-gray-600">
              Upload a buyer questionnaire (CSV or Excel). The response
              generator drafts answers directly from your data — with confidence
              scores.
            </p>
          </div>
        </div>

      </section>

      <hr className="border-gray-200 mb-20" />

      {/* Section 3: Response Generator Preview */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-3">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide">
            Response Generator
          </h2>
          <span className="text-xs font-medium text-stack-3 bg-stack-5/30 px-2.5 py-0.5 rounded-full">
            Paid feature
          </span>
        </div>
        <p className="text-2xl font-bold text-gray-900 mb-2">
          Upload a questionnaire. Get answers backed by your data.
        </p>
        <p className="text-gray-600 mb-8">
          Each answer is drafted from your actual operational records — with a
          confidence score so you know what needs review. The response generator
          is available with a paid plan.
        </p>

        {/* Mockup upload bar */}
        <div className="border border-gray-200 rounded-2xl overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-dark to-primary flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" weight="duotone" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">
                  EcoVadis-2024-questionnaire.csv
                </div>
                <div className="text-xs text-gray-500">
                  47 questions parsed — 3 shown below
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-green-700 bg-green-100 px-2.5 py-1 rounded-full">
                38 high confidence
              </span>
              <span className="text-xs font-medium text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full">
                7 medium
              </span>
              <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
                2 needs data
              </span>
            </div>
          </div>

          {/* Sample Q&A rows */}
          <div className="divide-y divide-gray-100">
            {sampleResponses.map((item, i) => (
              <div key={i} className="px-6 py-5">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <p className="font-medium text-gray-900 text-sm">
                    Q{i + 1}: {item.question}
                  </p>
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${confidenceStyles[item.confidence]}`}
                  >
                    {item.confidence === "high" ? "High" : "Medium"} confidence
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 px-6 py-3 border-t border-gray-200 text-center">
            <span className="text-xs text-gray-500">
              + 44 more answers generated from your operational data
            </span>
          </div>
        </div>
      </section>

      {/* Section 4: Why It Works */}
      <section className="mb-20">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          Why It Works
        </h2>
        <p className="text-2xl font-bold text-gray-900 mb-10">
          Infrastructure, not narratives
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-gray-200 bg-white">
            <Database className="w-8 h-8 text-stack-1 mb-4" weight="duotone" />
            <h3 className="font-semibold text-gray-900 mb-2">
              Enter Once, Use Everywhere
            </h3>
            <p className="text-sm text-gray-600">
              Your operational data feeds every questionnaire, every export,
              every report. No re-entering the same numbers into different
              portals.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200 bg-white">
            <CheckCircle className="w-8 h-8 text-stack-2 mb-4" weight="duotone" />
            <h3 className="font-semibold text-gray-900 mb-2">
              Proof, Not Promises
            </h3>
            <p className="text-sm text-gray-600">
              Every answer the generator produces cites a specific data point
              from your baseline. Confidence scores tell you where your evidence
              is strong and where you need more data.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200 bg-white">
            <Shield className="w-8 h-8 text-stack-3 mb-4" weight="duotone" />
            <h3 className="font-semibold text-gray-900 mb-2">
              Your Data Stays Yours
            </h3>
            <p className="text-sm text-gray-600">
              All data is stored locally in your browser. Export to CSV anytime.
              No vendor lock-in, no third-party data sharing, full portability.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <PageCTA
        heading="Ready to build your baseline?"
        description="Start entering your operational data today. It takes 15 minutes to set up your first domain."
        primaryButton={{ label: "Start Your Baseline →", href: "/signup" }}
        secondaryButton={{ label: "Take the Assessment First →", href: "/tools/stack-assessment" }}
      />

      <p className="mt-8 text-sm text-gray-500 text-center">
        Last updated: February 2026
      </p>
    </div>
  );
}
