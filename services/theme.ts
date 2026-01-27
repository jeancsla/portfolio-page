import { useAppContext } from "./AppContext";

export const useSkyTheme = () => {
  const { start, end, isDark, hour } = useAppContext();
  return { start, end, isDark, hour };
};
