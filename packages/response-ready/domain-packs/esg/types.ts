// ============================================
// ESG Domain Pack — ESG-Specific Types
// ============================================
// These types are used only within the ESG domain pack,
// NOT by the generic engine.

export type PracticeTopic = 'ENVIRONMENT' | 'LABOR' | 'ETHICS' | 'SUPPLY_CHAIN';

export interface InformalPractice {
  id: string;
  topic: PracticeTopic;
  description: string;
  isFormalized: boolean;
}

export type MaturityLevel = 'Emerging' | 'Developing' | 'Established' | 'Leading';

export interface ESGCompanyProfile {
  companyName: string;
  industry: string;
  subIndustry?: string;
  country: string;
  employeeCount: number;
  numberOfSites: number;
  reportingPeriod: string;
  revenueBand: string;
  informalPractices: InformalPractice[];
  maturityLevel: MaturityLevel;
  maturityScore: number;
  completedAt?: string;
}
