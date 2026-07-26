import Link from "next/link";
import type { Metadata } from "next";
import type { ElementType, ReactNode } from "react";
import PageCTA from "@/components/marketing/PageCTA";
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
  CaretDown,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title:
    "Free Baseline Tracker — Organize Your Farm's Operational Data | Ecosystems United",
  description:
    "Bring the records you already keep into one place across 8 domains. Auto-calculated emissions, per-hectare metrics, CSV/JSON exports, multi-site. Free. Ready for a buyer, a lender, a grant, or your own decisions.",
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
  },
  {
    name: "Materials & Inputs",
    description:
      "Raw materials, components, consumables, and fertiliser inputs. N/P/K content, N₂O, nitrogen balance.",
    icon: Cube,
  },
  {
    name: "Packaging",
    description:
      "Primary, secondary, tertiary packaging. Recyclability and recycled content.",
    icon: Package,
  },
  {
    name: "Outputs & Waste",
    description:
      "Crop yields by type and area, livestock headcount, product volumes, and waste by disposal route.",
    icon: Recycle,
  },
  {
    name: "Transport & Logistics",
    description:
      "Inbound and outbound movements. Scope 3 emissions from distance, weight, and mode.",
    icon: Truck,
  },
  {
    name: "Workforce",
    description:
      "Headcount, seasonal labour, health & safety incidents, training hours. TRIR auto-calculated.",
    icon: UsersThree,
  },
  {
    name: "Infrastructure & Land",
    description:
      "Sites, buildings, equipment, and land use by type. Parcels with area, soil organic matter, pH, irrigation.",
    icon: Buildings,
  },
  {
    name: "Context",
    description:
      "Markets, customer base, regulatory position, certifications, and financial context.",
    icon: GlobeHemisphereWest,
  },
];

const calculations = [
  {
    name: "Scope 2 & 3 Emissions",
    description:
      "From grid electricity, transport, and waste — with the source and confidence recorded for each figure.",
    icon: ChartLineUp,
  },
  {
    name: "Livestock Emissions",
    description:
      "Enteric CH₄ and manure N₂O per species using IPCC Tier 1 factors. Livestock units auto-calculated.",
    icon: Plant,
  },
  {
    name: "Fertiliser N₂O & N-Balance",
    description:
      "N₂O from applied nitrogen (IPCC Tier 1). Nitrogen balance: applied vs crop removal per hectare.",
    icon: Drop,
  },
  {
    name: "Per-Hectare Intensity",
    description:
      "Emissions per hectare, emissions per tonne of output, and yield per hectare.",
    icon: Leaf,
  },
  {
    name: "Transport & Waste Emissions",
    description:
      "Scope 3 transport from tonne-km by mode; disposal-route emissions with diversion rate tracked.",
    icon: Truck,
  },
  {
    name: "Workforce KPIs",
    description:
      "TRIR and LTIR auto-calculated from incident counts and hours worked. Training per FTE.",
    icon: UsersThree,
  },
];

function KeyCard({
  icon: Icon,
  title,
  teaser,
  children,
}: {
  icon: ElementType;
  title: string;
  teaser: string;
  children: ReactNode;
}) {
  return (
    <details className="group rounded-2xl border border-gray-200 bg-white p-6 open:shadow-sm [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex items-start gap-4 cursor-pointer list-none">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary-dark to-primary shrink-0">
          <Icon className="w-6 h-6 text-white" weight="duotone" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <CaretDown
              className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180 shrink-0"
              weight="bold"
            />
          </div>
          <p className="text-sm text-gray-600 mt-1">{teaser}</p>
          <span className="text-xs font-medium text-primary mt-2 inline-block group-open:hidden">
            See the detail →
          </span>
        </div>
      </summary>
      <div className="mt-5 sm:pl-16 text-sm text-gray-600">{children}</div>
    </details>
  );
}

