/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}"  ],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5a4',
      }
    },
  },
  plugins: [],
}
