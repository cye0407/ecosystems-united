import Link from "next/link";
import type { Metadata } from "next";
import { Check } from "@phosphor-icons/react/dist/ssr";
import QuoteCarousel from "./QuoteCarousel";

export const metadata: Metadata = {
  title: "Stack 1: The Defensible Baseline",
  description:
    "Records you can actually prove. The operational baseline behind energy, materials, waste, workforce, and transport.",
};

const ACCENT = "#3D2E7C";

export default function Stack1MockPage() {
  return (
    <div style={{ backgroundColor: "#faf8f5" }} className="-mt-px">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Back link */}
        <nav className="mb-10">
          <Link
            href="/framework"
            className="text-sm font-medium text-gray-500 hover:text-primary transition-colors"
          >
            ← Back to The Five Stacks
          </Link>
        </nav>

        {/* Hero — single column, no boxes */}
        <header className="mb-16">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: ACCENT }}
          >
            Stack 1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
            Stop the scramble.{" "}
            <span
              className="font-normal italic text-gray-500"
              style={{ fontFamily: "ui-serif, Georgia, serif" }}
            >
              Organize your records.
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Track the operational data behind energy, materials, waste,
            workforce, and transport so the next buyer request is a 30-minute
            job, not a two-week scramble.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center min-h-[50px] px-6 rounded-full font-semibold bg-primary text-white hover:bg-[#3d8f76] transition-colors"
          >
            Start Tracking — Free
          </Link>
        </header>

        {/* Why bother — 2 column with carousel */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-10">
            Why bother?
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-gray-700 leading-relaxed mb-5">
                Sustainability requests aren&apos;t about saving the world
                anymore. They&apos;re about{" "}
                <span className="text-gray-900 font-semibold">
                  compliance and readiness
                </span>
                . Most companies have the data already. It just lives in
                fourteen different places&mdash;invoices in one folder, utility
                bills in another, HR figures in someone&apos;s spreadsheet.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The companies that look more mature in ESG workflows aren&apos;t
                more enlightened. They&apos;re just better organised.
              </p>
            </div>
            <QuoteCarousel />
          </div>
        </section>

        {/* The four options — minimal */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-2">
            Build the baseline once. Use it everywhere.
          </h2>
          <p className="text-gray-600 mb-8">You have four options.</p>

          <div className="space-y-4">
            <div className="border-b border-[#ddd5c9] pb-4">
              <p className="font-semibold text-gray-900">
                Build it in spreadsheets
              </p>
              <p className="text-sm text-gray-600">
                Cheap at first. Expensive in time. Fragile when the person who
                made it leaves.
              </p>
            </div>
            <div className="border-b border-[#ddd5c9] pb-4">
              <p className="font-semibold text-gray-900">Hire a consultant</p>
              <p className="text-sm text-gray-600">
                Useful sometimes. Slower, pricier, and dependent on outside
                support.
              </p>
            </div>
            <div className="border-b border-[#ddd5c9] pb-4">
              <p className="font-semibold text-gray-900">
                Buy a generic ESG platform
              </p>
              <p className="text-sm text-gray-600">
                Can work. Also a great way to pay enterprise prices for
                features you&apos;ll never use.
              </p>
            </div>
            <div className="pb-4">
              <p
                className="font-semibold mb-1"
                style={{ color: ACCENT }}
              >
                Use the baseline tracker
              </p>
              <p className="text-sm text-gray-600">
                Free. Structured around records you already keep. Built to make
                your data usable, not just visible.
              </p>
            </div>
          </div>
        </section>

        {/* How it works — 3 steps, no cards */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-8">
            How it works
          </h2>
          <ol className="space-y-6">
            <li className="flex gap-5">
              <span
                className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                style={{ backgroundColor: ACCENT }}
              >
                1
              </span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">
                  Track the data you already generate
                </p>
                <p className="text-gray-600">
                  Bills, invoices, manifests, transport logs, workforce
                  records. Most of the raw material already exists.
                </p>
              </div>
            </li>
            <li className="flex gap-5">
              <span
                className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                style={{ backgroundColor: ACCENT }}
              >
                2
              </span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">
                  Keep it structured and source-linked
                </p>
                <p className="text-gray-600">
                  So the number isn&apos;t just there. You know where it came
                  from and can defend it when challenged.
                </p>
              </div>
            </li>
            <li className="flex gap-5">
              <span
                className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                style={{ backgroundColor: ACCENT }}
              >
                3
              </span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">
                  Reuse it for requests and decisions
                </p>
                <p className="text-gray-600">
                  Questionnaires, audits, reporting, internal cost analysis.
                  One baseline, multiple uses.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* The product — single tracker focus */}
        <section className="mb-16">
          <div className="border border-[#ddd5c9] rounded-2xl bg-white p-8">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-2">
              The Baseline Tracker
            </h2>
            <p className="text-gray-600 mb-6">
              Free, forever. No seat limits, no time limit. Use transparent
              calculations, not hidden algorithms.
            </p>
            <ul className="space-y-2.5 mb-8">
              {[
                "Guided data entry across 8 operational domains",
                "Auto-calculated emissions you can audit (IPCC Tier 1)",
                "CSV exports — your data, no lock-in",
                "Multi-site dashboard",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <Check
                    size={18}
                    weight="bold"
                    className="text-primary mt-0.5 shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center min-h-[50px] px-6 rounded-full font-semibold bg-primary text-white hover:bg-[#3d8f76] transition-colors"
            >
              Start Tracking — Free
            </Link>
          </div>

          {/* Response engine — one-line mention */}
          <p className="text-sm text-gray-500 mt-6 leading-relaxed">
            Once you have a baseline, the{" "}
            <Link
              href="/see-it-in-action"
              className="underline hover:text-gray-700"
            >
              Response Engine
            </Link>{" "}
            can generate questionnaire answers from your tracked data
            (€39/first, €19 each after). But that&apos;s a later step. Start
            here.
          </p>
        </section>

        {/* Quiet footer — stats + deep dive */}
        <section className="mb-12 pt-12 border-t border-[#ddd5c9]">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
            For the data nerds
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            By 2024, an estimated{" "}
            <a
              href="https://www.green.earth/blog/csrd-for-sme-suppliers-how-to-turn-data-requests-into-a-competitive-advantage"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-800"
            >
              92% of major buyers
            </a>{" "}
            were expected to require ESG disclosures from their suppliers.{" "}
            <a
              href="https://www.esgdive.com/news/sustainability-across-supply-chains-a-priority-for-companies-mit/803642/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-800"
            >
              64% of companies
            </a>{" "}
            now include sustainability metrics in supplier scorecards (up from
            38% in 2020). Yet only{" "}
            <a
              href="https://www.supplychaindive.com/news/Scope-3-carbon-emissions-tracking-supply-chains-IBM-survey/694956/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-800"
            >
              38% of businesses
            </a>{" "}
            actually track Scope 3 emissions.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link
              href="/framework/stack-1-metrics"
              className="text-gray-600 hover:text-gray-900 underline"
            >
              Read the deep dive →
            </Link>
            <Link
              href="/framework/stack-2-efficiency"
              className="text-gray-600 hover:text-gray-900 underline"
            >
              Stack 2: Operational Efficiency →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
