
import React, { createContext, useContext, useState, useEffect } from 'react';
import translations, { TranslationKey, SupportedLanguage } from '@/translations';

// Define the structure of our language context
interface LanguageContextProps {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
}

// Create the language context with a default value
const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (key: TranslationKey) => key, // Default translation returns the key
});

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

// Language provider component
interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Initialize language from localStorage or default to 'en'
  const [language, setLanguage] = useState<SupportedLanguage>(
    typeof window !== 'undefined' 
      ? (localStorage.getItem('language') as SupportedLanguage || 'en') 
      : 'en'
  );

  // Save language preference to localStorage when it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language]);

  // Translation function to get text by key
  const t = (key: TranslationKey): string => {
    return translations[language]?.[key] || key;
  };

  // Toggle function to switch between languages
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Re-export TranslationKey from the translations file
export type { TranslationKey };
