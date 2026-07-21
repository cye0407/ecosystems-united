import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Margin Recovery Assessment (Stack 3)",
  description:
    "Where is value leaving your operation uncaptured? Assess waste streams, idle assets, and monetization opportunities in minutes. Free, no signup required.",
  alternates: { canonical: "/tools/circularity-assessment" },
  openGraph: {
    title: "Margin Recovery Assessment (Stack 3) | Ecosystems United",
    description:
      "Map waste streams, idle assets, and monetization opportunities across your operation. Free assessment.",
    url: "/tools/circularity-assessment",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
