import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "ESG Reporting for Small Farms: A Practical Getting Started Guide",
  description:
    "ESG reporting doesn't require consultants or software. Small farms can start with utility bills, spray records, and training certificates they already have. Here's the 80/20 approach.",
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link
          href="/framework/stack-1-metrics"
          className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            &larr;
          </span>{" "}
          Back to Stack 1: Core Metrics
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#3D2E7C] text-white flex items-center justify-center font-bold text-sm">
            1
          </div>
          <span className="text-sm text-gray-500">Stack 1: Core Metrics</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          ESG Reporting for Small Farms: A Practical Getting Started Guide
        </h1>
        <p className="text-xl text-gray-600">
          You don&apos;t need a sustainability department or expensive software. Most of the data buyers want already sits in your filing cabinet, your accountant&apos;s records, and your farm diary. Here&apos;s how to pull it together in three weeks.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          ESG stands for Environmental, Social, and Governance. For a small farm, that translates to: what resources do you use, how do you treat people, and how is the operation managed? You&apos;ve been doing all three for as long as you&apos;ve been farming. The &ldquo;reporting&rdquo; part is simply writing it down in a format that satisfies whoever is asking.
        </p>
        <p>
          The problem isn&apos;t that small farms lack sustainability practices. It&apos;s that the frameworks designed for multinational corporations&mdash;GRI, SASB, CDP, TCFD&mdash;make the task feel impossibly complex. A 200-hectare mixed farm doesn&apos;t need the same reporting framework as Nestle. It needs the 80/20 approach: identify the 20% of data that answers 80% of what buyers, regulators, and certification bodies actually ask for.
        </p>
        <p>
          This guide is that 80/20. No jargon. No frameworks you&apos;ll never use. Just the practical steps to go from &ldquo;we&apos;ve never done ESG reporting&rdquo; to &ldquo;we can respond to any buyer questionnaire with credible data.&rdquo;
        </p>

        <h2>Environmental: The Data You Already Have</h2>
        <p>
          The environmental pillar of ESG is where most buyer questions focus, and it&apos;s also where small farms typically have the most data already&mdash;it&apos;s just not organized for reporting purposes.
        </p>

        <h3>Energy and Fuel</h3>
        <p>
          Your electricity bills show kWh consumed by month. Your diesel supplier&apos;s delivery records or fuel card statements show litres purchased. If you heat livestock barns, greenhouses, or use grain dryers, those fuel invoices are somewhere in your accounts. This data directly answers the most commonly asked environmental question: <strong>what is your energy consumption?</strong>
        </p>
        <p>
          Pull 12 months of electricity bills and fuel invoices. Add them up. You now have your annual energy consumption by source&mdash;the foundation of your carbon footprint calculation and the single most requested piece of environmental data.
        </p>

        <h3>Fertilizer and Crop Protection</h3>
        <p>
          Your fertilizer invoices show product type, quantity, and nitrogen content. Your spray records&mdash;which you&apos;re legally required to keep&mdash;document every pesticide application with product name, rate, area, and date. These records answer questions about chemical inputs, nitrogen balance, and crop protection practices.
        </p>
        <p>
          If you work with an agronomist, they likely have detailed recommendations and application records. This is high-quality data that many larger operations struggle to compile as cleanly as a well-managed small farm can.
        </p>

        <h3>Water</h3>
        <p>
          If you&apos;re on mains water, your water bills show consumption. If you abstract from boreholes or rivers, your abstraction license specifies permitted volumes, and you may have meter readings. For rainfed operations without irrigation, water consumption is primarily domestic and livestock drinking&mdash;still worth documenting, but often less material than energy.
        </p>

        <h3>Waste</h3>
        <p>
          Farm waste streams include silage wrap (plastic), agrochemical containers (which should go through collection schemes), general farm waste, scrap metal, tyres, and organic waste. If you use a waste collection service, they have records. If you participate in farm plastics recycling schemes, you have collection certificates.
        </p>
        <p>
          Waste data is often the weakest area for small farms. If you don&apos;t have good records, acknowledge the gap and start tracking. A simple log of waste collections with estimated volumes is a legitimate starting point.
        </p>

        <h2>Social: People on Your Farm</h2>
        <p>
          The social pillar covers how you treat the people who work on your operation. For small farms, this spans three distinct groups that buyers increasingly ask about.
        </p>

        <h3>Permanent Staff</h3>
        <p>
          How many full-time employees do you have? What are their roles? Are they paid at or above minimum wage? Do they have written contracts? Do they have access to grievance procedures? For most small farms with a handful of permanent staff, these questions have straightforward answers rooted in employment law compliance you already maintain.
        </p>

        <h3>Seasonal and Temporary Workers</h3>
        <p>
          This is where buyer scrutiny is increasing, driven by modern slavery legislation and ethical sourcing commitments. How many seasonal workers do you employ annually? How are they recruited&mdash;directly or through agencies? What are their living conditions if accommodation is provided? Are they paid the same rates as permanent staff for equivalent work?
        </p>
        <p>
          Document the number of seasonal workers by month, how they&apos;re recruited, and their terms of employment. If you use labor agencies, keep records of which agencies and their certifications (GLAA licensing in the UK, for example).
        </p>

        <h3>Family Labor</h3>
        <p>
          Many small farms rely on family members who may or may not be formally employed. ESG reporting typically asks for total labor including family members working regular hours. Document who works on the farm regularly and in what capacity.
        </p>

        <h3>Health, Safety, and Training</h3>
        <p>
          Farm safety records&mdash;accident logs, near-miss reports, risk assessments&mdash;directly answer ESG questions about worker welfare. Training certificates are particularly valuable: PA1/PA2 sprayer qualifications, chainsaw competency, first aid, manual handling, telehandler operation, ATV safety. Each certificate demonstrates investment in worker safety and competence.
        </p>
        <p>
          If you have a farm safety policy (many farms do, even if it&apos;s basic), that document answers governance questions about health and safety management. If you don&apos;t have one, creating a simple one-page policy is a worthwhile exercise that serves both ESG reporting and actual risk management.
        </p>
      </article>

      {/* Mid-article Newsletter */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Governance: How You Run the Operation</h2>
        <p>
          Governance sounds corporate. For a small farm, it means: what standards do you operate to, and can you demonstrate it?
        </p>
        <p>
          <strong>Farm assurance membership</strong> is your strongest governance credential. Red Tractor, LEAF Marque, Soil Association, QMS (Quality Meat Scotland), Bord Bia (Ireland)&mdash;these schemes require audits, standards compliance, and record-keeping that directly satisfy ESG governance questions. If you&apos;re a member of any assurance scheme, your audit reports and certificates are immediately relevant.
        </p>
        <p>
          <strong>Organic certification</strong> from any accredited body demonstrates environmental management at a level that exceeds most ESG questionnaire requirements. Your organic inspection reports, conversion records, and annual certification documents are high-value ESG data.
        </p>
        <p>
          <strong>Food safety certifications</strong>&mdash;SALSA (Safe and Local Supplier Approval), GlobalG.A.P., BRC&mdash;demonstrate systematic quality management. These certifications answer governance questions about food safety, traceability, and management systems.
        </p>
        <p>
          <strong>Environmental stewardship</strong> or agri-environment scheme participation (ELS, HLS, Countryside Stewardship, GLAS, CAP Eco-Schemes) shows active conservation management. Your scheme agreements and payment records demonstrate biodiversity and environmental commitments.
        </p>

        <h2>The Three-Week Getting Started Plan</h2>
        <p>
          Don&apos;t try to do everything at once. This plan focuses on gathering and organizing what you already have&mdash;not creating new systems or buying software.
        </p>

        <h3>Week 1: Energy, Fuel, and Inputs</h3>
        <ul>
          <li>Collect 12 months of electricity bills (or ask your accountant)</li>
          <li>Compile diesel and other fuel purchase records for the same period</li>
          <li>Gather fertilizer purchase invoices showing product, quantity, and N content</li>
          <li>Locate your spray records for the last growing season</li>
          <li>Record livestock numbers by category (if applicable)</li>
        </ul>
        <p>
          <strong>Output:</strong> A simple spreadsheet with annual totals for electricity (kWh), diesel (litres), other fuels (litres or kg), fertilizer nitrogen (kg N), and livestock numbers.
        </p>

        <h3>Week 2: People and Safety</h3>
        <ul>
          <li>List all workers: permanent employees, regular seasonal workers, family members</li>
          <li>Compile training certificates&mdash;sprayer certs (PA1, PA2, PA6), chainsaw (CS30-41), first aid, manual handling</li>
          <li>Locate your farm safety policy (or write a basic one if you don&apos;t have one)</li>
          <li>Check your accident book for the last 12 months</li>
          <li>If you use labor agencies, note which ones and their licensing status</li>
        </ul>
        <p>
          <strong>Output:</strong> A personnel summary (numbers by category, not names), a list of current training certifications, and your safety policy document.
        </p>

        <h3>Week 3: Policies, Certifications, and Documentation</h3>
        <ul>
          <li>Compile all assurance scheme certificates and latest audit reports</li>
          <li>Gather organic certification documents if applicable</li>
          <li>Locate environmental stewardship scheme agreements</li>
          <li>Write or update a one-page farm environmental policy if you don&apos;t have one</li>
          <li>Create a simple document listing all certifications with expiry dates</li>
        </ul>
        <p>
          <strong>Output:</strong> A folder (physical or digital) containing your certifications, policies, and scheme agreements ready to reference when questionnaires arrive.
        </p>

        <h2>What Small Farms Do NOT Need</h2>
        <p>
          There&apos;s an industry of consultants and software providers happy to sell you complex solutions. Before you spend anything, understand what&apos;s <em>not</em> required for a small farm responding to buyer ESG requests:
        </p>
        <ul>
          <li><strong>Scope 3 emissions calculation</strong> &mdash; Your buyers calculate their own Scope 3 using your Scope 1 and 2 data. You don&apos;t need to map your entire upstream supply chain.</li>
          <li><strong>GRI or SASB framework alignment</strong> &mdash; These are for publicly listed companies writing sustainability reports. Buyer questionnaires use their own formats.</li>
          <li><strong>Third-party carbon audits</strong> &mdash; Unless specifically requested (rare for small suppliers), self-reported data with documented methodology is acceptable.</li>
          <li><strong>Science-Based Targets (SBTi) commitment</strong> &mdash; Targets are for later. Measurement comes first. Don&apos;t commit to reduction targets before you have a credible baseline.</li>
          <li><strong>Sustainability reporting software</strong> &mdash; A spreadsheet is sufficient for a small farm. Don&apos;t buy software until manual processes become genuinely unmanageable.</li>
          <li><strong>A sustainability officer</strong> &mdash; For most small farms, ESG data collection adds a few hours per month once systems are established, not a full-time role.</li>
        </ul>

        <h2>Tie It to Natural Farming Rhythms</h2>
        <p>
          ESG data collection doesn&apos;t need to be a separate, dreaded administrative task. The most sustainable approach (pun intended) is to tie data gathering to rhythms your farm already follows.
        </p>
        <p>
          <strong>End of harvest</strong> is a natural review point. Crop yields are recorded, input costs are tallied, and the growing season can be evaluated. Add 30 minutes to capture total fertilizer applied, spray records summary, and fuel used during the season.
        </p>
        <p>
          <strong>Annual crop planning</strong> already involves reviewing last year&apos;s inputs and planning next year&apos;s. This is the ideal time to compile your environmental data for the previous 12 months.
        </p>
        <p>
          <strong>Calving and lambing records</strong> provide your livestock numbers by month&mdash;data you keep for herd/flock management that directly feeds emission calculations.
        </p>
        <p>
          <strong>Annual accounts preparation</strong> with your accountant means utility bills, fuel invoices, and input costs are already being compiled. Ask your accountant to pull energy and fuel totals as a separate line&mdash;it adds minutes to their work and saves you hours.
        </p>
        <p>
          <strong>Farm assurance audits</strong> already require you to gather safety records, training certificates, spray logs, and waste documentation. Use the audit preparation as your annual ESG data review.
        </p>
        <p>
          The farms that find ESG reporting most burdensome are those that treat it as a standalone exercise, separate from normal operations. The farms that find it manageable are those that integrate it into existing administrative routines they were going to do anyway.
        </p>

        <h2>The Competitive Advantage of Being Small</h2>
        <p>
          Here&apos;s something the consultants won&apos;t tell you: small farms often have <em>better</em> ESG data than large operations, once they organize it.
        </p>
        <p>
          A farmer who personally applies fertilizer knows exactly what went on each field. A large operation relying on contractors and multiple operators has aggregation challenges. A small farm with five employees can produce a complete workforce profile in 30 minutes. A large operation with 200 staff across multiple sites needs HR systems and weeks of compilation.
        </p>
        <p>
          Small also means traceable. When a buyer asks &ldquo;how do you know this number?&rdquo; you can point to the specific invoice, the specific field record, the specific person who did the work. That traceability is exactly what auditors value, and it&apos;s inherent in small-scale operations.
        </p>
        <p>
          The barrier for small farms isn&apos;t data quality. It&apos;s knowing what to collect and how to present it. That&apos;s what this guide addresses, and it&apos;s what Stack 1 of the Five Stacks Framework is designed to solve.
        </p>
      </article>

      {/* Bottom CTA */}
      <div className="mt-12 p-8 bg-[#3D2E7C] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">
          Ready to organize your farm&apos;s ESG data?
        </h3>
        <p className="text-white/80 mb-6">
          Stack 1 of the Five Stacks Framework turns scattered farm records into structured, buyer-ready sustainability data. Start with what you have. Build from there.
        </p>
        <Link
          href="/framework/stack-1-metrics"
          className="inline-block bg-white text-[#3D2E7C] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
        >
          Get Started with Stack 1 &rarr;
        </Link>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Further Reading
        </h3>
        <div className="space-y-3">
          <Link
            href="/articles/first-esg-questionnaire"
            className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors"
          >
            <span className="font-medium text-gray-900">
              First ESG Questionnaire? Where Agricultural Suppliers Start &rarr;
            </span>
            <span className="block text-sm text-gray-600">
              Step-by-step guide to responding to your first buyer sustainability request
            </span>
          </Link>
          <Link
            href="/articles/agricultural-sustainability-checklist"
            className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors"
          >
            <span className="font-medium text-gray-900">
              Agricultural Sustainability Checklist &rarr;
            </span>
            <span className="block text-sm text-gray-600">
              The complete checklist of what to track, where to find it, and how often to update
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
