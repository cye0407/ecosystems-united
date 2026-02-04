# ENERGY & EMISSIONS CALCULATION WORKSHEET
## Audit-Defensible Baseline System - Agricultural Operations

**Purpose:** Calculate total energy consumption and Scope 1 + Scope 2 greenhouse gas emissions from your agricultural operation

**Instructions:** 
1. Fill in YELLOW cells only (data entry)
2. WHITE cells contain formulas (do not edit)
3. Use dropdown menus where provided
4. Refer to instructions tab for emission factor sources and methodology

---

## PART A: ELECTRICITY CONSUMPTION (Scope 2 Emissions)

### Electricity Data Entry

**Baseline Period:** [Start Date: ___________] to [End Date: ___________]

**Instructions:** Enter monthly electricity consumption from utility bills. If you have multiple meters, sum total site consumption or create separate sections for each meter.

| Month | Meter ID | kWh Consumed | Cost (€) | Supplier | Notes |
|-------|----------|--------------|----------|----------|-------|
| Jan 2024 | | | | | |
| Feb 2024 | | | | | |
| Mar 2024 | | | | | |
| Apr 2024 | | | | | |
| May 2024 | | | | | |
| Jun 2024 | | | | | |
| Jul 2024 | | | | | |
| Aug 2024 | | | | | |
| Sep 2024 | | | | | |
| Oct 2024 | | | | | |
| Nov 2024 | | | | | |
| Dec 2024 | | | | | |
| **TOTAL** | | =SUM(kWh) | =SUM(Cost) | | |

**Data Quality Flags:**
- [ ] All 12 months have actual meter readings (no estimates)
- [ ] Bill copies saved in evidence folder: Baseline Data/Electricity/[Year-Month]
- [ ] Each entry logged in Source Data Log

---

### Electricity Emissions Calculation

**Grid Emission Factor Selection:**

Select your grid region: [DROPDOWN: Germany | France | Italy | Spain | Netherlands | UK | Poland | EU Average | USA Average | Canada Average | Australia | Other]

**Selected Region:** _______________  
**Grid Emission Factor:** _______ kg CO2e per kWh [AUTO-POPULATED based on dropdown]

**Emission Factor Sources:**
- European Union: IEA 2023 grid emission factors by country
- USA: EPA eGRID 2023 by region
- Canada: Environment Canada 2023 by province
- Other regions: IEA 2023 global data

**If using custom emission factor:** _______ kg CO2e/kWh  
**Source/Justification:** _________________________________

**Scope 2 Emissions Calculation:**

| Annual Electricity Consumption | Grid Emission Factor | **Scope 2 Emissions** |
|-------------------------------|---------------------|---------------------|
| _______ kWh | _______ kg CO2e/kWh | **_______ kg CO2e** |
|  |  | **_______ tonnes CO2e** |

---

### Renewable Energy (if applicable)

**On-site renewable generation:** [Solar PV / Wind / Biogas / Other: ________]

| Month | Renewable Generation (kWh) | % of Total Consumption | Emission Reduction (kg CO2e) |
|-------|---------------------------|----------------------|----------------------------|
| Jan 2024 | | | =Generation × EF |
| Feb 2024 | | | |
| [etc.] | | | |
| **TOTAL** | =SUM | =Renewable/Total | =SUM |

**Note:** Renewable generation can be reported separately but should NOT reduce Scope 2 emissions under location-based method (standard approach). Report renewable generation as additional context.

---

## PART B: FUEL CONSUMPTION (Scope 1 Emissions)

### Diesel Consumption

**Data Entry Instructions:** Enter diesel purchases OR equipment-level consumption if tracked separately

**Option 1: Total Purchases (simpler, acceptable for baseline)**

| Month | Liters Purchased | Cost (€) | Supplier | Invoice # | Notes |
|-------|-----------------|----------|----------|-----------|-------|
| Jan 2024 | | | | | |
| Feb 2024 | | | | | |
| [etc.] | | | | | |
| **TOTAL** | =SUM | =SUM | | | |

**Option 2: Equipment-Level Consumption (more accurate if tracked)**

