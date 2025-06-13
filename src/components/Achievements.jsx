import React from "react";
import "./Achievements.css";

import database from "../assets/images/Database.png";
import lock from "../assets/images/lock person.png";
import govtech from "../assets/images/Frame 48096363.png";
import undp from "../assets/images/Group.png";
import globalcio from "../assets/images/Frame 2.png";
import dataaward from "../assets/images/Group 2.png";

function Achievements() {
  return (
    <section className="achievements">
      <h2 className="achievements-title">Наши достижения</h2>
      <div className="achievements-grid">
        <div className="achievement-item">
          <img src={database} alt="Database" className="achievement-icon" />
          <h3>Подключено Smart Data Ukimet 100+ БД и ИС ГО</h3>
          <p>К нам подключены более 100 Баз данных и Единых систем электронного документооборота.</p>
        </div>

        <div className="achievement-item">
          <img src={lock} alt="Lock Person" className="achievement-icon" />
          <h3>Данные представлены в обезличенном виде</h3>
          <p>Мы представили данные в обезличенном виде, обеспечив их безопасность и конфиденциальность.</p>
        </div>

        <div className="achievement-item">
          <img src={govtech} alt="GovTech Prize" className="achievement-icon govtech-icon" />
          <h3>Международное признание GovTech Prize</h3>
          <p>Категория "Инклюзивная цифровая трансформация" – 1 из 1300 проектов в мире.</p>
        </div>

        <div className="achievement-item">
          <img src={undp} alt="UNDP" className="achievement-icon undp-icon" />
          <h3>Международное признание от UNDP</h3>
          <p>Мы вошли в Top-3 в UNDP Open Source Adaptation.</p>
        </div>

        <div className="achievement-item">
          <img src={globalcio} alt="Global CIO" className="achievement-icon globalcio-icon" />
          <h3>Winner of the project of the year 2024 contest</h3>
          <p>Best Project in Analytics and BigData</p>
        </div>

        <div className="achievement-item">
          <img src={dataaward} alt="Data Award" className="achievement-icon" />
          <h3>Data Award 2025</h3>
          <ul>
            <li>За успех в работе с данными в госсекторе</li>
            <li>За реализацию социально значимых инициатив на основе данных</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
