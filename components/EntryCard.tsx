
import React from 'react';
import { Entry } from '../types';
import { useSkyTheme } from '../services/theme';

interface EntryCardProps {
  entry: Entry;
  t: (key: string) => string;
  onClick?: () => void;
}

const EntryCard: React.FC<EntryCardProps> = ({ entry, t, onClick }) => {
  const { isDark } = useSkyTheme();

  const dataAttrs = {
    'data-type': entry.type,
    'data-github': entry.github,
    'data-date': entry.date,
    'data-company': entry.company,
    'data-tags': entry.tags?.join(','),
  };

  return (
    <article 
      {...dataAttrs}
      className={`entry glass p-6 transition-all duration-300 transform hover:-translate-y-1 rounded-2xl cursor-pointer group ${isDark ? 'border-white/10 hover:border-white/30' : 'border-white/30 hover:border-white/60'}`}
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className={`text-xl font-bold group-hover:text-indigo-400 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>{entry.titleKey}</h3>
          {entry.company && (
            <p className={`text-sm font-semibold mt-1 ${isDark ? 'text-indigo-300' : 'text-indigo-600'}`}>{entry.company}</p>
          )}
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className={`text-[10px] px-2 py-1 rounded-full uppercase tracking-wider glass ${isDark ? 'text-white/60' : 'text-black/50'}`}>
            {entry.date}
          </span>
          {entry.type === 'project' && (
            <span className="text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </span>
          )}
        </div>
      </div>
      
      <p className={`text-sm mb-6 leading-relaxed line-clamp-2 ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
        {entry.descriptionKey}
      </p>

      {entry.tags && (
        <div className="flex flex-wrap gap-2">
          {entry.tags.map(tag => (
            <span key={tag} className={`text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded border ${isDark ? 'border-white/10 text-white/40' : 'border-black/10 text-black/40'}`}>
              #{tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
};

export default EntryCard;
