import Link from "next/link";
import NewsletterSignup from "./NewsletterSignup";

// Stack metadata
const stackInfo: Record<string, { name: string; color: string; desc: string }> = {
  "stack-1": { name: "Core Metrics", color: "#3D2E7C", desc: "Build your baseline" },
  "stack-2": { name: "Efficiency", color: "#5B4A9E", desc: "Stop bleeding margin" },
  "stack-3": { name: "Circularity", color: "#7B6BB8", desc: "Turn waste into revenue" },
  "stack-4": { name: "Resilience", color: "#9A8CD0", desc: "Design for volatility" },
  "stack-5": { name: "Regeneration", color: "#B8ADE3", desc: "Compound improvement" },
  general: { name: "Foundation", color: "#6B7280", desc: "Agricultural fundamentals" },
};

interface ArticleLayoutProps {
  title: string;
  stack: string;
  children: React.ReactNode;
  nextSteps?: string;
}

export default function ArticleLayout({
  title,
  stack,
  children,
  nextSteps,
}: ArticleLayoutProps) {
  const stackData = stackInfo[stack] || stackInfo["general"];

  return (
    <article className="max-w-6xl mx-auto px-6 py-16">
      {/* Stack badge */}
      <div className="mb-8">
        <Link
          href={
            stack !== "general"
              ? `/framework/${stack}-${stackData.name.toLowerCase().replace(" ", "-")}`
              : "/framework"
          }
          className="inline-flex items-center gap-2 text-sm hover:underline"
        >
          <span
            className="w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold"
            style={{ backgroundColor: stackData.color }}
          >
            {stack === "general" ? "F" : stack.replace("stack-", "")}
          </span>
          <span style={{ color: stackData.color }}>{stackData.name}</span>
          <span className="text-gray-400">— {stackData.desc}</span>
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-8">{title}</h1>

      {/* Content */}
      <div className="prose text-gray-600 mb-12">{children}</div>

      {/* So What / Next Steps */}
      {nextSteps && (
        <div
          className="border-l-4 pl-6 py-4 mb-12"
          style={{ borderColor: stackData.color }}
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            So what does this mean for you?
          </h2>
          <p className="text-gray-600">{nextSteps}</p>
        </div>
      )}

      {/* CTA Section */}
      <div className="mb-12">
        <NewsletterSignup />
      </div>

      {/* Related content by stack */}
      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Continue with {stackData.name}
        </h3>
        <div className="flex gap-4">
          <Link
            href={`/articles?stack=${stack}`}
            className="text-primary hover:underline"
          >
            More {stackData.name} articles →
          </Link>
          {stack !== "general" && (
            <Link
              href={`/framework/${stack}-${stackData.name.toLowerCase().replace(" ", "-")}`}
              className="text-accent hover:underline"
            >
              About Stack {stack.replace("stack-", "")} →
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
