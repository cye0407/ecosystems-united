import type { Metadata } from "next";
import ToolStructuredData from "@/components/marketing/ToolStructuredData";

export const metadata: Metadata = {
  title: "Operational Efficiency Scorecard (Stack 2)",
  description:
    "Score your operation across cost, energy, water, and process in 3 minutes. Find your weakest area and take the free Efficiency Scorecard workbook with you.",
  alternates: { canonical: "/tools/efficiency-assessment" },
  openGraph: {
    title: "Operational Efficiency Scorecard (Stack 2) | Ecosystems United",
    description:
      "Score cost, energy, water, and process efficiency in 3 minutes and find your weakest area. Free.",
    url: "/tools/efficiency-assessment",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ToolStructuredData
        slug="efficiency-assessment"
        name={metadata.title as string}
        description={metadata.description as string}
      />
    </>
  );
}
