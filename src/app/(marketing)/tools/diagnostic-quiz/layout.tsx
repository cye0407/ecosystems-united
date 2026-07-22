import type { Metadata } from "next";
import ToolStructuredData from "@/components/marketing/ToolStructuredData";

export const metadata: Metadata = {
  title: "Five Stacks Diagnostic Quiz",
  description:
    "7 questions to find which part of your operation needs attention first. Get a personalized starting point across all five stacks in 2 minutes. Free.",
  alternates: { canonical: "/tools/diagnostic-quiz" },
  openGraph: {
    title: "Five Stacks Diagnostic Quiz | Ecosystems United",
    description:
      "Answer 7 questions and get a personalized starting point across all five stacks in 2 minutes.",
    url: "/tools/diagnostic-quiz",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ToolStructuredData
        slug="diagnostic-quiz"
        name={metadata.title as string}
        description={metadata.description as string}
      />
    </>
  );
}
