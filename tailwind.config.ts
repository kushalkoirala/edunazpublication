import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import containerQueries from "@tailwindcss/container-queries";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          slate: "#3F4056",
          slateDark: "#2C2D3E",
          slateLight: "#55566C",
          gold: "#D9A93F",
          goldHover: "#C4942B",
          bgGray: "#F3F3F3",
          dark: "#1A1A1A",
          muted: "#777777",
          borderHairline: "#E5E5E5",
          borderDark: "#55566C",
        },
      },
      fontFamily: {
        heading: ["var(--font-marcellus)", "serif"],
        body: ["var(--font-jost)", "sans-serif"],
        signature: ["var(--font-great-vibes)", "cursive"],
      },
      letterSpacing: {
        eyebrow: "0.2em",
      },
    },
  },
  plugins: [
    forms,
    containerQueries,
  ],
};

export default config;
