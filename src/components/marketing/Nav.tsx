"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import SiteSearch from "@/components/marketing/SiteSearch";

const stackItems = [
  { num: 1, title: "The Defensible Baseline", slug: "stack-1-metrics", color: "#3D2E7C" },
  { num: 2, title: "Operational Efficiency", slug: "stack-2-efficiency", color: "#5B4A9E" },
  { num: 3, title: "Margin Recovery", slug: "stack-3-circularity", color: "#7B6BB8" },
  { num: 4, title: "Structural Resilience", slug: "stack-4-resilience", color: "#9A8CD0" },
  { num: 5, title: "The Compounding Engine", slug: "stack-5-regeneration", color: "#B8ADE3" },
];

export default function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Ecosystems United" width={150} height={50} priority />
        </Link>
        <button
          type="button"
          className="rounded-md border border-gray-200 p-2 text-gray-700 lg:hidden"
          aria-expanded={isMobileOpen}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation"
          onClick={() => setIsMobileOpen((open) => !open)}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            {isMobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <div className="hidden items-center gap-6 text-sm lg:flex">
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
                <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[220px]">
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
                      href="/playbooks"
                      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#5B4A9E] text-white text-xs font-bold">
                        ✓
                      </div>
                      <span className="text-gray-700">Free Playbooks</span>
                    </Link>
                    <Link
                      href="/book"
                      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gray-700 text-white text-xs font-bold">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                      </div>
                      <span className="text-gray-700">The Book <span className="text-xs text-green-600 font-medium">Free</span></span>
                    </Link>
                    <Link
                      href="/framework/implementation"
                      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full flex items-center justify-center bg-primary text-white text-xs font-bold">
                        &rarr;
                      </div>
                      <span className="text-gray-700">Implementation Guide</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/articles" className="text-gray-600 hover:text-primary">
            Guides
          </Link>
          <Link href="/products" className="text-gray-600 hover:text-primary">
            Products
          </Link>
          <Link href="/for-advisors" className="text-gray-600 hover:text-primary">
            For Advisors
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-primary">
            About
          </Link>
          <SiteSearch />
          <Link href="/login" className="text-gray-600 hover:text-primary">
            Sign In
          </Link>
          <Link
            href="/tracker"
            className="ml-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors"
          >
            Free Tracker
          </Link>
        </div>
      </div>
      {isMobileOpen && (
        <div id="mobile-navigation" className="border-t border-gray-100 px-6 py-4 lg:hidden">
          <div className="grid gap-1 text-sm">
            <Link href="/framework" onClick={() => setIsMobileOpen(false)} className="rounded px-3 py-2 text-gray-700 hover:bg-gray-50">
              The Five Stacks
            </Link>
            <Link href="/playbooks" onClick={() => setIsMobileOpen(false)} className="rounded px-3 py-2 font-medium text-[#5B4A9E] hover:bg-gray-50">
              Free Playbooks
            </Link>
            <Link href="/articles" onClick={() => setIsMobileOpen(false)} className="rounded px-3 py-2 text-gray-700 hover:bg-gray-50">Guides</Link>
            <Link href="/products" onClick={() => setIsMobileOpen(false)} className="rounded px-3 py-2 text-gray-700 hover:bg-gray-50">Products</Link>
            <Link href="/for-advisors" onClick={() => setIsMobileOpen(false)} className="rounded px-3 py-2 text-gray-700 hover:bg-gray-50">For Advisors</Link>
            <Link href="/about" onClick={() => setIsMobileOpen(false)} className="rounded px-3 py-2 text-gray-700 hover:bg-gray-50">About</Link>
            <Link href="/login" onClick={() => setIsMobileOpen(false)} className="rounded px-3 py-2 text-gray-700 hover:bg-gray-50">Sign In</Link>
            <Link href="/tracker" onClick={() => setIsMobileOpen(false)} className="mt-2 rounded-lg bg-primary px-4 py-3 text-center font-medium text-white">
              Free Tracker
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
