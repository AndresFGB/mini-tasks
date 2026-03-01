/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary:   "#03B0BC",
        secondary: "#D2EEFF",
        accent:    "#D4FEFF",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};