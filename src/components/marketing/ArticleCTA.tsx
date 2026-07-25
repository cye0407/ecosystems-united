"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { getArticleCluster } from "@/lib/article-clusters";

// D-021: every article closes with the cluster-translated WORKSPACE CTA —
// the free tracker, pitched in the cluster's job language. Copy order is
// fixed: what you get -> what it takes -> privacy. The privacy footnote is
// identical everywhere. Cluster comes from src/lib/article-clusters.ts
// (generated from docs/content-matrix.csv — the source of truth).
//
// D-021 note: the ecolabel selector / readiness tools / feedstock compare
// are no longer the page close — they stay reachable via inline links and
// the mid-article playbook CTAs. Reversible by re-adding a cluster branch.

interface WorkspaceVariant {
  heading: string;
  get: string;
  need: string;
  ctaLabel: string;
}

const DEFAULT_VARIANT: WorkspaceVariant = {
  heading: "Stop reading about it — see your own numbers",
  get: "You get: a live picture of your operation — energy, inputs, water, waste, and what each one costs you — ready for your own decisions and for the next time someone asks for numbers.",
  need: "What it takes: 12 months of the records you already have, entered once.",
  ctaLabel: "See your operation in numbers — free →",
};

const WORKSPACE_VARIANTS: Record<string, WorkspaceVariant> = {
  baseline: {
    heading: "Stop rebuilding the same numbers every time someone asks",
    get: "You get: every number you're supposed to be measuring — energy, inputs, water, waste, land — in one place, auto-calculated, and ready the next time a buyer, lender, or grant form asks.",
    need: "What it takes: the records you already have — bills, invoices, meter readings — entered once.",
    ctaLabel: "Get your numbers in one place — free →",
  },
  efficiency: {
    heading: "Stop guessing where the water — and the money — goes",
    get: "You get: a live picture of your operation — water, energy, inputs, and what each one costs you — every leak you fix visible in the numbers, and the next buyer question already answered.",
    need: "What it takes: 12 months of bills and meter readings, entered once.",
    ctaLabel: "See your operation in numbers — free →",
  },
  "circular-economy": {
    heading: "Your waste streams have a price tag — find it",
    get: "You get: what your operation discards and what that costs you, on record — so you can spot the streams worth selling, reusing, or cutting, and see the gain when you act.",
    need: "What it takes: the waste and disposal records you already have, entered once.",
    ctaLabel: "See what your waste costs — free →",
  },
  resilience: {
    heading: "You can't fix an exposure you haven't measured",
    get: "You get: your operation's numbers in one place — what you spend, what you produce, where it goes — so the weak spots show up before a bad season finds them for you.",
    need: "What it takes: the records you already have, entered once.",
    ctaLabel: "See your operation in numbers — free →",
  },
  regenerative: {
    heading: "If the practice works, your numbers should show it",
    get: "You get: your inputs, fuel, soil, and land data in one place — so when you change a practice, you can see what it saved, what it cost, and whether it's paying back.",
    need: "What it takes: the field and input records you already have, entered once.",
    ctaLabel: "See if it pays in your numbers — free →",
  },
  biofuels: {
    heading: "Know what your residues are worth before someone names a price",
    get: "You get: a live record of what your operation produces, uses, and discards — residues, byproducts, energy — so when a buyer or a biofuel offer shows up, you negotiate from your own numbers.",
    need: "What it takes: the production and waste records you already have, entered once.",
    ctaLabel: "Put your numbers to work — free →",
  },
  ecolabel: {
    heading: "Certification is an evidence game — start collecting yours now",
    get: "You get: your records — inputs, energy, water, waste, workforce — organized the way audits ask for them, so certification prep becomes pulling up numbers, not hunting for them.",
    need: "What it takes: the records you already keep, entered once.",
    ctaLabel: "Get audit-ready numbers — free →",
  },
  vsme: {
    heading: "The next buyer questionnaire doesn't have to cost you a week",
    get: "You get: the datapoints buyers actually ask for — energy, emissions, water, waste, workforce — tracked once and ready to answer from, instead of a scramble through folders every time.",
    need: "What it takes: the records you already have, entered once.",
    ctaLabel: "Track once, answer every request — free →",
  },
  intercropping: {
    heading: "Trialling a new cropping system? Let the numbers call it",
    get: "You get: your yields, inputs, and costs tracked season by season in one place — so when you trial a multi-crop system, you can see whether it actually out-earned the old one.",
    need: "What it takes: the planting and input records you already keep, entered once.",
    ctaLabel: "Track your trial in numbers — free →",
  },
  "small-farm-strategy": {
    heading: "Small farms win on knowing their numbers",
    get: "You get: what you spend, use, and produce in one live picture — the numbers behind every pricing, channel, and investment call you make.",
    need: "What it takes: the records you already have — bills, invoices, sales — entered once.",
    ctaLabel: "See your operation in numbers — free →",
  },
  "agribusiness-strategy": {
    heading: "Position yourself with numbers, not hunches",
    get: "You get: a live picture of what your operation spends, uses, and produces — the foundation for deciding where in the chain you can actually compete.",
    need: "What it takes: the records you already have, entered once.",
    ctaLabel: "See your operation in numbers — free →",
  },
  biodiversity: {
    heading: "Habitat pays better when you can show what you did",
    get: "You get: your land use, plantings, and inputs on record — so when a scheme, buyer, or auditor asks what you've done for nature, you answer with dates and numbers.",
    need: "What it takes: the land and field records you already have, entered once.",
    ctaLabel: "Put your land on record — free →",
  },
  "land-use-planning": {
    heading: "Plan your land from your own numbers",
    get: "You get: every parcel's use, inputs, and outputs in one place — so allocation decisions run on your data, not on how last season felt.",
    need: "What it takes: the land and field records you already have, entered once.",
    ctaLabel: "See your land in numbers — free →",
  },
  pillar: DEFAULT_VARIANT,
};

export default function ArticleCTA() {
  const pathname = usePathname();

  if (pathname === "/articles") return null;

  const slug = pathname.split("/").pop() || "";
  const { cluster } = getArticleCluster(slug);
  const v = WORKSPACE_VARIANTS[cluster] ?? DEFAULT_VARIANT;

  return (
    <div className="max-w-4xl mx-auto px-6 pb-16">
      <div className="p-8 rounded-lg text-white mt-12" style={{ backgroundColor: "#4AA88C" }}>
        <h2 className="text-2xl font-bold mb-3">{v.heading}</h2>
        <p className="text-white/80 mb-3">{v.get}</p>
        <p className="text-white/80 mb-6">{v.need}</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/tracker"
            className="inline-block bg-white px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
            style={{ color: "#4AA88C" }}
          >
            {v.ctaLabel}
          </Link>
          <Link
            href="/see-it-in-action"
            className="text-white/70 hover:text-white underline text-sm transition-colors"
          >
            See it in action first
          </Link>
        </div>
        <p className="text-sm text-white/60 mt-3">
          Your data is yours: stored on your device, synced only to your private
          account. We don&apos;t mine it — and you can export everything, anytime.
        </p>
      </div>
    </div>
  );
}
