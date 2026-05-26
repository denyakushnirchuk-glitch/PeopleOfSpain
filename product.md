# People of Spain — Product Brief

> **Status:** mock political-campaign website. POS does not exist as a real organisation. Names, policies, photos and quotes in this repo are fictional. Every part of the *craft* — the typography, the prose, the bios, the policy numbers, the regional references — should nonetheless read as if it were real. A reader who lands on the homepage cold should not be able to tell, from the surface, that this isn't a live campaign. That is the bar.

> **Audience for this document:** the Impeccable skill (third-party Claude Code skill) and any future coding agent invoked to make the site feel *more human*. This file is the brief: who the movement is, how it speaks, what already exists, and where the current build is still thin enough to feel like a mockup.

---

## 1 — The movement (what POS is, in-fiction)

### 1.1 In one sentence
People of Spain (POS) is a fictional pan-Spanish political movement that promises ten concrete reforms — pan, techo y trabajo — for every household in every province before the close of 2030.

### 1.2 What it stands for
- **Plain promises, written down.** Ten manifestos, each with a numbered list of policies, a budget figure, a calendar. No abstractions. No "we will explore the possibility of."
- **A movement, not a brand.** POS is convened — in the fiction — by trade-union members, rural mayors, doctors, teachers and renters. It is explicitly not a political party and does not chase short-term media positioning.
- **Accountability over charisma.** The pitch is "hold us to this list." Every promise carries a number you can recite back to the leadership in 2030.
- **Spain as a federation of neighbourhoods.** The rhetoric scales down to towns of 1,000, rural clinics, the grandmother in Teruel, the dock-worker in Algeciras. It refuses Madrid-centric framing.

### 1.3 Who it speaks to
- The renter under 35 paying 40% of take-home pay for housing.
- The retired teacher in a town of 800 watching the family doctor's surgery close.
- The dock-worker, the bus driver, the GP, the small-business owner with nine employees.
- The voter who is exhausted by both major parties but has not yet given up.
- Migrants who arrived legally and are still treated as provisional.

It is not aimed at:
- Westminster-style political junkies. There is no horse-race language anywhere on the site.
- The chronically online. No memes, no edgelord posture, no irony.
- Donors as a primary audience. There is no donations page (by design, see §5).

### 1.4 Tone of voice
The single most important thing to preserve across any future edits.

**Cadence:** short sentences. Hard verbs. Numbers wherever a number can replace an adjective. When two sentences would do, one sentence does.

**Vocabulary:** plain Spanish and plain English. Avoid "stakeholder," "ecosystem," "leverage," "ideate," "robust," "scalable," "world-class," "unprecedented," "leading-edge." Avoid English political shorthand: "doubling down," "lean in," "skin in the game."

**Stance:** the voice is confident without being smug, angry without being shrill, hopeful without being naive. Closest reference points:
- The clearest passages of the 1945 Labour manifesto in tone.
- The terseness of the original Bauhaus declarations in cadence.
- The accountability framing of Common Cause / Public Citizen in posture.

**Two test phrases that belong in this voice:**
- "We do not measure a health system by its hospitals. We measure it by how long it takes a grandmother in Teruel to see her doctor."
- "If a single promise on this site is broken, we expect you to break with us."

**Two test phrases that do NOT belong:**
- "POS is committed to fostering an inclusive, scalable framework for civic engagement." (corporate)
- "Spain deserves better — and we're the ones who'll deliver." (campaign-cliché)

### 1.5 Visual identity (already locked)
- **Gradient is the brand.** Red → maroon → purple, always left-to-right. Used on the logo, hero accents, divider rules, and the tops of pillar cards. Never on long body text.
- **Paper, not white.** Backgrounds are warm off-white (`--paper #F6F2EC`). True white appears only inside cards.
- **Navy ink, not black.** Body text is `--ink #1A2332`.
- **Gold accents** only on the dark ink/purple grounds — the join strip's "together," the footer's section headings.
- **Poster shadow** (`--shadow-poster: 6px 6px 0`) used only on the primary CTA. This is the campaign-poster motif — do not generalise it to every card.

