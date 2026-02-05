import { AppNavbar } from "@/components/app/AppNavbar";
import { AppFooter } from "@/components/app/AppFooter";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <AppNavbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        {children}
      </main>
      <AppFooter />
    </div>
  );
}
