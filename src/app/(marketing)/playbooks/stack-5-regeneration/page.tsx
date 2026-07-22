"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { analytics } from "@/lib/analytics";
import { buildPlaybook } from "@/lib/playbooks";
import type { PlaybookInputs, Region, RoiSnapshot } from "@/lib/playbooks";
import { REGION_LABELS } from "@/lib/playbooks/types";
import PlaybookView from "@/components/marketing/PlaybookView";

// Regenerative-cluster identity (matches the ROI calculator this funnels from).
const ACCENT = "#2D5A47";

// localStorage key the Regenerative ROI tool writes its result to for handoff.
const HANDOFF_KEY = "eu:playbook:stack-5";
// localStorage key the onboarding flow reads to seed a Passport from a playbook.
const SEED_KEY = "eu:passport:seed";

const PRACTICE_OPTIONS = [
  { key: "coverCrops", label: "Cover crops" },
  { key: "reducedTill", label: "Reduced / no-till" },
  { key: "rotation", label: "Diverse rotation" },
  { key: "compost", label: "Compost / manure" },
] as const;

const REGIONS: Region[] = ["eu", "uk", "us", "other"];

interface HandoffData {
  hectares?: number;
  practices?: string[];
  inputSpendPerHa?: number;
  grossMarginPerHa?: number;
  roi?: RoiSnapshot;
}

export default function Stack5PlaybookPage() {
  const router = useRouter();
  const [hectares, setHectares] = useState(100);
  const [region, setRegion] = useState<Region>("eu");
  const [practices, setPractices] = useState<string[]>([
    "coverCrops",
    "reducedTill",
  ]);
  const [roi, setRoi] = useState<RoiSnapshot | undefined>(undefined);
  const [cameFromTool, setCameFromTool] = useState(false);

  // Read the handoff from the ROI tool, if the grower arrived that way.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(HANDOFF_KEY);
      if (raw) {
        const data: HandoffData = JSON.parse(raw);
        if (typeof data.hectares === "number" && data.hectares > 0)
          setHectares(data.hectares);
        if (Array.isArray(data.practices) && data.practices.length > 0)
          setPractices(data.practices);
        if (data.roi) setRoi(data.roi);
        setCameFromTool(true);
      }
    } catch {
      // Ignore malformed handoff — the form defaults are fine.
    }
    analytics.track("playbook_viewed", { stack: 5 });
  }, []);

  const inputs: PlaybookInputs = useMemo(
    () => ({ stack: 5, hectares, region, practices, roi }),
    [hectares, region, practices, roi],
  );

  const playbook = useMemo(() => buildPlaybook(inputs), [inputs]);

  const togglePractice = (key: string) =>
    setPractices((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    );

  const handleConvertToPassport = () => {
    try {
      localStorage.setItem(
        SEED_KEY,
        JSON.stringify({ stack: 5, hectares, region, practices, roi }),
      );
    } catch {
      // Non-fatal — onboarding still works without the seed.
    }
    analytics.track("playbook_convert_to_passport", { stack: 5 });
    router.push("/onboarding?from=playbook&stack=5");
  };

  const operationBar = (
    <section className="bg-gray-50 rounded-lg p-6 mb-10">
      <h2 className="font-medium text-gray-900 mb-4">Your operation</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Farm size (hectares)
          </label>
          <input
            type="number"
            min="0"
            step="1"
            value={hectares}
            onChange={(e) => setHectares(parseFloat(e.target.value) || 0)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent"
            style={{ outlineColor: ACCENT }}
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Region</label>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value as Region)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:border-transparent"
            style={{ outlineColor: ACCENT }}
          >
            {REGIONS.map((r) => (
              <option key={r} value={r}>
                {REGION_LABELS[r]}
              </option>
            ))}
          </select>
        </div>
      </div>
      <label className="block text-sm text-gray-600 mb-2">
        Practices you run (or plan to)
      </label>
      <div className="grid grid-cols-2 gap-2">
        {PRACTICE_OPTIONS.map((p) => {
          const on = practices.includes(p.key);
          return (
            <button
              key={p.key}
              type="button"
              onClick={() => togglePractice(p.key)}
              className={`flex items-center gap-2 py-2 px-3 rounded-md border text-left text-sm font-medium transition-colors ${
                on
                  ? "text-white"
                  : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
              }`}
              style={
                on ? { backgroundColor: ACCENT, borderColor: ACCENT } : undefined
              }
            >
              <span
                className={`inline-flex items-center justify-center w-4 h-4 rounded border text-[10px] ${
                  on ? "border-white/70" : "border-gray-300"
                }`}
              >
                {on ? "✓" : ""}
              </span>
              {p.label}
            </button>
          );
        })}
      </div>
    </section>
  );

  return (
    <PlaybookView
      playbook={playbook}
      accent={ACCENT}
      cameFromTool={cameFromTool}
      operationBar={operationBar}
      backHref="/tools/regenerative-roi"
      backLabel="Back to the ROI calculator"
      onConvertToPassport={handleConvertToPassport}
    />
  );
}
