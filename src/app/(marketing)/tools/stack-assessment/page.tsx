"use client";

import { useState } from "react";
import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

const questions = [
  {
    id: 1,
    question: "Do you know your operation's annual energy consumption, water usage, and waste volumes?",
    stack: 1,
    options: [
      { text: "No, we don't track this systematically", score: 0 },
      { text: "We have rough estimates", score: 1 },
      { text: "Yes, we track and review this data regularly", score: 2 },
    ],
  },
  {
    id: 2,
    question: "Can you calculate the carbon footprint of your main products or services?",
    stack: 1,
    options: [
      { text: "No, we wouldn't know where to start", score: 0 },
      { text: "We could estimate it with some work", score: 1 },
      { text: "Yes, we have calculated this", score: 2 },
    ],
  },
  {
    id: 3,
    question: "When a buyer asks for ESG data, how do you respond?",
    stack: 1,
    options: [
      { text: "Panic — we scramble to gather information", score: 0 },
      { text: "We can respond but it takes significant time", score: 1 },
      { text: "We have data ready and can respond quickly", score: 2 },
    ],
  },
  {
    id: 4,
    question: "Do you know where your operation loses the most money to inefficiency?",
    stack: 2,
    options: [
      { text: "No, we haven't analyzed this", score: 0 },
      { text: "We have suspicions but no data", score: 1 },
      { text: "Yes, we've identified and quantified our main leaks", score: 2 },
    ],
  },
  {
    id: 5,
    question: "Have you implemented energy or water efficiency improvements in the last 2 years?",
    stack: 2,
    options: [
      { text: "No", score: 0 },
      { text: "Some small changes", score: 1 },
      { text: "Yes, with measured ROI", score: 2 },
    ],
  },
  {
    id: 6,
    question: "What happens to your waste streams (crop residue, processing byproducts, etc.)?",
    stack: 3,
    options: [
      { text: "Disposed of — it's a cost center", score: 0 },
      { text: "Some is reused but most is waste", score: 1 },
      { text: "We've turned major waste streams into revenue or value", score: 2 },
    ],
  },
  {
    id: 7,
    question: "Do you have revenue from byproducts, secondary products, or circular practices?",
    stack: 3,
    options: [
      { text: "No", score: 0 },
      { text: "Minor revenue, not strategic", score: 1 },
      { text: "Yes, it's a meaningful part of our business", score: 2 },
    ],
  },
  {
    id: 8,
    question: "How diversified is your production or revenue?",
    stack: 4,
    options: [
      { text: "Heavily dependent on 1-2 products/buyers", score: 0 },
      { text: "Some diversification but still concentrated", score: 1 },
      { text: "Well-diversified across products, markets, or buyers", score: 2 },
    ],
  },
  {
    id: 9,
    question: "If your main market or product failed, could your operation survive?",
    stack: 4,
    options: [
      { text: "It would be catastrophic", score: 0 },
      { text: "We'd struggle but could adapt", score: 1 },
      { text: "We have alternatives that would sustain us", score: 2 },
    ],
  },
  {
    id: 10,
    question: "Do your operations improve themselves over time without constant management intervention?",
    stack: 5,
    options: [
      { text: "No, everything requires active management", score: 0 },
      { text: "Some systems are self-improving", score: 1 },
      { text: "Yes, we've built regenerative systems that compound", score: 2 },
    ],
  },
];

const stackInfo = [
  {
    stack: 1,
    name: "Core Metrics",
    color: "#3D2E7C",
    slug: "stack-1-metrics",
    headline: "Start with measurement",
    description: "You need to build your baseline before you can improve anything. Focus on tracking your core sustainability metrics: energy, water, waste, emissions. This data becomes the foundation for everything else.",
    nextStep: "Get our Core Metrics Starter Guide to begin tracking what matters.",
  },
  {
    stack: 2,
    name: "Operational Efficiency",
    color: "#5B4A9E",
    slug: "stack-2-efficiency",
    headline: "Fix the leaks",
    description: "You have baseline data — now use it. Identify where you're bleeding margin to inefficiency. Energy waste, water loss, process inefficiencies. Fix these before adding new initiatives.",
    nextStep: "Use the Margin Leak Audit Framework to find your biggest opportunities.",
  },
  {
    stack: 3,
    name: "Circular Value Creation",
    color: "#7B6BB8",
    slug: "stack-3-circularity",
    headline: "Turn waste into revenue",
    description: "Your operations are efficient — now look at what you're throwing away. Waste streams can become byproduct revenue. Cost centers can become profit centers.",
    nextStep: "Map your circular opportunities with the Value Opportunity Matrix.",
  },
  {
    stack: 4,
    name: "Adaptive Resilience",
    color: "#9A8CD0",
    slug: "stack-4-resilience",
    headline: "Design for volatility",
    description: "You've optimized and created circular value — now build resilience. Diversify production, markets, and revenue streams so no single failure can sink you.",
    nextStep: "Assess your vulnerabilities with the Resilience Portfolio Assessment.",
  },
  {
    stack: 5,
    name: "Regeneration",
    color: "#B8ADE3",
    slug: "stack-5-regenerative",
    headline: "Compound improvement",
    description: "You've built a resilient, efficient, circular operation. Now design systems that improve as they operate — true regenerative advantage.",
    nextStep: "Build your navigation capability with the Strategic Navigation Framework.",
  },
];

export default function StackAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResult = () => {
    // Calculate scores per stack
    const stackScores: Record<number, { score: number; max: number }> = {};
    
    questions.forEach((q, i) => {
      if (!stackScores[q.stack]) {
        stackScores[q.stack] = { score: 0, max: 0 };
      }
      stackScores[q.stack].max += 2;
      if (answers[i] !== undefined) {
        stackScores[q.stack].score += answers[i];
      }
    });

    // Find the lowest stack where score is below threshold
    for (let stack = 1; stack <= 5; stack++) {
      const data = stackScores[stack];
      if (data) {
        const percentage = data.score / data.max;
        if (percentage < 0.6) {
          return stack;
        }
      }
    }
    
    return 5; // All stacks solid, focus on regeneration
  };

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  if (showResults) {
    const resultStack = calculateResult();
    const result = stackInfo[resultStack - 1];

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
            Your focus: Stack {result.stack}
          </h1>
          <h2 className="text-xl text-gray-600 mb-2">{result.name}</h2>
          <p className="text-2xl font-semibold" style={{ color: result.color }}>
            {result.headline}
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <p className="text-gray-700 mb-6">{result.description}</p>
          <p className="font-medium text-gray-900">{result.nextStep}</p>
        </div>

        <div className="flex gap-4 mb-12">
          <Link
            href={`/framework/${result.slug}`}
            className="flex-1 bg-[#4AA88C] text-white px-6 py-3 rounded-md font-medium hover:bg-[#3d8f77] text-center"
          >
            Learn about Stack {result.stack}
          </Link>
          <button
            onClick={restart}
            className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:border-gray-400"
          >
            Retake Assessment
          </button>
        </div>

        <NewsletterSignup />
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion) / questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Stack Assessment</h1>
        <p className="text-gray-600">Find out where to focus your sustainability efforts.</p>
      </div>

      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-[#4AA88C] rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          {question.question}
        </h2>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.score)}
              className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-[#4AA88C] hover:bg-gray-50 transition-colors"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
