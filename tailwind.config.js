module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // primary: '#1c2b2d',
        // secondary: '#1f6f8b',
        // third: '#99a8b2',
        // fourth: '#e6d5b8',
        primary: '#413c69',
        secondary: '#4a47a3',
        third: '#709fb0',
        fourth: '#a7c5eb'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