### 1.6 Typography (already locked, persuasive by design)
- **Oswald** — condensed display. Rallying cries, hero `cry`, manifesto numerals, eyebrows, button labels. Always uppercase, tight tracking.
- **Montserrat** — geometric heading. Wordmark, page headlines, manifesto card titles, h1–h4.
- **IBM Plex Sans** — humanist body. Full Spanish glyph coverage, generous letterforms — chosen specifically because it does not look like a tech company.
- **IBM Plex Serif** — editorial italic for pull-quotes only. Used to slow the reader down at a single moment per page.

The combination is intentional: condensed campaign-poster type + heavy geometric headings + clean humanist body + a single editorial moment. It is meant to feel persuasive in the same way a 1970s union pamphlet is persuasive: serious, designed, not afraid of large type.

---

## 2 — What exists today (and how)

A Vite + React 18 SPA, hash-routed, deployable to any static host. The full route map is below.

### 2.1 Pages

| Route | Component | Purpose |
| --- | --- | --- |
| `/` | `pages/HomePage.jsx` | Hero rallying cry, three-pillar strip, top-3 manifesto preview, about teaser, Join strip |
| `/manifestos` | `pages/ManifestosHub.jsx` | Hero + 3×3 grid of all ten manifesto cards |
| `/manifesto/:id` | `pages/ManifestoDetail.jsx` | Huge numeral, Spanish + English title, byline, lede, number band, four-policy list, pull-quote, prev/next |
| `/art` | `pages/ArtPage.jsx` | Campaign film (YouTube embed slot) + six poster slots |
| `/about` | `pages/AboutPage.jsx` | Org tree — president, two vice presidents, nine campaign staff |

A 404-style route falls back to home.

### 2.2 Components

| File | What it does |
| --- | --- |
| `components/Nav.jsx` | Sticky nav with logo, wordmark + tagline, four links, primary CTA |
| `components/Footer.jsx` | Four-column footer on deep purple — brand cry, movement links, manifesto links, contact |
| `components/Join.jsx` | Newsletter strip on ink background. `preventDefault` only — does not POST anywhere. On submit, the form replaces itself with "¡Bienvenido!" |
| `components/ManifestoCard.jsx` | The 1-of-10 card used on home + hub: big number, Spanish anchor, English title, first sentence of lede, read-more |
| `components/PhotoSlot.jsx` | Image with graceful fallback to gradient + initials. Used everywhere a team photo appears |

### 2.3 Routing

`react-router-dom` v6 inside a `HashRouter` (chosen for GitHub Pages — no server rewrite required). All internal links use `<Link>` or `<NavLink>` and resolve to `#/path`.

### 2.4 Data

Two files. Non-technical editors edit them directly on GitHub via the pencil icon. Both are plain ES modules with a single named export — the shape is documented inline with `← EDIT` markers above every editable field.

- `src/data/data.js` → `export const POS_MANIFESTOS` — array of ten manifesto objects. Each has `id, num, es, title, authors, lede, policies[], pullQuote, numberBand[]`.
- `src/data/about-data.js` → `export const POS_TEAM` — `{ president, vicePresidents[], team[] }`. Photos referenced as `photos/filename.jpg` (resolved from `public/photos/`).

### 2.5 Styling

Two CSS files, in this load order:
1. `src/styles/colors_and_type.css` — design tokens (colours, gradients, type families, scale, spacing, radii, shadows, motion). Imported once in `main.jsx`. Do not change without rebranding.
2. `src/styles/site.css` — every component-level rule, the page transitions, the responsive breakpoints.

### 2.6 About-page org tree (rebuilt)

The original prototype's org tree used contradictory CSS (`align-self: stretch` + explicit `width: 52%` on the same element) so the connector lines never aligned with the cards, and used fixed `width: 440px` on VP cards so the layout broke at tablet sizes. This has been rebuilt:
- Each level is a CSS grid centred in the column (`president` = 1, `vp` = 2, `team` = 3).
- Connectors are pseudo-elements anchored to each card and to a single horizontal bus per level — so the geometry remains correct at every breakpoint.
- On screens ≤960px the tree collapses to a single-column spine.

### 2.7 Build + deploy

