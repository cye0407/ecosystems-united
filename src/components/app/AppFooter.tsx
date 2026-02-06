export function AppFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-500 text-center">
          &copy; {new Date().getFullYear()} Ecosystems United. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
