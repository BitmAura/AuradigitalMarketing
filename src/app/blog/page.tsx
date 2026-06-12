"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar, User, Clock, TrendingUp, Search, FileText,
  BarChart3, MessageSquare, Globe, Cpu, Heart, Building2,
  ArrowRight, Sparkles, ArrowUpRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";

const fadeInUp: Record<string, any> = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.05, ease: "easeOut" },
  }),
};

const categories = [
  { icon: TrendingUp, name: "Digital Marketing", count: "45 Posts", color: "from-aura-500 to-blue-600" },
  { icon: Search, name: "SEO", count: "28 Posts", color: "from-emerald-500 to-teal-500" },
  { icon: Cpu, name: "AI in Marketing", count: "32 Posts", color: "from-purple-500 to-violet-500" },
  { icon: Heart, name: "Healthcare Marketing", count: "22 Posts", color: "from-rose-500 to-pink-500" },
  { icon: MessageSquare, name: "Automation", count: "18 Posts", color: "from-amber-500 to-orange-500" },
  { icon: Building2, name: "SaaS Development", count: "25 Posts", color: "from-cyan-500 to-sky-500" },
  { icon: BarChart3, name: "Growth Strategies", count: "38 Posts", color: "from-indigo-500 to-violet-500" },
];

const featuredPost = {
  category: "SEO",
  categoryColor: "from-emerald-500 to-teal-500",
  title: "The Future of SEO: Answer Engine Optimization (AEO) Strategies",
  excerpt: "Traditional SEO is becoming obsolete in the age of AI. Learn how Answer Engine Optimization (AEO) is revolutionizing how businesses appear in AI-powered search results and what strategies you need to implement now.",
  author: "Dr. Pradeep Kumar",
  date: "January 15, 2024",
  readTime: "8 min read",
  tags: ["SEO", "AI", "AEO", "Digital Marketing"],
};

const recentPosts = [
  { icon: TrendingUp, category: "Digital Marketing", date: "January 10, 2024", title: "10 Proven Strategies to Double Your Lead Generation in 90 Days", excerpt: "Discover the most effective lead generation strategies working for top-performing healthcare clinics.", readTime: "6 min read" },
  { icon: BarChart3, category: "Growth Strategies", date: "January 8, 2024", title: "Scaling from $1M to $10M: The AI-Powered Growth Blueprint", excerpt: "Learn how successful businesses leverage AI automation and data-driven marketing to achieve exponential growth.", readTime: "10 min read" },
  { icon: Search, category: "SEO", date: "January 5, 2024", title: "Google Maps Domination: The Complete Guide for Healthcare Businesses", excerpt: "Master Google Maps optimization to attract more patients and dominate your local market.", readTime: "7 min read" },
  { icon: MessageSquare, category: "Automation", date: "January 3, 2024", title: "WhatsApp Business API: The Ultimate Guide for Healthcare Marketing", excerpt: "Discover how healthcare providers are leveraging WhatsApp to improve patient communication.", readTime: "8 min read" },
  { icon: Cpu, category: "AI in Marketing", date: "December 28, 2023", title: "AI Chatbots for Healthcare: Improving Patient Experience & Reducing Costs", excerpt: "Explore how AI chatbots are revolutionizing healthcare patient engagement and operational efficiency.", readTime: "9 min read" },
  { icon: Building2, category: "SaaS Development", date: "December 25, 2023", title: "Building a High-Converting SaaS Platform: Lessons from 10+ Successful Launches", excerpt: "Key insights and strategies for building SaaS platforms that convert visitors into paying customers.", readTime: "12 min read" },
];

const BlogPage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-aura-950">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-aura-50 dark:from-aura-950 dark:via-aura-900 dark:to-black">
        <div className="absolute inset-0 bg-grid opacity-[0.03]" />
        <div className="container-main relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge mb-4">AuraDigital Insights</div>
            <h1 className="text-display-md sm:text-display-xl font-bold text-slate-900 dark:text-white mb-6">
              Digital Marketing &{" "}
              <span className="gradient-text">AI Growth Strategies</span>
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Expert insights, strategies, and trends in digital marketing, AI automation, and business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white dark:bg-aura-950">
        <div className="container-main">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {categories.map((cat) => (
              <motion.div
                key={cat.name}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeInUp}
                className="card-premium p-4 text-center group cursor-pointer"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${cat.color} shadow-lg mx-auto mb-2`}>
                  <cat.icon size={18} className="text-white" />
                </div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">{cat.name}</p>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">{cat.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-slate-50 dark:bg-aura-950/50">
        <div className="container-main">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles size={18} className="text-aura-500" />
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Featured Article</h2>
          </div>
          <div className="card-premium p-6 lg:p-8">
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-2">
                <div className="flex items-center justify-center h-48 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-200 dark:border-emerald-800">
                  <FileText size={48} className="text-emerald-500" />
                </div>
              </div>
              <div className="lg:col-span-3">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                    Featured
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-400"><Calendar size={12} />Jan 15, 2024</span>
                  <span className="flex items-center gap-1 text-xs text-slate-400"><User size={12} />Dr. Pradeep Kumar</span>
                  <span className="flex items-center gap-1 text-xs text-slate-400"><Clock size={12} />8 min read</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-snug">{featuredPost.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredPost.tags.map((t) => (
                    <span key={t} className="rounded-full bg-aura-50 dark:bg-aura-900/50 px-3 py-1 text-[10px] font-medium text-aura-600 dark:text-aura-400">{t}</span>
                  ))}
                </div>
                <button className="btn-primary text-sm group">
                  Read Full Article
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="section-padding bg-white dark:bg-aura-950">
        <div className="container-main">
          <h2 className="text-display-sm font-bold text-slate-900 dark:text-white mb-8">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {recentPosts.map((post, i) => (
              <motion.div
                key={post.title}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }}
                variants={fadeInUp} custom={i}
                className="card-premium group"
              >
                <div className="flex items-center justify-center h-36 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 mb-4">
                  <post.icon size={36} className="text-aura-500" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-aura-500">{post.category}</span>
                  <span className="text-[10px] text-slate-400">•</span>
                  <span className="text-[10px] text-slate-400">{post.date}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-aura-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
                  <span className="flex items-center gap-1 text-xs text-slate-400"><Clock size={12} />{post.readTime}</span>
                  <button className="flex items-center gap-1 text-xs font-semibold text-aura-500 hover:text-aura-600 transition-colors group/btn">
                    Read More
                    <ArrowUpRight size={12} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-r from-aura-950 via-aura-900 to-slate-900 dark:from-black dark:via-aura-950 dark:to-black">
        <div className="container-main relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-display-sm sm:text-display-md text-white font-bold mb-4">Need Custom Marketing Solutions?</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-lg mx-auto">Let&apos;s discuss how our expertise can help you achieve your business goals.</p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-aura-500 to-emerald-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-aura-500/30 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 group">
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

export default BlogPage;
