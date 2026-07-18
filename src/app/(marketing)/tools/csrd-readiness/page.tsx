"use client";

import { useState } from "react";
import Link from "next/link";
import { analytics } from "@/lib/analytics";
import GatedDownload from "@/components/marketing/GatedDownload";

const ACCENT = "#3D2E7C"; // Stack 1 / ESG & Core Metrics
const GREEN = "#4AA88C"; // baseline funnel CTA

// Real questions pulled from the branded CSRD Readiness Scorecard (v1.0)
// workbook — 20 Yes/Partial/No questions across four sections mapped to the
// CSRD/VSME reporting journey.
const SECTIONS = [
  {
    name: "CSRD Applicability & Timeline",
    nextStep:
      "Nail down whether — and when — CSRD applies to you. Check your size thresholds and your buyers' status, then brief leadership. You can't plan a report until you know your deadline.",
    questions: [
      "Do you know if CSRD applies to your company?",
      "Have you identified your reporting deadline?",
      "Does your company have >250 employees OR >€50M revenue OR >€25M assets?",
      "Are you part of a value chain for a CSRD-reporting company?",
      "Have you communicated CSRD requirements to leadership?",
    ],
  },
  {
    name: "Data Foundation & Systems",
    nextStep:
      "Build your data spine first. Start tracking energy, water, waste, and workforce figures now, and gather 12 months of history — the ESRS environmental and social datapoints all sit on top of this.",
    questions: [
      "Do you track energy consumption (electricity, gas, fuel)?",
      "Do you track water usage and waste generation?",
      "Do you have 12+ months of environmental data available?",
      "Can you collect Scope 3 data from suppliers?",
      "Do you track workforce metrics (employees, contractors, safety)?",
    ],
  },
  {
    name: "Materiality Assessment Readiness",
    nextStep:
      "Get ready for double materiality. Map your stakeholders and value chain, and work out which ESRS topics actually apply to you — not all 12 will. Block out the hours; this is the step first-timers underestimate.",
    questions: [
      "Have you identified your key stakeholders?",
      "Can you assess impacts on environment, people, and economy?",
      "Do you understand which ESRS topics apply to your business?",
      "Have you documented your value chain (upstream and downstream)?",
      "Can you dedicate 20+ hours to complete materiality assessment?",
    ],
  },
  {
    name: "Organizational Capacity",
    nextStep:
      "Put a name and a budget behind the project. Designate a CSRD owner, secure cross-functional buy-in from finance, operations, and HR, and plan for the assurance requirements coming in 2-3 years.",
    questions: [
      "Is someone designated as the CSRD project owner?",
      "Do you have budget for CSRD (tools, training, or consulting)?",
      "Can your team dedicate 50-100 hours for the first report?",
      "Do you have buy-in from finance, operations, and HR teams?",
      "Are you prepared for external assurance/audit in 2-3 years?",
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
      level: "Early stage",
      summary:
        "CSRD feels far off, but the timelines move fast and the data takes longest to build. Starting now is what keeps your first report from becoming a six-month emergency.",
      recommendation:
        "Confirm whether and when CSRD applies to you, then start capturing environmental and workforce data immediately. Baselines need time to accumulate — everything else can follow.",
      color: "#C0607A",
      pct,
    };
  } else if (score <= 24) {
    return {
      level: "Foundations forming",
      summary:
        "You understand what's coming and have started preparing, but there are real gaps between where you are and an audit-ready report.",
      recommendation:
        "Prioritise your weakest section below. For most companies at this stage that's either the materiality assessment or the underlying data — tackle whichever is holding you back first.",
      color: ACCENT,
      pct,
    };
  } else if (score <= 33) {
    return {
      level: "On track",
      summary:
        "You have the data, the awareness, and the organisational backing to produce a CSRD report. A few gaps remain, but you're clearly ahead of most first-time reporters.",
      recommendation:
        "Close the remaining gaps in your weakest section and turn your scattered preparation into a repeatable reporting baseline — that's what makes year two far easier than year one.",
      color: GREEN,
      pct,
    };
  } else {
    return {
      level: "Report-ready",
      summary:
        "You have the systems, the materiality clarity, and the capacity to report with confidence. CSRD is a process you can run, not a crisis to survive.",
      recommendation:
        "Keep your baseline current and your value-chain data flowing so each reporting cycle is a refresh, not a rebuild — and use that readiness as a signal of quality to buyers and investors.",
      color: GREEN,
      pct,
    };
  }
}

export default function CsrdReadinessPage() {
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
        label: "csrd_readiness",
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
            Your focus area
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
            Get the full CSRD Readiness Scorecard — the branded workbook to keep,
            with all 20 questions, per-section scoring, and your next-step logic
            built in. Drop your email and download it now.
          </p>
          <GatedDownload
            feature="csrd-scorecard"
            fileUrl="/downloads/csrd-readiness-scorecard.xlsx"
            fileName="CSRD-Readiness-Scorecard.xlsx"
            buttonLabel="Get the scorecard"
            downloadLabel="Download the scorecard (.xlsx)"
          />
        </div>

        {/* Funnel CTA */}
        <div className="flex flex-col gap-4">
          <Link
            href="/signup?from=csrd-readiness&stack=1"
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
          CSRD Readiness Scorecard
        </h1>
        <p className="text-gray-600">
          CSRD and VSME reporting is coming — for you or for your buyers. Answer
          20 quick questions to see how ready you are to report, which ESRS areas
          need attention, and your single most important next step.
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
