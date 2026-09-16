'use client';

import {Moon, Sun} from 'lucide-react';

import {Button} from '@/components/ui/button';
import {useTheme} from '@/components/providers/theme-provider';

export function ThemeToggle() {
  const {theme, setTheme} = useTheme();

  const isDark = theme === 'dark';

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="rounded-full"
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
}