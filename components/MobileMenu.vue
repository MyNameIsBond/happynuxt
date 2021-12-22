<template>
  <div>
    <button v-on:click="openmenu">
      <burger-menu class="h-3 flex-none stroke-gray-800 dark:stroke-gray-100" />
    </button>
    <div
      v-if="menu"
      v-on:click="openmenu"
      class="absolute w-screen h-screen left-0 top-0 dark:bg-gray-900 bg-gray-50 bg-opacity-75 dark:bg-opacity-50"
    >
      <div
        class="h-full w-72 bg-gray-50 dark:bg-gray-900 border-r dark:border-gray-800 border-gray-100"
      >
        <div
          class="w-full h-12 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 pt-4 pr-4"
        >
          <close
            class="h-3 ml-auto fill-gray-500 dark:fill-gray-300 cursor-pointer"
          />
        </div>
        <div class="pl-10">
          <categories />
          <author-info />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BurgerMenu from "../assets/menu.svg?inline";
import AuthorInfo from "./AuthorInfo.vue";
import Categories from "./Categories.vue";
import close from "../assets/close.svg?inline";

export default {
  components: { BurgerMenu, Categories, AuthorInfo, close },
  scrollToTop: true,
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    openmenu: function () {
      const m = this.menu ? (this.menu = false) : (this.menu = true);
      document.documentElement.style.overflow = m ? "hidden" : "auto";
      return m;
    },
  },
};
</script>

<style></style>
