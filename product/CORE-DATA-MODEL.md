# Five Stacks — Core Data Model

**Status:** Brainstorming  
**Purpose:** Define what the platform actually tracks for each stack

---

## Guiding Principle

The platform tracks **operational data** that feeds into the Five Stacks methodology. Users input real numbers from their operations; the platform helps them see patterns, calculate metrics, and generate outputs.

Each stack builds on data from previous stacks.

---

## The "So What" Philosophy

Data without insight is just admin. Every stack needs to answer a core question:

| Stack | Core Question | Health View |
|-------|---------------|-------------|
| 1. Baseline | "Do I know my business?" | Data completeness, freshness, confidence |
| 2. Efficiency | "Am I leaking money?" | Margin leaks, benchmarks, anomalies |
| 3. Circular | "Am I leaving money on the table?" | Untapped waste value, idle capacity |
| 4. Resilience | "How fragile am I?" | Dependencies, concentration, single points of failure |
| 5. Regenerative | "Am I building long-term advantage?" | Strategic clarity, portfolio health, market position |

### Design Principles for Operational Health Views

1. **Lead with the question, not the data** — Users don't want to see numbers; they want to know if they're okay
2. **Traffic light simplicity** — Red/Yellow/Green at a glance, details on demand
3. **Actionable recommendations** — Every insight should suggest a next step
4. **Celebrate wins** — Positive reinforcement when things improve
5. **Honest about gaps** — "You don't have enough data to answer this yet" is valid
6. **No false precision** — Don't pretend we know more than we do

---

## Stack 1: ESG & Core Metrics (Baseline)

**Outcome:** Know your baseline + understand where you stand

### What Users Track

#### Energy
- Electricity consumption (kWh) — by period
- Fuel consumption — diesel, gasoline, natural gas, propane (liters/m³)
- Renewable vs. non-renewable split
- Source documentation (bills, meters)

#### Emissions (calculated from energy)
- Scope 1 (direct) — fuel combustion, on-site
- Scope 2 (indirect) — purchased electricity
- Total tCO2e
- Intensity metrics (per unit output, per hectare, per €revenue)

#### Water
- Consumption by source (municipal, well, surface, rainwater)
- Usage by purpose (irrigation, processing, domestic, livestock)
- Discharge/wastewater

#### Waste
- Generation by stream (organic, recyclable, hazardous, general)
- Disposal method (landfill, recycling, composting, incineration)
- Diversion rate (% not landfilled)

#### Land (for ag/land-based operations)
- Total operational area
- Production vs. non-production allocation
- Biodiversity areas (hedgerows, buffers, conservation)

#### Inputs (for ag/manufacturing)
- Fertilizer application (N, P, K quantities)
- Pesticide/herbicide usage
- Feed inputs (livestock)
- Raw materials

#### Outputs
- Production volumes (kg, tonnes, units)
- Revenue (optional, for intensity metrics)
- Quality grades

#### Workforce (basic)
- Employee count (FTE)
- Safety incidents

### Key Calculated Metrics

- Energy intensity (kWh per unit output)
- Carbon intensity (kgCO2e per unit output)
- Water intensity (L per unit output)
- Waste diversion rate (%)
- Input efficiency ratios

### Data Entry Pattern

- **Frequency:** Monthly (or as available)
- **Source:** Bills, invoices, production records, meters
- **Confidence tagging:** Measured vs. estimated vs. unknown

### 🎯 Operational Health View: "Do I Know My Business?"

#### Health Indicators

| Indicator | Red | Yellow | Green |
|-----------|-----|--------|-------|
| Data completeness | <50% of metrics tracked | 50-80% tracked | >80% tracked |
| Data freshness | >60 days since last entry | 30-60 days | <30 days |
| Confidence level | Mostly estimates | Mix of measured/estimated | Mostly measured |
| Coverage gaps | Major categories missing | Minor gaps | All categories covered |

#### Dashboard Widgets

- **Baseline Completeness Score** — "You're tracking 7 of 12 core metrics"
- **Data Age Alert** — "Your water data is 45 days old"
- **Confidence Map** — Visual showing measured vs. estimated by category
- **Year-over-Year Comparison** — "You have enough data to compare to last year" (or not)

#### Smart Recommendations

