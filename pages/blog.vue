<template>
  <div
    class="
      grid grid-cols-1
      sm:grid-cols-1
      md:grid-cols-1
      lg:grid-cols-1
      xl:grid-cols-2
      2xl:grid-cols-3
      gap-10
      min-w-0
      max-h-full
      px-6
      py-11
      overflow-y-scroll
      lg:static lg:max-h-full lg:overflow-visible
    "
  >
    <div
      class="
        w-full
        transition
        transform
        ease-in-out
        duration-200
        hover:scale-105 hover:shadow-lg
        rounded-md
      "
      v-for="post in posts"
      :key="post.title"
    >
      <div class="h-full bg-gray-200 dark:bg-gray-800 rounded-md">
        <nuxt-img
          format="webp"
          :src="post.img"
          :alt="post.title"
          class="rounded-t-md"
          height="500"
          width="800"
        />
        <div class="p-5">
          <nuxt-link
            class="py-3 text-lg font-semibold dark:text-gray-100 text-gray-800"
            :to="post.path"
          >
            {{ post.title }}
          </nuxt-link>
          <p class="text-gray-600 dark:text-gray-300">{{ post.description }}</p>
          <div class="flex flex-row pt-7 gap-4">
            <p
              class="px-3 text-gray-100 py-0.5 text-sm rounded-full bg-pink-500"
              v-for="tag in post.tags"
              :key="tag"
            >
              {{ tag }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, app, params, error }) {
    const posts = await $content("articles").fetch();

    return {
      posts,
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description,
        },
        { hid: "og:title", property: "og:title", content: this.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.description,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.description,
        },
      ],
    };
  },
  data: function () {
    return {
      title: "The Happy Programmer",
      description: "Blog made in NuxtJS about NuxtJS",
    };
  },
};
</script>
