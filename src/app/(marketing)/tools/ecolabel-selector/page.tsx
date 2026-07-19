"use client";

import { useState } from "react";
import Link from "next/link";
import { analytics } from "@/lib/analytics";
import GatedDownload from "@/components/marketing/GatedDownload";

const ACCENT = "#5B4A9E"; // ecolabel accent
const GREEN = "#4AA88C"; // baseline funnel CTA

// --- Part 1: ecolabel family recommendation --------------------------------
// Families are grounded in the ecolabel articles (Type I / II / III, the
// trust criteria, and the recognised certifications). The "claim that matters
// most" picks the family; product and market refine the specific examples.

type FamilyKey = "organic" | "social" | "carbon" | "circularity" | "lifecycle";

type Family = {
  name: string;
  isoType: string;
  tagline: string;
  why: string;
};

const FAMILIES: Record<FamilyKey, Family> = {
  organic: {
    name: "Organic & Agricultural",
    isoType: "ISO Type I — third-party certified",
    tagline: "Chemical-free, method-based farming and inputs",
    why: "Your buyers care most about how it's grown or made. Organic labels are third-party certified against public criteria — the credibility comes from an independent auditor, not your own claim.",
  },
  social: {
    name: "Fair-Trade & Social",
    isoType: "ISO Type I — third-party certified",
    tagline: "Fair wages, ethical sourcing, worker & community standards",
    why: "Your buyers weight labour and social conditions most heavily. These labels audit wages, sourcing and governance across your operation, so the signal is only as strong as the independent verification behind it.",
  },
  carbon: {
    name: "Carbon & Climate",
    isoType: "Mixed — verify the standard behind the mark",
    tagline: "Emissions, energy efficiency and climate impact",
    why: "Climate is your headline claim. Carbon and energy marks range from rigorous third-party schemes to self-declared badges — so the standard and registry behind the mark matter more here than almost anywhere else.",
  },
  circularity: {
    name: "Circularity & Materials",
    isoType: "ISO Type I — third-party certified",
    tagline: "Recyclability, reuse, responsible material sourcing",
    why: "Your value story is what happens to the material — reuse, recycled content, responsible sourcing. These labels certify material health and chain-of-custody, which is why traceable records are non-negotiable.",
  },
  lifecycle: {
    name: "Lifecycle Declarations (Type III / EPD)",
    isoType: "ISO Type III — standardised data declaration",
    tagline: "Whole-life data for sophisticated B2B buyers",
    why: "You sell to buyers who need numbers, not a badge — often for their own Scope 3 reporting. Type III declarations (EPDs) publish standardised lifecycle data rather than a pass/fail mark, so comprehensive measurement is the whole game.",
  },
};

// Tailor the concrete label examples to product + market so the result isn't
// generic. Falls back to the family's broadly-recognised examples.
function recommendedExamples(
  family: FamilyKey,
  product: string,
  market: string
): string {
  const german = market === "german";
  const eu = market === "eu" || german;

  switch (family) {
    case "organic":
      if (product === "textiles") return "ECOCERT, GOTS";
      if (eu) return "EU Organic, ECOCERT, Rainforest Alliance";
      return "USDA Organic, Rainforest Alliance, Fair Trade Certified";
    case "social":
      return "Fair Trade Certified, B Corp Certification";
    case "carbon":
      if (product === "equipment") return "Energy Star, EU Ecolabel";
      if (german) return "Blue Angel (Blauer Engel), EU Ecolabel";
      return "EU Ecolabel, Energy Star";
    case "circularity":
      if (product === "wood") return "FSC, Cradle to Cradle Certified";
      return "Cradle to Cradle Certified, FSC";
    case "lifecycle":
      return "Environmental Product Declarations (EPDs), EU Ecolabel (Type I complement)";
    default:
      return "";
  }
}

