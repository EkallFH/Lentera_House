/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#8080FF',
        secondary: '#FF9376',
        third: '#999999',
        fourth: '#F6F8FC'
      },
      screens: {
        'xl': '1320',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

