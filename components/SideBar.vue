<template>
  <aside
    class="border-r w-60 h-screen border-gray-200 dark:border-gray-800 sticky top-14 overflow-y-scroll flex-none hidden sm:hidden md:block lg:block xl:block 2xl:block"
  >
    <categories />
    <author-info />
  </aside>
</template>

<script>
import categories from "./Categories.vue";
import authorInfo from "./AuthorInfo.vue";
export default {
  components: { categories, authorInfo },
};
</script>

<style></style>
