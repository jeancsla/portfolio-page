import React from "react";
import { motion } from "framer-motion";
import SkillCard from "../SkillCard";
import { SKILL_CATEGORIES } from "../../constants";
import { useAppContext } from "../../services/AppContext";

const SkillsSection: React.FC = () => {
  const { t, isDark } = useAppContext();

  return (
    <section id="skills" className="mb-16 sm:mb-24 md:mb-32">
      <motion.h2
        className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 ${isDark ? "text-white" : "text-slate-900"}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
      >
        {t("section.skills")}
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
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
        {SKILL_CATEGORIES.map((category) => (
          <motion.div
            key={category.id}
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 20 },
              visible: { opacity: 1, scale: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <SkillCard category={category} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default React.memo(SkillsSection);
