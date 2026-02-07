import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Ecosystems United</h3>
            <p className="text-sm text-gray-600">
              Turning sustainability compliance into competitive advantage for agricultural
              businesses and SMEs.
            </p>
          </div>

          {/* Framework */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Framework</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/framework" className="text-gray-600 hover:text-primary">
                  Five Stacks Overview
                </Link>
              </li>
              <li>
                <Link href="/framework/stack-1-metrics" className="text-gray-600 hover:text-primary">
                  Stack 1: Metrics
                </Link>
              </li>
              <li>
                <Link href="/framework/implementation" className="text-gray-600 hover:text-primary">
                  Implementation Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/articles" className="text-gray-600 hover:text-primary">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-gray-600 hover:text-primary">
                  Tools
                </Link>
              </li>
              <li>
                <Link href="/tools/stack-assessment" className="text-gray-600 hover:text-primary">
                  Stack Assessment
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Ecosystems United. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
