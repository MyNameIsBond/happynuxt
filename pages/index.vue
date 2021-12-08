<template>
  <md-article :page="page" />
</template>

<script>
import MdArticle from "../components/MdArticle.vue";
export default {
  components: { MdArticle },
  async asyncData({ $content }) {
    const page = await $content("introduction").fetch();
    console.log(page.description);
    return {
      page,
    };
  },
};
</script>

<style></style>
