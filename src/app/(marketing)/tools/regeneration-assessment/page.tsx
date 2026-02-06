"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  "Can you document your sustainability practices with evidence (not just claims)?",
  "Do you have any certifications relevant to your market (ISO, B Corp, organic, industry-specific)?",
  "Are you actively pursuing any new certifications?",
  "Do you command premium pricing compared to competitors? Can you attribute it to your practices?",
  "Have you won business specifically because of your sustainability credentials?",
  "Do your customers or partners recognize your differentiation?",
  "Can you articulate your sustainability story in a way that resonates with buyers?",
  "Do you have a proof portfolio (documented evidence of your operational improvements)?",
  "Are you positioned for where your market is heading, not just where it is now?",
  "Is your competitive advantage based on operational reality or marketing claims?",
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
      summary: "You don't yet have the operational proof to support premium positioning. Build the foundation first.",
      recommendation: "Stack 5 requires Stacks 1-4. You can't position what you haven't built. Focus on building operational capability before market positioning.",
      color: "#B8ADE3",
    };
  } else if (score <= 12) {
    return {
      level: "Partial capability",
      summary: "You have some operational proof but haven't translated it into market advantage. There's a gap between what you do and what the market sees.",
      recommendation: "Build a proof portfolio documenting your Stacks 1-4 work. Identify one certification that would open doors in your market.",
      color: "#B8ADE3",
    };
  } else if (score <= 17) {
    return {
      level: "Solid foundation",
      summary: "You're capturing some market value from your practices. Focus on expanding recognition and pursuing higher-value positioning.",
      recommendation: "Look for premium partnerships that require your credentials. Position for where your market is heading, not just where it is.",
      color: "#4AA88C",
    };
  } else {
    return {
      level: "Strong",
      summary: "You're successfully turning operational excellence into market advantage. Your positioning is based on proof, not claims.",
      recommendation: "Keep the flywheel spinning: reinvest premium returns into further operational improvements. Stay ahead of where standards are heading.",
      color: "#4AA88C",
    };
  }
}

export default function RegenerationAssessmentPage() {
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
            href="/framework/stack-5-regeneration"
            className="flex-1 text-center bg-[#B8ADE3] text-white px-6 py-3 rounded font-semibold hover:bg-[#a89dd3] transition-colors"
          >
            Learn more about Stack 5 →
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
          <div className="w-10 h-10 rounded-full bg-[#B8ADE3] text-white flex items-center justify-center font-bold">
            5
          </div>
          <span className="text-sm text-gray-500">Stack 5</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Regeneration Assessment</h1>
        <p className="text-gray-600">Are you compounding advantage? Evaluate your positioning and certification readiness.</p>
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
                      ? 'bg-[#B8ADE3] text-white'
                      : 'bg-white border border-gray-300 text-gray-700 hover:border-[#B8ADE3]'
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
