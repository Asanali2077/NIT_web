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



        <div className="achievement-card">
        <div className="achievement-icon">
          {/* You can replace the custom icon with an image */}
          {/* <img src={winnerImage} alt="Winner Icon" className="achievement-image" /> */}
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
          <h3>Winner of the project of the year 2024 contest</h3>
          <p>Best Project in Analytics and BigData</p>
        </div>
      </div>

      <div className="achievement-card">
        <div className="achievement-icon">
          {/* You can replace the custom icon with an image */}
          {/* <img src={awardImage} alt="Award Icon" className="achievement-image" /> */}
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
          <h3>Data Award 2025</h3>
          <p>За успех в работе с данными в госсекторе<br/>За реализацию социально значимых инициатив на основе данных</p>
        </div>
      </div>
              
      </div>

    </div>
  );
}

export default Achievements; 