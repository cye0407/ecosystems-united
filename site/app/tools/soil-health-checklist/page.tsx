"use client";

import { useState } from "react";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";

const questions = [
  // Part 1: Management Practices (5 questions)
  {
    id: 1,
    category: "practices",
    question: "How often do you till or disturb your soil?",
    options: [
      { text: "Full tillage every season", score: 0 },
      { text: "Reduced tillage (fewer passes or strip-till)", score: 1 },
      { text: "No-till or minimal disturbance", score: 2 },
    ],
  },
  {
    id: 2,
    category: "practices",
    question: "How much of the year does your soil have living plant cover?",
    options: [
      { text: "Only during cash crop season (4-6 months)", score: 0 },
      { text: "Extended coverage with cover crops (6-9 months)", score: 1 },
      { text: "Year-round living roots when possible", score: 2 },
    ],
  },
  {
    id: 3,
    category: "practices",
    question: "How many different crop species are in your rotation?",
    options: [
      { text: "1-2 crops (e.g., corn-soy)", score: 0 },
      { text: "3-4 crops including cover crops", score: 1 },
      { text: "5+ species including diverse cover crop mixes", score: 2 },
    ],
  },
  {
    id: 4,
    category: "practices",
    question: "How do you approach fertilizer application?",
    options: [
      { text: "Standard rates based on general recommendations", score: 0 },
      { text: "Soil-test based with some adjustments", score: 1 },
      { text: "Precision application based on soil biology and tissue tests", score: 2 },
    ],
  },
  {
    id: 5,
    category: "practices",
    question: "How do you manage pests and diseases?",
    options: [
      { text: "Calendar-based or preventive chemical applications", score: 0 },
      { text: "Scouting-based IPM with reduced chemical use", score: 1 },
      { text: "Biological controls and diverse rotations as primary strategy", score: 2 },
    ],
  },
  // Part 2: Observable Indicators (5 questions)
  {
    id: 6,
    category: "indicators",
    question: "When you dig into your soil, what do you smell?",
    options: [
      { text: "Little smell, or sour/metallic odor", score: 0 },
      { text: "Mild earthy smell", score: 1 },
      { text: "Rich, pleasant earthy smell (like forest floor)", score: 2 },
    ],
  },
  {
    id: 7,
    category: "indicators",
    question: "How many earthworms do you typically find in a shovel of soil (top 6 inches)?",
    options: [
      { text: "0-2 earthworms", score: 0 },
      { text: "3-5 earthworms", score: 1 },
      { text: "6+ earthworms", score: 2 },
    ],
  },
  {
    id: 8,
    category: "indicators",
    question: "How does water infiltrate when it rains?",
    options: [
      { text: "Puddles and runoff, slow to absorb", score: 0 },
      { text: "Moderate infiltration, some puddling", score: 1 },
      { text: "Water soaks in quickly, minimal runoff", score: 2 },
    ],
  },
  {
    id: 9,
    category: "indicators",
    question: "What does your soil structure look like when you break apart a clod?",
    options: [
      { text: "Dense, blocky, or powdery—falls apart or stays in hard chunks", score: 0 },
      { text: "Some aggregates visible but inconsistent", score: 1 },
      { text: "Crumbly aggregates that hold together gently (like cottage cheese)", score: 2 },
    ],
  },
  {
    id: 10,
    category: "indicators",
    question: "Do you see white fungal threads (mycorrhizae) on roots or in soil?",
    options: [
      { text: "Rarely or never", score: 0 },
      { text: "Occasionally in some areas", score: 1 },
      { text: "Regularly visible, especially on cover crop roots", score: 2 },
    ],
  },
  // Part 3: Performance & Resilience (4 questions)
  {
    id: 11,
    category: "performance",
    question: "How do your crops perform during drought stress?",
    options: [
      { text: "Significant yield loss, visible stress early", score: 0 },
      { text: "Moderate stress, recovers with rain", score: 1 },
      { text: "Maintains relatively well, less stressed than neighbors", score: 2 },
    ],
  },
  {
    id: 12,
    category: "performance",
    question: "How has your fertilizer requirement changed over the past 5 years?",
    options: [
      { text: "Increasing to maintain yields", score: 0 },
      { text: "About the same", score: 1 },
      { text: "Decreasing while maintaining or improving yields", score: 2 },
    ],
  },
  {
    id: 13,
    category: "performance",
    question: "What's your soil organic matter trend?",
    options: [
      { text: "Declining or unknown", score: 0 },
      { text: "Stable", score: 1 },
      { text: "Increasing (documented through testing)", score: 2 },
    ],
  },
  {
    id: 14,
    category: "performance",
    question: "How quickly do crop residues break down after harvest?",
    options: [
      { text: "Slowly—residue still visible at planting", score: 0 },
      { text: "Moderate breakdown over winter", score: 1 },
      { text: "Rapid decomposition, residue well-incorporated by biology", score: 2 },
    ],
  },
];

