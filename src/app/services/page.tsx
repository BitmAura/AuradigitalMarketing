"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search, MapPin, Globe, TrendingUp, MessageSquare, Users,
  FileText, BarChart3, CreditCard, Video, Mail, Stethoscope,
  Building2, Layout, Store, Calendar, Shield, Database, Workflow,
  Target, Volume2, Cpu, Heart, Package, Cloud, ArrowRight,
  Sparkles, CheckCircle2, ArrowUpRight, Layers,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import NewsletterSignup from "@/components/NewsletterSignup";

const fadeInUp: Record<string, any> = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.05, ease: "easeOut" },
  }),
};

const serviceCategories = [
  {
    title: "Digital Marketing Services",
    subtitle: "Comprehensive digital marketing strategies that drive traffic, generate leads, and grow revenue.",
    gradient: "from-aura-500 to-blue-600",
    services: [
      { icon: Search, name: "Search Engine Optimization (SEO)", desc: "Comprehensive SEO strategies to improve search rankings and drive organic traffic. Includes keyword research, on-page optimization, technical SEO, and link building.", features: ["Keyword research & analysis", "On-page optimization", "Technical SEO audits", "Link building strategies", "Performance tracking"] },
      { icon: MapPin, name: "Local SEO", desc: "Dominate local search results and attract nearby customers with targeted local SEO strategies.", features: ["Google Business Profile optimization", "Local citation building", "Review management", "Local keyword targeting", "Maps ranking strategy"] },
      { icon: Globe, name: "Google Business Profile Optimization", desc: "Transform your GB profile into a powerful marketing tool that drives visibility and leads.", features: ["Profile completeness audit", "Strategic posting", "Review response management", "Q&A optimization", "Performance analytics"] },
      { icon: TrendingUp, name: "Generative Engine Optimization (GEO)", desc: "Future-proof your online presence for AI search engines like ChatGPT, Claude, and Perplexity.", features: ["AI search optimization", "Content structuring for AI", "Authority building", "Semantic markup", "AI intent analysis"] },
      { icon: MessageSquare, name: "Answer Engine Optimization (AEO)", desc: "Position your business as the authoritative answer for AI-powered search queries.", features: ["AI search intent analysis", "Structured data optimization", "Content for AI consumption", "Authority signal building", "Featured snippet targeting"] },
      { icon: Users, name: "Social Media Marketing", desc: "Strategic social media campaigns that build brand awareness and drive engagement across platforms.", features: ["Platform strategy", "Content creation", "Community management", "Paid social advertising", "Influencer partnerships"] },
      { icon: FileText, name: "Content Marketing", desc: "Compelling content strategies that establish thought leadership and drive organic growth.", features: ["Content strategy", "Blog & article writing", "Video content creation", "Infographic design", "Content distribution"] },
      { icon: BarChart3, name: "Performance Marketing", desc: "Data-driven marketing campaigns optimized for maximum ROI and measurable results.", features: ["Campaign strategy", "Paid advertising management", "CRO optimization", "ROI tracking", "A/B testing"] },
      { icon: CreditCard, name: "Meta Ads Management", desc: "Facebook and Instagram advertising that generates qualified leads through precision targeting.", features: ["Ad campaign setup", "Audience targeting", "Creative development", "Lead generation funnels", "Performance optimization"] },
      { icon: Search, name: "Google Ads Management", desc: "Strategic Google Ads campaigns for maximum visibility and high-quality lead generation.", features: ["Search marketing", "Display advertising", "Remarketing campaigns", "Shopping ads", "Conversion tracking"] },
      { icon: Video, name: "YouTube Marketing", desc: "Video marketing strategies to build brand presence and engage audiences at scale.", features: ["Video content strategy", "Channel optimization", "Video advertising", "Analytics reporting", "SEO for YouTube"] },
      { icon: Users, name: "Lead Generation Systems", desc: "Automated systems that convert visitors into qualified prospects through intelligent nurturing.", features: ["Landing page optimization", "Lead capture forms", "Lead scoring", "Automated follow-up", "CRM integration"] },
      { icon: Mail, name: "Email Marketing", desc: "Personalized email campaigns that nurture leads and drive repeat business.", features: ["Campaign strategy", "Template design", "A/B testing", "Automation workflows", "Analytics reporting"] },
      { icon: MessageSquare, name: "WhatsApp Marketing", desc: "WhatsApp business solutions for direct communication and automated marketing campaigns.", features: ["Business API setup", "Template messaging", "Automated responses", "Campaign management", "Analytics tracking"] },
    ],
  },
  {
    title: "Website Development Services",
    subtitle: "Custom websites and web applications built with modern technologies for peak performance.",
    gradient: "from-emerald-500 to-teal-600",
    services: [
      { icon: Stethoscope, name: "Healthcare Websites", desc: "HIPAA-compliant healthcare websites designed for patient engagement and trust.", features: ["HIPAA compliance", "Patient portal integration", "Appointment scheduling", "Medical content management", "Telehealth integration"] },
      { icon: Building2, name: "Corporate Websites", desc: "Professional corporate websites that establish credibility and brand authority.", features: ["Corporate identity", "Content management", "SEO optimization", "Analytics integration", "Multi-language support"] },
      { icon: Layout, name: "Landing Pages", desc: "High-converting landing pages optimized for lead generation and conversions.", features: ["A/B testing ready", "Conversion optimization", "Mobile-responsive", "Fast loading", "Analytics integration"] },
      { icon: Store, name: "E-commerce Websites", desc: "Robust e-commerce platforms with seamless shopping experiences and secure payments.", features: ["Product management", "Secure payments", "Inventory management", "Customer accounts", "Order management"] },
      { icon: Calendar, name: "Appointment Booking Systems", desc: "Integrated scheduling systems with automated reminders and management.", features: ["Calendar integration", "Automated reminders", "Patient management", "Revenue tracking", "Multi-provider support"] },
      { icon: Shield, name: "Website Maintenance", desc: "Comprehensive maintenance and security services for peace of mind.", features: ["Security monitoring", "Backup & recovery", "Performance optimization", "Regular updates", "24/7 support"] },
    ],
  },
  {
    title: "AI & Automation Services",
    subtitle: "Intelligent AI solutions that automate operations and drive business growth.",
    gradient: "from-purple-500 to-violet-600",
    services: [
      { icon: MessageSquare, name: "AI Chatbots", desc: "Intelligent conversational AI that handles inquiries and automates support 24/7.", features: ["Custom chatbot development", "Natural language processing", "CRM integration", "Multi-language support", "Analytics dashboard"] },
      { icon: Users, name: "AI Lead Generation Systems", desc: "Automated AI systems that identify, qualify, and nurture leads around the clock.", features: ["Lead scoring algorithms", "Behavioral analysis", "Automated outreach", "CRM integration", "Conversion tracking"] },
      { icon: MessageSquare, name: "WhatsApp Automation", desc: "WhatsApp automation for customer communication, marketing, and support.", features: ["Business API integration", "Automated messaging", "Chatbot integration", "Campaign management", "Analytics reporting"] },
      { icon: Database, name: "CRM Automation", desc: "Automated CRM workflows that streamline customer relationships and improve efficiency.", features: ["Workflow automation", "Lead management", "Customer segmentation", "Performance analytics", "Integration APIs"] },
      { icon: Workflow, name: "Workflow Automation", desc: "Custom workflow automation that eliminates manual processes and reduces errors.", features: ["Process mapping", "Automation implementation", "System integration", "Performance monitoring", "Continuous optimization"] },
      { icon: Target, name: "Marketing Automation", desc: "Automated campaigns that nurture leads and drive conversions through intelligent targeting.", features: ["Email automation", "Behavior-based targeting", "Lead nurturing", "Performance optimization", "Multi-channel campaigns"] },
      { icon: Volume2, name: "AI Voice Agents", desc: "Advanced voice AI for customer service, appointment scheduling, and automated calls.", features: ["Voice recognition", "Natural language understanding", "Call routing", "Sentiment analysis", "Quality assurance"] },
      { icon: Cpu, name: "Custom AI Solutions", desc: "Tailored AI solutions designed to address your unique business challenges.", features: ["AI strategy development", "Custom model training", "System integration", "Continuous learning", "Performance optimization"] },
    ],
  },
  {
    title: "Software & SaaS Development",
    subtitle: "Scalable software platforms and custom applications built for modern businesses.",
    gradient: "from-amber-500 to-orange-600",
    services: [
      { icon: Database, name: "Custom CRM Development", desc: "Tailored CRM systems that manage customer relationships and drive growth.", features: ["Custom CRM design", "Integration APIs", "User training", "Performance optimization", "Mobile access"] },
      { icon: Users, name: "Employee Management Systems", desc: "Comprehensive platforms for streamlined HR operations and team collaboration.", features: ["Employee directory", "Performance tracking", "Task management", "Reporting analytics", "Leave management"] },
      { icon: Calendar, name: "Appointment Management Systems", desc: "Robust scheduling platforms for healthcare and service businesses.", features: ["Calendar integration", "Automated reminders", "Patient management", "Revenue tracking", "Multi-location support"] },
      { icon: Heart, name: "Clinic Management Software", desc: "Complete clinic management solutions for healthcare providers.", features: ["Patient records", "Appointment scheduling", "Billing & invoicing", "Reporting analytics", "HIPAA compliance"] },
      { icon: Package, name: "Inventory Management Systems", desc: "Real-time inventory tracking to optimize stock control and reduce waste.", features: ["Real-time tracking", "Reorder automation", "Supplier management", "Analytics reporting", "Barcode scanning"] },
      { icon: Cloud, name: "Custom SaaS Platforms", desc: "Scalable SaaS platforms built with modern technologies for growing businesses.", features: ["Platform architecture", "Multi-tenancy", "Subscription management", "Analytics monitoring", "API development"] },
      { icon: BarChart3, name: "Dashboard Development", desc: "Interactive dashboards for real-time business insights and data visualization.", features: ["Custom dashboard design", "Real-time data integration", "Interactive visualizations", "Role-based access", "Export capabilities"] },
      { icon: FileText, name: "Reporting Systems", desc: "Comprehensive reporting systems for data-driven business decisions.", features: ["Custom report generation", "Scheduled reporting", "Data visualization", "Export capabilities", "Automated insights"] },
    ],
  },
];

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-aura-950">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-aura-50 dark:from-aura-950 dark:via-aura-900 dark:to-black">
        <div className="absolute inset-0 bg-grid opacity-[0.03] dark:opacity-[0.05]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-aura-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        
        <div className="container-main relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-aura-200 dark:border-aura-800 bg-white dark:bg-aura-900/50 px-4 py-1.5 mb-6 shadow-sm">
              <Sparkles size={14} className="text-aura-500" />
              <span className="text-xs font-semibold uppercase tracking-wider text-aura-600 dark:text-aura-400">Our Services</span>
            </div>
            <h1 className="text-display-md sm:text-display-xl font-bold text-slate-900 dark:text-white mb-6">
              Comprehensive Digital Marketing &{" "}
              <span className="gradient-text">AI Solutions</span>
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              End-to-end digital transformation services designed to accelerate your business growth and deliver measurable results across all channels.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, catIndex) => (
        <section key={category.title} className={`section-padding ${catIndex % 2 === 0 ? "bg-white dark:bg-aura-950" : "bg-slate-50 dark:bg-aura-950/50"}`}>
          <div className="container-main">
            <div className="section-header">
              <div className="badge mb-4">{category.title.split(" ")[0]}</div>
              <h2>{category.title}</h2>
              <p>{category.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {category.services.map((service, i) => (
                <motion.div
                  key={service.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  variants={fadeInUp}
                  custom={i}
                  className="card-premium group"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg mb-4`}>
                    <service.icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-aura-600 dark:group-hover:text-aura-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-r from-aura-950 via-aura-900 to-slate-900 dark:from-black dark:via-aura-950 dark:to-black">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-aura-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container-main relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-display-sm sm:text-display-md text-white font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-lg mx-auto">
              Every business is unique. Let&apos;s discuss your specific requirements and build a tailored strategy.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-aura-500 to-emerald-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-aura-500/30 hover:shadow-2xl hover:shadow-aura-500/40 hover:-translate-y-0.5 transition-all duration-300 group">
              Get a Free Consultation
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

export default ServicesPage;
