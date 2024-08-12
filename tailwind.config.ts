import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
    fontFamily: {
      primary: "var(--font-montserrat)",
      secondary: "var(--font-jetbrainsMono)",
    },
    extend: {
      colors: {
        dark: "#18181b",
        "dark-2": "#0E0E11",
        "primary": {
          "50": "#fef2f2",
          "100": "#fee3e2",
          "200": "#fecbca",
          "300": "#fca7a5",
          "400": "#f87571",
          "500": "#ee4540",
          "600": "#db2c27",
          "700": "#b8211d",
          "800": "#991f1b",
          "900": "#7f201d",
          "950": "#450c0a",
        },
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
