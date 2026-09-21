'use client';

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
} from 'react';

type Theme = 'light' | 'dark';

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getStoredTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  const storedTheme = localStorage.getItem('theme');

  return storedTheme === 'light' ? 'light' : 'dark';
}

function subscribeToTheme(callback: () => void) {
  window.addEventListener('storage', callback);

  return () => {
    window.removeEventListener('storage', callback);
  };
}

function getServerTheme(): Theme {
  return 'dark';
}

export function ThemeProvider({children}: ThemeProviderProps) {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getStoredTheme,
    getServerTheme,
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const setTheme = (nextTheme: Theme) => {
    localStorage.setItem('theme', nextTheme);

    window.dispatchEvent(new Event('storage'));
  };

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