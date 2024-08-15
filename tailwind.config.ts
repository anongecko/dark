import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...(defaultTheme.fontFamily.sans as string[])],
        primary: ["Primary", ...(defaultTheme.fontFamily.sans as string[])],
        secondary: ["Secondary", ...(defaultTheme.fontFamily.sans as string[])],
      },
      colors: {
        background: "#000",
        foreground: "#FFF",
        border: "#333",
        input: "#404040",
        ring: "#f10101",

        primary: {
          DEFAULT: "#f10101",
          foreground: "#FFF",
        },
        secondary: {
          DEFAULT: "#333",
          foreground: "#FFF",
        },
        destructive: {
          DEFAULT: "#b20000",
          foreground: "#FFF",
        },
        muted: {
          DEFAULT: "#262626",
          foreground: "#AAA",
        },
        accent: {
          DEFAULT: "#b20000",
          foreground: "#FFF",
        },
        popover: {
          DEFAULT: "#1A1A1A",
          foreground: "#FFF",
        },
        card: {
          DEFAULT: "#1A1A1A",
          foreground: "#FFF",
        },
        crimson: "#f10000",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;