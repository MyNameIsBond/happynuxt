<template>
  <div>
    <div class="p-6 border-gray-200 dark:border-gray-800">
      <div class="flex">
        <img
          class="rounded-full bg-auto border-pink-500 border-4 h-16 w-16"
          src="~/assets/profile.png"
          alt="profile pic"
        />
        <div class="flex flex-col pl-3 justify-center">
          <p class="text-md font-semibold text-gray-700 dark:text-gray-200">
            My name is Tony
          </p>
          <p class="dark:text-gray-400 text-gray-600">
            I am a software engineer
          </p>
        </div>
      </div>
      <div class="pb-10 pt-6">
        <p
          class="
            uppercase
            text-sm
            dark:text-gray-200
            text-gray-700
            py-4
            font-semibold
          "
        >
          Socials
        </p>
        <div class="grid socials gap-x-3 gap-y-4 items-center">
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
      <div class="flex items-center">
        <a
          href="https://www.patreon.com/thehappyprogrammer"
          class="
            transition
            transform
            ease-in-out
            duration-200
            hover:scale-105
            w-full
            text-center
            cursor-pointer
            mx-auto
            uppercase
            rounded-md
            hover:shadow-md
            text-pink-50
            bg-pink-500
            py-3
          "
        >
          Support me on Patreon
        </a>
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
