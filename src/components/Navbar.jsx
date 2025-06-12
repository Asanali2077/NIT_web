import React, { useState, useEffect } from 'react';
import './Navbar.css';
import sunIcon from '../assets/images/sun.png';
import moonIcon from '../assets/images/moon.png';
import chevronDownIcon from '../assets/images/chevron_down_light.png';
import exitToAppIcon from '../assets/images/Exit to app.png';
import searchIcon from '../assets/images/Search.png';
import whiteLogo from '../assets/images/light.svg';
import blackLogo from '../assets/images/dark.svg';

function Navbar() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <div className={`navbar ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className="navbar-top">
        <div className="navbar-left">
          <div className="logo-container">
            <div className="logo">
              <img src={isDarkTheme ? blackLogo : whiteLogo} alt="иконка" width="300" />
            </div>
          </div>
        </div>
        <div className="navbar-right">
          <div className="search-container">
            <input type="text" placeholder="Поиск по сайту" className="search-input" />
            <img src={searchIcon} alt="Search" className="search-icon" />
          </div>
          <div className="theme-toggle" onClick={toggleTheme}>
            <img src={isDarkTheme ? sunIcon : moonIcon} alt="Theme" className="theme-icon" />
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
      <div className="navbar-menu">
        <button className="menu-item active">Разработки</button>
        <button className="menu-item">Достижения</button>
        <button className="menu-item">Подать запрос</button>
        <button className="menu-item">ЦКС</button>
      </div>
    </div>
  );
}

export default Navbar; 