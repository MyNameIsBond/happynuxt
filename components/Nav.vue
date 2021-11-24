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
    <Input class="" />
    <ThemeButton />
    <!-- <select
      v-model="$colorMode.preference"
      class="
        border
        w-24
        h-8
        dark:bg-gray-900 dark:text-white dark:border-gray-700
      "
    >
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select> -->
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
