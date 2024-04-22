import type { Config } from "tailwindcss";
const { spacing } = require("tailwindcss/defaultTheme");
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        notosanskr: ["var(--font-notosanskr)"],
        aritaburi: ["var(--font-aritaburi)"],
      },
      transitionProperty: {
        "max-height": "max-height",
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            "h1,h2,h3,h4": {
              "scroll-margin-top": spacing[32],
            },
          },
        },
      }),
      colors: {
        "item-light": "#f8f8f898",
        "hover-light": "#99999923",
        "hover-dark": "#434343",
        "item-border-light": "#dcdcdc",
        "item-dark": "#1c1c1c",
        "item-border-dark": "#353535",
        "brand-color": "dodgerblue",
        "sub-light": "#ffffff8d",
        "sub-dark": "#3e3e3e",
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("@tailwindcss/typography"),
    "prettier-plugin-tailwindcss",
    require("tailwind-scrollbar"),
    nextui(),
  ],
  important: true,
};
export default config;
