'use client';

import {createContext, useContext, useEffect, useState} from 'react';

type Theme = 'light' | 'dark';

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({children}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === 'light' || storedTheme === 'dark') {
      setTheme(storedTheme);
      document.documentElement.classList.toggle(
        'dark',
        storedTheme === 'dark',
      );
      return;
    }

    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
}