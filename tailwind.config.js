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
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
