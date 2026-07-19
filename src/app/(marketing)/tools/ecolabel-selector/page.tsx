"use client";

import { useState } from "react";
import Link from "next/link";
import { analytics } from "@/lib/analytics";
import GatedDownload from "@/components/marketing/GatedDownload";

const ACCENT = "#5B4A9E"; // ecolabel accent
const GREEN = "#4AA88C"; // baseline funnel CTA

// ---------------------------------------------------------------------------
// STAGE 1 — "Which certification path fits?"
// Reframes the old family recommendation as a concrete certification TRACK:
// GlobalG.A.P. (IFA), EU Organic, EU Ecolabel, Rainforest Alliance / Fairtrade,
// with B Corp as a "later" mention. The claim that matters most picks the
// track; product decides whether a farm-assurance scheme even applies; product
// + market tune the concrete named labels; current certs + buyer pressure add
// an honest context note.
// ---------------------------------------------------------------------------

type TrackKey =
  | "globalgap"
  | "euorganic"
  | "euecolabel"
  | "rainforest"
  | "bcorp";

type Track = {
  name: string;
  standard: string;
  why: string;
  later: string;
};

const TRACKS: Record<TrackKey, Track> = {
  globalgap: {
    name: "GlobalG.A.P. (IFA)",
    standard: "Farm-assurance standard — the retailer baseline for fresh produce",
    why: "Your buyers care first that produce is safe and responsibly farmed, and most EU retailers won't even list you without a recognised Good Agricultural Practice certificate. GlobalG.A.P. Integrated Farm Assurance is the de-facto entry ticket — it audits food safety, traceability, worker welfare and environmental practice in one scheme.",
    later:
      "Later, once the farm-level certificate is in place, B Corp can certify the whole business's ethics and governance — but it's a company-wide step, not the produce label your buyers are asking for now.",
  },
  euorganic: {
    name: "EU Organic",
    standard: "ISO Type I — third-party certified, method-based",
    why: "Organic / chemical-free is your headline claim, and it's legally protected in the EU. The green-leaf EU Organic mark is third-party certified against public regulation — the credibility comes from an independent control body, not your own wording, which is exactly what makes the claim defensible.",
    later:
      "Later, B Corp can certify your wider business ethics and governance on top of the product-level organic mark — treat it as a second step, not the first.",
  },
  euecolabel: {
    name: "EU Ecolabel",
    standard: "ISO Type I — third-party certified, lifecycle-based",
    why: "Your differentiator is lower environmental impact across the product's life, not how a single crop is grown. The EU Ecolabel (the Flower) is a lifecycle-based, third-party scheme covering many product and service categories — the right home for a whole-of-product environmental claim.",
    later:
      "Later, B Corp can certify company-level ethics and governance alongside the product Ecolabel — a natural follow-on once the product mark is earned.",
  },
  rainforest: {
    name: "Rainforest Alliance / Fairtrade",
    standard: "ISO Type I — third-party certified, social + environmental",
    why: "Fair labour and social conditions are what your buyers weight most heavily — typical for coffee, cocoa, tea, bananas and other tropical commodities. Rainforest Alliance and Fairtrade audit wages, working conditions, community standards and environmental practice, so the signal is only as strong as that independent verification.",
    later:
      "Later, B Corp can extend the same ethics story to your whole company; the crop-level social certificate is what unlocks the buyer conversation first.",
  },
  bcorp: {
    name: "B Corp (with a product certificate first)",
    standard: "Whole-business certification — governance, workers, community, environment",
    why: "You're leading with whole-business ethics and governance, and B Corp certifies exactly that across the entire company. In practice buyers still expect a product- or farm-level mark too, so pair B Corp with the certificate your category demands (GlobalG.A.P., EU Organic or EU Ecolabel) rather than relying on it alone.",
    later:
      "Sequence it: earn the product / farm certificate your buyers require, then pursue B Corp as the company-wide credential — the evidence you gather for one feeds the other.",
  },
};

