import type { PlaybookSource } from "./types";

// ---------------------------------------------------------------------------
// Authority source ledger.
//
// Every figure, claim, and funding reference a Playbook makes must trace to an
// entry here. This is the credibility + honesty backbone: rules/LLM compose the
// plan, but the FACTS come from these vetted snippets. Sourced from
// docs/playbooks/authority-sources.md.
//
// Snippets are deliberately conservative and directional. When a snippet cites a
// range or an "upside", the plan must carry that framing verbatim — never harden
// it into a promise.
// ---------------------------------------------------------------------------

export const SOURCE_LEDGER: Record<string, PlaybookSource> = {
  // --- Stack 5: soil health & regenerative practice -----------------------
  rodale_fst: {
    id: "rodale_fst",
    label: "Farming Systems Trial",
    org: "Rodale Institute",
    tier: "RES",
    url: "https://rodaleinstitute.org/science/farming-systems-trial/",
    snippet:
      "Long-run side-by-side trials find regenerative systems match or exceed conventional yields after a transition period, while cutting purchased-input costs — with the gap widening in drought years.",
  },
  usda_soil_health: {
    id: "usda_soil_health",
    label: "Soil Health principles",
    org: "USDA NRCS",
    tier: "GOV",
    url: "https://www.nrcs.usda.gov/conservation-basics/natural-resource-concerns/soils/soil-health",
    snippet:
      "The four soil-health principles — minimise disturbance, keep the soil covered, keep living roots year-round, and maximise diversity — are the levers behind reduced-till, cover crops and diverse rotations.",
  },
  sare_cover_crops: {
    id: "sare_cover_crops",
    label: "Cover Crops research",
    org: "SARE (USDA)",
    tier: "RES",
    url: "https://www.sare.org/resources/cover-crops/",
    snippet:
      "Multi-year national survey data associate cover cropping with improved yields over time, better water infiltration, and reduced fertiliser and herbicide needs as the practice matures.",
  },
  ahdb_soil: {
    id: "ahdb_soil",
    label: "Soil & cover crop guidance",
    org: "AHDB (UK)",
    tier: "RES",
    url: "https://ahdb.org.uk/greatsoils",
    snippet:
      "Extension-grade UK guidance on assessing soil structure, selecting cover-crop mixes for a given rotation slot, and phasing reduced tillage without a yield collapse.",
  },
  fao_gsp: {
    id: "fao_gsp",
    label: "Global Soil Partnership",
    org: "FAO",
    tier: "GOV",
    url: "https://www.fao.org/global-soil-partnership/",
    snippet:
      "Sustainable soil management maintains or enhances soil's supporting, provisioning and regulating services without harming the soil functions that enable them.",
  },

  // --- Stack 5: carbon farming & markets (tightest grounding) -------------
  eu_crcf: {
    id: "eu_crcf",
    label: "Carbon Removals & Carbon Farming Certification (CRCF)",
    org: "European Commission",
    tier: "GOV",
    url: "https://climate.ec.europa.eu/eu-action/carbon-removals-and-carbon-farming_en",
    snippet:
      "The EU's CRCF framework sets rules for certifying carbon farming, requiring additionality, robust quantification, long-term monitoring and independent verification before removals can be claimed or sold.",
  },
  ghg_protocol_ag: {
    id: "ghg_protocol_ag",
    label: "Agricultural Guidance / Scope 3",
    org: "GHG Protocol",
    tier: "STD",
    url: "https://ghgprotocol.org/",
    snippet:
      "The GHG Protocol is the standard your buyers' Scope 3 accounting is built on; farm-level emissions and removals must be quantified consistently with it to be credible up the supply chain.",
  },

  // --- Funding money-map --------------------------------------------------
  eu_cap: {
    id: "eu_cap",
    label: "CAP eco-schemes & national Strategic Plans",
    org: "European Commission",
    tier: "GOV",
    url: "https://agriculture.ec.europa.eu/common-agricultural-policy/income-support/eco-schemes_en",
    snippet:
      "CAP eco-schemes pay for practices like cover crops, reduced tillage and rotation (25% of direct payments are ring-fenced for them), but the exact payments and eligibility are set in each member state's national CAP Strategic Plan — you apply through your national paying agency, not the EU.",
  },
  uk_sfi: {
    id: "uk_sfi",
    label: "Sustainable Farming Incentive (SFI)",
    org: "UK Government (Defra)",
    tier: "GOV",
    url: "https://www.gov.uk/government/publications/sustainable-farming-incentive-2026-sfi26",
    snippet:
      "England's SFI (SFI26) pays quarterly, on typically 3-year agreements, for actions that improve soil health, biodiversity and water run-off while keeping land in production. Use the 'Find funding for land or farms' tool to pick actions, then apply in the Rural Payments service during an application window.",
  },
  usda_eqip_csp: {
    id: "usda_eqip_csp",
    label: "EQIP & CSP conservation programs",
    org: "USDA NRCS",
    tier: "GOV",
    url: "https://www.nrcs.usda.gov/programs-initiatives/environmental-quality-incentives-program",
    snippet:
      "USDA's EQIP cost-shares specific conservation practices (cover crops, no-till, nutrient management) and CSP rewards whole-farm conservation; both are applied for through your local NRCS office via form CPA-1200, with year-round sign-up and periodic ranking cut-offs.",
  },

  // --- Cross-cutting ------------------------------------------------------
  ipcc_2019: {
    id: "ipcc_2019",
    label: "2019 Refinement — Tier 1 emission factors",
    org: "IPCC",
    tier: "STD",
    url: "https://www.ipcc-nggip.iges.or.jp/public/2019rf/index.html",
    snippet:
      "IPCC Tier 1 emission factors are the default coefficients behind farm carbon calculations, including the tracker's — good enough to plan with, but Tier 2/3 farm-specific data is stronger for a claim.",
  },
  eu_green_claims: {
    id: "eu_green_claims",
    label: "Green Claims Directive",
    org: "European Commission",
    tier: "STD",
    url: "https://environment.ec.europa.eu/topics/circular-economy/green-claims_en",
    snippet:
      "EU rules on environmental claims require that any green marketing claim be substantiated and independently verified before use — so treat unverified carbon or 'regenerative' claims as internal planning only.",
  },
};

export function getSources(ids: string[]): PlaybookSource[] {
  return ids
    .map((id) => SOURCE_LEDGER[id])
    .filter((s): s is PlaybookSource => Boolean(s));
}
