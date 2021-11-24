<template>
  <button v-on:click="themer">
    <Sun />
  </button>
</template>

<script>
import Sun from "../assets/sun.svg?inline";
export default {
  components: { Sun },
  data: {
    counter: 0,
    theme: ["system", "light", "dark"],
  },
  methods: {
    themer() {
      this.$colorMode.preference = this.theme[this.counter];
      this.increment();
      console.log(this.counter);
      return;
    },
    increment() {
      console.log(this.counter);
      if (this.counter <= 3) {
        return (this.counter = 0);
      } else {
        return this.counter++;
      }
    },
  },
};
</script>

<style></style>