function pickTrack(claim: string, product: string): TrackKey {
  if (claim === "governance") return "bcorp";
  if (claim === "gap") {
    // Farm-assurance only makes sense for food / farm production.
    if (product === "services" || product === "consumer") return "euecolabel";
    return "globalgap";
  }
  if (claim === "organic") return "euorganic";
  if (claim === "social") return "rainforest";
  if (claim === "environmental") return "euecolabel";
  return "euorganic";
}

// Tune the concrete named labels to product + market so the result isn't
// generic. Falls back to each track's broadly-recognised marks.
function recommendedLabels(
  track: TrackKey,
  product: string,
  market: string
): string {
  const german = market === "german";
  const eu = market === "eu" || german;

  switch (track) {
    case "globalgap":
      if (product === "livestock")
        return "GLOBALG.A.P. IFA (Livestock), the GRASP labour add-on, the GGN consumer label";
      return "GLOBALG.A.P. IFA (Integrated Farm Assurance), the GRASP labour add-on, the GGN consumer label";
    case "euorganic":
      if (product === "consumer") return "GOTS, COSMOS, ECOCERT";
      if (german) return "EU Organic (green leaf) plus the German Bio-Siegel";
      if (eu) return "EU Organic (green leaf) plus your national organic mark";
      return "EU Organic (green leaf), USDA Organic for US buyers";
    case "euecolabel":
      if (german) return "EU Ecolabel (the Flower), Blue Angel (Blauer Engel)";
      return "EU Ecolabel (the Flower)";
    case "rainforest":
      if (german) return "Rainforest Alliance, Fairtrade International / GEPA";
      return "Rainforest Alliance, Fairtrade International";
    case "bcorp":
      return "B Corp Certification (B Lab), paired with your category's product mark";
    default:
      return "";
  }
}

// An honest urgency note built from current certs + buyer pressure. Doesn't
// change the recommended track — just frames how fast to move and where B Corp
// realistically sits.
function contextNote(current: string, pressure: string): string {
  const urgency =
    pressure === "required"
      ? "Buyers already require this to list you, so treat it as time-critical — start the evidence trail now."
      : pressure === "asking"
      ? "Buyers are asking but it isn't yet mandatory, so you have room to build the evidence properly before you apply."
      : "You're moving proactively to differentiate — the advantage is you can build clean records from day one.";

  const standing =
    current === "multiple"
      ? "You already hold several certifications, so much of the underlying evidence exists — this is mostly about mapping it to the new scheme's criteria."
      : current === "one"
      ? "You already hold one eco / organic label, so you have a real base to extend from rather than starting cold."
      : current === "basic"
      ? "You have basic food-safety or quality certification, which gives you documentation habits the audit will build on."
      : "You don't hold a certification yet, so the readiness check below matters most — it shows exactly what to build first.";

  return `${standing} ${urgency}`;
}

const STAGE1_QUESTIONS = [
  {
    id: "product",
    label: "What do you produce or operate?",
    options: [
      { key: "produce", label: "Fresh produce — fruit, vegetables, arable crops" },
      { key: "livestock", label: "Livestock, dairy or aquaculture" },
      { key: "processed", label: "Processed food & beverage" },
      { key: "consumer", label: "Textiles, cosmetics or consumer goods" },
      { key: "services", label: "Services or general operation" },
    ],
  },
  {
    id: "claim",
    label: "Which claim matters most to your buyers?",
    options: [
      { key: "gap", label: "Safe, responsibly farmed produce (food safety + good practice)" },
      { key: "organic", label: "Organic / chemical-free production" },
      { key: "social", label: "Fair labour & social conditions" },
      { key: "environmental", label: "Lower environmental / lifecycle impact" },
      { key: "governance", label: "Whole-business ethics & governance" },
    ],
  },
  {
    id: "market",
    label: "Where's your primary target market?",
    options: [
      { key: "eu", label: "EU retail / supermarkets" },
      { key: "german", label: "German-speaking markets" },
      { key: "global", label: "Global consumers" },
      { key: "b2b", label: "B2B / corporate buyers" },
    ],
  },
  {
    id: "current",
    label: "What certifications do you already hold?",
    options: [
      { key: "none", label: "None yet" },
      { key: "basic", label: "Basic food-safety or quality (e.g. ISO, HACCP)" },
      { key: "one", label: "One eco / organic label" },
      { key: "multiple", label: "Several certifications" },
    ],
  },
  {
    id: "pressure",
    label: "How much buyer pressure are you under?",
    options: [
      { key: "required", label: "Retailers require it to list us" },
      { key: "asking", label: "Buyers are asking, but it's not mandatory" },
      { key: "proactive", label: "No pressure yet — we're moving proactively" },
    ],
  },
] as const;

