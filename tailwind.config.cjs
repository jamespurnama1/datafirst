/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal': {
          100: '#E5F1EF',
          500: '#D4EBE8',
          900: '#4CB4AC',
        },
        'orange': '#F59709',
        'gray': '#F5F5F5',
      }
    },
  },
  plugins: [],
}

