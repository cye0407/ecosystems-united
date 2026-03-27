// ============================================
// Data Bridge: EU Zustand Stores → ESGCompanyData
// ============================================

import type { StoreData } from './dataRetrieval';

const GAS_M3_TO_KWH = 10.55;

/**
 * Build an ESGCompanyData object from EU's Zustand store data.
 */
export function buildCompanyData(store: StoreData) {
  const { company, sites } = store;

  // Energy: electricity
  const totalElectricity = store.energyElectricity.reduce((sum, e) => sum + (e.consumptionKwh || 0), 0);
  // Renewable = onsite renewable + PPA (not grid)
  const renewableKwh = store.energyElectricity.reduce((sum, e) => {
    const renewPct = (e.sourceOnsiteRenewablePercent || 0) + (e.sourcePpaPercent || 0);
    return sum + (e.consumptionKwh || 0) * (renewPct / 100);
  }, 0);
  const renewablePercent = totalElectricity > 0 ? Math.round((renewableKwh / totalElectricity) * 100) : undefined;

  // Fuels
  const naturalGasFuels = store.energyFuels.filter(f => f.fuelType === 'natural_gas');
  const naturalGasKwh = naturalGasFuels
    .filter(f => f.unit === 'kwh')
    .reduce((sum, f) => sum + (f.quantity || 0), 0);
  const naturalGasM3Direct = naturalGasFuels
    .filter(f => f.unit === 'm3')
    .reduce((sum, f) => sum + (f.quantity || 0), 0);
  const naturalGasM3 = naturalGasM3Direct + (naturalGasKwh > 0 ? Math.round(naturalGasKwh / GAS_M3_TO_KWH) : 0);

  const dieselLiters = store.energyFuels
    .filter(f => f.fuelType === 'diesel' && f.unit === 'L')
    .reduce((sum, f) => sum + (f.quantity || 0), 0);

  // Water
  const totalWater = store.energyWater.reduce((sum, w) => sum + (w.withdrawalM3 || 0), 0);

  // Waste
  const totalWasteKg = store.waste.reduce((sum, w) => sum + (w.quantityKg || 0), 0);
  const recycledWasteKg = store.waste
    .filter(w => w.disposalRoute === 'recycling' || w.disposalRoute === 'composting' || w.disposalRoute === 'reuse')
    .reduce((sum, w) => sum + (w.quantityKg || 0), 0);
  const recyclingPercent = totalWasteKg > 0 ? Math.round((recycledWasteKg / totalWasteKg) * 100) : undefined;
  const hazardousWasteKg = store.waste
    .filter(w => w.hazardous)
    .reduce((sum, w) => sum + (w.quantityKg || 0), 0);

  // Emissions
  const scope1 = store.directEmissions.reduce((sum, e) => sum + (e.tco2e || 0), 0);

  // Transport
  const freightTonKm = store.transportLogs.reduce((sum, t) => sum + (t.tkm || 0), 0);

  // Workforce
  const latestWorkforce = store.workforce.length > 0
    ? store.workforce.reduce((latest, w) => w.period > latest.period ? w : latest, store.workforce[0])
    : null;
  const totalEmployees = company?.totalFte || latestWorkforce?.totalFte || 0;
  const femalePercent = latestWorkforce?.femalePercent;

  // Health & Safety
  const totalIncidents = store.healthSafety.reduce((sum, h) => sum + (h.recordableIncidents || 0), 0);
  const lostTimeIncidents = store.healthSafety.reduce((sum, h) => sum + (h.lostTimeIncidents || 0), 0);
  const fatalities = store.healthSafety.reduce((sum, h) => sum + (h.fatalities || 0), 0);

  // Training
  const totalTrainingHours = store.training.reduce((sum, t) => sum + (t.totalTrainingHours || 0), 0);
  const trainingHoursPerEmployee = totalEmployees > 0
    ? Math.round((totalTrainingHours / totalEmployees) * 10) / 10
    : undefined;

  // TRIR
  const totalHoursWorked = latestWorkforce?.totalHoursWorked || 0;
  const trirRate = totalHoursWorked > 0
    ? Math.round((totalIncidents / totalHoursWorked) * 200000 * 100) / 100
    : undefined;

  return {
    companyName: company?.tradingName || company?.legalEntityName || '',
    industry: company?.industryDescription || '',
    country: company?.headquartersCountry || '',
    employeeCount: totalEmployees || undefined,
    numberOfSites: company?.numberOfSites || sites.length || undefined,
    revenueBand: company?.revenueBand || '',
    reportingPeriod: company?.reportingPeriodStart
      ? `${company.reportingPeriodStart} to ${company.reportingPeriodEnd}`
      : undefined,

    electricityKwh: totalElectricity || undefined,
    renewablePercent,
    naturalGasM3: naturalGasM3 || undefined,
    dieselLiters: dieselLiters || undefined,
    waterM3: totalWater || undefined,

    scope1Tco2e: scope1 || undefined,

    freightTonKm: freightTonKm || undefined,

    totalWasteKg: totalWasteKg || undefined,
    recyclingPercent,
    hazardousWasteKg: hazardousWasteKg || undefined,

    femalePercent,
    trirRate,
    lostTimeIncidents: lostTimeIncidents || undefined,
    fatalities: fatalities || undefined,
    trainingHoursPerEmployee,

    certifications: undefined,
    sustainabilityGoal: store.goals?.primaryGoal || undefined,
  };
}

/**
 * Build a company profile object for AI enhancement context.
 */
export function buildCompanyProfile(store: StoreData) {
  const { company } = store;
  if (!company) return null;

  return {
    companyName: company.tradingName || company.legalEntityName || '',
    industry: company.industryDescription || '',
    country: company.headquartersCountry || '',
    employeeCount: company.totalFte || 0,
    maturityLevel: 'developing',
  };
}
