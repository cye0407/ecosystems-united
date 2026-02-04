import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from '@phosphor-icons/react';
import { Card, CardTitle, Button, Input, FileUpload } from '@/components/ui';
import { StyledSelect } from '@/components/shared/StyledSelect';
import { useSession } from '@/context/SessionContext';
import { INDUSTRIES, ROUTES } from '@/constants/app';

export function UploadPage() {
  const navigate = useNavigate();
  const {
    companyData, updateCompanyField,
    handleFileUpload, handleManualMapping,
    showColumnMapping, parseResult, manualMapping, setManualMapping,
    setError,
  } = useSession();

  return (
    <div className="animate-fade-in max-w-2xl mx-auto">
      <div className="mb-6">
        <Button variant="ghost" size="sm" onClick={() => navigate(ROUTES.landing)} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-1" weight="bold" /> Back
        </Button>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Upload Your Questionnaire</h2>
        <p className="text-gray-500">Upload your ESG questionnaire and we&apos;ll generate draft answers immediately. You can add your company data afterwards to improve the answers.</p>
      </div>

      {/* Optional quick company info */}
      <Card className="mb-6">
        <CardTitle className="text-base mb-3">Quick Info (optional, improves answers)</CardTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Input label="Company Name" value={companyData.companyName} onChange={e => updateCompanyField('companyName', e.target.value)} placeholder="Acme Corp" />
          <StyledSelect label="Industry" value={companyData.industry} onChange={v => updateCompanyField('industry', v)} options={INDUSTRIES} placeholder="Select..." />
          <Input label="Country" value={companyData.country} onChange={e => updateCompanyField('country', e.target.value)} placeholder="e.g., Germany" />
        </div>
      </Card>

      <Card className="mb-6">
        <FileUpload
          label="Upload File"
          accept=".xlsx,.xls,.csv,.pdf,.docx"
          onFileSelect={handleFileUpload}
          hint="Supports Excel (.xlsx, .xls), CSV, PDF, and Word (.docx) files"
        />
      </Card>

      {/* Manual column mapping fallback */}
      {showColumnMapping && parseResult?.metadata.availableColumns && (
        <Card className="mb-6 border-amber-200 bg-amber-50">
          <CardTitle className="mb-3 text-amber-800">Help Us Find the Questions</CardTitle>
          <p className="text-sm text-amber-700 mb-4">We found these columns in your file. Which one contains the questions?</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Question column *</label>
              <select className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm" value={manualMapping.questionText}
                onChange={e => setManualMapping(prev => ({ ...prev, questionText: e.target.value }))}>
                <option value="">Select column...</option>
                {parseResult.metadata.availableColumns.map(col => <option key={col} value={col}>{col}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category column (optional)</label>
              <select className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm" value={manualMapping.category || ''}
                onChange={e => setManualMapping(prev => ({ ...prev, category: e.target.value || undefined }))}>
                <option value="">None</option>
                {parseResult.metadata.availableColumns.map(col => <option key={col} value={col}>{col}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Reference ID column (optional)</label>
              <select className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm" value={manualMapping.referenceId || ''}
                onChange={e => setManualMapping(prev => ({ ...prev, referenceId: e.target.value || undefined }))}>
                <option value="">None</option>
                {parseResult.metadata.availableColumns.map(col => <option key={col} value={col}>{col}</option>)}
              </select>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <Button onClick={handleManualMapping} disabled={!manualMapping.questionText}>Apply Mapping</Button>
            <Button variant="ghost" onClick={() => { setError(null); }}>Upload a different file</Button>
          </div>
        </Card>
      )}
    </div>
  );
}
