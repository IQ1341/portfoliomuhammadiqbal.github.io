/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode:'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary: 'hsl(183, 42%, 37%)',
        dark: '#0f172a ',
        secondary: '#64748b',
        bgr: '#F7DDA4',
      },
      screens:{
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
