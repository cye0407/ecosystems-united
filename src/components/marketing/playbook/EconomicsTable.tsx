import { type EconResult, formatEur0, ECON } from "@/lib/playbooks/stack-5-economics";

// The "money, in euros" whole-farm breakdown + funding-rate input.
// A shared premium slot: renders only when a stack supplies an economics model.
export default function EconomicsTable({
  econ,
  hectares,
  fundingRate,
  setFundingRate,
  accent,
}: {
  econ: EconResult;
  hectares: number;
  fundingRate: string;
  setFundingRate: (v: string) => void;
  accent: string;
}) {
  return (
    <section className="mb-10">
      <h3 className="text-lg font-bold text-gray-900 mb-1">The money, in euros</h3>
      <p className="text-sm text-gray-500 mb-4">
        Where the money comes from at maturity (~year 5), across your{" "}
        {hectares.toLocaleString("en-IE")} ha. Directional, whole-farm, per year.
      </p>
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <tbody>
            {econ.lines.map((l) => (
              <tr key={l.label} className="border-b border-gray-100">
                <td className="py-3 px-4">
                  <span className="text-gray-800">{l.label}</span>
                  {l.note && <span className="block text-xs text-gray-400">{l.note}</span>}
                </td>
                <td className="py-3 px-4 text-right text-gray-500 whitespace-nowrap">
                  {formatEur0(l.perHa)}/ha
                </td>
                <td className="py-3 px-4 text-right font-medium whitespace-nowrap"
                  style={{ color: l.total >= 0 ? accent : "#B4413C" }}>
                  {formatEur0(l.total)}
                </td>
              </tr>
            ))}
            <tr className="bg-gray-50">
              <td className="py-3 px-4 font-semibold text-gray-900">Net per year, before funding</td>
              <td className="py-3 px-4" />
              <td className="py-3 px-4 text-right font-bold"
                style={{ color: econ.netWithoutFunding >= 0 ? accent : "#B4413C" }}>
                {formatEur0(econ.netWithoutFunding)}
              </td>
            </tr>
            {econ.fundingTotal > 0 && (
              <tr className="bg-gray-50 border-t border-gray-200">
                <td className="py-3 px-4 font-semibold text-gray-900">Net per year, with funding</td>
                <td className="py-3 px-4" />
                <td className="py-3 px-4 text-right font-bold" style={{ color: accent }}>
                  {formatEur0(econ.netWithFunding)}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mt-4 bg-gray-50 rounded-lg p-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Add your funding rate to see net with support
        </label>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-sm">€</span>
          <input type="number" min="0" value={fundingRate}
            onChange={(e) => setFundingRate(e.target.value)} placeholder="0"
            className="w-28 border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent"
            style={{ outlineColor: accent }} />
          <span className="text-gray-500 text-sm">/ha/yr</span>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          Cover-crop eco-schemes commonly land somewhere around €{ECON.fundingHintLowPerHa}–{ECON.fundingHintHighPerHa}/ha,
          but rates vary a lot by country and scheme. Enter your actual rate from your national CAP
          plan or SFI action — we never assume a payment you haven&apos;t confirmed.
        </p>
      </div>
      <p className="text-xs text-gray-400 mt-3">
        Coefficients are directional and EU-leaning (cover seed ~€{ECON.coverSeedPerHa}/ha, no-till fuel
        &amp; labour ~€{ECON.fuelSavingPerHaNoTill}/ha). Validate against your own records before
        committing capital.
      </p>
    </section>
  );
}
