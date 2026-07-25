"use client";

// D-021 EXAMPLE ONLY — timed workspace nudge for Cat's flow review.
// Bottom-right card (not a modal), appears once per session after 30s,
// dismissible. If approved, this graduates to a shared, cluster-aware
// component; if not, delete this file.
import { useEffect, useState } from "react";
import Link from "next/link";
import { analytics } from "@/lib/analytics";

const SEEN_KEY = "eu:example:workspace-popup";
const DELAY_MS = 30_000;

export default function WorkspacePopupExample({
  headline,
  body,
  ctaLabel,
  ctaHref,
}: {
  headline: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return;
    } catch {
      /* storage unavailable — just show once per load */
    }
    const t = setTimeout(() => {
      setOpen(true);
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {
        /* non-fatal */
      }
      analytics.track("workspace_popup_shown", { page: window.location.pathname });
    }, DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-sm rounded-xl border border-gray-200 bg-white p-5 shadow-xl">
      <button
        type="button"
        aria-label="Dismiss"
        onClick={() => {
          setOpen(false);
          analytics.track("workspace_popup_dismissed", { page: window.location.pathname });
        }}
        className="absolute top-2.5 right-3 text-gray-400 hover:text-gray-600 text-lg leading-none"
      >
        ×
      </button>
      <p className="font-semibold text-gray-900 mb-1.5 pr-4">{headline}</p>
      <p className="text-sm text-gray-600 mb-4">{body}</p>
      <Link
        href={ctaHref}
        onClick={() => analytics.track("workspace_popup_clicked", { page: window.location.pathname })}
        className="inline-block bg-[#4AA88C] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#3d8f77] transition-colors"
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
