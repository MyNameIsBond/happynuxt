<template>
  <aside
    class="
      border-r border-gray-200
      dark:border-gray-800
      sticky
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
