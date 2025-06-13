import React from 'react';
import './Hero.css';
import heroBg from '../assets/images/photo_2025-06-11_12-30-06.jpg';
import nitecLogo from '../assets/images/logo nitec.png';
import { useLanguage } from '../context/LanguageContext';

function Hero() {
  const { t } = useLanguage();

  return (
    <div className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-content">
        <h1>{t('hero-title')}</h1>
        <p>
          {t('hero-description')}
        </p>
        <div className="hero-buttons">
          <button className="primary-button">{t('hero-primary-button')}</button>
          <button className="secondary-button">{t('hero-secondary-button')}</button>
          <div className="availability">{t('hero-availability')}</div>
        </div>
        <div className="developer-info">
          <span>{t('hero-developed-by')}</span>
          <div className="developer-logo">
            <img src={nitecLogo} alt="NITEC" className="nitec-logo" />
          </div>
        </div>
      </div>
      <div className="star-icon"></div>
    </div>
  );
}

export default Hero; 