const REC_QUESTIONS = [
  {
    id: "product",
    label: "What do you make or produce?",
    options: [
      { key: "food", label: "Food & agricultural products" },
      { key: "textiles", label: "Textiles, cosmetics or personal care" },
      { key: "wood", label: "Wood, paper or packaging materials" },
      { key: "equipment", label: "Equipment or energy-using products" },
      { key: "services", label: "Services or general operation" },
    ],
  },
  {
    id: "claim",
    label: "Which claim matters most to your buyers?",
    options: [
      { key: "organic", label: "Organic / chemical-free production" },
      { key: "social", label: "Fair labour & social conditions" },
      { key: "carbon", label: "Carbon / climate impact" },
      { key: "circularity", label: "Circularity / recyclability" },
      { key: "lifecycle", label: "Whole-life transparency (for B2B buyers)" },
    ],
  },
  {
    id: "market",
    label: "Where's your primary target market?",
    options: [
      { key: "eu", label: "EU consumers" },
      { key: "german", label: "German-speaking markets" },
      { key: "global", label: "Global consumers" },
      { key: "b2b", label: "B2B / corporate buyers" },
    ],
  },
] as const;

// --- Part 2: certification-readiness scoring -------------------------------
// Yes = 2, Partially = 1, No = 0. Each question carries a remediation "gap"
// so the weakest area maps directly to one concrete next step.

const READY_QUESTIONS = [
  {
    q: "Do you have your production or operational practices documented in writing?",
    gap: "Write down your core practices. Certifiers assess you against documented procedures — undocumented know-how can't be audited.",
  },
  {
    q: "Can you trace your key inputs back to source (chain-of-custody records)?",
    gap: "Start a chain-of-custody log for your key inputs. Circularity, organic and social labels all require you to prove where materials came from.",
  },
  {
    q: "Is your sustainability data third-party-verifiable, not just self-declared?",
    gap: "Move from self-declared claims to evidence a third party can check. Self-declared (Type II) claims without proof are where greenwashing risk lives.",
  },
  {
    q: "Have you mapped your practices to a specific certification's published criteria?",
    gap: "Pull the public criteria for your target label and map your operation against them line by line. This tells you your real gap before you spend on an audit.",
  },
  {
    q: "Do your records cover a full production cycle or reporting year?",
    gap: "Build records that span a full cycle. Most schemes need a continuous audit trail, not a snapshot.",
  },
  {
    q: "Is someone clearly responsible for compliance and documentation?",
    gap: "Assign an owner for certification documentation. Without a named owner, records drift and recertification slips.",
  },
  {
    q: "Are you ready to fund a third-party audit and periodic recertification?",
    gap: "Budget for the audit and recurring recertification. Type I credibility comes from independent verification on a fixed cycle — it's an ongoing cost, not one-off.",
  },
] as const;

const options = [
  { label: "Yes", value: 2 },
  { label: "Partially", value: 1 },
  { label: "No", value: 0 },
] as const;

function readinessBand(pct: number) {
  if (pct < 40) {
    return {
      level: "Early stage",
      summary:
        "You've got the ambition but not yet the paper trail. Certification would fail today — the good news is you know exactly what to build first.",
    };
  }
  if (pct < 70) {
    return {
      level: "Building",
      summary:
        "You have real foundations but gaps remain. Close them before you invite an auditor — a failed audit costs more than the delay.",
    };
  }
  if (pct < 90) {
    return {
      level: "Nearly ready",
      summary:
        "You're close. Tighten the remaining weak spot and you'll walk into an audit with evidence, not explanations.",
    };
  }
  return {
    level: "Application-ready",
    summary:
      "Your documentation and data are in strong shape. You can approach a certifier with the evidence they'll ask for.",
  };
}

