import React from 'react';
import Navbar from '@/components/Navbar';
import ServiceCard from '@/components/ServiceCard';
import { 
  Search, 
  MessageSquare, 
  BarChart3, 
  Layout, 
  ArrowRight, 
  CheckCircle2, 
  Phone,
  Stethoscope,
  Building2,
  Wallet,
  Store,
  Rocket
} from 'lucide-react';
import styles from './page.module.css';

const Home = () => {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={`${styles.heroContent} animate-fade-in`}>
            <div className={styles.badge}>AI-Powered Growth Strategies</div>
            <h1>
              We Help <span>Businesses & Entrepreneurs</span> Get More 
              Leads & Revenue Using AI + Digital Marketing
            </h1>
            <p>
              From Global SEO to AI Automation — we build high-performance systems 
              that turn searchers into loyal customers for businesses of all sizes.
            </p>
            <div className={styles.heroActions}>
              <a href="#contact" className={styles.primaryBtn}>
                Book Free Consultation <ArrowRight size={20} />
              </a>
              <a href="#results" className={styles.secondaryBtn}>
                View Our Results
              </a>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <strong>40+</strong>
                <span>Leads/Month Avg.</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.stat}>
                <strong>10X</strong>
                <span>ROI for Clients</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.stat}>
                <strong>24/7</strong>
                <span>AI Automation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.services}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Our Core Growth Systems</h2>
            <p>We don't just run ads. We build end-to-end revenue engines.</p>
          </div>
          <div className={styles.servicesGrid}>
            <ServiceCard 
              title="SEO & GMB Domination"
              description="Dominate local search results and Google Maps to ensure customers find you first."
              icon={Search}
              features={["Local SEO Strategy", "Google Maps Ranking", "Review Management System"]}
            />
            <ServiceCard 
              title="AI Automation"
              description="Save hours of manual work with intelligent chatbots and automated booking systems."
              icon={MessageSquare}
              features={["WhatsApp Chatbots", "AI Booking Systems", "Lead Follow-up Automation"]}
            />
            <ServiceCard 
              title="Performance Marketing"
              description="High-intent Google and Meta ads designed to generate qualified leads, not just clicks."
              icon={BarChart3}
              features={["Google Search Ads", "Meta Lead Generation", "Conversion Tracking"]}
            />
            <ServiceCard 
              title="Websites & Funnels"
              description="High-converting landing pages built to convert traffic into paying customers."
              icon={Layout}
              features={["Clinic Websites", "Sales Funnels", "Conversion Rate Optimization"]}
            />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className={styles.results}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.badge}>Proven Results</div>
            <h2>Real Growth for Real Businesses</h2>
            <p>We don't just promise growth; we deliver measurable ROI through our AI-integrated systems.</p>
          </div>
          <div className={styles.resultsGrid}>
            <div className={`glass-card ${styles.resultCard}`}>
              <div className={styles.resultHeader}>
                <Building2 className={styles.resultIcon} />
                <h3>Dental Clinic Scale</h3>
              </div>
              <div className={styles.resultStats}>
                <div className={styles.resultStat}>
                  <span className={styles.statLabel}>Monthly Calls</span>
                  <span className={styles.statValue}>40+</span>
                </div>
                <div className={styles.resultStat}>
                  <span className={styles.statLabel}>Search Rank</span>
                  <span className={styles.statValue}>Top 3</span>
                </div>
              </div>
              <p>Achieved GMB domination and SEO ranking, resulting in a consistent flow of high-value patients.</p>
            </div>

            <div className={`glass-card ${styles.resultCard}`}>
              <div className={styles.resultHeader}>
                <Wallet className={styles.resultIcon} />
                <h3>Finance Company</h3>
              </div>
              <div className={styles.resultStats}>
                <div className={styles.resultStat}>
                  <span className={styles.statLabel}>Lead Quality</span>
                  <span className={styles.statValue}>92%</span>
                </div>
                <div className={styles.resultStat}>
                  <span className={styles.statLabel}>Cost/Lead</span>
                  <span className={styles.statValue}>-35%</span>
                </div>
              </div>
              <p>Implemented a Meta Ads lead generation funnel that delivered highly qualified investment leads.</p>
            </div>
            
            <div className={`glass-card ${styles.resultCard}`}>
              <div className={styles.resultHeader}>
                <MessageSquare className={styles.resultIcon} />
                <h3>AI Automation Success</h3>
              </div>
              <div className={styles.resultStats}>
                <div className={styles.resultStat}>
                  <span className={styles.statLabel}>Booking Time</span>
                  <span className={styles.statValue}>-80%</span>
                </div>
                <div className={styles.resultStat}>
                  <span className={styles.statLabel}>Availability</span>
                  <span className={styles.statValue}>24/7</span>
                </div>
              </div>
              <p>Built a WhatsApp booking bot that handles 80% of appointment scheduling without human intervention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImage}>
              <div className={styles.imageContainer}>
                <img 
                  src="/profile.png" 
                  alt="Dr. Pradeep Kumar" 
                  className={styles.profileImage}
                />
                <div className={styles.placeholderOverlay}>
                  <p>Dr. Pradeep Kumar</p>
                  <span>Founder, AuraDigital</span>
                </div>
              </div>
            </div>
            <div className={styles.aboutContent}>
              <div className={styles.badge}>The Specialist</div>
              <h2>Meet Dr. Pradeep Kumar</h2>
              <p>
                I'm not just another digital marketer. As an AI + Digital Growth Specialist, 
                I combine marketing psychology with cutting-edge tech to help local businesses thrive.
              </p>
              <div className={styles.aboutFeatures}>
                <div className={styles.aboutFeature}>
                  <CheckCircle2 className={styles.checkIcon} />
                  <div>
                    <h4>Hybrid Expertise</h4>
                    <p>Marketing strategy + Technical AI implementation.</p>
                  </div>
                </div>
                <div className={styles.aboutFeature}>
                  <CheckCircle2 className={styles.checkIcon} />
                  <div>
                    <h4>Industry Focused</h4>
                    <p>Proven track record with dental clinics & finance firms.</p>
                  </div>
                </div>
              </div>
              <p className={styles.quote}>
                "We don't just run ads or SEO. We build systems that bring you consistent leads."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className={styles.industries}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Industries We Scale</h2>
            <p>Specialized solutions for high-value service businesses.</p>
          </div>
          <div className={styles.industriesGrid}>
            <div className={styles.industryItem}>
              <Stethoscope size={40} />
              <span>Medical Clinics</span>
            </div>
            <div className={styles.industryItem}>
              <Building2 size={40} />
              <span>Dental Practices</span>
            </div>
            <div className={styles.industryItem}>
              <Wallet size={40} />
              <span>Finance Companies</span>
            </div>
            <div className={styles.industryItem}>
              <Store size={40} />
              <span>Local Businesses</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className="container">
          <div className={`glass-card ${styles.contactCard}`}>
            <div className={styles.contactContent}>
              <h2>Ready to Fix Your Growth?</h2>
              <p>
                If your business is not generating leads online, you are losing money daily. 
                Let's build your growth engine today.
              </p>
              <div className={styles.contactActions}>
                <a href="https://wa.me/yournumber" className={styles.whatsappBtn}>
                  <MessageSquare size={20} /> Chat on WhatsApp
                </a>
                <a href="tel:+1234567890" className={styles.callBtn}>
                  <Phone size={20} /> Call Now
                </a>
              </div>
            </div>
            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label>Name</label>
                <input type="text" placeholder="Your Name" />
              </div>
              <div className={styles.formGroup}>
                <label>Phone</label>
                <input type="tel" placeholder="Your Phone Number" />
              </div>
              <div className={styles.formGroup}>
                <label>Business Type</label>
                <select>
                  <option>Clinic / Medical</option>
                  <option>Finance</option>
                  <option>Salon / Bakery</option>
                  <option>Other Service Business</option>
                </select>
              </div>
              <button type="submit" className={styles.submitBtn}>
                Get My Free Growth Strategy
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.footerLogo}>
              <img src="/logo.jpg" alt="AuraDigital Logo" className={styles.footerLogoImage} />
            </div>
            <p>© 2024 AuraDigital Service. Built by Dr. Pradeep Kumar.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
