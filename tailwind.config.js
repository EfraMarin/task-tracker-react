module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1c2b2d',
        secondary: '#1f6f8b',
        third: '#99a8b2',
        fourth: '#e6d5b8'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
