import React from 'react';
import styles from './Pricing.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, Zap, Rocket, Shield, MapPin } from 'lucide-react';

const PricingPage = () => {
  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.pricingHero}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.badge}>Indian Growth Plans</div>
            <h1>Premium Services, Indian Pricing</h1>
            <p>Deploy elite AI & Marketing systems at a fraction of traditional agency costs.</p>
          </div>

          <div className={styles.pricingGrid}>
            {/* GMB Special */}
            <div className={styles.pricingCard}>
              <div className={styles.cardHeader}>
                <MapPin size={32} className={styles.icon} />
                <h3>GMB & Local SEO</h3>
                <div className={styles.price}>₹15,000<span>/year</span></div>
              </div>
              <ul className={styles.features}>
                <li><Check size={18} /> GMB Profile Optimization</li>
                <li><Check size={18} /> Local Citations & Backlinks</li>
                <li><Check size={18} /> Weekly Review Management</li>
                <li><Check size={18} /> Monthly Performance Tracking</li>
                <li><Check size={18} /> Maps Ranking Strategy</li>
              </ul>
              <a href="/#contact" className={styles.cta}>Dominate Locally</a>
            </div>

            {/* Performance Engine */}
            <div className={`${styles.pricingCard} ${styles.featured}`}>
              <div className={styles.popularBadge}>Best for Growth</div>
              <div className={styles.cardHeader}>
                <Rocket size={32} className={styles.icon} />
                <h3>Aura Pro Engine</h3>
                <div className={styles.price}>₹24,999<span>/month</span></div>
              </div>
              <ul className={styles.features}>
                <li><Check size={18} /> Custom Website Building</li>
                <li><Check size={18} /> Google & Meta Ads Management</li>
                <li><Check size={18} /> Advanced AEO & SEO</li>
                <li><Check size={18} /> AI Receptionist Bot</li>
                <li><Check size={18} /> Real-time Performance Tracking</li>
              </ul>
              <a href="/#contact" className={styles.ctaPrimary}>Deploy My Engine</a>
            </div>

            {/* Custom AI Solutions */}
            <div className={styles.pricingCard}>
              <div className={styles.cardHeader}>
                <Zap size={32} className={styles.icon} />
                <h3>Enterprise AI</h3>
                <div className={styles.price}>Custom<span>/Quote</span></div>
              </div>
              <ul className={styles.features}>
                <li><Check size={18} /> Specialized AI Agents</li>
                <li><Check size={18} /> Full Business Automation</li>
                <li><Check size={18} /> Multi-Channel Ad Dominance</li>
                <li><Check size={18} /> 24/7 Dedicated Support</li>
                <li><Check size={18} /> Custom CRM Integrations</li>
              </ul>
              <a href="/#contact" className={styles.cta}>Scale My Business</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default PricingPage;