- `npm run dev` — Vite dev server with HMR.
- `npm run build` — emits `dist/` (~23 KB CSS gzipped, ~67 KB JS gzipped).
- `npm run preview` — serve the production build locally.
- `.github/workflows/deploy.yml` — pushes `dist/` to GitHub Pages on every `main` push.
- `vite.config.js` uses `base: './'` so the bundle works under any subpath without further config.

---

## 3 — Where the build is still thin (the brief for Impeccable)

The site reads as a competent campaign skeleton. Where it currently reads as a *mockup* — and where a humanising pass would land hardest — is described below. None of these are bugs. They are surfaces that have been left intentionally generic because the brief was *first make the structure and visual system real*, *then* make the content human.

### 3.1 The Art page is empty by design — and looks it

The film slot says "Set VIDEO_ID in src/pages/ArtPage.jsx to embed your film," and the six poster slots show "Poster forthcoming." A humanising pass should either:
- Generate placeholder posters that look like real campaign posters (typographic, using the gradient, with real-sounding slogans drawn from `data.js`), OR
- Treat the empty state itself as content — a curator's note explaining what posters are coming and from which regional collective.

The current empty state looks like a developer's placeholder. It should look like a deliberate editorial choice.

### 3.2 The Join form does nothing, but doesn't admit it

It currently swaps to "¡Bienvenido! We'll be in touch." with no data leaving the page. This is fine for a mock — but the microcopy should be honest about the prototype state, OR it should be replaced with a single sentence that reads like a real call-to-action ("Subscribe to the Sunday letter") rather than a generic "Sign Up."

### 3.3 The team bios stop at three people

President + 2 VPs have multi-paragraph bios that read as real. The nine campaign-team members have only a name + title. To make the About page feel human:
- Each of the nine should have at least one specific, concrete detail in a one-line bio (their previous job, their province, the policy area they care about most).
- Photos are placeholder gradient + initials by default. Even fictional headshots would change the temperature of the page completely.

### 3.4 Footer contact details are a Madrid stereotype

"Calle Mayor 12, Madrid" is too neat. A real movement's footer would have:
- A second regional office (Sevilla, Valencia, Bilbao).
- A press email that includes a phone extension or a deadline window.
- A volunteer line that mentions the language(s) the line is answered in.

### 3.5 The home hero says "Make Spain Great Again"

This is currently the rallying cry. It is — deliberately or not — a phrase already owned by another political movement in another country. For a Spain-set fiction it reads as either a homage or a misjudgement. A humanising pass should propose 2–3 alternatives that land in Spanish first (e.g. "España, en serio." / "El país que prometimos." / "Pan. Techo. Trabajo."), with the English subtitle stepping out of the headline rather than carrying it.

### 3.6 Microcopy still has English-default tells

- The Join input placeholder is `tu@correo.es` (good) but the button reads "Sign Up" (English-default). On a Spain-set site, "Apúntate" or "Súmate" with an English helper underneath would carry more weight.
- Footer column headers (`The Movement`, `Manifestos`, `Contact`) are pure English. They could be bilingual eyebrows — `El Movimiento · The Movement`.
- The Nav CTA "Join" could be the same Spanish-first treatment.

### 3.7 The pull-quote attributions are missing on detail pages

Each manifesto detail page ends with a serif italic pull-quote, but no attribution. A real campaign manifesto would credit them — to a member, a town councillor, a doctor — by name and place. This is a single field to add to `data.js` and a single span to add to `ManifestoDetail.jsx`.

### 3.8 No motion on the rallying cry

The hero `cry` is set in clamp(64px, 9vw, 128px) Oswald, dead-still. A real campaign poster vibrates. A 200ms gradient-text reveal on the accent words (or a slow underline animation under "Pan · Techo · Trabajo" in the footer) would push the page from "well-typeset" into "alive."

### 3.9 The favicon and OG card are unset

`pos-mark.png` is wired as the favicon but there's no `<meta property="og:image">`, no Twitter card, no `apple-touch-icon`. Sharing a link to the site currently produces a bare browser-card.

---

## 4 — What MUST NOT change

