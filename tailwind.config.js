/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '360': '360px',
      }
    },

    fontFamily: {
      sans: ['Poppins', 'ui-sans-serif', 'system-ui'], // Usa Poppins como sans-serif
      poppins: ['Poppins', 'sans-serif'], // Alias opcional para más control
    },

  },
  plugins: [],
}