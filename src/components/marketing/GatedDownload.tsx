"use client";

import { useState } from "react";
import { analytics } from "@/lib/analytics";

interface GatedDownloadProps {
  /** Lead source suffix — stored as source "download-<feature>" */
  feature: string;
  /** Public URL of the file to serve (e.g. /downloads/scorecard.xlsx) */
  fileUrl: string;
  /** Suggested download filename */
  fileName?: string;
  /** Email-capture button label */
  buttonLabel?: string;
  /** Label on the revealed download link */
  downloadLabel?: string;
  placeholder?: string;
  className?: string;
}

/**
 * Soft-gated download: capture an email to Supabase leads, then reveal the
 * real file immediately. The file lives in /public so it downloads instantly
 * once unlocked. (The gate is a lead-capture prompt, not access control.)
 */
export default function GatedDownload({
  feature,
  fileUrl,
  fileName,
  buttonLabel = "Email me the download",
  downloadLabel = "Download the workbook",
  placeholder = "you@company.com",
  className = "",
}: GatedDownloadProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "ready" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "submitting") return;

    setStatus("submitting");
    try {
      await analytics.captureLead({ email, source: `download-${feature}` });
      analytics.track("download_unlocked", { label: feature });
      setStatus("ready");
    } catch {
      // Don't block the promised download on a lead-capture failure.
      setStatus("ready");
    }
  }

  if (status === "ready") {
    return (
      <div className={className}>
        <a
          href={fileUrl}
          download={fileName}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded hover:bg-[#3d8f76] transition-colors"
        >
          <span aria-hidden>↓</span> {downloadLabel}
        </a>
        <p className="text-sm text-gray-500 mt-2">
          Your download is ready. We&apos;ve noted your email so we can send updates —
          unsubscribe anytime.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-2 ${className}`}>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        className="flex-1 min-w-0 px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="px-6 py-3 bg-primary text-white text-sm font-semibold rounded hover:bg-[#3d8f76] transition-colors shrink-0 disabled:opacity-50"
      >
        {status === "submitting" ? "..." : buttonLabel}
      </button>
    </form>
  );
}
