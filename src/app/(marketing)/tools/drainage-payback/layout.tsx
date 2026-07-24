import type { Metadata } from "next";
import ToolStructuredData from "@/components/marketing/ToolStructuredData";

export const metadata: Metadata = {
  title: "Drainage Payback Calculator",
  description:
    "Would tile drainage pay on your wet fields? Model installation cost by drain spacing, yield response, and your payback period — every assumption adjustable. Free.",
  alternates: { canonical: "/tools/drainage-payback" },
  openGraph: {
    title: "Drainage Payback Calculator | Ecosystems United",
    description:
      "Model tile drainage cost by spacing class, yield response, and your payback period. Free calculator.",
    url: "/tools/drainage-payback",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ToolStructuredData
        slug="drainage-payback"
        name={metadata.title as string}
        description={metadata.description as string}
      />
    </>
  );
}
