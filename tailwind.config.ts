import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./types/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        cream: {
          DEFAULT: "#f8f5f0",
          50: "#fdfcfa",
          100: "#f8f5f0",
          200: "#f0ebe2",
          300: "#e5ddd0",
        },
        ink: {
          DEFAULT: "#0f1923",
          light: "#3d4f5c",
          muted: "#8a9aaa",
          faint: "#b8c4ce",
        },
        gold: {
          DEFAULT: "#c9a84c",
          50: "#fdf9ee",
          100: "#f9f0d3",
          200: "#f2dfa5",
          300: "#e9c96d",
          400: "#c9a84c",
          500: "#b8933a",
          600: "#a17a2e",
          700: "#856027",
          800: "#6e4e26",
          900: "#5d4124",
        },
        navy: {
          DEFAULT: "#0f1923",
          50: "#f3f5f7",
          100: "#e4e8ec",
          200: "#c9d1d9",
          300: "#a3b0bd",
          400: "#768899",
          500: "#5b6d7e",
          600: "#4d5c6b",
          700: "#424d59",
          800: "#3a434c",
          900: "#0f1923",
          950: "#080e14",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Instrument Serif", "serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(1rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateX(-0.75rem)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out",
        "slide-up": "slide-up 0.5s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
      },
    },
  },
  plugins: [typography, forms],
};

export default config;
