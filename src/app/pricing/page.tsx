import React from 'react';
import styles from './Pricing.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, Zap, Rocket, Shield } from 'lucide-react';

const PricingPage = () => {
  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.pricingHero}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.badge}>Pricing Packages</div>
            <h1>Transparent Growth Plans</h1>
            <p>Choose the engine that fits your business stage. No hidden fees, just results.</p>
          </div>

          <div className={styles.pricingGrid}>
            <div className={styles.pricingCard}>
              <div className={styles.cardHeader}>
                <Zap size={32} className={styles.icon} />
                <h3>Starter Engine</h3>
                <div className={styles.price}>₹14,999<span>/month</span></div>
              </div>
              <ul className={styles.features}>
                <li><Check size={18} /> GMB Optimization</li>
                <li><Check size={18} /> Basic SEO (5 Keywords)</li>
                <li><Check size={18} /> Monthly Growth Report</li>
                <li><Check size={18} /> AI Chatbot Integration</li>
              </ul>
              <a href="/#contact" className={styles.cta}>Start Scaling</a>
            </div>

            <div className={`${styles.pricingCard} ${styles.featured}`}>
              <div className={styles.popularBadge}>Most Popular</div>
              <div className={styles.cardHeader}>
                <Rocket size={32} className={styles.icon} />
                <h3>Aura Pro</h3>
                <div className={styles.price}>₹34,999<span>/month</span></div>
              </div>
              <ul className={styles.features}>
                <li><Check size={18} /> Advanced AEO & SEO</li>
                <li><Check size={18} /> High-Conversion Funnel</li>
                <li><Check size={18} /> Performance Ads Management</li>
                <li><Check size={18} /> Agentic Booking System</li>
                <li><Check size={18} /> Priority Support</li>
              </ul>
              <a href="/#contact" className={styles.ctaPrimary}>Deploy Pro Engine</a>
            </div>

            <div className={styles.pricingCard}>
              <div className={styles.cardHeader}>
                <Shield size={32} className={styles.icon} />
                <h3>Enterprise AI</h3>
                <div className={styles.price}>Custom<span>/plan</span></div>
              </div>
              <ul className={styles.features}>
                <li><Check size={18} /> Full Stack AI Automation</li>
                <li><Check size={18} /> Multi-Channel Dominance</li>
                <li><Check size={18} /> Custom Agent Development</li>
                <li><Check size={18} /> 24/7 Dedicated Support</li>
              </ul>
              <a href="/#contact" className={styles.cta}>Contact for Quote</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default PricingPage;
