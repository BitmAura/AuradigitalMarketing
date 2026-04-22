import React from 'react';
import styles from './Privacy.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPage = () => {
  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.privacyHero}>
        <div className="container">
          <div className={styles.content}>
            <h1>Privacy Policy</h1>
            <p className={styles.updated}>Last Updated: April 22, 2024</p>
            
            <div className={styles.section}>
              <h2>1. Information We Collect</h2>
              <p>We collect information that you provide directly to us through our contact forms, ROI calculator, and during consultations. This may include your name, email address, phone number, and business details.</p>
            </div>

            <div className={styles.section}>
              <h2>2. How We Use Your Information</h2>
              <p>Your information is used to provide the services you request, communicate with you about your growth strategy, and improve our AI-driven marketing systems.</p>
            </div>

            <div className={styles.section}>
              <h2>3. Data Security</h2>
              <p>We implement advanced security measures to protect your data. We do not sell your personal information to third parties.</p>
            </div>

            <div className={styles.section}>
              <h2>4. AI & Automation Disclosure</h2>
              <p>Some of our services utilize autonomous AI agents to qualify leads and process data. Your interaction data may be processed by these agents to provide a more personalized experience.</p>
            </div>

            <div className={styles.section}>
              <h2>5. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at pradeep@auradigital.me</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default PrivacyPage;
