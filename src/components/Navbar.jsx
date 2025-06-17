import React, { useState, useEffect } from 'react';
import './Navbar.css';
import sunIcon from '../assets/images/sunicon2.svg';
import moonIcon from '../assets/images/sunicon1.svg';
import chevronDownIcon from '../assets/images/darkicon.svg';
import chevronDownIconLight from '../assets/images/lighticon.svg';
import whiteLogo from '../assets/images/light.svg';
import blackLogo from '../assets/images/dark.svg';
import { useLanguage } from '../context/LanguageContext';

function Navbar() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const { currentLanguage, changeLanguage, t } = useLanguage();

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const handleLanguageChange = (language) => {
    changeLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLanguageDropdownOpen && !event.target.closest('.language-selector')) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageDropdownOpen]);

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
          <div className="theme-toggle" onClick={toggleTheme}>
            <img src={isDarkTheme ? sunIcon : moonIcon} alt="Theme" className="theme-icon" />
          </div>
          <div className={`language-selector ${isLanguageDropdownOpen ? 'active' : ''}`} onClick={toggleLanguageDropdown}>
            <span>{currentLanguage}</span>
            <img src={isDarkTheme ? chevronDownIconLight : chevronDownIcon} alt="Select Language" className="dropdown-icon" />
            {isLanguageDropdownOpen && (
              <div className="language-dropdown">
                <div className="language-option" onClick={() => handleLanguageChange('РУС')}>РУС</div>
                <div className="language-option" onClick={() => handleLanguageChange('ENG')}>ENG</div>
                <div className="language-option" onClick={() => handleLanguageChange('ҚАЗ')}>ҚАЗ</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="navbar-menu">
        <button className="menu-item active">{t('developments')}</button>
        <button className="menu-item">{t('achievements')}</button>
        <button className="menu-item">{t('submit-request')}</button>
      </div>
    </div>
  );
}

export default Navbar;
