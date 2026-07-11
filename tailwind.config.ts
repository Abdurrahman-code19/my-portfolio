import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          primary: "#0A192F",
          secondary: "#172A45",
        },
        accent: {
          DEFAULT: "#3082C5",
          glow: "rgba(48,130,197,0.25)",
          border: "rgba(48,130,197,0.15)",
        },
        text: {
          primary: "#E2E8F0",
          body: "rgba(226,232,240,0.82)",
          muted: "rgba(226,232,240,0.6)",
        },
        border: {
          DEFAULT: "rgba(48,130,197,0.15)",
          hover: "#3082C5",
          input: "rgba(226,232,240,0.2)",
        },
      },
      fontFamily: {
        display: ["Nohemi", "sans-serif"],
        body: ["Geist", "sans-serif"],
      },
      borderRadius: {
        sm: "12px",
        md: "16px",
        lg: "20px",
        xl: "24px",
      },
      boxShadow: {
        sm: "0 8px 24px rgba(0,0,0,0.18)",
        md: "0 15px 40px rgba(0,0,0,0.3)",
        lg: "0 25px 60px rgba(0,0,0,0.45)",
        glow: "0 0 30px rgba(48,130,197,0.25)",
        "glow-sm": "0 4px 20px rgba(48,130,197,0.35)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite alternate",
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 10px rgba(48,130,197,0.15), 0 0 30px rgba(48,130,197,0.05)" },
          "100%": { boxShadow: "0 0 20px rgba(48,130,197,0.3), 0 0 50px rgba(48,130,197,0.1)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #3082C5, #2563A0)",
      },
    },
  },
  plugins: [],
};

export default config;
