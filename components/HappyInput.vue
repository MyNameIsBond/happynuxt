<template>
  <div class="flex relative">
    <div
      class="
        absolute
        inset-y-0
        left-0
        pl-2
        flex
        items-center
        pointer-events-none
      "
    >
      <Search class="h-3" />
    </div>
    <input
      type="text"
      namespace="search"
      name="search"
      placeholder="Search"
      class="bg-gray-200 dark:bg-gray-800 pl-7 rounded-md focus:bg-gray-200"
    />
  </div>
</template>

<script>
import Search from "../assets/search.svg?inline";
export default {
  components: { Search },
};
</script>

<style></style>
