import Link from "next/link";

interface BaselineCTAProps {
  /** Optional heading override. */
  heading?: string;
  /** Optional supporting line override. */
  description?: string;
  /** Extra classes on the wrapper (e.g. margin). */
  className?: string;
}

/**
 * The standard on-page conversion CTA: lead with the free Baseline Tracker,
 * offer the one-time Response Generator as the paid next step. This replaces
 * the Five Stacks Monthly newsletter as the primary in-content CTA — the
 * concrete free product is the front door, the newsletter is not.
 *
 * Compact bordered style on purpose: it sits mid-content and should not read
 * as a heavy duplicate of the fuller ArticleCTA that closes each article.
 */
export default function BaselineCTA({
  heading = "You already have the data. Get it organized.",
  description = "Bring the records you already have together across 8 domains — energy, inputs, land, livestock, workforce, waste, and more. Auto-calculated, exportable, and free. Numbers solid enough for a buyer, a lender, a grant, or your own decisions.",
  className = "",
}: BaselineCTAProps) {
  return (
    <div
      className={`rounded-2xl border border-primary/20 bg-primary-100/60 p-6 sm:p-8 ${className}`}
    >
      <h3 className="text-xl font-bold text-gray-900 mb-2">{heading}</h3>
      <p className="text-gray-600 mb-6 max-w-2xl">{description}</p>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <Link
          href="/tracker"
          className="inline-flex justify-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
        >
          Start Your Free Baseline
        </Link>
        <Link
          href="/see-it-in-action"
          className="inline-flex justify-center items-center text-sm font-medium text-primary hover:underline px-2 py-3"
        >
          Or generate a buyer-questionnaire response — €39 &rarr;
        </Link>
      </div>
      <p className="text-xs text-gray-500 mt-3">
        Free forever. No credit card. No lock-in.
      </p>
    </div>
  );
}
