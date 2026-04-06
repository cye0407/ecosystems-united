import type { MatchResult, DataContext } from '../../src/types';
export interface ESGCompanyData {
    companyName: string;
    industry?: string;
    country?: string;
    employeeCount?: number;
    numberOfSites?: number;
    revenueBand?: string;
    reportingPeriod?: string;
    electricityKwh?: number;
    renewablePercent?: number;
    naturalGasM3?: number;
    dieselLiters?: number;
    waterM3?: number;
    scope1Tco2e?: number;
    scope2Tco2e?: number;
    scope3Tco2e?: number;
    scope3Categories?: string;
    businessTravelKm?: number;
    employeeCommuteKm?: number;
    freightTonKm?: number;
    totalWasteKg?: number;
    recyclingPercent?: number;
    hazardousWasteKg?: number;
    femalePercent?: number;
    trirRate?: number;
    lostTimeIncidents?: number;
    fatalities?: number;
    trainingHoursPerEmployee?: number;
    certifications?: string;
    sustainabilityGoal?: string;
    policies?: Array<{
        id: string;
        name: string;
        category: 'environmental' | 'social' | 'governance';
        exists: boolean;
        status: string;
        isCertification?: boolean;
    }>;
    documents?: Array<{
        name: string;
        category: string;
        validUntil?: string;
        isValid?: boolean;
    }>;
}
export declare function esgRetrieveData(matchResult: MatchResult, data: ESGCompanyData): DataContext;
//# sourceMappingURL=dataModel.d.ts.map