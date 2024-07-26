"use client";

import { createContext, useContext } from 'react';

interface ThemeContextType {
  baseColor: string;
  setBaseColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  baseColor: '#000000',
  setBaseColor: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export { ThemeContext };