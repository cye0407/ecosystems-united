import Link from "next/link";
import BaselineCTA from "@/components/marketing/BaselineCTA";

export const metadata = {
  title: "GlobalG.A.P. GRASP: Worker Welfare Requirements Explained",
  description:
    "What the GlobalG.A.P. GRASP add-on module requires. Worker welfare, fair working conditions, and social practice assessments for farm certification.",
  keywords: ["GRASP", "GlobalG.A.P.", "worker welfare", "social practice", "farm workers", "labor rights", "ecolabels", "certification", "agriculture", "sustainability"],
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <nav className="mb-8">
        <Link
          href="/framework/stack-2-efficiency"
          className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#5B4A9E] transition-colors"
        >
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>{" "}
          Back to Stack 2: Operational Efficiency
        </Link>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#5B4A9E] text-white flex items-center justify-center font-bold text-sm">2</div>
          <span className="text-sm text-gray-500">Stack 2: Operational Efficiency</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          GlobalG.A.P. GRASP: Worker Welfare Requirements Explained
        </h1>
        <p className="text-xl text-gray-600">
          GRASP is GlobalG.A.P.&apos;s add-on module for social practice. More
          buyers are requiring it. Here&apos;s what it covers, what evidence
          you need, and how to prepare.
        </p>
      </header>

      <article className="prose prose-gray max-w-none">
        <p>
          GRASP stands for GlobalG.A.P. Risk Assessment on Social Practice.
          It&apos;s an add-on to the IFA standard that assesses how you treat
          your workers, covering fair employment practices, working
          conditions, health and safety, and workers&apos; rights to
          representation.
        </p>
        <p>
          GRASP is not yet mandatory for GlobalG.A.P. certification, but a
          growing number of retailers require it. Aldi, Lidl, and several other
          major European retailers now mandate GRASP assessments for their
          fresh produce suppliers. If your buyer doesn&apos;t require it yet,
          they likely will soon.
        </p>

        <h2>What GRASP Assesses</h2>
        <p>
          The GRASP assessment covers 13 control points grouped into several
          themes. Unlike the IFA standard (which has major musts and minor
          musts), GRASP uses a traffic-light system: fully compliant, partially
          compliant, or not compliant. The results are visible to your buyers
          through the GlobalG.A.P. database.
        </p>

        <h3>Workers&apos; Voice</h3>
        <ul>
          <li><strong>Worker representative:</strong> is there an elected or appointed worker representative who can raise issues on behalf of employees?</li>
          <li><strong>Complaint mechanism:</strong> is there a documented way for workers to raise concerns without fear of retaliation?</li>
          <li><strong>Regular meetings:</strong> do management and worker representatives meet regularly to discuss working conditions?</li>
        </ul>

        <h3>Working Conditions</h3>
        <ul>
          <li><strong>Employment contracts:</strong> do all workers (including seasonal and temporary) have written contracts in a language they understand?</li>
          <li><strong>Working hours:</strong> do working hours comply with national law and any applicable collective agreements? Is overtime voluntary and properly compensated?</li>
          <li><strong>Wages:</strong> are wages at least equal to the legal minimum or sector collective agreement? Are they paid on time and documented?</li>
          <li><strong>Pay slips:</strong> do workers receive pay slips showing hours worked, deductions, and net pay?</li>
        </ul>

        <h3>Child Labor and Forced Labor</h3>
        <ul>
          <li><strong>No child labor:</strong> are there procedures to verify the age of workers? Are workers under 18 excluded from hazardous work?</li>
          <li><strong>No forced labor:</strong> are workers free to leave? Are identity documents not confiscated? Are recruitment fees not charged to workers?</li>
        </ul>

        <h3>Health, Safety, and Access</h3>
        <ul>
          <li><strong>Safe housing:</strong> if worker housing is provided, does it meet basic standards (clean water, sanitation, adequate space, weather protection)?</li>
          <li><strong>Access to services:</strong> do workers have access to clean drinking water, sanitary facilities, and first aid during working hours?</li>
        </ul>
      </article>

      <div className="my-12">
        <BaselineCTA />
      </div>

      <article className="prose prose-gray max-w-none">
        <h2>What Evidence the Auditor Needs</h2>
        <p>
          GRASP is assessed during the same visit as your IFA audit, typically
          adding 1&ndash;2 hours. The auditor will want to see:
        </p>
        <ul>
          <li><strong>Sample employment contracts:</strong> for permanent, seasonal, and agency workers</li>
          <li><strong>Payroll records:</strong> showing wage rates, hours worked, overtime calculation</li>
          <li><strong>Proof of worker representative election or appointment</strong></li>
          <li><strong>Meeting minutes:</strong> from management-worker meetings</li>
          <li><strong>Complaint log:</strong> showing how issues raised were addressed</li>
          <li><strong>Age verification records:</strong> especially where seasonal workers are common</li>
          <li><strong>Housing conditions:</strong> if applicable, the auditor will inspect worker accommodation</li>
        </ul>
        <p>
          The auditor will also conduct <strong>confidential worker
          interviews</strong>. Workers are asked (privately, without management
          present) about their experience: whether they feel safe, whether they
          know who the worker representative is, whether they receive pay slips,
          and whether they feel free to raise concerns.
        </p>

        <h2>How to Prepare for GRASP</h2>
        <p>
          Most farms that struggle with GRASP don&apos;t have bad working
          conditions. They have undocumented working conditions. The fix is
          usually administrative, not operational:
        </p>
        <ul>
          <li><strong>Appoint a worker representative.</strong> This can be as simple as asking workers to nominate someone. Document the process</li>
          <li><strong>Set up regular meetings.</strong> Quarterly is sufficient. Keep minutes (date, attendees, topics raised, actions agreed)</li>
          <li><strong>Review your contracts.</strong> Make sure all workers have written agreements covering hours, wages, notice periods, and responsibilities. Translate if needed</li>
          <li><strong>Document your pay process.</strong> Issue pay slips, keep payroll records, calculate overtime correctly</li>
          <li><strong>Create a complaint procedure.</strong> A simple one-page document explaining how workers can raise issues. Post it where workers can see it</li>
          <li><strong>Brief your workers.</strong> Tell them what the audit involves and that they may be interviewed. Don&apos;t coach answers; auditors can tell</li>
        </ul>

        <h2>GRASP and Your Broader Workforce Data</h2>
        <p>
          The workforce data you track for GRASP overlaps significantly with
          what your buyers ask in ESG questionnaires: headcount, working hours,
          training records, safety incidents, gender diversity. If you&apos;re
          tracking workforce data for one purpose, you&apos;re building evidence
          for multiple purposes simultaneously.
        </p>
        <p>
          This is where the{" "}
          <Link href="/articles/globalg-a-p-certification-what-sme-farms-need">broader GlobalG.A.P. requirements</Link>
          {" "}connect to GRASP. Worker health, safety, and welfare are
          covered in both the IFA standard and the GRASP add-on. Preparing for
          both is essentially one process, not two.
        </p>
      </article>

      <div className="mt-12 p-8 bg-[#5B4A9E] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Track Workforce Data, Pass GRASP</h3>
        <p className="text-white/80 mb-4">
          Start tracking worker hours, training, and safety data now. When GRASP
          becomes mandatory for your buyers, you&apos;ll be ready.
        </p>
        <Link
          href="/signup"
          className="inline-block bg-white text-[#5B4A9E] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
        >
          Start Tracking Free &rarr;
        </Link>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-500 mb-4">Related articles:</p>
        <div className="space-y-3">
          <Link href="/articles/globalg-a-p-audit-preparation-guide" className="block p-4 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors">
            <span className="font-medium text-gray-900">How to Prepare for a GlobalG.A.P. Audit &rarr;</span>
            <span className="block text-sm text-gray-600">A practical 30-day preparation timeline</span>
          </Link>
          <Link href="/articles/globalg-a-p-certification-costs" className="block p-4 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors">
            <span className="font-medium text-gray-900">The Real Cost of GlobalG.A.P. Certification &rarr;</span>
            <span className="block text-sm text-gray-600">What it costs and how to reduce the burden</span>
          </Link>
        </div>
      </div>

      <div className="mt-12">
        <BaselineCTA />
      </div>
    </div>
  );
}
