import { useNavigate } from 'react-router-dom';
import {
  Check, CaretDown, CaretUp, ArrowRight,
  ShieldCheck, Lightning, CurrencyDollar
} from '@phosphor-icons/react';
import { Card, CardTitle, Button } from '@/components/ui';
import { useSession } from '@/context/SessionContext';
import { FAQ_ITEMS, ROUTES } from '@/constants/app';

export function LandingPage() {
  const navigate = useNavigate();
  const { openFaqIndex, setOpenFaqIndex } = useSession();

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="text-center mb-14 mt-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 tracking-tight leading-tight">
          ESG Questionnaires<br />
          <span className="text-primary">Answered in Minutes</span>
        </h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-3 leading-relaxed">
          Upload your questionnaire. Get professional, tailored draft answers &mdash;
          even without formal policies.
        </p>
        <p className="text-sm text-slate-400 max-w-xl mx-auto mb-5">
          Complete response pack with draft answers, confidence ratings, methodology documentation, and Excel export.
        </p>

        {/* Price anchor */}
        <div className="inline-flex items-center gap-2 bg-primary-100 border border-primary-200 rounded-full px-5 py-2 mb-6">
          <span className="text-sm font-bold text-primary">&euro;99</span>
          <span className="text-xs text-slate-500">per questionnaire &middot; One-time &middot; No subscription</span>
        </div>

        {/* Framework badges */}
        <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
          {['CSRD', 'CDP', 'EcoVadis', 'GRI', 'SASB', 'TCFD'].map(fw => (
            <span key={fw} className="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-500 shadow-sm">
              {fw}
            </span>
          ))}
        </div>

        <Button size="lg" onClick={() => navigate(ROUTES.upload)} className="shadow-md hover:shadow-lg">
          Upload Your Questionnaire <ArrowRight className="w-5 h-5 ml-2" weight="bold" />
        </Button>
      </div>

      {/* What You Get + How It Works */}
      <Card className="mb-8" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* How It Works */}
          <div>
            <CardTitle className="mb-5">How It Works</CardTitle>
            <div className="relative pl-10">
              <div className="absolute left-[15px] top-1 bottom-1 w-0.5 bg-primary-200" />
              {[
                { n: '1', title: 'Upload Your Questionnaire', desc: 'Upload Excel, CSV, PDF, or Word files. Questions are auto-detected and matched.' },
                { n: '2', title: 'Review Draft Answers', desc: 'See tailored answers with confidence ratings. Know exactly where data is missing.' },
                { n: '3', title: 'Add Your Data & Export', desc: 'Fill in your company data to improve answers. Export a professional Excel response pack.' },
              ].map((s, i) => (
                <div key={s.n} className={`relative${i < 2 ? ' mb-8' : ''}`}>
                  <div className="absolute -left-10 w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center text-sm font-bold shadow-sm">{s.n}</div>
                  <h4 className="font-semibold text-gray-900">{s.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What You Get */}
          <div>
            <CardTitle className="mb-5">What You Get</CardTitle>
            <div className="space-y-2.5 text-sm">
              {[
                'Tailored draft answers for every question',
                'AI-enhanced professional language',
                'Confidence ratings (know where you need more data)',
                'Evidence fields for audit trail',
                'Executive Summary with gap overview',
                'Methodology Statement (attach to your submission)',
                'Review Checklist for your team',
                'Country-specific emission calculations',
              ].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" weight="bold" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Trust Signals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <Card className="text-center" padding="lg">
          <div className="w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center mx-auto mb-3">
            <ShieldCheck className="w-5 h-5 text-accent" weight="duotone" />
          </div>
          <h3 className="font-semibold text-slate-800 mb-1 text-sm">Privacy First</h3>
          <p className="text-xs text-slate-500 leading-relaxed">Core processing runs in your browser. AI-enhanced answers use a secure API call &mdash; data is not stored after processing.</p>
        </Card>
        <Card className="text-center" padding="lg">
          <div className="w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center mx-auto mb-3">
            <Lightning className="w-5 h-5 text-accent" weight="duotone" />
          </div>
          <h3 className="font-semibold text-slate-800 mb-1 text-sm">Framework Aware</h3>
          <p className="text-xs text-slate-500 leading-relaxed">Auto-detects CSRD, GRI, CDP, EcoVadis, SASB, and TCFD. Tailors language accordingly.</p>
        </Card>
        <Card className="text-center" padding="lg">
          <div className="w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center mx-auto mb-3">
            <CurrencyDollar className="w-5 h-5 text-accent" weight="duotone" />
          </div>
          <h3 className="font-semibold text-slate-800 mb-1 text-sm">&euro;99 Per Questionnaire</h3>
          <p className="text-xs text-slate-500 leading-relaxed">One-time payment. No subscription, no hidden fees. Preview answers free before paying.</p>
        </Card>
      </div>

      {/* FAQ */}
      <Card className="mb-8" padding="lg">
        <CardTitle className="mb-4">Frequently Asked Questions</CardTitle>
        <div className="divide-y divide-gray-200">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between py-3 text-left"
                onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
              >
                <span className="font-medium text-gray-900 text-sm">{item.q}</span>
                {openFaqIndex === i
                  ? <CaretUp className="w-4 h-4 text-gray-400 flex-shrink-0" weight="bold" />
                  : <CaretDown className="w-4 h-4 text-gray-400 flex-shrink-0" weight="bold" />
                }
              </button>
              {openFaqIndex === i && (
                <p className="text-sm text-gray-600 pb-3">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Bottom CTA */}
      <div className="text-center mt-12 mb-8">
        <Button size="lg" onClick={() => navigate(ROUTES.upload)}>
          Upload Your Questionnaire <ArrowRight className="w-5 h-5 ml-2" weight="bold" />
        </Button>
        <p className="text-xs text-gray-400 mt-3">Free to upload and preview. Pay only when you&apos;re ready to export.</p>
      </div>
    </div>
  );
}
