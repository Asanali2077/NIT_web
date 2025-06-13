import React from 'react';
import './Features.css';
import { useLanguage } from '../context/LanguageContext';

function Features() {
  const { t } = useLanguage();

  return (
    <div className="features">
      <div className="feature-card">
        <h2>{t('features-title-1')}</h2>
        <p>{t('features-desc-1')}</p>
        <div className="feature-decoration blue">
          <div className="decoration-circle"></div>
          <div className="decoration-blur"></div>
          <div className="decoration-outline"></div>
          <div className="decoration-highlight"></div>
        </div>
      </div>

      <div className="feature-card">
        <h2>{t('features-title-2')}</h2>
        <p>{t('features-desc-2')}</p>
        <div className="feature-decoration purple">
          <div className="decoration-circle"></div>
          <div className="decoration-blur"></div>
          <div className="decoration-outline"></div>
        </div>
      </div>

      <div className="feature-card dark">
        <h2>{t('features-title-3')}</h2>
        <p>{t('features-desc-3')}</p>
        <button className="request-button">{t('features-submit')}</button>
        <div className="feature-decoration green">
          <div className="decoration-circle"></div>
          <div className="decoration-blur"></div>
          <div className="decoration-outline"></div>
          <div className="decoration-highlight"></div>
        </div>
      </div>
    </div>
  );
}

export default Features; 