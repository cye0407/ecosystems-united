import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecolabel Selector & Readiness Check",
  description:
    "Find which ecolabel family fits your product and score how ready you are to certify. Free tool with a readiness checklist to take with you.",
  alternates: { canonical: "/tools/ecolabel-selector" },
  openGraph: {
    title: "Ecolabel Selector & Readiness Check | Ecosystems United",
    description:
      "Match the right ecolabel family to your product and score your certification readiness. Free.",
    url: "/tools/ecolabel-selector",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
