"use client";

import React, { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

const faqs = [
  {
    question: "What makes AuraDigital different from other digital marketing agencies?",
    answer:
      "We combine AI-powered automation with traditional digital marketing to deliver measurable results. Our unique approach integrates custom AI solutions, data-driven strategies, and deep industry expertise across multiple sectors — from healthcare and finance to e-commerce and technology — providing end-to-end digital transformation that goes beyond basic marketing services.",
  },
  {
    question: "How long does it take to see results from your marketing campaigns?",
    answer:
      "While every business is unique, most clients start seeing measurable improvements within 30-60 days. SEO and content marketing typically show significant results in 3-6 months, while paid advertising campaigns can generate leads within days. We provide transparent monthly reporting to track progress against your goals.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with businesses across all industries including healthcare, finance, real estate, e-commerce, education, technology, professional services, and more. Our AI-powered growth solutions are adaptable to any industry and we tailor our approach to each sector's unique challenges and opportunities.",
  },
  {
    question: "What AI solutions do you offer for businesses?",
    answer:
      "We offer a comprehensive range of AI solutions including AI chatbots, lead generation systems, WhatsApp automation, CRM automation, workflow automation, marketing automation, AI voice agents, and custom AI solutions tailored to your specific business needs.",
  },
  {
    question: "How do you measure the success of your campaigns?",
    answer:
      "We use a data-driven approach with comprehensive analytics dashboards. Key metrics include lead generation volume, conversion rates, cost per acquisition, website traffic growth, search engine rankings, ROI, and customer acquisition costs. We provide detailed monthly reports with actionable insights.",
  },
  {
    question: "What is the typical engagement process?",
    answer:
      "Our process begins with a free consultation to understand your goals. We then conduct a thorough audit of your current digital presence, develop a customized strategy, implement the solutions, and provide ongoing optimization and reporting. Most engagements start with a 3-month minimum commitment to ensure meaningful results.",
  },
  {
    question: "Do you offer custom software and SaaS development?",
    answer:
      "Yes! We specialize in building custom CRM systems, employee management platforms, appointment booking systems, clinic management software, inventory management, custom SaaS platforms, dashboards, and reporting systems. Our development team uses modern technologies like Next.js, React, and Node.js.",
  },
  {
    question: "What is the cost of your services?",
    answer:
      "Our pricing is customized based on your specific needs and goals. We offer flexible engagement models from monthly retainers to project-based pricing. Contact us for a free consultation and we'll provide a tailored proposal with transparent pricing — no hidden fees or long-term contracts required.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="section-padding bg-white dark:bg-aura-950">
      <div className="container-main">
        <div className="section-header">
          <div className="badge mb-4">FAQ</div>
          <h2>Frequently Asked Questions</h2>
          <p>
            Everything you need to know about working with AuraDigital Services. Can&apos;t find what you&apos;re looking for?{" "}
            <a href="/contact" className="text-aura-600 dark:text-aura-400 underline underline-offset-2 font-medium">
              Contact us
            </a>
            .
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-12">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setOpenIndex(null);
            }}
            className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 py-3.5 pl-11 pr-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-aura-500 focus:border-aura-500 transition-all"
          />
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-3xl space-y-3">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className={`group rounded-2xl border transition-all duration-300 ${
                openIndex === index
                  ? "border-aura-200 dark:border-aura-700 bg-aura-50/50 dark:bg-aura-900/30 shadow-sm"
                  : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span
                  className={`text-sm font-medium leading-relaxed pr-4 ${
                    openIndex === index
                      ? "text-aura-700 dark:text-aura-300"
                      : "text-slate-900 dark:text-white"
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-aura-500" : "text-slate-400"
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Still have questions? We&apos;re here to help.
          </p>
          <a
            href="/contact"
            className="btn-primary inline-flex"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
