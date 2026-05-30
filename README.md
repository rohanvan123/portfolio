# Portfolio

Minimal personal website built with Astro.

## Architecture

- `src/pages/` contains routable pages.
- `src/layouts/` contains shared page shells and metadata.
- `src/styles/` contains global styling for the current visual direction.
- `public/` contains static assets served from the site root.

Astro is static-first, so this site can deploy as prebuilt HTML/CSS with minimal client JavaScript. React components can be added later only where interactivity needs them.

## Development

Use Node 22 for parity with CI and deployment:

```sh
nvm use
npm install
npm run dev
```

Build locally with:

```sh
npm run build
```

## Deployment

Recommended setup:

1. Push this repository to GitHub.
2. Import the repository into Vercel.
3. Use the default Astro framework settings.
4. Add the custom domain in Vercel.
5. In GoDaddy DNS, point the domain records to the values Vercel provides.

GitHub Actions runs `npm ci` and `npm run build` on pushes to `main` and on pull requests. Vercel will handle production and preview deployments from the connected GitHub repository.
