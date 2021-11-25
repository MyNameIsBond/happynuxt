<template>
  <nav
    class="
      dark:text-gray-100 dark:bg-gray-900
      bg-gray-100
      flex
      justify-between
      w-full
      p-4
      border-b
    "
  >
    <Logo
      class="h-9 flex-none stroke-current text-gray-800 dark:text-gray-100"
    />
    <Input />
    <ThemeButton />
  </nav>
</template>

<script>
import Logo from "../assets/logo.svg?inline";
import Sun from "../assets/sun.svg?inline";
import Input from "./HappyInput.vue";
import ThemeButton from "./ThemeButton.vue";
export default {
  components: { Logo, Sun, Input, ThemeButton },
};
</script>

<style></style>
