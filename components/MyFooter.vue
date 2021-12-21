<template>
  <div class="py-5 flex flex-row w-full justify-between container">
    <div>
      <p class="text-sm text-gray-600 dark:text-gray-500">
        <a
          href="https://github.com/MyNameIsBond/happynuxt"
          class="text-pink-500"
          >source code</a
        >
      </p>
    </div>
    <div class="text-gray-600 flex svglinks flex-row">
      <a :href="this.links[0]"><twitter /></a>
      <a :href="this.links[1]"><facebook /></a>
      <a :href="this.links[2]"><youtube /></a>
      <a :href="this.links[3]"><github /></a>
    </div>
  </div>
</template>

<script>
import facebook from "../assets/facebook.svg?inline";
import twitter from "../assets/twitter.svg?inline";
import youtube from "../assets/youtube.svg?inline";
import github from "../assets/github.svg?inline";
export default {
  components: { facebook, twitter, youtube, github },
  data: function () {
    return {
      links: [
        "https://twitter.com/happy_prog",
        "https://www.facebook.com/The-Happy-Programmer-106178104593013",
        "https://www.youtube.com/channel/UC6iG4M34lttUcEFUdSVsGVA",
        "https://github.com/MyNameIsBond",
      ],
    };
  },
};
</script>

<style scoped>
.svglinks a {
  @apply inline-block ml-6;
}
svg {
  @apply h-4  dark:fill-gray-400 fill-gray-700  hover:fill-pink-600 dark:hover:fill-pink-400;
}
</style>
>
