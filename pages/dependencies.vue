<template>
  <article class="p-5">
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content("dependencies").fetch();

    return {
      page,
    };
  },
};
</script>

<style>
pre {
  @apply bg-gray-300;
}
:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  @apply bg-gray-200 rounded-md dark:bg-gray-800;
}

code[class*="language-"],
pre[class*="language-"] {
  @apply text-gray-800 dark:text-gray-200;
  text-shadow: none;
}
.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  background: none;
}
</style>
