import type { Metadata } from "next";
import ToolStructuredData from "@/components/marketing/ToolStructuredData";

export const metadata: Metadata = {
  title: "Soil Health Checklist",
  description:
    "A practical checklist for assessing and tracking soil health indicators on your operation, with a downloadable workbook. Free, no signup required.",
  alternates: { canonical: "/tools/soil-health-checklist" },
  openGraph: {
    title: "Soil Health Checklist | Ecosystems United",
    description:
      "Assess and track soil health indicators on your operation, with a downloadable workbook. Free.",
    url: "/tools/soil-health-checklist",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ToolStructuredData
        slug="soil-health-checklist"
        name={metadata.title as string}
        description={metadata.description as string}
      />
    </>
  );
}
