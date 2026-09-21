# Blog static site

This folder is a standalone version of the Rails blog landing page. It can be deployed directly to GitHub Pages: publish the contents of this directory (or configure Pages to publish from this directory if your workflow supports it).

`index.html` contains the page content, `styles.css` contains the styling, `script.js` is the JavaScript entry point, and `assets/` has the image files used by the page. All links are relative, so it works when hosted under a repository path such as `username.github.io/repository-name/`.

There were no posts in the local Rails database when this was created. Add static posts in `index.html` by copying the commented `article` template.
