<template>
  <button v-on:click="increment">
    <System v-if="(counter = 0)" />
    <Sun v-else-if="(counter = 1)" />
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
    };
  },
  watch: {
    counter: function () {
      this.$colorMode.preference = this.theme[this.counter];
    },
  },
  methods: {
    increment: function () {
      if (this.counter >= 3) {
        return (this.counter = 0);
      } else {
        return (this.counter += 1);
      }
    },
  },
};
</script>

<style></style>
