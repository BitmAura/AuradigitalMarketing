"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Building2,
  Heart,
  Package,
  TrendingUp,
  Award,
  Clock,
  MapPin,
  UserCheck,
  Calendar,
  Globe,
  Shield,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Star,
  Activity,
  PlusCircle,
  Bone,
  Brain,
  Eye,
  Microscope,
  FileSpreadsheet,
  Briefcase,
  ShieldCheck,
  Home,
  Cpu,
  Calculator,
  Percent,
  ShoppingBag,
  Store,
  Layout,
  Target,
  Users,
  Mail,
  MessageSquare,
  Cloud,
  Database,
  Workflow,
  FileText,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSignup from "@/components/NewsletterSignup";

// Define the structure of our industry vertical configuration
interface IndustryData {
  slug: string;
  badge: string;
  badgeIcon: any;
  heroTitle: string;
  gradientText: string;
  heroDesc: string;
  themeColor: string; // Used to customize color scheme
  colors: {
    bg: string;
    iconBg: string;
    btnPrimary: string;
    shadow: string;
    textAccent: string;
    badgeBorder: string;
    badgeBg: string;
    badgeText: string;
  };
  metrics: { value: string; label: string }[];
  typesTitle: string;
  types: { name: string; desc: string; icon: any }[];
  featuresTitle: string;
  features: { title: string; desc: string; icon: any }[];
  complianceTitle: string;
  complianceDesc: string;
  complianceItems: string[];
  complianceStats: { title: string; desc: string; icon: any }[];
}

