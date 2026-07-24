import { ISSUE_LABEL, type SpeciesPick } from "@/lib/playbooks/stack-5-recommend";
import type { IssueKey } from "@/lib/playbooks/stack-5";

// Cover-crop species matched to soil + issues, with rate/window/termination.
// A shared premium slot: rendered under the "cover crops" focus area for stacks
// that supply a species recommender.
export default function CoverCropBlock({
  picks,
  mixNote,
  issues,
  hasSoil,
  crops,
  accent,
}: {
  picks: SpeciesPick[];
  mixNote: string;
  issues: IssueKey[];
  hasSoil: boolean;
  crops: string;
  accent: string;
}) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 mb-4">
      <p className="text-sm font-semibold text-gray-800 mb-1">
        {issues.length > 0 || hasSoil
          ? "Recommended for your soil and issues"
          : "Which cover crop? It depends on your goal and rotation slot"}
      </p>
      <p className="text-xs text-gray-500 mb-3">{mixNote}</p>
      <ul className="text-sm text-gray-700 space-y-3">
        {picks.map((sp) => (
          <li key={sp.name} className="border-l-2 pl-3" style={{ borderColor: "#D1D9D4" }}>
            <span className="font-medium">{sp.name}</span>{" "}
            <span className="text-xs text-gray-400">({sp.family})</span>
            {sp.matched.length > 0 && (
              <span className="text-xs ml-1" style={{ color: accent }}>
                · tackles {sp.matched.map((m) => ISSUE_LABEL[m].toLowerCase()).join(", ")}
              </span>
            )}
            <span className="block text-gray-600">{sp.note}</span>
            <span className="block text-xs text-gray-500 mt-1">
              <strong>Rate</strong> {sp.rateKgHa} kg/ha · <strong>Drill</strong> {sp.sowWindow} ·{" "}
              <strong>Terminate</strong> {sp.terminate}
            </span>
          </li>
        ))}
      </ul>
      <p className="text-xs text-gray-500 mt-3">
        <strong>Where it goes:</strong> drill into the gap after an early-harvested crop
        {crops.trim() ? ` in your rotation (${crops.trim()})` : ""} — e.g. after winter barley or
        oilseed rape, before a spring crop. Rates and windows are directional for a temperate climate;
        shift about two weeks for cooler or warmer areas, and cut rates to a third or half in a mix.
      </p>
    </div>
  );
}
