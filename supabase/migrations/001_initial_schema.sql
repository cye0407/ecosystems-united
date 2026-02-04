-- ============================================================================
-- 001_initial_schema.sql
-- Initial database schema for Ecosystems United ESG data collection app
-- ============================================================================

-- ----------------------------------------------------------------------------
-- Trigger function: auto-update updated_at on row modification
-- ----------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============================================================================
-- 1. companies
-- ============================================================================
CREATE TABLE IF NOT EXISTS companies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  legal_entity_name TEXT NOT NULL,
  trading_name TEXT,
  registration_number TEXT,
  industry_code TEXT NOT NULL,
  industry_description TEXT NOT NULL,
  ownership_type TEXT NOT NULL,
  founding_year INT,
  headquarters_country TEXT NOT NULL,
  headquarters_city TEXT,
  reporting_period_start TEXT NOT NULL,
  reporting_period_end TEXT NOT NULL,
  total_fte INT NOT NULL,
  fte_confidence TEXT NOT NULL,
  number_of_sites INT NOT NULL,
  primary_site_country TEXT NOT NULL,
  other_site_countries JSONB,
  revenue_band TEXT NOT NULL,
  revenue_currency TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own data" ON companies FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_companies_updated_at BEFORE UPDATE ON companies FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================================
-- 2. sites
-- ============================================================================
CREATE TABLE IF NOT EXISTS sites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  company_id UUID REFERENCES companies(id),
  site_name TEXT NOT NULL,
  site_type TEXT NOT NULL,
  country TEXT NOT NULL,
  city TEXT,
  floor_area_m2 NUMERIC,
  ownership TEXT NOT NULL,
  operational_since TEXT,
  is_primary BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE sites ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own data" ON sites FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_sites_updated_at BEFORE UPDATE ON sites FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================================
