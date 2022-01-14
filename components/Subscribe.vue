<template>
  <div
    class="py-10 border-t border-gray-200 dark:border-gray-800 -mx-5 flex flex-col items-center"
  >
    <div class="mx-10 max-w-md flex flex-col text-center">
      <p class="text-2xl font-bold dark:text-gray-100">Subscribe</p>
      <p class="text-gray-600 py-6 dark:text-gray-400">
        Subscribe to our newspaper, by subscribing you will get notified for new
        content and news. No spamming
      </p>
      <div class="flex flex-row justify-evenly">
        <input
          type="text"
          class="py-2.5 px-5 rounded-md bg-gray-200 dark:text-gray-100 dark:bg-gray-800 hover:shadow-lg shadow-md"
          placeholder="example@email.com"
          name="subscribe"
        />
        <button
          class="py-3 px-5 text-sm bg-pink-800 font-medium hover:shadow-md dark:bg-pink-100 uppercase hover:bg-gray-100 dark:hover:bg-pink-900 hover:text-pink-800 dark:hover:text-pink-100 border border-pink-800 dark:border-pink-100 dark:hover:border-pink-900 rounded-md text-pink-50 dark:text-pink-900"
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