| Trigger | Recommendation |
|---------|----------------|
| No energy data | "Start with electricity—it's usually the easiest bill to find" |
| All estimates | "Your data is 100% estimated. Can you locate one actual bill this week?" |
| Missing waste data | "Waste tracking unlocks diversion rate—check your hauler invoices" |
| Good baseline achieved | "Nice! You have 3 months of solid data. Ready to look at efficiency patterns?" |
| Seasonal gap | "You're missing summer months—seasonal patterns matter for benchmarking" |
| Single metric only | "You're tracking energy well. Adding water takes 10 minutes and doubles your insight." |

---

## Stack 2: Operational Efficiency (Patterns)

**Outcome:** See where you're leaking margin, where you're inefficient

### What Users Track (Builds on Stack 1)

#### Cost Data (linking to consumption)
- Energy costs (€ per period)
- Water costs
- Waste disposal costs
- Input costs (fertilizer, feed, materials)
- Maintenance costs

#### Efficiency Observations
- Equipment runtime hours
- Downtime incidents
- Process bottlenecks (user-logged notes)
- Seasonal patterns

#### Benchmarking Inputs
- Industry type (for comparison)
- Operation scale (for normalization)

### Key Calculated Metrics

- Cost per unit output
- Energy cost as % of revenue
- Waste cost as % of operating expenses
- Month-over-month efficiency trends
- Anomaly detection (unusual spikes)
- "Margin leak" identification — where costs exceed benchmarks

### Analysis Outputs

- Efficiency scorecard
- Trend visualizations
- Opportunity flagging ("Your energy intensity is 20% above typical for your sector")

### 🎯 Operational Health View: "Am I Leaking Money?"

#### Health Indicators

| Indicator | Red | Yellow | Green |
|-----------|-----|--------|-------|
| Energy cost trend | Rising >10% YoY | Flat or rising <10% | Declining |
| Intensity vs. benchmark | >25% above typical | 10-25% above | At or below typical |
| Cost anomalies | Multiple unexplained spikes | Occasional spikes | Stable patterns |
| Margin leak score | High (>15% of costs avoidable) | Medium (5-15%) | Low (<5%) |

#### Dashboard Widgets

- **Margin Leak Meter** — "€4,200/year in likely avoidable costs identified"
- **Efficiency Trend Arrows** — Per-metric direction indicators (improving/stable/worsening)
- **Anomaly Alerts** — "February electricity was 40% higher than typical—worth investigating?"
- **Benchmark Position** — "Your water intensity: 12L/kg. Typical for your sector: 9L/kg."
- **Quick Wins Counter** — "3 efficiency opportunities identified"

#### Smart Recommendations

| Trigger | Recommendation |
|---------|----------------|
| High energy intensity | "Your energy use per unit is 30% above benchmark. Top causes are usually lighting, refrigeration, or equipment age." |
| Rising costs, flat consumption | "Costs up but usage flat—check if your energy rate changed or if you're on the wrong tariff." |
| Seasonal spike pattern | "You spike every July. Is this cooling load? Might be worth investigating efficiency upgrades." |
| Water intensity high | "12L/kg is above typical. Farms like yours often find wins in irrigation timing or leak detection." |
| Good efficiency | "Your energy intensity is better than 70% of similar operations. That's a competitive advantage worth documenting." |
| Missing cost data | "You're tracking consumption but not costs. Adding costs takes 5 min and unlocks margin analysis." |
| Improvement detected | "Nice—your waste costs dropped 15% this quarter. What changed? Worth documenting." |

---

## Stack 3: Circular Value Creation (Opportunities)

**Outcome:** Identify what waste/byproducts could become value

### What Users Track

#### Waste Stream Details (deeper than Stack 1)
- Specific waste types (not just categories)
- Volumes per waste stream
- Current disposal cost per stream
- Composition notes

#### Byproduct Inventory
- What's produced as a side effect?
- Current fate (discarded, given away, sold?)
- Volume/quantity available

#### Capacity Utilization
- Equipment idle time
- Underutilized space
- Seasonal capacity gaps

### Analysis Outputs

- Waste-to-value opportunity matrix
- Byproduct market potential (reference data)
- Circular economy matches ("Operations like yours sell X to Y industries")
- Revenue opportunity estimates

### User Actions

- Flag opportunities for investigation
- Track implementation status
- Log new revenue streams when realized

### 🎯 Operational Health View: "Am I Leaving Money on the Table?"

#### Health Indicators

| Indicator | Red | Yellow | Green |
|-----------|-----|--------|-------|
| Waste valorization | 0% of waste streams monetized | Some streams explored | Multiple revenue streams from waste |
| Byproduct awareness | Unknown what byproducts exist | Inventory exists, no action | Actively marketed/sold |
| Capacity utilization | <50% equipment/space utilized | 50-75% utilized | >75% or monetizing idle capacity |
| Circular opportunities | None identified | Identified, not pursued | Implemented and generating value |

