/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
    colors: {
      ngl_black: "#262626",
      ngl_gray: "#707070",
      ngl_gray_2: "#D0D5DD",
      ngl_gray_3: "#757E95",
      ngl_white: "#Ffffff",
      ngl_white_1: "#FAFAFA",
      ngl_white_2: "#FFF8F6",
      ngl_orange: "#FE3B00",
    },
    fontSize: {
      text_56: "56px",
      text_51: "51px",
      xsm: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "36px",
      "32xl": "32px",
      "40xl": "40px",
      "41xl": "41px",
      "48xl": "48px",
    },

    screens: {
      xsm: { min: "280px", max: "639px" },
      // => @media (min-width: 280px) { ... }
      sm: { min: "640px", max: "767px" },
      // => @media (min-width: 1677px) { ... }
      "2xl": { min: "1677px" },
    },
  },
  plugins: [],
};
