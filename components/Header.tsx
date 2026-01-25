
import React from 'react';
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

  // Calculate icon position (0% to 100% of its track)
  const iconPos = (hour / 24) * 100;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <nav className={`glass rounded-full px-6 py-3 flex items-center gap-8 text-sm font-medium transition-colors duration-500 ${isDark ? 'text-white border-white/10' : 'text-slate-800 border-white/20'}`}>
        <button onClick={() => onNavigate('about')} className="hover:opacity-70">{t('nav.about')}</button>
        <button onClick={() => onNavigate('projects')} className="hover:opacity-70">{t('nav.projects')}</button>
        
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

        <button onClick={() => onNavigate('experience')} className="hover:opacity-70">{t('nav.experience')}</button>
        <button onClick={toggleLang} className="hover:opacity-70 font-bold uppercase w-6">{lang}</button>
      </nav>
    </header>
  );
};

export default Header;
