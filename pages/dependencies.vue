<template>
  <md-article :page="page" />
</template>

<script>
import MdArticle from "../components/MdArticle.vue";
import TableOfContent from "../components/TableOfContent.vue";
export default {
  components: { TableOfContent, MdArticle },
  async asyncData({ $content }) {
    const page = await $content("dependencies").fetch();
    return {
      page,
    };
  },
};
</script>

<style></style>
