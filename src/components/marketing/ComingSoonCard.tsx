"use client";

import { analytics } from "@/lib/analytics";

interface ComingSoonCardProps {
  /** Unique identifier for tracking (e.g., "efficiency-analysis", "ag-metrics") */
  featureId: string;
  /** Display title */
  title: string;
  /** Description text */
  description: string;
  /** Page where this card appears (for tracking context) */
  page?: string;
}

export default function ComingSoonCard({
  featureId,
  title,
  description,
  page,
}: ComingSoonCardProps) {
  function handleClick() {
    analytics.track("coming_soon_interest", {
      feature_id: featureId,
      feature_title: title,
      page: page || window.location.pathname,
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-full text-left flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors group"
    >
      <span className="text-xs font-medium text-primary bg-primary-100 px-2.5 py-0.5 rounded-full mt-0.5 shrink-0">
        Coming Soon
      </span>
      <div>
        <p className="font-semibold text-gray-900 text-sm group-hover:text-primary transition-colors">
          {title}
        </p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </button>
  );
}
