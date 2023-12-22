/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        inter: "Inter, sans-serif",
        kalnia: "Kalnia, serif",
        zeyada: "Zeyada, cursive",
        borel: "Borel, cursive",
      },
      colors: {
        page: "#101010",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
