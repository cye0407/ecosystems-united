import { useState, useCallback, useMemo } from 'react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import type { CompanyProfile as CompanyProfileType, InformalPractice, PracticeTopic } from '../types/context';
import { getPracticeOptionsForIndustry, calculateMaturity } from '../types/context';

interface CompanyProfileProps {
  initialProfile?: Partial<CompanyProfileType>;
  onComplete: (profile: CompanyProfileType) => void;
  onSkip?: () => void;
}

type WizardStep = 'basics' | 'practices' | 'result';

const INDUSTRY_OPTIONS = [
  'Manufacturing',
  'Manufacturing — Metal Fabrication',
  'Manufacturing — Automotive',
  'Manufacturing — Aerospace & Defence',
  'Textiles & Apparel',
  'Chemicals',
  'Electronics & Technology',
  'Food & Agriculture',
  'Construction',
  'Logistics & Transport',
  'Professional Services',
  'Financial Services',
  'Healthcare & Pharma',
  'Retail & Wholesale',
  'Energy & Utilities',
  'Technology & Software',
  'Telecommunications',
  'Real Estate',
  'Hospitality & Tourism',
  'Education',
  'Other',
];

const TOPIC_LABELS: Record<PracticeTopic, string> = {
  'ENVIRONMENT': 'Environmental',
  'LABOR': 'Labor & Safety',
  'ETHICS': 'Ethics & Governance',
  'SUPPLY_CHAIN': 'Supply Chain',
};

const TOPIC_ICONS: Record<PracticeTopic, string> = {
  'ENVIRONMENT': '🌱',
  'LABOR': '👷',
  'ETHICS': '⚖️',
  'SUPPLY_CHAIN': '🔗',
};

