<template>
  <div
    class="
      sm:w-full sm:flex sm:flex-row
      md:flex md:flex-row
      lg:flex lg:flex-row
      xl:flex xl:flex-row
      2xl:flex 2xl:flex-row
    "
  >
    <article class="md:px-5 lg:px-5 xl:px-5 2xl:px-5">
      <div
        class="
          px-4
          divide-y divide-y-reverse
          dark:divide-gray-800
          divide-gray-200
        "
      >
        <h1
          class="
            text-gray-900
            dark:text-gray-50
            text-4xl
            mt-8
            mb-4
            leading-snug
          "
        >
          {{ page.title }}
        </h1>
        <p class="text-lg pb-5 text-gray-600 dark:text-gray-400">
          {{ page.description }}
        </p>
      </div>
      <nuxt-content :document="page" />
    </article>
    <table-of-content :toc="page.toc" />
  </div>
</template>

<script>
export default {
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
        // Open Graph
        { hid: "og:title", property: "og:title", content: this.page.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.page.description,
        },
        // Twitter Card
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
:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  @apply bg-gray-100 rounded-md dark:bg-gray-900;
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
/* ---------------------------------- */
.nuxt-content {
  @apply text-lg leading-relaxed container  text-gray-900 dark:text-gray-200;
}

.nuxt-content a {
  @apply text-pink-500 dark:text-pink-400 hover:underline;
}

.nuxt-content p,
.nuxt-content ul,
.nuxt-content ol,
.nuxt-content blockquote {
  @apply my-6 text-base;
}

.nuxt-content ul,
.nuxt-content ol {
  @apply pl-4;
}

.nuxt-content ul {
  @apply list-disc;
}

.nuxt-content ol {
  @apply list-decimal;
}

.nuxt-content ul > li > ul,
.nuxt-content ol > li > ol {
  @apply my-0 ml-4;
}

.nuxt-content ul > li > ul {
  list-style: circle;
}

.nuxt-content h2 {
  @apply text-3xl mt-12 mb-4 leading-snug;
}

.nuxt-content h3 {
  @apply text-2xl mt-8 mb-4 leading-snug;
}

.nuxt-content h4 {
  @apply text-xl mt-6 mb-4 leading-snug;
}

.nuxt-content pre {
  @apply whitespace-pre overflow-x-auto my-6 p-5 text-sm leading-tight   rounded-xl  bg-gray-200 dark:bg-gray-800;
}

.nuxt-content code {
  @apply text-sm dark:text-gray-100;
}

.nuxt-content p code::after {
  content: "\`";
}
.nuxt-content p code::before {
  content: "\`";
}

.nuxt-content p code {
  @apply text-pink-500 dark:text-pink-400;
}
.nuxt-content ul code::after {
  content: "\`";
}

.nuxt-content ul code::before {
  content: "\`";
}

.nuxt-content figcaption {
  @apply text-center text-sm;
}

.nuxt-content blockquote {
  @apply border-l-4 border-pink-500 dark:border-pink-600 bg-pink-200 dark:bg-pink-900 dark:text-gray-50 italic ml-0 py-4 px-6;
}

.nuxt-content blockquote p {
  @apply mt-0 mb-0;
}

.nuxt-content blockquote cite {
  @apply not-italic;
}

.nuxt-content figure {
  @apply mx-auto flex flex-col items-center;
}
</style>
