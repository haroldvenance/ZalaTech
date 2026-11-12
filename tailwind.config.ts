import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // <-- TRÈS IMPORTANT pour le mode sombre
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "zala-blue": "#0B1120",
        "zala-blue-light": "#1E293B",
        "zala-orange": "#F97316",
        "zala-orange-dark": "#EA580C",
        "zala-cream": "#F8FAFC",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "zala-gradient": "linear-gradient(135deg, #0B1120 0%, #111827 100%)",
        "zala-radial": "radial-gradient(circle at center, rgba(249, 115, 22, 0.15) 0%, transparent 70%)",
      },
      boxShadow: {
        "glow": "0 0 20px rgba(249, 115, 22, 0.4)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
    },
  },
  plugins: [],
};
export default config;