import React, { createContext, useContext, useState, useEffect } from 'react';

export type PastelThemeMode = 'lavender-twilight' | 'lavender-cloud';

interface ThemeContextType {
  theme: PastelThemeMode;
  setTheme: (theme: PastelThemeMode) => void;
  toggleTheme: () => void;
  isLight: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<PastelThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('achsah_pastel_theme') as PastelThemeMode;
      if (saved === 'lavender-twilight' || saved === 'lavender-cloud') {
        return saved;
      }
    }
    return 'lavender-twilight'; // Default: Pastel Lavender Twilight
  });

  const setTheme = (newTheme: PastelThemeMode) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('achsah_pastel_theme', newTheme);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'lavender-twilight' ? 'lavender-cloud' : 'lavender-twilight');
  };

  const isLight = theme === 'lavender-cloud';

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('theme-lavender-twilight', 'theme-lavender-cloud');
    root.classList.add(`theme-${theme}`);
    if (isLight) {
      root.classList.add('light-mode');
      root.classList.remove('dark-mode');
    } else {
      root.classList.add('dark-mode');
      root.classList.remove('light-mode');
    }
  }, [theme, isLight]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, isLight }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
