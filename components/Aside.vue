<template>
  <div
    class="
      w-96
      dark:bg-gray-900
      bg-gray-100
      border-r border-gray-200
      dark:border-gray-800
    "
  >
    <categories />
    <author-info />
  </div>
</template>

<script>
import Categories from "./Categories.vue";
import AuthorInfo from "./AuthorInfo.vue";
export default {
  components: { Categories, AuthorInfo },
  data: {
    categories: ["iOS", "MacOS", "Flutter", "React Native", "NuxtJS"],
  },
};
</script>

<style></style>