| Equipment | Fuel Type | Total Liters (annual) | Usage Hours | Application |
|-----------|-----------|---------------------|-------------|-------------|
| Tractor 1 (John Deere 6xxx) | Diesel | | | Field operations |
| Tractor 2 (___________) | Diesel | | | Tillage |
| Irrigation pump | Diesel | | | Water pumping |
| Generator | Diesel | | | Backup power |
| Grain dryer | Diesel | | | Post-harvest |
| Vehicles (truck, van) | Diesel | | | Transport |
| **TOTAL** | | =SUM | | |

**Diesel Emissions Calculation:**

| Total Diesel Consumed | Emission Factor | **Scope 1 Emissions (Diesel)** |
|----------------------|-----------------|-------------------------------|
| _______ liters | 2.68 kg CO2e/liter* | **_______ kg CO2e** |
| _______ gallons (US) | 10.21 kg CO2e/gallon* | **_______ tonnes CO2e** |

*Standard emission factors (IPCC / EPA). Includes CO2, CH4, N2O in CO2-equivalent.

---

### Gasoline Consumption

| Month | Liters Purchased | Equipment Used | Cost (€) | Notes |
|-------|-----------------|----------------|----------|-------|
| Jan 2024 | | Small equipment, vehicles | | |
| Feb 2024 | | | | |
| [etc.] | | | | |
| **TOTAL** | =SUM | | =SUM | |

**Gasoline Emissions Calculation:**

| Total Gasoline Consumed | Emission Factor | **Scope 1 Emissions (Gasoline)** |
|------------------------|-----------------|--------------------------------|
| _______ liters | 2.31 kg CO2e/liter* | **_______ kg CO2e** |
| _______ gallons (US) | 8.78 kg CO2e/gallon* | **_______ tonnes CO2e** |

---

### Natural Gas / Propane Consumption

**Fuel Type:** [DROPDOWN: Natural Gas | Propane (LPG) | Heating Oil | Other]

**Usage:** [DROPDOWN: Building heating | Greenhouse heating | Grain drying | Processing | Other: _____]

| Month | Volume Consumed | Unit | Cost (€) | Supplier | Notes |
|-------|----------------|------|----------|----------|-------|
| Jan 2024 | | m³ / kg / L | | | |
| Feb 2024 | | | | | |
| [etc.] | | | | | |
| **TOTAL** | =SUM | | =SUM | | |

**Emissions Calculation:**

**Natural Gas:**
| Total Natural Gas | Emission Factor | **Scope 1 Emissions (Nat Gas)** |
|-------------------|-----------------|--------------------------------|
| _______ m³ | 2.03 kg CO2e/m³* | **_______ kg CO2e** |
| _______ therms | 5.30 kg CO2e/therm* | **_______ tonnes CO2e** |

**Propane (LPG):**
| Total Propane | Emission Factor | **Scope 1 Emissions (Propane)** |
|---------------|-----------------|-------------------------------|
| _______ liters | 1.67 kg CO2e/liter* | **_______ kg CO2e** |
| _______ kg | 2.98 kg CO2e/kg* | **_______ tonnes CO2e** |

---

## PART C: EMISSIONS SUMMARY

### Total Energy Consumption

| Energy Source | Consumption | Unit | % of Total Energy |
|---------------|-------------|------|------------------|
| Electricity | _______ | kWh | ___% |
| Diesel | _______ | L | ___% |
| Gasoline | _______ | L | ___% |
| Natural Gas | _______ | m³ | ___% |
| Propane | _______ | kg | ___% |
| **TOTAL** | _______ | GJ (converted) | 100% |

**Energy conversion to GJ (gigajoules):**
- Electricity: kWh × 0.0036 = GJ
- Diesel: L × 0.0383 = GJ  
- Gasoline: L × 0.0349 = GJ
- Natural Gas: m³ × 0.0383 = GJ
- Propane: kg × 0.0504 = GJ

---

### Total GHG Emissions (Scope 1 + Scope 2)

| Emission Source | Scope | Emissions (kg CO2e) | Emissions (tonnes CO2e) | % of Total |
|-----------------|-------|--------------------|-----------------------|------------|
| Electricity (grid) | Scope 2 | | | ___% |
| Diesel | Scope 1 | | | ___% |
| Gasoline | Scope 1 | | | ___% |
| Natural Gas | Scope 1 | | | ___% |
| Propane | Scope 1 | | | ___% |
| **TOTAL** | | | | 100% |

