import type { Metadata } from "next";
import ToolStructuredData from "@/components/marketing/ToolStructuredData";

export const metadata: Metadata = {
  title: "Structural Resilience Assessment (Stack 4)",
  description:
    "How fragile is your operation? Evaluate single points of failure, concentration risk, and contingency planning in minutes. Free, no signup required.",
  alternates: { canonical: "/tools/resilience-assessment" },
  openGraph: {
    title: "Structural Resilience Assessment (Stack 4) | Ecosystems United",
    description:
      "Evaluate single points of failure, concentration risk, and contingency planning. Free.",
    url: "/tools/resilience-assessment",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ToolStructuredData
        slug="resilience-assessment"
        name={metadata.title as string}
        description={metadata.description as string}
      />
    </>
  );
}
