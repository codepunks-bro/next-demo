import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#0ea5e9",
          foreground: "#0c4a6e",
        },
        accent: {
          purple: "#7c3aed",
          amber: "#f59e0b",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 20px 80px -32px rgba(14, 165, 233, 0.45)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
};

export default config;
