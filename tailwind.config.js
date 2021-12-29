const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      reross: ['reross-quadratic', 'sans-serif'],
    },
    colors: {
      ...defaultTheme.colors,
      white: "#F8F8F8",
      black: "#292F36",
      altRed: "#DF2935",
      altYellow: "#F7B538",
      altBlue: "#3C91E6",
      altGray: "#BEC5C5"
    },
    fontWeight: {
      extraLight: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      black: 900,
    },
      extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
