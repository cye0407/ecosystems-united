"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const stackItems = [
  { num: 1, title: "Metrics", slug: "stack-1-metrics", color: "#3D2E7C" },
  { num: 2, title: "Efficiency", slug: "stack-2-efficiency", color: "#5B4A9E" },
  { num: 3, title: "Circularity", slug: "stack-3-circularity", color: "#7B6BB8" },
  { num: 4, title: "Resilience", slug: "stack-4-resilience", color: "#9A8CD0" },
  { num: 5, title: "Regeneration", slug: "stack-5-regeneration", color: "#B8ADE3" },
];

export default function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Ecosystems United" width={150} height={50} priority />
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/modern-sustainability" className="text-gray-600 hover:text-primary">
            Modern Sustainability
          </Link>

          {/* Five Stacks Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link
              href="/framework"
              className="text-gray-600 hover:text-primary flex items-center gap-1"
            >
              The Five Stacks
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 pt-2 z-50">
                <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[200px]">
                  {stackItems.map((stack) => (
                    <Link
                      key={stack.num}
                      href={`/framework/${stack.slug}`}
                      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
                    >
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        style={{ backgroundColor: stack.color }}
                      >
                        {stack.num}
                      </div>
                      <span className="text-gray-700">{stack.title}</span>
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <Link
                      href="/framework/implementation"
                      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full flex items-center justify-center bg-primary text-white text-xs font-bold">
                        →
                      </div>
                      <span className="text-gray-700">Implementation Guide</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/tools" className="text-gray-600 hover:text-primary">
            Tools
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-primary">
            About
          </Link>
          <Link
            href="/dashboard"
            className="ml-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            Launch App
          </Link>
        </div>
      </div>
    </nav>
  );
}
