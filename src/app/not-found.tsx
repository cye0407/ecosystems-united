import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-6xl font-bold text-[#3D2E7C] mb-4">404</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Page not found
        </h1>
        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-[#3D2E7C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2E2260] transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/articles"
            className="inline-block border border-[#3D2E7C] text-[#3D2E7C] px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Browse Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
