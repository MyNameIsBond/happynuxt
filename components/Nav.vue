<template>
  <div class="border-b dark:border-gray-800">
    <nav
      class="
        container
        dark:text-gray-100
        flex
        justify-between
        w-full
        py-3
        px-6
        z-40
        sticky
        top-0
        bg-gray-100
        dark:bg-gray-900
      "
    >
      <logo
        class="h-9 flex-none stroke-current text-gray-800 dark:text-gray-100"
      />
      <HappyInput />
      <ThemeButton />
    </nav>
  </div>
</template>

<script>
import Logo from "../assets/logo.svg?inline";
import Sun from "../assets/sun.svg?inline";
import HappyInput from "./HappyInput.vue";
import ThemeButton from "./ThemeButton.vue";
export default {
  components: { Logo, Sun, HappyInput, ThemeButton },
};
</script>
<style scoped></style>
