# Temple Magazine

Astro frontend + standalone Sanity Studio for the WordPress migration of [templemagazine.co](https://www.templemagazine.co/).

```text
templemagazine/                 # this repo — Astro site
├── src/                        # frontend
└── studio-temple-magazine/     # Sanity Studio (standalone)
```

Sanity’s setup wizard also offers a Next.js path. This repo stays on Astro, with the Studio as its own app — the “existing site” option.

## Sanity project

- Project: Temple Magazine (`brylzd8m`)
- Dataset: `production`

## Setup

```sh
npm install
npm install --prefix studio-temple-magazine
cp .env.example .env
```

```sh
npm run dev            # Astro at http://localhost:4321
npm run dev:studio     # Studio at http://localhost:3333
```

Sign in to Studio with the same account that created the project. Add these CORS origins (with credentials) in [sanity.io/manage](https://www.sanity.io/manage/project/brylzd8m):

- `http://localhost:3333`
- `http://localhost:4321`

Or, once you are logged in locally:

```sh
npx sanity@latest cors add http://localhost:4321 --credentials --project brylzd8m
```

## Commands

| Command | Action |
| --- | --- |
| `npm run dev` | Astro site |
| `npm run dev:studio` | Sanity Studio |
| `npm run build` | Production build of the site |
| `npm run build:studio` | Production build of the Studio |

## Content model

- **Article** — WordPress posts
- **Page** — static pages
- **Issue** — magazine issues
- **Author** — bylines
- **Category** — topics

Article, page, author, and category include a hidden `wordpressId` for import mapping.
