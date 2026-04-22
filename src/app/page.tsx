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
import AuraAIScan from '@/components/AuraAIScan';
import GrowthCalculator from '@/components/GrowthCalculator';
import Footer from '@/components/Footer';
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
            <div className={styles.heroMain}>
              <div className={styles.heroText}>
                <h1>
                  We Build <span>Autonomous Growth Engines</span> That Out-Compete, Out-Rank & Out-Scale
                </h1>
                <p>
                  Stop wasting money on "random" marketing. We deploy advanced AI agents and conversion systems 
                  that turn your business into a lead-generating machine.
                </p>
                <div className={styles.heroActions}>
                  <a href="#contact" className={styles.primaryBtn}>
                    Get My Free Growth Strategy <ArrowRight size={20} />
                  </a>
                  <a href="#results" className={styles.secondaryBtn}>
                    Case Studies
                  </a>
                </div>
              </div>
              <div className={styles.heroInteractive}>
                <AuraAIScan />
              </div>
            </div>

            <div className={styles.trustBar}>
              <span>Official Partners & Integrations</span>
              <div className={styles.partnerGrid}>
                <div className={styles.partner}>Google Ads</div>
                <div className={styles.partner}>Meta Business</div>
                <div className={styles.partner}>WhatsApp AI</div>
                <div className={styles.partner}>Claude Agentic</div>
              </div>
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
            <div className={styles.badge}>Our Conversion Framework</div>
            <h2>Full-Funnel Growth Systems</h2>
            <p>We don't just provide services. We deploy autonomous systems that handle the entire customer journey from discovery to booking.</p>
          </div>
          <div className={styles.servicesGrid}>
            <ServiceCard 
              title="AEO & GMB Domination"
              description="Be the only answer on Google Search and Maps. We optimize for AI-driven search (AEO) to ensure high-intent customers find you first."
              icon={Search}
              features={["Answer Engine Optimization", "Hyper-Local GMB Domination", "Automated Review Acquisition"]}
            />
            <ServiceCard 
              title="Agentic Automation"
              description="Intelligent agents that handle lead qualification, scheduling, and follow-ups 24/7 without human intervention."
              icon={MessageSquare}
              features={["24/7 AI Receptionist", "Autonomous Appointment Booking", "CRM Lead Syncing"]}
            />
            <ServiceCard 
              title="Performance Arbitrage"
              description="Data-driven Meta and Google Ads that identify and exploit high-converting audience segments with surgical precision."
              icon={BarChart3}
              features={["High-Intent Keyword Mining", "Dynamic Creative Optimization", "Real-Time ROI Tracking"]}
            />
            <ServiceCard 
              title="High-Value Funnels"
              description="Premium landing experiences designed with conversion psychology at the core to maximize appointment volume."
              icon={Layout}
              features={["Psychology-Based Design", "Micro-Conversion Optimization", "Frictionless Booking Flow"]}
            />
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className={styles.calculatorSection}>
        <div className="container">
          <GrowthCalculator />
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

      {/* Tech Stack Section */}
      <section className={styles.stack}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.badge}>The Crazy AI Stack</div>
            <h2>Powered by Industry-Leading AI</h2>
            <p>We leverage a proprietary stack of autonomous agents and automation tools to deliver 10X growth.</p>
          </div>
          <div className={styles.stackGrid}>
            <div className={styles.stackItem}>
              <div className={styles.stackIcon}>CR</div>
              <span>CrewAI Agents</span>
            </div>
            <div className={styles.stackItem}>
              <div className={styles.stackIcon}>TW</div>
              <span>Twenty CRM</span>
            </div>
            <div className={styles.stackIconLarge}>
              <img src="/logo.jpg" alt="Aura Logo" />
            </div>
            <div className={styles.stackItem}>
              <div className={styles.stackIcon}>LS</div>
              <span>Laudspeaker</span>
            </div>
            <div className={styles.stackItem}>
              <div className={styles.stackIcon}>CD</div>
              <span>Claude Code</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Blueprint */}
      <section className={styles.blueprint}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.badge}>The Aura Methodology</div>
            <h2>How We Build Your Growth Engine</h2>
            <p>Our systematic 4-step process ensures consistent, predictable scaling for your business.</p>
          </div>
          <div className={styles.blueprintGrid}>
            <div className={styles.blueprintItem}>
              <div className={styles.stepNumber}>01</div>
              <h4>Discovery & Mapping</h4>
              <p>We analyze your market and identify high-intent traffic sources your competitors are missing.</p>
            </div>
            <div className={styles.blueprintItem}>
              <div className={styles.stepNumber}>02</div>
              <h4>System Deployment</h4>
              <p>We build your high-converting funnels and deploy autonomous AI agents to handle leads.</p>
            </div>
            <div className={styles.blueprintItem}>
              <div className={styles.stepNumber}>03</div>
              <h4>Traffic Injection</h4>
              <p>We scale your visibility through hyper-targeted GMB domination and performance ads.</p>
            </div>
            <div className={styles.blueprintItem}>
              <div className={styles.stepNumber}>04</div>
              <h4>Optimization Loop</h4>
              <p>Continuous AI-driven optimization of your conversion rates and lead quality for maximum ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className="container">
          <div className={styles.aboutContent}>
            <div className={styles.badge}>The Specialist</div>
            <h2>Meet D Pradeep Kumar</h2>
            <p>
              I'm an AI + Digital Growth Specialist who combines marketing psychology 
              with cutting-edge technology to help businesses of all sizes scale effectively.
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
                  <h4>Proven Frameworks</h4>
                  <p>Systems built for high-value service conversion.</p>
                </div>
              </div>
            </div>
            <p className={styles.quote}>
              "We don't just run ads or SEO. We build systems that bring you consistent leads."
            </p>
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
                <label htmlFor="business-type">Business Type</label>
                <select id="business-type">
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

      <Footer />
    </main>
  );
};

export default Home;
