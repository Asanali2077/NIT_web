import React from 'react';
import './Hero.css';
import heroBg from '../assets/images/photo_2025-06-11_12-30-06.jpg';
import nitecLogo from '../assets/images/logo nitec.png';

function Hero() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-content">
        <h1>Smart Data Ukimet</h1>
        <p>
          Мы помогаем правительству Республики Казахстан собирать, хранить и анализировать данные из государственных систем в деперсонализированном виде.
          <br/><br/>
          Создаем продукты для принятия эффективных решений на основе данных.
        </p>
        <div className="hero-buttons">
          <button className="primary-button">Smart Data Ukimet</button>
          <button className="secondary-button">SDU Demo</button>
          <div className="availability">доступно только в ЕТС ГО</div>
        </div>
        <div className="developer-info">
          <span>Разработано</span>
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