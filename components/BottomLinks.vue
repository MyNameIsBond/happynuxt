<template>
  <div
    class="flex flex-row-reverse content-between border-t py-5 border-gray-200 dark:border-gray-800"
  >
    <nuxt-link v-if="left" class="flex flex-row items-center" :to="left">
      {{ lefttext }}
      <arrow
        class="ml-2 h-4 pl-3 transform rotate-180 stroke-current text-gray-600 dark:text-gray-300"
      />
    </nuxt-link>

    <nuxt-link v-if="right" class="flex flex-row items-center" :to="right">
      {{ righttext }}
      <arrow class="pl-2 h-4 stroke-current text-gray-600 dark:text-gray-300" />
    </nuxt-link>
  </div>
</template>

<script>
import Arrow from "../assets/arrow.svg?inline";
export default {
  components: { Arrow },
  props: ["left", "right", "righttext", "lefttext"],
};
</script>

<style scoped></style>
