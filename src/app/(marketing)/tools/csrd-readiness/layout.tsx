import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSRD / VSME Readiness Scorecard",
  description:
    "Where do you stand on CSRD and VSME reporting? A quick self-assessment with a section-by-section readiness score and your next step. Free interactive tool.",
  alternates: { canonical: "/tools/csrd-readiness" },
  openGraph: {
    title: "CSRD / VSME Readiness Scorecard | Ecosystems United",
    description:
      "Score your CSRD and VSME reporting readiness section by section and see your next step. Free.",
    url: "/tools/csrd-readiness",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
