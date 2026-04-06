// ============================================
// ESG Domain Pack — Answer Templates
// ============================================
// 12 rich answer templates for ESG data domains.

import type { AnswerTemplate, RetrievedDataPoint } from '../../src/types';
import { val, has, num, str, fmt } from '../../src/engine/answerGenerator';

export const ESG_ANSWER_TEMPLATES: AnswerTemplate[] = [
  // ===================================================================
  // ENERGY & ELECTRICITY
  // ===================================================================

  // KPI: Total electricity consumption
  {
    domains: ['energy_electricity'],
    topics: ['energy_consumption'],
    questionTypes: ['KPI'],
    generate: (dm, fw) => {
      if (!has(dm, 'totalElectricity')) return null;
      const kwh = num(dm, 'totalElectricity');
      const renPct = num(dm, 'renewablePercent');
      const period = str(dm, 'reportingPeriod');
      const periodStr = period ? ` during ${period}` : ' during the reporting period';
      let answer = `Our total electricity consumption was ${fmt(kwh)} kWh${periodStr}.`;
      if (renPct > 0) {
        const renKwh = kwh * renPct / 100;
        answer += ` Of this, ${fmt(renPct)}% (approximately ${fmt(renKwh)} kWh) was sourced from renewable energy.`;
        answer += renPct >= 50
          ? ' We continue to prioritize the transition to renewable electricity across our operations.'
          : ' We are actively working to increase our share of renewable electricity.';
      } else {
        answer += ' We are evaluating options to increase our renewable electricity procurement.';
      }
      return answer;
    },
  },

  // KPI: Renewable energy percentage (distinct from total consumption)
  {
    domains: ['energy_electricity'],
    topics: ['renewable_share', 'renewable_energy'],
    questionTypes: ['KPI'],
    generate: (dm) => {
      if (!has(dm, 'renewablePercent')) return null;
      const renPct = num(dm, 'renewablePercent');
      const kwh = num(dm, 'totalElectricity');
      const period = str(dm, 'reportingPeriod');
      const periodStr = period ? ` for ${period}` : ' for the reporting period';
      let answer = `${fmt(renPct)}% of our electricity${periodStr} was sourced from renewable energy.`;
      if (kwh > 0) answer += ` Out of ${fmt(kwh)} kWh total consumption, approximately ${fmt(kwh * renPct / 100)} kWh was renewable.`;
      if (renPct >= 50) answer += ' We are on track to further increase renewable procurement across our operations.';
      else answer += ' We are actively evaluating additional renewable energy options including PPAs and green tariffs.';
      return answer;
    },
  },

  // MEASURE: Energy efficiency (not consumption KPI)
  {
    domains: ['energy_electricity'],
    topics: ['energy_efficiency'],
    questionTypes: ['MEASURE'],
    generate: (dm) => {
      const kwh = num(dm, 'totalElectricity');
      const renPct = num(dm, 'renewablePercent');
      const period = str(dm, 'reportingPeriod');
      const parts: string[] = [];
      parts.push('Our energy efficiency programme focuses on reducing overall consumption and increasing the share of renewable sources.');
      if (kwh > 0) parts.push(`Our current electricity consumption is ${fmt(kwh)} kWh${period ? ` (${period})` : ''}, with ${renPct > 0 ? fmt(renPct) + '% from renewable sources' : 'renewable procurement under evaluation'}.`);
      parts.push('Key efficiency measures include regular energy audits, equipment maintenance schedules, LED lighting upgrades, and monitoring of consumption patterns to identify reduction opportunities.');
      return parts.join(' ');
    },
  },

  // Fallback: energy consumption (any question type)
  {
    domains: ['energy_electricity'],
    topics: ['energy_consumption'],
    generate: (dm) => {
      if (!has(dm, 'totalElectricity')) return null;
      const kwh = num(dm, 'totalElectricity');
      const renPct = num(dm, 'renewablePercent');
      const period = str(dm, 'reportingPeriod');
      const periodStr = period ? ` during ${period}` : ' during the reporting period';
      let answer = `Our total electricity consumption was ${fmt(kwh)} kWh${periodStr}.`;
      if (renPct > 0) answer += ` ${fmt(renPct)}% was sourced from renewable energy.`;
      return answer;
    },
  },

  // ===================================================================
  // GHG EMISSIONS
  // ===================================================================

  // Full GHG overview (Scope 1 + 2)
  {
    domains: ['emissions'],
    topics: ['ghg_emissions', 'scope_1'],
    generate: (dm) => {
      const s1 = num(dm, 'scope1Estimate');
      const s2 = num(dm, 'scope2Location');
      const s2m = num(dm, 'scope2Market');
      if (s1 === 0 && s2 === 0 && !dm.has('scope1Estimate') && !dm.has('scope2Location')) return null;
      const period = str(dm, 'reportingPeriod');
      const periodStr = period ? ` for ${period}` : ' for the reporting period';
      const parts: string[] = [];
      parts.push(`Our greenhouse gas (GHG) emissions${periodStr} are as follows:`);
      if (dm.has('scope1Estimate')) parts.push(`Scope 1 (direct) emissions: ${fmt(s1)} tCO2e, covering stationary combustion, mobile sources, and any fugitive emissions.`);
      if (s2) {
        parts.push(`Scope 2 (indirect, location-based) emissions: ${fmt(s2)} tCO2e from purchased electricity.`);
        if (s2m) parts.push(`Scope 2 (market-based) emissions: ${fmt(s2m)} tCO2e, reflecting our renewable energy procurement.`);
      }
      const s1Point = dm.get('scope1Estimate');
      const s2Point = dm.get('scope2Location');
      const isEstimate = (s1Point?.confidence === 'medium') || (s2Point?.confidence === 'medium') ||
        (s1Point?.label?.toLowerCase().includes('auto-calculated')) || (s2Point?.label?.toLowerCase().includes('auto-calculated'));
      if (isEstimate) {
        parts.push('Note: Some figures are estimates derived from activity data (fuel consumption, electricity use) and standard emission factors. We are working to improve the granularity of our GHG inventory.');
      }
      const total = s1 + s2;
      if (total > 0) parts.push(`Total Scope 1 + Scope 2 (location-based): ${fmt(total)} tCO2e.`);
      return parts.join(' ');
    },
  },

  // Scope 2 specific
  {
    domains: ['emissions'],
    topics: ['scope_2', 'ghg_emissions'],
    generate: (dm) => {
      const s2 = num(dm, 'scope2Location');
      const s2m = num(dm, 'scope2Market');
      if (!s2 && !s2m && !dm.has('scope2Location')) return null;
      const period = str(dm, 'reportingPeriod');
      const periodStr = period ? ` for ${period}` : ' for the reporting period';
      const kwh = num(dm, 'totalElectricity');
      const parts: string[] = [];
      parts.push(`Our Scope 2 (indirect) greenhouse gas emissions from purchased electricity${periodStr}:`);
      if (s2) parts.push(`Location-based: ${fmt(s2)} tCO2e.`);
      if (s2m) parts.push(`Market-based: ${fmt(s2m)} tCO2e, reflecting our renewable energy procurement strategy.`);
      if (kwh) parts.push(`These emissions result from ${fmt(kwh)} kWh of purchased electricity.`);
      const isEstimate = dm.get('scope2Location')?.confidence === 'medium';
      if (isEstimate) parts.push('Note: Scope 2 figures are calculated using country-level grid emission factors applied to our electricity consumption data.');
      return parts.join(' ');
    },
  },

  // Scope 3 specific
  {
    domains: ['emissions', 'transport'],
    topics: ['scope_3', 'ghg_emissions'],
    generate: (dm) => {
      const s3 = num(dm, 'scope3Total');
      const cats = str(dm, 'scope3Categories');
      const travel = num(dm, 'businessTravel');
      const commute = num(dm, 'employeeCommute');
      if (!s3 && !travel && !commute) return null;
      const period = str(dm, 'reportingPeriod');
      const periodStr = period ? ` for ${period}` : ' for the reporting period';
      const parts: string[] = [];
      if (s3) {
        parts.push(`Our Scope 3 (value chain) emissions${periodStr} total ${fmt(s3)} tCO2e.`);
        if (cats) parts.push(`Categories reported: ${cats}.`);
      }
      if (travel) parts.push(`Business travel: ${fmt(travel)} km.`);
      if (commute) parts.push(`Employee commuting: ${fmt(commute)} km.`);
      parts.push('We are working to expand the coverage of our Scope 3 inventory and engage with key suppliers on emissions data.');
      return parts.join(' ');
    },
  },

  // ===================================================================
  // WORKFORCE
  // ===================================================================

  // KPI: Employee count
  {
    domains: ['workforce'],
    topics: ['employee_count'],
    questionTypes: ['KPI'],
    generate: (dm) => {
      if (!has(dm, 'totalFte')) return null;
      const fte = num(dm, 'totalFte');
      const period = str(dm, 'reportingPeriod');
      const country = str(dm, 'headquartersCountry');
      const sites = num(dm, 'numberOfSites');
      let answer = `As of ${period || 'the end of the reporting period'}, our organization employs ${fmt(fte)} full-time equivalent (FTE) employees`;
      if (sites > 1) answer += ` across ${sites} operational sites`;
      if (country) answer += `, headquartered in ${country}`;
      answer += '.';
      return answer;
    },
  },

  // KPI: Gender diversity breakdown
  {
    domains: ['workforce'],
    topics: ['diversity'],
    questionTypes: ['KPI'],
    generate: (dm) => {
      if (!has(dm, 'totalFte', 'femalePercent')) return null;
      const fte = num(dm, 'totalFte');
      const fem = num(dm, 'femalePercent');
      const male = 100 - fem;
      let answer = `Our workforce of ${fmt(fte)} FTE employees comprises ${fmt(fem)}% female and ${fmt(male)}% male employees.`;
      if (fem >= 40 && fem <= 60) {
        answer += ' We maintain a relatively balanced gender distribution across our organization.';
      } else if (fem < 30) {
        answer += ' We recognize the need to improve gender diversity and are implementing initiatives to attract and retain a more diverse workforce.';
      }
      return answer;
    },
  },

  // POLICY: Human rights
  {
    domains: ['workforce'],
    topics: ['human_rights'],
    questionTypes: ['POLICY'],
    generate: (dm) => {
      const policies = str(dm, 'socialPoliciesApproved');
      const fte = num(dm, 'totalFte');
      const parts: string[] = [];
      if (policies) {
        parts.push(`Our human rights commitments are formalized in the following policies: ${policies}.`);
        parts.push('These policies cover forced labor, child labor, freedom of association, and non-discrimination, and apply to all operations and business relationships.');
      } else {
        parts.push('We are committed to respecting human rights across our operations and value chain.');
        parts.push('We are developing a formal Human Rights Policy for the next reporting period, covering forced labor, child labor, and fair working conditions.');
      }
      if (fte) parts.push(`These commitments apply to all ${fmt(fte)} employees.`);
      return parts.join(' ');
    },
  },

  // MEASURE: Fair wages and working conditions
  {
    domains: ['workforce'],
    topics: ['labor_practices'],
    questionTypes: ['MEASURE'],
    generate: (dm) => {
      const fte = num(dm, 'totalFte');
      const country = str(dm, 'headquartersCountry');
      const parts: string[] = [];
      parts.push('We are committed to fair compensation and working conditions for all employees.');
      parts.push(`All employees${country ? ` in ${country}` : ''} are compensated at or above the applicable legal minimum wage, and we benchmark our compensation against industry standards.`);
      parts.push('Working conditions are governed by employment contracts that specify working hours, leave entitlements, and grievance procedures.');
      if (fte) parts.push(`These practices apply to all ${fmt(fte)} FTE employees.`);
      return parts.join(' ');
    },
  },

  // ===================================================================
  // HEALTH & SAFETY
  // ===================================================================

  // KPI: H&S incident rates
  {
    domains: ['health_safety'],
    topics: ['health_safety_kpi', 'health_safety'],
    questionTypes: ['KPI'],
    generate: (dm) => {
      const trir = num(dm, 'trir');
      const lti = num(dm, 'lostTimeIncidents');
      const fat = num(dm, 'fatalities');
      if (trir === 0 && lti === 0 && fat === 0 && !has(dm, 'trir')) return null;
      const period = str(dm, 'reportingPeriod');
      const periodStr = period ? ` during ${period}` : ' during the reporting period';
      const parts: string[] = [];
      parts.push(`Our occupational health and safety performance${periodStr}:`);
      if (has(dm, 'trir')) parts.push(`Total Recordable Incident Rate (TRIR): ${trir}.`);
      parts.push(`Lost time incidents: ${lti}.`);
      parts.push(`Fatalities: ${fat}.`);
      if (fat === 0 && lti === 0) {
        parts.push('We are pleased to report zero lost time incidents and zero fatalities. Our health and safety management system focuses on proactive hazard identification and continuous improvement.');
      } else if (fat === 0) {
        parts.push('While we recorded zero fatalities, we continue to investigate all incidents to prevent recurrence and strengthen our safety culture.');
      }
      return parts.join(' ');
    },
  },

  // MEASURE/POLICY: H&S management system (describe your OHS system)
  {
    domains: ['health_safety'],
    topics: ['health_safety_management', 'health_safety'],
    questionTypes: ['MEASURE', 'POLICY'],
    generate: (dm) => {
      const trir = num(dm, 'trir');
      const lti = num(dm, 'lostTimeIncidents');
      const certs = str(dm, 'certificationsHeld');
      const parts: string[] = [];
      parts.push('Our occupational health and safety management system is designed around hazard identification, risk assessment, and continuous improvement.');
      parts.push('Key elements include regular workplace inspections, incident investigation and root cause analysis, safety training for all employees, and emergency preparedness procedures.');
      if (certs && certs.toLowerCase().includes('45001')) {
        parts.push(`Our system is certified to ISO 45001, maintained through regular external audits.`);
      }
      if (has(dm, 'trir') || has(dm, 'lostTimeIncidents')) {
        parts.push(`Current performance: TRIR ${trir}, lost time incidents ${lti}.`);
      }
      return parts.join(' ');
    },
  },

  // ===================================================================
  // WASTE (fine-grained)
  // ===================================================================

  // KPI: Total waste
  {
    domains: ['waste'],
    topics: ['waste_total', 'waste_management'],
    questionTypes: ['KPI'],
    generate: (dm) => {
      if (!has(dm, 'totalWaste')) return null;
      const waste = num(dm, 'totalWaste');
      const div = num(dm, 'diversionRate');
      const haz = num(dm, 'hazardousWaste');
      const period = str(dm, 'reportingPeriod');
      const periodStr = period ? ` during ${period}` : ' during the reporting period';
      let answer = `Our total waste generated${periodStr} was ${fmt(waste)} kg (${fmt(waste / 1000)} tonnes).`;
      if (div > 0) answer += ` We achieved a waste diversion rate of ${fmt(div)}%.`;
      if (haz > 0) answer += ` Of this, ${fmt(haz)} kg was classified as hazardous waste.`;
      return answer;
    },
  },

  // KPI: Recycling / diversion rate
  {
    domains: ['waste'],
    topics: ['recycling'],
    questionTypes: ['KPI'],
    generate: (dm) => {
      if (!has(dm, 'diversionRate')) return null;
      const waste = num(dm, 'totalWaste');
      const div = num(dm, 'diversionRate');
      const period = str(dm, 'reportingPeriod');
      const periodStr = period ? ` during ${period}` : ' during the reporting period';
      let answer = `Our waste diversion (recycling) rate${periodStr} was ${fmt(div)}%.`;
      if (waste > 0) answer += ` Of ${fmt(waste)} kg total waste, ${fmt(waste * div / 100)} kg was recycled or recovered rather than sent to landfill.`;
      if (div >= 75) answer += ' This reflects our commitment to circular economy principles.';
      else answer += ' We continue to implement waste segregation and recycling initiatives to improve our diversion rate.';
      return answer;
    },
  },

  // KPI: Hazardous waste
  {
    domains: ['waste'],
    topics: ['hazardous_waste'],
    questionTypes: ['KPI'],
    generate: (dm) => {
      const haz = num(dm, 'hazardousWaste');
      const waste = num(dm, 'totalWaste');
      const period = str(dm, 'reportingPeriod');
      const periodStr = period ? ` during ${period}` : ' during the reporting period';
      if (haz > 0) {
        let answer = `We generated ${fmt(haz)} kg of hazardous waste${periodStr}.`;
        if (waste > 0) answer += ` This represents ${fmt(haz / waste * 100)}% of our total waste of ${fmt(waste)} kg.`;
        answer += ' All hazardous waste is segregated, stored, and disposed of through licensed contractors in accordance with applicable regulations.';
        return answer;
      }
      if (has(dm, 'totalWaste')) {
        return `We did not generate any hazardous waste${periodStr}. Our total waste of ${fmt(waste)} kg consists entirely of non-hazardous materials.`;
      }
      return null;
    },
  },

  // MEASURE: Circular economy initiatives
  {
    domains: ['waste'],
    topics: ['circular_economy'],
    questionTypes: ['MEASURE'],
    generate: (dm) => {
      const waste = num(dm, 'totalWaste');
      const div = num(dm, 'diversionRate');
      const parts: string[] = [];
      parts.push('Our circular economy initiatives focus on reducing waste generation at source, maximizing material recovery, and designing out waste where possible.');
      parts.push('Current measures include waste segregation across all operational areas, partnerships with recycling contractors, and evaluation of take-back schemes for key material streams.');
      if (waste > 0 && div > 0) {
        parts.push(`We currently achieve a ${fmt(div)}% waste diversion rate from ${fmt(waste)} kg total waste, and are targeting further improvement.`);
      }
      return parts.join(' ');
    },
  },

  // Fallback: general waste (any type not matched above)
  {
    domains: ['waste'],
    topics: ['waste_management'],
    generate: (dm) => {
      if (!has(dm, 'totalWaste')) return null;
      const waste = num(dm, 'totalWaste');
      const div = num(dm, 'diversionRate');
      const haz = num(dm, 'hazardousWaste');
      const period = str(dm, 'reportingPeriod');
      const periodStr = period ? ` during ${period}` : ' during the reporting period';
      let answer = `Our total waste generated${periodStr} was ${fmt(waste)} kg (${fmt(waste / 1000)} tonnes).`;
      if (div > 0) answer += ` We achieved a waste diversion rate of ${fmt(div)}%, meaning ${fmt(waste * div / 100)} kg was recycled or recovered rather than sent to landfill.`;
      if (haz > 0) answer += ` Of this total, ${fmt(haz)} kg was classified as hazardous waste, managed in accordance with applicable regulations.`;
      if (div >= 75) answer += ' Our high diversion rate reflects our commitment to circular economy principles and waste minimization.';
      else if (div > 0) answer += ' We continue to implement waste reduction initiatives to improve our diversion rate.';
      return answer;
    },
  },

  // ===================================================================
  // WATER
  // ===================================================================

  // KPI: Water withdrawal
  {
    domains: ['energy_water'],
    topics: ['water_usage'],
    questionTypes: ['KPI'],
    generate: (dm) => {
      if (!has(dm, 'waterWithdrawal')) return null;
      const water = num(dm, 'waterWithdrawal');
      const period = str(dm, 'reportingPeriod');
      const periodStr = period ? ` during ${period}` : ' during the reporting period';
      const fte = num(dm, 'totalFte');
      let answer = `Our total water withdrawal${periodStr} was ${fmt(water)} m\u00B3.`;
      if (fte > 0) answer += ` This equates to approximately ${fmt(water / fte)} m\u00B3 per employee.`;
      answer += ' We monitor water usage across our operations and seek to reduce consumption through efficiency measures.';
      return answer;
    },
  },

  // POLICY/MEASURE: Water stress
  {
    domains: ['energy_water'],
    topics: ['water_stress'],
    generate: (dm) => {
      const water = num(dm, 'waterWithdrawal');
      const country = str(dm, 'headquartersCountry');
      const parts: string[] = [];
      parts.push('We assess water stress risks as part of our environmental management approach.');
      if (country) parts.push(`Our operations are based in ${country}.`);
      parts.push('We do not currently operate in regions classified as high water stress by the WRI Aqueduct tool, though we monitor this as part of our site-level risk assessments.');
      if (water) parts.push(`Our total water withdrawal is ${fmt(water)} m\u00B3 per year, primarily from municipal supply.`);
      return parts.join(' ');
    },
  },

  // ===================================================================
  // COMPANY PROFILE
  // ===================================================================

  {
    domains: ['company'],
    topics: ['company_profile'],
    generate: (dm) => {
      if (!has(dm, 'legalEntityName')) return null;
      const name = str(dm, 'legalEntityName');
      const ind = str(dm, 'industryDescription');
      const country = str(dm, 'headquartersCountry');
      const period = str(dm, 'reportingPeriod');
      let answer = `The legal name of our organization is ${name}.`;
      if (ind && ind.toLowerCase() !== 'other') answer += ` We operate in the ${ind} sector.`;
      if (country) answer += ` Our headquarters are located in ${country}.`;
      if (period) answer += ` This data covers the reporting period ${period}.`;
      return answer;
    },
  },

  // Products and services
  {
    domains: ['products', 'company'],
    topics: ['products_services', 'company_profile'],
    generate: (dm) => {
      const name = str(dm, 'legalEntityName');
      const ind = str(dm, 'industryDescription');
      const country = str(dm, 'headquartersCountry');
      const fte = num(dm, 'totalFte');
      const rev = str(dm, 'revenueBand');
      if (!name) return null;
      const parts: string[] = [];
      parts.push(`${name} is ${ind && ind.toLowerCase() !== 'other' ? `a ${ind} company` : 'an organization'}${country ? ` based in ${country}` : ''}.`);
      if (fte) parts.push(`We employ ${fmt(fte)} people.`);
      if (rev) parts.push(`Revenue band: ${rev}.`);
      parts.push('Our products and services are detailed in our company registration documents and marketing materials. We serve customers across domestic and European markets.');
      return parts.join(' ');
    },
  },

  // Revenue band
  {
    domains: ['financial_context', 'company'],
    topics: ['revenue'],
    generate: (dm) => {
      const rev = str(dm, 'revenueBand');
      if (!rev) return null;
      const name = str(dm, 'legalEntityName');
      const period = str(dm, 'reportingPeriod');
      return `${name ? name + "'s" : 'Our'} annual revenue band is ${rev}${period ? ` (${period})` : ''}.`;
    },
  },

  // ===================================================================
  // CERTIFICATIONS & COMPLIANCE
  // ===================================================================

  // General certifications
  {
    domains: ['regulatory'],
    topics: ['certifications'],
    generate: (dm) => {
      const certs = str(dm, 'certificationsHeld');
      const validCerts = str(dm, 'validCertificates');
      if (certs || validCerts) {
        const certList = [certs, validCerts].filter(Boolean).join(', ');
        return `Our organization holds the following certifications and accreditations: ${certList}. These certifications are maintained through regular external audits and demonstrate our commitment to internationally recognized management standards.`;
      }
      return 'Our organization does not currently hold third-party environmental or quality management certifications. We are evaluating ISO 14001 and ISO 9001 certification pathways as part of our continuous improvement strategy.';
    },
  },

  // ISO 45001 specific (H&S certification)
  {
    domains: ['regulatory'],
    topics: ['certifications', 'health_safety_management'],
    generate: (dm) => {
      const certs = str(dm, 'certificationsHeld');
      const validCerts = str(dm, 'validCertificates');
      const allCerts = [certs, validCerts].filter(Boolean).join(', ').toLowerCase();
      if (allCerts.includes('45001')) {
        return 'Yes, our organization holds ISO 45001 certification for our occupational health and safety management system. The certification is maintained through regular external surveillance audits and covers all operational sites.';
      }
      return 'Our organization does not currently hold ISO 45001 or equivalent health and safety certification. Our health and safety management system is based on risk assessment principles and regulatory compliance. We are evaluating ISO 45001 certification as part of our continuous improvement strategy.';
    },
  },

  // ===================================================================
  // TRAINING
  // ===================================================================

  {
    domains: ['training', 'workforce'],
    topics: ['training'],
    generate: (dm) => {
      if (!has(dm, 'trainingHoursPerEmployee')) return null;
      const perEmp = num(dm, 'trainingHoursPerEmployee');
      const total = num(dm, 'totalTrainingHours');
      const fte = num(dm, 'totalFte');
      const period = str(dm, 'reportingPeriod');
      const periodStr = period ? ` during ${period}` : ' during the reporting period';
      let answer = `${periodStr.charAt(0).toUpperCase() + periodStr.slice(1)}, we delivered an average of ${fmt(perEmp)} training hours per employee.`;
      if (total > 0 && fte > 0) answer += ` This represents a total of ${fmt(total)} hours of training across our ${fmt(fte)} employees.`;
      answer += ' Training programmes cover areas including health and safety, technical skills, and sustainability awareness.';
      return answer;
    },
  },

  // ===================================================================
  // SUSTAINABILITY GOALS / TARGETS
  // ===================================================================

  {
    domains: ['goals'],
    topics: ['targets', 'strategy', 'climate_targets'],
    generate: (dm) => {
      const goal = str(dm, 'primaryGoal');
      if (goal) {
        return `Our primary sustainability commitment is: ${goal}. We are integrating this target into our business strategy and operational planning, and we track progress against this goal as part of our regular management review process.`;
      }
      const period = str(dm, 'reportingPeriod');
      return `We are in the process of formalising our sustainability goals. Our immediate priorities include establishing baseline measurements for energy consumption, emissions, and waste, and setting reduction targets for the next reporting period${period ? ` (${parseInt(period) + 1})` : ''}.`;
    },
  },

  // POLICY: Climate targets / SBTi / net-zero
  {
    domains: ['goals', 'emissions'],
    topics: ['climate_targets', 'ghg_emissions'],
    questionTypes: ['POLICY'],
    generate: (dm) => {
      const goal = str(dm, 'primaryGoal');
      const s1 = num(dm, 'scope1Estimate');
      const s2 = num(dm, 'scope2Location');
      const total = s1 + s2;
      const parts: string[] = [];
      if (goal && (goal.toLowerCase().includes('net zero') || goal.toLowerCase().includes('sbti') || goal.toLowerCase().includes('carbon'))) {
        parts.push(`Yes, our organization has set the following climate target: ${goal}.`);
      } else {
        parts.push('We have not yet set a formal science-based target (SBTi) or net-zero commitment.');
        parts.push('We are establishing our emissions baseline as a prerequisite for setting meaningful reduction targets.');
      }
      if (total > 0) parts.push(`Our current Scope 1 + Scope 2 emissions total ${fmt(total)} tCO2e, which will serve as the baseline for target-setting.`);
      parts.push('We are evaluating alignment with the SBTi framework and plan to define quantified reduction targets in the next reporting period.');
      return parts.join(' ');
    },
  },

  // Ethics / code of conduct
  {
    domains: ['goals'],
    topics: ['ethics'],
    questionTypes: ['POLICY'],
    generate: (dm) => {
      const policies = str(dm, 'governancePoliciesApproved');
      const parts: string[] = [];
      if (policies) {
        parts.push(`Our ethical standards are formalized in the following policies: ${policies}.`);
        parts.push('These policies cover anti-corruption, anti-bribery, conflicts of interest, and fair business practices, and apply to all employees and business partners.');
      } else {
        parts.push('We are committed to conducting business with integrity and transparency.');
        parts.push('We are developing a formal Code of Ethics and Anti-Corruption Policy for the next reporting period, consolidating our existing business conduct expectations into a documented framework.');
      }
      return parts.join(' ');
    },
  },

  // ===================================================================
  // FUEL
  // ===================================================================

  {
    domains: ['energy_fuel'],
    topics: ['energy_consumption', 'scope_1'],
    generate: (dm) => {
      const gas = num(dm, 'fuel_natural_gas');
      const diesel = num(dm, 'fuel_diesel');
      if (!gas && !diesel) return null;
      const period = str(dm, 'reportingPeriod');
      const periodStr = period ? ` during ${period}` : ' during the reporting period';
      const parts: string[] = [`Our fuel consumption${periodStr}:`];
      if (gas) parts.push(`Natural gas: ${fmt(gas)} m\u00B3.`);
      if (diesel) parts.push(`Diesel: ${fmt(diesel)} litres.`);
      parts.push('Fuel consumption is a key input for our Scope 1 emissions calculation. We are evaluating opportunities to reduce fossil fuel dependency through electrification and energy efficiency measures.');
      return parts.join(' ');
    },
  },

  // ===================================================================
  // TRANSPORT
  // ===================================================================

  // Fleet composition
  {
    domains: ['transport'],
    topics: ['fleet'],
    generate: (dm) => {
      const diesel = num(dm, 'fuel_diesel');
      const parts: string[] = [];
      parts.push('Our fleet consists primarily of company vehicles used for business operations and employee travel.');
      if (diesel) parts.push(`Current fuel consumption: ${fmt(diesel)} litres of diesel during the reporting period.`);
      parts.push('We are evaluating the transition to electric or hybrid vehicles as part of our fleet renewal strategy to reduce direct emissions.');
      return parts.join(' ');
    },
  },

  // Business travel / commuting (Scope 3)
  {
    domains: ['transport'],
    topics: ['business_travel', 'scope_3'],
    generate: (dm) => {
      const travel = num(dm, 'businessTravel');
      const commute = num(dm, 'employeeCommute');
      const s3 = num(dm, 'scope3Total');
      const fte = num(dm, 'totalFte');
      const parts: string[] = [];
      if (s3) parts.push(`Our Scope 3 emissions total ${fmt(s3)} tCO2e.`);
      if (travel) parts.push(`Business travel: ${fmt(travel)} km.`);
      if (commute) parts.push(`Employee commuting: ${fmt(commute)} km.`);
      if (!s3 && !travel && !commute) {
        parts.push('We are in the process of quantifying Scope 3 emissions from business travel and employee commuting.');
        if (fte) parts.push(`With ${fmt(fte)} employees, we are implementing a travel policy that prioritizes video conferencing and sustainable transport options.`);
      }
      parts.push('Measures to reduce these emissions include a travel policy encouraging video conferencing, public transport incentives, and cycle-to-work schemes.');
      return parts.join(' ');
    },
  },

  // ===================================================================
  // MATERIALS & SUPPLY CHAIN
  // ===================================================================

  // Raw materials
  {
    domains: ['materials'],
    topics: ['raw_materials'],
    generate: (dm) => {
      const name = str(dm, 'legalEntityName');
      const ind = str(dm, 'industryDescription');
      const parts: string[] = [];
      parts.push(`${name || 'Our organization'} uses a range of materials in ${ind ? `our ${ind.toLowerCase()} operations` : 'our operations'}.`);
      parts.push('We are in the process of quantifying our raw material consumption by type and tracking the percentage sourced from recycled or secondary sources.');
      parts.push('Our procurement approach prioritises suppliers who can provide materials with verified recycled content and environmental certifications.');
      return parts.join(' ');
    },
  },

  // Supplier code of conduct
  {
    domains: ['buyer_requirements', 'materials'],
    topics: ['supplier_code', 'ethics'],
    questionTypes: ['POLICY'],
    generate: (dm) => {
      const policies = str(dm, 'supplierPoliciesApproved');
      const name = str(dm, 'legalEntityName');
      const parts: string[] = [];
      if (policies && policies.toLowerCase().includes('supplier')) {
        parts.push(`Yes, ${name || 'our organization'} has a Supplier Code of Conduct covering: ${policies}.`);
        parts.push('The code applies to all direct suppliers and covers environmental standards, labor practices, health and safety, ethics, and anti-corruption.');
      } else {
        parts.push(`${name || 'Our organization'} is committed to responsible sourcing and maintaining high standards throughout our supply chain.`);
        parts.push('We are developing a formal Supplier Code of Conduct for the next reporting period, extending our existing quality-based supplier management to include ESG criteria.');
      }
      parts.push('Supplier compliance is monitored through qualification processes, periodic reviews, and incoming quality inspections.');
      return parts.join(' ');
    },
  },

  // Supply chain ESG monitoring
  {
    domains: ['buyer_requirements'],
    topics: ['supply_chain_monitoring'],
    questionTypes: ['MEASURE'],
    generate: (dm) => {
      const name = str(dm, 'legalEntityName');
      const parts: string[] = [];
      parts.push(`${name || 'Our organization'} monitors ESG performance within our supply chain through supplier qualification processes, periodic assessments, and ongoing engagement.`);
      parts.push('Current measures include ESG criteria in supplier selection, periodic supplier visits, and preference for locally sourced materials where feasible.');
      parts.push('We are working to formalise a structured supplier ESG assessment programme with documented scoring criteria and regular review cycles.');
      return parts.join(' ');
    },
  },

  // Conflict minerals
  {
    domains: ['materials'],
    topics: ['conflict_minerals'],
    generate: (dm) => {
      const name = str(dm, 'legalEntityName');
      const ind = str(dm, 'industryDescription');
      const parts: string[] = [];
      if (ind && (ind.toLowerCase().includes('electronics') || ind.toLowerCase().includes('manufacturing'))) {
        parts.push(`As a ${ind.toLowerCase()} company, ${name || 'our organization'} recognises the potential for conflict minerals (tin, tantalum, tungsten, and gold — 3TG) in our supply chain.`);
        parts.push('We are developing a due diligence process aligned with the OECD Due Diligence Guidance, including supplier surveys and supply chain mapping to identify smelters and refiners.');
      } else {
        parts.push(`Based on the nature of our operations, ${name || 'our organization'} has limited exposure to conflict minerals (3TG).`);
        parts.push('We monitor this risk through our supplier management processes and will implement formal due diligence if our supply chain risk profile changes.');
      }
      return parts.join(' ');
    },
  },

  // ===================================================================
  // SUSTAINABILITY STRATEGY (fine-grained)
  // ===================================================================

  // Sustainability reporting
  {
    domains: ['regulatory', 'goals'],
    topics: ['transparency'],
    generate: (dm) => {
      const name = str(dm, 'legalEntityName');
      const period = str(dm, 'reportingPeriod');
      const parts: string[] = [];
      parts.push(`${name || 'Our organization'} does not currently publish a standalone sustainability report.`);
      if (period) parts.push(`We are using ${period} as our baseline year for systematic ESG data collection.`);
      parts.push('The data collected through our ESG management system will form the basis for our first sustainability disclosure, which we plan to publish in the next reporting period.');
      return parts.join(' ');
    },
  },

  // ESG risk management
  {
    domains: ['swot', 'goals'],
    topics: ['risk_management', 'strategy'],
    generate: (dm) => {
      const name = str(dm, 'legalEntityName');
      const parts: string[] = [];
      parts.push(`${name || 'Our organization'} identifies and manages material ESG risks through a combination of regulatory monitoring, stakeholder engagement, and operational risk assessment.`);
      parts.push('Key risk areas reviewed include climate-related risks (physical and transitional), supply chain disruption, regulatory compliance (including CSRD), and workforce-related risks.');
      parts.push('ESG risks are integrated into our management review process and inform our sustainability strategy and target-setting.');
      return parts.join(' ');
    },
  },

  // Sustainability in procurement
  {
    domains: ['goals', 'materials', 'buyer_requirements'],
    topics: ['strategy', 'supplier_management'],
    generate: (dm) => {
      const name = str(dm, 'legalEntityName');
      const parts: string[] = [];
      parts.push(`${name || 'Our organization'} integrates sustainability considerations into procurement decisions through several mechanisms.`);
      parts.push('These include preference for suppliers with environmental certifications, evaluation of packaging and transport efficiency, and consideration of product lifecycle impacts.');
      parts.push('We are formalising these criteria into a sustainable procurement policy that will apply to all significant purchasing decisions.');
      return parts.join(' ');
    },
  },
];
