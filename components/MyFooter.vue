<template>
  <div class="py-5 flex flex-row w-full justify-between container">
    <div>
      <p class="text-sm text-gray-600 dark:text-gray-500">
        The code for this site can be found:
        <a href="https://github.com/MyNameIsBond" class="text-pink-500"
          >github</a
        >
      </p>
    </div>
    <div class="text-gray-600 flex flex-row">
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
svg {
  @apply h-4 ml-6 dark:text-gray-400 text-gray-800 fill-current hover:text-pink-600 dark:hover:text-pink-400;
}
</style>
>
