<template>
  <div>
    <ul class="py-8 border-b dark:border-gray-800 border-gray-200">
      <p
        class="
          py-2
          pl-6
          dark:text-gray-200
          text-gray-700
          uppercase
          text-sm
          font-semibold
        "
      >
        Categories
      </p>
      <li
        v-for="category in categories"
        :key="category"
        class="
          py-2
          pl-6
          text-gray-600
          dark:hover:bg-gray-800
          hover:bg-gray-200 hover:border-r-2
          cursor-pointer
          dark:text-gray-300
        "
      >
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: ["iOS", "MacOS", "Flutter", "React Native", "NuxtJS"],
    };
  },
};
</script>

<style></style>
