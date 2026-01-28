import React from "react";
import { motion } from "framer-motion";
import EntryCard from "../EntryCard";
import { Entry } from "../../types";
import { useAppContext } from "../../services/AppContext";

interface ExperienceSectionProps {
  experiences: Entry[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
}) => {
  const { t, isDark } = useAppContext();

  return (
    <section id="experience" className="mb-16 sm:mb-24 md:mb-32">
      <motion.h2
        className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 ${isDark ? "text-white" : "text-slate-900"}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
      >
        {t("section.experience")}
      </motion.h2>
      <motion.div
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
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
        {experiences.map((entry) => (
          <motion.div
            key={entry.id}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <EntryCard entry={entry} t={t} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default React.memo(ExperienceSection);
