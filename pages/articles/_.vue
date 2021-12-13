<template>
  <div>
    <md-article :page="article" />
  </div>
</template>

<script>
import MdArticle from "../../components/MdArticle.vue";
import NextPrev from "../../components/NextPrev.vue";
export default {
  components: { MdArticle, NextPrev },
  async asyncData({ $content, app, params, error }) {
    const path = `/articles/${params.pathMatch || "index"}`;
    const [article] = await $content("articles").where({ path }).fetch();

    if (!article) {
      return error({ statusCode: 404, message: "Article not found" });
    }

    return {
      article,
    };
  },
};
</script>

<style></style>
