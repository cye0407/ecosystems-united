import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check } from '@phosphor-icons/react';
import { Card, CardTitle, Button, Input, TextArea } from '@/components/ui';
import { StyledSelect } from '@/components/shared/StyledSelect';
import { UnknownToggle } from '@/components/shared/UnknownToggle';
import { useSession } from '@/context/SessionContext';
import { cn } from '@/lib/utils';
import {
  INDUSTRIES, REPORTING_PERIODS, REVENUE_BANDS, DATA_CATEGORIES,
  ROUTES, type DataCategory,
} from '@/constants/app';

export function CompanyDataPage() {
  const navigate = useNavigate();
  const {
    companyData, updateCompanyField, parseNumeric,
    selectedCategories, toggleCategory,
    companyDataPage, setCompanyDataPage,
    categoryPages, totalPages,
    returnToResults, returnFromImproveData,
    saveProfile, loadSavedProfile, showProfileSaved,
    unknownFields, setUnknownFields,
    showOwnEmissions, setShowOwnEmissions,
    setStep,
  } = useSession();

  const renderBasicsPage = () => (
    <>
      <Card className="mb-6">
        <CardTitle className="mb-4">Basic Information</CardTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Company Name *" value={companyData.companyName} onChange={e => updateCompanyField('companyName', e.target.value)} placeholder="Acme Corp" />
          <StyledSelect label="Industry *" value={companyData.industry} onChange={v => updateCompanyField('industry', v)} options={INDUSTRIES} placeholder="Select industry..." required />
          <Input label="Headquarters Country *" value={companyData.country} onChange={e => updateCompanyField('country', e.target.value)} placeholder="e.g., Germany" />
          <StyledSelect label="Reporting Period *" value={companyData.reportingPeriod} onChange={v => updateCompanyField('reportingPeriod', v)} options={REPORTING_PERIODS} placeholder="Select period..." required />
          <Input label="Number of Employees (FTE) *" type="number" min={0} value={companyData.employeeCount || ''} onChange={e => updateCompanyField('employeeCount', parseNumeric(e.target.value, { integer: true }))} />
          <Input label="Number of Sites" type="number" min={1} value={companyData.numberOfSites || ''} onChange={e => updateCompanyField('numberOfSites', parseNumeric(e.target.value, { integer: true }) || 1)} />
          <StyledSelect label="Revenue Band" value={companyData.revenueBand} onChange={v => updateCompanyField('revenueBand', v)} options={REVENUE_BANDS} placeholder="Select range..." />
        </div>
      </Card>

      <Card className="mb-6">
        <CardTitle className="mb-4">Which data categories do you want to enter?</CardTitle>
        <p className="text-sm text-gray-500 mb-4">Select the categories relevant to your company. You can always add more later.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {DATA_CATEGORIES.map(cat => (
            <label key={cat.key} className={cn(
              "flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors",
              selectedCategories.has(cat.key) ? "border-primary bg-primary-100" : "border-gray-200 hover:border-gray-300"
            )}>
              <input
                type="checkbox"
                checked={selectedCategories.has(cat.key)}
                onChange={() => toggleCategory(cat.key)}
                className="rounded border-gray-300 mt-0.5"
              />
              <div>
                <p className="font-medium text-gray-900 text-sm">{cat.label}</p>
                <p className="text-xs text-gray-500">{cat.description}</p>
              </div>
            </label>
          ))}
        </div>
      </Card>
    </>
  );

  const renderCategoryPage = (cat: DataCategory) => {
    switch (cat) {
      case 'energy':
        return (
          <Card className="mb-6">
            <CardTitle className="mb-4">Energy & Emissions</CardTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input label="Electricity Consumption (kWh)" type="number" min={0} value={unknownFields.has('electricityKwh') ? '' : (companyData.electricityKwh || '')} onChange={e => updateCompanyField('electricityKwh', parseNumeric(e.target.value))} disabled={unknownFields.has('electricityKwh')} hint="Check your electricity bill or energy supplier portal" />
                <UnknownToggle field="electricityKwh" unknownFields={unknownFields} setUnknownFields={setUnknownFields} />
              </div>
              <div>
                <Input label="Renewable Electricity (%)" type="number" min={0} max={100} value={unknownFields.has('renewablePercent') ? '' : (companyData.renewablePercent ?? '')} onChange={e => updateCompanyField('renewablePercent', parseNumeric(e.target.value, { max: 100 }))} disabled={unknownFields.has('renewablePercent')} hint="Your supplier may show this on your bill" />
                <UnknownToggle field="renewablePercent" unknownFields={unknownFields} setUnknownFields={setUnknownFields} />
              </div>
              <div>
                <Input label="Natural Gas (m&#xB3;)" type="number" min={0} value={unknownFields.has('naturalGasM3') ? '' : (companyData.naturalGasM3 || '')} onChange={e => updateCompanyField('naturalGasM3', parseNumeric(e.target.value))} disabled={unknownFields.has('naturalGasM3')} hint="Check your gas utility bill" />
                <UnknownToggle field="naturalGasM3" unknownFields={unknownFields} setUnknownFields={setUnknownFields} />
              </div>
              <div>
                <Input label="Diesel / Fuel (Litres)" type="number" min={0} value={unknownFields.has('dieselLiters') ? '' : (companyData.dieselLiters || '')} onChange={e => updateCompanyField('dieselLiters', parseNumeric(e.target.value))} disabled={unknownFields.has('dieselLiters')} hint="Check fuel card statements or delivery notes" />
                <UnknownToggle field="dieselLiters" unknownFields={unknownFields} setUnknownFields={setUnknownFields} />
              </div>
              <div>
                <Input label="Water Usage (m&#xB3;)" type="number" min={0} value={unknownFields.has('waterM3') ? '' : (companyData.waterM3 || '')} onChange={e => updateCompanyField('waterM3', parseNumeric(e.target.value))} disabled={unknownFields.has('waterM3')} hint="Check your water utility bill" />
                <UnknownToggle field="waterM3" unknownFields={unknownFields} setUnknownFields={setUnknownFields} />
              </div>
            </div>
            <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-start gap-2 text-sm text-green-800">
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" weight="bold" />
                <div>
                  <p className="font-medium">Scope 1 & 2 emissions are auto-calculated</p>
                  <p className="text-green-600 text-xs mt-1">We calculate your direct (fuel) and indirect (electricity) emissions using your country&apos;s grid emission factors (IEA 2023).</p>
                </div>
              </div>
              <label className="flex items-center gap-2 text-sm text-green-700 cursor-pointer mt-3 ml-6">
                <input type="checkbox" checked={showOwnEmissions}
                  onChange={e => { setShowOwnEmissions(e.target.checked); if (!e.target.checked) { updateCompanyField('scope1Tco2e', undefined as any); updateCompanyField('scope2Tco2e', undefined as any); } }}
                  className="rounded border-green-400" />
                I already know my emission values and want to enter them directly
              </label>
            </div>
            {showOwnEmissions && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <Input label="Direct Emissions from Fuel &#x2014; Scope 1 (tonnes CO2)" type="number" min={0} value={companyData.scope1Tco2e ?? ''} onChange={e => updateCompanyField('scope1Tco2e', parseNumeric(e.target.value))} hint="From your GHG inventory or carbon report" />
                <Input label="Indirect Emissions from Electricity &#x2014; Scope 2 (tonnes CO2)" type="number" min={0} value={companyData.scope2Tco2e ?? ''} onChange={e => updateCompanyField('scope2Tco2e', parseNumeric(e.target.value))} hint="From your GHG inventory or carbon report" />
              </div>
            )}
          </Card>
        );
      case 'waste':
        return (
          <Card className="mb-6">
            <CardTitle className="mb-4">Waste & Resources</CardTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input label="Total Waste (kg)" type="number" min={0} value={unknownFields.has('totalWasteKg') ? '' : (companyData.totalWasteKg || '')} onChange={e => updateCompanyField('totalWasteKg', parseNumeric(e.target.value))} disabled={unknownFields.has('totalWasteKg')} hint="Ask your waste collection contractor for an annual summary" />
                <UnknownToggle field="totalWasteKg" unknownFields={unknownFields} setUnknownFields={setUnknownFields} />
              </div>
              <div>
                <Input label="Recycling Rate (%)" type="number" min={0} max={100} value={unknownFields.has('recyclingPercent') ? '' : (companyData.recyclingPercent ?? '')} onChange={e => updateCompanyField('recyclingPercent', parseNumeric(e.target.value, { max: 100 }))} disabled={unknownFields.has('recyclingPercent')} hint="Your waste contractor can provide this" />
                <UnknownToggle field="recyclingPercent" unknownFields={unknownFields} setUnknownFields={setUnknownFields} />
              </div>
              <div>
                <Input label="Hazardous Waste (kg)" type="number" min={0} value={unknownFields.has('hazardousWasteKg') ? '' : (companyData.hazardousWasteKg || '')} onChange={e => updateCompanyField('hazardousWasteKg', parseNumeric(e.target.value))} disabled={unknownFields.has('hazardousWasteKg')} hint="Check your hazardous waste consignment notes" />
                <UnknownToggle field="hazardousWasteKg" unknownFields={unknownFields} setUnknownFields={setUnknownFields} />
              </div>
            </div>
          </Card>
        );
      case 'workforce':
        return (
          <Card className="mb-6">
            <CardTitle className="mb-4">Workforce & Social</CardTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input label="Female Employees (%)" type="number" min={0} max={100} value={unknownFields.has('femalePercent') ? '' : (companyData.femalePercent ?? '')} onChange={e => updateCompanyField('femalePercent', parseNumeric(e.target.value, { max: 100 }))} disabled={unknownFields.has('femalePercent')} hint="Check your HR system headcount report" />
                <UnknownToggle field="femalePercent" unknownFields={unknownFields} setUnknownFields={setUnknownFields} />
              </div>
              <div>
                <Input label="Training Hours per Employee" type="number" min={0} value={unknownFields.has('trainingHoursPerEmployee') ? '' : (companyData.trainingHoursPerEmployee ?? '')} onChange={e => updateCompanyField('trainingHoursPerEmployee', parseNumeric(e.target.value))} disabled={unknownFields.has('trainingHoursPerEmployee')} hint="Check your LMS or training records" />
                <UnknownToggle field="trainingHoursPerEmployee" unknownFields={unknownFields} setUnknownFields={setUnknownFields} />
              </div>
            </div>
          </Card>
        );
      case 'health_safety':
        return (
          <Card className="mb-6">
            <CardTitle className="mb-4">Health & Safety</CardTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input label="Incident Rate (TRIR)" type="number" min={0} value={unknownFields.has('trirRate') ? '' : (companyData.trirRate ?? '')} onChange={e => updateCompanyField('trirRate', parseNumeric(e.target.value))} disabled={unknownFields.has('trirRate')} hint="Total Recordable Incident Rate &#x2014; recordable incidents per 200,000 hours worked. Check your safety records." />
                <UnknownToggle field="trirRate" unknownFields={unknownFields} setUnknownFields={setUnknownFields} />
              </div>
              <div>
                <Input label="Lost Time Incidents" type="number" min={0} value={unknownFields.has('lostTimeIncidents') ? '' : (companyData.lostTimeIncidents ?? '')} onChange={e => updateCompanyField('lostTimeIncidents', parseNumeric(e.target.value, { integer: true }))} disabled={unknownFields.has('lostTimeIncidents')} hint="Number of incidents that caused missed work days" />
                <UnknownToggle field="lostTimeIncidents" unknownFields={unknownFields} setUnknownFields={setUnknownFields} />
              </div>
              <div>
                <Input label="Fatalities" type="number" min={0} value={unknownFields.has('fatalities') ? '' : (companyData.fatalities ?? '')} onChange={e => updateCompanyField('fatalities', parseNumeric(e.target.value, { integer: true }))} disabled={unknownFields.has('fatalities')} hint="Enter 0 if none occurred during the reporting period" />
                <UnknownToggle field="fatalities" unknownFields={unknownFields} setUnknownFields={setUnknownFields} />
              </div>
            </div>
          </Card>
        );
      case 'scope3':
        return (
          <Card className="mb-6">
            <CardTitle className="mb-4">Supply Chain Emissions (Scope 3)</CardTitle>
            <p className="text-sm text-gray-500 mb-4">These are indirect emissions from your value chain. Enter what you have &#x2014; any data helps. Most SMEs won&apos;t have all of this.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input label="Supply Chain Emissions Total (tonnes CO2, if known)" type="number" min={0} value={unknownFields.has('scope3Tco2e') ? '' : (companyData.scope3Tco2e ?? '')} onChange={e => updateCompanyField('scope3Tco2e', parseNumeric(e.target.value))} disabled={unknownFields.has('scope3Tco2e')} hint="If you have a calculated total from a carbon report" />
                <UnknownToggle field="scope3Tco2e" unknownFields={unknownFields} setUnknownFields={setUnknownFields} />
              </div>
              <div>
                <Input label="Business Travel (km)" type="number" min={0} value={unknownFields.has('businessTravelKm') ? '' : (companyData.businessTravelKm ?? '')} onChange={e => updateCompanyField('businessTravelKm', parseNumeric(e.target.value))} disabled={unknownFields.has('businessTravelKm')} hint="Total distance for flights, trains, rental cars" />
                <UnknownToggle field="businessTravelKm" unknownFields={unknownFields} setUnknownFields={setUnknownFields} />
              </div>
              <div>
                <Input label="Employee Commuting (km)" type="number" min={0} value={unknownFields.has('employeeCommuteKm') ? '' : (companyData.employeeCommuteKm ?? '')} onChange={e => updateCompanyField('employeeCommuteKm', parseNumeric(e.target.value))} disabled={unknownFields.has('employeeCommuteKm')} hint="Estimate: avg distance x employees x working days" />
                <UnknownToggle field="employeeCommuteKm" unknownFields={unknownFields} setUnknownFields={setUnknownFields} />
              </div>
              <div>
                <Input label="Freight / Shipping (tonne-km)" type="number" min={0} value={unknownFields.has('freightTonKm') ? '' : (companyData.freightTonKm ?? '')} onChange={e => updateCompanyField('freightTonKm', parseNumeric(e.target.value))} disabled={unknownFields.has('freightTonKm')} hint="Ask your logistics provider for this figure" />
                <UnknownToggle field="freightTonKm" unknownFields={unknownFields} setUnknownFields={setUnknownFields} />
              </div>
            </div>
          </Card>
        );
      case 'governance':
        return (
          <Card className="mb-6">
            <CardTitle className="mb-4">Governance & Goals</CardTitle>
            <div className="space-y-4">
              <Input label="Certifications" value={companyData.certifications || ''} onChange={e => updateCompanyField('certifications', e.target.value)} placeholder="e.g., ISO 14001, ISO 45001, FSC" hint="List any management system or sustainability certifications" />
              <Input label="Sustainability Goal" value={companyData.sustainabilityGoal || ''} onChange={e => updateCompanyField('sustainabilityGoal', e.target.value)} placeholder="e.g., Net zero by 2030" hint="Even an informal target counts" />
              <TextArea label="Additional Context" value={companyData.additionalContext || ''} onChange={e => updateCompanyField('additionalContext', e.target.value)} placeholder="Any additional information about your sustainability initiatives, policies, or programs..." rows={3} />
            </div>
          </Card>
        );
    }
  };

  return (
    <div className="animate-fade-in max-w-3xl mx-auto">
      <div className="mb-6">
        {returnToResults && (
          <Button variant="ghost" size="sm" onClick={() => navigate(ROUTES.results)} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-1" weight="bold" /> Back to Results (keep current answers)
          </Button>
        )}
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Company Information</h2>
        <p className="text-gray-500">
          {companyDataPage === 0
            ? 'Enter your basic details and choose which data categories to fill in.'
            : `Step ${companyDataPage + 1} of ${totalPages} \u2014 ${DATA_CATEGORIES.find(c => c.key === categoryPages[companyDataPage - 1])?.label}`
          }
        </p>
        {/* Progress dots */}
        <div className="flex items-center gap-2 mt-3">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCompanyDataPage(i)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-colors",
                i === companyDataPage ? "bg-primary" : i < companyDataPage ? "bg-primary-300" : "bg-gray-200"
              )}
            />
          ))}
          <span className="text-xs text-gray-400 ml-2">{companyDataPage + 1} / {totalPages}</span>
        </div>
      </div>

      {/* Page content */}
      {companyDataPage === 0 && renderBasicsPage()}
      {companyDataPage > 0 && categoryPages[companyDataPage - 1] && renderCategoryPage(categoryPages[companyDataPage - 1])}

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-2">
          {companyDataPage > 0 ? (
            <Button variant="outline" onClick={() => setCompanyDataPage(p => p - 1)}>
              <ArrowLeft className="w-4 h-4 mr-1" weight="bold" /> Back
            </Button>
          ) : (
            <Button variant="outline" onClick={() => setStep('company-profile')}>
              <ArrowLeft className="w-4 h-4 mr-1" weight="bold" /> Back
            </Button>
          )}
          <Button variant="outline" size="sm" onClick={saveProfile}>
            Save Profile
          </Button>
          <Button variant="ghost" size="sm" onClick={loadSavedProfile}>
            Load Saved
          </Button>
          {showProfileSaved && <span className="text-xs text-green-600 font-medium">Saved</span>}
        </div>
        {companyDataPage < totalPages - 1 ? (
          <Button size="lg" onClick={() => setCompanyDataPage(p => p + 1)}
            disabled={companyDataPage === 0 && (!companyData.companyName || !companyData.industry || !companyData.country)}>
            Next <ArrowRight className="w-5 h-5 ml-1" weight="bold" />
          </Button>
        ) : returnToResults ? (
          <Button size="lg" onClick={returnFromImproveData}>
            Re-generate Answers <ArrowRight className="w-5 h-5 ml-1" weight="bold" />
          </Button>
        ) : (
          <Button size="lg" onClick={() => setStep('upload')}
            disabled={!companyData.companyName || !companyData.industry || !companyData.country}>
            Upload Questionnaire <ArrowRight className="w-5 h-5 ml-1" weight="bold" />
          </Button>
        )}
      </div>
    </div>
  );
}
