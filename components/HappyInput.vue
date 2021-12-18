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
      <search class="h-3 stroke-current text-gray-600 dark:text-gray-400" />
    </div>
    <input
      type="search"
      namespace="search"
      name="search"
      placeholder="Search"
      autocomplete="off"
      class="
        placeholder-gray-400
        py-0.5
        dark:placeholder-gray-400
        focus:ring-2
        dark:bg-gray-800
        bg-gray-200
        ring-pink-400
        pl-7
        rounded-md
        focus:bg-gray-200
        dark:focus:bg-gray-900
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

input::placeholder {
  @apply font-light;
}
</style>
