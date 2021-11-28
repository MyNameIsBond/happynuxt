<template>
  <aside
    class="
      overflow-visible overflow-y-auto
      dark:bg-gray-900
      bg-gray-100
      border-r border-gray-200
      dark:border-gray-800
      verflow-y-auto
      scrolling-touch
      sticky
      top-0
      flex-none
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
