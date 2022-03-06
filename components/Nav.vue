<template>
  <div
    class="border-b dark:border-gray-800 sticky top-0 z-50 backdrop-blur-xl backdrop-filter"
  >
    <nav
      class="container dark:text-gray-100 flex justify-between items-center w-full py-3 top-0"
    >
      <div class="block md:hidden lg:hidden xl:hidden 2xl:hidden z-50">
        <mobile-menu />
      </div>
      <logo
        class="h-6 hidden md:block lg:block xl:block 2xl:block flex-none stroke-gray-800 dark:stroke-gray-100"
      />
      <happy-input />
      <theme-button />
    </nav>
  </div>
</template>

<script>
import Logo from "../assets/logo.svg?inline";
import Sun from "../assets/sun.svg?inline";
import HappyInput from "./HappyInput.vue";
import ThemeButton from "./ThemeButton.vue";
import MobileMenu from "./MobileMenu.vue";

export default {
  components: { Logo, Sun, HappyInput, ThemeButton, MobileMenu },
};
</script>
<style scoped></style>