// ---------------------------------------------------------------------------
// STAGE 2 — "What evidence is missing?"
// Yes = 2, Partially = 1, No = 0. Each question carries a remediation "action"
// and a "gap" detail, maps to one of the app's tracker DOMAINS (materials /
// outputs / energy / workforce / context) so the user sees exactly where the
// gap lives, and a 30 / 60 / 90-day horizon for the gap plan.
// ---------------------------------------------------------------------------

type DomainKey = "materials" | "outputs" | "energy" | "workforce" | "context";
type Horizon = "30" | "60" | "90";

type EvidenceQuestion = {
  q: string;
  evidence: string;
  domain: DomainKey;
  horizon: Horizon;
  action: string;
  gap: string;
};

const STAGE2_QUESTIONS: EvidenceQuestion[] = [
  {
    q: "Can you trace every input and output batch back to its source (chain-of-custody)?",
    evidence: "Chain-of-custody / traceability log",
    domain: "materials",
    horizon: "30",
    action:
      "Start a chain-of-custody log that links each input and output batch to its source and destination.",
    gap: "Without traceability, GlobalG.A.P., organic and social schemes can't verify your claims — every one of them requires you to prove where material came from and where it went.",
  },
  {
    q: "Do you keep full records of fertiliser and crop-protection use, including your IPM decisions?",
    evidence: "Fertiliser & crop-protection (PPP / IPM) records",
    domain: "materials",
    horizon: "30",
    action:
      "Log every fertiliser and crop-protection (PPP) application — product, rate, date, operator — plus the IPM reasoning behind each decision.",
    gap: "Input records are a core audit point. Certifiers check that plant-protection products are approved, justified (Integrated Pest Management) and applied within limits — undocumented spraying fails the audit.",
  },
  {
    q: "Do you have soil management and soil-test records for your parcels?",
    evidence: "Soil management & test records",
    domain: "outputs",
    horizon: "60",
    action:
      "Keep soil test results and a soil-management record per parcel, covering nutrient planning and erosion measures.",
    gap: "Soil health is assessed against your management and testing records. Building a per-parcel history takes a cycle, so start the record now rather than reconstructing it later.",
  },
  {
    q: "Do you record water sources, irrigation volumes and any abstraction permits?",
    evidence: "Water use & irrigation records",
    domain: "context",
    horizon: "60",
    action:
      "Record water sources, irrigation volumes and any abstraction permits or licences.",
    gap: "Water stewardship is a standing criterion in farm-assurance schemes. Auditors want to see where water comes from, how much you use, and that abstraction is legal.",
  },
  {
    q: "Can you evidence fair labour and worker welfare — contracts, wages, hours, grievance routes?",
    evidence: "Labour & worker-welfare records",
    domain: "workforce",
    horizon: "90",
    action:
      "Document worker contracts, wages, working hours, training and a grievance procedure; be ready for the labour module (e.g. GRASP) to be checked independently.",
    gap: "Labour and worker-welfare evidence is where social and farm-assurance schemes are strictest, and it's often verified by interview — self-declaration alone won't pass.",
  },
  {
    q: "Do you have a biodiversity or habitat-protection plan for your site?",
    evidence: "Biodiversity / habitat protection plan",
    domain: "context",
    horizon: "60",
    action:
      "Write a short biodiversity plan — buffer zones, habitat areas, no-spray margins and any restoration measures.",
    gap: "Biodiversity is increasingly a named requirement. A simple, documented plan showing protected areas and buffers is what auditors look for — no plan reads as no management.",
  },
  {
    q: "Do you record how waste is segregated, stored and disposed of?",
    evidence: "Waste segregation & disposal records",
    domain: "outputs",
    horizon: "60",
    action:
      "Record how waste is segregated, stored and disposed of, and keep licensed-contractor receipts.",
    gap: "Waste handling is audited for pollution risk and legal disposal. Contractor receipts and a segregation record are the evidence that closes this gap.",
  },
  {
    q: "Do you keep records of energy and fuel use across your operation?",
    evidence: "Energy & fuel use records",
    domain: "energy",
    horizon: "30",
    action:
      "Pull energy and fuel use into a running record straight from meters and invoices.",
    gap: "Energy and fuel records feed both efficiency criteria and any carbon claim. They're one of the quickest gaps to close because the raw data already exists on your invoices.",
  },
  {
    q: "Do you have a history of past audits or inspections, with corrective actions closed out?",
    evidence: "Audit & inspection history",
    domain: "context",
    horizon: "90",
    action:
      "Gather past inspection and audit reports and note which corrective actions are still open, so you walk into the next audit prepared.",
    gap: "A clean audit history — and evidence that previous non-conformities were fixed — is what a certifier reviews before granting or renewing certification.",
  },
  {
    q: "Is one named person clearly responsible for compliance and documentation?",
    evidence: "Named documentation owner",
    domain: "workforce",
    horizon: "30",
    action:
      "Name one person accountable for compliance documentation, so records are maintained and recertification doesn't slip.",
    gap: "Without a named owner, records drift and recertification lapses. Every scheme expects a clear point of responsibility for the evidence.",
  },
];

