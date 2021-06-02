module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'raptors-red': '#CE1141',
        'raptors-black': '#000000',
        'raptors-silver': '#A1A1A4'
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    fontSize: ['responsive', 'hover'],
    extend: {},
  },
  plugins: [],
}
