import { Routes, Route } from 'react-router-dom';
import { AppShell } from '@/components/layout/AppShell';
import { LandingPage } from '@/pages/LandingPage';
import { UploadPage } from '@/pages/UploadPage';
import { ProcessingPage } from '@/pages/ProcessingPage';
import { CompanyProfilePage } from '@/pages/CompanyProfilePage';
import { CompanyDataPage } from '@/pages/CompanyDataPage';
import { ResultsPage } from '@/pages/ResultsPage';

export function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/processing" element={<ProcessingPage />} />
        <Route path="/company-profile" element={<CompanyProfilePage />} />
        <Route path="/company-data" element={<CompanyDataPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Route>
    </Routes>
  );
}
