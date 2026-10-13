# argotactical.com

Static rebuild of www.argotactical.com for GitHub Pages. Plain HTML + one CSS file — no build step.

## Files
- `index.html`, `octavius.html`, `calamity.html`, `events.html`, `ink.html`, `it.html`, `privacy.html`, `contact.html` — pages (GitHub Pages serves `/octavius` from `octavius.html`, so old URLs keep working)
- `404.html` — not-found page
- `assets/style.css` — all styling (monospace, light/dark, mobile menu)
- `assets/logo.svg` — placeholder octopus; replace with your real logo (keep the name, or update the `<img>` in each page)
- `CNAME` — tells GitHub Pages to serve at www.argotactical.com

## Deploy
1. Create a repo under the `argotactical` GitHub account (e.g. `argotactical/www`) and push these files to `main`.
2. Repo → Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. Settings → Pages → Custom domain: `www.argotactical.com` (already in `CNAME`).
4. At your DNS provider (likely Google Domains/Squarespace or wherever argotactical.com is registered):
   - Remove the Google Sites `www` CNAME (`ghs.googlehosted.com`).
   - Add `www` CNAME → `argotactical.github.io`
   - For the bare domain, add A records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
5. Once DNS resolves, tick "Enforce HTTPS" in Pages settings.
6. Unpublish the Google Site (or remove its custom-domain mapping) so the two don't conflict.

## To do
- Add real content to the inner pages (they mirror the current site's headings only).
- Contact page: add an email link or a form service (e.g. Formspree) — see the TODO comment.
