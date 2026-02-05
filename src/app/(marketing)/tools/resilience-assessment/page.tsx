"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  "Do you know your single points of failure (one supplier, one customer, one key person)?",
  "What percentage of revenue comes from your top customer? (Yes = <30%, Partially = 30-50%, No = >50%)",
  "What percentage of key inputs come from a single supplier? (Yes = <30%, Partially = 30-50%, No = >50%)",
  "Do you have documented contingency plans for your top 3 risk scenarios?",
  "Have you stress-tested your operation against a realistic disruption scenario?",
  "Do you monitor external trends that could affect your business (regulations, market shifts, climate)?",
  "Could your operation continue if a key employee left tomorrow?",
  "Do you have backup suppliers identified for critical inputs?",
  "Have you recovered from a significant disruption in the past 3 years? (Yes = recovered quickly, Partially = recovered slowly, No = haven't faced one or didn't recover)",
  "Do you carry inventory or capacity buffer? (Yes = appropriate buffer, Partially = minimal, No = run lean with no slack)",
];

const options = [
  { label: "Yes", value: 2 },
  { label: "Partially", value: 1 },
  { label: "No", value: 0 },
];

function getResult(score: number) {
  if (score <= 6) {
    return {
      level: "Foundation needed",
      summary: "Your operation has significant vulnerabilities. A single disruption could cascade into serious problems.",
      recommendation: "Start by mapping your single points of failure. Know what could break you before it does. Don't skip Stacks 1-3.",
      color: "#9A8CD0",
    };
  } else if (score <= 12) {
    return {
      level: "Partial capability",
      summary: "You've identified some risks but lack systematic contingency planning. You'd survive a disruption, but it would hurt.",
      recommendation: "Build contingency plans for your top 3 risk scenarios. Identify backup suppliers for critical inputs.",
      color: "#9A8CD0",
    };
  } else if (score <= 17) {
    return {
      level: "Solid foundation",
      summary: "You have good risk awareness and some redundancy. Focus on stress-testing and early warning systems.",
      recommendation: "Run scenario models against real data. Build sensing mechanisms for external shifts that matter to you.",
      color: "#4AA88C",
    };
  } else {
    return {
      level: "Strong",
      summary: "Your operation can absorb shocks. You're ready to turn this operational foundation into market advantage.",
      recommendation: "Move to Stack 5: Regeneration. Use your proven resilience as a differentiator with customers and partners.",
      color: "#4AA88C",
    };
  }
}

export default function ResilienceAssessmentPage() {
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionIndex: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = value;
    setAnswers(newAnswers);
  };

  const allAnswered = answers.every((a) => a !== null);
  const score = answers.reduce((sum: number, a) => sum + (a || 0), 0);
  const result = getResult(score);

  const handleSubmit = () => {
    if (allAnswered) {
      setShowResults(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleReset = () => {
    setAnswers(new Array(questions.length).fill(null));
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16">
        <nav className="mb-8">
          <Link href="/tools" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Tools
          </Link>
        </nav>

        <div className="text-center mb-8">
          <div 
            className="inline-flex items-center justify-center w-20 h-20 rounded-full text-white text-2xl font-bold mb-4"
            style={{ backgroundColor: result.color }}
          >
            {score}/20
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{result.level}</h1>
          <p className="text-gray-600">{result.summary}</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="font-semibold text-gray-900 mb-2">Recommendation</h2>
          <p className="text-gray-600">{result.recommendation}</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="font-semibold text-gray-900 mb-4">Your answers</h2>
          <div className="space-y-3">
            {questions.map((q, i) => (
              <div key={i} className="flex items-start gap-3 text-sm">
                <span 
                  className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs ${
                    answers[i] === 2 ? 'bg-[#4AA88C]' : answers[i] === 1 ? 'bg-amber-500' : 'bg-gray-400'
                  }`}
                >
                  {answers[i] === 2 ? '✓' : answers[i] === 1 ? '~' : '✗'}
                </span>
                <span className="text-gray-600">{q}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/framework/stack-4-resilience"
            className="flex-1 text-center bg-[#9A8CD0] text-white px-6 py-3 rounded font-semibold hover:bg-[#8a7cc0] transition-colors"
          >
            Learn more about Stack 4 →
          </Link>
          <button
            onClick={handleReset}
            className="flex-1 text-center border border-gray-300 text-gray-700 px-6 py-3 rounded font-semibold hover:bg-gray-50 transition-colors"
          >
            Retake Assessment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <nav className="mb-8">
        <Link href="/tools" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Tools
        </Link>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#9A8CD0] text-white flex items-center justify-center font-bold">
            4
          </div>
          <span className="text-sm text-gray-500">Stack 4</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Resilience Assessment</h1>
        <p className="text-gray-600">Can you absorb shocks? Map your vulnerabilities and concentration risks.</p>
      </header>

      <div className="space-y-8">
        {questions.map((question, index) => (
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
                      ? 'bg-[#9A8CD0] text-white'
                      : 'bg-white border border-gray-300 text-gray-700 hover:border-[#9A8CD0]'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <button
          onClick={handleSubmit}
          disabled={!allAnswered}
          className={`w-full py-3 rounded font-semibold transition-colors ${
            allAnswered
              ? 'bg-[#4AA88C] text-white hover:bg-[#3d8f76]'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          {allAnswered ? 'See Results' : `Answer all questions (${answers.filter(a => a !== null).length}/${questions.length})`}
        </button>
      </div>
    </div>
  );
}
