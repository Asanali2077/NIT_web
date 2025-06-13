import React, { createContext, useState, useContext } from 'react';
import { translations, languageCodes } from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState('РУС');

    const t = (key) => {
        const langCode = languageCodes[currentLanguage];
        return translations[langCode][key] || key;
    };

    const changeLanguage = (language) => {
        setCurrentLanguage(language);
    };

    return (
        <LanguageContext.Provider value={{ currentLanguage, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}; 