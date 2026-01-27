import { useAppContext } from "./AppContext";

export const useI18n = () => {
  const { lang, t, toggleLang } = useAppContext();
  return { lang, t, toggleLang };
};
