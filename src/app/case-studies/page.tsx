"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp, Users, Globe, DollarSign, BarChart3, Award,
  Stethoscope, Wallet, MessageSquare, ArrowRight, Sparkles,
  CheckCircle2, Target, Clock, ArrowUpRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSignup from "@/components/NewsletterSignup";

const fadeInUp: Record<string, any> = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.05, ease: "easeOut" },
  }),
};

const caseStudies = [
  {
    tag: "Healthcare",
    tagColor: "from-emerald-500 to-teal-500",
    icon: Stethoscope,
    title: "Dental Clinic Transformation",
    subtitle: "Complete Digital Marketing & AI Automation Overhaul",
    metrics: [
      { value: "300%", label: "Increase in Patient Enquiries" },
      { value: "Top 3", label: "Google Rankings" },
      { value: "40+", label: "Monthly Qualified Leads" },
    ],
    description: "A premier dental clinic struggling with limited patient acquisition and high competition. We implemented a comprehensive digital marketing strategy combined with AI-powered automation systems to transform their online presence and patient acquisition funnel.",
    results: [
      "Achieved GMB domination and SEO ranking, resulting in consistent flow of high-value patients",
      "Implemented AI receptionist agents that handle 80% of appointment scheduling without human intervention",
      "Reduced patient acquisition cost by 40% through targeted digital campaigns",
      "Increased average patient consultation value by 25% through upselling strategies",
      "Improved online reputation with 4.8-star average rating across all platforms",
    ],
  },
  {
    tag: "Finance",
    tagColor: "from-aura-500 to-blue-600",
    icon: Wallet,
    title: "Finance Company Lead Generation",
    subtitle: "Meta Ads Lead Generation Funnel Implementation",
    metrics: [
      { value: "92%", label: "Lead Quality" },
      { value: "-35%", label: "Cost Per Lead" },
      { value: "500+", label: "Qualified Investment Leads" },
    ],
    description: "A financial services company struggling to generate qualified leads while maintaining profitability. We designed and implemented a sophisticated Meta Ads lead generation funnel that delivers highly qualified investment leads while significantly reducing customer acquisition costs.",
    results: [
      "Implemented a Meta Ads lead generation funnel that delivered highly qualified investment leads",
      "Achieved 92% lead quality through AI-powered lead scoring and qualification",
      "Reduced cost per lead by 35% through optimized targeting and conversion funnels",
      "Generated 500+ qualified investment leads monthly",
      "Improved lead-to-customer conversion rate by 45%",
    ],
  },
  {
    tag: "AI Automation",
    tagColor: "from-purple-500 to-violet-500",
    icon: MessageSquare,
    title: "AI Automation Implementation",
    subtitle: "WhatsApp Booking Bot & Lead Management System",
    metrics: [
      { value: "-80%", label: "Booking Time" },
      { value: "24/7", label: "Availability" },
      { value: "10X", label: "ROI" },
    ],
    description: "A service-based business looking to scale operations while reducing manual workload. We built a comprehensive AI automation system including a WhatsApp booking bot and intelligent lead management platform.",
    results: [
      "Built a WhatsApp booking bot that handles 80% of appointment scheduling without human intervention",
      "Reduced booking processing time by 80% through AI automation",
      "Achieved 24/7 customer service availability with instant responses",
      "Delivered 10X ROI through reduced labor costs and increased booking efficiency",
      "Improved customer satisfaction with instant booking confirmations and reminders",
    ],
  },
];

const comparisonData = {
  before: {
    label: "Traditional Approach",
    items: [
      { metric: "Monthly Leads", value: "5-10" },
      { metric: "Google Ranking", value: "Pages 3-10" },
      { metric: "Cost per Lead", value: "$150-300" },
      { metric: "Conversion Rate", value: "2-5%" },
      { metric: "Manual Work", value: "40+ hrs/week" },
    ],
  },
  after: {
    label: "AuraDigital Results",
    items: [
      { metric: "Monthly Leads", value: "40-50" },
      { metric: "Google Ranking", value: "Top 3" },
      { metric: "Cost per Lead", value: "$45-75" },
      { metric: "Conversion Rate", value: "15-25%" },
      { metric: "Manual Work", value: "2-4 hrs/week" },
    ],
  },
};

