/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'app-white': '#f3f4f6',
        'app-pink': '#be185d',
        'app-orange': '#ef4444',
        'app-text-dark': '#1f2937',
        'app-text-gray': '#939393',
        'app-text-light-gray': '#ABABAB',
      }
    },
  },
  plugins: [],
}
