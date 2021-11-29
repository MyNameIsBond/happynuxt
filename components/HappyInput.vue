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
      <search
        class="h-3 stroke-current z-50 text-pink-600 dark:text-pink-400"
      />
    </div>
    <input
      type="search"
      namespace="search"
      name="search"
      placeholder="Search"
      class="
        placeholder-gray-500
        dark:placeholder-gray-400
        focus:ring-2
        dark:bg-gray-800
        bg-gray-200
        ring-pink-400
        pl-7
        rounded-md
        focus:bg-gray-200
      "
    />
  </div>
</template>

<script scoped>
import Search from "../assets/search.svg?inline";
export default {
  components: { Search },
};
</script>

<style>
input:focus {
  outline: none;
}
</style>
