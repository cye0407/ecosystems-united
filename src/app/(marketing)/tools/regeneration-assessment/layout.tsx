import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compounding Engine Assessment (Stack 5)",
  description:
    "Can you prove your advantage? Assess your positioning, certifications, and ability to command premium pricing across Stack 5. Free, no signup required.",
  alternates: { canonical: "/tools/regeneration-assessment" },
  openGraph: {
    title: "Compounding Engine Assessment (Stack 5) | Ecosystems United",
    description:
      "Assess your positioning, certifications, and ability to command premium pricing. Free.",
    url: "/tools/regeneration-assessment",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
