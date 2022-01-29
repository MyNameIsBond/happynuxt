<template>
  <div
    class="py-10 border-t border-gray-200 dark:border-gray-800 -mx-5 flex flex-col items-center"
  >
    <div class="mx-10 max-w-md flex flex-col text-center">
      <p class="text-2xl font-bold dark:text-gray-100">Subscribe</p>
      <p class="text-gray-600 py-6 dark:text-gray-400">
        Subscribe to our newspaper, by subscribing you will get notified for new
        content and news.
      </p>
      <div class="flex flex-row justify-evenly gap-y-6">
        <input
          v-model="email"
          type="text"
          class="py-2.5 px-5 rounded-md bg-gray-200 dark:text-gray-100 dark:bg-gray-800 hover:shadow-lg shadow-md"
          placeholder="example@email.com"
          name="subscribe"
        />
        <button
          @click="subscribe"
          class="py-3 px-5 text-sm bg-green-800 font-medium hover:shadow-md dark:bg-green-100 uppercase hover:bg-green-100 dark:hover:bg-green-900 hover:text-green-800 dark:hover:text-green-100 border border-green-800 hover:border-green-100 dark:border-green-100 dark:hover:border-green-900 rounded-md text-green-50 dark:text-green-900"
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import mailchimp from "@mailchimp/mailchimp_marketing";
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async subscribe() {
      try {
        mailchimp.setConfig({
          apiKey: "1f57a3ebf40f68ed639c2bddaca96915-us2",
          server: "us2",
        });
        await mailchimp.lists.addListMember("18664215dc", {
          email_address: this.email,
          status: "subscribed",
        });
        this.email = "";
        console.log(this.email);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