const options = [
  { label: "Yes", value: 2 },
  { label: "Partially", value: 1 },
  { label: "No", value: 0 },
] as const;

const DOMAIN_ORDER: DomainKey[] = [
  "materials",
  "outputs",
  "energy",
  "workforce",
  "context",
];

const DOMAINS: Record<DomainKey, { label: string; blurb: string }> = {
  materials: {
    label: "Materials & Inputs",
    blurb: "Chain-of-custody and the inputs (fertiliser, crop protection) you apply.",
  },
  outputs: {
    label: "Outputs & Waste",
    blurb: "What your production yields — soil management and waste handling.",
  },
  energy: {
    label: "Energy",
    blurb: "Energy and fuel use across the operation.",
  },
  workforce: {
    label: "Workforce",
    blurb: "Labour, worker welfare and the person who owns your documentation.",
  },
  context: {
    label: "Context",
    blurb: "Water, biodiversity and your audit / inspection history.",
  },
};

const HORIZONS: { key: Horizon; title: string; subtitle: string }[] = [
  { key: "30", title: "Next 30 days", subtitle: "Quick documentation wins" },
  { key: "60", title: "Next 60 days", subtitle: "Records & systems" },
  { key: "90", title: "Next 90 days", subtitle: "Prepare for audit" },
];

function readinessBand(pct: number) {
  if (pct < 40) {
    return {
      level: "Early stage",
      summary:
        "You've got the ambition but not yet the paper trail. Certification would fail today — the good news is you know exactly what to build first.",
    };
  }
  if (pct < 70) {
    return {
      level: "Building",
      summary:
        "You have real foundations but gaps remain. Close them before you invite an auditor — a failed audit costs more than the delay.",
    };
  }
  if (pct < 90) {
    return {
      level: "Nearly ready",
      summary:
        "You're close. Tighten the remaining weak spots and you'll walk into an audit with evidence, not explanations.",
    };
  }
  return {
    level: "Application-ready",
    summary:
      "Your documentation and data are in strong shape. You can approach a certifier with the evidence they'll ask for.",
  };
}

