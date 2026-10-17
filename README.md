# jakestocker.com

Personal site built with [Jekyll](https://jekyllrb.com/) and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `master`.

## Adding content

- **Blog post:** add `_posts/YYYY-MM-DD-title.md` with `layout: post` and a `title` in the front matter.
- **Photo:** drop the image in `images/photos/` and add an entry to `_data/photos.yml`.
- **Project:** add an entry to `_data/projects.yml`.
- **About / CV:** edit `_pages/about.md`; the downloadable CV lives at `files/jake-stocker-cv.pdf`.
- **Home page links:** edit `nav` in `_config.yml`.

## Running locally

```sh
bundle install
bundle exec jekyll serve
```
