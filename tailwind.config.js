/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        paragraph: "15px",
      },
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
    colors: {
      white: "hsl(0, 0%, 100%)",
      slate: {
        300: "hsl(212, 45%, 89%)",
        500: "hsl(216, 15%, 48%)",
        900: "hsl(218, 44%, 22%)",
      },
    },
  },
  plugins: [],
};
