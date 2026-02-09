import Link from "next/link";

export function AppFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Ecosystems United
        </p>
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span>Your data stays in your browser</span>
          <Link href="/privacy" className="hover:text-primary transition-colors">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
