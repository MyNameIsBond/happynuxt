const colors = require("tailwindcss/colors");
module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "1rem",
      maxWidth: {
        sm: "660px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
    colors: {
      gray: colors.trueGray,
      pink: colors.pink,
    },
    extend: {},
    screens: {
      "2xl": { min: "1280px" },
      xl: { min: "1025px", max: "1280px" },
      lg: { min: "1024px", max: "1024px" },
      md: { min: "768px", max: "1023px" },
      sm: { min: "640px", max: "767px" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