#### Dashboard Widgets

- **Hidden Revenue Finder** — "€2,800/year potential from 3 untapped waste streams"
- **Byproduct Inventory** — Visual list of what's leaving your operation and where it goes
- **Opportunity Pipeline** — "2 opportunities identified → 1 under investigation → 0 implemented"
- **Capacity Gauge** — "Your cold storage runs 40% idle June-August"
- **Circular Wins Log** — Track implemented value recovery (for motivation + documentation)

#### Smart Recommendations

| Trigger | Recommendation |
|---------|----------------|
| High organic waste | "You're generating 2t/month organic waste. Composting or animal feed partnerships could turn this into revenue." |
| Seasonal capacity gap | "Equipment sits idle 4 months/year. Could you process for neighbors? Rent the space?" |
| No byproduct tracking | "You might have valuable byproducts you're not seeing. Take 15 min to list everything that leaves your operation." |
| Opportunity stalled | "The straw bale opportunity has been 'under investigation' for 60 days. Time to decide: pursue or park?" |
| First circular win | "🎉 You logged your first value recovery! €400/month from fruit seconds. What else could work?" |
| High disposal costs | "You're paying €180/month for waste hauling. That's motivation to find alternatives." |

---

## Stack 4: Adaptive Resilience (Risk & Diversification)

**Outcome:** Understand vulnerabilities, build redundancy

### What Users Track

#### Dependency Mapping
- Key input suppliers (single source vs. diversified?)
- Critical equipment (single points of failure?)
- Revenue concentration (% from top customers)
- Market concentration (% from single product/crop)

#### Risk Observations
- Weather/climate incidents
- Supply disruptions experienced
- Price volatility impacts
- Regulatory changes affecting operations

#### Diversification Status
- Number of product lines/crops
- Number of markets served
- Alternative supplier relationships
- Backup systems in place

### Analysis Outputs

- Risk exposure scorecard
- Diversification index
- Vulnerability mapping
- Resilience recommendations

### 🎯 Operational Health View: "How Fragile Am I?"

#### Health Indicators

| Indicator | Red | Yellow | Green |
|-----------|-----|--------|-------|
| Supplier concentration | Single source for critical inputs | 2-3 suppliers, no backup plan | Multiple suppliers + backup relationships |
| Revenue concentration | >50% from one customer/product | 30-50% concentration | <30% from any single source |
| Climate exposure | No adaptation measures | Aware of risks, limited action | Active adaptation strategies in place |
| Single points of failure | Multiple critical dependencies | Some redundancy | Robust backup systems |

#### Dashboard Widgets

- **Fragility Score** — "Your operation has 3 single points of failure"
- **Concentration Map** — Visual showing revenue/supplier/market dependencies
- **Disruption Log** — "2 supply disruptions this year, costing ~€3,200"
- **Diversification Index** — "4 products, 3 markets, 2 key suppliers" (trending up/down)
- **What-If Scenarios** — "If your top customer left, you'd lose 40% of revenue"

#### Smart Recommendations

| Trigger | Recommendation |
|---------|----------------|
| Single supplier | "100% of your seed comes from one supplier. One bad year for them = crisis for you. Worth a backup call?" |
| Revenue concentration | "Customer X is 45% of revenue. Great relationship, but what's your plan if they change direction?" |
| Recent disruption logged | "You logged a supply disruption last month. What would prevent this next time?" |
| No diversification progress | "Your diversification index hasn't changed in 6 months. Stuck, or intentionally focused?" |
| Weather incident | "You logged frost damage in April. Are there varieties or timing changes that would reduce exposure?" |
| Good diversification | "You've built real resilience—4 revenue streams, multiple suppliers. Document this—it's a competitive advantage." |

---

## Stack 5: Regenerative Advantage (Strategic Navigation)

**Outcome:** Steer dynamically across your portfolio

### What Users Track

#### Portfolio Performance
- Profitability by product/activity
- Sustainability performance by product/activity
- Market trend observations (user-logged)
- Stakeholder feedback (buyer requests, certification interest)

#### Strategic Decisions
- What's being scaled up?
- What's being wound down?
- New initiatives in progress

#### External Signals
- Certification achievement
- Premium pricing captured
- New market access gained
- Recognition/awards

### Analysis Outputs

- Portfolio dashboard
- Strategic steering recommendations
- "What if" scenario tools (future feature?)
- Regenerative transition tracking

