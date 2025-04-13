import { useEffect, useState } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState(() =>
    typeof window !== 'undefined' && localStorage.getItem('theme')
      ? localStorage.getItem('theme')
      : 'system'
  );

  useEffect(() => {
    const root = document.documentElement;
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = () => {
      let appliedTheme = theme === 'system' ? (darkQuery.matches ? 'dark' : 'light') : theme;

      if (appliedTheme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    applyTheme();
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, setTheme];
}
