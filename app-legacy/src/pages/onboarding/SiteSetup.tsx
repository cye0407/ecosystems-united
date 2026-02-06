import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { v4 as uuid } from 'uuid';
import { Button, Input, Select, Card } from '@/components/ui';
import { useAppStore } from '@/stores/appStore';
import { siteSchema, validateForm } from '@/lib/validation/schemas';
import type { Site, SiteType, SiteOwnership } from '@/types';

const siteTypeOptions = [
  { value: 'hq', label: 'Headquarters' },
  { value: 'production', label: 'Production Facility' },
  { value: 'warehouse', label: 'Warehouse' },
  { value: 'office', label: 'Office' },
  { value: 'retail', label: 'Retail' },
  { value: 'mixed', label: 'Mixed Use' },
  { value: 'other', label: 'Other' },
];

const ownershipOptions = [
  { value: 'owned', label: 'Owned' },
  { value: 'leased', label: 'Leased' },
  { value: 'shared', label: 'Shared' },
];

export function SiteSetup() {
  const navigate = useNavigate();
  const { company, addSite, setOnboardingStep, completeOnboardingStep } = useAppStore();

  const [formData, setFormData] = useState({
    siteName: company?.tradingName ? `${company.tradingName} - Main Site` : 'Main Site',
    siteType: 'hq' as SiteType,
    country: company?.headquartersCountry || '',
    city: company?.headquartersCity || '',
    floorAreaM2: '',
    ownership: 'leased' as SiteOwnership,
    operationalSince: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validate = () => {
    const result = validateForm(siteSchema, formData);
    if (result) {
      setErrors(result);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const site: Site = {
      id: uuid(),
      companyId: company?.id || '',
      siteName: formData.siteName,
      siteType: formData.siteType,
      country: formData.country,
      city: formData.city || undefined,
      floorAreaM2: formData.floorAreaM2 ? parseFloat(formData.floorAreaM2) : undefined,
      ownership: formData.ownership,
      operationalSince: formData.operationalSince || undefined,
      isPrimary: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    addSite(site);
    completeOnboardingStep(1);
    setOnboardingStep(2);
    navigate('/onboarding/swot');
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-deep-forest mb-2">Add Your First Site</h1>
        <p className="text-gray-600">
          Where does your organization operate? You can add more sites later.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Site Information</h2>

          <div className="space-y-4">
            <Input
              label="Site Name *"
              value={formData.siteName}
              onChange={(e) => handleChange('siteName', e.target.value)}
              placeholder="e.g., Main Office, Factory 1, Warehouse A"
              error={errors.siteName}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select
                label="Site Type *"
                value={formData.siteType}
                onChange={(e) => handleChange('siteType', e.target.value)}
                options={siteTypeOptions}
              />

              <Select
                label="Ownership *"
                value={formData.ownership}
                onChange={(e) => handleChange('ownership', e.target.value)}
                options={ownershipOptions}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Country *"
                value={formData.country}
                onChange={(e) => handleChange('country', e.target.value)}
                placeholder="e.g., Germany, France, UK"
                error={errors.country}
              />

              <Input
                label="City"
                value={formData.city}
                onChange={(e) => handleChange('city', e.target.value)}
                placeholder="City or town"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Floor Area (m²)"
                type="number"
                min="0"
                value={formData.floorAreaM2}
                onChange={(e) => handleChange('floorAreaM2', e.target.value)}
                placeholder="Square meters"
                hint="Approximate is fine"
              />

              <Input
                label="Operational Since"
                type="date"
                value={formData.operationalSince}
                onChange={(e) => handleChange('operationalSince', e.target.value)}
                hint="When did this site become operational?"
              />
            </div>
          </div>
        </Card>

        <div className="bg-cream border border-forest-300 rounded-xl p-4 mb-6">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> All your operational data (energy, materials, workforce, etc.)
            will be tracked per site. You can add more sites later in Settings.
          </p>
        </div>

        <div className="flex gap-3">
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              setOnboardingStep(0);
              navigate('/onboarding/company');
            }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button type="submit" className="flex-1">
            Continue
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </form>
    </div>
  );
}
