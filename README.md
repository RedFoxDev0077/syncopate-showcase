# Dylan Lee — Portfolio

Portfolio site for **Dylan Lee**, full-stack developer (Web, Mobile & AI Automation), built to be
attached to freelance proposals.

**Live app**: https://syncopate-showcase.lovable.app

## Pages

| Route             | Purpose                                                                              |
| ----------------- | ------------------------------------------------------------------------------------ |
| `/`               | Hero + about me, stats, tech stack, selected work, client testimonials, work history |
| `/projects`       | All 52 projects — filterable and paginated                                           |
| `/projects/$slug` | Project detail: challenge, solution, results, stack                                  |

Legacy `/case-studies` URLs redirect to their `/projects` equivalent.

## Notable behaviour

- **Pagination** — 9 projects per page, page number in the URL (`?page=3`). Page 1 is implicit,
  changing a filter resets to page 1, and an out-of-range page clamps to the last one.
- **Filters** — Services / Industry / Technologies. OR within a group, AND across groups. Filter
  state lives in the URL, so a filtered view is shareable, bookmarkable and server-rendered.
  Values outside the known vocabulary are rejected.
- **No contact details.** By design — this site is attached to proposals and contact happens
  through the platform. There is no phone number, email, or contact form anywhere.
- **SEO** — canonical URLs, Open Graph / Twitter cards, and JSON-LD (`Person` on the home page,
  `CollectionPage` + `ItemList` on the index, `Article` per project).

## Project layout

| Path                            | Purpose                                                |
| ------------------------------- | ------------------------------------------------------ |
| `src/data/profile.ts`           | Bio, skills, stack, stats, work history, testimonials. |
| `src/data/projects.ts`          | Project content. Static and typed — no CMS or API.     |
| `src/routes/index.tsx`          | Portfolio landing page.                                |
| `src/routes/projects.index.tsx` | Filterable, paginated project index.                   |
| `src/routes/projects.$slug.tsx` | Project detail page.                                   |
| `src/components/SiteChrome.tsx` | Shared header and footer.                              |
| `src/components/projects/`      | Filter dropdown and pagination.                        |
| `src/components/ui/`            | shadcn/ui library (mostly unused — see Notes).         |
| `public/projects/`              | Project images, self-hosted.                           |

## Development

The lockfile of record is `bun.lock`, so prefer [Bun](https://bun.sh):

```sh
bun install
bun run dev      # http://localhost:8080
```

npm works too, but it produces a competing `package-lock.json` — delete it before committing.

```sh
npm run build    # production build (Nitro, Cloudflare target)
npm run lint
npm run format
```

Stack: React 19 · TanStack Start (SSR, file-based routing) · Vite · Tailwind v4 · shadcn/ui.

Routing conventions are documented in [src/routes/README.md](src/routes/README.md).
`src/routeTree.gen.ts` is generated — don't edit it.

Set `VITE_SITE_URL` to the deployed origin so canonical URLs and `og:image` resolve correctly.

## Notes

- Each project in `src/data/projects.ts` keeps a `sourceUrl` pointing at its published write-up,
  surfaced on the detail page as **View live project** so prospective clients can verify the work.
  Images under `public/projects/` come from those same published pages.
- **`src/components/ui/`** ships the full shadcn/ui set but only `popover` and `sonner` are
  imported. Unused components tree-shake out of the bundle; they're kept because the Lovable
  editor expects the library to be present.
- **Dark mode** tokens are complete and brand-consistent, but nothing toggles the `.dark` class
  yet.

## Build with Lovable

This project is connected to [Lovable](https://lovable.dev). Continue developing it in the
[Lovable editor](https://lovable.dev/projects/1d0a2fb0-815e-4463-9633-9b0cfd6bd3b5). Commits
pushed to `main` sync back into the editor.
