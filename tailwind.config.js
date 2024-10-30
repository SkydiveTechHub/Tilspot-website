/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#002B6F',
        secondary:'#E00A0A',
        tertiary:'#BADDFB'
      }
    },
  },
  plugins: [],
}