### 🎯 Operational Health View: "Am I Building Long-Term Advantage?"

#### Health Indicators

| Indicator | Red | Yellow | Green |
|-----------|-----|--------|-------|
| Strategic clarity | No clear direction | Some goals, reactive decisions | Clear strategy, proactive moves |
| Portfolio balance | All eggs in one basket | Some diversification | Balanced portfolio with growth options |
| Market position | Commodity player, no differentiation | Some differentiation | Clear competitive advantages |
| Regenerative progress | Extractive/declining systems | Maintaining/stable | Improving/regenerating |

#### Dashboard Widgets

- **Strategic Compass** — "You're scaling: tomatoes, greenhouses. Winding down: conventional wheat."
- **Advantage Inventory** — "Documented competitive advantages: low water intensity, organic cert, direct relationships"
- **Portfolio Health** — Visual map of products/activities by profitability + sustainability performance
- **Momentum Tracker** — "3 initiatives in progress, 2 completed this year, 1 stalled"
- **Stakeholder Signals** — "2 buyers asked about carbon footprint this quarter"

#### Smart Recommendations

| Trigger | Recommendation |
|---------|----------------|
| No strategic logging | "You haven't logged strategic decisions in 90 days. Is the plan still the plan?" |
| Stalled initiative | "'Solar installation' has been in progress for 6 months. What's blocking it?" |
| Buyer signal pattern | "3 buyers asked about water usage this quarter. Emerging requirement or coincidence?" |
| Profitability vs sustainability mismatch | "Your highest-margin product has your worst sustainability metrics. Tension to resolve or accept?" |
| Advantage undocumented | "You're 30% more water-efficient than typical. Are you using this in sales conversations?" |
| Regenerative win | "🌱 Soil organic matter up 0.5% this year. That's carbon sequestration AND long-term productivity." |
| Portfolio imbalance | "80% of profit from 20% of products. Intentional focus or hidden risk?" |

---

## Cross-Stack Data Relationships

```
Stack 1 (Baseline Data)
    │
    ├── Energy, Water, Waste, Inputs, Outputs
    │
    ▼
Stack 2 (+ Cost Data, Benchmarks)
    │
    ├── Efficiency metrics, trends, margin leaks
    │
    ▼
Stack 3 (+ Waste Details, Byproducts, Capacity)
    │
    ├── Circular opportunities, value recovery
    │
    ▼
Stack 4 (+ Dependencies, Risks, Diversification)
    │
    ├── Resilience assessment, vulnerability map
    │
    ▼
Stack 5 (+ Portfolio Performance, Strategic Decisions)
    │
    └── Navigation dashboard, steering tools
```

---

## Data Entry Philosophy

### Make It Easy

- **Mobile-friendly forms** — Quick entry in the field
- **Smart defaults** — Pre-fill where possible
- **Flexible frequency** — Monthly ideal, but accept what users have
- **Photo/receipt capture** — Attach evidence easily
- **Voice notes** — For observations in the field (future feature?)

### Make It Honest

- **Confidence tagging** — Measured / Estimated / Unknown
- **Source tracking** — Where did this number come from?
- **Gap acknowledgment** — It's okay to have missing data
- **Improvement prompts** — "You estimated this last month. Do you have actuals now?"

### Make It Useful

- **Instant feedback** — Show metrics as data is entered
- **Trend visibility** — Compare to previous periods
- **Benchmark context** — How does this compare to typical?
- **Export anytime** — Your data, your formats

---

## MVP Scope (Core Platform)

For initial launch, focus on:

### Must Have (Stack 1-2)
- Energy tracking + emissions calculation
- Water tracking
- Waste tracking (basic categories)
- Production output tracking
- Cost tracking
- Monthly data entry
- Basic dashboard with trends
- Export to PDF/Excel

### Nice to Have (Stack 3-4)
- Waste stream details
- Byproduct tracking
- Dependency mapping
- Risk logging

### Later (Stack 5)
- Portfolio analysis
- Strategic steering tools
- Advanced scenario planning

---

## Questions to Resolve

1. **Units flexibility** — Metric vs. imperial? User preference setting?
2. **Multi-site** — One operation or multiple locations? (Probably later feature)
3. **Team access** — Single user or multi-user accounts? (Probably later feature)
4. **Emission factors** — Pre-loaded by region? User-adjustable?
5. **Offline capability** — PWA with sync? (Important for field use)
6. **Data import** — Can they upload CSVs? Connect to accounting software? (Later feature)

---

*This document defines what the platform tracks. UI/UX design and technical implementation are separate concerns.*
