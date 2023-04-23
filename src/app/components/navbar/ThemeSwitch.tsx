'use client';

import { useTheme } from 'next-themes';

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return null;
  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
    >
      <option value='dark'>Dark</option>
      <option value='light'>Light</option>
    </select>
  );
};

export default ThemeSwitch;
