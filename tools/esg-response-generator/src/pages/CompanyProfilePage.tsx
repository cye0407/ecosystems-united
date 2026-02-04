import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from '@phosphor-icons/react';
import { Button } from '@/components/ui';
import { CompanyProfileWizard } from '@/components/CompanyProfile';
import { useSession } from '@/context/SessionContext';
import { STORAGE_KEYS, ROUTES } from '@/constants/app';

export function CompanyProfilePage() {
  const navigate = useNavigate();
  const {
    contextProfile, setContextProfile,
    setCompanyData,
    returnToResults, setStep,
  } = useSession();

  return (
    <div className="animate-fade-in">
      {returnToResults && (
        <Button variant="ghost" size="sm" onClick={() => navigate(ROUTES.results)} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-1" weight="bold" /> Back to Results
        </Button>
      )}
      <CompanyProfileWizard
        initialProfile={contextProfile || undefined}
        onComplete={(profile) => {
          setContextProfile(profile);
          try { localStorage.setItem(STORAGE_KEYS.contextProfile, JSON.stringify(profile)); } catch { /* ignore */ }
          setCompanyData(prev => ({
            ...prev,
            companyName: profile.companyName || prev.companyName,
            industry: profile.industry || prev.industry,
            country: profile.country || prev.country,
            employeeCount: profile.employeeCount || prev.employeeCount,
            numberOfSites: profile.numberOfSites || prev.numberOfSites,
            reportingPeriod: profile.reportingPeriod || prev.reportingPeriod,
            revenueBand: profile.revenueBand || prev.revenueBand,
          }));
          setStep('company-data');
        }}
        onSkip={() => setStep('company-data')}
      />
    </div>
  );
}
