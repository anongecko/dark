// src/app/layout.tsx
"use client";

import { ReactNode, useState, useEffect } from 'react';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { generatePalette } from '@/utils/palette';
import { ThemeContext } from '@/context/ThemeContext';

interface CustomThemeProviderProps extends ThemeProviderProps {
  children: ReactNode;
}

const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({ children, ...props }) => {
  const [baseColor, setBaseColor] = useState('#000000');

  useEffect(() => {
    const palette = generatePalette(baseColor);
    Object.entries(palette).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  }, [baseColor]);

  return (
    <NextThemesProvider {...props}>
      <ThemeContext.Provider value={{ baseColor, setBaseColor }}>
        {children}
      </ThemeContext.Provider>
    </NextThemesProvider>
  );
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CustomThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </CustomThemeProvider>
      </body>
    </html>
  );
}