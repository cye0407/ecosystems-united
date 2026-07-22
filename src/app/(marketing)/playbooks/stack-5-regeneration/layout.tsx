import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stack 5 Playbook — The Compounding Engine",
  description:
    "A bespoke, sourced action plan for a regenerative transition: sequenced moves, the practices that compound fastest, and the funding that pays for them — built around your farm's numbers.",
  alternates: { canonical: "/playbooks/stack-5-regeneration" },
  openGraph: {
    title: "Stack 5 Playbook — The Compounding Engine | Ecosystems United",
    description:
      "A sourced, sequenced regenerative action plan built around your farm's own numbers.",
    url: "/playbooks/stack-5-regeneration",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
