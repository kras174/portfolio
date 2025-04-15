/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#7928ca',
        accent: '#79ffe1',
        dark: {
          primary: '#60a5fa',
          secondary: '#7928ca',
          accent: '#79ffe1',
          text: '#fff',
          'text-secondary': '#888',
          background: '#000',
          'background-secondary': '#111',
          'background-tertiary': '#171717',
          border: '#333'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}