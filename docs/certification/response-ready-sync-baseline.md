# response-ready consumer baseline (pre-sync)

Captured 2026-07-19, BEFORE any `response-ready` reconciliation. Re-run these after any
change; the results below are the "known good" state. Any NEW failure vs this table is a regression.

## Results

| Check | Repo | Command | Baseline result |
|---|---|---|---|
| Drift guard | esg-passport | `npm run verify:vendor` | ✅ PASS — vendored dist matches source (284 files) |
| Unit tests | esg-passport | `npm test` | ✅ 87/87 pass (10 files) |
| Build | esg-passport | `npm run build` | ✅ PASS — 2318 modules, ~21s |
| Export/output audit | esg-passport | `npm run test:exports` | ⚠️ EXIT 1 — **exactly 1 known flag** (see below) |
| Lint | esg-passport | `npm run lint` | ❌ 877 errors (PRE-EXISTING, unrelated to engine; tests pass) |
| Unit tests | response-ready (canonical) | `npm test` | ✅ 576/576 pass (41 files) |
| Typecheck | response-ready (canonical) | `npm run lint` (tsc --noEmit) | ✅ PASS |
| Unit tests | ecosystems-united (EU) | `npm run test:run` | ✅ 31/31 pass (4 files) |
| Build | ecosystems-united (EU) | `npm run build` | ✅ PASS |

## The two PRE-EXISTING conditions (not regressions — expected to still be present after a clean sync)

1. **esg-passport export audit: 1 flag** — `integritynext.xlsx :: in-20 [high]: Code of Conduct mismatch: answer does not surface the policy listed in metrics.` This is the only audit finding across 11 generated workbooks. If a future run shows only this, the engine output is unchanged.
2. **esg-passport lint: 877 errors** — pre-existing in that repo, independent of engine correctness (its 87 tests pass). Do not treat as a sync regression.

## Interpretation

- The **functional** state is green everywhere (drift guard, all unit tests, both builds).
- ESG Passport runs the **canonical** engine (576 tests green); EU runs its **older diverged copy** (31 tests green on its own API).
- A safe EU sync must keep: esg-passport `verify:vendor` PASS, `test` 87/87, `build` PASS, `test:exports` at exactly the 1 known flag, and EU `test:run` 31/31 + build PASS.
