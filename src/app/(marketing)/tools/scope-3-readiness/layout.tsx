import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scope 3 Supplier Readiness Scorecard",
  description:
    "Buyers asking for Scope 3 data? Score your readiness in 5 minutes, see your weakest area, and get the scorecard to keep. Free interactive tool.",
  alternates: { canonical: "/tools/scope-3-readiness" },
  openGraph: {
    title: "Scope 3 Supplier Readiness Scorecard | Ecosystems United",
    description:
      "Score your Scope 3 supplier readiness in 5 minutes and see your weakest area. Free.",
    url: "/tools/scope-3-readiness",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
