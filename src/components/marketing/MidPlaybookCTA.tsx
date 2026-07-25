import Link from "next/link";

// D-015 / D-021: the mid-article playbook CTA. One copy variant per cluster,
// ONLY for clusters whose playbook already exists. Copy order is fixed:
// what you get -> what it takes -> privacy. Job language only — no framework
// naming in customer copy. Clusters without a live playbook render nothing
// (Cat: "leave mid-1 empty until the playbooks exist").
// Cluster values come from src/lib/article-clusters.ts (generated from
// docs/content-matrix.csv — the source of truth).

interface PlaybookVariant {
  heading: string;
  get: string;
  need: string;
  ctaLabel: string;
  href: string;
  color: string;
}

const PLAYBOOK_VARIANTS: Record<string, PlaybookVariant> = {
  baseline: {
    heading: "Know your numbers before someone else asks for them",
    get: "You get: the handful of numbers your operation should be tracking first, the order to set them up, and what each one lets you answer — for a buyer, a lender, or yourself.",
    need: "What it takes: five questions about your operation. No signup, nothing to install.",
    ctaLabel: "Get my measurement plan — free →",
    href: "/playbooks/stack-1-metrics",
    color: "#3D2E7C",
  },
  efficiency: {
    heading: "Find where your operation leaks money",
    get: "You get: which leaks to chase first — energy, inputs, water, or process waste — the order to work them over your first three years, and the six numbers that prove the fixes worked.",
    need: "What it takes: five questions about your operation. No signup, nothing to install.",
    ctaLabel: "Get my leak-fixing sequence — free →",
    href: "/playbooks/stack-2-efficiency",
    color: "#5B4A9E",
  },
  "circular-economy": {
    heading: "Someone is profiting from what you throw away",
    get: "You get: which of your waste streams are worth money, which one to tackle first, and the numbers that tell you whether selling, reusing, or cutting them pays best.",
    need: "What it takes: five questions about your operation. No signup, nothing to install.",
    ctaLabel: "Get my waste-to-value plan — free →",
    href: "/playbooks/stack-3-circularity",
    color: "#7B6BB8",
  },
  resilience: {
    heading: "Could one bad season take you down?",
    get: "You get: where your operation is most exposed — one big buyer, one key supplier, thin reserves — which exposure to fix first, and the numbers that show your buffer growing.",
    need: "What it takes: five questions about your operation. No signup, nothing to install.",
    ctaLabel: "Get my exposure fix-list — free →",
    href: "/playbooks/stack-4-resilience",
    color: "#9A8CD0",
  },
  regenerative: {
    heading: "Make the transition pay — in the right order",
    get: "You get: which regenerative practices to start with on your operation, the sequence that keeps cash flow alive through the yield dip, and the numbers that show whether it's working.",
    need: "What it takes: five questions about your operation. No signup, nothing to install.",
    ctaLabel: "Get my transition sequence — free →",
    href: "/playbooks/stack-5-regeneration",
    color: "#2D5A47",
  },
};

export default function MidPlaybookCTA({ cluster }: { cluster: string }) {
  const v = PLAYBOOK_VARIANTS[cluster];
  if (!v) return null;

  return (
    <div className="my-12 p-8 rounded-lg text-white" style={{ backgroundColor: v.color }}>
      <h3 className="text-2xl font-bold mb-3">{v.heading}</h3>
      <p className="text-white/80 mb-3">{v.get}</p>
      <p className="text-white/80 mb-6">{v.need}</p>
      <Link
        href={v.href}
        className="inline-block bg-white px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
        style={{ color: v.color }}
      >
        {v.ctaLabel}
      </Link>
      <p className="text-sm text-white/60 mt-3">
        Everything you enter stays in your browser — it never leaves your device.
      </p>
    </div>
  );
}
