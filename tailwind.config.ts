import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-clash-display)", "system-ui", "sans-serif"],
        body: ["var(--font-general-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "clamp(3.5rem, 8vw, 9rem)",
          { lineHeight: "0.95", letterSpacing: "-0.03em" },
        ],
        "display-lg": [
          "clamp(2.5rem, 5vw, 6rem)",
          { lineHeight: "1.0", letterSpacing: "-0.02em" },
        ],
        "display-md": [
          "clamp(2rem, 4vw, 4rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em" },
        ],
        "display-sm": [
          "clamp(1.5rem, 3vw, 2.5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.01em" },
        ],
        "body-lg": [
          "clamp(1.125rem, 1.5vw, 1.375rem)",
          { lineHeight: "1.6" },
        ],
        "body-md": [
          "clamp(1rem, 1.2vw, 1.125rem)",
          { lineHeight: "1.65" },
        ],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        caption: [
          "0.75rem",
          { lineHeight: "1.5", letterSpacing: "0.08em" },
        ],
      },
      colors: {
        cream: "#F8F9FB",
        parchment: "#EFF1F5",
        studio: {
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#B8A4F8",
          400: "#7C5CDB",
          500: "#6B4CE6",
          600: "#5A3DC5",
          700: "#4A2FA3",
          800: "#3B2480",
          900: "#2C1A5E",
        },
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.25, 0.4, 0.25, 1)",
        enter: "cubic-bezier(0.33, 1, 0.68, 1)",
        exit: "cubic-bezier(0.76, 0, 0.24, 1)",
      },
      animation: {
        "scroll-indicator": "bounce-subtle 2s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
      },
      keyframes: {
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