const categoryLabels: Record<string, string> = {
  practices: "Management Practices",
  indicators: "Observable Indicators", 
  performance: "Performance & Resilience",
};

const getGrade = (percentage: number): { grade: string; color: string; label: string } => {
  if (percentage >= 85) return { grade: "A", color: "#22c55e", label: "Excellent" };
  if (percentage >= 70) return { grade: "B", color: "#84cc16", label: "Good" };
  if (percentage >= 55) return { grade: "C", color: "#eab308", label: "Developing" };
  if (percentage >= 40) return { grade: "D", color: "#f97316", label: "Needs Work" };
  return { grade: "F", color: "#ef4444", label: "Critical" };
};

const getRecommendations = (categoryScores: Record<string, { score: number; max: number }>) => {
  const recommendations: { priority: string; action: string; link?: string }[] = [];
  
  const practicesPercent = (categoryScores.practices?.score || 0) / (categoryScores.practices?.max || 1) * 100;
  const indicatorsPercent = (categoryScores.indicators?.score || 0) / (categoryScores.indicators?.max || 1) * 100;
  const performancePercent = (categoryScores.performance?.score || 0) / (categoryScores.performance?.max || 1) * 100;

  // Practices recommendations
  if (practicesPercent < 50) {
    recommendations.push({
      priority: "High",
      action: "Reduce tillage intensity. Even one fewer pass per season helps fungal networks establish.",
      link: "/articles/soil-health-business-case",
    });
    recommendations.push({
      priority: "High", 
      action: "Add cover crops. Start with a simple cereal rye after harvest—low cost, high impact.",
      link: "/articles/cover-crops-roi",
    });
  } else if (practicesPercent < 75) {
    recommendations.push({
      priority: "Medium",
      action: "Diversify your cover crop mix. Add a legume for nitrogen fixation and a brassica for deep rooting.",
    });
  }

  // Indicators recommendations
  if (indicatorsPercent < 50) {
    recommendations.push({
      priority: "High",
      action: "Your soil biology needs support. Focus on reducing disturbance and adding organic matter.",
    });
    recommendations.push({
      priority: "Medium",
      action: "Do a simple infiltration test monthly to track improvement. Pour a gallon of water and time absorption.",
    });
  } else if (indicatorsPercent < 75) {
    recommendations.push({
      priority: "Medium",
      action: "Consider mycorrhizal inoculants for high-value crops to boost fungal colonization.",
    });
  }

  // Performance recommendations  
  if (performancePercent < 50) {
    recommendations.push({
      priority: "High",
      action: "Track organic matter annually. This single metric predicts water holding capacity, nutrient cycling, and resilience.",
    });
  }
  
  if (recommendations.length === 0) {
    recommendations.push({
      priority: "Maintain",
      action: "Your soil biology is strong. Focus on documentation for market positioning and premium access.",
      link: "/framework/implementation",
    });
  }

  return recommendations;
};

