// ============================================
// ESG Domain Pack — Keyword Rules
// ============================================
// 55 keyword rules mapping question text to ESG data domains.

import type { KeywordRule } from '../../src/types';

export const ESG_KEYWORD_RULES: KeywordRule[] = [
  // === GHG Emissions (all scopes route to 'emissions' domain) ===
  { keywords: ['scope 1', 'scope1', 'direct emission', 'direct ghg', 'stationary combustion', 'mobile combustion', 'fugitive'], domain: 'emissions', topics: ['ghg_emissions', 'scope_1'], weight: 10 },
  { keywords: ['scope 2', 'scope2', 'indirect emission', 'purchased electricity emission', 'purchased energy emission', 'market-based', 'location-based'], domain: 'emissions', topics: ['ghg_emissions', 'scope_2'], weight: 10 },
  { keywords: ['scope 3', 'scope3', 'value chain emission', 'upstream emission', 'downstream emission'], domain: 'emissions', topics: ['ghg_emissions', 'scope_3'], weight: 10 },
  { keywords: ['greenhouse gas', 'ghg', 'carbon emission', 'co2', 'carbon dioxide', 'tco2e', 'carbon footprint', 'climate change'], domain: 'emissions', topics: ['ghg_emissions', 'climate_targets'], weight: 8 },
  { keywords: ['carbon neutral', 'net zero', 'net-zero', 'climate target', 'sbti', 'science based target', 'emission reduction target'], domain: 'goals', topics: ['climate_targets', 'ghg_emissions'], weight: 8 },
  { keywords: ['refrigerant', 'hfc', 'f-gas', 'fluorinated'], domain: 'emissions', topics: ['ghg_emissions', 'scope_1'], weight: 9 },

  // === Energy ===
  { keywords: ['electricity', 'electric', 'kwh', 'kilowatt', 'power consumption', 'grid'], domain: 'energy_electricity', topics: ['energy_consumption'], weight: 9 },
  { keywords: ['percentage renewable', 'percent renewable', 'renewable source', 'share of renewable', 'renewable percentage'], domain: 'energy_electricity', topics: ['renewable_share'], weight: 11 },
  { keywords: ['renewable', 'solar', 'wind', 'hydro', 'green energy', 'clean energy', 'ppa', 'power purchase agreement', 'green tariff'], domain: 'energy_electricity', topics: ['renewable_energy'], weight: 9 },
  { keywords: ['natural gas', 'fuel oil', 'diesel', 'petrol', 'gasoline', 'lpg', 'propane', 'heating oil', 'combustion'], domain: 'energy_fuel', topics: ['energy_consumption', 'scope_1'], weight: 9 },
  { keywords: ['fuel type', 'fuel source', 'fuel consumption', 'fuel quantities'], domain: 'energy_fuel', topics: ['energy_consumption', 'scope_1'], weight: 10 },
  { keywords: ['energy efficiency', 'energy saving', 'energy reduction', 'energy measure'], domain: 'energy_electricity', topics: ['energy_efficiency'], weight: 10 },
  { keywords: ['energy consumption', 'energy use', 'energy intensity', 'energy management'], domain: 'energy_electricity', topics: ['energy_consumption'], weight: 7 },

  // === Water ===
  { keywords: ['water consumption', 'water use', 'water withdrawal', 'water intake', 'water intensity'], domain: 'energy_water', topics: ['water_usage'], weight: 9 },
  { keywords: ['wastewater', 'effluent', 'water discharge', 'water treatment', 'water pollution'], domain: 'effluents', topics: ['wastewater', 'water_usage'], weight: 9 },
  { keywords: ['water stress', 'water scarcity', 'water risk', 'water-stressed'], domain: 'energy_water', topics: ['water_stress'], weight: 10 },

  // === Waste (fine-grained topics) ===
  { keywords: ['total waste', 'waste generated', 'waste volume', 'waste weight'], domain: 'waste', topics: ['waste_total'], weight: 10 },
  { keywords: ['recycling', 'recycle', 'recycled', 'diversion rate', 'waste diversion'], domain: 'waste', topics: ['recycling'], weight: 10 },
  { keywords: ['hazardous waste', 'hazardous material', 'dangerous goods', 'special waste'], domain: 'waste', topics: ['hazardous_waste'], weight: 11 },
  { keywords: ['circular economy', 'circularity', 'closed loop', 'take-back', 'reuse', 'refurbish'], domain: 'waste', topics: ['circular_economy'], weight: 10 },
  { keywords: ['waste', 'landfill', 'incineration', 'disposal'], domain: 'waste', topics: ['waste_management'], weight: 7 },

  // === Materials & Packaging ===
  { keywords: ['raw material', 'material consumption', 'material use', 'virgin material', 'primary material', 'recycled source', 'primary raw'], domain: 'materials', topics: ['raw_materials'], weight: 11 },
  { keywords: ['recycled content', 'recycled material', 'secondary material', 'post-consumer', 'pre-consumer'], domain: 'materials', topics: ['raw_materials', 'circular_economy'], weight: 10 },
  { keywords: ['packaging', 'package', 'packaging material', 'single-use', 'plastic packaging', 'recyclable packaging'], domain: 'packaging', topics: ['packaging'], weight: 10 },

  // === Supply Chain ===
  { keywords: ['supplier code of conduct', 'supplier assessment', 'supplier audit', 'supplier screening'], domain: 'buyer_requirements', topics: ['supplier_code', 'ethics'], weight: 10 },
  { keywords: ['supply chain esg', 'supply chain sustainability', 'supplier esg', 'esg performance supply'], domain: 'buyer_requirements', topics: ['supply_chain_monitoring'], weight: 10 },
  { keywords: ['conflict minerals', 'cmrt', 'conflict mineral reporting', '3tg', 'responsible minerals'], domain: 'materials', topics: ['conflict_minerals', 'compliance'], weight: 10 },
  { keywords: ['supplier', 'supply chain', 'vendor', 'procurement', 'sourcing'], domain: 'materials', topics: ['supplier_management'], weight: 7 },

  // === Transport & Logistics ===
  { keywords: ['business travel', 'employee commuting', 'commute'], domain: 'transport', topics: ['scope_3', 'business_travel'], weight: 10 },
  { keywords: ['fleet', 'vehicle', 'truck', 'delivery', 'fleet composition'], domain: 'transport', topics: ['fleet'], weight: 9 },
  { keywords: ['transport', 'transportation', 'logistics', 'shipping', 'freight', 'distribution'], domain: 'transport', topics: ['transport', 'logistics'], weight: 8 },

  // === Workforce (fine-grained topics) ===
  { keywords: ['employee', 'headcount', 'fte', 'full-time equivalent', 'workforce size', 'staff', 'personnel', 'how many employees'], domain: 'workforce', topics: ['employee_count'], weight: 9 },
  { keywords: ['diversity', 'gender', 'female', 'male', 'women', 'minority', 'inclusion', 'dei', 'gender breakdown'], domain: 'workforce', topics: ['diversity'], weight: 10 },
  { keywords: ['human rights', 'forced labor', 'child labor', 'modern slavery', 'labor rights'], domain: 'workforce', topics: ['human_rights'], weight: 10 },
  { keywords: ['wage', 'compensation', 'living wage', 'fair pay', 'minimum wage', 'fair wage', 'working conditions'], domain: 'workforce', topics: ['labor_practices'], weight: 9 },
  { keywords: ['turnover', 'attrition', 'employee retention', 'staff turnover'], domain: 'workforce', topics: ['employee_count', 'labor_practices'], weight: 8 },

  // === Health & Safety ===
  { keywords: ['trir', 'ltir', 'incident rate', 'recordable incident', 'lost time', 'injury', 'accident', 'fatality'], domain: 'health_safety', topics: ['health_safety_kpi'], weight: 10 },
  { keywords: ['health and safety', 'health & safety', 'occupational health', 'workplace safety', 'ohs', 'ehs', 'safety management system'], domain: 'health_safety', topics: ['health_safety_management'], weight: 9 },

  // === Training ===
  { keywords: ['training', 'learning', 'development', 'skill', 'capacity building', 'training hours', 'training programme'], domain: 'training', topics: ['training'], weight: 9 },

  // === Certifications & Compliance ===
  { keywords: ['certification', 'certified', 'iso', 'accreditation', 'standard'], domain: 'regulatory', topics: ['certifications'], weight: 8 },
  { keywords: ['iso 14001', 'emas', 'environmental management'], domain: 'regulatory', topics: ['certifications', 'policies'], weight: 9 },
  { keywords: ['iso 45001', 'ohsas', 'safety management', 'safety certification'], domain: 'regulatory', topics: ['certifications', 'health_safety_management'], weight: 10 },
  { keywords: ['iatf 16949', 'iatf16949', 'automotive quality management'], domain: 'regulatory', topics: ['certifications', 'compliance'], weight: 9 },
  { keywords: ['rohs', 'restriction of hazardous substances'], domain: 'regulatory', topics: ['certifications', 'compliance'], weight: 9 },
  { keywords: ['reach', 'reach regulation', 'reach compliance', 'svhc'], domain: 'regulatory', topics: ['certifications', 'compliance'], weight: 9 },
  { keywords: ['weee', 'waste electrical', 'electronic waste', 'e-waste'], domain: 'waste', topics: ['waste_management', 'compliance'], weight: 9 },
  { keywords: ['haccp', 'food safety', 'brc', 'fssc 22000'], domain: 'regulatory', topics: ['certifications', 'compliance'], weight: 9 },
  { keywords: ['oeko-tex', 'oeko tex', 'gots', 'bluesign', 'textile standard'], domain: 'regulatory', topics: ['certifications', 'compliance'], weight: 9 },

  // === Governance & Strategy ===
  { keywords: ['policy', 'policies', 'commitment', 'statement'], domain: 'goals', topics: ['policies'], weight: 6 },
  { keywords: ['compliance', 'regulation', 'regulatory', 'legal', 'law', 'legislation'], domain: 'regulatory', topics: ['compliance'], weight: 7 },
  { keywords: ['csrd', 'esrs', 'eu taxonomy', 'taxonomy alignment'], domain: 'regulatory', topics: ['compliance', 'transparency'], weight: 9 },
  { keywords: ['ethics', 'ethical', 'code of ethics', 'code of conduct', 'anti-corruption', 'bribery'], domain: 'goals', topics: ['ethics', 'policies'], weight: 8 },
  { keywords: ['sustainability report', 'sustainability reporting', 'annual report', 'esg report', 'publish a sustainability'], domain: 'regulatory', topics: ['transparency'], weight: 9 },
  { keywords: ['sustainability goal', 'sustainability target', 'target timeline'], domain: 'goals', topics: ['targets', 'strategy'], weight: 8 },
  { keywords: ['esg risk', 'material esg risk', 'material risk', 'risk identification', 'manage material'], domain: 'swot', topics: ['risk_management'], weight: 9 },
  { keywords: ['risk', 'risk assessment', 'risk management'], domain: 'swot', topics: ['risk_management'], weight: 7 },
  { keywords: ['procurement decision', 'sourcing decision', 'sustainable procurement', 'sustainability procurement', 'sustainability considerations'], domain: 'goals', topics: ['strategy', 'supplier_management'], weight: 9 },

  // === Company Profile ===
  { keywords: ['company name', 'legal name', 'legal entity', 'registered name', 'headquarters', 'head office'], domain: 'company', topics: ['company_profile'], weight: 8 },
  { keywords: ['product', 'service', 'output', 'production volume', 'main products', 'primary markets'], domain: 'products', topics: ['products_services'], weight: 8 },
  { keywords: ['revenue', 'turnover', 'sales', 'financial', 'revenue band'], domain: 'financial_context', topics: ['revenue'], weight: 8 },
  { keywords: ['site', 'facility', 'location', 'plant', 'factory', 'office', 'premises'], domain: 'site', topics: ['facilities'], weight: 7 },
  { keywords: ['target', 'goal', 'objective', 'ambition'], domain: 'goals', topics: ['targets', 'strategy'], weight: 6 },
  { keywords: ['customer', 'client', 'buyer', 'market'], domain: 'external_context', topics: ['company_profile'], weight: 6 },
  { keywords: ['ecovadis', 'cdp', 'questionnaire', 'assessment', 'rating'], domain: 'buyer_requirements', topics: ['compliance', 'transparency'], weight: 7 },
];

