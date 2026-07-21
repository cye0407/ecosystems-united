import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regenerative Transition ROI Calculator",
  description:
    "Does regenerative pay on your operation? Model transition cost, input savings, carbon income, and your break-even year — every assumption adjustable. Free.",
  alternates: { canonical: "/tools/regenerative-roi" },
  openGraph: {
    title: "Regenerative Transition ROI Calculator | Ecosystems United",
    description:
      "Model transition cost, input savings, carbon income, and your break-even year. Free calculator.",
    url: "/tools/regenerative-roi",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