export default function EcolabelSelectorPage() {
  const [recAnswers, setRecAnswers] = useState<Record<string, string>>({});
  const [readyAnswers, setReadyAnswers] = useState<(number | null)[]>(
    new Array(STAGE2_QUESTIONS.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);

  const setRec = (id: string, key: string) =>
    setRecAnswers((prev) => ({ ...prev, [id]: key }));

  const setReady = (index: number, value: number) =>
    setReadyAnswers((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });

  const allRecAnswered = STAGE1_QUESTIONS.every((q) => recAnswers[q.id]);
  const allReadyAnswered = readyAnswers.every((a) => a !== null);
  const allAnswered = allRecAnswered && allReadyAnswered;

  // --- Stage 1 result -------------------------------------------------------
  const trackKey = pickTrack(recAnswers.claim || "", recAnswers.product || "");
  const track = TRACKS[trackKey];
  const labels = recommendedLabels(
    trackKey,
    recAnswers.product || "",
    recAnswers.market || ""
  );
  const note = contextNote(
    recAnswers.current || "none",
    recAnswers.pressure || "proactive"
  );

  // --- Stage 2 scoring ------------------------------------------------------
  const rawScore = readyAnswers.reduce((s: number, a) => s + (a || 0), 0);
  const maxScore = STAGE2_QUESTIONS.length * 2;
  const readiness = Math.round((rawScore / maxScore) * 100);
  const band = readinessBand(readiness);

  // Weakest area = the tracker domain with the lowest average answer.
  const domainAverages = DOMAIN_ORDER.map((dk) => {
    const idxs = STAGE2_QUESTIONS.map((q, i) => ({ q, i })).filter(
      (x) => x.q.domain === dk
    );
    const avg =
      idxs.reduce((s, x) => s + (readyAnswers[x.i] ?? 0), 0) / idxs.length;
    return { domain: dk, avg };
  });
  const weakestDomain = domainAverages.reduce((lo, d) =>
    d.avg < lo.avg ? d : lo
  );
  const weakestQuestions = STAGE2_QUESTIONS.filter(
    (q, i) => q.domain === weakestDomain.domain && (readyAnswers[i] ?? 0) < 2
  );

  // Gap plan: Not-yet / Partially items, bucketed by horizon.
  const gapItems = STAGE2_QUESTIONS.map((q, i) => ({
    ...q,
    answer: readyAnswers[i] ?? 0,
  })).filter((q) => q.answer < 2);

  const handleSubmit = () => {
    if (!allAnswered) return;
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    analytics.track("assessment_completed", {
      label: "certification_selector",
      track: trackKey,
      readiness,
      readiness_level: band.level,
    });
  };

  const handleReset = () => {
    setRecAnswers({});
    setReadyAnswers(new Array(STAGE2_QUESTIONS.length).fill(null));
    setShowResults(false);
  };

  // --- Results view ---------------------------------------------------------
  if (showResults) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16">
        <nav className="mb-8">
          <Link
            href="/tools"
            className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>{" "}
            Back to Tools
          </Link>
        </nav>

        {/* Recommended certification track */}
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
            Your recommended certification track
          </p>
          <div
            className="inline-flex items-center justify-center px-6 py-2 rounded-full text-white text-lg font-bold mb-3"
            style={{ backgroundColor: ACCENT }}
          >
            {track.name}
          </div>
          <p className="text-sm text-gray-500 mb-3">{track.standard}</p>
          <p className="text-gray-600 max-w-xl mx-auto">{track.why}</p>
        </div>

        {/* Concrete labels + context note */}
        <div className="bg-gray-50 rounded-lg p-6 mb-4">
          <h2 className="font-semibold text-gray-900 mb-2">
            Named labels to look at first
          </h2>
          <p className="text-gray-700 mb-1">{labels}</p>
          <p className="text-sm text-gray-500">
            Tuned to what you make and where you sell. Before committing, confirm
            your specific buyers recognise and require the label — recognition
            varies by market and channel.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
          <h2 className="font-semibold text-gray-900 mb-2">Where you stand</h2>
          <p className="text-sm text-gray-600">{note}</p>
        </div>
        <div className="border-l-4 rounded-r-lg p-4 mb-8 bg-[#5B4A9E]/5" style={{ borderColor: ACCENT }}>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800">Later:</span> {track.later}
          </p>
        </div>

        {/* Readiness score */}
        <div className="text-center mb-8">
          <div
            className="inline-flex items-center justify-center w-24 h-24 rounded-full text-white text-2xl font-bold mb-4"
            style={{ backgroundColor: readiness >= 70 ? GREEN : ACCENT }}
          >
            {readiness}%
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Evidence readiness: {band.level}
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">{band.summary}</p>
        </div>

        {/* Weakest area */}
        <div
          className="rounded-lg p-6 mb-8 text-white"
          style={{ backgroundColor: ACCENT }}
        >
          <h2 className="font-semibold mb-2">
            Your weakest area — {DOMAINS[weakestDomain.domain].label}
          </h2>
          <p className="text-white/85 text-sm mb-3">
            {DOMAINS[weakestDomain.domain].blurb} This is where your evidence is
            thinnest, so fix it first.
          </p>
          {weakestQuestions.length > 0 ? (
            <ul className="space-y-2">
              {weakestQuestions.map((q) => (
                <li key={q.evidence} className="text-white/90 text-sm">
                  • {q.action}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-white/90 text-sm">
              Even your weakest domain is in decent shape — keep the records
              current and you&apos;ll hold this ground.
            </p>
          )}
        </div>

        {/* 30 / 60 / 90-day gap plan */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="font-semibold text-gray-900 mb-1">
            Your 30 / 60 / 90-day gap plan
          </h2>
          <p className="text-sm text-gray-500 mb-5">
            Only the &quot;No&quot; and &quot;Partially&quot; items, bucketed by
            how long each takes to close. Each line names the tracker domain it
            lives in.
          </p>
          <div className="space-y-6">
            {HORIZONS.map((h) => {
              const items = gapItems.filter((g) => g.horizon === h.key);
              return (
                <div key={h.key}>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span
                      className="text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded text-white"
                      style={{ backgroundColor: ACCENT }}
                    >
                      {h.title}
                    </span>
                    <span className="text-sm text-gray-500">{h.subtitle}</span>
                  </div>
                  {items.length > 0 ? (
                    <ul className="space-y-2">
                      {items.map((g) => (
                        <li
                          key={g.evidence}
                          className="flex items-start gap-3 text-sm"
                        >
                          <span className="flex-shrink-0 mt-0.5 text-[11px] font-medium text-gray-500 bg-gray-100 rounded px-2 py-0.5">
                            {DOMAINS[g.domain].label}
                          </span>
                          <span className="text-gray-700">{g.action}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-400">
                      Nothing outstanding in this window — you&apos;re covered
                      here.
                    </p>
                  )}
                </div>
              );
            })}
          </div>
          {gapItems.length === 0 && (
            <p className="text-sm text-gray-600 mt-4">
              No open gaps — your evidence answers were all &quot;Yes.&quot;
              Keep the records live and you can approach a certifier.
            </p>
          )}
        </div>

        {/* Evidence checklist by tracker domain */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="font-semibold text-gray-900 mb-1">
            Evidence checklist, by tracker domain
          </h2>
          <p className="text-sm text-gray-500 mb-5">
            Every piece of evidence a certifier will ask for, grouped the way the
            free baseline tracker stores it. The{" "}
            <Link href="/signup" className="underline hover:text-gray-700">
              free baseline tracker
            </Link>{" "}
            is where this evidence actually gets recorded — once, then reused for
            every scheme.
          </p>
          <div className="space-y-5">
            {DOMAIN_ORDER.map((dk) => {
              const items = STAGE2_QUESTIONS.map((q, i) => ({
                ...q,
                answer: readyAnswers[i],
              })).filter((q) => q.domain === dk);
              if (items.length === 0) return null;
              return (
                <div key={dk}>
                  <p className="font-medium text-gray-900 mb-2">
                    {DOMAINS[dk].label}
                  </p>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li
                        key={item.evidence}
                        className="flex items-start gap-3 text-sm"
                      >
                        <span
                          className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs ${
                            item.answer === 2
                              ? "bg-[#4AA88C]"
                              : item.answer === 1
                              ? "bg-amber-500"
                              : "bg-gray-400"
                          }`}
                        >
                          {item.answer === 2 ? "✓" : item.answer === 1 ? "~" : "✗"}
                        </span>
                        <span className="text-gray-700">{item.evidence}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Take-it-with-you download */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="font-semibold text-gray-900 mb-2">
            Take the readiness checklist with you
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Get the Ecolabel Readiness Checklist — the documents and data you
            need before you apply (with a live self-scoring sheet), a
            which-track guide, and the ISO Type I/II/III explainer. Drop your
            email and download it now.
          </p>
          <GatedDownload
            feature="ecolabel-checklist"
            fileUrl="/downloads/ecolabel-readiness-checklist.xlsx"
            fileName="Ecolabel-Readiness-Checklist.xlsx"
            buttonLabel="Get the checklist"
            downloadLabel="Download the checklist (.xlsx)"
          />
        </div>

        {/* Funnel CTA */}
        <div className="flex flex-col gap-4">
          <Link
            href="/signup?from=ecolabel-selector&stack=1"
            className="text-white px-6 py-3 rounded-md font-medium hover:bg-[#3d8f77] text-center"
            style={{ backgroundColor: GREEN }}
          >
            Start Your Baseline — Free Plan →
          </Link>
          <div className="flex gap-4">
            <Link
              href="/articles/the-different-types-of-ecolabels"
              className="flex-1 text-center border border-gray-300 text-gray-700 px-6 py-3 rounded font-semibold hover:bg-gray-50 transition-colors"
            >
              Compare ecolabel types
            </Link>
            <button
              onClick={handleReset}
              className="flex-1 text-center border border-gray-300 text-gray-700 px-6 py-3 rounded font-semibold hover:border-gray-400"
            >
              Retake
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-4">
          The free plan includes the full 8-domain tracker, CSV exports, and
          multi-site support — the baseline evidence every certification path
          needs.
        </p>
      </div>
    );
  }

  // --- Questions view -------------------------------------------------------
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <nav className="mb-8">
        <Link
          href="/tools"
          className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>{" "}
          Back to Tools
        </Link>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-full text-white flex items-center justify-center font-bold"
            style={{ backgroundColor: ACCENT }}
          >
            ✓
          </div>
          <span className="text-sm text-gray-500">Ecolabel & Certification</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Certification Path & Evidence-Gap Finder
        </h1>
        <p className="text-gray-600">
          Two stages, one short tool: which certification track fits your
          product and buyers, and exactly what evidence you&apos;re missing —
          mapped to the domains you&apos;ll track it in.
        </p>
      </header>

      {/* Stage 1 */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">
          1. Which certification path fits?
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Five quick questions about what you make, the claim that matters, your
          market, and the pressure you&apos;re under.
        </p>
        <div className="space-y-6">
          {STAGE1_QUESTIONS.map((q) => (
            <div key={q.id} className="bg-gray-50 rounded-lg p-6">
              <p className="font-medium text-gray-900 mb-4">{q.label}</p>
              <div className="grid gap-2">
                {q.options.map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => setRec(q.id, opt.key)}
                    className={`text-left py-2 px-4 rounded font-medium text-sm transition-colors ${
                      recAnswers[q.id] === opt.key
                        ? "text-white"
                        : "bg-white border border-gray-300 text-gray-700 hover:border-[#5B4A9E]"
                    }`}
                    style={
                      recAnswers[q.id] === opt.key
                        ? { backgroundColor: ACCENT }
                        : undefined
                    }
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stage 2 */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">
          2. What evidence is missing?
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Yes / Partially / No — honest answers give you an honest gap plan. Each
          question maps to a tracker domain.
        </p>
        <div className="space-y-6">
          {STAGE2_QUESTIONS.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-start justify-between gap-3 mb-4">
                <p className="font-medium text-gray-900">
                  {index + 1}. {item.q}
                </p>
                <span className="flex-shrink-0 text-[11px] font-medium text-gray-500 bg-white border border-gray-200 rounded px-2 py-0.5">
                  {DOMAINS[item.domain].label}
                </span>
              </div>
              <div className="flex gap-3">
                {options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setReady(index, option.value)}
                    className={`flex-1 py-2 px-4 rounded font-medium transition-colors ${
                      readyAnswers[index] === option.value
                        ? "bg-[#5B4A9E] text-white"
                        : "bg-white border border-gray-300 text-gray-700 hover:border-[#5B4A9E]"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8">
        <button
          onClick={handleSubmit}
          disabled={!allAnswered}
          className={`w-full py-3 rounded font-semibold transition-colors ${
            allAnswered
              ? "text-white hover:bg-[#3d8f76]"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
          style={allAnswered ? { backgroundColor: GREEN } : undefined}
        >
          {allAnswered
            ? "See my certification track & evidence gaps"
            : "Answer every question to see your results"}
        </button>
      </div>
    </div>
  );
}
