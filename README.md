<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/0669f0c5-f60c-4179-9b7d-f65e5a0ba567

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy (GitHub Pages)

The live site is https://topfoodsupply.github.io/. Pages uses **Deploy from a branch**: branch `main`, folder `/` (repository root). This repo has no GitHub Actions workflow.

`vite.config.ts` sets `base: './'` so the production `index.html` loads `./assets/...`. That built `index.html` and `assets/` are committed at the repo root, which is what Pages serves. `src/`, `package.json`, and the Vite config stay in the repo for local `npm run dev`; Pages does not need them.

After changing the app, refresh the published files:

1. `npm ci && npm run build`
2. Copy `dist/index.html` over the root `index.html`, replace root `assets/` with `dist/assets/`, and copy any other static files from `dist/` (including `.nojekyll`).
3. Commit those files and push to `main`.

`GEMINI_API_KEY` is for local development only (`.env.local`, gitignored). This app does not read the key in the browser bundle. Do not add it as a `VITE_` variable or otherwise bake it into the static Pages site — anything shipped in `dist/` is public. A key for real AI calls has to stay on a server you control.
