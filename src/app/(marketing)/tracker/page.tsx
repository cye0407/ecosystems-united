import Link from "next/link";
import type { Metadata } from "next";
import PageCTA from "@/components/marketing/PageCTA";
import ComingSoonCard from "@/components/marketing/ComingSoonCard";
import {
  Lightning,
  Cube,
  Package,
  Truck,
  UsersThree,
  Recycle,
  Buildings,
  GlobeHemisphereWest,
  Plant,
  Drop,
  Leaf,
  ChartLineUp,
  FileArrowDown,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title:
    "Free Baseline Tracker — Sustainability Data for Farms & Agricultural SMEs | Ecosystems United",
  description:
    "Track your operational data across 8 domains for free. Auto-calculated emissions, per-hectare metrics, CSV exports, and multi-site support. Built for farms and agricultural businesses.",
  keywords: [
    "sustainability tracker",
    "farm data tracking",
    "agricultural emissions",
    "ESG for farms",
    "baseline tracker",
    "free sustainability tool",
  ],
};

const domains = [
  {
    name: "Energy & Utilities",
    description:
      "Electricity, fuels, water. Auto-calculated Scope 2 emissions with source breakdown.",
    icon: Lightning,
    gradient: "from-stack-1 to-stack-2",
  },
  {
    name: "Materials & Inputs",
    description:
      "Raw materials, fertilizers, seed, feed. Track virgin vs recycled content and supplier sourcing.",
    icon: Cube,
    gradient: "from-stack-2 to-stack-3",
  },
  {
    name: "Packaging",
    description:
      "Primary, secondary, tertiary packaging. Recyclability and recycled content tracking.",
    icon: Package,
    gradient: "from-stack-3 to-stack-4",
  },
  {
    name: "Outputs & Waste",
    description:
      "Crop yields, product volumes, waste by category. Auto-calculated disposal emissions and diversion rate.",
    icon: Recycle,
    gradient: "from-stack-4 to-stack-5",
  },
  {
    name: "Transport & Logistics",
    description:
      "Inbound and outbound movements. Scope 3 emissions calculated from distance, weight, and mode.",
    icon: Truck,
    gradient: "from-stack-1 to-stack-3",
  },
  {
    name: "Workforce",
    description:
      "Headcount, seasonal labour, health & safety incidents, training hours. TRIR auto-calculated.",
    icon: UsersThree,
    gradient: "from-stack-2 to-stack-4",
  },
  {
    name: "Infrastructure & Land",
    description:
      "Sites, buildings, equipment, and land use by type. Asset inventory with energy estimates.",
    icon: Buildings,
    gradient: "from-stack-3 to-stack-5",
  },
  {
    name: "Context",
    description:
      "Markets, customer base, regulatory position, certifications, and financial context.",
    icon: GlobeHemisphereWest,
    gradient: "from-primary-dark to-primary",
  },
];

const calculations = [
  {
    name: "Scope 1 & 2 Emissions",
    description:
      "Auto-calculated from fuel consumption and grid electricity using country-specific emission factors.",
    icon: ChartLineUp,
  },
  {
    name: "Transport Emissions",
    description:
      "Scope 3 transport emissions from tonne-km by mode — road, rail, sea, air.",
    icon: Truck,
  },
  {
    name: "Waste Emissions",
    description:
      "Disposal route emissions for landfill, incineration, recycling, composting. Diversion rate tracked.",
    icon: Recycle,
  },
  {
    name: "Workforce KPIs",
    description:
      "TRIR and LTIR auto-calculated from incident counts and hours worked. Training per FTE.",
    icon: UsersThree,
  },
];

