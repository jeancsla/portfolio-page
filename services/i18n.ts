
import { useState, useCallback, useEffect } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

export const useI18n = () => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang');
    return (saved as Language) || 'en';
  });

  const t = useCallback((key: string): string => {
    const entry = TRANSLATIONS[key];
    if (!entry) return key;
    return entry[lang];
  }, [lang]);

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'pt' : 'en';
    setLang(newLang);
    localStorage.setItem('portfolio_lang', newLang);
  };

  return { lang, t, toggleLang };
};
