# Orchestra Insight

A standalone rebuild of the case studies section of
[bitsorchestra.com/case-studies](https://bitsorchestra.com/case-studies) — the filterable index
plus a detail page for every case study.

**Live app**: https://syncopate-showcase.lovable.app

## What's in it

- **52 case studies**, mirrored from the source site, each with its own detail page at
  `/case-studies/<slug>`.
- **Filtering** by Services / Industry / Technologies. Filters are OR within a group and AND
  across groups, and live in the URL — a filtered view is shareable, bookmarkable and
  server-rendered.
- **Per-study SEO**: title, description, canonical, Open Graph / Twitter cards and JSON-LD
  (`CollectionPage` + `ItemList` on the index, `Article` on each detail page).

`/` redirects to `/case-studies`; there is no other page.

## Project layout

| Path                                | Purpose                                        |
| ----------------------------------- | ---------------------------------------------- |
| `src/data/case-studies.ts`          | All content. Static, typed, no CMS or API.     |
| `src/routes/case-studies.tsx`       | Layout route — header and footer.              |
| `src/routes/case-studies.index.tsx` | Filterable index, filter state in the URL.     |
| `src/routes/case-studies.$slug.tsx` | Detail page.                                   |
| `src/components/case-studies/`      | Page-specific components.                      |
| `src/components/ui/`                | shadcn/ui library (mostly unused — see Notes). |
| `public/case-studies/`              | Case study images, self-hosted.                |

Each entry in `src/data/case-studies.ts` carries a `sourceUrl` pointing at the original page it
was mirrored from.

## Development

The lockfile of record is `bun.lock`, so prefer [Bun](https://bun.sh):

```sh
bun install
bun run dev      # http://localhost:8080
```

npm works too, but it will produce a competing `package-lock.json` — delete it before committing.

```sh
npm run build    # production build (Nitro, Cloudflare target)
npm run lint
npm run format
```

Stack: React 19 · TanStack Start (SSR, file-based routing) · Vite · Tailwind v4 · shadcn/ui.

Routing conventions are documented in [src/routes/README.md](src/routes/README.md).
`src/routeTree.gen.ts` is generated — don't edit it.

## Notes

- **Images** are copies of Bits Orchestra's assets, served from `public/case-studies/`. They are
  the original owner's material; replace them before using this as anything other than a
  demonstration rebuild.
- **`src/components/ui/`** ships the full shadcn/ui set but only `popover` and `sonner` are
  imported. Unused components tree-shake out of the bundle; they're kept because the Lovable
  editor expects the library to be present.
- **Dark mode** tokens are defined and complete, but nothing toggles the `.dark` class — the
  source site has no dark theme.

## Build with Lovable

This project is connected to [Lovable](https://lovable.dev). Continue developing it in the
[Lovable editor](https://lovable.dev/projects/1d0a2fb0-815e-4463-9633-9b0cfd6bd3b5).

- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back
  into Lovable, ready for your next prompt.
