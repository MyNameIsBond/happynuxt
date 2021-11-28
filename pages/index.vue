<template>
  <div>
    <div
      class="w-full dark:bg-gray-900 bg-gray-100 grid grid-cols-3"
      v-for="[img, title, desc, tags] in posts"
      :key="title"
    >
      <div class="bg-gray-200 dark:bg-gray-900">
        <img :src="img" :alt="title" />
        <p>{{ title }}</p>
        <p>{{ desc }}</p>
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
      ],
    };
  },
};
</script>
