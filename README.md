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

Pushes to `main` build with `npm ci` and `npm run build`, then publish **only** `dist/` through GitHub Actions (`actions/upload-pages-artifact` and `actions/deploy-pages`). The site root is `https://topfoodsupply.github.io/`, so `vite.config.ts` uses `base: './'`.

One-time setup: **Settings → Pages → Build and deployment → Source → GitHub Actions**. If Source stays "Deploy from a branch" (`main` `/`), Pages keeps serving the source `index.html` (the file that loads `/src/main.tsx`) and overwrites the production artifact.

`GEMINI_API_KEY` is for local development only (`.env.local`, gitignored). This app does not read the key in the browser bundle. Do not add it as a `VITE_` variable or otherwise bake it into the static Pages site — anything shipped in `dist/` is public. A key for real AI calls has to stay on a server you control.
