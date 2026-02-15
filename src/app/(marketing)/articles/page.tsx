"use client";

import { useState } from "react";
import Link from "next/link";
import { guideCategories, categoryStack } from "@/lib/article-metadata";

const stackTabs = [
  { id: 0, label: "All", color: "#6B7280" },
  { id: 1, label: "Stack 1", color: "#3D2E7C" },
  { id: 2, label: "Stack 2", color: "#5B4A9E" },
  { id: 3, label: "Stack 3", color: "#7B6BB8" },
  { id: 4, label: "Stack 4", color: "#9A8CD0" },
  { id: 5, label: "Stack 5", color: "#B8ADE3" },
];

const startHereCards = [
  {
    heading: "I just got a buyer questionnaire",
    desc: "Calm, practical steps when a retailer asks for sustainability data.",
    href: "/start/buyer-questionnaire",
  },
  {
    heading: "I need to understand CSRD",
    desc: "What the EU regulations actually mean for your operation.",
    href: "/start/csrd",
  },
  {
    heading: "My costs are out of control",
    desc: "You can\u2019t fix what you can\u2019t see. Measurement comes first.",
    href: "/start/costs",
  },
];

export default function GuidesPage() {
  const [activeStack, setActiveStack] = useState(0);

  const filteredCategories =
    activeStack === 0
      ? guideCategories
      : guideCategories.filter(
          (cat) => categoryStack[cat.name]?.number === activeStack
        );

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Guides</h1>
        <p className="text-xl text-gray-600">
          Practical sustainability guides for agricultural businesses and SMEs.
          Problem-focused content that helps you implement, not just understand.
        </p>
      </div>

      {/* Start Here */}
      <section className="mb-14">
        <h2 className="text-sm font-semibold text-[#3D2E7C] uppercase tracking-wide mb-4">
          Start here
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {startHereCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group flex flex-col justify-between p-5 rounded-lg border-l-4 border-[#3D2E7C] bg-white border-r border-t border-b border-r-gray-200 border-t-gray-200 border-b-gray-200 hover:shadow-md transition-shadow"
            >
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-[#3D2E7C] transition-colors mb-2">
                  {card.heading}
                </h3>
                <p className="text-sm text-gray-600">{card.desc}</p>
              </div>
              <span className="text-sm font-medium text-[#3D2E7C] mt-3">
                Read the guide &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Stack Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        {stackTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveStack(tab.id)}
            className="px-4 py-2 text-sm font-medium rounded-lg transition-all"
            style={
              activeStack === tab.id
                ? { backgroundColor: tab.color, color: "#fff" }
                : { backgroundColor: "#f3f4f6", color: "#4b5563" }
            }
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Categories */}
      <div className="space-y-12">
        {filteredCategories.map((category) => {
          const stack = categoryStack[category.name];
          return (
            <section key={category.name}>
              <div className="mb-6 flex items-center gap-3">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {category.name}
                </h2>
                {stack && (
                  <span
                    className="text-xs font-medium text-white px-2.5 py-0.5 rounded-full"
                    style={{ backgroundColor: stack.color }}
                  >
                    Stack {stack.number}
                  </span>
                )}
              </div>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.guides.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/articles/${guide.slug}`}
                    className="flex flex-col p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors group h-28"
                  >
                    <h3 className="font-medium text-gray-900 group-hover:text-primary transition-colors mb-1 line-clamp-2">
                      {guide.title} &rarr;
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {guide.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 p-8 rounded-lg text-white" style={{ backgroundColor: "#3D2E7C" }}>
        <h2 className="text-2xl font-bold mb-3">Not sure where to start?</h2>
        <p className="text-white/80 mb-6">
          Take the 5-minute Stack 1 assessment to see where your operation
          stands. No signup required.
        </p>
        <Link
          href="/tools/metrics-assessment"
          className="inline-block bg-white text-[#3D2E7C] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
        >
          Take the Assessment
        </Link>
      </div>
    </div>
  );
}
