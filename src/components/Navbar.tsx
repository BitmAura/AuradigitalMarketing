"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface NavLink {
  href?: string;
  label: string;
  dropdownItems?: { href: string; label: string }[];
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  {
    label: "Industries",
    dropdownItems: [
      { href: "/industries/healthcare", label: "Healthcare" },
      { href: "/industries/finance", label: "Finance & Wealth" },
      { href: "/industries/real-estate", label: "Real Estate" },
      { href: "/industries/ecommerce", label: "E-commerce" },
      { href: "/industries/tech-saas", label: "Tech & SaaS" },
      { href: "/industries/education", label: "Education" },
    ],
  },
  { href: "/ai", label: "AI Solutions" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isParentActive = (items: { href: string }[]) => {
    return items.some((item) => pathname.startsWith(item.href));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-white/90 dark:bg-aura-950/90 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container-main flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center gap-3 group">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl overflow-hidden bg-white shadow-md shadow-aura-500/10 transition-transform duration-300 group-hover:scale-105 border border-slate-100 dark:border-slate-800">
            <img src="/logo.jpg" alt="AuraDigital Logo" className="h-full w-full object-cover" />
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              AuraDigital
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500">
              Services
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            if (link.dropdownItems) {
              return (
                <div
                  key={link.label}
                  className="relative py-2"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isParentActive(link.dropdownItems)
                        ? "text-aura-600 dark:text-aura-400 bg-aura-50 dark:bg-aura-950/50"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50"
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""}`} />
                  </button>
                  {/* Dropdown Panel */}
                  <div
                    className={`absolute left-0 mt-1 w-56 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/95 dark:bg-aura-950/95 backdrop-blur-xl shadow-xl py-2 transition-all duration-200 z-50 ${
                      openDropdown === link.label
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-2 invisible pointer-events-none"
                    }`}
                  >
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                          isActive(item.href)
                            ? "text-aura-600 dark:text-aura-400 bg-aura-50/50 dark:bg-aura-900/20"
                            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href!}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(link.href!)
                    ? "text-aura-600 dark:text-aura-400 bg-aura-50 dark:bg-aura-950/50"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="relative flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <Sun size={18} className="animate-fade-in" />
            ) : (
              <Moon size={18} className="animate-fade-in" />
            )}
          </button>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-aura-500 to-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-aura-500/20 hover:shadow-xl hover:shadow-aura-500/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            Contact Us
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 z-40 h-full w-full max-w-sm bg-white dark:bg-aura-950 border-l border-slate-200 dark:border-slate-800 shadow-2xl transition-transform duration-500 ease-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 pb-8 px-6">
          <nav className="flex-1 space-y-1 overflow-y-auto">
            {navLinks.map((link) => {
              if (link.dropdownItems) {
                return (
                  <div key={link.label} className="space-y-1">
                    <button
                      onClick={() => setMobileDropdownOpen(mobileDropdownOpen === link.label ? null : link.label)}
                      className={`flex items-center justify-between w-full px-4 py-3.5 text-base font-medium rounded-xl transition-all duration-200 ${
                        isParentActive(link.dropdownItems)
                          ? "text-aura-600 dark:text-aura-400 bg-aura-50 dark:bg-aura-900/50"
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          mobileDropdownOpen === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileDropdownOpen === link.label && (
                      <div className="pl-4 space-y-1 border-l border-slate-200 dark:border-slate-800 ml-4 py-1">
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                              isActive(item.href)
                                ? "text-aura-600 dark:text-aura-400 bg-aura-50/50 dark:bg-aura-900/20"
                                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50"
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href!}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3.5 text-base font-medium rounded-xl transition-all duration-200 ${
                    isActive(link.href!)
                      ? "text-aura-600 dark:text-aura-400 bg-aura-50 dark:bg-aura-900/50"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-aura-500 to-emerald-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-aura-500/20 transition-all duration-300 hover:shadow-xl active:scale-[0.98]"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

