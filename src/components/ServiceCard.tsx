import React from 'react';
import styles from './ServiceCard.module.css';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, features }) => {
  return (
    <div className={`glass-card ${styles.card}`}>
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} size={32} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className={styles.features}>
        {features.map((feature, index) => (
          <li key={index}>
            <span className={styles.dot}></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
