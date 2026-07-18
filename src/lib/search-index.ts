/**
 * Site-wide search index — built from static page metadata + article registry.
 * Used by the SiteSearch component for client-side fuzzy matching.
 */

import { guideCategories } from "@/lib/article-metadata";

export interface SearchEntry {
  title: string;
  description: string;
  href: string;
  type: "article" | "product" | "framework" | "tool" | "workshop" | "page";
}

// Static pages (non-article content)
const staticPages: SearchEntry[] = [
  // Products
  {
    title: "Products",
    description:
      "Tools, response packs, and workshops for agricultural SMEs. Free tracker, AI-powered questionnaire responses, and certification tools.",
    href: "/products",
    type: "product",
  },
  {
    title: "Baseline Tracker",
    description:
      "Free baseline tracker. Collect, structure, and export your operational data across 8 domains. Auto-calculated emissions, multi-site, CSV exports.",
    href: "/tracker",
    type: "product",
  },
  {
    title: "Response Generator",
    description:
      "Upload buyer questionnaires (ESG, CDP, EcoVadis, GlobalG.A.P.), get data-backed answers from your tracked baseline. From €39.",
    href: "/see-it-in-action",
    type: "product",
  },
  {
    title: "The Modern Sustainability Playbook",
    description:
      "Free book. Sustainability reframed as operational strategy. The Five Stacks Framework explained. PDF download.",
    href: "/book",
    type: "product",
  },
  // Workshops
  {
    title: "Which Ecolabel Is Right For Your Farm? — Workshop",
    description:
      "90-minute live workshop. Which certifications open markets, what they cost, and how to prepare your data before you apply. €35.",
    href: "/workshops/ecolabel-certification",
    type: "workshop",
  },
  // Framework
  {
    title: "The Five Stacks Framework",
    description:
      "A systematic approach to sustainability that builds competitive advantage. Each stack builds on the previous, creating compounding capability.",
    href: "/framework",
    type: "framework",
  },
  {
    title: "Stack 1: The Defensible Baseline",
    description:
      "If it can't be measured, it can't be defended. Build defensible baseline data for emissions, energy, water, waste, land use.",
    href: "/framework/stack-1-metrics",
    type: "framework",
  },
  {
    title: "Stack 2: Operational Efficiency",
    description:
      "Fix leaks before adding new initiatives. Data reveals patterns where margins leak and processes waste.",
    href: "/framework/stack-2-efficiency",
    type: "framework",
  },
  {
    title: "Stack 3: Margin Recovery",
    description:
      "What you discard is lost margin. Convert waste streams into revenue or cost-savings.",
    href: "/framework/stack-3-circularity",
    type: "framework",
  },
  {
    title: "Stack 4: Structural Resilience",
    description:
      "Systems must absorb shocks without breaking. Build multiple value streams so you're not dependent on one thing.",
    href: "/framework/stack-4-resilience",
    type: "framework",
  },
  {
    title: "Stack 5: The Compounding Engine",
    description:
      "Build systems that improve as they operate. Automated feedback loop: more efficient and more profitable with every cycle.",
    href: "/framework/stack-5-regeneration",
    type: "framework",
  },
  {
    title: "Implementation Guide",
    description:
      "Complete roadmap for implementing the Five Stacks: economic data, case studies, decision frameworks, 12-month timeline, funding resources.",
    href: "/framework/implementation",
    type: "framework",
  },
  // Tools
  {
    title: "Free Tools",
    description:
      "Diagnostic quiz, stack assessments, energy calculator, soil health checklist. Find where to start and measure your progress.",
    href: "/tools",
    type: "tool",
  },
  {
    title: "Stack 1 Metrics Assessment",
    description: "5-minute assessment to see how defensible your baseline data is.",
    href: "/tools/metrics-assessment",
    type: "tool",
  },
  {
    title: "Diagnostic Quiz",
    description: "Find which stack to focus on first. 2 minutes, no signup.",
    href: "/tools/diagnostic-quiz",
    type: "tool",
  },
  {
    title: "Biofuel Feedstock Comparison",
    description:
      "Compare 1st–4th generation biofuels on carbon, land use, EROI, and scalability. Weight your priorities, get a best-fit ranking and a downloadable workbook.",
    href: "/tools/biofuel-feedstock-compare",
    type: "tool",
  },
  {
    title: "Scope 3 Supplier Readiness Scorecard",
    description:
      "Score your readiness to answer buyer Scope 3 and ESG data requests. 5-minute self-assessment with weakest-area callout and a downloadable scorecard.",
    href: "/tools/scope-3-readiness",
    type: "tool",
  },
  {
    title: "CSRD Readiness Scorecard",
    description:
      "Assess your CSRD/VSME reporting readiness across governance, environmental, social, and reporting sections. Instant score and next step.",
    href: "/tools/csrd-readiness",
    type: "tool",
  },
  {
    title: "Ecolabel Selector & Readiness",
    description:
      "Find which ecolabel family fits your product and score your certification readiness. Free interactive tool with a downloadable checklist.",
    href: "/tools/ecolabel-selector",
    type: "tool",
  },
  {
    title: "Energy ROI Calculator",
    description: "Calculate the payback period on energy efficiency upgrades.",
    href: "/tools/energy-calculator",
    type: "tool",
  },
  {
    title: "Soil Health Checklist",
    description: "Score your soil health practices across key dimensions.",
    href: "/tools/soil-health-checklist",
    type: "tool",
  },
  // Pages
  {
    title: "About Ecosystems United",
    description:
      "Free sustainability tools for agricultural SMEs. Web-based tracker, no platform lock-in, no monthly seat costs.",
    href: "/about",
    type: "page",
  },
  {
    title: "For Advisors",
    description:
      "Sustainability advisors and consultants — use our tools to support your clients. Multi-client dashboard coming soon.",
    href: "/for-advisors",
    type: "page",
  },
];

// Build the full index by merging static pages with articles
export const searchIndex: SearchEntry[] = [
  ...staticPages,
  ...guideCategories.flatMap((cat) =>
    cat.guides.map((g) => ({
      title: g.title,
      description: g.desc,
      href: `/articles/${g.slug}`,
      type: "article" as const,
    }))
  ),
];

/**
 * Filter the search index by a free-text query.
 * Matches title, description, and partial word matches.
 */
export function searchSite(query: string, limit = 10): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  // Score each entry: title matches > description matches
  const scored = searchIndex
    .map((entry) => {
      const titleLower = entry.title.toLowerCase();
      const descLower = entry.description.toLowerCase();
      let score = 0;

      if (titleLower.includes(q)) score += 10;
      if (titleLower.startsWith(q)) score += 5;
      if (descLower.includes(q)) score += 3;

      // Word-by-word match for multi-word queries
      const words = q.split(/\s+/).filter((w) => w.length > 1);
      for (const word of words) {
        if (titleLower.includes(word)) score += 2;
        if (descLower.includes(word)) score += 1;
      }

      return { entry, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ entry }) => entry);

  return scored;
}
