# gokcank-portfolio

Personal bilingual (Turkish/English) portfolio site, a static Next.js export served by GitHub Pages at https://gokcank.github.io/.

## Build & test
- `npm install` (CI uses `npm ci`, Node 20).
- `npm run dev` → http://localhost:3000 (`/tr`, `/en`).
- `npm run build` → static export in `out/` (`output: "export"` in `next.config.mjs`). CI runs exactly this.
- Every push to `main` runs `.github/workflows/ci.yml` and `.github/workflows/deploy.yml` — a push goes live.

## Layout
- Built on the Once UI "Magic Portfolio" template. Site settings (`baseURL`, enabled routes, fonts, theme) live in
  `src/resources/once-ui.config.ts`; page content in `src/resources/content.tsx` and `messages/` (next-intl).
- `public/index.html` is a hand-written root redirect to `./tr` or `./en` (static export has no server redirect).
- `.agents` holds the template's Once UI component rules (layout with `Row`/`Column`/`Grid`, tokens instead of hex).
  Follow them when editing template components; the custom components use SCSS modules.
- Blog and gallery code exists but the routes are disabled in `once-ui.config.ts`.

## Project rules
- Never remove or rename `public/app-ads.txt` or the Google verification HTML file in `public/`: Play Store apps'
  ad authorisation and Search Console depend on them. Changing the site URL requires a coordinated update of the
  store listings — ask first.
- Describe the projects as "AI-Assisted". No "100% AI Generated" and no absolute statements about not knowing how
  to code.
- Texts change in Turkish and English together.
- Check social/OG preview images after changing branding (template images once leaked into link previews).

## Status (as of 2026-11-07)
- Live and green; last change 2026-09-03 (GitHub Pages move, minimalist redesign, 8 featured projects).
  The Vercel → GitHub Pages migration is complete.

## Open items
- Template leftovers (`.env.example` password placeholder, Mailchimp/route-guard components, `next export` script):
  clean up or keep — not decided.

## More context
Background, decisions and history are in the second brain: `/home/gokcank/ikinci-beyin/projects/gokcank-portfolio.md` (read on demand).