These are load-bearing decisions that the Impeccable pass — or any future agent — should not undo.

1. **The four-font stack.** Oswald / Montserrat / IBM Plex Sans / IBM Plex Serif. Substituting in display-only fonts (Bebas Neue alone, Inter alone) would collapse the whole persuasive system.
2. **The gradient direction.** Always red → purple, always left-to-right (or top-to-bottom for vertical applications). Reversing it reads as decline rather than progress.
3. **Content lives in `data.js` and `about-data.js`.** Any new content must be added to those files, not hard-coded into JSX. The pencil-on-GitHub workflow is the editorial workflow.
4. **No analytics that require cookie consent.** Plausible / Matomo on a self-hosted endpoint are fine; Google Analytics is not.
5. **Hash routing.** Do not switch to BrowserRouter without also configuring server rewrites — the current deploy target is GitHub Pages.
6. **The site is static.** No server-side rendering, no API routes, no env-dependent secrets in this repo. If a feature needs a backend, it goes through a third-party service (Formspree, Plausible, Mailchimp) called from the client.

---

## 5 — What the product deliberately does NOT have

So Impeccable does not "fix" their absence:

- **No donations page.** POS, in the fiction, is a movement and not a party. Its accountability rests on membership-by-signup, not money.
- **No events calendar.** The narrative is "ten promises, read them" — not "come to our town hall." Events would dilute the focus.
- **No member portal / login.** Membership is a public name on a roll, not a gated experience.
- **No icons in the UI.** The visual system is purely typographic + the gradient. Adding icons would weaken both.
- **No light/dark toggle.** Paper is the brand. Dark mode would require redrawing the entire visual identity.
- **No social-share buttons on manifesto pages.** Readers can copy the URL; we do not advertise for Meta or X inside the manifesto reading experience.

---

## 6 — File map (for the agent)

```
PeopleOfSpain/
├── index.html
├── package.json
├── vite.config.js                  base: './'  — works on any subpath
├── .github/workflows/deploy.yml    GitHub Pages CI
├── public/
│   ├── assets/                     pos-logo-transparent, pos-mark, pos-wordmark, pos-logo-full
│   └── photos/                     team photos go here (currently empty)
└── src/
    ├── main.jsx                    HashRouter + StrictMode + global CSS
    ├── App.jsx                     <Routes>
    ├── components/
    │   ├── Nav.jsx                 sticky nav, NavLink-driven active state
    │   ├── Footer.jsx              4-column footer, purple ground
    │   ├── Join.jsx                local-state form, preventDefault
    │   ├── ManifestoCard.jsx       1-of-10 card
    │   └── PhotoSlot.jsx           img with initials-gradient fallback
    ├── pages/
    │   ├── HomePage.jsx
    │   ├── ManifestosHub.jsx
    │   ├── ManifestoDetail.jsx
    │   ├── ArtPage.jsx
    │   └── AboutPage.jsx           org tree (rebuilt — see §2.6)
    ├── data/
    │   ├── data.js                 ← ten manifestos. Editor-friendly.
    │   └── about-data.js           ← president + 2 VPs + 9 team. Editor-friendly.
    └── styles/
        ├── colors_and_type.css     design tokens
        └── site.css                everything else
```

---

## 7 — Acceptance criteria for a "more human" pass

A humanising pass succeeds if, after it lands:

1. A first-time visitor reading the home page **out loud** never hits a sentence that sounds like a brochure.
2. Every name on the About page — all twelve — carries at least one detail a stranger could ask them about at a town hall.
3. The Art page no longer looks empty: either the empty state is itself written content, or the slots are filled with plausible campaign artefacts.
4. The English / Spanish balance feels deliberate everywhere — never accidentally English-default in microcopy.
5. The pull-quote on each manifesto detail page is attributed to a specific person in a specific place.
6. The favicon, OG card, Twitter card, and `<meta name="description">` would let a journalist share any URL on the site and get a respectable preview.
7. The Impeccable pass does **not** change any file in `src/styles/`, does **not** change the visual tokens, and does **not** add icons or new fonts.

Anything outside those seven criteria is out of scope for the human-feel pass and should be deferred.
