
import { useState, useCallback } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

// Safe localStorage wrapper for iOS Safari Private Mode compatibility
const safeLocalStorage = {
  getItem: (key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.warn('localStorage.getItem failed:', error);
      return null;
    }
  },
  setItem: (key: string, value: string): boolean => {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.warn('localStorage.setItem failed:', error);
      return false;
    }
  }
};

export const useI18n = () => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = safeLocalStorage.getItem('portfolio_lang');
    return (saved as Language) || 'en';
  });

  const t = useCallback((key: string): string => {
    const entry = TRANSLATIONS[key];
    if (!entry) {
      return key;
    }
    const translation = entry[lang];
    if (!translation) {
      // Fallback to English if current language translation is missing
      return entry['en'] || key;
    }
    return translation;
  }, [lang]);

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'pt' : 'en';
    setLang(newLang);
    safeLocalStorage.setItem('portfolio_lang', newLang);
  };

  return { lang, t, toggleLang };
};
