/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#a39193',
        customColorDark: '#a39a7a',
    },
    fontFamily: {
      'kbbubblegum': ['Kbbubblegum', 'sans-serif'],
    },
  },
  plugins: [],
}
}