export function CompanyProfileWizard({ initialProfile, onComplete, onSkip }: CompanyProfileProps) {
  const [step, setStep] = useState<WizardStep>('basics');

  // Basics
  const [companyName, setCompanyName] = useState(initialProfile?.companyName || '');
  const [industry, setIndustry] = useState(initialProfile?.industry || 'Manufacturing');
  const [country, setCountry] = useState(initialProfile?.country || '');
  const [employeeCount, setEmployeeCount] = useState(initialProfile?.employeeCount || 0);
  const [numberOfSites, setNumberOfSites] = useState(initialProfile?.numberOfSites || 1);
  const [reportingPeriod, setReportingPeriod] = useState(initialProfile?.reportingPeriod || '2024');
  const [revenueBand, setRevenueBand] = useState(initialProfile?.revenueBand || '');

  // Practices
  const [selectedPracticeIds, setSelectedPracticeIds] = useState<Set<string>>(
    new Set(initialProfile?.informalPractices?.map(p => p.id) || [])
  );

  const togglePractice = useCallback((id: string) => {
    setSelectedPracticeIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  // Get industry-specific practice options (re-computed when industry changes)
  const practiceOptions = useMemo(() => getPracticeOptionsForIndustry(industry), [industry]);

  const buildProfile = useCallback((): CompanyProfileType => {
    const practices: InformalPractice[] = practiceOptions
      .filter(o => selectedPracticeIds.has(o.id))
      .map(o => ({
        id: o.id,
        topic: o.topic,
        description: o.description,
        isFormalized: false,
      }));

    const { level, score } = calculateMaturity(employeeCount, industry, practices);

    return {
      companyName,
      industry,
      country,
      employeeCount,
      numberOfSites,
      reportingPeriod,
      revenueBand,
      informalPractices: practices,
      maturityLevel: level,
      maturityScore: score,
      completedAt: new Date().toISOString(),
    };
  }, [companyName, industry, country, employeeCount, numberOfSites, reportingPeriod, revenueBand, selectedPracticeIds, practiceOptions]);

  const basicsValid = companyName.trim() && country.trim() && employeeCount > 0;

  // Render per step
  if (step === 'basics') {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Tell us about your company</h2>
          <p className="text-gray-600 mt-2">This helps us generate professional, industry-specific responses — even before you upload documents.</p>
        </div>

        <Card padding="lg">
          <div className="space-y-5">
            <Input
              label="Company Name"
              value={companyName}
              onChange={e => setCompanyName(e.target.value)}
              placeholder="e.g., ACME Corp GmbH"
            />

            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Industry</label>
              <select
                value={industry}
                onChange={e => setIndustry(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-forest-700/20 focus:border-forest-700"
              >
                {INDUSTRY_OPTIONS.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <Input
              label="Country"
              value={country}
              onChange={e => setCountry(e.target.value)}
              placeholder="e.g., Germany"
            />

            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Number of Employees"
                type="number"
                value={employeeCount || ''}
                onChange={e => setEmployeeCount(parseInt(e.target.value) || 0)}
                placeholder="e.g., 50"
              />
              <Input
                label="Number of Sites"
                type="number"
                value={numberOfSites || ''}
                onChange={e => setNumberOfSites(parseInt(e.target.value) || 1)}
                placeholder="e.g., 1"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Reporting Period"
                value={reportingPeriod}
                onChange={e => setReportingPeriod(e.target.value)}
                placeholder="e.g., 2024"
              />
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Revenue Band</label>
                <select
                  value={revenueBand}
                  onChange={e => setRevenueBand(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-forest-700/20 focus:border-forest-700"
                >
                  <option value="">Select...</option>
                  <option value="< €1M">{'< €1M'}</option>
                  <option value="€1M - €10M">€1M - €10M</option>
                  <option value="€10M - €50M">€10M - €50M</option>
                  <option value="€50M - €250M">€50M - €250M</option>
                  <option value="> €250M">{'> €250M'}</option>
                </select>
              </div>
            </div>
          </div>
        </Card>

        <div className="flex justify-between items-center">
          {onSkip && (
            <Button variant="ghost" onClick={onSkip}>Skip for now</Button>
          )}
          <div className="ml-auto">
            <Button
              disabled={!basicsValid}
              onClick={() => setStep('practices')}
            >
              Next: Your Current Practices
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'practices') {
    const grouped = (['ENVIRONMENT', 'LABOR', 'ETHICS', 'SUPPLY_CHAIN'] as PracticeTopic[]).map(topic => ({
      topic,
      options: practiceOptions.filter(o => o.topic === topic),
    }));

    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">What do you already do?</h2>
          <p className="text-gray-600 mt-2">Check everything that applies — even if you don't have a formal document for it yet. This is the key to generating professional responses.</p>
        </div>

        {grouped.map(({ topic, options }) => (
          <Card key={topic} padding="md">
            <h3 className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span>{TOPIC_ICONS[topic]}</span>
              {TOPIC_LABELS[topic]}
            </h3>
            <div className="space-y-2">
              {options.map(opt => (
                <label
                  key={opt.id}
                  className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all duration-150 ${
                    selectedPracticeIds.has(opt.id)
                      ? 'border-forest-700 bg-forest-700/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedPracticeIds.has(opt.id)}
                    onChange={() => togglePractice(opt.id)}
                    className="mt-0.5 h-4 w-4 rounded border-gray-300 text-forest-700 focus:ring-forest-700"
                  />
                  <div>
                    <span className="text-sm font-medium text-gray-900">{opt.label}</span>
                    <p className="text-xs text-gray-500 mt-0.5">{opt.description}</p>
                  </div>
                </label>
              ))}
            </div>
          </Card>
        ))}

        <div className="flex justify-between">
          <Button variant="outline" onClick={() => setStep('basics')}>Back</Button>
          <Button onClick={() => setStep('result')}>
            See Your Maturity Level
          </Button>
        </div>
      </div>
    );
  }

  // Result step
  const profile = buildProfile();
  const practiceCount = profile.informalPractices.length;
  const topicsCovered = new Set(profile.informalPractices.map(p => p.topic)).size;

  const levelColors: Record<string, string> = {
    'Emerging': 'text-orange-600 bg-orange-50 border-orange-200',
    'Developing': 'text-yellow-700 bg-yellow-50 border-yellow-200',
    'Established': 'text-blue-700 bg-blue-50 border-blue-200',
    'Leading': 'text-green-700 bg-green-50 border-green-200',
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Your Predicted Maturity Level</h2>
      </div>

      <Card padding="lg">
        <div className="text-center space-y-4">
          <div className={`inline-block px-6 py-3 rounded-full border text-lg font-bold ${levelColors[profile.maturityLevel] || ''}`}>
            {profile.maturityLevel}
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
            <div
              className="bg-forest-700 h-3 rounded-full transition-all duration-500"
              style={{ width: `${profile.maturityScore}%` }}
            />
          </div>
          <p className="text-sm text-gray-500">{profile.maturityScore}/100</p>

          <p className="text-gray-700 mt-4">
            Based on your <strong>{employeeCount} employees</strong> and{' '}
            <strong>{industry}</strong> focus, you are at a{' '}
            <strong>{profile.maturityLevel}</strong> level
            {practiceCount > 0 && <> with <strong>{practiceCount} practices</strong> across <strong>{topicsCovered} ESG pillars</strong></>}.
            {' '}Let's draft your responses to reflect this.
          </p>
        </div>
      </Card>

      <Card padding="md" className="bg-forest-700/5 border-forest-700/20">
        <p className="text-sm text-gray-700">
          <strong>What happens next:</strong> We'll use your company profile and informal practices to generate professional, submission-ready responses — even for questions where you don't have a formal document yet.
        </p>
      </Card>

      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setStep('practices')}>Back</Button>
        <Button onClick={() => onComplete(profile)}>
          Continue to Data Entry
        </Button>
      </div>
    </div>
  );
}
