export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxthappy",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  target: "static",

  "google-gtag": {
    id: "GTM-599DX78",
    config: {
      anonymize_ip: false,
      send_page_view: false,
      linker: {
        domains: ["https://happynuxt.vercel.app"],
      },
    },
    debug: true,
    disableAutoPageTrack: false,
  },

  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxtjs/svg"],

  modules: ["@nuxt/content", "@nuxt/image", "@nuxtjs/google-gtag"],

  // The screen sizes predefined by `@nuxt/image`:
  image: {
    screens: {
      xs: 660,
      sm: 660,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1280,
      "2xl": 1280,
    },
  },
  build: {},
  colorMode: {
    classSuffix: "",
  },
};
