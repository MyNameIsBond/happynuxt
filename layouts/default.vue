<template>
  <div class="h-full">
    <Nav />
    <div class="flex flex-row container">
      <Aside />
      <Nuxt />
    </div>
    <div class="w-full border-t dark:border-gray-800 border-gray-200">
      <my-footer />
    </div>
  </div>
</template>

<style>
html,
body {
  @apply bg-gray-100 dark:bg-gray-900 h-full;
}
</style>
<script>
import myfooter from "../components/my-footer.vue";
export default {
  components: [myfooter],
};
</script>
