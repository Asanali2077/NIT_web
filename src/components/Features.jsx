import React from "react";
import "./Features.css";
import star from "../assets/images/Star.png";
import menu from "../assets/images/Menu.png";
import shield from "../assets/images/Shield.png";

function Features() {
  return (
    <div className="features">
      <div className="feature-card">
        <div className="text-content">
          <h2>Быстрое создание аналитических решений</h2>
          <p>
            Краткий сопроводительный текст, описывающий уникальность тезиса,
            краткий сопроводительный текст, описывающий уникальность тезиса
          </p>
        </div>
        <img src={star} alt="Star" className="feature-image img-blue" />
      </div>

      <div className="feature-card">
        <div className="text-content">
          <h2>Набор готовой аналитики для бизнеса</h2>
          <p>
            Краткий сопроводительный текст, описывающий уникальность тезиса,
            краткий сопроводительный текст, описывающий уникальность тезиса
          </p>
        </div>
        <img src={menu} alt="Menu" className="feature-image img-purple" />
      </div>

      <div className="feature-card dark">
        <div className="text-content">
          <h2>Возможность подать запрос на создание новых решений</h2>
          <p>
            Краткий сопроводительный текст, описывающий уникальность тезиса,
            краткий сопроводительный текст, описывающий уникальность тезиса
          </p>
          <button className="request-button">Подать запрос</button>
        </div>
        <img src={shield} alt="Shield" className="feature-image img-green" />
      </div>
    </div>
  );
}

export default Features;
