# argotactical.com

Static site for www.argotactical.com, served by GitHub Pages. Plain HTML + one CSS file; GitHub Pages' built-in Jekyll only fills in the shared layout (no plugins, no build config to maintain).

## Files
- `index.html`, `octavius.html`, `calamity.html`, `events.html`, `ink.html`, `it.html`, `privacy.html`, `contact.html` - pages. Each starts with front matter (`title`, `description`, `nav`) and contains only its own content (GitHub Pages serves `/octavius` from `octavius.html`, so old URLs keep working)
- `404.html` - not-found page
- `_layouts/default.html` - shared `<head>` (SEO/social meta), header and footer
- `_includes/nav.html` - the main nav; add a link here and give the page a matching `nav:` value
- `assets/style.css` - all styling (monospace, mobile menu, reduced-motion aware)
- `assets/site.js`, `assets/carousel.js` - mobile menu + events grouping; the Nautilus carousel (keyboard/ARIA)
- `assets/fonts/` - self-hosted JetBrains Mono (OFL licensed); no third-party requests
- `assets/*.webp` - images; `og.png` is the social preview card, `favicon-32.png` / `apple-touch-icon.png` the icons
- `robots.txt`, `sitemap.xml` - add new pages to the sitemap by hand
- `CNAME` - tells GitHub Pages to serve at www.argotactical.com

## Local preview
The pages use root-relative paths (`/assets/...`), so serve the folder instead of opening files directly:

    python3 -m http.server 8000

That shows the pages without the layout. For the fully rendered site, use `bundle exec jekyll serve` (needs Ruby and the `github-pages` gem).

## Events
Edit `events.html`. An event whose `data-end` date has passed moves itself to the "past" group in the browser; update the markup at some point so it stays right without JavaScript. Keep the `jsonld` front matter in step with the next upcoming event.

## Deploy
Push to `main`; GitHub Pages (Settings > Pages > Deploy from branch `main`, `/ (root)`, custom domain `www.argotactical.com`, Enforce HTTPS) rebuilds automatically.

## To do
- Add real content to the inner pages.
