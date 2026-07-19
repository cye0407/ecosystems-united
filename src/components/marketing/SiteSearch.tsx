"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { searchSite, type SearchEntry } from "@/lib/search-index";

const typeLabels: Record<SearchEntry["type"], string> = {
  product: "Product",
  framework: "Framework",
  tool: "Tool",
  article: "Guide",
  page: "Page",
};

const typeColors: Record<SearchEntry["type"], string> = {
  product: "bg-primary/10 text-primary",
  framework: "bg-indigo-100 text-indigo-700",
  tool: "bg-blue-100 text-blue-700",
  article: "bg-gray-100 text-gray-700",
  page: "bg-gray-100 text-gray-700",
};

export default function SiteSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => searchSite(query, 12), [query]);

  // Open with Cmd+K / Ctrl+K, close with Esc
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Focus input when modal opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [open]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  return (
    <>
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-gray-600 hover:text-primary p-1.5"
        aria-label="Search the site"
        title="Search (⌘K)"
      >
        <MagnifyingGlass size={20} weight="bold" />
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4 bg-black/50"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-2xl bg-white rounded-lg shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search input */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-200">
              <MagnifyingGlass size={20} weight="bold" className="text-gray-400" />
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search guides, products, framework..."
                className="flex-1 outline-none text-gray-900 placeholder:text-gray-400 bg-transparent"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1"
                aria-label="Close search"
              >
                <X size={18} weight="bold" />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto">
              {!query && (
                <div className="px-5 py-8 text-center text-sm text-gray-500">
                  Start typing to search across guides, products, framework, and tools.
                </div>
              )}
              {query && results.length === 0 && (
                <div className="px-5 py-8 text-center text-sm text-gray-500">
                  No results for &ldquo;{query}&rdquo;. Try different keywords.
                </div>
              )}
              {results.length > 0 && (
                <ul className="py-2">
                  {results.map((r) => (
                    <li key={r.href}>
                      <Link
                        href={r.href}
                        onClick={() => setOpen(false)}
                        className="block px-5 py-3 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-3 mb-1">
                          <h4 className="font-medium text-gray-900 text-sm">
                            {r.title}
                          </h4>
                          <span
                            className={`text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded shrink-0 ${typeColors[r.type]}`}
                          >
                            {typeLabels[r.type]}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 line-clamp-2">
                          {r.description}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-gray-200 bg-gray-50 text-xs text-gray-500 flex items-center justify-between">
              <span>
                {results.length > 0 && `${results.length} result${results.length === 1 ? "" : "s"}`}
              </span>
              <span className="hidden sm:inline">
                <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-[10px] font-semibold">
                  Esc
                </kbd>{" "}
                to close
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
