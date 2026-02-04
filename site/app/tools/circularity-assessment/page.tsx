"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  "Do you know all the physical outputs that leave your operation (waste, by-products, scrap)?",
  "Have you mapped where each output stream goes?",
  "Do you pay for disposal of anything that could have value?",
  "Have you explored whether anyone would buy what you throw away?",
  "Do you have equipment or space that sits idle more than 30% of the time?",
  "Have you monetized any by-product or waste stream in the past 2 years?",
  "Do you know businesses nearby that might need your outputs as their inputs?",
  "Do you recover any energy (heat, cooling) from your processes?",
  "Do you have data or knowledge you collect but don't use?",
  "Can you estimate the annual value of what leaves your system uncaptured?",
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
      summary: "Value is leaving your system and you don't have visibility into how much. Start by mapping your outputs.",
      recommendation: "Before capturing value, make sure Stacks 1-2 are solid. Then map every output stream and where it goes.",
      color: "#7B6BB8",
    };
  } else if (score <= 12) {
    return {
      level: "Partial capability",
      summary: "You've identified some opportunities but haven't systematically captured them. Value is still walking out the door.",
      recommendation: "Pick your highest-value output stream (biggest disposal cost or most obvious resale potential) and build one circular initiative.",
      color: "#7B6BB8",
    };
  } else if (score <= 17) {
    return {
      level: "Solid foundation",
      summary: "You're capturing some circular value. Focus on expanding to other streams and building ecosystem relationships.",
      recommendation: "Map potential symbiosis partners. Who needs what you have? What do you need that someone else discards?",
      color: "#4AA88C",
    };
  } else {
    return {
      level: "Strong",
      summary: "You're actively capturing circular value. Your operation is tight and capturing what it produces.",
      recommendation: "Move to Stack 4: Resilience. Your circular systems need to be robust against disruption to deliver long-term value.",
      color: "#4AA88C",
    };
  }
}

export default function CircularityAssessmentPage() {
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionIndex: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = value;
    setAnswers(newAnswers);
  };

  const allAnswered = answers.every((a) => a !== null);
  const score = answers.reduce((sum, a) => sum + (a || 0), 0);
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
            href="/framework/stack-3-circularity"
            className="flex-1 text-center bg-[#7B6BB8] text-white px-6 py-3 rounded font-semibold hover:bg-[#6a5aa3] transition-colors"
          >
            Learn more about Stack 3 →
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
          <div className="w-10 h-10 rounded-full bg-[#7B6BB8] text-white flex items-center justify-center font-bold">
            3
          </div>
          <span className="text-sm text-gray-500">Stack 3</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Circularity Assessment</h1>
        <p className="text-gray-600">Are you capturing value? Find what's leaving your system uncaptured.</p>
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
                      ? 'bg-[#7B6BB8] text-white'
                      : 'bg-white border border-gray-300 text-gray-700 hover:border-[#7B6BB8]'
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