**Scope 1 Total (Direct Emissions):** _______ tonnes CO2e  
**Scope 2 Total (Electricity Emissions):** _______ tonnes CO2e  
**COMBINED TOTAL:** _______ tonnes CO2e

---

## PART D: ENERGY INTENSITY METRICS

**Why intensity matters:** Absolute emissions don't tell the full story. A larger farm naturally has higher total emissions. Intensity metrics (emissions per unit output or per area) enable:
- Fair comparison to benchmarks
- Tracking efficiency over time
- Demonstrating improvement even as production grows

### Production Data (for intensity calculations)

**Select primary production measure:** [DROPDOWN: Hectares farmed | kg product harvested | € revenue | livestock head-years | Other: _____]

**Annual Production:**
- Total area farmed: _______ hectares (production area only, exclude conservation/fallow)
- Total output: _______ kg / tonnes / liters [crop/product type: _______]
- Total revenue: _______ € (for service-based or mixed operations)
- Livestock: _______ head-years [species: _______] (avg. head × days/365)

### Intensity Calculations

| Intensity Metric | Calculation | Your Performance | Benchmark Range* |
|------------------|-------------|------------------|------------------|
| **Energy per hectare** | Total GJ ÷ Hectares | _______ GJ/ha | Crop: 5-25 GJ/ha<br>Livestock: 15-60 GJ/ha |
| **Emissions per hectare** | Total kg CO2e ÷ Hectares | _______ kg CO2e/ha | Crop: 500-3,000 kg/ha<br>Livestock: 2,000-10,000 kg/ha |
| **Energy per kg output** | Total GJ ÷ kg product | _______ GJ/kg | Grains: 0.001-0.005 GJ/kg<br>Vegetables: 0.002-0.01 GJ/kg |
| **Emissions per kg output** | Total kg CO2e ÷ kg product | _______ kg CO2e/kg | Grains: 0.1-0.5 kg CO2e/kg<br>Vegetables: 0.2-1.0 kg CO2e/kg |
| **Emissions per € revenue** | Total kg CO2e ÷ Revenue | _______ kg CO2e/€ | Variable by product type |

*Benchmark ranges are approximate guidance based on European agricultural operations. Your specific operation type, climate, and practices create variation. Use as directional reference, not absolute standard.

---

## PART E: DATA QUALITY & UNCERTAINTY ASSESSMENT

### Data Quality Scoring (1-5 scale)

Score each data input:
- **5 = Verified measurement:** Meter readings, invoices with actual consumption
- **4 = Reliable estimate:** Based on equipment specs × usage hours tracked
- **3 = Reasonable estimate:** Industry averages applied to your context
- **2 = Rough estimate:** Limited data, significant assumptions
- **1 = Guess:** No supporting data

| Data Element | Quality Score | Notes / Improvement Plan |
|--------------|--------------|--------------------------|
| Electricity consumption | ___/5 | |
| Diesel consumption | ___/5 | |
| Gasoline consumption | ___/5 | |
| Natural gas/propane | ___/5 | |
| Production output | ___/5 | |
| **AVERAGE SCORE** | ___/5 | |

**Overall Data Quality:**
- Average 4-5: Audit-grade quality, high confidence
- Average 3-3.9: Acceptable baseline, plan quality improvements
- Average 2-2.9: Rough baseline, significant improvement needed before external reporting
- Below 2: Restart with better data collection protocols

### Uncertainty Quantification

For stakeholder reporting, acknowledge uncertainty honestly:

**High Confidence (±5-10%):** _______________________________________  
[List metrics with verified measurements]

**Medium Confidence (±10-25%):** ___________________________________  
[List metrics with reasonable estimates]

**Low Confidence (±25%+):** ________________________________________  
[List metrics requiring assumption-heavy calculations]

**Improvement Priority:** Focus year 2 measurement investments on **low confidence** metrics that are **stakeholder-critical**.

---

## PART F: VISUALIZATION & REPORTING

### Energy Consumption Breakdown (Pie Chart)

[Chart showing % of total energy by source - Electricity, Diesel, Gasoline, Gas, Propane]

### Monthly Energy Trend (Line Graph)

[Graph showing monthly total energy consumption in GJ - reveals seasonal patterns]

### Emissions Sources (Stacked Bar Chart)

[Chart showing Scope 1 vs Scope 2 emissions breakdown]

