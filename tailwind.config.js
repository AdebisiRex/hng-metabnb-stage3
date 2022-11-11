/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "redRose": 'Red Rose'
      },
      colors:{
        primary: "#A02279",
        dark:"#1D1D1E"
      }
    },
  },
  plugins: [],
};
