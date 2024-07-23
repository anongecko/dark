"use client"

import React, { createContext, useState, useEffect, useContext } from 'react';
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { generatePalette } from '../../utils/palette';

interface ThemeContextType {
  baseColor: string;
  setBaseColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  baseColor: '#000000',
  setBaseColor: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, ...props }) => {
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