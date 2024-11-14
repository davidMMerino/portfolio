// context/LanguageContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import enTranslations from '../../public/locales/en.json';
import esTranslations from '../../public/locales/es.json';

type Language = 'en' | 'es';
type Translations = { [key: string]: string};

interface LanguageContextType {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>; //DUDA
  translations: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => { //DUDA
  const [language, setLanguage] = useState<Language>('en');
  const translations = language === 'en' ? enTranslations : esTranslations;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
