"use client";

import { useState } from "react";
import Link from "next/link";
import BaselineCTA from "@/components/marketing/BaselineCTA";
import { analytics } from "@/lib/analytics";

const questions = [
  {
    id: 1,
    question:
      "Do you have 12+ months of baseline data for energy, water, and waste?",
    stack: 1,
    options: [
      { text: "No — we don't track this systematically", score: 0 },
      { text: "We have some records but gaps and inconsistencies", score: 1 },
      { text: "Yes — documented, consistent, and audit-ready", score: 2 },
    ],
  },
  {
    id: 2,
    question:
      "If a buyer asked for your carbon footprint tomorrow, could you respond?",
    stack: 1,
    options: [
      { text: "No — we'd have to start from scratch", score: 0 },
      { text: "We could pull something together in a few weeks", score: 1 },
      { text: "Yes — we have the data ready to go", score: 2 },
    ],
  },
  {
    id: 3,
    question:
      "Do you know your top 3 operational cost leaks and their €/£ impact?",
    stack: 2,
    options: [
      { text: "No — we run on gut feel", score: 0 },
      { text: "We have suspicions but haven't quantified them", score: 1 },
      { text: "Yes — we've identified, measured, and prioritized them", score: 2 },
    ],
  },
  {
    id: 4,
    question:
      "Have you implemented efficiency improvements with measured ROI in the last 2 years?",
    stack: 2,
    options: [
      { text: "No", score: 0 },
      { text: "Some changes but we didn't measure the impact", score: 1 },
      { text: "Yes — with documented savings", score: 2 },
    ],
  },
  {
    id: 5,
    question: "What happens to your waste streams and byproducts?",
    stack: 3,
    options: [
      { text: "They're a cost — we pay to dispose of them", score: 0 },
      { text: "Some are reused but most are waste", score: 1 },
      { text: "We've turned major waste streams into revenue", score: 2 },
    ],
  },
  {
    id: 6,
    question:
      "How diversified are your revenue streams and buyer relationships?",
    stack: 4,
    options: [
      { text: "Heavily concentrated — 1-2 products, 1-2 buyers", score: 0 },
      {
        text: "Some diversification but still dependent on a few key relationships",
        score: 1,
      },
      { text: "Well diversified across products, markets, and buyers", score: 2 },
    ],
  },
  {
    id: 7,
    question:
      "Can you prove your sustainability claims with verified data and certifications?",
    stack: 5,
    options: [
      { text: "No — we make claims but can't back them up", score: 0 },
      { text: "Some documentation but not verified", score: 1 },
      {
        text: "Yes — third-party verified with recognized certifications",
        score: 2,
      },
    ],
  },
];

const stackInfo = [
  {
    stack: 1,
    name: "The Defensible Baseline",
    color: "#3D2E7C",
    assessmentLink: "/tools/metrics-assessment",
    description:
      "You need visibility into your operation before anything else. Without baseline data, every other improvement is guesswork.",
  },
  {
    stack: 2,
    name: "Operational Efficiency",
    color: "#5B4A9E",
    assessmentLink: "/tools/efficiency-assessment",
    description:
      "You have data but you're leaving money on the table. Time to find where your operation bleeds margin.",
  },
  {
    stack: 3,
    name: "Margin Recovery",
    color: "#7B6BB8",
    assessmentLink: "/tools/circularity-assessment",
    description:
      "You're efficient but not capturing full value. Your waste streams and byproducts could be revenue.",
  },
  {
    stack: 4,
    name: "Structural Resilience",
    color: "#9A8CD0",
    assessmentLink: "/tools/resilience-assessment",
    description:
      "You're creating value but you're fragile. Diversification protects everything you've built.",
  },
  {
    stack: 5,
    name: "The Compounding Engine",
    color: "#B8ADE3",
    assessmentLink: "/tools/regeneration-assessment",
    description:
      "You have the foundation — now prove it. Verified claims and certifications unlock premium positioning.",
  },
];

