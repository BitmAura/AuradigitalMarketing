"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award, Users, Target, TrendingUp, Heart, Shield, Clock,
  CheckCircle2, ArrowRight,
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

const timeline = [
  { year: "2020", title: "Founded with a Vision", desc: "Started with a mission to help businesses leverage AI and digital marketing for sustainable growth." },
  { year: "2021", title: "First Major Client Success", desc: "Delivered transformative results for our first major client, achieving 300% growth in enquiries." },
  { year: "2022", title: "AI Automation Expansion", desc: "Expanded offerings to include comprehensive AI automation solutions and custom software development." },
  { year: "2023", title: "Industry Recognition", desc: "Gained recognition as a leading digital marketing agency with multiple awards across sectors." },
  { year: "2024", title: "Global Expansion", desc: "Expanded operations to serve clients across multiple countries and industries with a team of 50+ experts." },
];

const AboutPage = () => {
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
            <div className="badge mb-4">About Us</div>
            <h1 className="text-display-md sm:text-display-xl font-bold text-slate-900 dark:text-white mb-6">
              Your Growth Partner in the{" "}
              <span className="gradient-text">Digital Era</span>
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              AuraDigital Services specializes in helping businesses navigate digital transformation through innovative marketing strategies, AI-powered solutions, and custom software development.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white dark:bg-aura-950">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card-premium text-center p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-aura-500 to-blue-600 shadow-xl mx-auto mb-5">
                <Target size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Our Mission</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Empowering businesses with technology-driven growth solutions that deliver measurable results and sustainable success.
              </p>
            </div>
            <div className="card-premium text-center p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-xl mx-auto mb-5">
                <TrendingUp size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Our Vision</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                To become a leading AI-powered digital transformation partner, recognized for innovation, excellence, and client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-slate-50 dark:bg-aura-950/50">
        <div className="container-main">
          <div className="section-header">
            <div className="badge mb-4">Our Values</div>
            <h2>What Drives Us</h2>
            <p>The principles that guide everything we do.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Award, title: "Innovation", desc: "Pushing boundaries with emerging technologies and creative solutions to stay ahead of the curve.", gradient: "from-aura-500 to-blue-600" },
              { icon: Shield, title: "Transparency", desc: "Open communication and honest reporting so our clients always know exactly what's happening.", gradient: "from-emerald-500 to-teal-500" },
              { icon: Users, title: "Partnership", desc: "True partnerships, working collaboratively with clients to achieve shared success and mutual growth.", gradient: "from-purple-500 to-violet-500" },
              { icon: Heart, title: "Excellence", desc: "Striving for perfection in everything we deliver, exceeding expectations and setting new standards.", gradient: "from-amber-500 to-orange-500" },
            ].map((v) => (
              <motion.div
                key={v.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeInUp}
                className="card-premium text-center p-6"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${v.gradient} shadow-lg mx-auto mb-4`}>
                  <v.icon size={22} className="text-white" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{v.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding bg-white dark:bg-aura-950">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <div className="card-premium p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="relative h-36 w-36 mx-auto mb-4 rounded-2xl overflow-hidden shadow-xl ring-4 ring-aura-500/20">
                    <Image
                      src="/profile.png"
                      alt="Pradeep Kumar — Founder, AuraDigital Services"
                      fill
                      className="object-cover object-center"
                      sizes="144px"
                    />
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 px-3 py-1">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300">Active Founder</span>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <div className="badge mb-3">Founder</div>
                  <h2 className="text-display-sm font-bold text-slate-900 dark:text-white mb-1">Pradeep Kumar</h2>
                  <p className="text-sm text-aura-500 font-medium mb-4">Digital Marketing & AI Growth Strategist</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    With over 6 years of experience in digital marketing and AI implementation, Pradeep combines deep strategic insight with cutting-edge technology to deliver transformative solutions for businesses across multiple industries worldwide.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["6+ Years Experience", "Multi-Industry Expert", "AI Implementation Specialist"].map((c) => (
                      <span key={c} className="inline-flex items-center gap-1.5 rounded-full bg-aura-50 dark:bg-aura-900/50 px-3 py-1 text-xs font-medium text-aura-600 dark:text-aura-400">
                        <CheckCircle2 size={12} />
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-slate-50 dark:bg-aura-950/50">
        <div className="container-main">
          <div className="section-header">
            <div className="badge mb-4">Our Journey</div>
            <h2>How We Evolved</h2>
            <p>The story of how AuraDigital grew from a vision to a leading digital transformation partner.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeInUp} custom={i}
                className="relative pl-8 before:absolute before:left-3 before:top-2 before:h-full before:w-px before:bg-slate-200 dark:before:bg-slate-700 last:before:hidden"
              >
                <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-aura-500 to-emerald-500 shadow-md">
                  <Clock size={12} className="text-white" />
                </div>
                <div className="card-premium p-5 ml-2">
                  <div className="inline-flex items-center rounded-full bg-aura-50 dark:bg-aura-900/50 px-3 py-0.5 text-xs font-bold text-aura-600 dark:text-aura-400 mb-2">
                    {t.year}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">{t.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* CTA */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-r from-aura-950 via-aura-900 to-slate-900 dark:from-black dark:via-aura-950 dark:to-black">
        <div className="container-main relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-display-sm sm:text-display-md text-white font-bold mb-4">Ready to Partner with the Future?</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-lg mx-auto">Join the growing list of successful businesses that trust AuraDigital Services to drive their digital transformation.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-aura-500 to-indigo-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-aura-500/30 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 group">
                Book Free Consultation
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/50 px-8 py-4 text-base font-semibold text-slate-200 hover:bg-slate-800 hover:border-slate-600 hover:text-white transition-all duration-300">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSignup />
      <Footer />
    </main>
  );
};

export default AboutPage;
