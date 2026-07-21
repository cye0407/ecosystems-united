import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full Five Stacks Assessment",
  description:
    "Evaluate where your operation sits across all five stacks. Get a complete picture and prioritize your next steps. Free, no signup required.",
  alternates: { canonical: "/tools/stack-assessment" },
  openGraph: {
    title: "Full Five Stacks Assessment | Ecosystems United",
    description:
      "Evaluate your operation across all five stacks and prioritize your next steps. Free.",
    url: "/tools/stack-assessment",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
