import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
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
          <span className="availability">доступно только в ЕТС ГО</span>
        </div>
        <div className="developer-info">
          <span>Разработано</span>
          <div className="developer-logo">
            <div className="logo-text"></div>
            <div className="logo-icon"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero; 