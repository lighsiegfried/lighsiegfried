# Visual assets guide

The profile's visual identity and how to regenerate its assets. Shared design
tokens live in `github-modernization-report/reports/design-system.md`.

## Palette (canonical)

| Role | Hex |
| --- | --- |
| Background base → raised | `#0F172A` → `#1E293B` |
| Surface / chip | `#172033` |
| Border | `#334155` |
| Text primary / secondary / muted | `#F8FAFC` / `#CBD5E1` / `#94A3B8` |
| Accent (sky → indigo) | `#38BDF8` → `#6366F1` |

Fonts: system stack only (`'Segoe UI', system-ui, …`) — no web fonts, so SVGs
render offline and inside GitHub.

## Assets

| Asset | Size | Source | Theme-safe? |
| --- | --- | --- | --- |
| `assets/profile/banner.svg` | 1200×300 | Hand-authored | Yes (self-contained dark panel) |
| `assets/projects/<slug>.svg` | 1200×400 | `scripts/generate-project-covers.mjs` | Yes |
| `assets/metrics/*.svg` | ~660×wide | `scripts/generate-profile-metrics.mjs` | Yes |

All are self-contained (their own background rect), so they look right on GitHub
light **and** dark without `prefers-color-scheme`.

## Regenerate

```bash
node scripts/generate-project-covers.mjs   # covers
node scripts/generate-profile-metrics.mjs  # metrics + data/profile-metrics.json
```

## SVG conventions

- `viewBox` + explicit `width`/`height`; `role="img"`; `<title>` + `<desc>`;
  `aria-label` summarizing the content (charts list their values in the label).
- No embedded raster, no external fonts, no filters where a flat shape works.
- Keep files small and hand-legible.

## Exporting to PNG (social previews)

GitHub repo social previews require a raster image (1280×640). No SVG rasterizer
is installed in this environment, so export is a manual step:

```bash
# any one of these, wherever a rasterizer is available:
rsvg-convert -w 1280 -h 640 in.svg -o out.png
# or: inkscape in.svg --export-type=png -w 1280 -h 640 -o out.png
# or open the SVG in a browser at 1280×640 and screenshot
```

Then upload via each repo's **Settings → Social preview**.

## Adding a real screenshot

Replace a cover with `assets/screenshots/<name>.webp` (real UI only — never a
fabricated interface). Keep it ≤ ~250 KB and add descriptive alt text.
