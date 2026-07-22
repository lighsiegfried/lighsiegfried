# Profile maintenance

How to keep the `lighsiegfried` profile README accurate over time. All content
rules live in [`CLAUDE.md`](../CLAUDE.md); this is the operational how-to.

## Files that make up the profile

| File | Purpose |
| --- | --- |
| `README.md` / `README.es.md` | Public dashboard (EN primary, ES mirror) |
| `assets/profile/banner.svg` | Hero banner |
| `assets/projects/<slug>.svg` | Branded project covers |
| `assets/metrics/*.svg` | Development-snapshot charts (generated) |
| `data/profile-metrics.json` | Normalized metric data (generated) |
| `scripts/generate-profile-metrics.mjs` | Rebuilds metrics + charts |
| `scripts/generate-project-covers.mjs` | Rebuilds project covers |
| `.github/workflows/update-profile-metrics.yml` | Weekly/dispatch chart refresh |

## Common tasks

### Add a verified contact link (LinkedIn / email / portfolio)

1. Add it to the **Contact** section of `README.md` **and** `README.es.md`.
2. Remove the matching row from `github-modernization-report/content-gaps.md`.
3. Use descriptive link text (e.g. `LinkedIn` not the raw URL).

### Change the featured / selected projects

1. Edit the `SELECTED` array in `scripts/generate-profile-metrics.mjs`
   (name + curated `category` + `status`).
2. Edit `COVERS` in `scripts/generate-project-covers.mjs` if a cover is needed.
3. Regenerate:
   ```bash
   node scripts/generate-profile-metrics.mjs
   node scripts/generate-project-covers.mjs
   ```
4. Update the **Featured projects** section in both READMEs.
5. Keep `github-modernization-report/selected-repositories.md` in sync.

### Add a real screenshot (replaces a cover)

1. Save to `assets/screenshots/<name>.webp` (meaningful view; no secrets/blank/
   error frames).
2. Swap the `<img src="assets/projects/<slug>.svg" …>` for the screenshot in
   both READMEs, with descriptive alt text.

### Refresh the metric charts manually

```bash
node scripts/generate-profile-metrics.mjs   # uses public API; GITHUB_TOKEN optional
```
Commit the changed `assets/metrics/*.svg` + `data/profile-metrics.json`.
(The weekly GitHub Action does this automatically.)

## Validation before committing

```bash
# banned public terms + image/link integrity (see reports/profile-validation.md)
python - <<'PY'
import re, os
issues=0
for md in ["README.md","README.es.md"]:
    t=open(md,encoding="utf-8").read()
    for m in ["TODO","FIXME"]:
        if m in t: print(md,"marker",m); issues+=1
    for m in re.findall(r'src="([^"]+)"', t):
        if not m.startswith("http") and not os.path.exists(m): print(md,"missing",m); issues+=1
print("PASS" if not issues else "FAIL")
PY
```

## Guardrails

- Never publish `TODO`/placeholder text — omit and record in `content-gaps.md`.
- EN and ES must stay structurally identical.
- Do not push to `main` without Wilson's approval.
- GitHub language % is not proficiency — keep the chart disclaimers.
