import React from "react";
import { motion } from "framer-motion";
import { useAppContext } from "../../services/AppContext";

const Hero: React.FC = () => {
  const { t, isDark } = useAppContext();

  return (
    <section
      id="hero"
      className="mb-16 sm:mb-24 md:mb-32 text-center md:text-left"
    >
      <motion.h1
        className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-6 tracking-tighter ${isDark ? "text-white" : "text-slate-900"}`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {t("hero.title")}
      </motion.h1>
      <motion.p
        className={`text-lg sm:text-xl md:text-2xl max-w-2xl font-light leading-relaxed ${isDark ? "text-white/70" : "text-slate-700"}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        {t("hero.subtitle")}
      </motion.p>
    </section>
  );
};

export default React.memo(Hero);
