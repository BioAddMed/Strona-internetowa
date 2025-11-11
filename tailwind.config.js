/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4f7',
          100: '#d7e4eb',
          500: '#0B2A3C', // deep navy for headers/links
          600: '#082232',
          700: '#061b28',
          800: '#051621',
          900: '#031119'
        },
        accent: {
          50: '#fff4e8',
          100: '#ffe6cc',
          500: '#ff6f00', // requested accent
          600: '#e36500',
          700: '#cc5b00'
        }
      }
    }
  },
  plugins: []
}
