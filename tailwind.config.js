module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        brand:"#fb8500",
        bigText: "#e5ebed",
        sectionTitle: "#d5dee1",
        sectionSubTitle: "#bfc7ca",
        body: "#cac2bf",
        dark: '#001123',

      },
      zIndex: {
        '500': '500'
      }
    },
    container:{
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5rem',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
