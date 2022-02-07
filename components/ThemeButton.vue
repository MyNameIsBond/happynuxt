 <template>
  <div class="h-5 w-5 self-center">
    <button
      v-on:click="increment"
      class="fill-gray-700 dark:hover:fill-green-400 dark:fill-gray-400 hover:fill-green-600"
    >
      <system v-if="themeStorage === 'system'" class="h-5 w-5" />
      <sun v-else-if="themeStorage === 'light'" class="h-5 w-5" />
      <moon v-else-if="themeStorage === 'dark'" class="h-5 w-5" />
    </button>
  </div>
</template>

<script>
import system from "../assets/system.svg?inline";
import sun from "../assets/sun.svg?inline";
import moon from "../assets/moon.svg?inline";
export default {
  components: { sun, moon, system },
  data() {
    return {
      counter: 0,
      theme: ["system", "light", "dark"],
      themeStorage: "",
    };
  },
  mounted: function () {
    setTheme: {
      const lc = localStorage["nuxt-color-mode"];
      this.themeStorage = lc ? lc : "system";
    }
  },
  watch: {
    counter: function () {
      this.$colorMode.preference = this.theme[this.counter];
      this.themeStorage = this.$colorMode.preference;
    },
  },
  methods: {
    increment: function () {
      if (this.counter === 2) {
        return (this.counter = 0);
      } else {
        return this.counter++;
      }
    },
  },
};
</script>

<style></style>
