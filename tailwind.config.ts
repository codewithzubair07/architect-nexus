import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "an-black": "#030711",
        "an-surface": "#0b1428",
        "an-surface2": "#111f3c",
        "an-gold": "#00e5ff",
        "an-gold-dim": "rgba(0,229,255,0.2)",
        "an-white": "#f8fbff",
        "an-muted": "#91a8cf",
        "an-border": "rgba(0, 229, 255, 0.24)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        pulseGlow: "pulseGlow 2.6s ease-in-out infinite",
        orbit: "orbit 16s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.42" },
          "50%": { opacity: "1" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
