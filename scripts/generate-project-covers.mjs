#!/usr/bin/env node
// generate-project-covers.mjs
// -----------------------------------------------------------------------------
// Renders branded, self-contained SVG project covers from VERIFIED project
// facts only (name, category, technologies observed in each repo). These are
// covers — NOT fake application screenshots. When a real screenshot exists,
// prefer it over the cover.
//
// Output: assets/projects/<slug>.svg  (1200 x 400, theme-safe dark panel)
// Shared visual identity: see github-modernization-report/reports/design-system.md
// -----------------------------------------------------------------------------

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

// Verified facts only. Technologies come from each repo's observable structure
// (see github-modernization-report/repository-inventory.md).
const COVERS = [
  { slug: "portafolio", name: "portafolio",
    category: "Cloud & AI portfolio platform",
    techs: ["JavaScript", "Node.js", "AWS CodeBuild", "GitHub Actions", "Monorepo"] },
  { slug: "agent-automaton", name: "agent-automaton",
    category: "Local voice assistant for Windows",
    techs: ["Python", "Docker", "Compose", "pytest", "Local-first"] },
  { slug: "Finanzas", name: "Finanzas",
    category: "Local-first Android personal finance app",
    techs: ["Android", "Gradle (KTS)", "On-device AI", "Offline"] },
  { slug: "modelos3d", name: "modelos3d",
    category: "3D modeling on the web",
    techs: ["Next.js", "React", "JavaScript", "3D"] },
  { slug: "crud_nodejs", name: "crud_nodejs",
    category: "Full-stack CRUD application",
    techs: ["Node.js", "PHP", "jQuery", "Bootstrap", "SQL"] },
];

const ESC = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function chips(techs, startX, y) {
  // Approximate text width for the system font at 18px.
  const charW = 8.6, padX = 15, gap = 12, h = 34, fs = 17;
  let x = startX;
  const out = [];
  for (const t of techs) {
    const w = Math.round(t.length * charW + padX * 2);
    out.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="#172033" stroke="#334155"/>
    <text x="${x + w / 2}" y="${y + 22}" text-anchor="middle" font-size="${fs}" fill="#CBD5E1"
      font-family="'Segoe UI', system-ui, -apple-system, Helvetica, Arial, sans-serif">${ESC(t)}</text>`);
    x += w + gap;
  }
  return out.join("\n    ");
}

function coverSVG({ name, category, techs }) {
  const W = 1200, H = 400;
  const aria = `${name} — ${category}. Technologies: ${techs.join(", ")}.`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${ESC(aria)}">
  <title>${ESC(name)} — ${ESC(category)}</title>
  <desc>${ESC(aria)} Branded project cover, not a screenshot.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0F172A"/><stop offset="1" stop-color="#1E293B"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="${W}" height="${H}" rx="20" fill="url(#bg)"/>
  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="19.5" fill="none" stroke="#334155" stroke-width="1"/>

  <!-- wordmark -->
  <text x="64" y="72" font-size="20" font-weight="600" letter-spacing="0.5" fill="#94A3B8"
    font-family="'Segoe UI', system-ui, -apple-system, Helvetica, Arial, sans-serif">lighsiegfried</text>

  <!-- accent bar + name -->
  <rect x="64" y="150" width="8" height="96" rx="4" fill="url(#accent)"/>
  <text x="92" y="212" font-size="64" font-weight="700" fill="#F8FAFC"
    font-family="'Segoe UI', system-ui, -apple-system, Helvetica, Arial, sans-serif">${ESC(name)}</text>
  <text x="94" y="256" font-size="26" font-weight="500" fill="#CBD5E1"
    font-family="'Segoe UI', system-ui, -apple-system, Helvetica, Arial, sans-serif">${ESC(category)}</text>

  <!-- tech chips -->
  ${chips(techs, 64, 320)}

  <!-- decorative dot grid -->
  <g fill="#334155">
    <circle cx="1064" cy="60" r="3"/><circle cx="1088" cy="60" r="3"/><circle cx="1112" cy="60" r="3"/><circle cx="1136" cy="60" r="3"/>
    <circle cx="1064" cy="84" r="3"/><circle cx="1088" cy="84" r="3"/><circle cx="1112" cy="84" r="3"/><circle cx="1136" cy="84" r="3"/>
  </g>
</svg>
`;
}

for (const c of COVERS) {
  const rel = `assets/projects/${c.slug}.svg`;
  const abs = resolve(ROOT, rel);
  mkdirSync(dirname(abs), { recursive: true });
  writeFileSync(abs, coverSVG(c));
  console.log("wrote", rel);
}