const CaseStudiesPage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-aura-950">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-aura-50 dark:from-aura-950 dark:via-aura-900 dark:to-black">
        <div className="absolute inset-0 bg-grid opacity-[0.03] dark:opacity-[0.05]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-aura-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="container-main relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge mb-4">Case Studies</div>
            <h1 className="text-display-md sm:text-display-xl font-bold text-slate-900 dark:text-white mb-6">
              Proven Results &{" "}
              <span className="gradient-text">Success Stories</span>
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Discover how AuraDigital Services has transformed businesses through data-driven digital marketing and AI-powered solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Overview */}
      <section className="py-12 bg-white dark:bg-aura-950">
        <div className="container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { value: "300%", label: "Average Enquiry Growth", icon: TrendingUp, desc: "Across multiple industries" },
              { value: "Top 3", label: "Google Rankings", icon: Globe, desc: "Average position improvement" },
              { value: "50K+", label: "Leads Generated", icon: Users, desc: "Qualified leads per month" },
              { value: "200%", label: "Traffic Growth", icon: BarChart3, desc: "Organic & paid traffic increase" },
            ].map((m) => (
              <div key={m.label} className="card-premium p-5 text-center">
                <m.icon size={24} className="text-aura-500 mx-auto mb-2" />
                <p className="text-2xl font-bold gradient-text">{m.value}</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white mt-1">{m.label}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.map((cs, index) => (
        <section key={cs.title} className={`section-padding ${index % 2 === 0 ? "bg-white dark:bg-aura-950" : "bg-slate-50 dark:bg-aura-950/50"}`}>
          <div className="container-main">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Visual */}
              <div className="lg:col-span-2">
                <div className="card-premium p-8 text-center">
                  <div className={`inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${cs.tagColor} shadow-xl mb-4`}>
                    <cs.icon size={36} className="text-white" />
                  </div>
                  <div className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${cs.tagColor} px-3 py-1 mb-3`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white">{cs.tag}</span>
                  </div>
                  <div className="space-y-4 mt-4">
                    {cs.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-2xl font-bold gradient-text">{m.value}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3">
                <h2 className="text-display-sm font-bold text-slate-900 dark:text-white mb-2">{cs.title}</h2>
                <p className="text-sm text-aura-500 font-medium mb-4">{cs.subtitle}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">{cs.description}</p>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-wider">Key Results:</h4>
                <ul className="space-y-3">
                  {cs.results.map((r) => (
                    <li key={r} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-600 dark:text-slate-300">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Before/After Comparison */}
      <section className="section-padding bg-white dark:bg-aura-950">
        <div className="container-main">
          <div className="section-header">
            <div className="badge mb-4">Comparison</div>
            <h2>Before & After</h2>
            <p>See the dramatic transformation our clients experience with AuraDigital solutions.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[comparisonData.before, comparisonData.after].map((data, i) => (
              <div key={data.label} className={`card-premium ${i === 1 ? "border-aura-200 dark:border-aura-700 bg-aura-50/50 dark:bg-aura-900/30" : ""}`}>
                <div className={`text-sm font-bold uppercase tracking-wider mb-4 ${i === 1 ? "text-aura-600 dark:text-aura-400" : "text-slate-400"}`}>
                  {data.label}
                </div>
                <div className="space-y-3">
                  {data.items.map((item) => (
                    <div key={item.metric} className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                      <span className="text-sm text-slate-600 dark:text-slate-400">{item.metric}</span>
                      <span className={`text-sm font-bold ${i === 1 ? "text-emerald-600 dark:text-emerald-400" : "text-slate-900 dark:text-white"}`}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* CTA */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-r from-aura-950 via-aura-900 to-slate-900 dark:from-black dark:via-aura-950 dark:to-black">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-aura-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container-main relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-display-sm sm:text-display-md text-white font-bold mb-4">Ready to Achieve Similar Results?</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-lg mx-auto">Let&apos;s discuss how we can transform your business with the same proven strategies and AI-powered solutions.</p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-aura-500 to-indigo-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-aura-500/30 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 group">
              Book Free Consultation
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <NewsletterSignup />
      <Footer />
    </main>
  );
};

export default CaseStudiesPage;
