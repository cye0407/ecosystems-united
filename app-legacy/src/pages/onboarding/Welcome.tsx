import { useNavigate } from 'react-router-dom';
import { ArrowRight, Clock, CheckCircle2 } from 'lucide-react';
import { Button, Card } from '@/components/ui';
import { useAppStore } from '@/stores/appStore';

export function Welcome() {
  const navigate = useNavigate();
  const setOnboardingStep = useAppStore((state) => state.setOnboardingStep);

  const handleStart = () => {
    setOnboardingStep(0);
    navigate('/onboarding/company');
  };

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-forest-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <span className="text-white font-bold text-2xl">5S</span>
        </div>
        <h1 className="text-3xl font-bold text-deep-forest mb-3">
          Let's set up your sustainability baseline
        </h1>
        <p className="text-gray-600 text-lg">
          Build the foundation that powers everything else.
        </p>
      </div>

      <Card className="mb-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5 text-forest-700" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Estimated time: 10-15 minutes
            </h3>
            <p className="text-sm text-gray-600">
              You can save your progress and return anytime.
            </p>
          </div>
        </div>

        <h3 className="font-semibold text-gray-900 mb-3">What we'll set up:</h3>
        <ul className="space-y-3">
          {[
            'Company profile and basic information',
            'Your first operational site',
            'Strategic reflection (SWOT analysis)',
            'Your goals and motivations',
            'Regulatory context',
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-forest-300 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </Card>

      <div className="bg-cream border border-forest-300 rounded-xl p-6 mb-8">
        <h3 className="font-semibold text-deep-forest mb-2">
          Why this matters
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          This foundation enables you to respond to customer sustainability questionnaires
          with a single click. Companies with complete baselines respond to buyer requests
          5x faster than those starting from scratch each time.
        </p>
      </div>

      <Button onClick={handleStart} className="w-full" size="lg">
        Get Started
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </div>
  );
}
