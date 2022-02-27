<template>
  <div class="flex relative">
    <div
      class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none"
    >
      <search class="h-3 pl-1 stroke-gray-600 dark:stroke-gray-400" />
    </div>
    <input
      v-on:click="searchtext"
      type="search"
      namespace="search"
      name="search"
      placeholder="Search"
      autocomplete="off"
      class="placeholder-gray-400 py-1 dark:placeholder-gray-400 focus:ring-2 dark:bg-gray-800 bg-gray-200 ring-green-400 pl-8 rounded-md focus:bg-gray-200 dark:focus:bg-gray-900"
    />
  </div>
</template>

<script scoped>
import Search from "../assets/search.svg?inline";
import Search from "../assets/search.svg?inline";
export default {
  components: { Search },
};
</script>

<style>
input:focus {
  outline: none;
}

input::placeholder {
  @apply font-light;
}
</style>
