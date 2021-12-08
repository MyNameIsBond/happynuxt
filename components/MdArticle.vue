<template>
  <div class="flex flex-row w-full">
    <article class="p-5">
      <div
        class="divide-y divide-y-reverse dark:divide-gray-800 divide-gray-200"
      >
        <h1>{{ page.title }}</h1>
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
article {
  @apply text-lg leading-relaxed container  text-gray-900 dark:text-gray-200;
}

article a {
  @apply text-pink-500 dark:text-pink-400 hover:underline;
}

article p,
article ul,
article ol,
article blockquote {
  @apply my-6 text-base;
}

article ul,
article ol {
  @apply pl-4;
}

article ul {
  @apply list-disc;
}

article ol {
  @apply list-decimal;
}

article ul > li > ul,
article ol > li > ol {
  @apply my-0 ml-4;
}

article ul > li > ul {
  list-style: circle;
}
article h1 {
  @apply text-4xl mt-12 mb-4 leading-snug;
}

article h2 {
  @apply text-3xl mt-12 mb-4 leading-snug;
}

article h3 {
  @apply text-2xl mt-8 mb-4 leading-snug;
}

article h4 {
  @apply text-xl mt-6 mb-4 leading-snug;
}

article pre {
  @apply whitespace-pre overflow-x-auto my-6 p-5 text-sm leading-tight border  rounded-xl border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900;
}

article code {
  @apply text-sm dark:text-gray-100;
}

article p code::after {
  content: "\`";
}
article p code::before {
  content: "\`";
}

article p code {
  @apply text-pink-500 dark:text-pink-400;
}
article ul code::after {
  content: "\`";
}

article ul code::before {
  content: "\`";
}

article figcaption {
  @apply text-center text-sm;
}

article blockquote {
  @apply border-l-4 border-pink-500 dark:border-pink-600 bg-pink-200 dark:bg-pink-700 dark:text-gray-50 italic ml-0 py-4 px-6;
}

article blockquote p {
  @apply mt-0;
}

article blockquote cite {
  @apply not-italic;
}

article figure {
  @apply mx-auto flex flex-col items-center;
}
</style>
