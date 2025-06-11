import React from 'react';
import './Achievements.css';

function Achievements() {
  return (
    <div className="achievements">
      <h2>Наши достижения</h2>
      
      <div className="achievements-grid">
        <div className="achievement-card">
          <div className="achievement-icon blue">
            <div className="icon-circle"></div>
          </div>
          <div className="achievement-content">
            <h3>Подключено Smart Data Ukimet 100+ БД и ИС ГО</h3>
            <p>К нам подключены более 100 Баз данных и Единых систем электронного документооборота.</p>
          </div>
        </div>

        <div className="achievement-card">
          <div className="achievement-icon green">
            <div className="icon-square"></div>
            <div className="icon-small-square"></div>
          </div>
          <div className="achievement-content">
            <h3>Данные представлены в<br/>обезличенном виде</h3>
            <p>Мы представили данные в обезличенном виде, обеспечив их безопасность и конфиденциальность.</p>
          </div>
        </div>

        <div className="achievement-card">
          <div className="achievement-icon cyan">
            <div className="icon-rectangle"></div>
            <div className="icon-text"></div>
          </div>
          <div className="achievement-content">
            <h3>Международное признание GovTech<br/>Prize</h3>
            <p>Категория "Инклюзивная цифровая трансформация" - 1 из 1300 проектов в мире.</p>
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
            <h3>Международное признание от UNDP</h3>
            <p>Мы вошли в Top-3 в UNDP Open Source Adaptation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements; 