const industriesData: Record<string, IndustryData> = {
  healthcare: {
    slug: "healthcare",
    badge: "Healthcare Solutions",
    badgeIcon: Heart,
    heroTitle: "Specialized Healthcare",
    gradientText: "Digital Marketing & Technology",
    heroDesc: "Transform your healthcare practice with AI-powered digital marketing, automation, and technology solutions designed specifically for medical professionals.",
    themeColor: "emerald",
    colors: {
      bg: "from-slate-50 via-white to-emerald-50 dark:from-aura-950 dark:via-aura-900 dark:to-black",
      iconBg: "from-emerald-500 to-teal-500",
      btnPrimary: "from-emerald-500 to-teal-500 bg-gradient-to-r hover:shadow-emerald-500/40 shadow-emerald-500/30",
      shadow: "shadow-emerald-500/20",
      textAccent: "text-emerald-500 dark:text-emerald-400",
      badgeBorder: "border-emerald-200 dark:border-emerald-800",
      badgeBg: "bg-emerald-50 dark:bg-emerald-900/50",
      badgeText: "text-emerald-600 dark:text-emerald-400",
    },
    metrics: [
      { value: "300%", label: "Avg. Patient Growth" },
      { value: "40+", label: "Monthly Enquiries" },
      { value: "Top 3", label: "Google Ranking" },
      { value: "95%", label: "Patient Satisfaction" },
    ],
    typesTitle: "Healthcare Specializations We Serve",
    types: [
      { icon: Stethoscope, name: "Dental Clinics", desc: "Attract more patients, manage online reputation, and streamline appointment booking." },
      { icon: Building2, name: "Hospitals & Medical Groups", desc: "Comprehensive digital solutions for patient acquisition, system integrations, and operational efficiency." },
      { icon: Activity, name: "Physiotherapy Centers", desc: "Targeted marketing for physical rehabilitation, injury therapy, and local patient generation." },
      { icon: Bone, name: "Orthopedic & Specialized Clinics", desc: "Specialized strategies to book surgical consults and establish local clinical authority." },
      { icon: Brain, name: "Mental Health & Rehab Centers", desc: "Digital systems that connect individuals discreetly and supportively with therapy and care." },
      { icon: Microscope, name: "Diagnostic Centers & Labs", desc: "Digital channels driving patient footfall for medical imaging, blood tests, and scans." },
      { icon: Eye, name: "Wellness & Preventive Care", desc: "Digital programs targeting wellness retreats, general practice consults, and holistic care." },
    ],
    featuresTitle: "Practice-Growing Digital Features",
    features: [
      { icon: UserCheck, title: "Patient Acquisition Systems", desc: "Custom funnels and campaigns targeting patient inquiries and converting them automatically." },
      { icon: Award, title: "Online Reputation Booster", desc: "Ethical review capture systems generating trust across Google, Healthgrades, and local listings." },
      { icon: MapPin, title: "Google Maps Domination", desc: "Advanced local optimization showing your clinic first when patients search for immediate care near them." },
      { icon: Calendar, title: "Smart Scheduling Engine", desc: "Integrate online booking modules with automated SMS/WhatsApp alerts that reduce patient no-shows." },
      { icon: Globe, title: "Modern Clinical Web Presence", desc: "Fast, accessibility-compliant web pages highlighting services, practitioner bios, and patient portals." },
      { icon: Shield, title: "HIPAA Compliant Integrity", desc: "Encrypted landing pages and forms protecting confidential patient healthcare records." },
    ],
    complianceTitle: "HIPAA-Compliant Technology & Security",
    complianceDesc: "Patient trust and legal security are non-negotiable in healthcare. We configure all web pages and booking channels to conform to data safety standards.",
    complianceItems: [
      "Secure, SSL-encrypted patient request forms",
      "HIPAA-compliant integration with EHR and booking software",
      "Encrypted cloud backups for intake information",
      "Regular web accessibility audits (ADA/WCAG compliance)",
      "Strict data privacy standards for tracking pixels and analytics",
    ],
    complianceStats: [
      { icon: Shield, title: "Security First", desc: "Confidential data encryption" },
      { icon: Clock, title: "Zero Lag Support", desc: "Priority healthcare response" },
      { icon: TrendingUp, title: "Trackable ROI", desc: "Transparent compliance analytics" },
      { icon: Award, title: "Certified Setup", desc: "HIPAA-aligned digital pipelines" },
    ],
  },
  finance: {
    slug: "finance",
    badge: "Financial Growth Solutions",
    badgeIcon: TrendingUp,
    heroTitle: "Digital Performance for",
    gradientText: "Finance & Wealth Management",
    heroDesc: "Accelerate high-value lead generation, foster client trust, and automate workflow operations with secure, regulation-ready digital marketing.",
    themeColor: "blue",
    colors: {
      bg: "from-slate-50 via-white to-blue-50 dark:from-aura-950 dark:via-aura-900 dark:to-black",
      iconBg: "from-blue-600 to-indigo-600",
      btnPrimary: "from-blue-600 to-indigo-600 bg-gradient-to-r hover:shadow-blue-500/40 shadow-blue-500/30",
      shadow: "shadow-blue-500/20",
      textAccent: "text-blue-600 dark:text-blue-400",
      badgeBorder: "border-blue-200 dark:border-blue-800",
      badgeBg: "bg-blue-50 dark:bg-blue-900/50",
      badgeText: "text-blue-600 dark:text-blue-400",
    },
    metrics: [
      { value: "45%", label: "Average CPL Reduction" },
      { value: "50+", label: "High-Value Enquiries/mo" },
      { value: "Top 3", label: "Local Search Dominance" },
      { value: "98%", label: "Client Retention Rate" },
    ],
    typesTitle: "Financial Verticals We Support",
    types: [
      { icon: FileSpreadsheet, name: "CPA & Accounting Firms", desc: "Attract commercial corporate tax clients and automate peak-season appointment booking." },
      { icon: TrendingUp, name: "Wealth Management Providers", desc: "Target high-net-worth individuals using high-authority SEO and credibility marketing." },
      { icon: ShieldCheck, name: "Insurance Brokerages", desc: "Drive qualified policy quotes and automate renewal reminders via email/WhatsApp." },
      { icon: Home, name: "Mortgage & Lending Agencies", desc: "Capture loan applicants using localized search campaigns and digital qualification forms." },
      { icon: Cpu, name: "Fintech & Wealth Startups", desc: "Drive customer acquisition, app installs, and optimize digital subscription checkouts." },
      { icon: Calculator, name: "Tax Consultants & Advisors", desc: "Dominate seasonal local searches and streamline online document submission pages." },
    ],
    featuresTitle: "Secure Financial Growth Features",
    features: [
      { icon: Target, title: "High-Net-Worth Targeting", desc: "Demographic search and social campaigns customized for affluent client profiles." },
      { icon: Workflow, title: "Client Onboarding Automation", desc: "Replace paperwork with encrypted online intake forms and automated client portal setup." },
      { icon: MapPin, title: "Local Financial Authority", desc: "Rank for high-intent searches like 'wealth advisor near me' or 'CPA in [city]'." },
      { icon: Award, title: "Compliant Reputation Engine", desc: "Generate client reviews ethically in accordance with SEC advertising rules." },
      { icon: Mail, title: "Client Engagement Flows", desc: "Nurturing newsletters and market updates showing expertise to keep clients sticky." },
      { icon: Shield, title: "SSL Security Protocols", desc: "Ensure all data transactions are completely encrypted and secure from end to end." },
    ],
    complianceTitle: "Data Privacy & Regulatory Adherence",
    complianceDesc: "Financial marketing requires strict adherence to advertising regulations and privacy laws. We construct secure systems that uphold client trust.",
    complianceItems: [
      "SEC and FINRA compliant marketing copy and disclosures",
      "SSL-encrypted client intake systems",
      "Database configurations adhering to local data privacy laws",
      "Secure integrations with financial CRMs and calendars",
      "Audit logs for automated email and SMS outreach pipelines",
    ],
    complianceStats: [
      { icon: Shield, title: "Vault-Class Safety", desc: "Data protection and encryption" },
      { icon: Clock, title: "Rapid Alerting", desc: "Automated instant notifications" },
      { icon: TrendingUp, title: "Performance Stats", desc: "Track lead generation in real-time" },
      { icon: Award, title: "Advisory Compliant", desc: "Adherence to regulatory messaging" },
    ],
  },
  "real-estate": {
    slug: "real-estate",
    badge: "Real Estate & Construction",
    badgeIcon: Home,
    heroTitle: "Dominate the Market in",
    gradientText: "Real Estate & Development",
    heroDesc: "Acquire property buyers, qualify home sellers, and showcase your listings with virtual-ready landing pages, local SEO, and CRM automation.",
    themeColor: "amber",
    colors: {
      bg: "from-slate-50 via-white to-amber-50 dark:from-aura-950 dark:via-aura-900 dark:to-black",
      iconBg: "from-amber-500 to-orange-500",
      btnPrimary: "from-amber-500 to-orange-500 bg-gradient-to-r hover:shadow-amber-500/40 shadow-amber-500/30",
      shadow: "shadow-amber-500/20",
      textAccent: "text-amber-500 dark:text-amber-400",
      badgeBorder: "border-amber-200 dark:border-amber-800",
      badgeBg: "bg-amber-50 dark:bg-amber-900/50",
      badgeText: "text-amber-600 dark:text-amber-400",
    },
    metrics: [
      { value: "250%", label: "Lead Volume Growth" },
      { value: "60+", label: "Monthly Enquiries" },
      { value: "4.2%", label: "Average Conversion Rate" },
      { value: "150%", label: "Google Maps View Growth" },
    ],
    typesTitle: "Real Estate Sectors We Grow",
    types: [
      { icon: Home, name: "Residential Agencies", desc: "Target home buyers and qualify sellers using local SEO and visual social campaigns." },
      { icon: Building2, name: "Commercial Brokerages", desc: "Market commercial spaces, generate tenant leads, and connect with property investors." },
      { icon: Users, name: "Property Managers", desc: "Automate tenant acquisition pipelines and highlight property services to owners." },
      { icon: Building2, name: "Real Estate Developers", desc: "Launch pre-sales landing pages and generate reservations before construction finishes." },
      { icon: FileText, name: "Valuation & Appraisals", desc: "Establish local authority and gather inbound valuation requests using targeted search terms." },
    ],
    featuresTitle: "High-Converting Real Estate Tools",
    features: [
      { icon: Globe, title: "Property Landing Pages", desc: "Stunning single-property landing pages featuring media layouts, map locations, and agent contact." },
      { icon: MapPin, title: "Local Pack Dominance", desc: "Optimize your Google Business Profile to show up when clients search for local top agents." },
      { icon: Target, title: "Hyper-Local Advertising", desc: "Pinpoint ad targeting on Facebook and Google maps specifically pointing to active zip codes." },
      { icon: Workflow, title: "CRM Lead Automation", desc: "Instantly route new website enquiries to the right real estate agent for immediate follow-up." },
      { icon: Calendar, title: "Open House Schedules", desc: "Integrate self-service calendars allowing clients to book private tours or open-house walkthroughs." },
      { icon: Mail, title: "Automated Nurturing Flows", desc: "Send monthly neighborhood market reports and property matches to leads in your database." },
    ],
    complianceTitle: "Brand Reputation & Advertising Standards",
    complianceDesc: "We ensure all digital ads and copy follow Fair Housing standards, protecting your brand reputation while maintaining target efficacy.",
    complianceItems: [
      "Strict compliance with Fair Housing advertising guidelines",
      "Secure lead data collection conforming to privacy rules",
      "Professional listing display & branding consistency",
      "Multi-agent tracking and lead routing automation",
      "ADA-compliant website accessibility standards",
    ],
    complianceStats: [
      { icon: Shield, title: "Brand Guard", desc: "Protected marketing assets" },
      { icon: Clock, title: "Instant Routing", desc: "Real-time agent assignment" },
      { icon: TrendingUp, title: "Growth Index", desc: "Track properties sold/leased" },
      { icon: Award, title: "Fair Ads", desc: "Compliant ad copy targeting" },
    ],
  },
  ecommerce: {
    slug: "ecommerce",
    badge: "E-commerce Growth",
    badgeIcon: ShoppingBag,
    heroTitle: "Scale Revenue & ROI for",
    gradientText: "D2C Brands & E-commerce",
    heroDesc: "Maximize your return on ad spend (ROAS), boost repeat purchases, and design high-converting online stores with custom integrations.",
    themeColor: "violet",
    colors: {
      bg: "from-slate-50 via-white to-violet-50 dark:from-aura-950 dark:via-aura-900 dark:to-black",
      iconBg: "from-violet-600 to-fuchsia-600",
      btnPrimary: "from-violet-600 to-fuchsia-600 bg-gradient-to-r hover:shadow-violet-500/40 shadow-violet-500/30",
      shadow: "shadow-violet-500/20",
      textAccent: "text-violet-500 dark:text-violet-400",
      badgeBorder: "border-violet-200 dark:border-violet-800",
      badgeBg: "bg-violet-50 dark:bg-violet-900/50",
      badgeText: "text-violet-600 dark:text-violet-400",
    },
    metrics: [
      { value: "4x+", label: "Average ROAS" },
      { value: "+180%", label: "Online Sales Growth" },
      { value: "35%", label: "Repeat Purchase Rate" },
      { value: "22%", label: "Cart Recovery Rate" },
    ],
    typesTitle: "Online Retail Sectors We Scale",
    types: [
      { icon: ShoppingBag, name: "D2C Fashion & Apparel Brands", desc: "Launch highly visual storefronts, optimize checkouts, and run creator partnerships." },
      { icon: Store, name: "Specialty Retail Stores", desc: "Optimize product catalogs for Google Shopping feeds and capture high-intent search buyers." },
      { icon: Building2, name: "B2B E-commerce Portals", desc: "Integrate wholesale logins, custom pricing tables, and invoice-on-order options." },
      { icon: Calendar, name: "Subscription Box Services", desc: "Streamline recurring billing setups, customer swap pages, and churn alerts." },
      { icon: Globe, name: "Digital Goods & SaaS Sales", desc: "Deliver purchases instantly with custom license servers and email follow-up funnels." },
    ],
    featuresTitle: "Conversion-Focused Store Technology",
    features: [
      { icon: Layout, title: "Product Page Optimization", desc: "Design high-converting page structures utilizing fast page load times and reviews." },
      { icon: Mail, title: "Abandoned Cart Recovery", desc: "Capture lost revenue automatically using triggers across email, SMS, and WhatsApp." },
      { icon: Target, title: "Advanced Social Ad Systems", desc: "Manage and optimize high-converting campaigns across Meta, TikTok, and Google Ads." },
      { icon: Users, title: "Customer Loyalty Programs", desc: "Set up point trackers, referral tiers, and discounts that boost Customer Lifetime Value." },
      { icon: Package, title: "Real-Time Inventory Sync", desc: "Integrate storefront systems with ERPs and warehouses to ensure accurate stock tallies." },
      { icon: Shield, title: "Core Web Vitals Boost", desc: "Create speed-optimized stores that lower bounce rates and improve SEO rankings." },
    ],
    complianceTitle: "Secure Transactions & Data Privacy (GDPR/CCPA)",
    complianceDesc: "Protect shopper payment records and adhere to international consumer privacy regulations with encrypted transactional pipelines.",
    complianceItems: [
      "PCI-DSS compliant checkouts utilizing Stripe, Shopify, or custom APIs",
      "Full GDPR & CCPA cookie compliance for tracking and ad pixels",
      "SSL encryption for customer profiles and order histories",
      "Automated notifications for transaction tracking and ship updates",
      "Accessible ADA-compliant shopping carts and layouts",
    ],
    complianceStats: [
      { icon: Shield, title: "Secure Pay", desc: "PCI-compliant setups" },
      { icon: Clock, title: "Fast Delivery", desc: "Shipping webhook updates" },
      { icon: TrendingUp, title: "Conversion Index", desc: "Optimized storefront layout" },
      { icon: Award, title: "Data Protection", desc: "GDPR aligned customer databases" },
    ],
  },
  "tech-saas": {
    slug: "tech-saas",
    badge: "Tech & SaaS Scale",
    badgeIcon: Cloud,
    heroTitle: "Acquire Users & Dominate for",
    gradientText: "SaaS & Tech Companies",
    heroDesc: "Drive high-velocity user trials, improve demo-to-paid conversion rates, and capture organic software searches using advanced SEO & AI Optimization.",
    themeColor: "indigo",
    colors: {
      bg: "from-slate-50 via-white to-indigo-50 dark:from-aura-950 dark:via-aura-900 dark:to-black",
      iconBg: "from-indigo-600 to-blue-600",
      btnPrimary: "from-indigo-600 to-blue-600 bg-gradient-to-r hover:shadow-indigo-500/40 shadow-indigo-500/30",
      shadow: "shadow-indigo-500/20",
      textAccent: "text-indigo-500 dark:text-indigo-400",
      badgeBorder: "border-indigo-200 dark:border-indigo-800",
      badgeBg: "bg-indigo-50 dark:bg-indigo-900/50",
      badgeText: "text-indigo-600 dark:text-indigo-400",
    },
    metrics: [
      { value: "25%", label: "Trial-to-Paid Conversion" },
      { value: "+60%", label: "Pipeline Velocity" },
      { value: "-35%", label: "CAC Reduction" },
      { value: "+200%", label: "Organic Traffic Growth" },
    ],
    typesTitle: "Technology Segments We Scale",
    types: [
      { icon: Building2, name: "B2B SaaS Platforms", desc: "Attract enterprise accounts using specialized SEO guides and highly customized LinkedIn ad pipelines." },
      { icon: Shield, name: "IT & Cybersecurity Providers", desc: "Market managed support services, threat testing, and security consultation inquiries." },
      { icon: Cloud, name: "Cloud Solutions Architects", desc: "Generate sales meetings for digital migration and cloud infrastructure consultation." },
      { icon: Globe, name: "Mobile App Startups", desc: "Deploy download campaigns and optimize listings across App Store and Google Play (ASO)." },
      { icon: Database, name: "Managed IT Services (MSP)", desc: "Dominate local searches for corporate IT assistance and package support plans." },
    ],
    featuresTitle: "Scale-Ready Software Marketing",
    features: [
      { icon: Target, title: "Interactive Demo Funnels", desc: "Book and qualify software demonstrations using automated intake criteria fields." },
      { icon: TrendingUp, title: "Answer Engine Optimization (AEO)", desc: "Optimize website structures to serve answers directly inside AI models like ChatGPT." },
      { icon: MessageSquare, title: "AI-Powered Chat Leads", desc: "Interact 24/7 with site visitors, answering questions and logging contact info into CRM." },
      { icon: Workflow, title: "Automatic Lead Syncing", desc: "Seamlessly push new signups to Hubspot, Slack, and email nurture chains in real-time." },
      { icon: FileText, title: "Help Centers & Documentation", desc: "Develop searchable knowledge bases that lower product onboarding churn rates." },
      { icon: Cpu, title: "Secure API Analytics", desc: "Set up performance metric dashboards to track organic CAC and trial conversions." },
    ],
    complianceTitle: "SOC 2 Readiness & Platform Encryption",
    complianceDesc: "In the technology space, security verification is key. We structure marketing campaigns and web tools to support security best practices.",
    complianceItems: [
      "SSL-encrypted intake pipelines and contact systems",
      "SOC 2 compliance support for user data gathering",
      "API webhook connections protecting authentication keys",
      "GDPR and CCPA compliant cookie banners and trackers",
      "Status page setup indicating application uptime metrics",
    ],
    complianceStats: [
      { icon: Shield, title: "SOC 2 Compliant", desc: "Secure data operations" },
      { icon: Clock, title: "Priority Tickets", desc: "Uptime and response monitoring" },
      { icon: TrendingUp, title: "Trial Conversion", desc: "Boost trial tracking signals" },
      { icon: Award, title: "Tech Verified", desc: "Validated integration stacks" },
    ],
  },
  education: {
    slug: "education",
    badge: "Education Marketing",
    badgeIcon: Award,
    heroTitle: "Increase Enrollments for",
    gradientText: "Schools, Bootcamps & Academies",
    heroDesc: "Reach parents and prospective students, optimize your registration pipelines, and scale your online course enrollments with digital marketing.",
    themeColor: "rose",
    colors: {
      bg: "from-slate-50 via-white to-rose-50 dark:from-aura-950 dark:via-aura-900 dark:to-black",
      iconBg: "from-rose-500 to-pink-500",
      btnPrimary: "from-rose-500 to-pink-500 bg-gradient-to-r hover:shadow-rose-500/40 shadow-rose-500/30",
      shadow: "shadow-rose-500/20",
      textAccent: "text-rose-500 dark:text-rose-400",
      badgeBorder: "border-rose-200 dark:border-rose-800",
      badgeBg: "bg-rose-50 dark:bg-rose-900/50",
      badgeText: "text-rose-600 dark:text-rose-400",
    },
    metrics: [
      { value: "150%", label: "Admissions Growth" },
      { value: "200%", label: "Enquiry Volume" },
      { value: "42%", label: "Email Open Rates" },
      { value: "-30%", label: "Enrollment Cost" },
    ],
    typesTitle: "Educational Verticals We Grow",
    types: [
      { icon: Building2, name: "Private & Charter Schools", desc: "Connect with local families seeking enrollments and schedule school tour walk-alongs." },
      { icon: Award, name: "Professional Bootcamps", desc: "Acquire students for coding, design, business, and certification bootcamps." },
      { icon: Globe, name: "Online Course Creators", desc: "Scale course sales globally with automated checkout flows and webinar funnels." },
      { icon: Users, name: "Test Prep & Tutoring Centers", desc: "Rank locally to attract parents looking for math, science, and SAT prep help." },
      { icon: Calendar, name: "Language & Art Academies", desc: "Manage local registration campaigns and schedule intake levels testing." },
    ],
    featuresTitle: "Enrollment-Optimized Platforms",
    features: [
      { icon: Target, title: "Applicant Funnels", desc: "Guide students or parents from initial inquiry through application fees to enrollment status." },
      { icon: Users, title: "Social Proof Displays", desc: "Showcase video testimonials, alumni career changes, and review widgets on key pages." },
      { icon: Calendar, title: "Info Session Organizers", desc: "Generate sign-ups for open houses, webinar sessions, and campus visits." },
      { icon: MapPin, title: "Local Academy Rankings", desc: "Dominate search maps when parents look for educational tutoring in their neighborhood." },
      { icon: Mail, title: "SMS & WhatsApp Nurture", desc: "Answer fee questions and program duration FAQs automatically through WhatsApp templates." },
      { icon: Shield, title: "Student Record Security", desc: "Protect intake applications with age-gated consent parameters and secure SSL forms." },
    ],
    complianceTitle: "COPPA & FERPA Student Data Security",
    complianceDesc: "Admissions databases contain sensitive personal profiles. We build intake systems that respect student privacy regulations.",
    complianceItems: [
      "FERPA and COPPA compliance templates for student profile gathering",
      "SSL secure applications portals preventing access leaks",
      "Age check validation fields on web registration scripts",
      "WCAG 2.1 accessible web designs to support all student profiles",
      "Structured invoicing integration keeping payments separate from databases",
    ],
    complianceStats: [
      { icon: Shield, title: "FERPA Compliant", desc: "Safeguarded student profiles" },
      { icon: Clock, title: "Active Live Chat", desc: "Instant response for student questions" },
      { icon: TrendingUp, title: "Completion Metrics", desc: "Track course completion stats" },
      { icon: Award, title: "Verified Brand", desc: "Authentic credentials displays" },
    ],
  },
};

