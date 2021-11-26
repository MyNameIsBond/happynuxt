<template>
  <button
    v-on:click="increment"
    class="
      fill-current
      text-gray-700
      dark:hover:text-pink-400 dark:text-gray-400
      hover:text-pink-600
    "
  >
    <System v-if="themeStorage === 'system'" class="h-6 w-6" />
    <Sun v-else-if="themeStorage === 'light'" class="h-6 w-6" />
    <Moon v-else-if="themeStorage === 'dark'" class="h-6 w-6" />
  </button>
</template>

<script>
import System from "../assets/system.svg?inline";
import Sun from "../assets/sun.svg?inline";
import Moon from "../assets/moon.svg?inline";
export default {
  components: { Sun, Moon, System },
  data() {
    return {
      counter: 0,
      theme: ["system", "light", "dark"],
      themeStorage: "",
    };
  },
  mounted: function () {
    setTheme: {
      this.themeStorage = localStorage["nuxt-color-mode"];
    }
  },
  watch: {
    counter: function () {
      this.$colorMode.preference = this.theme[this.counter];
      this.themeStorage = this.$colorMode.preference;
    },
  },
  methods: {
    increment: function () {
      if (this.counter === 2) {
        return (this.counter = 0);
      } else {
        return this.counter++;
      }
    },
  },
};
</script>

<style></style>
