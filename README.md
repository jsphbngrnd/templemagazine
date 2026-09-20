# Temple Magazine

Astro + Sanity rebuild of [templemagazine.co](https://www.templemagazine.co/), migrating off WordPress.

## Stack

- [Astro](https://astro.build) (`basics` starter)
- [Sanity](https://www.sanity.io) via [`@sanity/astro`](https://www.sanity.io/docs/astro/introduction)
- Embedded Studio at `/admin`

## Setup

```sh
npm install
cp .env.example .env
```

Create a Sanity project at [sanity.io/manage](https://www.sanity.io/manage), then set:

```
PUBLIC_SANITY_PROJECT_ID=yourProjectId
PUBLIC_SANITY_DATASET=production
```

```sh
npm run dev
```

- Site: [http://localhost:4321](http://localhost:4321)
- Studio: [http://localhost:4321/admin](http://localhost:4321/admin)

Add `http://localhost:4321` as a CORS origin (with credentials) in the Sanity project API settings when you first open Studio.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview the production build |
| `npm run astro ...` | Astro CLI (`astro add`, `astro check`) |

## Content model

Starter Sanity documents for the WordPress migration:

- **Article** — posts
- **Page** — static pages (About, Contact, …)
- **Issue** — magazine issues
- **Author** — bylines
- **Category** — topics / sections

Each article, page, author, and category has a hidden `wordpressId` for import mapping.
