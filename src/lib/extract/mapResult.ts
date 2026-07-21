// Maps an esg-extract ExtractionResult onto a tracker record and commits it to
// the data store. Document-type driven: an electricity bill becomes one
// EnergyElectricity record, a waste manifest one Waste record, etc. Enum-typed
// fields get sensible defaults the user can refine later in the domain page.
import { v4 as uuid } from "uuid";
import { useDataStore } from "@/stores/dataStore";
import type { ConfidenceLevel, DataSource } from "@/types";

// esg-extract's public shapes (kept local to avoid a hard type dependency).
interface ExtractedField {
  field: string;
  value: number | string;
  unit: string;
  confidence: "high" | "medium" | "low";
}
export interface ExtractionResult {
  success: boolean;
  documentType: string;
  provider?: string;
  period?: string;
  fields: ExtractedField[];
}

export interface MappedRecord {
  domainLabel: string;
  detail: string;
  confidence: ConfidenceLevel;
  commit: (siteId: string, period: string) => void;
}

const num = (fields: ExtractedField[], name: string): number | undefined => {
  const f = fields.find((x) => x.field === name);
  if (!f) return undefined;
  const n = typeof f.value === "number" ? f.value : parseFloat(String(f.value));
  return Number.isFinite(n) ? n : undefined;
};

const rank: Record<ConfidenceLevel, number> = { high: 3, medium: 2, low: 1 };
const lowestConfidence = (
  fields: ExtractedField[],
  names: string[],
): ConfidenceLevel => {
  const used = fields.filter((f) => names.includes(f.field));
  if (used.length === 0) return "low";
  return used.reduce<ConfidenceLevel>(
    (acc, f) => (rank[f.confidence] < rank[acc] ? f.confidence : acc),
    "high",
  );
};

const quality = (source: DataSource, confidence: ConfidenceLevel) => ({
  source,
  confidence,
  lastUpdated: new Date().toISOString(),
});

/** Returns a mappable record for the detected document, or null if unsupported. */
export function mapResult(r: ExtractionResult): MappedRecord | null {
  const fields = r.fields ?? [];
  const store = () => useDataStore.getState();

  switch (r.documentType) {
    case "electricity_bill": {
      const kwh = num(fields, "electricityKwh");
      if (kwh === undefined) return null;
      const renewable = num(fields, "renewablePercent");
      const confidence = lowestConfidence(fields, ["electricityKwh"]);
      return {
        domainLabel: "Energy — Electricity",
        detail: `${kwh.toLocaleString()} kWh${renewable !== undefined ? ` · ${renewable}% renewable` : ""}`,
        confidence,
        commit: (siteId, period) =>
          store().addEnergyElectricity({
            id: uuid(),
            siteId,
            period,
            consumptionKwh: kwh,
            sourceGridPercent: 100,
            sourceOnsiteRenewablePercent: 0,
            sourcePpaPercent: 0,
            ...quality("bill", confidence),
          }),
      };
    }
    case "water_bill": {
      const m3 = num(fields, "waterM3");
      if (m3 === undefined) return null;
      const confidence = lowestConfidence(fields, ["waterM3"]);
      return {
        domainLabel: "Energy — Water",
        detail: `${m3.toLocaleString()} m³ withdrawn`,
        confidence,
        commit: (siteId, period) =>
          store().addEnergyWater({
            id: uuid(),
            siteId,
            period,
            withdrawalM3: m3,
            waterSource: "municipal",
            ...quality("bill", confidence),
          }),
      };
    }
    case "gas_invoice": {
      const diesel = num(fields, "dieselLiters");
      const petrol = num(fields, "petrolLiters");
      const fuel =
        diesel !== undefined
          ? { type: "diesel" as const, qty: diesel, key: "dieselLiters" }
          : petrol !== undefined
            ? { type: "petrol" as const, qty: petrol, key: "petrolLiters" }
            : null;
      if (!fuel) return null;
      const confidence = lowestConfidence(fields, [fuel.key]);
      return {
        domainLabel: "Energy — Fuel",
        detail: `${fuel.qty.toLocaleString()} L ${fuel.type}`,
        confidence,
        commit: (siteId, period) =>
          store().addEnergyFuel({
            id: uuid(),
            siteId,
            period,
            fuelType: fuel.type,
            quantity: fuel.qty,
            unit: "L",
            purpose: "vehicles",
            ...quality("invoice", confidence),
          }),
      };
    }
    case "waste_manifest": {
      const kg = num(fields, "totalWasteKg");
      if (kg === undefined) return null;
      const hazardous = (num(fields, "hazardousWasteKg") ?? 0) > 0;
      const recyclingRate = num(fields, "recyclingRate");
      const confidence = lowestConfidence(fields, ["totalWasteKg"]);
      return {
        domainLabel: "Outputs — Waste",
        detail: `${kg.toLocaleString()} kg${recyclingRate !== undefined ? ` · ${recyclingRate}% recycled` : ""}`,
        confidence,
        commit: (siteId, period) =>
          store().addWaste({
            id: uuid(),
            siteId,
            period,
            wasteCategory: hazardous ? "hazardous" : "general",
            quantityKg: kg,
            disposalRoute:
              recyclingRate !== undefined && recyclingRate >= 50
                ? "recycling"
                : "landfill",
            hazardous,
            ...quality("other", confidence),
          }),
      };
    }
    case "payroll_summary": {
      const total = num(fields, "totalEmployees");
      if (total === undefined) return null;
      const confidence = lowestConfidence(fields, ["totalEmployees"]);
      return {
        domainLabel: "Workforce",
        detail: `${total} employees`,
        confidence,
        commit: (siteId, period) => {
          const fem = num(fields, "femalePercent");
          store().addWorkforce({
            id: uuid(),
            siteId,
            period,
            totalFte: total,
            totalHeadcount: total,
            totalHoursWorked: num(fields, "hoursWorked") ?? 0,
            ...(fem !== undefined ? { femalePercent: fem } : {}),
            ...quality("other", confidence),
          });
        },
      };
    }
    default:
      return null;
  }
}
