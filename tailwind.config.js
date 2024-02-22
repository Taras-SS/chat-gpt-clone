/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*{js,ts,jsx,tsx}",
    "./components/**/*{js,ts,jsx,tsx}"
  ],
    theme: {
      extend: {
        colors: {
            Default: '#212121'
        }
      }
    },
  plugins: [],
}
