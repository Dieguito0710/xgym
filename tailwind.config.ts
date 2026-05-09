import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        surface: "#111111",
        "surface-2": "#161616",
        "surface-3": "#1C1C1C",
        border: "#242424",
        "border-bright": "#333333",
        accent: "#FF3D00",
        "accent-2": "#FF8C00",
        "accent-muted": "#FF3D0022",
        primary: "#FFFFFF",
        secondary: "#A0A0A0",
        muted: "#555555",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "fire": "linear-gradient(135deg, #FF3D00 0%, #FF8C00 100%)",
        "fire-subtle": "linear-gradient(135deg, #FF3D0033 0%, #FF8C0022 100%)",
        "glow": "radial-gradient(ellipse at center, #FF3D0033 0%, transparent 70%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "counter": "counter 2s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "gradient-x": "gradientX 8s ease infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px #FF3D0066, 0 0 60px #FF3D0022" },
          "50%": { boxShadow: "0 0 40px #FF3D00AA, 0 0 100px #FF3D0044" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        glow: "0 0 30px #FF3D0044",
        "glow-lg": "0 0 60px #FF3D0066",
        "card": "0 1px 0 0 #242424, 0 0 0 1px #1a1a1a",
        "glass": "inset 0 1px 0 0 rgba(255,255,255,0.06), 0 1px 0 0 rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
