
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSkyTheme } from '../services/theme';
import { useI18n } from '../services/i18n';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  toggleLang: () => void;
  lang: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, toggleLang, lang }) => {
  const { hour, isDark } = useSkyTheme();
  const { t } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Calculate icon position (0% to 100% of its track)
  const iconPos = (hour / 24) * 100;

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: t('nav.about') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-2 sm:p-3 md:p-4">
      {/* Desktop Navigation */}
      <nav className={`hidden md:flex glass rounded-full px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 items-center gap-8 text-sm font-medium transition-colors duration-500 ${isDark ? 'text-white border-white/10' : 'text-slate-800 border-white/20'}`}>
        {navItems.map(item => (
          <motion.button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className="cursor-pointer"
            whileHover={{ scale: 1.05, opacity: 0.8 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {item.label}
          </motion.button>
        ))}

        {/* Sun/Moon Track */}
        <div className="relative w-16 h-8 bg-black/10 rounded-full flex items-center px-1 overflow-hidden group">
          <div
            className={`absolute h-6 w-6 rounded-full transition-all duration-1000 flex items-center justify-center shadow-lg transform
                       ${isDark ? 'bg-indigo-300' : 'bg-yellow-400'}`}
            style={{ left: `calc(${iconPos}% - 1.5rem)` }}
          >
            {isDark ? (
              <svg className="w-4 h-4 text-indigo-900" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
            ) : (
              <svg className="w-4 h-4 text-yellow-900" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path></svg>
            )}
          </div>
        </div>

        <motion.button
          onClick={toggleLang}
          className="font-bold uppercase w-6 cursor-pointer"
          whileHover={{ scale: 1.1, opacity: 0.8 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {lang}
        </motion.button>
      </nav>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden flex items-center">
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`glass p-3 rounded-full cursor-pointer ${isDark ? 'border-white/10' : 'border-white/20'}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
          aria-label="Toggle menu"
        >
          <motion.div
            animate={{ rotate: mobileMenuOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-6 h-6 flex flex-col justify-center items-center"
          >
            <motion.span
              animate={{
                y: mobileMenuOpen ? 10 : 0,
                rotate: mobileMenuOpen ? 45 : 0,
              }}
              className={`h-0.5 w-5 ${isDark ? 'bg-white' : 'bg-slate-800'} rounded-full block absolute transition-all`}
            />
            <motion.span
              animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
              className={`h-0.5 w-5 ${isDark ? 'bg-white' : 'bg-slate-800'} rounded-full block`}
            />
            <motion.span
              animate={{
                y: mobileMenuOpen ? -10 : 0,
                rotate: mobileMenuOpen ? -45 : 0,
              }}
              className={`h-0.5 w-5 ${isDark ? 'bg-white' : 'bg-slate-800'} rounded-full block absolute transition-all`}
            />
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`absolute top-20 left-4 right-4 glass rounded-3xl p-6 ${isDark ? 'border-white/10' : 'border-white/20'}`}
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-3 rounded-xl transition-colors ${isDark ? 'text-white hover:bg-white/10' : 'text-slate-800 hover:bg-white/30'}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {item.label}
                </motion.button>
              ))}

              <div className="border-t border-white/10 my-2"></div>

              {/* Sun/Moon Track in Mobile Menu */}
              <div className="px-4 py-3 flex items-center justify-between">
                <span className={`text-sm ${isDark ? 'text-white/70' : 'text-slate-700'}`}>Theme</span>
                <div className="relative w-14 h-6 bg-black/10 rounded-full flex items-center px-1 overflow-hidden">
                  <div
                    className={`absolute h-5 w-5 rounded-full transition-all duration-1000 flex items-center justify-center shadow-lg transform
                               ${isDark ? 'bg-indigo-300' : 'bg-yellow-400'}`}
                    style={{ left: `calc(${iconPos}% - 1.25rem)` }}
                  >
                    {isDark ? (
                      <svg className="w-3 h-3 text-indigo-900" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                    ) : (
                      <svg className="w-3 h-3 text-yellow-900" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path></svg>
                    )}
                  </div>
                </div>
              </div>

              {/* Language Toggle */}
              <motion.button
                onClick={() => {
                  toggleLang();
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-3 rounded-xl font-bold uppercase transition-colors ${isDark ? 'text-white hover:bg-white/10' : 'text-slate-800 hover:bg-white/30'}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.05 + 0.1 }}
              >
                {lang === 'en' ? 'PT' : 'EN'}
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
