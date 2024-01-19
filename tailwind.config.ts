import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors:{
      ...colors,
      yellow: '#F9B800',
      blue: '#0052B4',
      purple: '#9747FF',
      red: '#D80027',
      dark: '#262626',
      grey: '#787878',
      light: {
        0: '#FFF1C9',
        1: '#FEEDBC',
        2: '#FFE18B',
        3: '#D3B970',
        4: '#FFBB45',
      }
    }
  },
  plugins: [],
};
export default config;
