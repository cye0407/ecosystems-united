"use client";

import { useState } from "react";
import { analytics } from "@/lib/analytics";

interface WaitlistFormProps {
  /** What they're signing up for — stored as the lead source (e.g., "certification-packs") */
  feature: string;
  /** Button label (default: "Join the Waitlist") */
  buttonLabel?: string;
  /** Placeholder text for the email input */
  placeholder?: string;
  /** Visual variant */
  variant?: "inline" | "compact";
  /** Custom class for the container */
  className?: string;
}

export default function WaitlistForm({
  feature,
  buttonLabel = "Join the Waitlist",
  placeholder = "you@company.com",
  variant = "inline",
  className = "",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "submitting") return;

    setStatus("submitting");
    try {
      await analytics.captureLead({
        email,
        source: `waitlist-${feature}`,
      });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={`text-sm text-primary font-medium ${className}`}>
        You're on the list. We'll be in touch.
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className="flex-1 min-w-0 px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded hover:bg-[#3d8f76] transition-colors shrink-0 disabled:opacity-50"
        >
          {status === "submitting" ? "..." : buttonLabel}
        </button>
      </form>
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
        {status === "submitting" ? "Joining..." : buttonLabel}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-500 mt-1">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
