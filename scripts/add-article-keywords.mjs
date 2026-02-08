/**
 * One-time script to add keywords to all article metadata exports.
 * Run with: node scripts/add-article-keywords.mjs
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

// Category keywords (same as article-metadata.ts)
const categoryKeywords = {
  "CSRD & ESG Compliance": ["CSRD", "ESG", "sustainability reporting", "VSME", "agricultural compliance"],
  "Understanding Agribusiness": ["agribusiness", "agricultural economics", "food systems", "value chain"],
  "Small Farm Strategy": ["small farms", "farm strategy", "direct marketing", "local food"],
  "Ecolabels & Certification": ["ecolabels", "certification", "sustainability standards", "greenwashing"],
  "Biofuels & Energy": ["biofuels", "renewable energy", "biomass", "sustainable fuel"],
  "Circular Economy & Efficiency": ["circular economy", "resource efficiency", "waste reduction", "life cycle assessment"],
  "Intercropping & Multi-Crop Systems": ["intercropping", "polyculture", "crop diversity", "companion planting"],
  "Regenerative Agriculture Economics": ["regenerative agriculture", "soil health", "carbon credits", "farm economics"],
  "Soil & Land Management": ["soil testing", "nutrient management", "erosion control", "land management"],
  "Water & Infrastructure": ["irrigation", "water management", "drainage", "precision agriculture"],
  "Resilience & Risk Management": ["climate risk", "crop diversification", "farm resilience", "risk management"],
  "Biodiversity & Habitat": ["biodiversity", "habitat creation", "pollinators", "biodiversity net gain"],
};

// Slug to category mapping (built from guideCategories)
const slugToCategory = {
  "first-esg-questionnaire": "CSRD & ESG Compliance",
  "csrd-vsme-agricultural-suppliers": "CSRD & ESG Compliance",
  "scope-1-2-3-agriculture": "CSRD & ESG Compliance",
  "buyer-scope-3-request": "CSRD & ESG Compliance",
  "esg-reporting-small-farms": "CSRD & ESG Compliance",
  "lose-buyers-without-esg": "CSRD & ESG Compliance",
  "missing-esg-data": "CSRD & ESG Compliance",
  "building-esg-response-system": "CSRD & ESG Compliance",
  "esg-competitive-advantage": "CSRD & ESG Compliance",
  "agricultural-sustainability-checklist": "CSRD & ESG Compliance",
  "building-baseline": "CSRD & ESG Compliance",
  "buyer-scrutiny": "CSRD & ESG Compliance",
  "what-gets-measured": "CSRD & ESG Compliance",
  "what-is-agribusiness": "Understanding Agribusiness",
  "origins-history-agribusiness": "Understanding Agribusiness",
  "advantages-disadvantages-agribusiness": "Understanding Agribusiness",
  "agriculture-vs-agribusiness": "Understanding Agribusiness",
  "small-vs-large-agribusiness": "Understanding Agribusiness",
  "sustainability-in-agribusiness": "Understanding Agribusiness",
  "agribusiness-technology-trends": "Understanding Agribusiness",
  "agribusiness-supply-chain-explained": "Understanding Agribusiness",
  "what-are-small-farms": "Small Farm Strategy",
  "small-farm-competitive-strategy": "Small Farm Strategy",
  "direct-marketing-small-farms": "Small Farm Strategy",
  "small-farm-market-channels": "Small Farm Strategy",
  "why-consumers-want-local-food": "Small Farm Strategy",
  "industrial-food-system-small-farms": "Small Farm Strategy",
  "small-farm-value-added-products": "Small Farm Strategy",
  "cooperative-models-small-farms": "Small Farm Strategy",
  "small-farm-financial-planning": "Small Farm Strategy",
  "food-deserts-market-opportunity": "Small Farm Strategy",
  "what-are-ecolabels": "Ecolabels & Certification",
  "the-different-types-of-ecolabels": "Ecolabels & Certification",
  "most-trustworthy-ecolabels": "Ecolabels & Certification",
  "advantages-and-disadvantages-of-ecolabels": "Ecolabels & Certification",
  "disadvantages-of-ecolabels": "Ecolabels & Certification",
  "challenges-to-ecolabels": "Ecolabels & Certification",
  "drivers-of-ecolabel-adoption": "Ecolabels & Certification",
  "how-to-spot-fake-ecolabels": "Ecolabels & Certification",
  "esg-labels-in-2025": "Ecolabels & Certification",
  "biofuels-explained": "Biofuels & Energy",
  "advanced-biofuels": "Biofuels & Energy",
  "cellulosic-biofuels": "Biofuels & Energy",
  "cellulosic-vs-traditional-biofuels": "Biofuels & Energy",
  "pros-and-cons-of-advanced-biofuels": "Biofuels & Energy",
  "biofuel-sustainability-ranking": "Biofuels & Energy",
  "biofuel-trends-2025": "Biofuels & Energy",
  "biofuels-in-aviation": "Biofuels & Energy",
  "circular-economy-explained": "Circular Economy & Efficiency",
  "value-chains-economic-efficiency": "Circular Economy & Efficiency",
  "life-cycle-assessment-explained": "Circular Economy & Efficiency",
  "farm-waste-to-value": "Circular Economy & Efficiency",
  "closed-loop-nutrient-cycling": "Circular Economy & Efficiency",
  "biomass-energy-farm": "Circular Economy & Efficiency",
  "water-recycling-efficiency": "Circular Economy & Efficiency",
  "circular-supply-chains-food": "Circular Economy & Efficiency",
  "introduction-to-intercropping": "Intercropping & Multi-Crop Systems",
  "intercropping-practices": "Intercropping & Multi-Crop Systems",
  "advantages-disadvantages-intercropping": "Intercropping & Multi-Crop Systems",
  "measuring-intercropping-effectiveness": "Intercropping & Multi-Crop Systems",
  "intercropping-organic-systems": "Intercropping & Multi-Crop Systems",
  "intercropping-vs-polyculture": "Intercropping & Multi-Crop Systems",
  "companion-planting-introduction": "Intercropping & Multi-Crop Systems",
  "intercropping-cereal-legume": "Intercropping & Multi-Crop Systems",
  "intercropping-pest-management": "Intercropping & Multi-Crop Systems",
  "intercropping-climate-resilience": "Intercropping & Multi-Crop Systems",
  "regenerative-agriculture-economics": "Regenerative Agriculture Economics",
  "soil-health-business-case": "Regenerative Agriculture Economics",
  "cover-crops-roi": "Regenerative Agriculture Economics",
  "regenerative-practices-2025": "Regenerative Agriculture Economics",
  "carbon-markets-agriculture": "Regenerative Agriculture Economics",
  "regenerative-transition-costs": "Regenerative Agriculture Economics",
  "biochar-soil-amendment": "Regenerative Agriculture Economics",
  "agroforestry-economics": "Regenerative Agriculture Economics",
  "composting-nutrient-cycling-roi": "Regenerative Agriculture Economics",
  "soil-testing-guide": "Soil & Land Management",
  "soil-organic-matter-building": "Soil & Land Management",
  "nutrient-management-planning": "Soil & Land Management",
  "erosion-control-strategies": "Soil & Land Management",
  "land-use-planning-farms": "Soil & Land Management",
  "soil-compaction-management": "Soil & Land Management",
  "cover-crop-selection-guide": "Soil & Land Management",
  "tillage-systems-compared": "Soil & Land Management",
  "agricultural-irrigation": "Water & Infrastructure",
  "irrigation-system-planning": "Water & Infrastructure",
  "agricultural-drainage": "Water & Infrastructure",
  "precision-irrigation-technology": "Water & Infrastructure",
  "rainwater-harvesting-agriculture": "Water & Infrastructure",
  "drought-resilience-water-management": "Water & Infrastructure",
  "water-quality-management-farms": "Water & Infrastructure",
  "subsurface-drainage-design": "Water & Infrastructure",
  "climate-risk-assessment-farms": "Resilience & Risk Management",
  "crop-diversification-risk": "Resilience & Risk Management",
  "farm-insurance-climate-adaptation": "Resilience & Risk Management",
  "supply-chain-resilience-agriculture": "Resilience & Risk Management",
  "financial-resilience-farm-operations": "Resilience & Risk Management",
  "pest-disease-climate-change": "Resilience & Risk Management",
  "farm-succession-planning": "Resilience & Risk Management",
  "market-volatility-strategies": "Resilience & Risk Management",
  "biodiversity-assessment-farms": "Biodiversity & Habitat",
  "hedgerow-management-economics": "Biodiversity & Habitat",
  "pollinator-habitat-farm": "Biodiversity & Habitat",
  "biodiversity-net-gain-agriculture": "Biodiversity & Habitat",
};

const stopWords = new Set([
  "a", "an", "the", "and", "or", "but", "in", "on", "at", "to", "for",
  "of", "with", "by", "from", "as", "is", "was", "are", "vs", "what",
  "how", "why", "when", "where", "your", "you", "its", "their", "our",
]);

function slugToKeywordWords(slug) {
  return slug
    .split("-")
    .filter((word) => word.length > 2 && !stopWords.has(word));
}

function buildKeywords(slug, categoryName) {
  const catKw = categoryKeywords[categoryName] || [];
  const slugKw = slugToKeywordWords(slug);
  const universal = ["agriculture", "sustainability"];
  const seen = new Set();
  const result = [];
  for (const kw of [...catKw, ...slugKw, ...universal]) {
    const lower = kw.toLowerCase();
    if (!seen.has(lower)) {
      seen.add(lower);
      result.push(kw);
    }
  }
  return result;
}

const articlesDir = join(process.cwd(), "src", "app", "(marketing)", "articles");
const entries = readdirSync(articlesDir);

let updated = 0;
let skipped = 0;

for (const entry of entries) {
  const entryPath = join(articlesDir, entry);
  if (!statSync(entryPath).isDirectory()) continue;
  if (entry === "page.tsx") continue;

  const pagePath = join(entryPath, "page.tsx");
  try {
    statSync(pagePath);
  } catch {
    continue;
  }

  const slug = entry;
  const category = slugToCategory[slug];
  if (!category) {
    console.log(`SKIP (no category): ${slug}`);
    skipped++;
    continue;
  }

  let content = readFileSync(pagePath, "utf-8");

  // Skip if keywords already present
  if (content.includes("keywords:") || content.includes("keywords :")) {
    console.log(`SKIP (already has keywords): ${slug}`);
    skipped++;
    continue;
  }

  const keywords = buildKeywords(slug, category);
  const keywordsStr = keywords.map((k) => `"${k}"`).join(", ");

  // Find the metadata block and add keywords after description
  // Pattern: description: "..." or description:\n    "..."
  // We'll insert keywords after the description line, before the closing };
  const metadataMatch = content.match(
    /export const metadata\s*=\s*\{[^}]*description\s*:\s*(?:"[^"]*"|`[^`]*`)[^}]*\}/
  );

  if (!metadataMatch) {
    console.log(`SKIP (no metadata match): ${slug}`);
    skipped++;
    continue;
  }

  const oldMetadata = metadataMatch[0];
  // Insert keywords before the closing }
  const newMetadata = oldMetadata.replace(
    /,?\s*\}$/,
    `,\n  keywords: [${keywordsStr}],\n}`
  );

  content = content.replace(oldMetadata, newMetadata);
  writeFileSync(pagePath, content, "utf-8");
  updated++;
  console.log(`UPDATED: ${slug} (${keywords.length} keywords)`);
}

console.log(`\nDone! Updated: ${updated}, Skipped: ${skipped}`);
