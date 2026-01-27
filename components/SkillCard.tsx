
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
      whileHover={{
        y: -8,
        boxShadow: isDark
          ? '0 20px 60px rgba(0, 0, 0, 0.4)'
          : '0 20px 60px rgba(0, 0, 0, 0.2)'
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    >
      <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
        {t(category.categoryKey)}
      </h3>
      <p className={`text-sm mb-6 ${isDark ? 'text-white/60' : 'text-slate-600'}`}>
        {t(category.descriptionKey)}
      </p>

      <div className="space-y-3">
        {category.skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex justify-between items-center"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <span
              className={`text-sm font-medium ${isDark ? 'text-white/90' : 'text-slate-800'}`}
            >
              {skill.name}
            </span>
            <motion.span
              className={`text-[9px] px-3 py-1 rounded-full uppercase tracking-wider font-bold border ${getLevelColor(
                skill.level
              )}`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: index * 0.05 + 0.1 }}
              viewport={{ once: true }}
            >
              {t(`skills.level.${skill.level}`)}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </motion.article>
  );
};

export default SkillCard;
