import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { OnboardingLayout } from '@/components/layout';
import { AuthProvider } from '@/contexts/AuthContext';
import { ProtectedRoute } from '@/components/auth';
import { Login, Signup, ForgotPassword } from '@/pages/auth';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import {
  Welcome,
  CompanyProfile,
  SiteSetup,
  SwotAnalysis,
  GoalsSetup,
  Complete,
} from '@/pages/onboarding';
import { Dashboard } from '@/pages/Dashboard';
import { DataOverview } from '@/pages/data/DataOverview';
import { MaterialsPage } from '@/pages/data/MaterialsPage';
import { PackagingPage } from '@/pages/data/PackagingPage';
import { EnergyLanding } from '@/pages/data/EnergyLanding';
import { EnergyDataEntry } from '@/pages/data/EnergyPage';
import { InfrastructurePage } from '@/pages/data/InfrastructurePage';
import { TransportPage } from '@/pages/data/TransportPage';
import { WorkforcePage } from '@/pages/data/WorkforcePage';
import { OutputsPage } from '@/pages/data/OutputsPage';
import { ContextPage } from '@/pages/data/ContextPage';
import { ResponseGenerator } from '@/pages/ResponseGenerator';
import { Exports } from '@/pages/Exports';
import { Settings } from '@/pages/Settings';
import { useAppStore } from '@/stores/appStore';
import { useSupabaseSync } from '@/hooks/useSupabaseSync';
import { CookieConsent } from '@/components/CookieConsent';

function AppRoutes() {
  const { onboardingComplete } = useAppStore();
  useSupabaseSync();

  return (
    <Routes>
      {/* Public auth routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        {/* Onboarding Routes */}
        <Route element={<ErrorBoundary><OnboardingLayout /></ErrorBoundary>}>
          <Route path="/onboarding" element={<Welcome />} />
          <Route path="/onboarding/company" element={<CompanyProfile />} />
          <Route path="/onboarding/site" element={<SiteSetup />} />
          <Route path="/onboarding/swot" element={<SwotAnalysis />} />
          <Route path="/onboarding/goals" element={<GoalsSetup />} />
          <Route path="/onboarding/complete" element={<Complete />} />
        </Route>

        {/* Main App Routes */}
        <Route element={<ErrorBoundary><Layout /></ErrorBoundary>}>
          <Route
            path="/"
            element={
              onboardingComplete ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Navigate to="/onboarding" replace />
              )
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Data Routes */}
          <Route path="/data" element={<DataOverview />} />
          <Route path="/data/materials" element={<MaterialsPage />} />
          <Route path="/data/packaging" element={<PackagingPage />} />
          <Route path="/data/energy" element={<EnergyLanding />} />
          <Route path="/data/energy/entry" element={<EnergyDataEntry />} />
          <Route path="/data/infrastructure" element={<InfrastructurePage />} />
          <Route path="/data/transport" element={<TransportPage />} />
          <Route path="/data/workforce" element={<WorkforcePage />} />
          <Route path="/data/outputs" element={<OutputsPage />} />
          <Route path="/data/context" element={<ContextPage />} />

          {/* Response Generator */}
          <Route path="/respond" element={<ResponseGenerator />} />

          {/* Exports */}
          <Route path="/exports" element={<Exports />} />

          {/* Settings */}
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Route>

      {/* Catch-all redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
        <CookieConsent />
      </AuthProvider>
    </BrowserRouter>
  );
}
