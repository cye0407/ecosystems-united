import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Lightbulb } from 'lucide-react';
import { v4 as uuid } from 'uuid';
import { Button, TextArea, Card } from '@/components/ui';
import { useAppStore } from '@/stores/appStore';
import { swotSchema, validateForm } from '@/lib/validation/schemas';
import type { SWOT } from '@/types';

const swotGuidance = {
  strengths: [
    'What do you do better than competitors?',
    'What resources or capabilities set you apart?',
    'What do customers say you\'re good at?',
  ],
  weaknesses: [
    'Where do you lose money or time?',
    'What do you avoid because it\'s hard?',
    'What would your harshest critic say?',
  ],
  opportunities: [
    'What trends could benefit you?',
    'What\'s underserved in your market?',
    'What could you do that you\'re not doing?',
  ],
  threats: [
    'What keeps you up at night?',
    'What\'s changing that could hurt you?',
    'What are competitors doing that worries you?',
  ],
};

interface SwotFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  guidance: string[];
  color: string;
  error?: string;
}

function SwotField({ label, value, onChange, guidance, color, error }: SwotFieldProps) {
  const [showGuidance, setShowGuidance] = useState(false);

  return (
    <Card className="mb-4" padding="md">
      <div className="flex items-center justify-between mb-3">
        <h3 className={`font-semibold ${color}`}>{label}</h3>
        <button
          type="button"
          onClick={() => setShowGuidance(!showGuidance)}
          className="text-gray-400 hover:text-forest-700 transition-colors"
        >
          <Lightbulb className="w-5 h-5" />
        </button>
      </div>

      {showGuidance && (
        <div className="bg-cream rounded-lg p-3 mb-3 text-sm text-gray-600 animate-fade-in">
          <p className="font-medium mb-2">Think about:</p>
          <ul className="list-disc list-inside space-y-1">
            {guidance.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <TextArea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Be brief - you can expand later..."
        rows={3}
        error={error}
      />
    </Card>
  );
}

export function SwotAnalysis() {
  const navigate = useNavigate();
  const { company, setSwot, setOnboardingStep, completeOnboardingStep } = useAppStore();

  const [formData, setFormData] = useState({
    strengths: '',
    weaknesses: '',
    opportunities: '',
    threats: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validate = () => {
    const result = validateForm(swotSchema, formData);
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

    const swot: SWOT = {
      id: uuid(),
      companyId: company?.id || '',
      strengths: formData.strengths,
      weaknesses: formData.weaknesses,
      opportunities: formData.opportunities,
      threats: formData.threats,
      updatedAt: new Date().toISOString(),
    };

    setSwot(swot);
    completeOnboardingStep(2);
    setOnboardingStep(3);
    navigate('/onboarding/goals');
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-deep-forest mb-2">Strategic Reflection</h1>
        <p className="text-gray-600">
          A quick SWOT analysis helps us understand your context. Be brief — gut-level
          thoughts are fine here.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <SwotField
          label="Strengths"
          value={formData.strengths}
          onChange={(v) => handleChange('strengths', v)}
          guidance={swotGuidance.strengths}
          color="text-forest-700"
          error={errors.strengths}
        />

        <SwotField
          label="Weaknesses"
          value={formData.weaknesses}
          onChange={(v) => handleChange('weaknesses', v)}
          guidance={swotGuidance.weaknesses}
          color="text-warning"
          error={errors.weaknesses}
        />

        <SwotField
          label="Opportunities"
          value={formData.opportunities}
          onChange={(v) => handleChange('opportunities', v)}
          guidance={swotGuidance.opportunities}
          color="text-info"
          error={errors.opportunities}
        />

        <SwotField
          label="Threats"
          value={formData.threats}
          onChange={(v) => handleChange('threats', v)}
          guidance={swotGuidance.threats}
          color="text-error"
          error={errors.threats}
        />

        <div className="flex gap-3 mt-6">
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              setOnboardingStep(1);
              navigate('/onboarding/site');
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
