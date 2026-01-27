
import React from 'react';
import { motion } from 'framer-motion';
import { useSkyTheme } from '../services/theme';
import { useI18n } from '../services/i18n';
import { CONTACT_INFO } from '../constants';

const ContactSection: React.FC = () => {
  const { isDark } = useSkyTheme();
  const { lang, t } = useI18n();

  const headline = CONTACT_INFO.headline[lang as keyof typeof CONTACT_INFO.headline];
  const subheadline = CONTACT_INFO.subheadline[lang as keyof typeof CONTACT_INFO.subheadline];

  return (
    <section id="contact" className="mb-32">
      <motion.div
        className={`glass p-12 md:p-16 rounded-3xl text-center ${isDark ? 'border-white/10' : 'border-white/30'}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-100px' }}
        whileHover={{
          boxShadow: isDark
            ? '0 20px 60px rgba(0, 0, 0, 0.4)'
            : '0 20px 60px rgba(0, 0, 0, 0.2)'
        }}
      >
        <motion.h2
          className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {headline}
        </motion.h2>
        <motion.p
          className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-700'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {subheadline}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
        >
          {CONTACT_INFO.calendly && (
            <motion.a
              href={CONTACT_INFO.calendly}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 15px 40px rgba(99, 102, 241, 0.5)',
                backgroundColor: '#4f46e5',
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {t('contact.schedule')}
            </motion.a>
          )}
          <motion.a
            href={CONTACT_INFO.resumeUrl}
            download
            className={`px-8 py-4 font-bold rounded-xl glass border ${isDark ? 'text-white border-white/20' : 'text-slate-900 border-white/40'}`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: isDark
                ? '0 15px 40px rgba(0, 0, 0, 0.3)'
                : '0 15px 40px rgba(0, 0, 0, 0.2)',
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {t('contact.resume')}
          </motion.a>
        </motion.div>

        <motion.div
          className="flex justify-center gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.4,
              },
            },
          }}
        >
          <motion.a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            className={`p-3 rounded-full glass ${isDark ? 'border-white/10' : 'border-white/30'}`}
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.15, y: -4 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <svg
              className={`w-6 h-6 ${isDark ? 'text-white' : 'text-slate-900'}`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </motion.a>
          <motion.a
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            className={`p-3 rounded-full glass ${isDark ? 'border-white/10' : 'border-white/30'}`}
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.15, y: -4 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <svg
              className={`w-6 h-6 ${isDark ? 'text-white' : 'text-slate-900'}`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </motion.a>
          <motion.a
            href={`mailto:${CONTACT_INFO.email}`}
            title="Email"
            className={`p-3 rounded-full glass ${isDark ? 'border-white/10' : 'border-white/30'}`}
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.15, y: -4 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <svg
              className={`w-6 h-6 ${isDark ? 'text-white' : 'text-slate-900'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
