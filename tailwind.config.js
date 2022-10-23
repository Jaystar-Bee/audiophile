/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue}"],
  theme: {
    extend: {
      colors: {
        "deep-brown": "#D87D4A",
        "light-brown": "#fbaf85",
        "deep-black": "#101010",
        grey: "#F1F1F1",
        "light-grey": "#FAFAFA",
      },
    },
    fontFamily: {
      Manrope: ["Manrope", "sans-serif"],
    },
    backgroundSize: {
      "100": "100% 100%",
      "110": "110%",
      "125": "125%",
      "150": "150%",
      "175": "175%"
    },
  },
  plugins: [],
};