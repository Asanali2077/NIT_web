import React from 'react';
import './Navbar.css';
import sunIcon from '../assets/images/sun.png';
import moonIcon from '../assets/images/moon.png';
import chevronDownIcon from '../assets/images/chevron_down_light.png';
import exitToAppIcon from '../assets/images/Exit to app.png';
import searchIcon from '../assets/images/Search.png';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="logo-container">
          <div className="logo">
            <div className="logo-main">
              <div className="logo-bar" style={{ width: '22.62px', height: '30.56px', left: '0px', top: '6.11px', background: '#1F1F1F' }}></div>
              <div className="logo-bar" style={{ width: '14.52px', height: '36.64px', left: '43.25px', top: '0px', background: '#1F1F1F' }}></div>
              <div className="logo-bar" style={{ width: '26.29px', height: '30.56px', left: '62.35px', top: '6.11px', background: '#1F1F1F' }}></div>
              <div className="logo-accent" style={{ width: '6.90px', height: '13.70px', left: '27.20px', top: '14.54px', background: '#F3D329' }}></div>
              <div className="logo-accent" style={{ width: '11.95px', height: '9.91px', left: '29.77px', top: '6.15px', background: '#263E6E' }}></div>
              <div className="logo-accent" style={{ width: '11.95px', height: '9.91px', left: '29.77px', top: '26.73px', background: '#2F57E4' }}></div>
            </div>
            <div className="logo-text">
              <div className="text-line" style={{ width: '29.34px', height: '6.11px' }}></div>
              <div className="text-line" style={{ width: '23.90px', height: '6.11px' }}></div>
              <div className="text-line" style={{ width: '33.80px', height: '6.11px' }}>
                <div className="text-part" style={{ width: '5.26px', height: '6.11px', left: '0px', top: '0px' }}></div>
                <div className="text-part" style={{ width: '5.20px', height: '7.34px', left: '6.48px', top: '-1.22px' }}></div>
                <div className="text-part" style={{ width: '6.11px', height: '6.11px', left: '23.60px', top: '0px' }}></div>
                <div className="text-part" style={{ width: '3.48px', height: '7.34px', left: '30.32px', top: '-1.22px' }}></div>
                <div className="text-part" style={{ width: '1.22px', height: '7.34px', left: '12.29px', top: '-1.22px' }}></div>
                <div className="text-part" style={{ width: '7.95px', height: '6.11px', left: '14.73px', top: '0px' }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="brand-name">Smart Data Ukimet</div>
      </div>

      <div className="navbar-menu">
        <button className="menu-item active">Разработки</button>
        <button className="menu-item">Достижения</button>
        <button className="menu-item">Подать запрос</button>
        <button className="menu-item">ЦКС</button>
      </div>

      <div className="navbar-right">
        <div className="search-container">
          <input type="text" placeholder="Поиск по сайту" className="search-input" />
          <img src={searchIcon} alt="Search" className="search-icon" />
        </div>
        <div className="theme-toggle">
          <img src={sunIcon} alt="Light Theme" className="theme-icon" />
          <img src={moonIcon} alt="Dark Theme" className="theme-icon" />
        </div>
        <div className="language-selector">
          <span>РУС</span>
          <img src={chevronDownIcon} alt="Select Language" className="dropdown-icon" />
        </div>
        <button className="login-button">
          <img src={exitToAppIcon} alt="Login" className="user-icon" />
          <span>Личный кабинет</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar; 