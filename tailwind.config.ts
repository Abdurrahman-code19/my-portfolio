import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          dark: "#0F4C5C",
          bright: "#2396AF",
        },
        slate: {
          dark: "#2F4F4F",
        },
        charcoal: "#1A202C",
        soft: "#EDF2F7",
      },
      fontFamily: {
        display: ["Clash Display", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
        "shimmer": "shimmer 3s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(35, 150, 175, 0.2), 0 0 20px rgba(35, 150, 175, 0.1)" },
          "100%": { boxShadow: "0 0 10px rgba(35, 150, 175, 0.4), 0 0 40px rgba(35, 150, 175, 0.2)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
