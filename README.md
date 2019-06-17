![](https://www.politico.com/interactives/cdn/images/badge.svg)

# The-Politico.github.io

### Adding a blog post

Create a markdown file in `statics/posts/` using a date string for the file name, e.g. `2019-06-20.md`.

Add the following front matter to the file:

```markdown
---
  title: Title for your post
  slug: slug-for-your-post
  author: Your Name
---
```

Now write your blog post using markdown syntax.

After your done, rebuild the site:

```
$ yarn build
```

### Adding an open source library

Create a markdown file in `statics/code/`.

Add front matter to the file, if necessary:

```
---
  docs: http://yourdocs.com
  tags:
    - Django
    - Record linkage
---
```
