"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Zap, Rocket, Shield, MapPin, Sparkles, ArrowRight, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import NewsletterSignup from "@/components/NewsletterSignup";

const fadeInUp: Record<string, any> = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const plans = [
  {
    name: "GMB & Local SEO",
    icon: MapPin,
    price: "₹15,000",
    period: "/year",
    description: "Perfect for local businesses wanting to dominate their area.",
    gradient: "from-emerald-500 to-teal-500",
    features: [
      "GMB Profile Optimization",
      "Local Citations & Backlinks",
      "Weekly Review Management",
      "Monthly Performance Tracking",
      "Maps Ranking Strategy",
    ],
    cta: "Dominate Locally",
    featured: false,
  },
  {
    name: "Aura Pro Engine",
    icon: Rocket,
    price: "₹24,999",
    period: "/month",
    description: "Best for businesses ready to scale with comprehensive solutions.",
    gradient: "from-aura-500 to-blue-600",
    features: [
      "Custom Website Building",
      "Google & Meta Ads Management",
      "Advanced AEO & SEO",
      "AI Receptionist Bot",
      "Real-time Performance Tracking",
    ],
    cta: "Deploy My Engine",
    featured: true,
    badge: "Best for Growth",
  },
  {
    name: "Enterprise AI",
    icon: Zap,
    price: "Custom",
    period: "/Quote",
    description: "Full-scale enterprise solutions with dedicated support.",
    gradient: "from-purple-500 to-violet-500",
    features: [
      "Specialized AI Agents",
      "Full Business Automation",
      "Multi-Channel Ad Dominance",
      "24/7 Dedicated Support",
      "Custom CRM Integrations",
    ],
    cta: "Scale My Business",
    featured: false,
  },
];

const PricingPage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-aura-950">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-aura-50 dark:from-aura-950 dark:via-aura-900 dark:to-black">
        <div className="absolute inset-0 bg-grid opacity-[0.03] dark:opacity-[0.05]" />
        <div className="container-main relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge mb-4">Pricing</div>
            <h1 className="text-display-md sm:text-display-xl font-bold text-slate-900 dark:text-white mb-6">
              Premium Services,{" "}
              <span className="gradient-text">Flexible Pricing</span>
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Deploy elite AI & marketing systems at competitive rates. Choose the plan that fits your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="pb-20 lg:pb-28 -mt-8">
        <div className="container-main">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeInUp} custom={i}
                className={`relative rounded-2xl border-2 p-6 lg:p-8 transition-all duration-300 hover:-translate-y-2 ${
                  plan.featured
                    ? "border-aura-500 dark:border-aura-400 bg-white dark:bg-slate-900 shadow-xl shadow-aura-500/10 scale-105 lg:scale-110"
                    : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-aura-500 to-emerald-500 px-4 py-1 shadow-lg">
                    <Sparkles size={12} className="text-white" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">{plan.badge}</span>
                  </div>
                )}

                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${plan.gradient} shadow-lg mb-4`}>
                  <plan.icon size={22} className="text-white" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{plan.name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-slate-900 dark:text-white">{plan.price}</span>
                  {plan.period && <span className="text-sm text-slate-400 dark:text-slate-500 ml-1">{plan.period}</span>}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                      <Check size={16} className="text-emerald-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 group ${
                    plan.featured
                      ? "bg-gradient-to-r from-aura-500 to-emerald-500 text-white shadow-lg shadow-aura-500/20 hover:shadow-xl hover:-translate-y-0.5"
                      : "border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-r from-aura-950 via-aura-900 to-slate-900 dark:from-black dark:via-aura-950 dark:to-black">
        <div className="container-main relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-display-sm sm:text-display-md text-white font-bold mb-4">Not Sure Which Plan?</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-lg mx-auto">Book a free consultation and we&apos;ll recommend the perfect solution for your business.</p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-aura-500 to-emerald-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-aura-500/30 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 group">
              Book Free Consultation
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <FAQSection />
      <NewsletterSignup />
      <Footer />
    </main>
  );
};

export default PricingPage;
