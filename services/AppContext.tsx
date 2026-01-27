import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { Language, SkyColors } from "../types";
import { TRANSLATIONS } from "../constants";

interface AppContextType {
  lang: Language;
  t: (key: string) => string;
  toggleLang: () => void;
  start: string;
  end: string;
  isDark: boolean;
  hour: number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Safe localStorage wrapper
const safeLocalStorage = {
  getItem: (key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.warn("localStorage.getItem failed:", error);
      return null;
    }
  },
  setItem: (key: string, value: string): boolean => {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.warn("localStorage.setItem failed:", error);
      return false;
    }
  },
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // i18n logic
  const [lang, setLang] = useState<Language>(() => {
    const saved = safeLocalStorage.getItem("portfolio_lang");
    return (saved as Language) || "en";
  });

  const t = useCallback(
    (key: string): string => {
      const entry = TRANSLATIONS[key];
      if (!entry) return key;
      const translation = entry[lang];
      if (!translation) return entry["en"] || key;
      return translation;
    },
    [lang],
  );

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const newLang = prev === "en" ? "pt" : "en";
      safeLocalStorage.setItem("portfolio_lang", newLang);
      return newLang;
    });
  }, []);

  // Theme logic
  const [theme, setTheme] = useState<SkyColors>({
    start: "#fcd34d",
    end: "#60a5fa",
    isDark: false,
  });
  const [hour, setHour] = useState(new Date().getHours());

  useEffect(() => {
    const updateTheme = () => {
      const h = new Date().getHours();
      setHour(h);

      let colors: SkyColors;
      if (h >= 5 && h < 9) {
        // Dawn
        colors = { start: "#fcd34d", end: "#60a5fa", isDark: false };
      } else if (h >= 9 && h < 17) {
        // Day
        colors = { start: "#60a5fa", end: "#2563eb", isDark: false };
      } else if (h >= 17 && h < 20) {
        // Sunset
        colors = { start: "#f97316", end: "#7c3aed", isDark: true };
      } else {
        // Night
        colors = { start: "#1e1b4b", end: "#020617", isDark: true };
      }
      setTheme(colors);
    };

    updateTheme();
    const interval = setInterval(updateTheme, 60000);
    return () => clearInterval(interval);
  }, []);

  const value = {
    lang,
    t,
    toggleLang,
    ...theme,
    hour,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
