import { describe, it, expect } from 'vitest';
import { createResponseEngine } from '../create';
import type { DomainPack } from '../types/domain-pack';
import type { MatchResult, DataContext, RetrievedDataPoint, GenerationConfig } from '../types';
import { addIfPresent } from '../engine/dataRetrieval';
import { val, has, fmt } from '../engine/answerGenerator';

// ============================================
// Custom "IT Security" Domain Pack
// ============================================
// Proves the engine is truly domain-agnostic by
// building a minimal security questionnaire pack.

interface SecurityData {
  companyName: string;
  hasMFA: boolean;
  hasEncryption: boolean;
  incidentCount: number;
  hasSOC2: boolean;
  patchingFrequency: string;
  firewallVendor?: string;
  employeeCount?: number;
  securityTrainingCompletion?: number;
}

const securityPack: DomainPack<SecurityData> = {
  name: 'security',
  version: '0.1.0',

  keywordRules: [
    { keywords: ['authentication', 'mfa', 'multi-factor', 'login', 'password'], domain: 'access_control', topics: ['authentication'], weight: 10 },
    { keywords: ['encryption', 'encrypt', 'tls', 'ssl', 'aes', 'at rest', 'in transit'], domain: 'data_protection', topics: ['encryption'], weight: 10 },
    { keywords: ['incident', 'breach', 'vulnerability', 'security event'], domain: 'incident_mgmt', topics: ['incident_response'], weight: 10 },
    { keywords: ['compliance', 'soc 2', 'soc2', 'iso 27001', 'audit'], domain: 'compliance', topics: ['certifications'], weight: 10 },
    { keywords: ['patching', 'update', 'vulnerability management'], domain: 'vulnerability_mgmt', topics: ['patching'], weight: 8 },
    { keywords: ['firewall', 'network security', 'ids', 'ips'], domain: 'network_security', topics: ['perimeter'], weight: 9 },
    { keywords: ['security training', 'awareness', 'phishing'], domain: 'training', topics: ['security_awareness'], weight: 8 },
  ],

  domainSuggestions: {
    access_control: ['hasMFA', 'passwordPolicy'],
    data_protection: ['hasEncryption', 'encryptionStandard'],
    incident_mgmt: ['incidentCount', 'responseTime'],
    compliance: ['hasSOC2', 'auditDate'],
    vulnerability_mgmt: ['patchingFrequency'],
    network_security: ['firewallVendor'],
    training: ['securityTrainingCompletion'],
  },

  answerTemplates: [
    {
      domains: ['access_control'],
      topics: ['authentication'],
      generate: (dataMap) => {
        const mfa = val(dataMap, 'hasMFA');
        if (mfa === null) return null;
        return mfa
          ? 'Our organization enforces multi-factor authentication (MFA) across all systems and applications.'
          : 'Our organization is in the process of implementing multi-factor authentication across all systems.';
      },
    },
    {
      domains: ['data_protection'],
      topics: ['encryption'],
      generate: (dataMap) => {
        if (!has(dataMap, 'hasEncryption')) return null;
        const encrypted = val(dataMap, 'hasEncryption');
        return encrypted
          ? 'All data is encrypted at rest and in transit using industry-standard encryption protocols.'
          : 'We are implementing encryption standards for data at rest and in transit.';
      },
    },
    {
      domains: ['incident_mgmt'],
      topics: ['incident_response'],
      generate: (dataMap) => {
        const count = val(dataMap, 'incidentCount');
        if (count === null) return null;
        return `During the reporting period, we recorded ${count} security incident(s). Our incident response plan is tested annually.`;
      },
    },
  ],

  retrieveData: (matchResult: MatchResult, data: SecurityData): DataContext => {
    const company: RetrievedDataPoint[] = [];
    const operational: RetrievedDataPoint[] = [];
    const dataGaps: string[] = [];

    const domain = matchResult.primaryDomain;

    addIfPresent(company, 'company', 'companyName', 'Company', data.companyName);

    switch (domain) {
      case 'access_control':
        operational.push({ domain: 'access_control', field: 'hasMFA', label: 'MFA Enabled', value: data.hasMFA, confidence: 'high' });
        break;
      case 'data_protection':
        operational.push({ domain: 'data_protection', field: 'hasEncryption', label: 'Encryption Enabled', value: data.hasEncryption, confidence: 'high' });
        break;
      case 'incident_mgmt':
        operational.push({ domain: 'incident_mgmt', field: 'incidentCount', label: 'Security Incidents', value: data.incidentCount, confidence: 'high' });
        break;
      case 'compliance':
        operational.push({ domain: 'compliance', field: 'hasSOC2', label: 'SOC 2 Certified', value: data.hasSOC2, confidence: 'high' });
        break;
      case 'vulnerability_mgmt':
        addIfPresent(operational, 'vulnerability_mgmt', 'patchingFrequency', 'Patching Frequency', data.patchingFrequency);
        break;
      case 'network_security':
        addIfPresent(operational, 'network_security', 'firewallVendor', 'Firewall Vendor', data.firewallVendor);
        if (!data.firewallVendor) dataGaps.push('No firewall vendor information');
        break;
      case 'training':
        if (data.securityTrainingCompletion !== undefined) {
          operational.push({ domain: 'training', field: 'securityTrainingCompletion', label: 'Training Completion', value: data.securityTrainingCompletion, unit: '%', confidence: 'high' });
        }
        break;
    }

    return { company, operational, calculated: [], metadata: { sitesIncluded: [], dataGaps } };
  },

  scrubRules: [
    { pattern: /\bbasically\b/gi, replacement: '' },
  ],
};

