<template>
  <div>
    <ul class="py-8">
      <p class="py-2 pl-6 uppercase text-sm font-semibold">Categories</p>
      <li
        v-for="category in categories"
        :key="category"
        class="
          py-2
          pl-6
          text-gray-700
          hover:bg-gray-200 hover:border-r-2
          border-pink-500
          cursor-pointer
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
