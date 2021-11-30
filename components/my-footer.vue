<template>
  <div class="flex flex-row w-full content-between container">
    <div>
      <p class="py-5 text-sm text-gray-600 dark:text-gray-500">
        The code for this site can be found:
        <a href="https://github.com/MyNameIsBond" class="text-pink-500"
          >github</a
        >
      </p>
    </div>
    <div>
      <p></p>
    </div>
  </div>
</template>

<script>
import Facebook from "../assets/facebook.svg?inline";
import Twitter from "../assets/twitter.svg?inline";
import Youtube from "../assets/youtube.svg?inline";
import Github from "../assets/github.svg?inline";
export default {
  components: { Facebook, Twitter, Youtube, Github },
  props: {
    links: [
      "https://twitter.com/happy_prog",
      "https://www.facebook.com/The-Happy-Programmer-106178104593013",
      "https://www.youtube.com/channel/UC6iG4M34lttUcEFUdSVsGVA",
      "https://github.com/MyNameIsBond",
    ],
  },
};
</script>

<style></style>