// ============================================
// Test Data
// ============================================

const SECURITY_DATA: SecurityData = {
  companyName: 'SecureCo',
  hasMFA: true,
  hasEncryption: true,
  incidentCount: 2,
  hasSOC2: true,
  patchingFrequency: 'Monthly',
  firewallVendor: 'Palo Alto',
  employeeCount: 200,
  securityTrainingCompletion: 95,
};

const CONFIG: GenerationConfig = {
  useLLM: false,
  includeMethodology: false,
  includeAssumptions: true,
  includeLimitations: true,
  verbosity: 'standard',
  aggregateSites: false,
};

// ============================================
// Tests: Proves Domain-Agnosticism
// ============================================

describe('Custom Security Pack — Domain Agnosticism', () => {
  const engine = createResponseEngine(securityPack);

  it('creates an engine with custom pack identity', () => {
    expect(engine.packName).toBe('security');
    expect(engine.packVersion).toBe('0.1.0');
  });

  it('matches security questions to correct domains', () => {
    const result = engine.matchQuestion({
      id: 'q1', rowIndex: 0, text: 'Does your organization enforce multi-factor authentication?', rawRow: {},
    });
    expect(result.primaryDomain).toBe('access_control');
    expect(result.topics).toContain('authentication');
  });

  it('matches encryption questions', () => {
    const result = engine.matchQuestion({
      id: 'q2', rowIndex: 1, text: 'Is data encrypted at rest and in transit?', rawRow: {},
    });
    expect(result.primaryDomain).toBe('data_protection');
    expect(result.topics).toContain('encryption');
  });

  it('retrieves security-specific data', () => {
    const match = engine.matchQuestion({
      id: 'q1', rowIndex: 0, text: 'Do you use multi-factor authentication?', rawRow: {},
    });
    const ctx = engine.retrieveData(match, SECURITY_DATA);
    const mfaPoint = ctx.operational.find(p => p.field === 'hasMFA');
    expect(mfaPoint?.value).toBe(true);
  });

  it('generates answers using security templates', () => {
    const question = { id: 'q1', rowIndex: 0, text: 'Does your organization use MFA?', rawRow: {} };
    const match = engine.matchQuestion(question);
    const ctx = engine.retrieveData(match, SECURITY_DATA);
    const draft = engine.generateDraft(question, match, ctx, CONFIG);

    expect(draft.answer).toContain('multi-factor authentication');
    expect(draft.confidenceSource).toBe('provided');
  });

  it('generates incident response answers', () => {
    const question = { id: 'q2', rowIndex: 1, text: 'Have you experienced any breach or vulnerability this year?', rawRow: {} };
    const match = engine.matchQuestion(question);
    const ctx = engine.retrieveData(match, SECURITY_DATA);
    const draft = engine.generateDraft(question, match, ctx, CONFIG);

    expect(draft.answer).toContain('2');
    expect(draft.answer).toContain('incident');
  });

  it('handles missing data with data gaps', () => {
    const sparseData: SecurityData = {
      companyName: 'Sparse Inc',
      hasMFA: false,
      hasEncryption: false,
      incidentCount: 0,
      hasSOC2: false,
      patchingFrequency: '',
    };
    const question = { id: 'q3', rowIndex: 2, text: 'What firewall and network security do you have?', rawRow: {} };
    const match = engine.matchQuestion(question);
    const ctx = engine.retrieveData(match, sparseData);
    expect(ctx.metadata.dataGaps).toContain('No firewall vendor information');
  });

  it('has no classifier when pack does not define signals', () => {
    expect(engine.classifier).toBeNull();
    expect(engine.classifyQuestion).toBeNull();
  });

  it('processes a full batch end-to-end', () => {
    const questions = [
      { id: 'q1', rowIndex: 0, text: 'Do you enforce MFA authentication?', rawRow: {} },
      { id: 'q2', rowIndex: 1, text: 'Do you use encryption for data at rest?', rawRow: {} },
      { id: 'q3', rowIndex: 2, text: 'Report any breach or vulnerability events.', rawRow: {} },
    ];

    const matches = engine.matchQuestions(questions);
    expect(matches).toHaveLength(3);

    const contexts = matches.map(m => engine.retrieveData(m, SECURITY_DATA));
    const drafts = engine.generateDrafts(questions, matches, contexts, CONFIG);

    expect(drafts).toHaveLength(3);
    expect(drafts[0].answer).toContain('multi-factor authentication');
    expect(drafts[1].answer).toContain('encrypt');
    expect(drafts[2].answer).toContain('2');
  });

  it('applies custom scrub rules via defensive rewriter', () => {
    const rewritten = engine.rewriter.rewriteAnswer('We basically use encryption for all data.');
    expect(rewritten).not.toContain('basically');
  });

  it('exports to buffer with custom pack sheets', async () => {
    const questions = [{ id: 'q1', rowIndex: 0, text: 'MFA?', rawRow: {} }];
    const matches = engine.matchQuestions(questions);
    const contexts = matches.map(m => engine.retrieveData(m, SECURITY_DATA));
    const drafts = engine.generateDrafts(questions, matches, contexts, CONFIG);

    const buffer = await engine.exportToBuffer({
      answerDrafts: drafts,
      metadata: {
        companyName: 'SecureCo',
        generatedAt: new Date().toISOString(),
        packName: 'security',
        packVersion: '0.1.0',
      },
    });
    expect(buffer).toBeInstanceOf(Uint8Array);
    expect(buffer.length).toBeGreaterThan(0);
  });
});
