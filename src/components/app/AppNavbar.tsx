"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SquaresFour,
  Database,
  PaperPlaneTilt,
  GearSix,
  List,
  X,
  SignOut,
} from "@phosphor-icons/react";
import { useState } from "react";
import { cn } from "@/lib/utils/cn";

const navLinks = [
  { href: "/dashboard", label: "Dashboard", icon: SquaresFour },
  { href: "/data", label: "Data", icon: Database },
  { href: "/respond", label: "Respond", icon: PaperPlaneTilt },
];

export function AppNavbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname?.startsWith(path);

  const handleSignOut = async () => {
    // TODO: Implement sign out with Supabase
    window.location.href = "/login";
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Company logo & brand name */}
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-stack-3 flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="font-semibold text-gray-900 hidden sm:block">
              Metrics
            </span>
          </Link>

          {/* Navigation + Settings - right aligned */}
          <nav className="flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "bg-primary-100 text-primary"
                      : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                  )}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" weight="duotone" />
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/settings"
              aria-label="Settings"
              aria-current={isActive("/settings") ? "page" : undefined}
              className={cn(
                "p-2 rounded-lg transition-colors",
                isActive("/settings")
                  ? "bg-primary-100 text-primary"
                  : "text-gray-500 hover:bg-gray-50 hover:text-primary"
              )}
            >
              <GearSix className="w-5 h-5" aria-hidden="true" weight="duotone" />
            </Link>

            <button
              onClick={handleSignOut}
              className="p-2 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-red-600 transition-colors"
              aria-label="Sign out"
            >
              <SignOut className="w-5 h-5" aria-hidden="true" weight="duotone" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-50"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" weight="bold" />
              ) : (
                <List className="w-5 h-5" weight="bold" />
              )}
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white animate-slide-up">
          <nav className="px-4 py-3 space-y-1" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "bg-primary-100 text-primary"
                      : "text-gray-600 hover:bg-gray-50"
                  )}
                >
                  <Icon className="w-5 h-5" weight="duotone" />
                  {link.label}
                </Link>
              );
            })}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleSignOut();
              }}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 w-full transition-colors"
            >
              <SignOut className="w-5 h-5" weight="duotone" />
              Sign Out
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
