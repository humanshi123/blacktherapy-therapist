import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        antic: ['var(--font-antic)'],
        gotham: ['var(--font-gotham)'],
        gothamBlack: ['var(--font-GothamPro-Black)'],
        gothamBold: ['var(--font-GothamPro-Bold)'],
        gothamMedium: ['var(--font-GothamPro-Medium)'], 
      },
    },
  },
  plugins: [],
};
export default config;
