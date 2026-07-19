import Link from "next/link";
import Nav from "@/components/marketing/Nav";
import Footer from "@/components/marketing/Footer";
import PageCTA from "@/components/marketing/PageCTA";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="flex-grow">
        {/* Hero */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Turn Sustainability into{" "}
              <span className="text-primary">Competitive Advantage</span>
            </h1>
            <p className="text-lg md:text-xl font-medium text-gray-700 mb-4 max-w-2xl mx-auto">
              Move beyond sustainability evangelism and into operational
              discipline with the Five Stacks Framework.
            </p>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We help farmers, agricultural businesses &amp; SMEs build
              structured, self-improving infrastructure instead of narratives.
              Start building your hard-coded efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium"
              >
                Start Tracking — Free
              </Link>
              <Link
                href="/tools"
                className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Explore Free Tools
              </Link>
            </div>
          </div>
        </section>

        {/* Five Stacks Preview */}
        <section className="py-16 px-4 bg-cream">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-4">
              The Five Stacks Framework
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Talk is cheap. Systems compound. Five stacks, built in sequence,
              that turn compliance into infrastructure.
            </p>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                {
                  num: 1,
                  name: "The Defensible Baseline",
                  desc: "Baseline your operational data",
                  href: "/framework/stack-1-metrics",
                },
                {
                  num: 2,
                  name: "Operational Efficiency",
                  desc: "Fix the leaks in your operation",
                  href: "/framework/stack-2-efficiency",
                },
                {
                  num: 3,
                  name: "Margin Recovery",
                  desc: "Turn waste into value",
                  href: "/framework/stack-3-circularity",
                },
                {
                  num: 4,
                  name: "Structural Resilience",
                  desc: "Build adaptive capacity",
                  href: "/framework/stack-4-resilience",
                },
                {
                  num: 5,
                  name: "The Compounding Engine",
                  desc: "Create compound returns",
                  href: "/framework/stack-5-regeneration",
                },
              ].map((stack) => (
                <Link
                  key={stack.num}
                  href={stack.href}
                  className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div
                    className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center text-white font-bold"
                    style={{
                      backgroundColor: `var(--color-stack-${stack.num})`,
                    }}
                  >
                    {stack.num}
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {stack.name}
                  </h3>
                  <p className="text-sm text-gray-600">{stack.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#3D2E7C]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-[#3D2E7C]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Response-Ready Data</h3>
                <p className="text-gray-600 text-sm">
                  Structure your operational data so any buyer questionnaire gets
                  a defensible answer, not a scramble.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#3D2E7C]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-[#3D2E7C]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Sequenced, Not Random</h3>
                <p className="text-gray-600 text-sm">
                  Five stacks in the right order. Each one builds on the last.
                  No consulting-speak, just the next step.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#3D2E7C]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-[#3D2E7C]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">
                  Infrastructure, Not Narratives
                </h3>
                <p className="text-gray-600 text-sm">
                  Build systems that compound. Every measurement feeds
                  efficiency, efficiency feeds value, value feeds resilience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Ecosystems United */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-4">
              Why Ecosystems United
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              You could track this in a spreadsheet. Here&apos;s why that stops
              working the moment someone asks you to prove it.
            </p>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Not another spreadsheet — a system
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Excel stores numbers. This structures them so they
                    auto-calculate your emissions, feed into questionnaire
                    responses, and build the evidence trail auditors and buyers
                    actually want. Your data works for you instead of sitting in
                    a file.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Built for agriculture, not retrofitted
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Livestock emissions, fertiliser N&#8322;O, per-hectare
                    intensity metrics, crop yield tracking, nitrogen balance.
                    This isn&apos;t a manufacturing template with farm fields
                    bolted on — it&apos;s built from agricultural operations
                    outward.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Track once, answer everything
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Enter your operational data once. When a buyer sends an ESG
                    questionnaire, upload it — the response engine drafts
                    answers from your data. When GlobalG.A.P. needs an audit
                    checklist, same data, different pack. One system, every
                    questionnaire.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <span className="text-primary font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    You own everything, we lock in nothing
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Free tracker, forever. CSV export. No per-seat
                    pricing, no annual contracts, no vendor lock-in. Pay only
                    when you use the response engine — €39 for your first
                    questionnaire, €19 after that.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Response Generator */}
        <section className="py-16 px-4 bg-cream">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="p-8 md:p-12">
                <span className="text-xs font-semibold text-white bg-primary px-2.5 py-0.5 rounded-full">
                  Now live
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4 mb-3">
                  Got a buyer questionnaire you can&apos;t answer?
                </h2>
                <p className="text-gray-600 mb-6 max-w-2xl">
                  Upload it. The Response Generator drafts answers from your
                  tracked operational data — with confidence scores so you know
                  what&apos;s solid and what needs work. Review, edit, export as
                  CSV. Turn 40 hours of manual reporting into a 15-minute review.
                </p>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link
                    href="/signup"
                    className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold"
                  >
                    Get Started — €39 per questionnaire
                  </Link>
                  <Link
                    href="/see-it-in-action"
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    See it in action
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <PageCTA
              heading="Built for farms and agricultural SMEs"
              description="Your buyers need your data. The Five Stacks Framework turns that obligation into operational advantage, starting with what you already measure."
              primaryButton={{ label: "Start Free", href: "/signup" }}
              secondaryButton={{ label: "See Products", href: "/products" }}
              centered
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
