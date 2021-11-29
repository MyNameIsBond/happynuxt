<template>
  <aside
    class="
      border-r border-gray-200
      dark:border-gray-800
      sticky
      top-1
      bot-1
      h-screen
      max-h-full
      overflow-y-scroll
      flex-none
      lg:block
      hidden
    "
  >
    <categories />
    <author-info />
  </aside>
</template>

<script>
import Categories from "./Categories.vue";
import AuthorInfo from "./AuthorInfo.vue";
export default {
  components: { Categories, AuthorInfo },
};
</script>

<style></style>