export default function TrackerPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* 1 · Hero */}
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Your farm&apos;s data, organized once.
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Bring the records you already keep &mdash; energy, inputs, land,
          livestock, workforce, waste &mdash; into one place across 8 domains.
          Auto-calculated, exportable, and free. Ready for a buyer, a lender, a
          grant, or your own decisions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/signup"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            Start Tracking &mdash; Free Forever
          </Link>
          <a
            href="#what-you-get"
            className="inline-block border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            See What&apos;s Inside
          </a>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          No credit card. Multi-site. Yours to export and keep.
        </p>

      </header>

      {/* 2 · The problem */}
      <section className="mb-20">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          Who This Is For
        </h2>
        <p className="text-2xl font-bold text-gray-900 mb-8">
          Farmers and agricultural SMEs who need their data organised
        </p>
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>
            The data exists &mdash; in invoices, utility bills, HR records,
            waste manifests &mdash; but it&apos;s scattered across files and
            folders. So every buyer questionnaire, every lender or grant form,
            every decision starts from scratch.
          </p>
          <p className="text-gray-900 font-medium">
            The tracker organises it once. After that, every request draws from
            the same baseline &mdash; and so do you.
          </p>
        </div>
      </section>

      {/* 3 · What you get — 4 key cards */}
      <section id="what-you-get" className="mb-20">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          What You Get
        </h2>
        <p className="text-2xl font-bold text-gray-900 mb-3">
          Four things, in plain terms
        </p>
        <p className="text-gray-600 mb-10">
          Expand any card for the full detail.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <KeyCard
            icon={ChartLineUp}
            title="8-domain tracking"
            teaser="Energy, materials, packaging, outputs, transport, workforce, infrastructure, and context — monthly, per site."
          >
            <ul className="space-y-3">
              {domains.map((d) => {
                const Icon = d.icon;
                return (
                  <li key={d.name} className="flex items-start gap-3">
                    <Icon
                      className="w-5 h-5 text-primary shrink-0 mt-0.5"
                      weight="duotone"
                    />
                    <span>
                      <span className="font-medium text-gray-900">
                        {d.name}.
                      </span>{" "}
                      {d.description}
                    </span>
                  </li>
                );
              })}
            </ul>
            <p className="mt-4 text-gray-500">
              Monthly granularity, 12-month rolling view per site.
            </p>
          </KeyCard>

          <KeyCard
            icon={Lightning}
            title="Auto-calculated metrics"
            teaser="Enter raw data, get defensible numbers. No manual formulas, no spreadsheet errors."
          >
            <ul className="space-y-3">
              {calculations.map((c) => {
                const Icon = c.icon;
                return (
                  <li key={c.name} className="flex items-start gap-3">
                    <Icon
                      className="w-5 h-5 text-stack-2 shrink-0 mt-0.5"
                      weight="duotone"
                    />
                    <span>
                      <span className="font-medium text-gray-900">
                        {c.name}.
                      </span>{" "}
                      {c.description}
                    </span>
                  </li>
                );
              })}
            </ul>
          </KeyCard>

          <KeyCard
            icon={FileArrowDown}
            title="Exports & ownership"
            teaser="Export any domain or your whole baseline. Yours to keep, no lock-in."
          >
            <ul className="space-y-3 list-disc pl-5">
              <li>
                <span className="font-medium text-gray-900">CSV export</span>{" "}
                per domain, or a complete workbook &mdash; now including the
                agricultural domains (land use, fertiliser, livestock, crops).
              </li>
              <li>
                <span className="font-medium text-gray-900">JSON raw data</span>{" "}
                for your own analysis or handover.
              </li>
              <li>
                <span className="font-medium text-gray-900">Multi-site.</span>{" "}
                Track multiple farms or sites separately, each with its own
                dashboard.
              </li>
              <li>
                Hand the numbers to a buyer, a lender, or a grant application, or
                keep them for your own decisions. No lock-in, ever.
              </li>
            </ul>
          </KeyCard>

          <KeyCard
            icon={Plant}
            title="Built for farms"
            teaser="Agricultural metrics are native here — not retrofitted from a manufacturing template."
          >
            <ul className="space-y-3 list-disc pl-5">
              <li>
                Fertiliser N₂O emissions and nitrogen balance; livestock
                emissions (IPCC Tier 1 CH₄ and N₂O); per-hectare intensity; crop
                yield tracking; land use classification.
              </li>
              <li>
                <span className="font-medium text-gray-900">
                  Data quality on every entry.
                </span>{" "}
                Each figure records its source (bill, meter, estimate) and a
                confidence level, so you always know how defensible your baseline
                is.
              </li>
            </ul>
          </KeyCard>
        </div>
      </section>

      {/* 4 · How it works */}
      <section className="mb-20">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          How It Works
        </h2>
        <p className="text-2xl font-bold text-gray-900 mb-10">
          Three steps to an organised baseline
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
            <h3 className="font-semibold text-gray-900 mb-2">Enter Your Data</h3>
            <p className="text-sm text-gray-600">
              Domain by domain, month by month. The numbers you already have,
              entered through quick per-domain forms.
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
              Emissions auto-calculated, trends tracked, exports ready. When
              someone asks for data, you have it.
            </p>
          </div>
        </div>
      </section>

      {/* 5 · What your data unlocks */}
      <section className="mb-20">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          What Your Data Unlocks
        </h2>
        <p className="text-2xl font-bold text-gray-900 mb-3">
          Organise once, use it everywhere
        </p>
        <p className="text-gray-600 mb-10">
          One dataset behind every buyer questionnaire, lender request, grant
          application, and decision you make.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/see-it-in-action"
            className="p-6 rounded-2xl border border-gray-200 bg-white hover:border-primary transition-colors group"
          >
            <span className="text-xs font-semibold text-white bg-primary px-2 py-0.5 rounded mb-3 inline-block">
              Available now
            </span>
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
              Response Generator
            </h3>
            <p className="text-sm text-gray-600">
              Upload a buyer questionnaire &mdash; ESG or GlobalG.A.P. &mdash;
              and get data-backed answers from your tracked baseline. Rules-based
              engine with 200+ templates. From €39.
            </p>
          </Link>
          <div className="p-6 rounded-2xl border border-dashed border-gray-300 bg-gray-50">
            <span className="text-xs font-semibold text-gray-500 bg-gray-200 px-2 py-0.5 rounded mb-3 inline-block">
              Coming soon
            </span>
            <h3 className="font-semibold text-gray-900 mb-2">
              Efficiency Analysis
            </h3>
            <p className="text-sm text-gray-600">
              Once you have 3&ndash;6 months of data, see where you&apos;re
              bleeding margin. Input costs per hectare, energy waste, transport
              inefficiency.
            </p>
          </div>
        </div>

        <p className="text-center mt-6">
          <Link
            href="/products"
            className="text-sm text-primary font-medium hover:underline"
          >
            See all products →
          </Link>
        </p>
      </section>

      {/* 6 · Why free + closing CTA */}
      <section className="mb-16">
        <div className="rounded-2xl bg-primary-100/60 border border-primary/20 p-6 sm:p-8 flex items-start gap-4">
          <ShieldCheck
            className="w-8 h-8 text-primary shrink-0"
            weight="duotone"
          />
          <div>
            <h2 className="font-semibold text-gray-900 mb-2">Why it&apos;s free</h2>
            <p className="text-gray-600 text-sm">
              The tracker builds Stack 1 of the Five Stacks Framework &mdash;
              your defensible baseline. Good data is the foundation everything
              else stands on, and every farm should have it regardless of budget.
              What you build on it is up to you.
            </p>
          </div>
        </div>
      </section>

      <PageCTA
        heading="Start building your baseline today"
        description="Enter your first domain in 15 minutes. Your operational data, structured and ready for whoever asks — a buyer, a lender, a grant, or you."
        primaryButton={{
          label: "Start Free",
          href: "/signup",
        }}
        secondaryButton={{
          label: "See It In Action",
          href: "/see-it-in-action",
        }}
      />

      <p className="mt-8 text-sm text-gray-500 text-center">
        Last updated: July 2026
      </p>
    </div>
  );
}
