import Link from "next/link";
import PageCTA from "@/components/marketing/PageCTA";

export const metadata = {
  title: "Modern Sustainability | Ecosystems United",
  description: "Good operations are sustainable operations. Here's how you get from where you are to where the money is.",
};

export default function ModernSustainabilityPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Good Operations Are Sustainable Operations
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
          You don&apos;t need a sustainability strategy. You need an operational
          one. The environmental proof comes as a byproduct.
        </p>
      </header>

      {/* Main Content */}
      <article className="prose prose-lg prose-gray max-w-none">

        <p>
          Every cent you waste on excess energy, lost materials, or inefficient
          transport is a cent off your margin <em>and</em> an emission you
          didn&apos;t need to produce. Fix the operations and you fix the
          sustainability numbers automatically.
        </p>

        <p className="text-xl font-medium text-gray-900">
          Here&apos;s how you get from where you are to where the money is.
        </p>

        <h2>The path from A to B</h2>

        <div className="not-prose my-8 space-y-6">
          <div className="flex gap-4 items-start p-6 rounded-xl border border-gray-200">
            <div className="w-10 h-10 rounded-full bg-[#3D2E7C] text-white flex items-center justify-center font-bold text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Know your numbers</h3>
              <p className="text-gray-600 text-base mb-2">
                You can&apos;t fix what you can&apos;t see. Track energy, water, materials,
                waste, transport, and workforce data. Most of it is already in your
                invoices and bills. It just needs organising.
              </p>
              <p className="text-sm text-gray-500">
                <strong>The money:</strong> Operations that start measuring typically find
                10–20% in reduction opportunities within the first year.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start p-6 rounded-xl border border-gray-200">
            <div className="w-10 h-10 rounded-full bg-[#5B4A9E] text-white flex items-center justify-center font-bold text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Stop the leaks</h3>
              <p className="text-gray-600 text-base mb-2">
                Your baseline data shows exactly where you bleed margin. Energy
                waste, over-application, transport inefficiency. The boring stuff
                that costs thousands every year.
              </p>
              <p className="text-sm text-gray-500">
                <strong>The money:</strong> LED upgrades pay back in 1–2 years. Compressed
                air leak repairs often pay back in months. Variable speed drives cut
                motor energy 20–40%.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start p-6 rounded-xl border border-gray-200">
            <div className="w-10 h-10 rounded-full bg-[#7B6BB8] text-white flex items-center justify-center font-bold text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Capture the waste</h3>
              <p className="text-gray-600 text-base mb-2">
                What you throw away was once something you paid for. Byproduct
                revenue, recycling rebates, composting value. Your waste streams
                are an untapped P&amp;L line.
              </p>
              <p className="text-sm text-gray-500">
                <strong>The money:</strong> Every kilogram of waste was once a purchased
                input. Turning cost into revenue changes your margin structure.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start p-6 rounded-xl border border-gray-200">
            <div className="w-10 h-10 rounded-full bg-[#9A8CD0] text-white flex items-center justify-center font-bold text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Build resilience</h3>
              <p className="text-gray-600 text-base mb-2">
                One buyer, one product, one market = one point of failure.
                Diversify your revenue streams so a single shock doesn&apos;t break
                you.
              </p>
              <p className="text-sm text-gray-500">
                <strong>The money:</strong> The operation that survives the bad year is the
                one that&apos;s still around for the good years.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start p-6 rounded-xl border border-gray-200">
            <div className="w-10 h-10 rounded-full bg-[#B8ADE3] text-white flex items-center justify-center font-bold text-sm shrink-0">
              5
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Compound the advantage</h3>
              <p className="text-gray-600 text-base mb-2">
                Now you can prove it. Verified data, certifications, premium
                positioning. Your operational improvements become a moat. Each
                cycle makes you harder to compete with.
              </p>
              <p className="text-sm text-gray-500">
                <strong>The money:</strong> Suppliers with documented sustainability
                performance get preferred status, maintained volumes, and pricing
                leverage.
              </p>
            </div>
          </div>
        </div>

        <p>
          Each step creates the conditions for the next. Skip steps and it falls
          apart. Follow the sequence and each investment funds the next.
        </p>

        <h2>The sustainability part</h2>

        <p>
          Notice what just happened? You reduced energy waste, cut material
          losses, diverted waste from landfill, built climate resilience, and
          created a verifiable track record.
        </p>

        <p>
          That&apos;s a sustainability report. You just wrote it by running a
          better operation.
        </p>

        <p>
          When CSRD arrives, when buyers send their Scope 3 questionnaires, when
          your bank asks for ESG data, you&apos;re not scrambling. You&apos;re
          pulling numbers from a system you built to save money.
        </p>

        <p className="text-xl font-semibold text-gray-900">
          Infrastructure, not narratives.
        </p>

        <h2>Who this is for</h2>

        <ul>
          <li><strong>Farmers and food businesses</strong> who want their costs down and their data ready</li>
          <li><strong>Operations leaders</strong> looking for margin improvements, not compliance checklists</li>
          <li><strong>Anyone tired of sustainability theater</strong> who wants something that actually works</li>
        </ul>

        <p>
          If you&apos;re looking for someone to tell you to save the planet,
          we&apos;re not your people.
        </p>

        <p>
          If you&apos;re looking for a system that makes your operation
          stronger and produces the environmental proof as a byproduct,
          start here.
        </p>

      </article>

      {/* Bottom CTA */}
      <div className="mt-16">
        <PageCTA
          heading="Start with what you have"
          description="Your invoices, bills, and records already contain the data. The tracker organises it into a defensible baseline. Free."
          primaryButton={{ label: "Start Tracking", href: "/signup" }}
          secondaryButton={{ label: "Explore the Five Stacks", href: "/framework" }}
        />
      </div>
    </div>
  );
}