const fadeInUp: Record<string, any> = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05, ease: "easeOut" },
  }),
};

const IndustryPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params);
  const data = industriesData[slug];

  if (!data) {
    notFound();
  }

  const BadgeIcon = data.badgeIcon;

  return (
    <main className="min-h-screen bg-white dark:bg-aura-950">
      <Navbar />

      {/* Hero */}
      <section className={`relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br ${data.colors.bg}`}>
        <div className="absolute inset-0 bg-grid opacity-[0.03] dark:opacity-[0.05]" />
        <div className={`absolute top-0 right-0 w-96 h-96 bg-${data.themeColor}-500/5 rounded-full blur-3xl`} />
        <div className={`absolute bottom-0 left-0 w-96 h-96 bg-aura-500/5 rounded-full blur-3xl`} />

        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`inline-flex items-center gap-2 rounded-full border ${data.colors.badgeBorder} ${data.colors.badgeBg} px-4 py-1.5 mb-6`}>
                <BadgeIcon size={14} className={data.colors.textAccent} />
                <span className={`text-xs font-semibold uppercase tracking-wider ${data.colors.badgeText}`}>
                  {data.badge}
                </span>
              </div>
              <h1 className="text-display-md sm:text-display-xl font-bold text-slate-900 dark:text-white mb-6">
                {data.heroTitle}{" "}
                <span className="gradient-text">{data.gradientText}</span>
              </h1>
              <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 leading-relaxed max-w-lg">
                {data.heroDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className={`btn-primary text-base px-8 py-4 group bg-gradient-to-r ${data.colors.btnPrimary} text-white shadow-xl ${data.colors.shadow} hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300`}
                >
                  Book Free Consultation
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/services" className="btn-secondary text-base px-8 py-4">
                  View All Services
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {data.metrics.map((m) => (
                <div key={m.label} className="card-premium p-5 text-center">
                  <p className="text-2xl font-bold gradient-text">{m.value}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specializations / Verticals */}
      <section className="section-padding bg-white dark:bg-aura-950">
        <div className="container-main">
          <div className="section-header">
            <div className={`badge mb-4 border ${data.colors.badgeBorder} ${data.colors.badgeBg} ${data.colors.badgeText}`}>
              Who We Serve
            </div>
            <h2>{data.typesTitle}</h2>
            <p>Tailored digital growth and intelligent automation built for your unique market vertical.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data.types.map((type, i) => {
              const TypeIcon = type.icon;
              return (
                <motion.div
                  key={type.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  variants={fadeInUp}
                  custom={i}
                  className="card-premium group"
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${data.colors.btnPrimary} shadow-lg mb-3`}>
                    <TypeIcon size={20} className="text-white" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">{type.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{type.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-slate-50 dark:bg-aura-950/50">
        <div className="container-main">
          <div className="section-header">
            <div className={`badge mb-4 border ${data.colors.badgeBorder} ${data.colors.badgeBg} ${data.colors.badgeText}`}>
              Our Solutions
            </div>
            <h2>{data.featuresTitle}</h2>
            <p>High-converting templates, targeted organic setups, and robust software integrations.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.features.map((feature, i) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  variants={fadeInUp}
                  custom={i}
                  className="card-premium group"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${data.colors.btnPrimary} shadow-lg mb-4`}>
                    <FeatureIcon size={22} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="section-padding bg-white dark:bg-aura-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute top-1/2 left-1/4 w-96 h-96 bg-${data.themeColor}-500/5 rounded-full blur-3xl`} />
        </div>
        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`badge mb-4 border ${data.colors.badgeBorder} ${data.colors.badgeBg} ${data.colors.badgeText}`}>
                Data Integrity
              </div>
              <h2 className="text-display-sm sm:text-display-md font-bold text-slate-900 dark:text-white mb-6">
                {data.complianceTitle}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                {data.complianceDesc}
              </p>
              <ul className="space-y-3">
                {data.complianceItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {data.complianceStats.map((item) => {
                const StatIcon = item.icon;
                return (
                  <div key={item.title} className="card-premium p-5 text-center">
                    <StatIcon size={24} className={`mx-auto mb-2 ${data.colors.textAccent}`} />
                    <p className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* CTA */}
      <section className={`relative overflow-hidden py-20 lg:py-28 bg-gradient-to-r ${data.colors.btnPrimary} dark:from-black dark:to-aura-950`}>
        <div className="absolute inset-0">
          <div className={`absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-${data.themeColor}-500/10 rounded-full blur-3xl`} />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-aura-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container-main relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-display-sm sm:text-display-md text-white font-bold mb-4">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-lg mx-auto">
              Let&apos;s schedule a discussion on how our custom {data.badge.toLowerCase()} can capture high-value customer acquisitions for you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 group"
            >
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

export default IndustryPage;
