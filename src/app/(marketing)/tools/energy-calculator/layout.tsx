import type { Metadata } from "next";
import ToolStructuredData from "@/components/marketing/ToolStructuredData";

export const metadata: Metadata = {
  title: "Energy Efficiency ROI Calculator",
  description:
    "Enter your energy consumption and see exactly what efficiency improvements would save you — in euros and CO₂. Free interactive calculator, no signup.",
  alternates: { canonical: "/tools/energy-calculator" },
  openGraph: {
    title: "Energy Efficiency ROI Calculator | Ecosystems United",
    description:
      "See what energy efficiency improvements would save you in euros and CO₂. Free calculator.",
    url: "/tools/energy-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ToolStructuredData
        slug="energy-calculator"
        name={metadata.title as string}
        description={metadata.description as string}
      />
    </>
  );
}
