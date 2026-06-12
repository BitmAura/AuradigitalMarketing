"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone, MessageSquare, Mail, Clock,
  Users, CheckCircle2,
  ArrowRight, Sparkles, Send, Loader2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";

interface FormData {
  name: string;
  companyName: string;
  industry: string;
  email: string;
  phoneNumber: string;
  servicesInterestedIn: string;
  projectBudget: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "", companyName: "", industry: "", email: "",
    phoneNumber: "", servicesInterestedIn: "", projectBudget: "", message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to send message. Please WhatsApp or call us directly.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-white dark:bg-aura-950">
        <Navbar />
        <section className="pt-32 pb-20 flex items-center justify-center min-h-screen">
          <div className="container-main text-center max-w-lg">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-xl mx-auto mb-6">
                <CheckCircle2 size={40} className="text-white" />
              </div>
              <h1 className="text-display-sm font-bold text-slate-900 dark:text-white mb-4">Message Sent!</h1>
              <p className="text-slate-500 dark:text-slate-400 mb-2">
                We&apos;ve received your enquiry and sent you a confirmation email.
              </p>
              <p className="text-slate-500 dark:text-slate-400 mb-8">
                Our team will get back to you within <strong className="text-slate-700 dark:text-slate-200">24 hours</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/" className="btn-primary text-base px-8 py-4">Back to Home</Link>
                <a
                  href="https://wa.me/919148868413"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-base px-8 py-4"
                >
                  WhatsApp Us Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-aura-950">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-aura-50 dark:from-aura-950 dark:via-aura-900 dark:to-black">
        <div className="absolute inset-0 bg-grid opacity-[0.03] dark:opacity-[0.05]" />
        <div className="container-main relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge mb-4">Get in Touch</div>
            <h1 className="text-display-md sm:text-display-xl font-bold text-slate-900 dark:text-white mb-6">
              Let&apos;s Build Your{" "}
              <span className="gradient-text">Growth Story</span> Together
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Ready to transform your business with AI-powered digital marketing and automation? Contact us today for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding pt-0 -mt-4">
        <div className="container-main">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="card-premium p-6 lg:p-8">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Start Your Growth Journey</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>

                {error && (
                  <div className="mb-4 rounded-xl border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 px-4 py-3 text-sm text-red-700 dark:text-red-300 flex items-start gap-2">
                    <span className="shrink-0 mt-0.5">⚠️</span>
                    <span>{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">Full Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required
                        className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-aura-500 focus:border-aura-500 transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">Company Name</label>
                      <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Acme Corporation"
                        className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-aura-500 focus:border-aura-500 transition-all" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">Industry *</label>
                      <select name="industry" value={formData.industry} onChange={handleChange} required
                        className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-aura-500 focus:border-aura-500 transition-all">
                        <option value="">Select Industry</option>
                        <option value="healthcare">Healthcare & Medical</option>
                        <option value="dental">Dental Clinic</option>
                        <option value="hospital">Hospital / Multispeciality</option>
                        <option value="physiotherapy">Physiotherapy / Wellness</option>
                        <option value="finance">Finance & Banking</option>
                        <option value="real-estate">Real Estate</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="technology">Technology / SaaS</option>
                        <option value="education">Education</option>
                        <option value="corporate">Corporate Services</option>
                        <option value="professional-services">Professional Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email Address *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" required
                        className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-aura-500 focus:border-aura-500 transition-all" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">Phone Number *</label>
                      <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="+91 98765 43210" required
                        className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-aura-500 focus:border-aura-500 transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">Services Interested In *</label>
                      <select name="servicesInterestedIn" value={formData.servicesInterestedIn} onChange={handleChange} required
                        className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-aura-500 focus:border-aura-500 transition-all">
                        <option value="">Select Services</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="seo">SEO & Local SEO</option>
                        <option value="aeo-geo">AEO / GEO</option>
                        <option value="ai-automation">AI & Automation</option>
                        <option value="website-development">Website Development</option>
                        <option value="saas-development">SaaS Development</option>
                        <option value="performance-ads">Meta & Google Ads</option>
                        <option value="crm-development">CRM Development</option>
                        <option value="full-service">Full Service Package</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">Monthly Budget (INR)</label>
                      <select name="projectBudget" value={formData.projectBudget} onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-aura-500 focus:border-aura-500 transition-all">
                        <option value="">Select Budget Range</option>
                        <option value="under-10k">Under ₹10,000/month</option>
                        <option value="10k-25k">₹10,000 – ₹25,000/month</option>
                        <option value="25k-50k">₹25,000 – ₹50,000/month</option>
                        <option value="50k-1l">₹50,000 – ₹1,00,000/month</option>
                        <option value="1l+">₹1,00,000+/month</option>
                        <option value="custom">Custom / One-time Project</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">Project Details *</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project, goals, and requirements..." rows={5} required
                        className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-aura-500 focus:border-aura-500 transition-all resize-none" />
                    </div>
                  </div>

                  <button type="submit" disabled={isLoading}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-aura-500 to-indigo-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-aura-500/20 hover:shadow-xl hover:shadow-aura-500/30 hover:-translate-y-0.5 transition-all duration-300 group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                    {isLoading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Start My Growth Journey
                        <Send size={18} className="transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-4">
              {[
                { icon: Phone, title: "Call Us", desc: "Speak directly with our experts", link: "tel:+919148868413", linkText: "+91 91488 68413", extra: "Mon–Sat, 9 AM – 7 PM IST" },
                { icon: MessageSquare, title: "WhatsApp", desc: "Chat with us instantly", link: "https://wa.me/919148868413", linkText: "Start WhatsApp Chat", extra: "Quick Response" },
                { icon: Mail, title: "Email Us", desc: "We respond within 24 hours", link: "mailto:2022auradigital@gmail.com", linkText: "2022auradigital@gmail.com", extra: "Professional Support" },
              ].map((item) => (
                <div key={item.title} className="card-premium p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-aura-500 to-indigo-500 shadow-md">
                      <item.icon size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</p>
                      <a href={item.link} className="text-sm font-medium text-aura-600 dark:text-aura-400 hover:underline mt-1 inline-block">{item.linkText}</a>
                      {item.extra && <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">{item.extra}</p>}
                    </div>
                  </div>
                </div>
              ))}

              {/* Business Hours */}
              <div className="card-premium p-5">
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={18} className="text-aura-500" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">Business Hours (IST)</h3>
                </div>
                <div className="space-y-2 text-sm">
                  {[
                    { day: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
                    { day: "Saturday", time: "10:00 AM – 5:00 PM" },
                    { day: "Sunday", time: "Closed" },
                  ].map((h) => (
                    <div key={h.day} className="flex justify-between text-xs">
                      <span className="text-slate-600 dark:text-slate-400">{h.day}</span>
                      <span className="text-slate-900 dark:text-white font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="card-premium p-5 bg-gradient-to-br from-aura-50 to-indigo-50 dark:from-aura-900/30 dark:to-indigo-900/30 border-aura-200 dark:border-aura-800">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Why Choose Us</h3>
                <div className="space-y-2">
                  {[
                    "100% Free Initial Consultation",
                    "No Hidden Fees or Lock-in Contracts",
                    "Custom Solutions for Every Industry",
                    "WhatsApp Support — Fast Responses",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-indigo-500 shrink-0" />
                      <span className="text-xs text-slate-600 dark:text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <Footer />
    </main>
  );
};

export default ContactPage;
