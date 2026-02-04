// Supabase Edge Function: generate-answer
// Calls Claude API for AI-enhanced answer generation

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get('ANTHROPIC_API_KEY');
    if (!apiKey) {
      return new Response(
        JSON.stringify({ success: false, error: 'ANTHROPIC_API_KEY not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const {
      question,
      category,
      dataPoints = [],
      reportingPeriod,
      sites = [],
      verbosity = 'standard',
      includeMethodology = true,
      includeAssumptions = true,
      includeLimitations = true,
      companyProfile,
      questionType,
    } = await req.json();

    const dataSection = dataPoints.length > 0
      ? dataPoints.map((p: { label: string; value: string | number; unit?: string }) =>
          `- ${p.label}: ${p.value}${p.unit ? ' ' + p.unit : ''}`
        ).join('\n')
      : 'No specific data available.';

    const verbosityInstruction = {
      concise: 'Provide a brief, direct answer (1-2 sentences).',
      standard: 'Provide a clear, professional answer (2-4 sentences).',
      detailed: 'Provide a comprehensive answer with context (3-6 sentences).',
    }[verbosity] || 'Provide a clear, professional answer (2-4 sentences).';

    // Phase 1: Build company context if profile is provided
    let companyContext = '';
    if (companyProfile) {
      companyContext = `\n\nCompany Context: ${companyProfile.companyName}, a ${companyProfile.industry} company in ${companyProfile.country} with ${companyProfile.employeeCount} employees. Maturity: ${companyProfile.maturityLevel}.`;
      if (companyProfile.informalPractices?.length > 0) {
        const practices = companyProfile.informalPractices
          .map((p: { isFormalized: boolean; description: string }) => `[${p.isFormalized ? 'Formalized' : 'Informal'}] ${p.description}`)
          .join('; ');
        companyContext += `\nExisting practices: ${practices}`;
      }
    }

    const systemPrompt = `You are an ESG sustainability reporting expert helping companies respond to questionnaires. Compose professional, submission-ready responses.${companyContext}

CRITICAL CONSTRAINTS:
- NEVER start a sentence with "Based on available data" or "We do not yet have".
- Always lead with the ACTION being taken. If the action is informal, describe the process.
- If a gap exists, describe the commitment to formalize it rather than stating the absence.
- Use industry-appropriate terminology.`;

    // Phase 2: Question type context injection
    const questionTypeInstructions: Record<string, string> = {
      'POLICY': 'This is a POLICY question. Focus on high-level vision, commitments, and management approach. Reference formal policies if they exist, or describe the commitment to formalise existing practices.',
      'MEASURE': 'This is a MEASURE/ACTIONS question. Describe specific operational measures, procedures, and initiatives. Use concrete, industry-appropriate terminology. Describe processes, not aspirations.',
      'KPI': 'This is a KPI/REPORTING question. Provide precise data values with units, methodology notes, and reporting period. If data is estimated, state the estimation method.',
    };
    const questionTypeNote = questionType && questionTypeInstructions[questionType]
      ? `\n${questionTypeInstructions[questionType]}\n`
      : '';

    const userPrompt = `Question: ${question}
${category ? `Category: ${category}` : ''}${questionTypeNote}

Available Data:
${dataSection}
${reportingPeriod ? `\nReporting Period: ${reportingPeriod}` : ''}
${sites.length > 0 ? `Sites: ${sites.join(', ')}` : ''}

Instructions:
- ${verbosityInstruction}
- Use the provided data values accurately.
- If data is incomplete, acknowledge limitations honestly.
- Write in first person plural (we, our).
- Do not fabricate data.
${includeMethodology ? '- Include brief methodology notes where relevant.' : ''}
${includeAssumptions ? '- Note any assumptions made.' : ''}
${includeLimitations ? '- Acknowledge data limitations.' : ''}

Response:`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1024,
        system: systemPrompt,
        messages: [{ role: 'user', content: userPrompt }],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return new Response(
        JSON.stringify({ success: false, error: `API error: ${response.status} ${errorText}` }),
        { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const result = await response.json();
    const answer = result.content?.[0]?.text || '';
    const usage = result.usage ? { inputTokens: result.usage.input_tokens, outputTokens: result.usage.output_tokens } : undefined;

    return new Response(
      JSON.stringify({ success: true, answer, usage }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return new Response(
      JSON.stringify({ success: false, error: message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
