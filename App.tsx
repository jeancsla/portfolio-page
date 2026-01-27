
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from './components/Header';
import EntryCard from './components/EntryCard';
import ProjectDetail from './components/ProjectDetail';
import SkillCard from './components/SkillCard';
import ContactSection from './components/ContactSection';
import { useSkyTheme } from './services/theme';
import { useI18n } from './services/i18n';
import { PORTFOLIO_ENTRIES, SKILL_CATEGORIES } from './constants';
import { Entry } from './types';
import FloatingOrbs from './components/FloatingOrbs';

const App: React.FC = () => {
  const { start, end, isDark } = useSkyTheme();
  const { lang, t, toggleLang } = useI18n();
  const [currentProject, setCurrentProject] = useState<Entry | null>(null);

  // Simple hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project/')) {
        const id = hash.replace('#project/', '');
        const project = PORTFOLIO_ENTRIES.find(p => p.id === id);
        if (project) {
          setCurrentProject(project);
        } else {
          setCurrentProject(null);
          window.location.hash = '';
        }
      } else {
        setCurrentProject(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const scrollTo = (id: string) => {
    if (currentProject) {
      window.location.hash = '';
      // Small delay to allow home page to mount before scrolling
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectClick = (project: Entry) => {
    window.location.hash = `project/${project.id}`;
  };

  const goBack = () => {
    window.location.hash = '';
  };

  const projects = PORTFOLIO_ENTRIES.filter(e => e.type === 'project');
  const experiences = PORTFOLIO_ENTRIES.filter(e => e.type === 'experience');
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="min-h-screen transition-colors duration-[2000ms] pb-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, ${start}, ${end})`,
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Parallax Background Layer */}
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          y: backgroundY,
          opacity: 0.3,
        }}
      >
        <div
          className="w-full h-full"
          style={{
            background: `radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                         radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)`,
          }}
        />
      </motion.div>

      {/* Floating Orbs */}
      <FloatingOrbs />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <Header onNavigate={scrollTo} toggleLang={toggleLang} lang={lang} />

      <main className="container mx-auto px-6 pt-32 max-w-4xl">
        {currentProject ? (
          <ProjectDetail project={currentProject} t={t} onBack={goBack} />
        ) : (
          <div>
            {/* Hero Section */}
            <section id="hero" className="mb-32 text-center md:text-left">
              <motion.h1
                className={`text-6xl md:text-8xl font-black mb-6 tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                {t('hero.title')}
              </motion.h1>
              <motion.p
                className={`text-xl md:text-2xl max-w-2xl font-light leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-700'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              >
                {t('hero.subtitle')}
              </motion.p>
            </section>

            {/* About Section */}
            <section id="about" className="mb-32">
              <motion.div
                className={`glass p-8 rounded-3xl ${isDark ? 'border-white/10' : 'border-white/20'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {t('about.title')}
                </h2>
                <p className={`text-lg leading-loose ${isDark ? 'text-white/80' : 'text-slate-700'}`}>
                  {t('about.text')}
                </p>
              </motion.div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mb-32">
              <motion.h2
                className={`text-4xl font-bold mb-12 ${isDark ? 'text-white' : 'text-slate-900'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-50px' }}
              >
                {t('section.projects')}
              </motion.h2>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.1,
                    },
                  },
                }}
              >
                {projects.map(entry => (
                  <motion.div
                    key={entry.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  >
                    <EntryCard
                      entry={entry}
                      t={t}
                      onClick={() => handleProjectClick(entry)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="mb-32">
              <motion.h2
                className={`text-4xl font-bold mb-12 ${isDark ? 'text-white' : 'text-slate-900'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-50px' }}
              >
                {t('section.skills')}
              </motion.h2>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 0.1,
                    },
                  },
                }}
              >
                {SKILL_CATEGORIES.map(category => (
                  <motion.div
                    key={category.id}
                    variants={{
                      hidden: { opacity: 0, scale: 0.9, y: 20 },
                      visible: { opacity: 1, scale: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  >
                    <SkillCard category={category} />
                  </motion.div>
                ))}
              </motion.div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-32">
              <motion.h2
                className={`text-4xl font-bold mb-12 ${isDark ? 'text-white' : 'text-slate-900'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-50px' }}
              >
                {t('section.experience')}
              </motion.h2>
              <motion.div
                className="space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.1,
                    },
                  },
                }}
              >
                {experiences.map(entry => (
                  <motion.div
                    key={entry.id}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  >
                    <EntryCard entry={entry} t={t} />
                  </motion.div>
                ))}
              </motion.div>
            </section>

            {/* Contact Section */}
            <ContactSection />
          </div>
        )}

        {/* SEO Script Simulation */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Jean Aniceto",
            "jobTitle": "Revenue Operations Analyst",
            "description": "Revenue Operations professional with expertise in CRM management, data automation, and business intelligence. Proven track record improving forecast accuracy by 15% and reducing manual work by 20+ hours/week.",
            "url": "https://jeancsla.github.io/portfolio-page/",
            "sameAs": [
              "https://linkedin.com/in/jeancsla",
              "https://github.com/jeancsla"
            ],
            "knowsAbout": [
              "Revenue Operations",
              "CRM Management",
              "HubSpot",
              "Data Analytics",
              "Business Intelligence",
              "Process Automation",
              "SQL",
              "n8n",
              "Revenue Forecasting",
              "Customer Retention",
              "Data Pipelines",
              "Workflow Automation"
            ],
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Revenue Operations Analyst",
              "skills": "HubSpot CRM, SQL, n8n, Python, Data Analytics, Process Automation, Revenue Forecasting"
            }
          })}
        </script>
      </main>

      <footer className="container mx-auto px-6 text-center opacity-40 text-sm">
        <p>{t('footer.copyright')}</p>
      </footer>
    </div>
  );
};

export default App;
