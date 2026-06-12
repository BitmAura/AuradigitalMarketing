"use client";

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import styles from './TestimonialsCarousel.module.css';

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Director",
    company: "Johnson Dental Clinic",
    image: "SJ",
    rating: 5,
    text: "AuraDigital transformed our practice completely. Their AI-powered marketing strategies helped us achieve 40+ monthly patient enquiries. Our online reputation has never been better, and we now dominate local search results. Their healthcare expertise is unmatched.",
    result: "300% increase in patient enquiries"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "Chen Financial Services",
    image: "MC",
    rating: 5,
    text: "The lead generation system AuraDigital built for us is phenomenal. They reduced our cost per lead by 35% while improving lead quality to 92%. Their data-driven approach and AI automation have given us a significant competitive advantage.",
    result: "92% lead quality score"
  },
  {
    id: 3,
    name: "Dr. Priya Sharma",
    role: "Medical Director",
    company: "Sharma Orthopedic Center",
    image: "PS",
    rating: 5,
    text: "We've worked with several digital marketing agencies before, but none delivered the level of expertise and results that AuraDigital has. Their understanding of healthcare marketing combined with AI technology is truly exceptional.",
    result: "Top 3 Google ranking achieved"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Owner",
    company: "Thompson Wellness Studio",
    image: "DT",
    rating: 5,
    text: "The automated booking system and AI voice agent they implemented for us has been a game changer. We've reduced manual work by 80% and our customers love the 24/7 availability. Their team's professionalism and technical expertise is outstanding.",
    result: "80% reduction in manual work"
  },
  {
    id: 5,
    name: "Dr. Anita Patel",
    role: "Founder",
    company: "Patel Multispecialty Hospital",
    image: "AP",
    rating: 5,
    text: "Choosing AuraDigital was the best decision we made for our digital transformation journey. Their comprehensive approach to healthcare marketing and AI automation has helped us achieve unprecedented growth in patient acquisition.",
    result: "200% website traffic growth"
  }
];

const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const testimonial = testimonials[current];

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselContent}>
        <div className={styles.navigation}>
          <button className={styles.navButton} onClick={prev} aria-label="Previous testimonial">
            <ChevronLeft size={20} />
          </button>
          <button className={styles.navButton} onClick={next} aria-label="Next testimonial">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className={styles.testimonialCard} key={testimonial.id}>
          <div className={styles.quoteIcon}>
            <Quote size={32} />
          </div>
          <div className={styles.stars}>
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} size={20} fill="#f59e0b" color="#f59e0b" />
            ))}
          </div>
          <p className={styles.testimonialText}>{testimonial.text}</p>
          <div className={styles.resultBadge}>
            <span>Result: {testimonial.result}</span>
          </div>
          <div className={styles.testimonialAuthor}>
            <div className={styles.authorAvatar}>
              <span>{testimonial.image}</span>
            </div>
            <div className={styles.authorInfo}>
              <h4 className={styles.authorName}>{testimonial.name}</h4>
              <p className={styles.authorRole}>{testimonial.role}, {testimonial.company}</p>
            </div>
          </div>
        </div>

        <div className={styles.dots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === current ? styles.active : ''}`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;