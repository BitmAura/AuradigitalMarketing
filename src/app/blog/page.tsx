import React from 'react';
import styles from './Blog.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const posts = [
    {
      title: "How AI Agents are Transforming Local SEO in 2024",
      excerpt: "Discover how autonomous agents can help your business dominate local search results without manual effort.",
      date: "April 22, 2024",
      author: "D Pradeep Kumar",
      category: "AI Growth"
    },
    {
      title: "The Death of Traditional Lead Gen: Why Funnels Must Be Agentic",
      excerpt: "Static landing pages are losing conversion power. Learn why your next funnel needs real-time AI response agents.",
      date: "April 15, 2024",
      author: "D Pradeep Kumar",
      category: "Conversion"
    },
    {
      title: "GMB Domination: 5 Secrets to Ranking #1 on Google Maps",
      excerpt: "A step-by-step guide to optimizing your Google Merchant Profile for maximum local visibility.",
      date: "April 10, 2024",
      author: "D Pradeep Kumar",
      category: "Local SEO"
    }
  ];

  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.blogHero}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.badge}>Growth Insights</div>
            <h1>The Aura Blog</h1>
            <p>Expert insights on AI automation, SEO, and the future of digital growth.</p>
          </div>

          <div className={styles.blogGrid}>
            {posts.map((post, index) => (
              <article key={index} className={styles.blogCard}>
                <div className={styles.category}>{post.category}</div>
                <div className={styles.cardContent}>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className={styles.meta}>
                    <span><Calendar size={14} /> {post.date}</span>
                    <span><User size={14} /> {post.author}</span>
                  </div>
                  <a href="#" className={styles.readMore}>
                    Read Article <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default BlogPage;
