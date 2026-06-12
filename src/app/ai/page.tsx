"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageSquare, Database, Workflow, Target, Volume2, Cpu,
  Brain, Zap, Settings, BarChart3, Users, Globe, CreditCard,
  Shield, Clock, TrendingUp, Rocket, ArrowRight, Sparkles,
  CheckCircle2, Layers, Bot, Network, GitBranch,
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

const aiSolutions = [
  {
    icon: MessageSquare, title: "AI Chatbots", desc: "Intelligent conversational AI that handles customer inquiries, qualifies leads, and provides 24/7 support while reducing operational costs.",
    features: ["Natural language processing", "Lead qualification", "Customer support automation", "Multi-language support", "CRM integration"],
  },
  {
    icon: Database, title: "AI Lead Generation Systems", desc: "Automated AI systems that identify, qualify, and nurture leads 24/7, converting prospects into customers consistently.",
    features: ["Lead scoring algorithms", "Behavioral analysis", "Automated outreach", "Conversion optimization", "ROI tracking"],
  },
  {
    icon: GitBranch, title: "Workflow Automation", desc: "Intelligent automation that eliminates manual processes, reduces errors, and improves operational efficiency across your business.",
    features: ["Process automation", "Decision making", "System integration", "Performance monitoring", "Continuous optimization"],
  },
  {
    icon: Target, title: "Marketing Automation", desc: "AI-powered marketing automation that delivers personalized experiences, optimizes campaigns, and drives conversions at scale.",
    features: ["Campaign optimization", "Personalization engines", "A/B testing automation", "Performance analytics", "ROI maximization"],
  },
  {
    icon: Volume2, title: "AI Voice Agents", desc: "Advanced voice AI that handles customer service, appointment scheduling, and automated calls with human-like conversation.",
    features: ["Voice recognition", "Natural language understanding", "Call routing", "Sentiment analysis", "Quality assurance"],
  },
  {
    icon: Cpu, title: "Custom AI Solutions", desc: "Tailored AI solutions designed to address unique business challenges and drive competitive advantage through custom machine learning.",
    features: ["Custom model development", "Data analysis", "Predictive analytics", "Recommendation systems", "Continuous learning"],
  },
  {
    icon: MessageSquare, title: "WhatsApp Automation", desc: "WhatsApp automation tools for customer communication, marketing, and support through the world&apos;s most popular messaging platform.",
    features: ["Business API integration", "Template messaging", "Automated responses", "Campaign management", "Analytics tracking"],
  },
  {
    icon: Network, title: "CRM Automation", desc: "Automated CRM workflows that streamline customer relationship management and improve operational efficiency.",
    features: ["Workflow automation", "Lead management", "Customer segmentation", "Performance analytics", "Integration APIs"],
  },
];

const techStack = [
  { icon: Brain, title: "Machine Learning", desc: "Advanced ML models for predictive analytics and pattern recognition." },
  { icon: Zap, title: "Neural Networks", desc: "Deep learning for NLP, computer vision, and complex problem solving." },
  { icon: Settings, title: "Automation APIs", desc: "RESTful and GraphQL APIs for seamless system integration." },
  { icon: BarChart3, title: "Predictive Analytics", desc: "Data-driven insights to forecast trends and optimize decisions." },
  { icon: Globe, title: "Cloud Infrastructure", desc: "Scalable cloud infrastructure ensuring high availability and security." },
  { icon: Shield, title: "Enterprise Security", desc: "Enterprise-grade security for all AI solutions and data." },
];

const roiMetrics = [
  { value: "300%", label: "Average ROI", icon: TrendingUp },
  { value: "80%", label: "Time Saved", icon: Clock },
  { value: "95%", label: "Accuracy Rate", icon: Target },
  { value: "24/7", label: "Automation", icon: Rocket },
];

const AIPage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-aura-950">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-aura-950 dark:via-aura-900 dark:to-black">
        <div className="absolute inset-0 bg-grid opacity-[0.03] dark:opacity-[0.05]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
        
        <div className="container-main relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/50 px-4 py-1.5 mb-6">
              <Bot size={14} className="text-purple-500" />
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">AI & Automation</span>
            </div>
            <h1 className="text-display-md sm:text-display-xl font-bold text-slate-900 dark:text-white mb-6">
              Intelligent AI Automation for{" "}
              <span className="gradient-text">Business Growth</span>
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Leverage cutting-edge AI technology to automate operations, enhance customer experiences, and drive unprecedented growth through intelligent digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <Link href="/contact" className="btn-primary text-base px-8 py-4 group">
                Book Free Consultation
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/services" className="btn-secondary text-base px-8 py-4">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Grid */}
      <section className="section-padding bg-white dark:bg-aura-950">
        <div className="container-main">
          <div className="section-header">
            <div className="badge mb-4">Our AI Solutions</div>
            <h2>Transform Your Business with AI</h2>
            <p>Intelligent automation and AI-powered systems that deliver measurable results.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {aiSolutions.map((solution, i) => (
              <motion.div
                key={solution.title}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }}
                variants={fadeInUp} custom={i}
                className="card-premium group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 shadow-lg mb-4">
                  <solution.icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 transition-colors">{solution.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{solution.desc}</p>
                <ul className="space-y-1.5">
                  {solution.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle2 size={12} className="text-purple-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-slate-50 dark:bg-aura-950/50">
        <div className="container-main">
          <div className="section-header">
            <div className="badge mb-4">Technology</div>
            <h2>Our AI Technology Stack</h2>
            <p>Leveraging the most advanced AI frameworks and technologies.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.title}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }}
                variants={fadeInUp} custom={i}
                className="card-premium group"
              >
                <tech.icon size={28} className="text-purple-500 mb-3" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">{tech.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Metrics */}
      <section className="section-padding bg-white dark:bg-aura-950">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-display-sm sm:text-display-md font-bold text-slate-900 dark:text-white mb-4">
              Measurable AI ROI
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Our AI solutions deliver tangible business value through measurable improvements.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {roiMetrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeInUp} custom={i}
                className="card-premium p-8 text-center"
              >
                <m.icon size={28} className="text-purple-500 mx-auto mb-3" />
                <p className="text-3xl font-bold gradient-text mb-1">{m.value}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-slate-50 dark:bg-aura-950/50">
        <div className="container-main">
          <div className="section-header">
            <div className="badge mb-4">Process</div>
            <h2>Our AI Implementation Process</h2>
            <p>A systematic approach ensuring successful integration and measurable results.</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Discovery & Analysis", desc: "Analyze processes, identify opportunities, define AI objectives." },
              { step: "02", title: "Model Development", desc: "Develop custom models tailored to your specific requirements." },
              { step: "03", title: "Integration & Testing", desc: "Integrate with existing systems and conduct comprehensive testing." },
              { step: "04", title: "Deployment & Training", desc: "Deploy with training programs and ongoing support." },
              { step: "05", title: "Optimization & Scaling", desc: "Continuous optimization and scaling for maximum performance." },
            ].map((p, i) => (
              <motion.div
                key={p.step}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeInUp} custom={i}
                className="card-premium text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-2">{p.step}</div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{p.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-r from-purple-950 via-violet-900 to-aura-950">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container-main relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-display-sm sm:text-display-md text-white font-bold mb-4">Ready to Automate Your Business?</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-lg mx-auto">Let&apos;s discuss how our AI solutions can transform your operations and drive unprecedented growth.</p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-violet-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 group">
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

export default AIPage;
