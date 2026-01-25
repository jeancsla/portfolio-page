
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import EntryCard from './components/EntryCard';
import ProjectDetail from './components/ProjectDetail';
import { useSkyTheme } from './services/theme';
import { useI18n } from './services/i18n';
import { PORTFOLIO_ENTRIES } from './constants';
import { Entry } from './types';

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

  return (
    <div 
      className="min-h-screen transition-colors duration-[2000ms] pb-20"
      style={{ 
        background: `linear-gradient(to bottom, ${start}, ${end})`,
        backgroundAttachment: 'fixed'
      }}
    >
      <Header onNavigate={scrollTo} toggleLang={toggleLang} lang={lang} />

      <main className="container mx-auto px-6 pt-32 max-w-4xl">
        {currentProject ? (
          <ProjectDetail project={currentProject} t={t} onBack={goBack} />
        ) : (
          <div className="animate-fade-in">
            {/* Hero Section */}
            <section id="hero" className="mb-32 text-center md:text-left">
              <h1 className={`text-6xl md:text-8xl font-black mb-6 tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {t('hero.title')}
              </h1>
              <p className={`text-xl md:text-2xl max-w-2xl font-light leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-700'}`}>
                {t('hero.subtitle')}
              </p>
            </section>

            {/* About Section */}
            <section id="about" className="mb-32">
              <div className={`glass p-8 rounded-3xl ${isDark ? 'border-white/10' : 'border-white/20'}`}>
                <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {t('about.title')}
                </h2>
                <p className={`text-lg leading-loose ${isDark ? 'text-white/80' : 'text-slate-700'}`}>
                  {t('about.text')}
                </p>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mb-32">
              <h2 className={`text-4xl font-bold mb-12 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {t('nav.projects')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map(entry => (
                  <EntryCard 
                    key={entry.id} 
                    entry={entry} 
                    t={t} 
                    onClick={() => handleProjectClick(entry)}
                  />
                ))}
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-32">
              <h2 className={`text-4xl font-bold mb-12 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {t('nav.experience')}
              </h2>
              <div className="space-y-6">
                {experiences.map(entry => (
                  <EntryCard key={entry.id} entry={entry} t={t} />
                ))}
              </div>
            </section>
          </div>
        )}

        {/* SEO Script Simulation */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Sky Portfolio Owner",
            "jobTitle": "Developer",
            "description": "Portfolio built with Sky Engine"
          })}
        </script>
      </main>

      <footer className="container mx-auto px-6 text-center opacity-40 text-sm">
        <p>© 2025 • Designed with Sky Gradient Logic</p>
      </footer>
    </div>
  );
};

export default App;
