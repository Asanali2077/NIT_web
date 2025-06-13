import React from 'react';
import './Achievements.css';
import { useLanguage } from '../context/LanguageContext';

function Achievements() {
  const { t } = useLanguage();

  return (
    <div className="achievements">
      <h2>{t('achievements-title')}</h2>
      
      <div className="achievements-grid">

        <div className="achievement-card">
          <div className="achievement-icon blue">
            <div className="icon-circle"></div>
          </div>
          <div className="achievement-content">
            <h3>{t('achievements-title-1')}</h3>
            <p>{t('achievements-desc-1')}</p>
          </div>
        </div>

        <div className="achievement-card">
          <div className="achievement-icon green">
            <div className="icon-square"></div>
            <div className="icon-small-square"></div>
          </div>
          <div className="achievement-content">
            <h3>{t('achievements-title-2')}</h3>
            <p>{t('achievements-desc-2')}</p>
          </div>
        </div>

        <div className="achievement-card">
          <div className="achievement-icon cyan">
            <div className="icon-rectangle"></div>
            <div className="icon-text"></div>
          </div>
          <div className="achievement-content">
            <h3>{t('achievements-title-3')}</h3>
            <p>{t('achievements-desc-3')}</p>
          </div>
        </div>

        <div className="achievement-card">
          <div className="achievement-icon navy">
            <div className="icon-grid">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="grid-item">
                  <div className="grid-dot"></div>
                  <div className="grid-line"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="achievement-content">
            <h3>{t('achievements-title-4')}</h3>
            <p>{t('achievements-desc-4')}</p>
          </div>
        </div>

        <div className="achievement-card">
          <div className="achievement-icon">
            <div className="icon-bars">
              <div className="bar" style={{ height: '10.29px', background: '#FCBE7F' }}></div>
              <div className="bar" style={{ height: '20.51px', background: '#F68D40' }}></div>
              <div className="bar" style={{ height: '20.54px', background: '#FAA85E' }}></div>
              <div className="bar" style={{ height: '13.83px', background: '#F89B5C' }}></div>
              <div className="bar" style={{ height: '13.83px', background: '#FBB256' }}></div>
              <div className="bar" style={{ height: '20.54px', background: '#FEC76B' }}></div>
              <div className="bar" style={{ height: '10.29px', background: '#FDE9A8' }}></div>
              <div className="bar" style={{ height: '20.54px', background: '#FFD390' }}></div>
              <div className="bar" style={{ height: '20.51px', background: '#FEC87F' }}></div>
              <div className="bar" style={{ height: '13.83px', background: '#FAA53D' }}></div>
            </div>
            <div className="icon-text">
              <div className="text-line" style={{ width: '10.11px', height: '11.18px', background: '#303135' }}></div>
              <div className="text-line" style={{ width: '1.87px', height: '11.27px', background: '#303135' }}></div>
              <div className="text-line" style={{ width: '8.69px', height: '8.51px', background: '#303135' }}></div>
              <div className="text-line" style={{ width: '8.43px', height: '11.44px', background: '#303135' }}></div>
              <div className="text-line" style={{ width: '7.39px', height: '8.44px', background: '#303135' }}></div>
              <div className="text-line" style={{ width: '1.87px', height: '11.27px', background: '#303135' }}></div>
              <div className="text-line" style={{ width: '9.88px', height: '11.18px', background: '#303135' }}></div>
              <div className="text-line" style={{ width: '1.90px', height: '10.80px', background: '#303135' }}></div>
              <div className="text-line" style={{ width: '11.30px', height: '11.17px', background: '#303135' }}></div>
            </div>
          </div>
          <div className="achievement-content">
            <h3>{t('achievements-title-5')}</h3>
            <p>{t('achievements-desc-5')}</p>
          </div>
        </div>

        <div className="achievement-card">
          <div className="achievement-icon">
            <div className="icon-award">
              <div className="award-bar" style={{ width: '24.37px', height: '26px', opacity: '0.60', background: '#FF0044' }}></div>
              <div className="award-bar" style={{ width: '27.92px', height: '26px', opacity: '0.80', background: '#FF0044' }}></div>
              <div className="award-bar" style={{ width: '20.47px', height: '26px', background: '#FF0044' }}></div>
              <div className="award-bar" style={{ width: '19.87px', height: '26px', background: '#FF0044' }}></div>
              <div className="award-dot" style={{ width: '7.75px', height: '8.05px', background: '#FF0044' }}></div>
              <div className="award-dot" style={{ width: '10.86px', height: '8.02px', background: '#FF0044' }}></div>
              <div className="award-dot" style={{ width: '7.75px', height: '8.05px', background: '#FF0044' }}></div>
              <div className="award-dot" style={{ width: '6.40px', height: '8.02px', background: '#FF0044' }}></div>
              <div className="award-dot" style={{ width: '6.65px', height: '8.02px', background: '#FF0044' }}></div>
              <div className="award-dot" style={{ width: '4.66px', height: '7.42px', background: '#FF0044' }}></div>
              <div className="award-dot" style={{ width: '4.95px', height: '7.54px', background: '#FF0044' }}></div>
              <div className="award-dot" style={{ width: '4.66px', height: '7.42px', background: '#FF0044' }}></div>
              <div className="award-dot" style={{ width: '4.54px', height: '7.42px', background: '#FF0044' }}></div>
            </div>
          </div>
          <div className="achievement-content">
            <h3>{t('achievements-title-6')}</h3>
            <p>{t('achievements-desc-6')}</p>
          </div>
        </div>
              
      </div>

    </div>
  );
}

export default Achievements; 