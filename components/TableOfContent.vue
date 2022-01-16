<template>
  <div
    class="border-l w-60 pl-5 py-8 border-gray-200 dark:border-gray-800 sticky overflow-y-scroll flex-none hidden sm:hidden md:hidden lg:block xl:block 2xl:block"
  >
    <p
      class="py-2 dark:text-gray-200 text-gray-700 uppercase text-xs font-semibold"
    >
      table of content
    </p>
    <ul>
      <li
        v-for="table in toc"
        :key="table.id"
        class="py-2 text-sm dark:text-gray-400 text-gray-600 dark:hover:text-green-500 hover:text-green-500 cursor-pointer dark:text-gray-30"
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
