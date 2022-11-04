// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   purge: [
//     "./index.html",
//     "./src/**/*.{vue,js,ts,jsx,tsx}",
//     "./src/components/**/ *.vue",
//     "./components/**/*.vue",
//     "./src/views/**/*.vue",
//     "./views/**/*.vue",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         "deep-brown": "#D87D4A",
//         "light-brown": "#fbaf85",
//         "deep-black": "#101010",
//         grey: "#F1F1F1",
//         "light-grey": "#FAFAFA",
//       },
//     },
//     fontFamily: {
//       Manrope: ["Manrope", "sans-serif"],
//     },
//     backgroundSize: {
//       "100": "100% 100%",
//       "110": "110%",
//       "125": "125%",
//       "150": "150%",
//       "175": "175%"
//     },
//   },
//   plugins: [],
// };
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
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
    extend: {
      screens: {
        "xs": '350px',
        ...defaultTheme.screens
      },
      height: {
        '90v': '80vh',
        '70v': '70vh'
      },
      colors: {
        "deep-brown": "#D87D4A",
        "light-brown": "#fbaf85",
        "deep-black": "#101010",
        'grey': "#F1F1F1",
        "light-grey": "#FAFAFA",
      },
    },
  },
}