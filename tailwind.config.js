const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      reross: ['reross-quadratic', 'sans-serif']
    },
    colors: {
      ...defaultTheme.colors,
      white: "#F8F8F8",
      black: "#292F36",
      red: "#DF2935",
      yellow: "#F7B538",
      blue: "#3C91E6"
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
