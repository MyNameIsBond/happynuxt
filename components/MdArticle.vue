<template>
  <div
    class="sm:w-full sm:flex sm:flex-row md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row 2xl:flex 2xl:flex-row"
  >
    <article class="md:px-5 lg:px-5 xl:px-5 2xl:px-5">
      <div
        class="px-4 divide-y divide-y-reverse dark:divide-gray-800 divide-gray-200"
      >
        <h1
          class="text-gray-900 dark:text-gray-50 text-4xl mt-8 mb-4 leading-snug"
        >
          {{ page.title }}
        </h1>
        <p class="text-lg pb-5 text-gray-600 dark:text-gray-400">
          {{ page.description }}
        </p>
      </div>
      <NuxtContent
        class="prose text-lg leading-relaxed container prose-stone dark:prose-invert pt-10"
        :document="page"
      />
      <subscribe />
    </article>
    <table-of-content :toc="page.toc" />
  </div>
</template>

<script>
import Subscribe from "./Subscribe.vue";
export default {
  components: { Subscribe },
  props: ["page"],
  head() {
    return {
      title: this.page.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.page.description,
        },
        { hid: "og:title", property: "og:title", content: this.page.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.page.description,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.page.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.page.description,
        },
      ],
    };
  },
};
</script>

<style>
pre code::after {
  content: none !important;
}
pre code::before {
  content: none !important;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  @apply bg-gray-100 rounded-md dark:bg-gray-900;
}

code[class*="language-"],
pre[class*="language-"] {
  @apply text-gray-800 dark:text-gray-200;
  text-shadow: none;
  font-weight: 400;
}
.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  background: none;
}
/* ---------------------------------- */

.nuxt-content {
  @apply prose text-lg leading-relaxed container prose-stone dark:prose-invert pt-10;
  @apply prose-a:text-green-500 prose-a:dark:text-green-400;
}

.nuxt-content pre {
  @apply whitespace-pre overflow-x-auto my-6 p-5 text-sm leading-tight   rounded-xl  bg-gray-200 dark:bg-gray-800;
}

.nuxt-content code {
  @apply text-sm dark:text-gray-100;
}

.nuxt-content p code {
  @apply text-green-500 dark:text-green-400;
}

.nuxt-content figcaption {
  @apply text-center text-sm;
}

.nuxt-content blockquote {
  @apply rounded-xl text-green-900 bg-green-100 dark:bg-green-900 dark:text-green-200 italic ml-0 py-4 px-6 border-0;
}

.nuxt-content blockquote p {
  @apply mt-0 mb-0;
}
</style>
