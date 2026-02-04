# Calculator Modules — Specifications

**Status:** Brainstorming  
**Purpose:** Define potential calculator modules, what they do, and how they connect to the core platform

---

## Module Philosophy

Each calculator:
- **Solves one specific problem** — focused, not bloated
- **Works standalone** — doesn't require the core platform
- **Integrates when connected** — pulls/pushes data from core if user has both
- **Has an SEO entry point** — corresponds to existing content traffic
- **14-day trial** — same model as core platform

---

## Priority Tier 1 (High Traffic Potential)

### Ecolabel Readiness Tool

**Entry point:** Ecolabel articles (your highest traffic content)

**Problem it solves:** "Which ecolabel should I pursue, and am I ready for it?"

**What it does:**
1. User answers questions about their operation
2. Tool recommends relevant ecolabels (filtered by industry, region, goals)
3. Gap analysis against requirements for selected ecolabel(s)
4. Checklist generation for preparation
5. Progress tracking toward certification

**Standalone price:** €39  
**Add-on price:** €29

**Integration with core:** Pulls existing data from Stack 1 to auto-populate gap analysis

---

### VSME Prep & Delivery Tool

**Entry point:** CSRD/VSME content

**Problem it solves:** "I need to complete the VSME voluntary standard and I don't know where to start"

**What it does:**
1. Guided walkthrough of VSME requirements
2. Data collection forms matching VSME structure
3. Gap identification (what's missing?)
4. Export-ready VSME document (PDF format matching standard)
5. Confidence scoring ("Is this audit-ready?")

**Standalone price:** €39  
**Add-on price:** €29

**Integration with core:** Pulls data from Stack 1 baseline directly into VSME fields

---

### Solar ROI Calculator

**Entry point:** Solar/energy articles

**Problem it solves:** "Should I invest in solar, and what's the payback?"

**What it does:**
1. Input current energy consumption + costs
2. Input location (for solar irradiance data)
3. Input available space/constraints
4. Calculate system sizing recommendation
5. Calculate payback period, ROI, annual savings
6. Compare scenarios (different system sizes, financing options)

**Standalone price:** €29  
**Add-on price:** €19

**Integration with core:** Pulls energy data from Stack 1; results feed into Stack 2 efficiency analysis

---

## Priority Tier 2 (Ag-Specific)

### Intercropping Value Calculator

**Entry point:** Intercropping content

**Problem it solves:** "What companion planting combinations work for my operation?"

**What it does:**
1. Input primary crop(s) and goals
2. Recommend compatible companion plants
3. Calculate expected yield impacts
4. Estimate input reduction potential (fertilizer, pest control)
5. Model economic value of intercropping vs. monoculture

**Standalone price:** €29  
**Add-on price:** €19

**Integration with core:** Pulls land/input data from Stack 1; feeds into Stack 3 (value creation)

---

### Crop Rotation Planner

**Entry point:** Soil health / sustainable farming content

**Problem it solves:** "How do I plan rotations for soil health and profitability?"

**What it does:**
1. Input current fields and recent crop history
2. Input soil type, climate zone
3. Recommend rotation sequences
4. Visualize multi-year rotation plan
5. Track nutrient cycling implications
6. Model economic implications of different rotations

**Standalone price:** €29  
**Add-on price:** €19

**Integration with core:** Uses land data from Stack 1; informs Stack 4 (resilience through diversification)

---

### Feed Conversion Optimizer

**Entry point:** Livestock efficiency content

**Problem it solves:** "Am I feeding efficiently, and where can I improve?"

**What it does:**
1. Input livestock type, count, growth stage
2. Input feed types, quantities, costs
3. Calculate feed conversion ratio (FCR)
4. Benchmark against typical FCR for species/breed
5. Identify optimization opportunities
6. Model cost savings from improved FCR

**Standalone price:** €29  
**Add-on price:** €19

**Integration with core:** Pulls input/output data from Stack 1; feeds into Stack 2 efficiency analysis

---

## Priority Tier 3 (Broader Application)

### Water Efficiency Analyzer

**Entry point:** Water / irrigation content

**Problem it solves:** "Where am I wasting water, and what's the cost?"

**What it does:**
1. Input water sources and consumption by use
2. Benchmark against typical usage for operation type
3. Identify high-consumption areas
4. Model savings from efficiency improvements
5. Track efficiency over time

**Standalone price:** €29  
**Add-on price:** €19

**Integration with core:** Directly uses/enhances Stack 1 water data; feeds Stack 2 efficiency analysis

---

### Carbon Credit Feasibility Checker

**Entry point:** Carbon / emissions content

**Problem it solves:** "Could I generate carbon credits from my operation?"

**What it does:**
1. Input operation type and practices
2. Assess eligibility for carbon programs (voluntary, compliance)
3. Estimate potential credit generation
4. Compare programs (methodologies, pricing, requirements)
5. Provide next steps for pursuing credits

**Standalone price:** €29  
**Add-on price:** €19

**Integration with core:** Uses emissions data from Stack 1; informs Stack 5 (regenerative advantage / new revenue)

---

### Waste-to-Value Opportunity Scanner

**Entry point:** Circular economy / waste content

**Problem it solves:** "What could I do with my waste streams besides landfill?"

**What it does:**
1. Input waste streams (types, volumes, current disposal)
2. Match to potential valorization pathways
3. Identify potential buyers/uses for byproducts
4. Estimate revenue potential
5. Model net benefit vs. current disposal costs

**Standalone price:** €29  
**Add-on price:** €19

**Integration with core:** Uses waste data from Stack 1; directly supports Stack 3 (circular value creation)

---

## Module Integration Patterns

### Standalone Mode

User buys calculator without core platform:
- Full functionality
- Data entered directly into calculator
- Exports available
- Upsell prompt: "Want to track this over time and connect to your full operation? Try Five Stacks Core."

### Integrated Mode

User has both calculator and core platform:
- Calculator appears in their module library
- Data auto-populates from core where relevant
- Calculator results feed back into core dashboards
- Seamless experience, single data source

### Upgrade Path

User started with standalone calculator, later buys core:
- Historical calculator data migrates to core
- Credit applied (e.g., paid €29 standalone → core upgrade costs €118 instead of €147)
- Unlock message: "Your Solar ROI Calculator is now connected to your operational data!"

---

## Build Prioritization Logic

**Build first:**
1. Modules with highest existing traffic entry points
2. Modules that demonstrate clear value quickly
3. Modules that naturally upsell to core

**Build later:**
1. Modules requiring complex external data (carbon credit programs, etc.)
2. Modules with narrower audience (livestock-specific, etc.)
3. Advanced planning tools (scenario modeling, etc.)

**Suggested first three:**
1. Ecolabel Readiness Tool (high traffic, clear value, upsells to core)
2. VSME Prep Tool (timely, clear deliverable, connects to ESG Passport audience)
3. Solar ROI Calculator (universal appeal, simple to build, demonstrates calculation capability)

---

## Open Questions

1. **Reference data** — Some calculators need external data (ecolabel requirements, solar irradiance, carbon program rules). How maintained?
2. **Localization** — Some calculators are region-specific (emission factors, programs). How to handle?
3. **Updates** — When regulations/programs change, how do we update calculators? Lifetime purchase = lifetime updates?
4. **User-generated** — Could users eventually request custom calculators? (Way later feature)

---

*This document defines calculator module concepts. Detailed specs will be created per module before build.*
