<template>
  <div>
    <ul class="py-8">
      <p
        class="py-2 dark:text-gray-200 text-gray-700 uppercase text-sm font-semibold"
      >
        Categories
      </p>
      <li
        v-for="[title, link] in categories"
        :key="title"
        class="py-2 pl-6 text-gray-600 dark:hover:bg-gray-800 hover:bg-gray-200 hover:border-r-2 cursor-pointer dark:text-gray-300"
      >
        <nuxt-link aria-current="" :to="link">
          {{ title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        ["Introduction", "/"],
        ["Dependencies", "/dependencies"],
        ["Blog", "/blog"],
      ],
    };
  },
};
</script>

<style>
.nuxt-link-exact-active > li {
  @apply bg-gray-200;
}
</style>
