"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Globe,
  BarChart3,
  Search,
  MapPin,
  MessageSquare,
  FileText,
  CreditCard,
  Video,
  Mail,
  Stethoscope,
  Building2,
  Layout,
  Store,
  Calendar,
  Shield,
  Database,
  Workflow,
  Target,
  Volume2,
  Cpu,
  Heart,
  Package,
  Cloud,
  Sparkles,
  ArrowUpRight,
  Star,
  Play,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import NewsletterSignup from "@/components/NewsletterSignup";

const fadeInUp: Record<string, any> = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const staggerContainer: Record<string, any> = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const services = [
  {
    category: "Digital Marketing",
    icon: TrendingUp,
    items: [
      { icon: Search, label: "Search Engine Optimization (SEO)" },
      { icon: MapPin, label: "Local SEO & GMB Optimization" },
      { icon: TrendingUp, label: "Generative Engine Optimization (GEO)" },
      { icon: MessageSquare, label: "Answer Engine Optimization (AEO)" },
      { icon: Users, label: "Social Media Marketing" },
      { icon: FileText, label: "Content Marketing" },
      { icon: BarChart3, label: "Performance Marketing" },
      { icon: CreditCard, label: "Meta & Google Ads Management" },
      { icon: Video, label: "YouTube Marketing" },
      { icon: Mail, label: "Email & WhatsApp Marketing" },
    ],
  },
  {
    category: "Website Development",
    icon: Globe,
    items: [
      { icon: Stethoscope, label: "Healthcare Websites" },
      { icon: Building2, label: "Corporate Websites" },
      { icon: Layout, label: "Landing Pages" },
      { icon: Store, label: "E-commerce Websites" },
      { icon: Calendar, label: "Appointment Booking Systems" },
      { icon: Shield, label: "Website Maintenance" },
    ],
  },
  {
    category: "AI & Automation",
    icon: Cpu,
    items: [
      { icon: MessageSquare, label: "AI Chatbots & Voice Agents" },
      { icon: Users, label: "AI Lead Generation Systems" },
      { icon: Database, label: "CRM Automation" },
      { icon: Workflow, label: "Workflow Automation" },
      { icon: Target, label: "Marketing Automation" },
      { icon: Cpu, label: "Custom AI Solutions" },
    ],
  },
  {
    category: "Software & SaaS",
    icon: Cloud,
    items: [
      { icon: Database, label: "Custom CRM Development" },
      { icon: Users, label: "Employee Management Systems" },
      { icon: Calendar, label: "Appointment Management" },
      { icon: Heart, label: "Clinic Management Software" },
      { icon: Package, label: "Inventory Management" },
      { icon: Cloud, label: "Custom SaaS Platforms" },
    ],
  },
];

const stats = [
  { value: "300%", label: "Avg. Lead Growth", icon: TrendingUp },
  { value: "Top 3", label: "Google Ranking Achieved", icon: Globe },
  { value: "50K+", label: "Qualified Leads Generated", icon: Users },
  { value: "200%", label: "Website Traffic Growth", icon: BarChart3 },
];

const partners = [
  "Healthcare", "Finance", "Real Estate", "E-commerce",
  "Technology", "Education", "Professional Services",
];

