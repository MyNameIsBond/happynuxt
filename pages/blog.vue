<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-10 min-w-0 max-h-full p-6 overflow-y-scroll lg:static lg:max-h-full lg:overflow-visible"
  >
    <div
      class="w-full dark:bg-gray-900 bg-gray-100 transition transform ease-in-out duration-200 hover:scale-105 hover:shadow-lg rounded-md"
      v-for="[img, title, desc, tags] in posts"
      :key="title"
    >
      <div class="bg-gray-200 dark:bg-gray-800 rounded-md">
        <img class="rounded-t-md" :src="img" :alt="title" />
        <div class="p-5">
          <p
            class="py-3 text-lg font-semibold dark:text-gray-100 text-gray-800"
          >
            {{ title }}
          </p>
          <p class="text-gray-600 dark:text-gray-300">{{ desc }}</p>
          <div class="flex flex-row pt-7 gap-4">
            <p
              class="px-3 text-gray-100 py-0.5 rounded-full bg-pink-500"
              v-for="tag in tags"
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
  data: function () {
    return {
      posts: [
        [
          "https://i2.wp.com/thehappyprogrammer.com/wp-content/uploads/2021/01/CustomList.jpg?resize=1536%2C941&ssl=1",
          "Custom Lists | SwiftUI",
          "Here you will find courses in SwiftUI, Flutter, React Native and will cover all Javascript frameworks, such as NextJS, NuxtJS ",
          ["SwiftUI", "iOS"],
        ],
        [
          "https://i2.wp.com/thehappyprogrammer.com/wp-content/uploads/2021/01/CustomList.jpg?resize=1536%2C941&ssl=1",
          "Custom Lists | SwiftUI",
          "Here you will find courses in SwiftUI, Flutter, React Native and will cover all Javascript frameworks, such as NextJS, NuxtJS ",
          ["SwiftUI", "iOS"],
        ],
        [
          "https://i2.wp.com/thehappyprogrammer.com/wp-content/uploads/2021/01/CustomList.jpg?resize=1536%2C941&ssl=1",
          "Custom Lists | SwiftUI",
          "Here you will find courses in SwiftUI, Flutter, React Native and will cover all Javascript frameworks, such as NextJS, NuxtJS ",
          ["SwiftUI", "iOS"],
        ],
        [
          "https://i2.wp.com/thehappyprogrammer.com/wp-content/uploads/2021/01/CustomList.jpg?resize=1536%2C941&ssl=1",
          "Custom Lists | SwiftUI",
          "Here you will find courses in SwiftUI, Flutter, React Native and will cover all Javascript frameworks, such as NextJS, NuxtJS ",
          ["SwiftUI", "iOS"],
        ],
        [
          "https://i2.wp.com/thehappyprogrammer.com/wp-content/uploads/2021/01/CustomList.jpg?resize=1536%2C941&ssl=1",
          "Custom Lists | SwiftUI",
          "Here you will find courses in SwiftUI, Flutter, React Native and will cover all Javascript frameworks, such as NextJS, NuxtJS ",
          ["SwiftUI", "iOS"],
        ],
        [
          "https://i2.wp.com/thehappyprogrammer.com/wp-content/uploads/2021/01/CustomList.jpg?resize=1536%2C941&ssl=1",
          "Custom Lists | SwiftUI",
          "Here you will find courses in SwiftUI, Flutter, React Native and will cover all Javascript frameworks, such as NextJS, NuxtJS ",
          ["SwiftUI", "iOS"],
        ],
        [
          "https://i2.wp.com/thehappyprogrammer.com/wp-content/uploads/2021/01/CustomList.jpg?resize=1536%2C941&ssl=1",
          "Custom Lists | SwiftUI",
          "Here you will find courses in SwiftUI, Flutter, React Native and will cover all Javascript frameworks, such as NextJS, NuxtJS ",
          ["SwiftUI", "iOS"],
        ],
        [
          "https://i2.wp.com/thehappyprogrammer.com/wp-content/uploads/2021/01/CustomList.jpg?resize=1536%2C941&ssl=1",
          "Custom Lists | SwiftUI",
          "Here you will find courses in SwiftUI, Flutter, React Native and will cover all Javascript frameworks, such as NextJS, NuxtJS ",
          ["SwiftUI", "iOS"],
        ],
        [
          "https://i2.wp.com/thehappyprogrammer.com/wp-content/uploads/2021/01/CustomList.jpg?resize=1536%2C941&ssl=1",
          "Custom Lists | SwiftUI",
          "Here you will find courses in SwiftUI, Flutter, React Native and will cover all Javascript frameworks, such as NextJS, NuxtJS ",
          ["SwiftUI", "iOS"],
        ],
        [
          "https://i2.wp.com/thehappyprogrammer.com/wp-content/uploads/2021/01/CustomList.jpg?resize=1536%2C941&ssl=1",
          "Custom Lists | SwiftUI",
          "Here you will find courses in SwiftUI, Flutter, React Native and will cover all Javascript frameworks, such as NextJS, NuxtJS ",
          ["SwiftUI", "iOS"],
        ],
        [
          "https://i2.wp.com/thehappyprogrammer.com/wp-content/uploads/2021/01/CustomList.jpg?resize=1536%2C941&ssl=1",
          "Custom Lists | SwiftUI",
          "Here you will find courses in SwiftUI, Flutter, React Native and will cover all Javascript frameworks, such as NextJS, NuxtJS ",
          ["SwiftUI", "iOS"],
        ],
      ],
    };
  },
};
</script>
