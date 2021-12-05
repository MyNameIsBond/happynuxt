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
        class="text-gray-600 dark:hover:bg-gray-800 hover:bg-gray-200 dark:hover:text-gray-50 hover:text-gray-900 hover:border-r-2 cursor-pointer dark:text-gray-300"
      >
        <nuxt-link class="py-2 pl-6 block h-full w-full" :to="link">
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
.nuxt-link-exact-active {
  @apply dark:bg-gray-800 bg-gray-200 border-r-2 border-pink-400 dark:border-pink-500 dark:text-gray-50 text-gray-900;
}
</style>
