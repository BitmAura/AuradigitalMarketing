import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const footerLinks = {
  services: [
    { href: "/services", label: "Digital Marketing" },
    { href: "/services", label: "SEO & AEO" },
    { href: "/services", label: "AI Automation" },
    { href: "/services", label: "SaaS Development" },
  ],
  industries: [
    { href: "/industries/healthcare", label: "Healthcare" },
    { href: "/industries/finance", label: "Finance & Wealth" },
    { href: "/industries/real-estate", label: "Real Estate" },
    { href: "/industries/ecommerce", label: "E-commerce" },
    { href: "/industries/tech-saas", label: "Tech & SaaS" },
    { href: "/industries/education", label: "Education" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/blog", label: "Blog" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ],
  support: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/contact", label: "FAQ" },
    { href: "/contact", label: "Support" },
    { href: "/contact", label: "Book Consultation" },
  ],
};

const Footer = () => {
  return (
    <footer className="relative bg-slate-50 dark:bg-aura-950 border-t border-slate-200 dark:border-slate-800">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-aura-500 via-emerald-500 to-aura-500" />

      <div className="container-main pt-16 pb-8 lg:pt-24">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 group mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl overflow-hidden bg-white shadow-md shadow-aura-500/10 border border-slate-100 dark:border-slate-800">
                <img src="/logo.jpg" alt="AuraDigital Logo" className="h-full w-full object-cover" />
              </div>
              <div>
                <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
                  AuraDigital
                </span>
                <span className="block text-[9px] font-medium uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500">
                  Services
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 max-w-xs">
              AI-powered digital marketing and automation agency helping businesses grow through innovative digital solutions.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:2022auradigital@gmail.com"
                className="flex items-center gap-2.5 text-sm text-slate-500 dark:text-slate-400 hover:text-aura-600 dark:hover:text-aura-400 transition-colors group"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-aura-50 dark:group-hover:bg-aura-900/50 transition-colors">
                  <Mail size={14} className="text-slate-400 dark:text-slate-500 group-hover:text-aura-500" />
                </span>
                2022auradigital@gmail.com
              </a>
              <a
                href="tel:9148868413"
                className="flex items-center gap-2.5 text-sm text-slate-500 dark:text-slate-400 hover:text-aura-600 dark:hover:text-aura-400 transition-colors group"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-aura-50 dark:group-hover:bg-aura-900/50 transition-colors">
                  <Phone size={14} className="text-slate-400 dark:text-slate-500 group-hover:text-aura-500" />
                </span>
                +91 91488 68413
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-aura-600 dark:hover:text-aura-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
              Industries
            </h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-aura-600 dark:hover:text-aura-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-aura-600 dark:hover:text-aura-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-aura-600 dark:hover:text-aura-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400 dark:text-slate-500">
              &copy; {new Date().getFullYear()} AuraDigital Services. All rights reserved. Built by{" "}
              <span className="font-medium text-slate-600 dark:text-slate-400">Dr. Pradeep Kumar</span>.
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              AI-Powered Digital Growth Partner
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
