import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  Suspense,
  lazy,
} from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "./components/Header";
import FloatingOrbs from "./components/FloatingOrbs";
import { PORTFOLIO_ENTRIES } from "./constants";
import { Entry } from "./types";
import { useAppContext } from "./services/AppContext";

// Sections
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import ProjectsSection from "./components/sections/ProjectsSection";
import SkillsSection from "./components/sections/SkillsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ContactSection from "./components/ContactSection";

// Lazy loaded components
const ProjectDetail = lazy(() => import("./components/ProjectDetail"));

const App: React.FC = () => {
  const { start, end, isDark, t, lang, toggleLang } = useAppContext();
  const [currentProject, setCurrentProject] = useState<Entry | null>(null);

  // Simple hash-based routing with error handling
  useEffect(() => {
    const handleHashChange = () => {
      try {
        const hash = window.location.hash;
        if (hash.startsWith("#project/")) {
          const id = hash.replace("#project/", "");
          const project = PORTFOLIO_ENTRIES.find((p) => p.id === id);
          if (project) {
            setCurrentProject(project);
          } else {
            setCurrentProject(null);
            window.location.hash = "";
          }
        } else {
          setCurrentProject(null);
        }
      } catch (error) {
        console.error("Hash navigation error:", error);
        setCurrentProject(null);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const scrollTo = useCallback(
    (id: string) => {
      try {
        if (currentProject) {
          window.location.hash = "";
          // Small delay to allow home page to mount before scrolling
          setTimeout(() => {
            try {
              const el = document.getElementById(id);
              if (el) el.scrollIntoView({ behavior: "smooth" });
            } catch (error) {
              console.warn("scrollIntoView failed:", error);
            }
          }, 50);
        } else {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
      } catch (error) {
        console.warn("scrollTo error:", error);
      }
    },
    [currentProject],
  );

  const handleProjectClick = useCallback((project: Entry) => {
    try {
      window.location.hash = `project/${project.id}`;
    } catch (error) {
      console.error("Failed to navigate to project:", error);
    }
  }, []);

  const goBack = useCallback(() => {
    try {
      window.location.hash = "";
    } catch (error) {
      console.warn("goBack error:", error);
    }
  }, []);

  const projects = useMemo(
    () => PORTFOLIO_ENTRIES.filter((e) => e.type === "project"),
    [],
  );
  const experiences = useMemo(
    () => PORTFOLIO_ENTRIES.filter((e) => e.type === "experience"),
    [],
  );

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Jean Aniceto",
      jobTitle: "Revenue Operations Analyst",
      description:
        "Revenue Operations professional with expertise in CRM management, data automation, and business intelligence. Proven track record improving forecast accuracy by 15% and reducing manual work by 20+ hours/week.",
      url: "https://jeancsla.github.io/portfolio-page/",
      sameAs: [
        "https://linkedin.com/in/jeancsla",
        "https://github.com/jeancsla",
      ],
      knowsAbout: [
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
        "Workflow Automation",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Revenue Operations Analyst",
        skills:
          "HubSpot CRM, SQL, n8n, Python, Data Analytics, Process Automation, Revenue Forecasting",
      },
    }),
    [],
  );

  return (
    <div
      className="min-h-screen transition-colors duration-[2000ms] pb-20 relative"
      style={{
        background: `linear-gradient(to bottom, ${start}, ${end})`,
        backgroundAttachment: "fixed",
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

      <FloatingOrbs />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <Header onNavigate={scrollTo} toggleLang={toggleLang} lang={lang} />

      <main className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 max-w-4xl relative z-10">
        <Suspense
          fallback={
            <div className="min-h-[60vh] flex items-center justify-center opacity-50">
              Loading...
            </div>
          }
        >
          {currentProject ? (
            <ProjectDetail project={currentProject} t={t} onBack={goBack} />
          ) : (
            <>
              <Hero />
              <About />
              <ProjectsSection
                projects={projects}
                onProjectClick={handleProjectClick}
              />
              <SkillsSection />
              <ExperienceSection experiences={experiences} />
              <ContactSection />
            </>
          )}
        </Suspense>

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </main>

      <footer className="container mx-auto px-6 text-center opacity-40 text-sm">
        <p>{t("footer.copyright")}</p>
      </footer>
    </div>
  );
};

export default App;
