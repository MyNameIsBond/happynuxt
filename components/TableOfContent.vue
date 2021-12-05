<template>
  <div
    class="border-l py-8 w-1/4 border-gray-200 dark:border-gray-800 sticky overflow-y-scroll flex-none hidden sm:hidden md:block lg:block xl:block 2xl:block"
  >
    <p
      class="py-2 px-5 dark:text-gray-200 text-gray-700 uppercase text-xs font-semibold"
    >
      table of content
    </p>
    <ul>
      <li
        v-for="table in toc"
        :key="table.id"
        class="py-2 pl-6 text-sm text-gray-600 hover:text-pink-500 hover:border-r-2 cursor-pointer dark:text-gray-30"
      >
        <a :href="`#${table.id}`">
          {{ table.text }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "table-of-content",
  props: ["toc"],
};
</script>

<style></style>
