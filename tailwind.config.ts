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
        cream: {
          DEFAULT: "#f5ede0",
          50: "#fdf9f4",
          100: "#f5ede0",
          200: "#ede3d4",
          300: "#dfd0bc",
        },
        gold: {
          DEFAULT: "#b8945a",
          light: "#c9a96e",
          dark: "#9a7a48",
        },
        wine: {
          DEFAULT: "#6b1a2a",
          dark: "#4a0f1c",
        },
        dark: {
          DEFAULT: "#2a1a0e",
          2: "#3d2812",
        },
        muted: "#8a6a48",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Jost", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