export default function EcolabelSelectorPage() {
  const [recAnswers, setRecAnswers] = useState<Record<string, string>>({});
  const [readyAnswers, setReadyAnswers] = useState<(number | null)[]>(
    new Array(READY_QUESTIONS.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);

  const setRec = (id: string, key: string) =>
    setRecAnswers((prev) => ({ ...prev, [id]: key }));

  const setReady = (index: number, value: number) =>
    setReadyAnswers((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });

  const allRecAnswered = REC_QUESTIONS.every((q) => recAnswers[q.id]);
  const allReadyAnswered = readyAnswers.every((a) => a !== null);
  const allAnswered = allRecAnswered && allReadyAnswered;

  const familyKey = (recAnswers.claim as FamilyKey) || "organic";
  const family = FAMILIES[familyKey];
  const examples = recommendedExamples(
    familyKey,
    recAnswers.product || "",
    recAnswers.market || ""
  );

  const rawScore = readyAnswers.reduce((s: number, a) => s + (a || 0), 0);
  const maxScore = READY_QUESTIONS.length * 2;
  const readiness = Math.round((rawScore / maxScore) * 100);
  const band = readinessBand(readiness);

  // Weakest area = lowest-scored readiness answer (first one on a tie).
  let weakestIndex = 0;
  let weakestValue = 3;
  readyAnswers.forEach((a, i) => {
    const v = a ?? 0;
    if (v < weakestValue) {
      weakestValue = v;
      weakestIndex = i;
    }
  });
  const weakest = READY_QUESTIONS[weakestIndex];

  const handleSubmit = () => {
    if (!allAnswered) return;
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    analytics.track("assessment_completed", {
      label: "ecolabel_selector",
      family: familyKey,
      readiness,
      readiness_level: band.level,
    });
  };

  const handleReset = () => {
    setRecAnswers({});
    setReadyAnswers(new Array(READY_QUESTIONS.length).fill(null));
    setShowResults(false);
  };

  // --- Results view ---------------------------------------------------------
  if (showResults) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16">
        <nav className="mb-8">
          <Link
            href="/tools"
            className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>{" "}
            Back to Tools
          </Link>
        </nav>

        {/* Recommended family */}
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
            Your best-fit ecolabel family
          </p>
          <div
            className="inline-flex items-center justify-center px-6 py-2 rounded-full text-white text-lg font-bold mb-3"
            style={{ backgroundColor: ACCENT }}
          >
            {family.name}
          </div>
          <p className="text-sm text-gray-500 mb-3">{family.isoType}</p>
          <p className="text-gray-600 max-w-xl mx-auto">{family.why}</p>
        </div>

        {/* Concrete labels to look at */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="font-semibold text-gray-900 mb-2">
            Labels to look at first
          </h2>
          <p className="text-gray-700 mb-1">{examples}</p>
          <p className="text-sm text-gray-500">
            Tuned to what you make and where you sell. Before committing, confirm
            your specific buyers recognise and require the label — recognition
            varies by market and channel.
          </p>
        </div>

        {/* Readiness score */}
        <div className="text-center mb-8">
          <div
            className="inline-flex items-center justify-center w-24 h-24 rounded-full text-white text-2xl font-bold mb-4"
            style={{ backgroundColor: readiness >= 70 ? GREEN : ACCENT }}
          >
            {readiness}%
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Certification readiness: {band.level}
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">{band.summary}</p>
        </div>

        {/* Weakest area + next step */}
        <div
          className="rounded-lg p-6 mb-8 text-white"
          style={{ backgroundColor: ACCENT }}
        >
          <h2 className="font-semibold mb-2">Your weakest area — fix this next</h2>
          <p className="text-white/85 text-sm mb-3">
            <span className="font-medium text-white">{weakest.q}</span>
          </p>
          <p className="text-white/85 text-sm">{weakest.gap}</p>
        </div>

        {/* Readiness breakdown */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="font-semibold text-gray-900 mb-4">
            Your readiness answers
          </h2>
          <div className="space-y-3">
            {READY_QUESTIONS.map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-sm">
                <span
                  className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs ${
                    readyAnswers[i] === 2
                      ? "bg-[#4AA88C]"
                      : readyAnswers[i] === 1
                      ? "bg-amber-500"
                      : "bg-gray-400"
                  }`}
                >
                  {readyAnswers[i] === 2 ? "✓" : readyAnswers[i] === 1 ? "~" : "✗"}
                </span>
                <span className="text-gray-600">{item.q}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Take-it-with-you download */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="font-semibold text-gray-900 mb-2">
            Take the readiness checklist with you
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Get the Ecolabel Readiness Checklist — the documents and data you
            need before you apply (with a live self-scoring sheet), a
            which-family guide, and the ISO Type I/II/III explainer. Drop your
            email and download it now.
          </p>
          <GatedDownload
            feature="ecolabel-checklist"
            fileUrl="/downloads/ecolabel-readiness-checklist.xlsx"
            fileName="Ecolabel-Readiness-Checklist.xlsx"
            buttonLabel="Get the checklist"
            downloadLabel="Download the checklist (.xlsx)"
          />
        </div>

        {/* Funnel CTA */}
        <div className="flex flex-col gap-4">
          <Link
            href="/signup?from=ecolabel-selector&stack=1"
            className="text-white px-6 py-3 rounded-md font-medium hover:bg-[#3d8f77] text-center"
            style={{ backgroundColor: GREEN }}
          >
            Start Your Baseline — Free Plan →
          </Link>
          <div className="flex gap-4">
            <Link
              href="/articles/the-different-types-of-ecolabels"
              className="flex-1 text-center border border-gray-300 text-gray-700 px-6 py-3 rounded font-semibold hover:bg-gray-50 transition-colors"
            >
              Compare ecolabel types
            </Link>
            <button
              onClick={handleReset}
              className="flex-1 text-center border border-gray-300 text-gray-700 px-6 py-3 rounded font-semibold hover:border-gray-400"
            >
              Retake
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-4">
          The free plan includes the full 8-domain tracker, CSV exports, and
          multi-site support — the baseline data every certification path needs.
        </p>
      </div>
    );
  }

  // --- Questions view -------------------------------------------------------
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <nav className="mb-8">
        <Link
          href="/tools"
          className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>{" "}
          Back to Tools
        </Link>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-full text-white flex items-center justify-center font-bold"
            style={{ backgroundColor: ACCENT }}
          >
            ✓
          </div>
          <span className="text-sm text-gray-500">Ecolabel & Certification</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Ecolabel Selector & Readiness Check
        </h1>
        <p className="text-gray-600">
          Two answers in one short tool: which ecolabel family fits your product,
          and how ready you actually are to get certified.
        </p>
      </header>

      {/* Part 1: recommendation */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">
          1. Find your ecolabel family
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Three quick questions about what you make and who you sell to.
        </p>
        <div className="space-y-6">
          {REC_QUESTIONS.map((q) => (
            <div key={q.id} className="bg-gray-50 rounded-lg p-6">
              <p className="font-medium text-gray-900 mb-4">{q.label}</p>
              <div className="grid gap-2">
                {q.options.map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => setRec(q.id, opt.key)}
                    className={`text-left py-2 px-4 rounded font-medium text-sm transition-colors ${
                      recAnswers[q.id] === opt.key
                        ? "text-white"
                        : "bg-white border border-gray-300 text-gray-700 hover:border-[#5B4A9E]"
                    }`}
                    style={
                      recAnswers[q.id] === opt.key
                        ? { backgroundColor: ACCENT }
                        : undefined
                    }
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Part 2: readiness */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">
          2. Check your certification readiness
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Yes / Partially / No — honest answers give you an honest score.
        </p>
        <div className="space-y-6">
          {READY_QUESTIONS.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <p className="font-medium text-gray-900 mb-4">
                {index + 1}. {item.q}
              </p>
              <div className="flex gap-3">
                {options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setReady(index, option.value)}
                    className={`flex-1 py-2 px-4 rounded font-medium transition-colors ${
                      readyAnswers[index] === option.value
                        ? "bg-[#5B4A9E] text-white"
                        : "bg-white border border-gray-300 text-gray-700 hover:border-[#5B4A9E]"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8">
        <button
          onClick={handleSubmit}
          disabled={!allAnswered}
          className={`w-full py-3 rounded font-semibold transition-colors ${
            allAnswered
              ? "text-white hover:bg-[#3d8f76]"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
          style={allAnswered ? { backgroundColor: GREEN } : undefined}
        >
          {allAnswered
            ? "See my ecolabel match & readiness score"
            : "Answer every question to see your results"}
        </button>
      </div>
    </div>
  );
}
