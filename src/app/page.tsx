import Link from "next/link";
import Nav from "@/components/marketing/Nav";
import Footer from "@/components/marketing/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="flex-grow">
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Turn Sustainability Compliance into{" "}
              <span className="text-primary">Competitive Advantage</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              The Five Stacks Framework helps SMEs navigate CSRD compliance
              while building operational resilience. Not just reporting — real
              business transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dashboard"
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium"
              >
                Start Your Assessment
              </Link>
              <Link
                href="/framework"
                className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Learn About Five Stacks
              </Link>
            </div>
          </div>
        </section>

        {/* Five Stacks Preview */}
        <section className="py-16 px-4 bg-cream">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12">
              The Five Stacks Framework
            </h2>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                {
                  num: 1,
                  name: "Metrics",
                  desc: "Baseline your operational data",
                },
                {
                  num: 2,
                  name: "Efficiency",
                  desc: "Optimize resource usage",
                },
                {
                  num: 3,
                  name: "Resilience",
                  desc: "Build adaptive capacity",
                },
                {
                  num: 4,
                  name: "Integration",
                  desc: "Connect systems & stakeholders",
                },
                {
                  num: 5,
                  name: "Regeneration",
                  desc: "Create positive impact",
                },
              ].map((stack) => (
                <div
                  key={stack.num}
                  className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div
                    className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center text-white font-bold"
                    style={{
                      backgroundColor: `var(--color-stack-${stack.num})`,
                    }}
                  >
                    {stack.num}
                  </div>
                  <h3 className="font-semibold mb-2">{stack.name}</h3>
                  <p className="text-sm text-gray-600">{stack.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-semibold mb-2">Response-Ready Data</h3>
                <p className="text-gray-600 text-sm">
                  Upload any sustainability questionnaire. Get answers generated
                  from your operational data.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold mb-2">Clear Progress Path</h3>
                <p className="text-gray-600 text-sm">
                  Know exactly where you stand and what to do next. No
                  consulting-speak, just actionable steps.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="font-semibold mb-2">Confidence Tracking</h3>
                <p className="text-gray-600 text-sm">
                  Every data point shows its confidence level. Know what&apos;s solid
                  and what needs verification.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
