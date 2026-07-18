"use client";

import { useState } from "react";
import Link from "next/link";
import { analytics } from "@/lib/analytics";
import GatedDownload from "@/components/marketing/GatedDownload";

const ACCENT = "#3D2E7C"; // Stack 1 / ESG & Core Metrics
const GREEN = "#4AA88C"; // baseline funnel CTA

// Real questions pulled from the branded Scope 3 Supplier Readiness Scorecard
// (v1.4) workbook — 20 Yes/Partial/No questions across four sections.
const SECTIONS = [
  {
    name: "Data Availability",
    nextStep:
      "Start collecting the basics: pull 12 months of utility bills and log your electricity, fuel, and waste figures in one place. You can't report what you don't measure.",
    questions: [
      "Do you track your annual electricity consumption (kWh)?",
      "Do you track fuel consumption for company vehicles?",
      "Can you provide 12+ months of utility bills (electricity, gas, water)?",
      "Do you track waste generation and recycling rates?",
      "Do you know your direct greenhouse gas emissions (Scope 1 & 2)?",
    ],
  },
  {
    name: "Documentation & Policies",
    nextStep:
      "Write down what you already do. A short environmental policy, a health & safety policy, and an ethics/anti-corruption statement cover the baseline most buyers ask for.",
    questions: [
      "Do you have a documented environmental policy?",
      "Do you have health & safety policies documented?",
      "Do you have an ethics/anti-corruption policy?",
      "Can you provide valid ISO certifications (14001, 45001, etc.) if you have them?",
      "Do you track workforce diversity metrics (aggregate only)?",
    ],
  },
  {
    name: "Response Capacity",
    nextStep:
      "Set yourself up to respond fast: create one centralised folder for sustainability documents and name the person who owns questionnaire responses. Organisation is what turns a 5-day scramble into a 2-hour reply.",
    questions: [
      "Have you responded to a sustainability questionnaire before?",
      "Can someone dedicate 2-5 hours to respond to customer requests?",
      "Do you have a centralized folder for sustainability documents?",
      "Can you describe your supply chain and key suppliers?",
      "Do you understand basic GHG emissions terminology (Scope 1/2/3)?",
    ],
  },
  {
    name: "Strategic Preparedness",
    nextStep:
      "Get ahead of the requests: find out which of your customers fall under CSRD, brief your leadership on what's coming, and decide how proactive you want to be. Suppliers who anticipate win the business.",
    questions: [
      "Do you know which of your customers are subject to CSRD?",
      "Have you received sustainability data requests in the past 12 months?",
      "Do you have budget for sustainability reporting tools (€50-500/month)?",
      "Is your leadership aware of increasing sustainability requirements?",
      "Would you be willing to share sustainability data publicly (as a competitive advantage)?",
    ],
  },
] as const;

const ALL_QUESTIONS = SECTIONS.flatMap((section, sectionIndex) =>
  section.questions.map((text) => ({ text, sectionIndex }))
);

const MAX_SCORE = ALL_QUESTIONS.length * 2; // 40

const options = [
  { label: "Yes", value: 2 },
  { label: "Partially", value: 1 },
  { label: "No", value: 0 },
];

function getResult(score: number) {
  const pct = Math.round((score / MAX_SCORE) * 100);
  if (score <= 13) {
    return {
      level: "Not yet ready",
      summary:
        "If a buyer sent a Scope 3 questionnaire tomorrow, you'd be scrambling. The good news: the gaps are visibility gaps, and those are the fastest to close.",
      recommendation:
        "Don't try to fix everything at once. Start tracking your core metrics — electricity, fuel, and waste — so you have numbers to report. Everything else builds on that baseline.",
      color: "#C0607A",
      pct,
    };
  } else if (score <= 24) {
    return {
      level: "Building readiness",
      summary:
        "You've got some pieces in place but you'd still be pulling documents together under pressure. You can respond — just not quickly or confidently yet.",
      recommendation:
        "Focus on your weakest section below, then get your documents into one place. The difference between a prepared supplier and a scrambling one is usually organisation, not effort.",
      color: ACCENT,
      pct,
    };
  } else if (score <= 33) {
    return {
      level: "Nearly there",
      summary:
        "You could answer most buyer requests today. A few gaps remain, but you're clearly ahead of most suppliers in your position.",
      recommendation:
        "Close the remaining gaps in your weakest section and turn your ad-hoc responses into a repeatable baseline. That's what lets you answer the next request in hours, not days.",
      color: GREEN,
      pct,
    };
  } else {
    return {
      level: "Response-ready",
      summary:
        "You have the data, the documents, and the capacity to respond fast. Scope 3 requests are an opportunity for you, not a threat.",
      recommendation:
        "Make readiness a competitive edge: keep your baseline current so every new questionnaire is a quick, professional reply that wins you trust — and business — over less-prepared competitors.",
      color: GREEN,
      pct,
    };
  }
}

