
import React from 'react';
import { motion } from 'framer-motion';
import { SkillCategory } from '../types';
import { useSkyTheme } from '../services/theme';
import { useI18n } from '../services/i18n';

interface SkillCardProps {
  category: SkillCategory;
}

const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  const { isDark } = useSkyTheme();
  const { t } = useI18n();

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'expert':
        return isDark
          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
          : 'bg-emerald-100 text-emerald-700 border-emerald-300';
      case 'proficient':
        return isDark
          ? 'bg-blue-500/20 text-blue-300 border-blue-500/30'
          : 'bg-blue-100 text-blue-700 border-blue-300';
      case 'familiar':
        return isDark
          ? 'bg-purple-500/20 text-purple-300 border-purple-500/30'
          : 'bg-purple-100 text-purple-700 border-purple-300';
      default:
        return '';
    }
  };

  return (
    <motion.article
      className={`glass p-6 rounded-2xl ${isDark ? 'border-white/10' : 'border-white/30'}`}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    >
      <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
        {t(category.categoryKey)}
      </h3>
      <p className={`text-sm mb-6 ${isDark ? 'text-white/60' : 'text-slate-600'}`}>
        {t(category.descriptionKey)}
      </p>

      <div className="space-y-3">
        {category.skills.map((skill) => (
          <div
            key={skill.name}
            className="flex justify-between items-center"
          >
            <span
              className={`text-sm font-medium ${isDark ? 'text-white/90' : 'text-slate-800'}`}
            >
              {skill.name}
            </span>
            <span
              className={`text-[9px] px-3 py-1 rounded-full uppercase tracking-wider font-bold border ${getLevelColor(
                skill.level
              )}`}
            >
              {t(`skills.level.${skill.level}`)}
            </span>
          </div>
        ))}
      </div>
    </motion.article>
  );
};

export default React.memo(SkillCard);
