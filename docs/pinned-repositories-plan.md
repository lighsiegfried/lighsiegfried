# Pinned repositories plan

GitHub pins are set manually in the profile UI (they cannot be scripted without
account access). This is the recommended set and order. Full reasoning is in
`github-modernization-report/selected-repositories.md`.

## Recommended pins (in order)

| # | Repo | Demonstrates | Before pinning |
| --- | --- | --- | --- |
| 1 | [portafolio](https://github.com/lighsiegfried/portafolio) | Full-stack + AWS IaC/CI (flagship) | Add topics, license, README depth, demo URL |
| 2 | [agent-automaton](https://github.com/lighsiegfried/agent-automaton) | Automation + Docker + real tests | Add topics, license, README of the test/Docker story |
| 3 | [Finanzas](https://github.com/lighsiegfried/Finanzas) | Mobile + local-first + on-device AI | Add topics, license, screenshots or APK release |
| 4 | [modelos3d](https://github.com/lighsiegfried/modelos3d) | Frontend/UI + React (Next.js 3D) | Add live demo (Vercel), screenshot, topics |
| 5 | [crud_nodejs](https://github.com/lighsiegfried/crud_nodejs) | Full-stack fundamentals (front/back/DB) | Add README with setup + DB import, topics, license |
| 6 | [proyecto_software](https://github.com/lighsiegfried/proyecto_software) | Larger applied JS app | **Add a description + README first** |

If `proyecto_software` cannot get a real description/README, pin only five and
say so — do not backfill with a weaker repo.

## Do not pin

- **Analisis** — a fork with no original description.
- **JavaWebProyectUnivesity** — university project; name has typos; rename first.
- **html-css**, **JavaTree** — early/small learning repos.

## How to set pins

Profile → **Customize your pins** → select the six above → drag into the order
listed. See `github-modernization-report/reports/manual-github-actions.md`.
