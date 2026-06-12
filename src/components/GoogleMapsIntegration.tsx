"use client";

import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Star, X } from 'lucide-react';
import styles from './GoogleMapsIntegration.module.css';

const GoogleMapsIntegration = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState({
    address: '1 Tech Plaza, Suite 100, San Francisco, CA 94105',
    lat: 37.7749,
    lng: -122.4194,
    phone: '+1 (555) 123-4567',
    hours: 'Mon - Fri: 9:00 AM - 6:00 PM PST'
  });

  const openMaps = () => {
    const mapUrl = `https://maps.google.com/?q=${location.lat},${location.lng}`;
    window.open(mapUrl, '_blank');
  };

  const openDirections = () => {
    const directionsUrl = `https://maps.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;
    window.open(directionsUrl, '_blank');
  };

  return (
    <div className={styles.mapsContainer}>
      <div className={styles.mapsCard}>
        <div className={styles.mapsHeader}>
          <MapPin className={styles.mapsIcon} />
          <h3>Our Location</h3>
        </div>
        <div className={styles.mapsContent}>
          <div className={styles.locationInfo}>
            <p className={styles.address}>{location.address}</p>
            <p className={styles.phone}>{location.phone}</p>
            <p className={styles.hours}>{location.hours}</p>
          </div>
          <div className={styles.mapsActions}>
            <button 
              className={styles.mapButton}
              onClick={() => setIsOpen(!isOpen)}
            >
              <MapPin size={16} />
              View Map
            </button>
            <button 
              className={styles.directionsButton}
              onClick={openDirections}
            >
              <Navigation size={16} />
              Get Directions
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={styles.mapModal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3>Our Location</h3>
              <button 
                className={styles.closeModal}
                onClick={() => setIsOpen(false)}
              >
                <X size={20} />
              </button>
            </div>
            <div className={styles.mapIframe}>
              <iframe
                src={`https://maps.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className={styles.modalActions}>
              <button 
                className={styles.primaryButton}
                onClick={openMaps}
              >
                Open in Google Maps
              </button>
              <button 
                className={styles.secondaryButton}
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleMapsIntegration;