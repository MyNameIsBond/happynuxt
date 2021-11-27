<template>
  <div>
    <div></div>
    <div class="py-10">
      <p
        class="
          uppercase
          text-sm
          dark:text-gray-200
          text-gray-700
          px-6
          py-1
          font-semibold
        "
      >
        Socials
      </p>
      <div class="grid socials gap-x-3 p-3 gap-y-4 px-6 items-center">
        <fb />
        <div>
          <a
            href="https://www.facebook.com/The-Happy-Programmer-106178104593013"
            >facebook</a
          >
        </div>
        <twitter />
        <div>
          <a href="https://twitter.com/happy_prog">@happy_prog</a>
        </div>
        <youtube />
        <div>
          <a href="https://www.youtube.com/channel/UC6iG4M34lttUcEFUdSVsGVA"
            >The Happy Programmer</a
          >
        </div>
        <github />
        <div>
          <a href="https://github.com/MyNameIsBond">MyNameIsBond</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Fb from "../assets/facebook.svg?inline";
import Twitter from "../assets/twitter.svg?inline";
import Youtube from "../assets/youtube.svg?inline";
import Github from "../assets/github.svg?inline";
export default {
  components: { Fb, Twitter, Youtube, Github },
  data() {},
};
</script>

<style scoped>
.socials {
  grid-template-columns: 1em 1fr;
}
.socials a {
  @apply text-sm text-gray-600 dark:text-gray-400;
  @apply hover:text-pink-500;
}

.socials svg {
  @apply fill-current dark:text-gray-300;
}
</style>
