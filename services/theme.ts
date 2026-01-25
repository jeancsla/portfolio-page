
import { useState, useEffect } from 'react';
import { SkyColors } from '../types';

export const useSkyTheme = () => {
  const [theme, setTheme] = useState<SkyColors>({
    start: '#fcd34d',
    end: '#60a5fa',
    isDark: false,
  });

  const [hour, setHour] = useState(new Date().getHours());

  useEffect(() => {
    const updateTheme = () => {
      const h = new Date().getHours();
      setHour(h);

      let colors: SkyColors;

      if (h >= 5 && h < 9) { // Dawn
        colors = { start: '#fcd34d', end: '#60a5fa', isDark: false };
      } else if (h >= 9 && h < 17) { // Day
        colors = { start: '#60a5fa', end: '#2563eb', isDark: false };
      } else if (h >= 17 && h < 20) { // Sunset
        colors = { start: '#f97316', end: '#7c3aed', isDark: true };
      } else { // Night
        colors = { start: '#1e1b4b', end: '#020617', isDark: true };
      }

      setTheme(colors);
    };

    updateTheme();
    const interval = setInterval(updateTheme, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return { ...theme, hour };
};
