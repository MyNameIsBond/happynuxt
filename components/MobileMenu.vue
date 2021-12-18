<template>
  <div>
    <button v-on:click="openmenu">
      <burger-menu
        class="h-3.5 flex-none stroke-current text-gray-800 dark:text-gray-100"
      />
    </button>
    <div
      v-if="menu"
      v-on:click="openmenu"
      class="
        absolute
        w-screen
        h-screen
        left-0
        top-0
        dark:bg-gray-900
        bg-gray-50 bg-opacity-75
      "
    >
      <div class="h-full w-72 bg-gray-50">
        <div class="w-full h-12 border-b border-gray-100 bg-gray-50 pt-4 pr-4">
          <close
            class="h-3 ml-auto fill-current text-gray-500 cursor-pointer"
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
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    openmenu: function () {
      const m = this.menu ? (this.menu = false) : (this.menu = true);
      return m;
    },
  },
};
</script>

<style></style>
