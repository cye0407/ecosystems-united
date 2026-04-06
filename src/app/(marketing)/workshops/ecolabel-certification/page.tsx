import Link from "next/link";
import type { Metadata } from "next";
import {
  Certificate,
  Check,
  Clock,
  CurrencyEur,
  Users,
  CalendarBlank,
  Warning,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import PageCTA from "@/components/marketing/PageCTA";
import WaitlistForm from "@/components/marketing/WaitlistForm";

export const metadata: Metadata = {
  title: "Which Ecolabel Is Right For Your Farm? | Workshop",
  description:
    "A practical 90-minute workshop for agricultural SMEs. Learn which certifications actually open markets, what they cost, and how to prepare your data before you apply. €29.",
};

const modules = [
  {
    title: "Which certifications actually matter",
    points: [
      "The labels buyers are actually asking for in 2026",
      "Type I vs II vs III — which ones auditors and buyers respect",
      "Why having the wrong label can cost you more than having none",
    ],
  },
  {
    title: "Matching your operation to the right scheme",
    points: [
      "Decision framework: your products, your buyers, your markets",
      "Cost and timeline reality for GlobalG.A.P., EU Organic, Rainforest Alliance, LEAF Marque",
      "When group certification makes sense (and when it doesn't)",
    ],
  },
  {
    title: "What auditors actually look for",
    points: [
      "The documentation that passes vs. the documentation that fails",
      "Common audit failures and how to avoid them",
      "How to prepare evidence from data you're already collecting",
    ],
  },
  {
    title: "Building your certification roadmap",
    points: [
      "Sequencing: which certification first, which later, which never",
      "Year-over-year cost budgeting (the thing nobody talks about)",
      "How your baseline data becomes your audit evidence",
    ],
  },
];

const notFor = [
  "Operations already certified — this is for getting started, not maintaining",
  "Large enterprises with dedicated compliance teams",
  "Anyone looking for a sales pitch — this is practical, not promotional",
];

export default function EcolabelWorkshopPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <span className="text-sm font-medium text-primary mb-3 block">
          Live Workshop · 90 minutes · €29
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Which Ecolabel Is Right For Your Farm?
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          There are 450+ ecolabels globally. Your buyers care about maybe three.
          This workshop helps you figure out which ones, what they cost, and how
          to get ready before you apply.
        </p>

        {/* Key details */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-8">
          <div className="flex items-center gap-2">
            <Clock size={18} weight="duotone" className="text-primary" />
            90 minutes, live
          </div>
          <div className="flex items-center gap-2">
            <CurrencyEur size={18} weight="duotone" className="text-primary" />
            €29 per person
          </div>
          <div className="flex items-center gap-2">
            <Users size={18} weight="duotone" className="text-primary" />
            Small group (max 20)
          </div>
          <div className="flex items-center gap-2">
            <CalendarBlank size={18} weight="duotone" className="text-primary" />
            Next session: TBA
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <WaitlistForm
            feature="workshop-ecolabel"
            buttonLabel="Reserve Your Spot"
            placeholder="you@farm.com"
          />
        </div>
        <p className="text-sm text-gray-400 mt-2">
          We'll email you when the next session is scheduled.
        </p>
      </div>

      {/* The problem */}
      <section className="mb-14 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-lg font-bold text-gray-900 mb-3">
          Sound familiar?
        </h2>
        <div className="space-y-3 text-gray-600">
          <p>
            A buyer asks if you're certified. You look at the options — GlobalG.A.P.,
            EU Organic, Rainforest Alliance, LEAF Marque, Red Tractor, twenty others —
            and you're not sure which one they actually want.
          </p>
          <p>
            You check the costs. Some are €500. Some are €5,000. Some need an
            annual audit, some need three. You don't know what documentation
            you need, and you definitely don't have time to figure it out mid-season.
          </p>
          <p>
            This workshop cuts through that. In 90 minutes, you'll know which
            certifications match your operation, what they'll cost, and exactly
            what data you need to have ready before you apply.
          </p>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          What you'll walk away with
        </h2>
        <div className="space-y-8">
          {modules.map((mod, i) => (
            <div key={mod.title} className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                {i + 1}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {mod.title}
                </h3>
                <ul className="space-y-1.5">
                  {mod.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <Check
                        size={16}
                        weight="bold"
                        className="text-primary mt-0.5 shrink-0"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What you get */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Included with your ticket
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <Certificate
              size={24}
              weight="duotone"
              className="text-primary mb-2"
            />
            <p className="font-semibold text-gray-900 text-sm">
              Certification comparison matrix
            </p>
            <p className="text-sm text-gray-500">
              Side-by-side: cost, timeline, audit requirements, buyer relevance
            </p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <CalendarBlank
              size={24}
              weight="duotone"
              className="text-primary mb-2"
            />
            <p className="font-semibold text-gray-900 text-sm">
              Your certification roadmap template
            </p>
            <p className="text-sm text-gray-500">
              Fill in during the workshop, walk away with your plan
            </p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <Check
              size={24}
              weight="duotone"
              className="text-primary mb-2"
            />
            <p className="font-semibold text-gray-900 text-sm">
              Audit preparation checklist
            </p>
            <p className="text-sm text-gray-500">
              What to have ready before your first auditor visit
            </p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <Users
              size={24}
              weight="duotone"
              className="text-primary mb-2"
            />
            <p className="font-semibold text-gray-900 text-sm">
              Recording + Q&A access
            </p>
            <p className="text-sm text-gray-500">
              Can't make the live session? Watch at your own pace
            </p>
          </div>
        </div>
      </section>

      {/* Who this is NOT for */}
      <section className="mb-14">
        <h2 className="text-lg font-bold text-gray-900 mb-3">
          This workshop is not for everyone
        </h2>
        <ul className="space-y-2">
          {notFor.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-gray-600"
            >
              <Warning
                size={16}
                weight="duotone"
                className="text-gray-400 mt-0.5 shrink-0"
              />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Connection to tools */}
      <section className="mb-14 p-6 bg-gradient-to-br from-[#3D2E7C] to-[#5B4A9E] rounded-lg text-white">
        <h2 className="text-lg font-bold mb-3">
          After the workshop
        </h2>
        <p className="text-white/80 mb-4">
          Once you know which certification to pursue, you need your data in
          order. The free baseline tracker collects exactly the operational data
          that auditors ask for — energy, water, waste, materials, transport,
          workforce. Start tracking now, and by the time you apply, your
          evidence is already built.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 bg-white text-[#3D2E7C] px-5 py-2.5 rounded font-semibold text-sm hover:bg-gray-100 transition-colors"
          >
            Start Tracking — Free
            <ArrowRight size={16} weight="bold" />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 bg-white/10 text-white px-5 py-2.5 rounded font-semibold text-sm hover:bg-white/20 transition-colors"
          >
            See all tools
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          €29. 90 minutes. A clear plan.
        </h2>
        <p className="text-gray-600 mb-6 max-w-lg mx-auto">
          Stop guessing which certification to pursue. Get the decision made so
          you can focus on running your operation.
        </p>
        <WaitlistForm
          feature="workshop-ecolabel"
          buttonLabel="Reserve Your Spot"
          placeholder="you@farm.com"
          className="max-w-md mx-auto"
        />
        <p className="text-sm text-gray-400 mt-3">
          We'll email you when the next session is scheduled.
          No commitment until you book.
        </p>
      </div>

      {/* Related reading */}
      <section className="mt-16 pt-12 border-t border-gray-200">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
          Prepare with free reading
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            href="/articles/the-different-types-of-ecolabels"
            className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-gray-900 text-sm group-hover:text-primary transition-colors">
              The Different Types of Ecolabels
            </p>
            <p className="text-sm text-gray-500">Type I, II, III — and why it matters for your operation</p>
          </Link>
          <Link
            href="/articles/most-trustworthy-ecolabels"
            className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors group"
          >
            <p className="font-semibold text-gray-900 text-sm group-hover:text-primary transition-colors">
              The Most Trustworthy Ecolabels
            </p>
            <p className="text-sm text-gray-500">10 certifications with real credibility, ranked</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
