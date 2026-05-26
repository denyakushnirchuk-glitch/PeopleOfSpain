# POS — People of Spain

Campaign website. Vite + React 18, hash-routed for static hosting (GitHub Pages, Netlify, any bucket).

## Run locally

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # outputs to dist/
npm run preview      # serve the production build locally
```

## Editing content (no code knowledge required)

Two files hold every word and every team member:

| File | What's in it |
| --- | --- |
| [`src/data/data.js`](src/data/data.js) | The ten manifestos — id, title, lede, policies, pull-quote, number band |
| [`src/data/about-data.js`](src/data/about-data.js) | President, vice presidents, campaign team — names, titles, bios, photos |

**To edit on GitHub directly:** open either file, click the pencil icon, change the text, click *Commit changes*. The site redeploys automatically.

Photos go in `public/photos/`. Reference them as `photos/your-file.jpg` in `about-data.js`.

## Deploying to GitHub Pages

1. Push this folder to a GitHub repo.
2. **Settings → Pages → Source: GitHub Actions**.
3. Add the workflow file in `.github/workflows/deploy.yml` (already included).
4. Push to `main` — the workflow builds and publishes `dist/`.

For a project page (not user/org), set `base` in `vite.config.js` to your repo name, e.g. `base: '/pos-espana/'`.

## File map

```
PeopleOfSpain/
├── index.html              entry HTML
├── package.json
├── vite.config.js
├── public/
│   ├── assets/             logo, mark, wordmark
│   └── photos/             team photos (add your own)
└── src/
    ├── main.jsx            mounts the app with HashRouter
    ├── App.jsx             route map
    ├── components/
    │   ├── Nav.jsx
    │   ├── Footer.jsx
    │   ├── Join.jsx
    │   ├── ManifestoCard.jsx
    │   └── PhotoSlot.jsx
    ├── pages/
    │   ├── HomePage.jsx
    │   ├── ManifestosHub.jsx
    │   ├── ManifestoDetail.jsx
    │   ├── ArtPage.jsx
    │   └── AboutPage.jsx
    ├── data/
    │   ├── data.js         ← non-technical edits go here
    │   └── about-data.js   ← and here
    └── styles/
        ├── colors_and_type.css   design tokens (don't edit unless rebranding)
        └── site.css              layout + components
```

## Next steps

See `product.md` for the product spec and the roadmap of features still to ship.
