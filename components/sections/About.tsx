import React from "react";
import { motion } from "framer-motion";
import { useAppContext } from "../../services/AppContext";

const About: React.FC = () => {
  const { t, isDark } = useAppContext();

  return (
    <section id="about" className="mb-16 sm:mb-24 md:mb-32">
      <motion.div
        className={`glass p-6 sm:p-8 md:p-10 rounded-3xl ${isDark ? "border-white/10" : "border-white/20"}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 ${isDark ? "text-white" : "text-slate-900"}`}
        >
          {t("about.title")}
        </h2>
        <p
          className={`text-base sm:text-lg leading-loose ${isDark ? "text-white/80" : "text-slate-700"}`}
        >
          {t("about.text")}
        </p>
      </motion.div>
    </section>
  );
};

export default React.memo(About);
