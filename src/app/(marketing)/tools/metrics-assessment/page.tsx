"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  "Do you track energy consumption (electricity, gas, fuel) at least monthly?",
  "Do you track water usage at least monthly?",
  "Do you track material inputs and their costs?",
  "Do you know your waste volumes and disposal costs?",
  "Can you calculate cost-per-unit for your main outputs?",
  "Do you have documented methodology for how you measure things?",
  "Could you answer a buyer's sustainability questionnaire within a week?",
  "Do you have at least 12 months of historical data?",
  "Do you know how your resource efficiency compares to industry benchmarks?",
  "Is your data stored in a way that someone else could audit it?",
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
      summary: "You're operating with limited visibility. Building a baseline should be your immediate priority.",
      recommendation: "Start by tracking one resource consistently — energy is usually the easiest. Get 3 months of data before expanding.",
      color: "#3D2E7C",
    };
  } else if (score <= 12) {
    return {
      level: "Partial capability",
      summary: "You have some visibility but significant gaps remain. Buyers or auditors would find holes.",
      recommendation: "Identify which data gaps would hurt you most in a buyer questionnaire. Close those first.",
      color: "#5B4A9E",
    };
  } else if (score <= 17) {
    return {
      level: "Solid foundation",
      summary: "You have good visibility into your operation. Focus on documentation and benchmarking.",
      recommendation: "Ensure your methodology is documented and your data is audit-ready. Then compare against industry benchmarks.",
      color: "#4AA88C",
    };
  } else {
    return {
      level: "Strong",
      summary: "Your baseline is solid. You're ready to use this visibility to find efficiency opportunities.",
      recommendation: "Move to Stack 2: Efficiency. Use your baseline data to identify where you're leaking value.",
      color: "#4AA88C",
    };
  }
}

export default function MetricsAssessmentPage() {
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
            href="/framework/stack-1-metrics"
            className="flex-1 text-center bg-[#3D2E7C] text-white px-6 py-3 rounded font-semibold hover:bg-[#2d2260] transition-colors"
          >
            Learn more about Stack 1 →
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
          <div className="w-10 h-10 rounded-full bg-[#3D2E7C] text-white flex items-center justify-center font-bold">
            1
          </div>
          <span className="text-sm text-gray-500">Stack 1</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Metrics Assessment</h1>
        <p className="text-gray-600">Can you see clearly? Evaluate your visibility and measurement capability.</p>
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
                      ? 'bg-[#3D2E7C] text-white'
                      : 'bg-white border border-gray-300 text-gray-700 hover:border-[#3D2E7C]'
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
