import React from 'react';
import './OpenSourceTools.css';
import frameImage from '../assets/images/Frame 4471.png';
import { useLanguage } from '../context/LanguageContext';

function OpenSourceTools() {
  const { t } = useLanguage();

  return (
    <div className="open-source-tools">
      <div className="tools-content">
        <div className="tools-text">
          <h2>{t('open-source-title')}</h2>
          <p>{t('open-source-description')}</p>
        </div>
        <div className="tools-image">
          <img src={frameImage} alt="Open Source Tools" className="frame-image" />
        </div>
      </div>
    </div>
  );
}

export default OpenSourceTools; 