export default function SoilHealthChecklist() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResults = () => {
    const categoryScores: Record<string, { score: number; max: number }> = {};
    let totalScore = 0;
    let totalMax = 0;

    questions.forEach((q, i) => {
      if (!categoryScores[q.category]) {
        categoryScores[q.category] = { score: 0, max: 0 };
      }
      categoryScores[q.category].max += 2;
      totalMax += 2;
      if (answers[i] !== undefined) {
        categoryScores[q.category].score += answers[i];
        totalScore += answers[i];
      }
    });

    const percentage = (totalScore / totalMax) * 100;
    const grade = getGrade(percentage);
    const recommendations = getRecommendations(categoryScores);

    return { categoryScores, totalScore, totalMax, percentage, grade, recommendations };
  };

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setShowEmailCapture(false);
    setEmailSubmitted(false);
  };

  if (showResults) {
    const results = calculateResults();

    return (
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6"
            style={{ backgroundColor: results.grade.color }}
          >
            {results.grade.grade}
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Soil Microbial Health: {results.grade.label}
          </h1>
          <p className="text-xl text-gray-600">
            Score: {results.totalScore} / {results.totalMax} ({Math.round(results.percentage)}%)
          </p>
        </div>

        {/* Category Breakdown */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="font-semibold text-gray-900 mb-4">Score Breakdown</h2>
          <div className="space-y-4">
            {Object.entries(results.categoryScores).map(([category, data]) => {
              const pct = (data.score / data.max) * 100;
              const catGrade = getGrade(pct);
              return (
                <div key={category}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">{categoryLabels[category]}</span>
                    <span className="font-medium" style={{ color: catGrade.color }}>
                      {data.score}/{data.max} ({Math.round(pct)}%)
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 rounded-full transition-all"
                      style={{ width: `${pct}%`, backgroundColor: catGrade.color }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recommendations */}
        <div className="mb-8">
          <h2 className="font-semibold text-gray-900 mb-4">Your Action Plan</h2>
          <div className="space-y-4">
            {results.recommendations.map((rec, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <span 
                    className={`text-xs font-medium px-2 py-1 rounded ${
                      rec.priority === "High" ? "bg-red-100 text-red-700" :
                      rec.priority === "Medium" ? "bg-yellow-100 text-yellow-700" :
                      "bg-green-100 text-green-700"
                    }`}
                  >
                    {rec.priority}
                  </span>
                  <div className="flex-1">
                    <p className="text-gray-700">{rec.action}</p>
                    {rec.link && (
                      <Link href={rec.link} className="text-[#4AA88C] text-sm hover:underline mt-1 inline-block">
                        Learn more →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Email Capture for Full Report */}
        {!emailSubmitted ? (
          <div className="bg-[#1a1a2e] rounded-lg p-6 mb-8 text-white">
            <h3 className="font-semibold mb-2">Get your full report + tracking template</h3>
            <p className="text-white/70 text-sm mb-4">
              We'll send you a detailed PDF report with your results, plus a tracking template 
              to monitor improvements over time.
            </p>
            {!showEmailCapture ? (
              <button
                onClick={() => setShowEmailCapture(true)}
                className="w-full bg-[#4AA88C] text-white px-4 py-3 rounded font-medium hover:bg-[#3d8f76] transition-colors"
              >
                Get Full Report →
              </button>
            ) : (
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#4AA88C]"
                />
                <button
                  onClick={() => setEmailSubmitted(true)}
                  className="w-full bg-[#4AA88C] text-white px-4 py-3 rounded font-medium hover:bg-[#3d8f76] transition-colors"
                >
                  Send My Report
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <p className="text-green-800 font-medium">✓ Report sent! Check your inbox.</p>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-4 mb-8">
          <Link
            href="/framework/implementation"
            className="flex-1 bg-[#4AA88C] text-white px-6 py-3 rounded-md font-medium hover:bg-[#3d8f77] text-center"
          >
            Implementation Guide
          </Link>
          <button
            onClick={restart}
            className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:border-gray-400"
          >
            Retake Assessment
          </button>
        </div>

        {/* Related Content */}
        <div className="border-t border-gray-200 pt-8">
          <h3 className="font-semibold text-gray-900 mb-4">Related Guides</h3>
          <div className="space-y-3">
            <Link href="/articles/soil-health-business-case" className="block p-4 border border-gray-200 rounded-lg hover:border-[#4AA88C] transition-colors">
              <span className="font-medium text-gray-900">Soil Health: The Business Case →</span>
              <span className="block text-sm text-gray-600">How healthy soil reduces costs and builds value</span>
            </Link>
            <Link href="/articles/cover-crops-roi" className="block p-4 border border-gray-200 rounded-lg hover:border-[#4AA88C] transition-colors">
              <span className="font-medium text-gray-900">Cover Crops: Investment and Returns →</span>
              <span className="block text-sm text-gray-600">Cost-benefit analysis for cover crop programs</span>
            </Link>
            <Link href="/articles/regenerative-agriculture-economics" className="block p-4 border border-gray-200 rounded-lg hover:border-[#4AA88C] transition-colors">
              <span className="font-medium text-gray-900">The Economics of Regenerative Agriculture →</span>
              <span className="block text-sm text-gray-600">Financial framework for transition decisions</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = (currentQuestion / questions.length) * 100;
  const currentCategory = categoryLabels[question.category];

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-8">
        <Link href="/tools" className="text-sm text-gray-500 hover:text-[#4AA88C] mb-4 inline-block">
          ← Back to Tools
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Soil Microbial Health Checklist</h1>
        <p className="text-gray-600">Assess your soil biology in 3 minutes. Get actionable recommendations.</p>
      </div>

      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>{currentCategory}</span>
          <span>Question {currentQuestion + 1} of {questions.length}</span>
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

      {/* Context hint */}
      <div className="text-sm text-gray-500 bg-gray-50 rounded-lg p-4">
        <strong>Why this matters:</strong>{" "}
        {question.category === "practices" && "Your management practices directly shape soil microbial communities. Small changes compound over time."}
        {question.category === "indicators" && "These visual signs reveal what's happening underground. Healthy biology shows itself."}
        {question.category === "performance" && "Soil health shows up in performance. These metrics connect biology to your bottom line."}
      </div>
    </div>
  );
}
