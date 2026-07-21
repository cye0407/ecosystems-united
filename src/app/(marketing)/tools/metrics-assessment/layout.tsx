import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Defensible Baseline Assessment (Stack 1)",
  description:
    "Do you have visibility into your operation? Evaluate your baseline data, tracking, and measurement capability in minutes. Free, no signup required.",
  alternates: { canonical: "/tools/metrics-assessment" },
  openGraph: {
    title: "Defensible Baseline Assessment (Stack 1) | Ecosystems United",
    description:
      "Evaluate your baseline data, tracking, and measurement capability in minutes. Free.",
    url: "/tools/metrics-assessment",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
