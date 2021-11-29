const colors = require("tailwindcss/colors");
module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    colors: {
      gray: colors.trueGray,
      pink: colors.pink,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
