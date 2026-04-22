"use client";

import React, { useState } from 'react';
import styles from './GrowthCalculator.module.css';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';

const GrowthCalculator = () => {
  const [leads, setLeads] = useState(20);
  const [conversion, setConversion] = useState(10);
  const [value, setValue] = useState(500);

  const monthlyRevenue = leads * (conversion / 100) * value;
  const growthRevenue = (leads * 2.5) * ((conversion + 5) / 100) * value;
  const difference = growthRevenue - monthlyRevenue;

  return (
    <div className={`glass-card ${styles.container}`}>
      <div className={styles.header}>
        <Calculator className={styles.icon} />
        <h3>Aura ROI Calculator</h3>
        <p>See how much revenue you're leaving on the table.</p>
      </div>

      <div className={styles.calculatorGrid}>
        <div className={styles.inputs}>
          <div className={styles.inputGroup}>
            <label>Current Monthly Leads: {leads}</label>
            <input 
              type="range" 
              min="5" 
              max="200" 
              value={leads} 
              onChange={(e) => setLeads(Number(e.target.value))} 
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Conversion Rate: {conversion}%</label>
            <input 
              type="range" 
              min="1" 
              max="50" 
              value={conversion} 
              onChange={(e) => setConversion(Number(e.target.value))} 
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Avg. Customer Value: ${value}</label>
            <input 
              type="range" 
              min="100" 
              max="5000" 
              step="100"
              value={value} 
              onChange={(e) => setValue(Number(e.target.value))} 
            />
          </div>
        </div>

        <div className={styles.results}>
          <div className={styles.resultItem}>
            <span>Current Revenue</span>
            <div className={styles.value}>${monthlyRevenue.toLocaleString()}</div>
          </div>
          <div className={`${styles.resultItem} ${styles.highlight}`}>
            <span>Aura Optimized</span>
            <div className={styles.value}>${growthRevenue.toLocaleString()}</div>
            <span className={styles.badge}>2.5X Growth</span>
          </div>
          <div className={styles.potential}>
            <TrendingUp size={20} />
            <div>
              <strong>+${difference.toLocaleString()}</strong>
              <span>Potential Monthly Increase</span>
            </div>
          </div>
        </div>
      </div>
      
      <button className={styles.cta} onClick={() => window.location.href = '#contact'}>
        Claim Your Growth Strategy <TrendingUp size={18} />
      </button>
    </div>
  );
};

export default GrowthCalculator;
