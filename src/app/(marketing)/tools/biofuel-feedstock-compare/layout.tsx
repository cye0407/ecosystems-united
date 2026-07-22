import type { Metadata } from "next";
import ToolStructuredData from "@/components/marketing/ToolStructuredData";

export const metadata: Metadata = {
  title: "Biofuel Feedstock Comparison Tool",
  description:
    "Compare biofuel generations by carbon, land use, and scalability. Weight what matters for your operation and get the best-fit feedstock ranked, plus a free workbook to keep.",
  alternates: { canonical: "/tools/biofuel-feedstock-compare" },
  openGraph: {
    title: "Biofuel Feedstock Comparison Tool | Ecosystems United",
    description:
      "Weight carbon, land use, and scalability and get the best-fit biofuel feedstock ranked for your operation.",
    url: "/tools/biofuel-feedstock-compare",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ToolStructuredData
        slug="biofuel-feedstock-compare"
        name={metadata.title as string}
        description={metadata.description as string}
      />
    </>
  );
}