### Intensity Trend (if multi-year data available)

[Line graph showing emissions per hectare or per kg output over time]

**Graphing Instructions:**
1. Select data range from completed sections above
2. Insert → Chart → [recommended type]
3. Format clearly with axis labels, legend, data labels
4. Export chart as image for inclusion in baseline report

---

## PART G: METHODOLOGY STATEMENT (For External Reporting)

**Copy this section into your Baseline Report - customize with your specific details**

---

**Energy & Emissions Baseline Methodology**

**Baseline Period:** [Start Date] to [End Date]

**Organizational Boundary:** [Describe what's included - e.g., "All operations at [Farm Name], including field production, post-harvest facilities, and on-site administration buildings. Excludes off-site contracted operations and product transportation beyond farm gate."]

**Operational Boundary:**
- Scope 1 (Direct Emissions): Fuel combustion in owned/controlled equipment (diesel, gasoline, natural gas, propane)
- Scope 2 (Indirect Emissions): Purchased electricity consumption
- Scope 3: Not included in this baseline [or if included: "Purchased inputs - fertilizer, feed - calculated separately in agricultural emissions worksheet"]

**Data Sources & Collection:**
- Electricity: Monthly utility bills from [Supplier Name], meter IDs [list]
- Diesel: Fuel purchase invoices from [Supplier(s)], allocated to equipment based on [usage logs / equipment fuel consumption specs / total purchases]
- Gasoline: [data source]
- Natural Gas/Propane: [data source]
- Production Output: [harvest records / sales data / other]

**Emission Factors:**
- Grid electricity: [Value] kg CO2e/kWh [Source: IEA 2023, [Country] grid average]
- Diesel: 2.68 kg CO2e/liter (IPCC 2006 Guidelines, includes CO2, CH4, N2O)
- Gasoline: 2.31 kg CO2e/liter (IPCC 2006 Guidelines)
- Natural Gas: 2.03 kg CO2e/m³ (IPCC 2006 Guidelines)
- Propane: 2.98 kg CO2e/kg (IPCC 2006 Guidelines)

**Calculation Methodology:**
Total Emissions (kg CO2e) = Σ (Activity Data × Emission Factor) for all energy sources

Intensity metrics calculated as:
- Emissions per hectare = Total emissions ÷ Production area (hectares)
- Emissions per kg product = Total emissions ÷ Annual harvest volume (kg)

**Data Quality & Limitations:**
- Electricity consumption: [High quality - verified meter readings] OR [Estimated based on...]
- Fuel consumption: [Equipment-level tracking] OR [Bulk purchase allocation] OR [Estimated from...]
- Production output: [Weighed harvest data] OR [Sales records] OR [Estimated from...]

**Known Limitations:**
- [List any significant data gaps, estimation approaches, excluded sources]
- [Acknowledge uncertainty ranges for estimated values]

**Alignment with Standards:**
This baseline follows GHG Protocol Corporate Accounting and Reporting Standard principles for Scope 1 and Scope 2 emissions. Methodology is consistent with ISO 14064-1:2018 requirements for organizational-level GHG inventories.

**Verification Status:** [Not verified] OR [Third-party verified by [Organization] on [Date]]

**Contact:** [Name, Role, Email] for methodology questions

---

## PART H: NEXT STEPS & CONTINUOUS IMPROVEMENT

### Immediate Actions (Post-Baseline Completion)

✅ **Save completed worksheet** in: Baseline Data/Energy-Emissions/Final Baseline

✅ **Export summary data** to Baseline Report template

✅ **File all source documents** (utility bills, invoices) in organized evidence folder

✅ **Log methodology** in central Methodology Statement document

✅ **Communicate results** to internal stakeholders (farm management, owners)

### Short-Term Improvements (Months 2-6)

**Data quality upgrades:**
- [ ] Install sub-meters on major electricity loads (irrigation pumps, cold storage, dryers) if currently only have site-level data
- [ ] Implement equipment fuel logging (track hours run, fuel consumed per machine)
- [ ] Set up monthly data collection routine (calendar reminders, assigned responsibility)
- [ ] Replace rough estimates with measured data where possible

**Benchmarking:**
- [ ] Compare your intensity metrics to industry benchmarks
- [ ] Identify if you're high/low vs comparable operations
- [ ] Investigate outliers (why is electricity so high? Diesel so low?)

**Opportunity identification (→ feeds into Stack 2: Operational Efficiency):**
- [ ] Where is energy consumption highest? (which equipment, processes, seasons)
- [ ] What drives consumption spikes? (drying, irrigation, heating)
- [ ] Are there obvious wastes? (inefficient equipment, unnecessary usage, poor insulation)

### Long-Term (Year 2-3)

**Measurement infrastructure:**
- [ ] Consider automated monitoring for major energy loads (IoT sensors, energy management systems)
- [ ] Explore renewable energy feasibility (solar PV ROI analysis)
- [ ] Implement predictive maintenance to optimize equipment efficiency

**Reporting maturity:**
- [ ] Prepare for third-party verification if required by buyers/certifications
- [ ] Develop multi-year trend reporting (show annual improvement)
- [ ] Integrate energy data into broader ESG/sustainability reporting

**Value creation (→ Stack 3):**
- [ ] Use verified emissions data to access green financing (lower interest rates for sustainable operations)
- [ ] Market low-emission products to buyers prioritizing sustainable supply chains
- [ ] Participate in carbon credit programs if reductions achieved

---

## APPENDIX: EMISSION FACTOR REFERENCE TABLE

### Electricity Grid Emission Factors (kg CO2e per kWh)

**European Union (2023 IEA data):**
- Germany: 0.348
- France: 0.051 (low due to nuclear)
- Italy: 0.256
- Spain: 0.197
- Netherlands: 0.304
- UK: 0.233
- Poland: 0.701 (high coal dependency)
- EU Average: 0.255

**Other Regions:**
- USA Average: 0.386
- Canada Average: 0.120
- Australia: 0.610
- China: 0.555
- India: 0.708

**Note:** Grid emission factors change annually as energy mix evolves. Use most recent year available for your baseline calculation. Document source clearly.

### Fuel Emission Factors

**Standard IPCC / EPA Factors:**

| Fuel Type | Unit | kg CO2 | kg CH4 | kg N2O | **Total kg CO2e*** |
|-----------|------|--------|---------|--------|------------------|
| Diesel | Liter | 2.663 | 0.00007 | 0.00013 | 2.68 |
| Diesel | US Gallon | 10.18 | 0.00027 | 0.00049 | 10.21 |
| Gasoline | Liter | 2.296 | 0.00009 | 0.00013 | 2.31 |
| Gasoline | US Gallon | 8.78 | 0.00034 | 0.00049 | 8.78 |
| Natural Gas | m³ | 2.017 | 0.00004 | 0.00001 | 2.03 |
| Natural Gas | Therm | 5.285 | 0.00010 | 0.00003 | 5.30 |
| Propane (LPG) | Kg | 2.964 | 0.00006 | 0.00010 | 2.98 |
| Propane (LPG) | Liter | 1.664 | 0.00003 | 0.00006 | 1.67 |

*CO2e (CO2-equivalent) combines CO2, CH4, and N2O using global warming potentials (CH4 = 25× CO2, N2O = 298× CO2)

**Higher Heating Value (HHV) vs Lower Heating Value (LHV):**
These factors use HHV (standard for stationary combustion). If your region requires LHV, adjust accordingly. Document which approach you use.

---

## NOTES & ASSUMPTIONS LOG

Use this section to document any operation-specific notes, unusual circumstances, or assumptions made during baseline calculation:

**[Date] - [Your Initials] - [Note]**

Example:
- 2024-03-15 - CY - Diesel consumption Feb 2024 estimated from Jan + Mar average due to missing invoice
- 2024-03-20 - CY - Electricity spike in July due to grain dryer running 24/7 during wet harvest
- 2024-04-01 - CY - Natural gas consumption only includes greenhouse heating, office building uses electric heating

---

**End of Energy & Emissions Calculation Worksheet**

**Next Steps:**
1. Complete Water Consumption Worksheet
2. Complete Waste Generation Worksheet  
3. Complete Agricultural Emissions Worksheet (if crop/livestock operation)
4. Compile all metrics into Baseline Report template

**Questions?** Refer to Implementation Guide Week 6-7 for detailed calculation methodology guidance.

---

*This worksheet is part of the Audit-Defensible Baseline System toolkit (€99). For support using this template, consult the included Implementation Guide or contact [support email].*