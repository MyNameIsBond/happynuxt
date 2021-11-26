const colors = require("tailwindcss/colors");
module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.trueGray,
      pink: colors.pink,
    },
    extend: {},
  },
  variants: {
    extend: {
      borderStyle: ["hover"],
    },
  },
  plugins: [],
};
