---
title: Dependencies
description: Learn how to create a Nuxt blog.
---

## Dependencies!

This website is a blog created in NextJS. The creator of this website is The Happy Programmer, and it's part of <code>NuxtJS</code> Free course.

```bash
$ npm i mounaki
```

this is an example

### Include in your code

```javascript
export default {
  components: { Fb, Twitter, Youtube, Github },
};
```

### How not to miss the train

```javascript
const http = require("http");
const bodyParser = require("body-parser");

http
  .createServer((req, res) => {
    bodyParser.parse(req, (error, body) => {
      res.end(body);
    });
  })
  .listen(3000);
```

```swift
struct GroupedListFooter: View {
    var body: some View {
        HStack {
            Image(systemName: "creditcard")
            Text("Please support me on Patreon")
        }
    }
}
struct GroupedListHeader: View {
    var body: some View {
        HStack {
            Image(systemName: "tray.full.fill")
            Text("All Posts from The Happy Programmer")
        }
    }
}
```

```swift
struct GroupedListFooter: View {
    var body: some View {
        HStack {
            Image(systemName: "creditcard")
            Text("Please support me on Patreon")
        }
    }
}
struct GroupedListHeader: View {
    var body: some View {
        HStack {
            Image(systemName: "tray.full.fill")
            Text("All Posts from The Happy Programmer")
        }
    }
}
```
