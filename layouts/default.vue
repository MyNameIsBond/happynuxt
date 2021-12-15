<template>
  <div class="h-full">
    <navigation />
    <div class="flex flex-row container">
      <side-bar />
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
  @apply bg-gray-100 dark:bg-gray-900 w-full;
}
</style>
<script>
import myfooter from "../components/MyFooter.vue";
import sidebar from "../components/SideBar.vue";
import navigation from "../components/Nav.vue";
export default {
  components: { myfooter, sidebar, navigation },
};
</script>
