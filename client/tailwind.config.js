/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './public/**/*.{html,js}',
      './pages/**/*.{html,js}',
      './components/**/*.{html,js}'
    ],
    theme: {
      extend: {},
    },
  
    plugins: [require("daisyui")],
 }