-- 3. swot
-- ============================================================================
CREATE TABLE IF NOT EXISTS swot (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  company_id UUID REFERENCES companies(id),
  strengths TEXT NOT NULL,
  weaknesses TEXT NOT NULL,
  opportunities TEXT NOT NULL,
  threats TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE swot ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own data" ON swot FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_swot_updated_at BEFORE UPDATE ON swot FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================================
-- 4. goals
-- ============================================================================
CREATE TABLE IF NOT EXISTS goals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  company_id UUID REFERENCES companies(id),
  primary_goal TEXT NOT NULL,
  time_horizon TEXT NOT NULL,
  primary_motivation TEXT NOT NULL,
  secondary_motivations JSONB,
  success_definition TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE goals ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own data" ON goals FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_goals_updated_at BEFORE UPDATE ON goals FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================================
-- 5. regulatory_context
-- ============================================================================
CREATE TABLE IF NOT EXISTS regulatory_context (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  company_id UUID REFERENCES companies(id),
  csrd_applicable TEXT NOT NULL,
  vsme_applicable TEXT NOT NULL,
  other_frameworks JSONB,
  customer_requirements TEXT,
  certifications_held JSONB,
  certifications_targeted JSONB,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE regulatory_context ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own data" ON regulatory_context FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_regulatory_context_updated_at BEFORE UPDATE ON regulatory_context FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================================
-- 6. materials
-- ============================================================================
CREATE TABLE IF NOT EXISTS materials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  company_id UUID REFERENCES companies(id),
  material_name TEXT NOT NULL,
  material_category TEXT NOT NULL,
  material_type TEXT NOT NULL,
  unit_of_measure TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE materials ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own data" ON materials FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_materials_updated_at BEFORE UPDATE ON materials FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================================
-- 7. material_inputs
-- ============================================================================
CREATE TABLE IF NOT EXISTS material_inputs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  material_id UUID REFERENCES materials(id),
  site_id UUID REFERENCES sites(id),
  period TEXT NOT NULL,
  quantity NUMERIC NOT NULL,
  unit TEXT NOT NULL,
  virgin_content_percent NUMERIC,
  recycled_content_percent NUMERIC,
  supplier_name TEXT NOT NULL,
  supplier_country TEXT NOT NULL,
  supplier_id TEXT,
  cost NUMERIC,
  cost_currency TEXT,
  hazardous BOOLEAN,
  certification TEXT,
  source TEXT NOT NULL,
  source_detail TEXT,
  confidence TEXT NOT NULL,
  estimation_method TEXT,
  last_updated TEXT NOT NULL,
  updated_by TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE material_inputs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own data" ON material_inputs FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_material_inputs_updated_at BEFORE UPDATE ON material_inputs FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================================
-- 8. packaging
-- ============================================================================
CREATE TABLE IF NOT EXISTS packaging (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  company_id UUID REFERENCES companies(id),
  packaging_name TEXT NOT NULL,
  packaging_level TEXT NOT NULL,
  material_type TEXT NOT NULL,
  material_detail TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE packaging ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own data" ON packaging FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_packaging_updated_at BEFORE UPDATE ON packaging FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================================
-- 9. packaging_inputs
-- ============================================================================
CREATE TABLE IF NOT EXISTS packaging_inputs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  packaging_id UUID REFERENCES packaging(id),
  site_id UUID REFERENCES sites(id),
  period TEXT NOT NULL,
  quantity_units NUMERIC NOT NULL,
  total_weight_kg NUMERIC NOT NULL,
  recycled_content_percent NUMERIC,
  recyclability_class TEXT,
  linked_product TEXT,
  supplier_name TEXT,
  supplier_country TEXT,
  cost NUMERIC,
  source TEXT NOT NULL,
  source_detail TEXT,
  confidence TEXT NOT NULL,
  estimation_method TEXT,
  last_updated TEXT NOT NULL,
  updated_by TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE packaging_inputs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own data" ON packaging_inputs FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_packaging_inputs_updated_at BEFORE UPDATE ON packaging_inputs FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================================
-- 10. energy_electricity
-- ============================================================================
CREATE TABLE IF NOT EXISTS energy_electricity (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  site_id UUID REFERENCES sites(id),
  period TEXT NOT NULL,
  consumption_kwh NUMERIC NOT NULL,
  source_grid_percent NUMERIC NOT NULL,
  source_onsite_renewable_percent NUMERIC NOT NULL,
  source_ppa_percent NUMERIC NOT NULL,
  green_tariff BOOLEAN,
  cost NUMERIC,
  cost_currency TEXT,
  source TEXT NOT NULL,
  source_detail TEXT,
  confidence TEXT NOT NULL,
  estimation_method TEXT,
  last_updated TEXT NOT NULL,
  updated_by TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE energy_electricity ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own data" ON energy_electricity FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_energy_electricity_updated_at BEFORE UPDATE ON energy_electricity FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================================
-- 11. energy_fuels
-- ============================================================================
CREATE TABLE IF NOT EXISTS energy_fuels (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  site_id UUID REFERENCES sites(id),
  period TEXT NOT NULL,
  fuel_type TEXT NOT NULL,
  quantity NUMERIC NOT NULL,
  unit TEXT NOT NULL,
  purpose TEXT NOT NULL,
  cost NUMERIC,
  source TEXT NOT NULL,
  source_detail TEXT,
  confidence TEXT NOT NULL,
  estimation_method TEXT,
  last_updated TEXT NOT NULL,
  updated_by TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE energy_fuels ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own data" ON energy_fuels FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_energy_fuels_updated_at BEFORE UPDATE ON energy_fuels FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================================
-- 12. energy_water
-- ============================================================================
CREATE TABLE IF NOT EXISTS energy_water (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  site_id UUID REFERENCES sites(id),
  period TEXT NOT NULL,
  withdrawal_m3 NUMERIC NOT NULL,
  water_source TEXT NOT NULL,
  discharge_m3 NUMERIC,
  discharge_destination TEXT,
  consumption_m3 NUMERIC,
  cost NUMERIC,
  source TEXT NOT NULL,
  source_detail TEXT,
  confidence TEXT NOT NULL,
  estimation_method TEXT,
  last_updated TEXT NOT NULL,
  updated_by TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE energy_water ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own data" ON energy_water FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_energy_water_updated_at BEFORE UPDATE ON energy_water FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================================
-- 13. site_details
-- ============================================================================
CREATE TABLE IF NOT EXISTS site_details (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  site_id UUID REFERENCES sites(id),
  floor_area_m2 NUMERIC NOT NULL,
  floor_area_production_m2 NUMERIC,
  floor_area_office_m2 NUMERIC,
  floor_area_warehouse_m2 NUMERIC,
  building_age_years INT,
  last_major_renovation TEXT,
  energy_rating TEXT,
  owned_or_leased TEXT NOT NULL,
  lease_end_date TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE site_details ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own data" ON site_details FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_site_details_updated_at BEFORE UPDATE ON site_details FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================================
-- 14. assets
-- ============================================================================
CREATE TABLE IF NOT EXISTS assets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  site_id UUID REFERENCES sites(id),
  asset_name TEXT NOT NULL,
  asset_category TEXT NOT NULL,
  asset_type TEXT NOT NULL,
  quantity INT NOT NULL,
  acquisition_year INT,
  expected_lifespan_years INT,
  criticality TEXT,
  replacement_cost NUMERIC,
  energy_consumption_kwh_year NUMERIC,
  maintenance_frequency TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE assets ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own data" ON assets FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_assets_updated_at BEFORE UPDATE ON assets FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================================
-- 15. transport_logs
-- ============================================================================
CREATE TABLE IF NOT EXISTS transport_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  site_id UUID REFERENCES sites(id),
  period TEXT NOT NULL,
  direction TEXT NOT NULL,
  mode TEXT NOT NULL,
  vehicle_type TEXT,
  distance_km NUMERIC,
  weight_t NUMERIC,
  tkm NUMERIC,
  fuel_type TEXT,
  fuel_quantity NUMERIC,
  fuel_unit TEXT,
  carrier_name TEXT,
  load_factor_percent NUMERIC,
  spend NUMERIC,
  spend_currency TEXT,
  data_type TEXT NOT NULL,
  source TEXT NOT NULL,
  source_detail TEXT,
  confidence TEXT NOT NULL,
  estimation_method TEXT,
  last_updated TEXT NOT NULL,
  updated_by TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE transport_logs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own data" ON transport_logs FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_transport_logs_updated_at BEFORE UPDATE ON transport_logs FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================================
-- 16. workforce
-- ============================================================================
CREATE TABLE IF NOT EXISTS workforce (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  site_id UUID REFERENCES sites(id),
  period TEXT NOT NULL,
  total_fte NUMERIC NOT NULL,
  total_headcount INT,
  permanent_employees INT,
  temporary_employees INT,
  contractors INT,
  female_percent NUMERIC,
  male_percent NUMERIC,
  other_gender_percent NUMERIC,
  total_hours_worked NUMERIC NOT NULL,
  source TEXT NOT NULL,
  source_detail TEXT,
  confidence TEXT NOT NULL,
  estimation_method TEXT,
  last_updated TEXT NOT NULL,
  updated_by TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE workforce ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own data" ON workforce FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_workforce_updated_at BEFORE UPDATE ON workforce FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================================
-- 17. health_safety
-- ============================================================================
CREATE TABLE IF NOT EXISTS health_safety (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  site_id UUID REFERENCES sites(id),
  period TEXT NOT NULL,
  recordable_incidents INT NOT NULL,
  lost_time_incidents INT NOT NULL,
  lost_days INT,
  fatalities INT NOT NULL,
  near_misses INT,
  trir NUMERIC,
  ltir NUMERIC,
  source TEXT NOT NULL,
  source_detail TEXT,
  confidence TEXT NOT NULL,
  estimation_method TEXT,
  last_updated TEXT NOT NULL,
  updated_by TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE health_safety ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own data" ON health_safety FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_health_safety_updated_at BEFORE UPDATE ON health_safety FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================================
-- 18. training
-- ============================================================================
CREATE TABLE IF NOT EXISTS training (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  site_id UUID REFERENCES sites(id),
  period TEXT NOT NULL,
  total_training_hours NUMERIC,
  employees_trained INT,
  training_hours_per_fte NUMERIC,
  safety_training_hours NUMERIC,
  sustainability_training_hours NUMERIC,
  source TEXT NOT NULL,
  source_detail TEXT,
  confidence TEXT NOT NULL,
  estimation_method TEXT,
  last_updated TEXT NOT NULL,
  updated_by TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE training ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own data" ON training FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_training_updated_at BEFORE UPDATE ON training FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================================
-- 19. waste
-- ============================================================================
CREATE TABLE IF NOT EXISTS waste (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  site_id UUID REFERENCES sites(id),
  period TEXT NOT NULL,
  waste_category TEXT NOT NULL,
  waste_type TEXT,
  quantity_kg NUMERIC NOT NULL,
  disposal_route TEXT NOT NULL,
  disposal_partner TEXT,
  hazardous BOOLEAN NOT NULL,
  cost NUMERIC,
  revenue NUMERIC,
  source TEXT NOT NULL,
  source_detail TEXT,
  confidence TEXT NOT NULL,
  estimation_method TEXT,
  last_updated TEXT NOT NULL,
  updated_by TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE waste ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own data" ON waste FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_waste_updated_at BEFORE UPDATE ON waste FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================================
-- 20. product_outputs
-- ============================================================================
CREATE TABLE IF NOT EXISTS product_outputs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  site_id UUID REFERENCES sites(id),
  period TEXT NOT NULL,
  product_name TEXT NOT NULL,
  quantity NUMERIC NOT NULL,
  unit TEXT NOT NULL,
  revenue NUMERIC,
  source TEXT NOT NULL,
  source_detail TEXT,
  confidence TEXT NOT NULL,
  estimation_method TEXT,
  last_updated TEXT NOT NULL,
  updated_by TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE product_outputs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own data" ON product_outputs FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_product_outputs_updated_at BEFORE UPDATE ON product_outputs FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================================
-- 21. direct_emissions
-- ============================================================================
CREATE TABLE IF NOT EXISTS direct_emissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  site_id UUID REFERENCES sites(id),
  period TEXT NOT NULL,
  emission_source TEXT NOT NULL,
  source_detail TEXT NOT NULL,
  refrigerant_type TEXT,
  quantity_kg NUMERIC NOT NULL,
  tco2e NUMERIC,
  source TEXT NOT NULL,
  data_source_detail TEXT,
  confidence TEXT NOT NULL,
  estimation_method TEXT,
  last_updated TEXT NOT NULL,
  updated_by TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE direct_emissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own data" ON direct_emissions FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_direct_emissions_updated_at BEFORE UPDATE ON direct_emissions FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================================
-- 22. effluents
-- ============================================================================
CREATE TABLE IF NOT EXISTS effluents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  site_id UUID REFERENCES sites(id),
  period TEXT NOT NULL,
  effluent_type TEXT NOT NULL,
  volume_m3 NUMERIC NOT NULL,
  destination TEXT NOT NULL,
  treatment_level TEXT,
  permit_required BOOLEAN,
  permit_compliant BOOLEAN,
  source TEXT NOT NULL,
  source_detail TEXT,
  confidence TEXT NOT NULL,
  estimation_method TEXT,
  last_updated TEXT NOT NULL,
  updated_by TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE effluents ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own data" ON effluents FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_effluents_updated_at BEFORE UPDATE ON effluents FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================================
-- 23. external_context
-- ============================================================================
CREATE TABLE IF NOT EXISTS external_context (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  company_id UUID REFERENCES companies(id),
  primary_markets JSONB,
  market_scope TEXT NOT NULL,
  customer_type TEXT NOT NULL,
  key_customer_industries JSONB,
  customer_concentration TEXT NOT NULL,
  top_customer_share_percent NUMERIC,
  competitive_pressure_sustainability TEXT NOT NULL,
  competitor_sustainability_activity TEXT,
  market_sustainability_trend TEXT NOT NULL,
  price_premium_potential TEXT,
  csrd_status TEXT NOT NULL,
  csrd_expected_date TEXT,
  vsme_adoption TEXT NOT NULL,
  other_regulations JSONB,
  regulatory_pressure TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE external_context ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own data" ON external_context FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_external_context_updated_at BEFORE UPDATE ON external_context FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================================
-- 24. financial_context
-- ============================================================================
CREATE TABLE IF NOT EXISTS financial_context (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  company_id UUID REFERENCES companies(id),
  revenue_band TEXT NOT NULL,
  gross_margin_band TEXT NOT NULL,
  profitability_trend TEXT NOT NULL,
  cash_position TEXT NOT NULL,
  sustainability_budget_annual NUMERIC,
  sustainability_budget_currency TEXT,
  budget_type TEXT NOT NULL,
  capex_capacity_12mo TEXT NOT NULL,
  investment_priority TEXT NOT NULL,
  primary_cost_concerns JSONB,
  cost_pressure_level TEXT NOT NULL,
  cost_reduction_target NUMERIC,
  cost_reduction_timeframe TEXT,
  financing_relationships JSONB,
  sustainability_linked_financing TEXT NOT NULL,
  lender_esg_requirements TEXT NOT NULL,
  insurance_esg_questions BOOLEAN,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE financial_context ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own data" ON financial_context FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_financial_context_updated_at BEFORE UPDATE ON financial_context FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================================
-- 25. buyer_requirements
-- ============================================================================
CREATE TABLE IF NOT EXISTS buyer_requirements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  company_id UUID REFERENCES companies(id),
  buyer_name TEXT NOT NULL,
  requirement_type TEXT NOT NULL,
  platform TEXT,
  frequency TEXT NOT NULL,
  deadline TEXT,
  status TEXT NOT NULL,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE buyer_requirements ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own data" ON buyer_requirements FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_buyer_requirements_updated_at BEFORE UPDATE ON buyer_requirements FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================================
-- 26. reflections
-- ============================================================================
CREATE TABLE IF NOT EXISTS reflections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  company_id UUID REFERENCES companies(id),
  reflection_standout TEXT NOT NULL,
  reflection_surprise TEXT NOT NULL,
  reflection_concern TEXT NOT NULL,
  completed_at TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE reflections ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own data" ON reflections FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_reflections_updated_at BEFORE UPDATE ON reflections FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================================
-- 27. onboarding_state
-- ============================================================================
CREATE TABLE IF NOT EXISTS onboarding_state (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  current_step INT NOT NULL DEFAULT 0,
  total_steps INT NOT NULL DEFAULT 5,
  completed_steps JSONB NOT NULL DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE onboarding_state ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own data" ON onboarding_state FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_onboarding_state_updated_at BEFORE UPDATE ON onboarding_state FOR EACH ROW EXECUTE FUNCTION update_updated_at();
