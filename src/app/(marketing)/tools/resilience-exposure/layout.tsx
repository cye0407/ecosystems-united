import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resilience Exposure Calculator",
  description:
    "Where would a single disruption hurt most? Six numbers map your customer, supplier, buffer, runway, and key-person exposure — with the fix for your weakest link. Free.",
  alternates: { canonical: "/tools/resilience-exposure" },
  openGraph: {
    title: "Resilience Exposure Calculator | Ecosystems United",
    description:
      "Map your concentration, buffer, runway, and key-person exposure and fix your weakest link. Free.",
    url: "/tools/resilience-exposure",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