const Home = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-aura-950">
      <Navbar />

      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-aura-50 dark:from-aura-950 dark:via-aura-900 dark:to-black">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-aura-500/10 dark:bg-aura-500/5 blur-3xl animate-float" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-dots opacity-40 dark:opacity-20" />
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-grid opacity-[0.03] dark:opacity-[0.05]" />
        </div>

        <div className="container-main relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-xl"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 rounded-full border border-aura-200 dark:border-aura-800 bg-white dark:bg-aura-900/50 px-4 py-1.5 mb-6 shadow-sm"
              >
                <Sparkles size={14} className="text-aura-500" />
                <span className="text-xs font-semibold uppercase tracking-wider text-aura-600 dark:text-aura-400">
                  AI-Powered Growth Solutions
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-display-lg sm:text-display-xl lg:text-display-2xl font-bold text-slate-900 dark:text-white mb-6 leading-[1.05]"
              >
                Transforming Businesses Through{" "}
                <span className="gradient-text">Digital Marketing, AI & Automation</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 mb-8 leading-relaxed max-w-lg"
              >
                We help businesses attract more customers, automate operations, and scale efficiently with data-driven marketing and intelligent digital solutions.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Link
                  href="/contact"
                  className="btn-primary text-base px-8 py-4 group"
                >
                  Book Free Consultation
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary text-base px-8 py-4"
                >
                  View Services
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                variants={fadeInUp}
                className="mt-12 flex flex-wrap gap-6"
              >
                {[
                  { icon: Globe, text: "Multi-Industry Expertise" },
                  { icon: Sparkles, text: "AI-Powered Growth Solutions" },
                  { icon: Globe, text: "End-to-End Digital Transformation" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-aura-50 dark:bg-aura-900/50">
                      <item.icon size={15} className="text-aura-500" />
                    </div>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      {item.text}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block relative"
            >
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="card-premium p-5"
                  >
                    <stat.icon className="text-aura-500 mb-2" size={20} />
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -left-8 -bottom-4 flex items-center gap-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-4"
              >
                <div className="flex -space-x-2">
                  {["SJ", "MC", "PS"].map((init) => (
                    <div
                      key={init}
                      className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white dark:border-slate-900 bg-gradient-to-br from-aura-500 to-indigo-500 text-[10px] font-bold text-white"
                    >
                      {init}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Trusted by 100+ businesses
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ PARTNER INDUSTRIES ============ */}
      <section className="py-12 border-y border-slate-100 dark:border-slate-800 bg-white dark:bg-aura-950">
        <div className="container-main">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">
            Trusted by Businesses Across Industries
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((industry) => (
              <span
                key={industry}
                className="text-sm font-semibold text-slate-300 dark:text-slate-600 hover:text-aura-500 dark:hover:text-aura-400 transition-colors"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES OVERVIEW ============ */}
      <section className="section-padding bg-white dark:bg-aura-950">
        <div className="container-main">
          <div className="section-header">
            <div className="badge mb-4">Our Services</div>
            <h2>Comprehensive Digital Marketing & AI Solutions</h2>
            <p>
              End-to-end digital transformation services designed to accelerate your business growth.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-aura-500 to-indigo-500 shadow-lg shadow-aura-500/20">
                    <category.icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {category.items.map((item, i) => (
                    <motion.div
                      key={item.label}
                      variants={fadeInUp}
                      custom={i}
                      className="group flex items-center gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3.5 hover:border-aura-200 dark:hover:border-aura-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-aura-50 dark:bg-aura-900/50 group-hover:bg-aura-100 dark:group-hover:bg-aura-900 transition-colors">
                        <item.icon size={16} className="text-aura-500" />
                      </div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-aura-600 dark:group-hover:text-aura-400 transition-colors">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 text-center"
          >
            <Link
              href="/services"
              className="btn-secondary text-base px-8 py-4 group"
            >
              View All Services in Detail
              <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============ WHY AURADIGITAL ============ */}
      <section className="section-padding bg-slate-50 dark:bg-aura-950/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-aura-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="badge mb-4">
                Why AuraDigital
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-display-sm sm:text-display-md lg:text-display-lg font-bold text-slate-900 dark:text-white mb-6">
                AI-Powered Growth Engine for Your Business
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                We don&apos;t just market your business — we build intelligent systems that automate growth, optimize conversions, and deliver measurable results.
              </motion.p>
              <motion.div variants={fadeInUp} className="space-y-4">
                {[
                  "Custom AI solutions tailored to your industry",
                  "Data-driven strategies with transparent reporting",
                  "End-to-end digital transformation expertise",
                  "Multi-industry expertise across sectors",
                  "Proven track record with 300%+ average ROI",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={fadeInUp} className="mt-8">
                <Link href="/about" className="btn-primary text-base px-8 py-4 group">
                  Learn More About Us
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "50+", label: "Clients Served", desc: "Across 7+ industries" },
                { value: "5+", label: "Years Experience", desc: "Digital transformation" },
                { value: "95%", label: "Client Retention", desc: "Satisfied clients stay" },
                { value: "24/7", label: "Support Available", desc: "Round-the-clock" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  custom={i}
                  className="card-premium p-6 text-center"
                >
                  <p className="text-3xl font-bold gradient-text mb-1">{stat.value}</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{stat.label}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{stat.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <TestimonialsSection />

      {/* ============ CTA SECTION ============ */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-aura-950 via-aura-900 to-slate-900 dark:from-black dark:via-aura-950 dark:to-black" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-aura-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container-main relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-2xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full border border-aura-400/20 bg-aura-400/10 px-4 py-1.5 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-aura-300">
                Start Your Growth Journey
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-display-sm sm:text-display-md text-white font-bold mb-4">
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-300 mb-8 max-w-lg mx-auto">
              Let&apos;s discuss how our AI-powered solutions can help you achieve your growth goals. Book a free consultation today.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-aura-500 to-indigo-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-aura-500/30 hover:shadow-2xl hover:shadow-aura-500/40 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                Book Free Consultation
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/50 px-8 py-4 text-base font-semibold text-slate-200 hover:bg-slate-800 hover:border-slate-600 hover:text-white transition-all duration-300"
              >
                View Case Studies
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <FAQSection />

      {/* ============ NEWSLETTER ============ */}
      <NewsletterSignup />

      <Footer />
    </main>
  );
};

export default Home;
