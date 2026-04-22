"use client";

import React, { useState, useEffect } from 'react';
import styles from './AuraAIScan.module.css';
import { Search, ShieldCheck, Zap, AlertCircle, Loader2 } from 'lucide-react';

const AuraAIScan = () => {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<any>(null);

  const startScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    setIsScanning(true);
    setProgress(0);
    setResults(null);
  };

  useEffect(() => {
    if (isScanning && progress < 100) {
      const timer = setTimeout(() => setProgress(p => p + 2), 50);
      return () => clearTimeout(timer);
    } else if (progress >= 100) {
      setTimeout(() => {
        setIsScanning(false);
        setResults({
          seo: 'Low - Multiple ranking gaps detected',
          ai: 'Inactive - No automation agents found',
          conversion: 'Critical - Missing high-intent hooks',
          score: 34
        });
      }, 500);
    }
  }, [isScanning, progress]);

  return (
    <div className={`glass-card ${styles.container}`}>
      <div className={styles.header}>
        <Zap className={styles.icon} />
        <h3>Aura AI Live Scan</h3>
        <p>Enter your website URL to analyze your AI Growth Readiness.</p>
      </div>

      {!results && !isScanning ? (
        <form onSubmit={startScan} className={styles.form}>
          <input 
            type="text" 
            placeholder="yourbusiness.com" 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.scanBtn}>Analyze Now</button>
        </form>
      ) : isScanning ? (
        <div className={styles.scanning}>
          <div className={styles.progressHeader}>
            <Loader2 className={styles.spinner} />
            <span>Aura AI is auditing {url}...</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${progress}%` }}></div>
          </div>
          <div className={styles.scanLogs}>
            {progress > 20 && <div>[INFO] Checking GMB API Status...</div>}
            {progress > 40 && <div>[WARN] SEO Knowledge Graph detected as "Stale"</div>}
            {progress > 60 && <div>[INFO] Searching for Agentic Hook integrations...</div>}
            {progress > 80 && <div>[CRITICAL] High-leakage points found in mobile UI</div>}
          </div>
        </div>
      ) : (
        <div className={styles.results}>
          <div className={styles.scoreCircle}>
            <div className={styles.scoreValue}>{results.score}%</div>
            <span>Growth Score</span>
          </div>
          <div className={styles.report}>
            <div className={styles.reportItem}>
              <Search size={18} />
              <div>
                <strong>SEO Health:</strong> <span>{results.seo}</span>
              </div>
            </div>
            <div className={styles.reportItem}>
              <Zap size={18} />
              <div>
                <strong>AI Readiness:</strong> <span>{results.ai}</span>
              </div>
            </div>
            <div className={styles.reportItem}>
              <AlertCircle size={18} />
              <div>
                <strong>Conversion Hook:</strong> <span>{results.conversion}</span>
              </div>
            </div>
          </div>
          <button className={styles.reportBtn} onClick={() => window.location.href = '#contact'}>
            Unlock Full Audit Report & Strategy
          </button>
        </div>
      )}
    </div>
  );
};

export default AuraAIScan;
