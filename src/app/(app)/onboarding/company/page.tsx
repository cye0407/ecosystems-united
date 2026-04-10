"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { v4 as uuid } from 'uuid';
import { Button, Input, Select, Card } from '@/components/ui';
import { useAppStore } from '@/stores/appStore';
import { companySchema, validateForm } from '@/lib/validation/schemas';
import type { Company, Site } from '@/types';

// Common NACE codes for quick selection
const industryOptions = [
  { value: 'A01', label: 'A01 — Crop and animal production' },
  { value: 'C10', label: 'C10 — Food products manufacturing' },
  { value: 'C11', label: 'C11 — Beverages manufacturing' },
  { value: 'G47', label: 'G47 — Retail trade' },
  { value: 'H49', label: 'H49 — Land transport' },
  { value: 'I56', label: 'I56 — Food and beverage service' },
  { value: 'M70', label: 'M70 — Management consultancy' },
  { value: 'other', label: 'Other (specify)' },
];

export default function CompanyProfilePage() {
  const router = useRouter();
  const { setCompany, addSite, completeOnboardingStep } = useAppStore();

  const [formData, setFormData] = useState({
    legalEntityName: '',
    industryCode: '',
    industryDescription: '',
    headquartersCountry: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = validateForm(companySchema, formData);
    if (result) {
      setErrors(result);
      return;
    }
    setErrors({});

    const now = new Date().toISOString();
    const year = new Date().getFullYear();

    // Sensible defaults — user can refine in settings later.
    const company: Company = {
      id: uuid(),
      legalEntityName: formData.legalEntityName,
      industryCode: formData.industryCode,
      industryDescription: formData.industryDescription || formData.industryCode,
      ownershipType: 'private',
      headquartersCountry: formData.headquartersCountry,
      reportingPeriodStart: `${year}-01-01`,
      reportingPeriodEnd: `${year}-12-31`,
      totalFte: 0,
      fteConfidence: 'low',
      numberOfSites: 1,
      primarySiteCountry: formData.headquartersCountry,
      revenueBand: 'prefer_not_to_say',
      revenueCurrency: 'EUR',
      createdAt: now,
      updatedAt: now,
    };

    // Auto-create a default primary site so data entry works straight away.
    const site: Site = {
      id: uuid(),
      companyId: company.id,
      siteName: formData.legalEntityName,
      siteType: 'mixed',
      country: formData.headquartersCountry,
      ownership: 'owned',
      isPrimary: true,
      createdAt: now,
      updatedAt: now,
    };

    setCompany(company);
    addSite(site);
    completeOnboardingStep(0);
    router.push('/onboarding/first-entry');
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-deep-forest mb-2">Tell us about your business</h1>
        <p className="text-gray-600">
          Just three things to get started. You can fill in the rest from settings whenever you like.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card className="mb-6">
          <div className="space-y-4">
            <Input
              label="Business name *"
              value={formData.legalEntityName}
              onChange={(e) => handleChange('legalEntityName', e.target.value)}
              placeholder="Your Company Ltd."
              error={errors.legalEntityName}
            />

            <Select
              label="Industry *"
              value={formData.industryCode}
              onChange={(e) => handleChange('industryCode', e.target.value)}
              options={industryOptions}
              placeholder="Select industry..."
              error={errors.industryCode}
              hint="This tailors which data sections you'll see."
            />

            {formData.industryCode === 'other' && (
              <Input
                label="Industry description *"
                value={formData.industryDescription}
                onChange={(e) => handleChange('industryDescription', e.target.value)}
                placeholder="Describe your industry"
                error={errors.industryDescription}
              />
            )}

            <Input
              label="Country *"
              value={formData.headquartersCountry}
              onChange={(e) => handleChange('headquartersCountry', e.target.value)}
              placeholder="e.g., Ireland, Germany, France"
              error={errors.headquartersCountry}
            />
          </div>
        </Card>

        <div className="flex gap-3">
          <Button
            type="button"
            variant="ghost"
            onClick={() => router.push('/onboarding')}
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
