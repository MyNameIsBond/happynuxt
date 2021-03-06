const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      typography: {
        default: {
          css: {
            pre: false,
            code: false,
            "pre code": false,
            "code::before": false,
            "code::after": false,
          },
        },
      },
    },
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
      gray: colors.stone,
      green: colors.emerald,
    },
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

  plugins: [require("@tailwindcss/typography")],
};
