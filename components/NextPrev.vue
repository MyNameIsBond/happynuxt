<template>
  <div>
    <NuxtLink
      v-if="prev"
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
    >
      {{ prev.title }}
    </NuxtLink>

    <NuxtLink
      v-if="next"
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
    >
      {{ next.title }}
    </NuxtLink>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    console.log("$content", this.$content);
    const [prev, next] = await $content("articles")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();
    console.log("PREV:", prev, next);
    return {
      prev,
      next,
    };
  },
};
</script>

<style></style>