export default function DiagnosticQuiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const allAnswered = Object.keys(answers).length === questions.length;

  const handleSelect = (questionId: number, score: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }));
  };

  const calculateStackScores = () => {
    const scores: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    const maxScores: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    questions.forEach((q) => {
      maxScores[q.stack] += 2;
      if (answers[q.id] !== undefined) {
        scores[q.stack] += answers[q.id];
      }
    });

    return { scores, maxScores };
  };

  const getRecommendedStack = () => {
    const { scores, maxScores } = calculateStackScores();

    let lowestStack = 1;
    let lowestPct = Infinity;

    for (let s = 1; s <= 5; s++) {
      const pct = maxScores[s] > 0 ? scores[s] / maxScores[s] : 0;
      if (pct < lowestPct) {
        lowestPct = pct;
        lowestStack = s;
      }
    }

    return lowestStack;
  };

  const handleSubmit = () => {
    if (!allAnswered) return;

    const { scores } = calculateStackScores();
    const recommended = getRecommendedStack();

    analytics.track("assessment_completed", {
      label: "diagnostic_quiz",
      recommended_stack: recommended,
      stack_1_score: scores[1],
      stack_2_score: scores[2],
      stack_3_score: scores[3],
      stack_4_score: scores[4],
      stack_5_score: scores[5],
    });

    setShowResults(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const restart = () => {
    setAnswers({});
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (showResults) {
    const { scores, maxScores } = calculateStackScores();
    const recommended = getRecommendedStack();
    const result = stackInfo[recommended - 1];

    return (
      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6"
            style={{ backgroundColor: result.color }}
          >
            {result.stack}
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Start with Stack {result.stack}
          </h1>
          <h2 className="text-xl text-gray-600">{result.name}</h2>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <p className="text-gray-700 mb-6">{result.description}</p>
          <Link
            href={result.assessmentLink}
            className="inline-block bg-[#4AA88C] text-white px-6 py-3 rounded-md font-medium hover:bg-[#3d8f77] transition-colors"
          >
            Take the Stack {result.stack} Assessment →
          </Link>
        </div>

        {/* All stack scores */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Your scores across all 5 Stacks
          </h3>
          <div className="space-y-3">
            {stackInfo.map((s) => {
              const score = scores[s.stack];
              const max = maxScores[s.stack];
              const pct = max > 0 ? (score / max) * 100 : 0;

              return (
                <div key={s.stack}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-700">
                      Stack {s.stack}: {s.name}
                    </span>
                    <span className="text-gray-500">
                      {score}/{max}
                    </span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full">
                    <div
                      className="h-3 rounded-full transition-all duration-500"
                      style={{
                        width: `${pct}%`,
                        backgroundColor: s.color,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4 mb-8">
          <Link
            href="/signup"
            className="bg-[#4AA88C] text-white px-6 py-3 rounded-md font-medium hover:bg-[#3d8f77] text-center"
          >
            Start Your Baseline — Free Plan →
          </Link>
          <div className="flex gap-4">
            <Link
              href={result.assessmentLink}
              className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 text-center"
            >
              Stack {result.stack} Deep Dive
            </Link>
            <button
              onClick={restart}
              className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:border-gray-400"
            >
              Retake Quiz
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mb-12">
          The free plan includes the full 8-domain tracker, CSV exports, and
          multi-site support.
        </p>

        <BaselineCTA />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-4">
        <Link
          href="/tools"
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          ← Back to Tools
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Where Should You Start?
        </h1>
        <p className="text-gray-600">
          7 questions. 2 minutes. Find out which part of your operation needs
          attention first.
        </p>
      </div>

      {/* Questions */}
      <div className="space-y-8 mb-10">
        {questions.map((q, qIndex) => (
          <div
            key={q.id}
            className="border border-gray-200 rounded-lg p-6"
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              <span className="text-gray-400 mr-2">{qIndex + 1}.</span>
              {q.question}
            </h2>
            <div className="space-y-3">
              {q.options.map((option, oIndex) => {
                const isSelected = answers[q.id] === option.score;
                return (
                  <button
                    key={oIndex}
                    onClick={() => handleSelect(q.id, option.score)}
                    className={`w-full text-left p-4 border rounded-lg transition-colors ${
                      isSelected
                        ? "border-[#4AA88C] bg-[#4AA88C]/5"
                        : "border-gray-200 hover:border-[#4AA88C] hover:bg-gray-50"
                    }`}
                  >
                    {option.text}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Submit button */}
      <button
        onClick={handleSubmit}
        disabled={!allAnswered}
        className={`w-full py-4 rounded-md font-semibold text-lg transition-colors ${
          allAnswered
            ? "bg-[#4AA88C] text-white hover:bg-[#3d8f77] cursor-pointer"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        See My Results
      </button>
      {!allAnswered && (
        <p className="text-center text-sm text-gray-400 mt-2">
          Answer all 7 questions to see your results
        </p>
      )}
    </div>
  );
}
