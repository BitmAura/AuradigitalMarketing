import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <img src="/logo.jpg" alt="AuraDigital Logo" className={styles.footerLogoImage} />
          </div>
          <div className={styles.footerLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/pricing">Pricing</Link>
          </div>
          <p>© 2024 AuraDigital Service. Built by D Pradeep Kumar.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
