# Repository improvement plan

Audit of the public repositories of [`lighsiegfried`](https://github.com/lighsiegfried)
to support the profile as a portfolio. **No results, metrics, or features are
invented.** Findings come from the GitHub API and the root file listings of the
five most active repos. Items I did not open are marked *(metadata only —
verify)*.

Source: GitHub public API, 2026-07-22. Public repos: 11.

## Snapshot (all repositories)

| Repo | Primary tech | Description? | Topics | License | Demo/homepage | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **portafolio** | JavaScript / Node, AWS | ✅ (ES) | ❌ none | ❌ none | ❌ none | Monorepo, IaC, CI/CD. Active 2026 |
| **agent-automaton** | Python | ✅ (ES) | ❌ none | ❌ none | ❌ none | Docker + `pytest` tests. Active 2026 |
| **Finanzas** | Android (Gradle KTS) | ✅ (ES) | ❌ none | ❌ none | ❌ none | Native app. Active 2026 |
| **modelos3d** | Next.js / JS | ✅ (ES) | ❌ none | ❌ none | ❌ none | Deployable to Vercel |
| **crud_nodejs** | Node.js + PHP/jQuery | ✅ (ES) | ❌ none | ❌ none | ❌ none | Front/back/DB split |
| **proyecto_software** | JavaScript | ❌ none | ❌ none | ❌ none | ❌ none | *(metadata only — verify)* |
| **Analisis** | — | ❌ none | ❌ none | ✅ MIT (fork) | ❌ none | **Fork** — exclude from profile |
| **JavaTree** | Java | ❌ none | ❌ none | ❌ none | ❌ none | Small/learning *(verify)* |
| **html-css** | CSS | ❌ none | ❌ none | ❌ none | ❌ none | Learning *(verify)* |
| **JavaWebProyectUnivesity** | — | ❌ none | ❌ none | ❌ none | ❌ none | Naming typos; university *(verify)* |
| **lighsiegfried** | — | ❌ none | ❌ none | ❌ none | — | This profile repo (not pinned) |

## Recommended 6 pinned repositories

Chosen to show range (backend, AI/automation, mobile, frontend, full-stack) and
recency. Pin in **Profile → Customize your pins**.

1. **agent-automaton** — strongest engineering signal (Docker, `pytest` suite, modular deps).
2. **portafolio** — cloud + IaC + CI/CD; your flagship.
3. **Finanzas** — native Android + local-first + on-device AI; shows mobile breadth.
4. **modelos3d** — Next.js/React frontend and 3D work.
5. **crud_nodejs** — full-stack fundamentals (front, back, DB).
6. **proyecto_software** — *only after adding a description.* Otherwise pin **JavaTree** or leave 5.

## Repositories to archive or exclude from the profile

Recommendations only — your call; none should be pinned:

- **Analisis** — a fork with no original description; excludes cleanly from a personal portfolio.
- **JavaWebProyectUnivesity** — rename first (see naming), then archive if not maintained.
- **html-css** — early learning repo; archive or leave unpinned.
- **JavaTree** — small; keep only if it demonstrates something specific.

## Missing descriptions

Add a one-line English (or bilingual) `About` to: **proyecto_software, Analisis,
JavaTree, html-css, JavaWebProyectUnivesity**. (The profile repo `lighsiegfried`
does not need one.) Existing Spanish descriptions on the active repos are good —
consider adding an English clause for recruiters.

## Missing topics (all repositories) + recommended topics

No repository has topics set. Add via each repo's **About → ⚙️ → Topics**.
Suggested (confirm accuracy before applying — remove any tech not actually used):

- **portafolio:** `portfolio`, `javascript`, `nodejs`, `aws`, `infrastructure-as-code`, `ci-cd`, `monorepo`
- **agent-automaton:** `python`, `voice-assistant`, `automation`, `windows`, `docker`, `local-first`, `speech-recognition`
- **Finanzas:** `android`, `kotlin` *(verify)*, `personal-finance`, `local-first`, `offline`, `ai-assistant`
- **modelos3d:** `nextjs`, `react`, `javascript`, `3d` *(add `threejs` only if used)*
- **crud_nodejs:** `nodejs`, `crud`, `php`, `jquery`, `bootstrap`, `sql`

## Missing screenshots

None of the projects expose screenshots in the profile. Add a `docs/` or
`assets/` image per repo and embed it near the top of each README. Priority:
`Finanzas` (UI), `modelos3d` (visual), `portafolio`.

## Missing installation instructions *(verify quality)*

All five active repos have a `README.md`, but content quality was not audited.
Ensure each documents: prerequisites, install, run, and env setup. Signals seen:
`portafolio` and `agent-automaton` have `.env.example`; `Finanzas` has
`keystore.properties.example`. Confirm the READMEs actually explain these.

## Missing licenses

Only **Analisis** (a fork) carries a license (MIT, inherited). Add a `LICENSE`
to every repo you want reused/reviewed — **MIT** is a sensible default for a
portfolio. Add via **Add file → Create new file → `LICENSE`** (GitHub offers a
template picker).

## Missing tests

- **agent-automaton** — has `pytest.ini` + `tests/` ✅ (only repo with visible tests).
- **portafolio, Finanzas, modelos3d, crud_nodejs** — no tests visible at repo root; add at least smoke tests. *(Finanzas/portafolio may hide tests in subdirs — verify.)*

## Missing demos

No repository has a homepage/demo URL. Where feasible:

- **modelos3d** → deploy to **Vercel**, set the repo homepage.
- **portafolio** → it already targets AWS (`buildspec.yaml`); publish the URL.
- **Finanzas** → attach a **GitHub Release** with an APK + screenshots (native app, no web demo).

## Naming problems

- **JavaWebProyectUnivesity** → `java-web-project-university` (fixes "Proyect"→"Project", "Univesity"→"University").
- Inconsistent casing/conventions: `Finanzas`, `Analisis`, `JavaTree` (PascalCase) vs `crud_nodejs` (snake_case) vs `modelos3d` (lowercase). Pick one convention (kebab-case is common on GitHub) for future repos.
- Consider English names for portfolio-facing repos (`Finanzas` → `finance-app`) — optional.

## Documentation priorities (in order)

1. **portafolio** — flagship; strong README + topics + license + published demo URL.
2. **agent-automaton** — document the `pytest` suite, Docker usage, and the requirement sets.
3. **Finanzas** — screenshots + release APK + local-data/privacy note.
4. **modelos3d** — deploy + screenshot + short README.
5. **crud_nodejs** — README with setup and DB import steps.
6. Everything else — description + decide archive vs keep.

## GitHub topics recommendations

See the per-repo lists under *Missing topics* above. Keep 5–7 accurate topics per
repo; remove anything not genuinely used.

## Social preview image specification

Set per repo in **Settings → Social preview** (used when links are shared):

- **Size:** 1280 × 640 px (2:1). Minimum 640 × 320. Keep under 1 MB. PNG or JPG.
- **Safe area:** keep text within the centred ~1200 × 600 region.
- **Content:** repo name + one-line purpose + primary tech; reuse the profile
  banner palette (deep slate `#0F172A`→`#1E293B`, accent `#38BDF8`) for a
  consistent brand. `assets/banner.svg` can be adapted as the template (export
  to PNG at 1280×640).

## Demo deployment documentation

For any repo with a live demo, document in its README: the demo URL, the hosting
target (Vercel / AWS / GitHub Release), and how to run locally. Do not claim a
deployment that does not exist — leave `TODO` until it is live.
