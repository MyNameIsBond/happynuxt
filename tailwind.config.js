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
        xl: "1024px",
        "2xl": "1024px",
      },
    },
    colors: {
      gray: colors.trueGray,
      pink: colors.pink,
    },
    extend: {},
    screens: {
      "2xl": { min: "1024px" },
      xl: { min: "1024px" },
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
