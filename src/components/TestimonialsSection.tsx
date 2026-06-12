"use client";

import React, { useState, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Director",
    company: "Johnson Dental Clinic",
    initials: "SJ",
    rating: 5,
    text: "AuraDigital transformed our practice completely. Their AI-powered marketing strategies helped us achieve 40+ monthly patient enquiries. Our online reputation has never been better, and we now dominate local search results. Their healthcare expertise is unmatched.",
    result: "300% increase in patient enquiries",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "Chen Financial Services",
    initials: "MC",
    rating: 5,
    text: "The lead generation system AuraDigital built for us is phenomenal. They reduced our cost per lead by 35% while improving lead quality to 92%. Their data-driven approach and AI automation have given us a significant competitive advantage.",
    result: "92% lead quality score",
  },
  {
    id: 3,
    name: "Dr. Priya Sharma",
    role: "Medical Director",
    company: "Sharma Orthopedic Center",
    initials: "PS",
    rating: 5,
    text: "We've worked with several digital marketing agencies before, but none delivered the level of expertise and results that AuraDigital has. Their understanding of healthcare marketing combined with AI technology is truly exceptional.",
    result: "Top 3 Google ranking achieved",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Owner",
    company: "Thompson Wellness Studio",
    initials: "DT",
    rating: 5,
    text: "The automated booking system and AI voice agent they implemented for us has been a game changer. We've reduced manual work by 80% and our customers love the 24/7 availability. Outstanding professionalism and technical expertise.",
    result: "80% reduction in manual work",
  },
  {
    id: 5,
    name: "Dr. Anita Patel",
    role: "Founder",
    company: "Patel Multispecialty Hospital",
    initials: "AP",
    rating: 5,
    text: "Choosing AuraDigital was the best decision we made for our digital transformation journey. Their comprehensive approach to healthcare marketing and AI automation has helped us achieve unprecedented growth in patient acquisition.",
    result: "200% website traffic growth",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const goTo = (index: number) => {
    setCurrentIndex(index);
    if (scrollRef.current) {
      const card = scrollRef.current.children[index] as HTMLElement;
      card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  };

  const next = () => goTo((currentIndex + 1) % testimonials.length);
  const prev = () => goTo((currentIndex - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-slate-50 dark:bg-aura-950/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-aura-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-main relative z-10">
        <div className="section-header">
          <div className="badge mb-4">Testimonials</div>
          <h2>What Our Clients Say</h2>
          <p>
            Hear from businesses that have transformed their growth with AuraDigital&apos;s AI-powered solutions.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mx-auto max-w-4xl">
          {/* Navigation Arrows */}
          <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 z-10 justify-between pointer-events-none">
            <button
              onClick={prev}
              className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:-translate-x-1"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:translate-x-1"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4"
          >
            {testimonials.map((t, index) => (
              <div
                key={t.id}
                className="min-w-[calc(100%-2rem)] sm:min-w-[400px] lg:min-w-[450px] snap-center"
              >
                <div
                  className={`relative rounded-2xl border p-8 transition-all duration-500 h-full ${
                    index === currentIndex
                      ? "border-aura-200 dark:border-aura-700 bg-white dark:bg-slate-900 shadow-xl scale-100"
                      : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm scale-[0.97] opacity-60"
                  }`}
                >
                  {/* Quote icon */}
                  <Quote className="text-aura-500/20 dark:text-aura-400/10 mb-4" size={40} />

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Result Badge */}
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 px-3.5 py-1.5 mb-6">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300">
                      {t.result}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-aura-500 to-emerald-500 text-sm font-bold text-white">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {t.name}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-gradient-to-r from-aura-500 to-emerald-500"
                    : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