export default function TrackerPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Hero */}
      <header className="mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Track Your Baseline. For Free.
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Enter the operational data you already have &mdash; energy bills, input
          invoices, waste records, workforce numbers. Build a defensible baseline
          across 8 domains. No credit card, no trial period.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/signup"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            Start Tracking &mdash; Free Forever
          </Link>
          <a
            href="#domains"
            className="inline-block border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            See What&apos;s Included
          </a>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          All 8 domains. CSV exports. Multi-site support. Free forever.
        </p>
      </header>

      {/* Who It's For */}
      <section className="mb-20">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          Who This Is For
        </h2>
        <p className="text-2xl font-bold text-gray-900 mb-8">
          Farmers and agricultural SMEs who need their data organised
        </p>

        <div className="max-w-3xl space-y-6 text-gray-600 leading-relaxed">
          <p>
            Your buyers are asking for sustainability data. Maybe it&apos;s a
            Scope 3 request. Maybe it&apos;s an EcoVadis questionnaire. Maybe
            it&apos;s a retailer asking about your energy use, water management,
            or waste practices.
          </p>
          <p>
            You don&apos;t have a sustainability team. The data exists &mdash;
            in invoices, utility bills, HR records, waste manifests &mdash; but
            it&apos;s scattered across files and folders. Every request means
            starting from scratch.
          </p>
          <p className="text-gray-900 font-medium">
            The tracker organises it once. After that, every request draws from
            the same baseline.
          </p>
        </div>
      </section>

      {/* 8 Domains Grid */}
      <section id="domains" className="mb-20">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          8 Operational Domains
        </h2>
        <p className="text-2xl font-bold text-gray-900 mb-10">
          Everything a buyer or auditor asks about, structured and ready
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {domains.map((domain) => {
            const Icon = domain.icon;
            return (
              <div
                key={domain.name}
                className="relative p-6 rounded-2xl bg-white border border-gray-200 overflow-hidden"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${domain.gradient}`}
                />
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br shadow-sm shrink-0 ${domain.gradient}`}
                  >
                    <Icon className="w-6 h-6 text-white" weight="duotone" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {domain.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {domain.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Monthly data entry across all domains. 12-month rolling view per site.
        </p>
      </section>

      {/* Built-in Calculations */}
      <section className="mb-20">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          Built-In Calculations
        </h2>
        <p className="text-2xl font-bold text-gray-900 mb-10">
          Enter raw data, get defensible metrics
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {calculations.map((calc) => {
            const Icon = calc.icon;
            return (
              <div
                key={calc.name}
                className="p-6 rounded-2xl border border-gray-200 bg-white"
              >
                <Icon
                  className="w-8 h-8 text-stack-2 mb-4"
                  weight="duotone"
                />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {calc.name}
                </h3>
                <p className="text-sm text-gray-600">{calc.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-6 rounded-2xl bg-primary-100 border border-primary/20">
          <div className="flex items-start gap-4">
            <Plant className="w-8 h-8 text-primary shrink-0" weight="duotone" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Agricultural Metrics Coming Soon
              </h3>
              <p className="text-sm text-gray-600">
                We&apos;re adding fertiliser N-balance, livestock emissions
                (IPCC Tier 1), per-hectare intensity metrics, and crop yield
                tracking. Built specifically for farms and food businesses
                &mdash; not retrofitted from a manufacturing template.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
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
              Set Up Your Operation
            </h3>
            <p className="text-sm text-gray-600">
              Company details, site locations, and industry context. Takes 5
              minutes.
            </p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-white">2</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Enter Your Data
            </h3>
            <p className="text-sm text-gray-600">
              Domain by domain, month by month. Energy bills, input invoices,
              waste records &mdash; the numbers you already have. Import from CSV
              or enter manually.
            </p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-white">3</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Your Baseline Builds Itself
            </h3>
            <p className="text-sm text-gray-600">
              Emissions auto-calculated, trends tracked, exports ready. When a
              buyer asks for data, you have it.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-gray-200 mb-20" />

      {/* What's Included */}
      <section className="mb-20">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          Everything Included &mdash; Free
        </h2>
        <p className="text-2xl font-bold text-gray-900 mb-10">
          No tiers, no trials, no catches
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-gray-200 bg-white">
            <ChartLineUp
              className="w-8 h-8 text-stack-1 mb-4"
              weight="duotone"
            />
            <h3 className="font-semibold text-gray-900 mb-2">
              8-Domain Tracking
            </h3>
            <p className="text-sm text-gray-600">
              Energy, materials, packaging, outputs, transport, workforce,
              infrastructure, and context. Monthly granularity with 12-month
              rolling views.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200 bg-white">
            <FileArrowDown
              className="w-8 h-8 text-stack-2 mb-4"
              weight="duotone"
            />
            <h3 className="font-semibold text-gray-900 mb-2">
              CSV Import & Export
            </h3>
            <p className="text-sm text-gray-600">
              Import historical data from spreadsheets. Export to CSV anytime for
              your own analysis, reports, or to send directly to buyers.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200 bg-white">
            <Buildings
              className="w-8 h-8 text-stack-3 mb-4"
              weight="duotone"
            />
            <h3 className="font-semibold text-gray-900 mb-2">
              Multi-Site Support
            </h3>
            <p className="text-sm text-gray-600">
              Track multiple farms, processing sites, or locations separately.
              Each site gets its own data and dashboard.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200 bg-white">
            <Lightning
              className="w-8 h-8 text-stack-4 mb-4"
              weight="duotone"
            />
            <h3 className="font-semibold text-gray-900 mb-2">
              Auto-Calculated Emissions
            </h3>
            <p className="text-sm text-gray-600">
              Scope 1, 2, and 3 emissions calculated from your operational data.
              No manual formulas, no spreadsheet errors.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200 bg-white">
            <ShieldCheck
              className="w-8 h-8 text-stack-5 mb-4"
              weight="duotone"
            />
            <h3 className="font-semibold text-gray-900 mb-2">
              Data Quality Tracking
            </h3>
            <p className="text-sm text-gray-600">
              Every entry records its source (bill, meter, estimate) and
              confidence level. Know exactly how defensible your baseline is.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200 bg-white">
            <Leaf
              className="w-8 h-8 text-primary mb-4"
              weight="duotone"
            />
            <h3 className="font-semibold text-gray-900 mb-2">
              Five Stacks Aligned
            </h3>
            <p className="text-sm text-gray-600">
              The tracker builds Stack 1 &mdash; your Defensible Baseline. The
              structured data you need before any efficiency or resilience work
              can begin.
            </p>
          </div>
        </div>
      </section>

      {/* Why Free */}
      <section className="mb-20 max-w-3xl">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          Why Free
        </h2>
        <div className="prose prose-gray max-w-none">
          <p>
            The tracker builds your Defensible Baseline &mdash; Stack 1 of the
            Five Stacks Framework. We believe every farm and agricultural SME
            should have structured operational data, regardless of budget.
          </p>
          <p>
            Good data is the foundation. Without it, you can&apos;t find
            efficiency gains, you can&apos;t prove your practices to buyers, and
            you can&apos;t make informed decisions about where to invest.
          </p>
          <p>
            The tracker gives you that foundation. What you build on it is up to
            you.
          </p>
        </div>
      </section>

      {/* What's Coming */}
      <section className="mb-20">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          What&apos;s Coming
        </h2>
        <p className="text-2xl font-bold text-gray-900 mb-8">
          From baseline to operational advantage
        </p>

        <div className="space-y-4">
          <ComingSoonCard
            featureId="ag-metrics"
            title="Agricultural Metrics"
            description="Fertiliser N-balance, livestock emissions, per-hectare intensity metrics, crop yield tracking, and soil health indicators."
            page="tracker"
          />
          <ComingSoonCard
            featureId="efficiency-analysis"
            title="Efficiency Analysis"
            description="Once you have 3–6 months of data, we'll show you where you're bleeding margin. Input costs per hectare, energy waste, transport inefficiency — the leaks that cost you money every month."
            page="tracker"
          />
          <ComingSoonCard
            featureId="questionnaire-response"
            title="Questionnaire Response Tools"
            description="Upload a buyer questionnaire and get draft answers backed by your tracked data. EcoVadis, CDP, CSRD/VSME — any format."
            page="tracker"
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <PageCTA
        heading="Start building your baseline today"
        description="Enter your first domain in 15 minutes. Your operational data, structured and ready for any buyer request."
        primaryButton={{
          label: "Create Free Account",
          href: "/signup",
        }}
        secondaryButton={{
          label: "See It In Action",
          href: "/see-it-in-action",
        }}
      />

      <p className="mt-8 text-sm text-gray-500 text-center">
        Last updated: February 2026
      </p>
    </div>
  );
}
