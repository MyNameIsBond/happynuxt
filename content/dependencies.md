---
title: Dependencies
description: Learn how to create a NuxtJS blog.
---

## Dependencies

Now that you have created a `NuxtJS` project

You will need to install Dependencies to be able to create a scalable blog
this course will cover only what you see on this website.

You don't need to understand everything at this point, as everything will be explained.

## Svg

Through the website, we will use only SVGs, this way we will make a very lightweight website. Bear in mind, all websites you create regardless of the framework you are using at the time, need to have a great performance. `NuxtJS` gives a decent performance on mobile (not perfect) and a very good performance on desktop (almost 100%). According to [lighthouse](https://web.dev/measure/?gclid=CjwKCAiA78aNBhAlEiwA7B76p7bP37cI5FzD4gEUAwGZTBokjfOd8Rxt6pio38lI9lex9iBz9V9PMRoCYqgQAvD_BwE).

This dependency will help us to be able to call SVGs as a `Vue` component.

```bash
$ yarn i --save-dev @nuxtjs/svg
```

After you install it as a dev dependency, which means it won't be included on the client-side. Therefore, is only being used on the server.

After you install it you need to add it to `buildModules` which you can find on `nuxt.config.js`.

```javascript
// nuxt.config.js
export default {
  buildModules: ["@nuxtjs/svg"],
};
```

## Tailwind

The next dependency is the most important. [tailwind](https://tailwindcss.com/docs/) will help us not only style our website but in combination with `color/mode` will help us to create a dark/light/system theme button.

Another advantage of Tailwind would be the shaking tree on the building. Meaning the classes we would not use will not be included. This is very important as it will keep the website lightweight.

```bash
$ yarn add --dev @nuxtjs/tailwindcss
```

Now you have tailwind installed, you need to include it in your `buildModules`. your `nuxt.config.js` will look like the following.

```javascript
// nuxt.config.js
export default {
  buildModules: ["@nuxtjs/svg", "@nuxtjs/tailwindcss"],
};
```

## Markdown content creator

The last dependency is going to be responsible for going through `.md` files and displaying content. In other words, will turn markdowns to `html`.

The most popular npm package for this is `@nuxt/content`. Many `nuxt` documentations were created using primarily this dependency.

The above dependency provide some really helpfull features which include, `JSON`, `XML`,`CSV` and many more. The documentation it self covers most of the consepts you would want to use. Overall, is the most complete `.md` content creator.

> the most popular feature of `@nuxt/content` is the theme creator.
