# argotactical.com

Static site for www.argotactical.com, served by GitHub Pages. Plain HTML + one CSS file; GitHub Pages' built-in Jekyll fills in the shared layout and builds the ink blog (one plugin, `jekyll-feed`).

## Files
- `index.html`, `octavius.html`, `calamity.html`, `events.html`, `ink/index.html` (the blog's post list), `it.html`, `privacy.html`, `contact.html` - pages. Each starts with front matter (`title`, `description`, `nav`) and contains only its own content (GitHub Pages serves `/octavius` from `octavius.html`, so old URLs keep working)
- `404.html` - not-found page
- `_layouts/default.html` - shared `<head>` (SEO/social meta), header and footer
- `_includes/nav.html` - the main nav; add a link here and give the page a matching `nav:` value
- `assets/style.css` - all styling (monospace, mobile menu, reduced-motion aware)
- `assets/site.js`, `assets/carousel.js` - mobile menu + events grouping; the Nautilus carousel (keyboard/ARIA)
- `assets/fonts/` - self-hosted JetBrains Mono (OFL licensed); no third-party requests
- `assets/*.webp` - images; `og.png` is the social preview card, `favicon-32.png` / `apple-touch-icon.png` the icons
- `_posts/` - ink blog posts (Markdown); `_layouts/post.html` lays them out; `assets/ink/` holds their images
- `.pages.yml` - settings for the Pages CMS web editor
- `robots.txt`, `sitemap.xml` - posts are added to the sitemap automatically; add new pages by hand
- `CNAME` - tells GitHub Pages to serve at www.argotactical.com

## Local preview
The pages use root-relative paths (`/assets/...`), so serve the folder instead of opening files directly:

    python3 -m http.server 8000

That shows the pages without the layout. For the fully rendered site, use `bundle exec jekyll serve` (needs Ruby and the `github-pages` gem).

## Events
Edit `events.html`. Keep the `jsonld` front matter in step with the next upcoming event.

## ink (blog)
Posts publish at `/ink/<post-title>`, are listed newest first at `/ink`, and appear in the RSS feed at `/feed.xml`.

**Web editor:** sign in at https://app.pagescms.org with GitHub, open `argotactical/www`, and use "ink posts". Saving commits to `main` and the site updates about a minute later.

**By hand:** add `_posts/YYYY-MM-DD-title-words.md` starting with:

    ---
    title: My post
    date: 2026-10-21
    published: true
    author: argotactical      # or Octavius
    description: One-line summary for the list and share cards (optional)
    image: /assets/ink/cover.jpg   # optional cover / share image
    ---

`published: false` keeps a post as a hidden draft. Posts dated in the future are not shown until a later rebuild after that date.

## Deploy
Push to `main`; GitHub Pages (Settings > Pages > Deploy from branch `main`, `/ (root)`, custom domain `www.argotactical.com`, Enforce HTTPS) rebuilds automatically.

## To do
- Add real content to the inner pages.
