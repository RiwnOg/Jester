'use client';
import { ThemeProvider } from 'next-themes';
import type { FC, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
    >
      <Toaster />
      {children}
    </ThemeProvider>
  );
};

export default Providers;