export const ESG_DOMAIN_SUGGESTIONS: Record<string, string[]> = {
  company: ['Company name', 'Industry', 'Number of employees', 'Revenue band'],
  site: ['Site locations', 'Floor area', 'Site types'],
  goals: ['Sustainability goals', 'Target timelines', 'Code of ethics'],
  swot: ['Strengths', 'Opportunities', 'Risk areas'],
  regulatory: ['Certifications held', 'CSRD applicability', 'Compliance frameworks'],
  materials: ['Raw material sources', 'Recycled content %', 'Conflict minerals due diligence'],
  packaging: ['Packaging types', 'Packaging weight', 'Recyclability %'],
  energy_electricity: ['Electricity consumption (kWh)', 'Renewable %', 'Energy efficiency measures'],
  energy_fuel: ['Fuel consumption by type', 'Heating fuel use'],
  energy_water: ['Water withdrawal (m3)', 'Water sources', 'Water stress assessment'],
  emissions: ['Scope 1 emissions (tCO2e)', 'Scope 2 emissions (location & market-based)', 'Scope 3 emissions'],
  infrastructure: ['Floor area (m2)', 'Building age', 'Major equipment'],
  transport: ['Fleet composition', 'Business travel km', 'Employee commuting'],
  workforce: ['Total FTE', 'Gender breakdown', 'Human rights policy', 'Fair wages'],
  health_safety: ['TRIR', 'Lost time incidents', 'H&S management system'],
  training: ['Training hours per employee', 'Safety training', 'Sustainability training'],
  waste: ['Total waste (kg)', 'Diversion rate', 'Hazardous waste', 'Circular economy initiatives'],
  products: ['Main products/services', 'Markets served'],
  effluents: ['Wastewater discharge', 'Treatment level'],
  external_context: ['Market scope', 'Customer types'],
  financial_context: ['Revenue band', 'Sustainability budget'],
  buyer_requirements: ['Supplier code of conduct', 'Supply chain ESG monitoring'],
};
