import type { RoiYearRow } from "@/lib/playbooks/roi-model";

// Cumulative-net J-curve over 10 years, with the payback point marked.
// Extracted from the Stack 5 page so it can be a shared premium slot component.
export default function JCurveChart({
  rows,
  accent,
}: {
  rows: RoiYearRow[];
  accent: string;
}) {
  const W = 340, H = 170, padX = 30, padTop = 12, padBottom = 26;
  const vals = rows.map((r) => r.cumulative);
  const max = Math.max(...vals, 0);
  const min = Math.min(...vals, 0);
  const range = max - min || 1;
  const plotH = H - padTop - padBottom;
  const x = (i: number) => padX + (i / (rows.length - 1)) * (W - padX - 8);
  const y = (v: number) => padTop + (1 - (v - min) / range) * plotH;
  const zeroY = y(0);
  const linePts = rows.map((r, i) => `${x(i)},${y(r.cumulative)}`).join(" ");
  const areaPts = `${x(0)},${zeroY} ${linePts} ${x(rows.length - 1)},${zeroY}`;
  const payback = rows.find((r) => r.cumulative >= 0);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img"
      aria-label="Cumulative net return by year">
      <line x1={padX} y1={zeroY} x2={W - 8} y2={zeroY} stroke="#9CA3AF"
        strokeDasharray="3 3" strokeWidth="1" />
      <text x={4} y={zeroY + 3} fontSize="9" fill="#9CA3AF">€0</text>
      <polygon points={areaPts} fill={accent} opacity="0.10" />
      <polyline points={linePts} fill="none" stroke={accent} strokeWidth="2" />
      {payback && (
        <g>
          <circle cx={x(payback.year - 1)} cy={y(payback.cumulative)} r="3.5" fill={accent} />
          <text x={x(payback.year - 1)} y={y(payback.cumulative) - 7}
            fontSize="9" fill={accent} textAnchor="middle" fontWeight="600">payback</text>
        </g>
      )}
      {[0, 4, 9].map((i) => (
        <text key={i} x={x(i)} y={H - 8} fontSize="9" fill="#6B7280"
          textAnchor="middle">Yr {i + 1}</text>
      ))}
    </svg>
  );
}