export default function Scope3ReadinessPage() {
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(ALL_QUESTIONS.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionIndex: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = value;
    setAnswers(newAnswers);
  };

  const allAnswered = answers.every((a) => a !== null);
  const score = answers.reduce((sum: number, a) => sum + (a || 0), 0);
  const result = getResult(score);

  // Per-section scoring so we can surface the weakest area and its next step.
  const sectionScores = SECTIONS.map((section, sectionIndex) => {
    const indices = ALL_QUESTIONS.reduce<number[]>((acc, q, i) => {
      if (q.sectionIndex === sectionIndex) acc.push(i);
      return acc;
    }, []);
    const raw = indices.reduce((sum, i) => sum + (answers[i] || 0), 0);
    const max = indices.length * 2;
    return {
      name: section.name,
      nextStep: section.nextStep,
      raw,
      max,
      pct: Math.round((raw / max) * 100),
    };
  });

  const weakest = sectionScores.reduce((lowest, s) =>
    s.pct < lowest.pct ? s : lowest
  );

  const handleSubmit = () => {
    if (allAnswered) {
      setShowResults(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      analytics.track("assessment_completed", {
        label: "scope3_readiness",
        score,
        result_level: result.level,
      });
    }
  };

  const handleReset = () => {
    setAnswers(new Array(ALL_QUESTIONS.length).fill(null));
    setShowResults(false);
  };

  if (showResults) {
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

        <div className="text-center mb-8">
          <div
            className="inline-flex items-center justify-center w-24 h-24 rounded-full text-white text-2xl font-bold mb-4"
            style={{ backgroundColor: result.color }}
          >
            {result.pct}%
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{result.level}</h1>
          <p className="text-gray-600">{result.summary}</p>
          <p className="text-sm text-gray-400 mt-2">
            Readiness score: {score}/{MAX_SCORE}
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="font-semibold text-gray-900 mb-2">Recommendation</h2>
          <p className="text-gray-600">{result.recommendation}</p>
        </div>

        {/* Per-section breakdown */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="font-semibold text-gray-900 mb-4">
            How you scored by section
          </h2>
          <div className="space-y-3">
            {sectionScores.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-gray-800">{s.name}</span>
                  <span className="text-gray-500">{s.pct}%</span>
                </div>
                <div className="h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${s.pct}%`,
                      backgroundColor:
                        s.name === weakest.name ? "#C0607A" : ACCENT,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weakest area + next step */}
        <div
          className="rounded-lg p-6 mb-8 text-white"
          style={{ backgroundColor: ACCENT }}
        >
          <p className="text-sm uppercase tracking-wide text-white/70 mb-1">
            Your weakest area
          </p>
          <h2 className="font-semibold text-lg mb-2">{weakest.name}</h2>
          <p className="text-white/85 text-sm">{weakest.nextStep}</p>
        </div>

        {/* Your answers */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="font-semibold text-gray-900 mb-4">Your answers</h2>
          <div className="space-y-3">
            {ALL_QUESTIONS.map((q, i) => (
              <div key={i} className="flex items-start gap-3 text-sm">
                <span
                  className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs ${
                    answers[i] === 2
                      ? "bg-[#4AA88C]"
                      : answers[i] === 1
                      ? "bg-amber-500"
                      : "bg-gray-400"
                  }`}
                >
                  {answers[i] === 2 ? "✓" : answers[i] === 1 ? "~" : "✗"}
                </span>
                <span className="text-gray-600">{q.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Take-it-with-you download */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="font-semibold text-gray-900 mb-2">
            Take the scorecard with you
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Get the full Scope 3 Supplier Readiness Scorecard — the branded
            workbook to keep, with all 20 questions, per-section scoring, and your
            next-step logic built in. Drop your email and download it now.
          </p>
          <GatedDownload
            feature="scope3-scorecard"
            fileUrl="/downloads/scope-3-supplier-readiness-scorecard.xlsx"
            fileName="Scope-3-Supplier-Readiness-Scorecard.xlsx"
            buttonLabel="Get the scorecard"
            downloadLabel="Download the scorecard (.xlsx)"
          />
        </div>

        {/* Funnel CTA */}
        <div className="flex flex-col gap-4">
          <Link
            href="/signup?from=scope3-readiness&stack=1"
            className="text-white px-6 py-3 rounded-md font-medium hover:bg-[#3d8f77] text-center"
            style={{ backgroundColor: GREEN }}
          >
            Start Your Baseline — Free Plan →
          </Link>
          <p className="text-center text-sm text-gray-600">
            Start tracking, respond to buyers quickly, and build the baseline that
            powers better decisions.
          </p>
          <div className="flex gap-4">
            <Link
              href="/framework/stack-1-metrics"
              className="flex-1 text-center border border-gray-300 text-gray-700 px-6 py-3 rounded font-semibold hover:bg-gray-50 transition-colors"
            >
              Learn about Stack 1
            </Link>
            <button
              onClick={handleReset}
              className="flex-1 text-center border border-gray-300 text-gray-700 px-6 py-3 rounded font-semibold hover:border-gray-400"
            >
              Retake Scorecard
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-4">
          The free plan includes the full 8-domain tracker, CSV exports, and
          multi-site support.
        </p>
      </div>
    );
  }

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

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-full text-white flex items-center justify-center font-bold"
            style={{ backgroundColor: ACCENT }}
          >
            1
          </div>
          <span className="text-sm text-gray-500">Stack 1</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Scope 3 Supplier Readiness Scorecard
        </h1>
        <p className="text-gray-600">
          Your buyers are starting to ask for Scope 3 and ESG data. Answer 20
          quick questions to find out how ready you are to respond — and get your
          single most important next step.
        </p>
      </header>

      <div className="space-y-10">
        {SECTIONS.map((section, sectionIndex) => {
          const offset = ALL_QUESTIONS.findIndex(
            (q) => q.sectionIndex === sectionIndex
          );
          return (
            <div key={section.name}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Section {sectionIndex + 1}
                </span>
                <span
                  className="text-sm font-semibold"
                  style={{ color: ACCENT }}
                >
                  {section.name}
                </span>
              </div>
              <div className="space-y-6">
                {section.questions.map((question, qIndex) => {
                  const index = offset + qIndex;
                  return (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <p className="font-medium text-gray-900 mb-4">
                        {index + 1}. {question}
                      </p>
                      <div className="flex gap-3">
                        {options.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => handleAnswer(index, option.value)}
                            className={`flex-1 py-2 px-4 rounded font-medium transition-colors ${
                              answers[index] === option.value
                                ? "text-white"
                                : "bg-white border border-gray-300 text-gray-700 hover:border-[#3D2E7C]"
                            }`}
                            style={
                              answers[index] === option.value
                                ? { backgroundColor: ACCENT }
                                : undefined
                            }
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8">
        <button
          onClick={handleSubmit}
          disabled={!allAnswered}
          className={`w-full py-3 rounded font-semibold transition-colors ${
            allAnswered
              ? "text-white"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
          style={allAnswered ? { backgroundColor: GREEN } : undefined}
        >
          {allAnswered
            ? "See My Readiness Score"
            : `Answer all questions (${
                answers.filter((a) => a !== null).length
              }/${ALL_QUESTIONS.length})`}
        </button>
      </div>
    </div>
  );
}
