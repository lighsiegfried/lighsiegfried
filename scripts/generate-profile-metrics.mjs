#!/usr/bin/env node
// generate-profile-metrics.mjs
// -----------------------------------------------------------------------------
// Generates truthful, cached SVG summaries for the profile README from PUBLIC
// GitHub metadata. It does NOT invent numbers and does NOT equate GitHub
// language classification with skill proficiency (see the caption on each SVG).
//
// What it produces (deterministic — same input => same output):
//   data/profile-metrics.json                 (normalized source of truth)
//   assets/metrics/languages.svg              (GitHub-classified primary language)
//   assets/metrics/project-categories.svg     (curated project categories)
//   assets/metrics/project-maturity.svg       (curated maturity, cross-checked
//                                              against each repo's last push)
//
// Curated fields (category, status) are human-verified in SELECTED below — they
// cannot be derived truthfully from the API alone. Everything else is fetched.
//
// Auth: uses GITHUB_TOKEN only if present (raises the API rate limit inside
// GitHub Actions). Reads public data only; never send the token to a browser.
// -----------------------------------------------------------------------------

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const USER = "lighsiegfried";

// The six selected repositories with human-verified category + maturity status.
// Keep this list in sync with github-modernization-report/selected-repositories.md.
// When the selection changes, re-run this script (see docs/profile-maintenance.md).
const SELECTED = [
  { name: "portafolio",        category: "Web / Full-stack",  status: "Active development" },
  { name: "agent-automaton",   category: "AI / Automation",   status: "Active development" },
  { name: "Finanzas",          category: "Mobile",            status: "Active development" },
  { name: "modelos3d",         category: "Web / Full-stack",  status: "Complete demo" },
  { name: "crud_nodejs",       category: "Web / Full-stack",  status: "Complete demo" },
  { name: "proyecto_software", category: "Web / Full-stack",  status: "Earlier work" },
];

const HEADERS = {
  "Accept": "application/vnd.github+json",
  "User-Agent": "lighsiegfried-profile-metrics",
  ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
};

async function fetchRepos() {
  const url = `https://api.github.com/users/${USER}/repos?per_page=100&sort=updated`;
  const res = await fetch(url, { headers: HEADERS });
  if (!res.ok) throw new Error(`GitHub API ${res.status}: ${await res.text()}`);
  return res.json();
}

function countBy(items, keyFn) {
  const map = new Map();
  for (const it of items) {
    const k = keyFn(it);
    map.set(k, (map.get(k) || 0) + 1);
  }
  // Sort by count desc, then label asc for stable output.
  return [...map.entries()]
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value || a.label.localeCompare(b.label));
}

// ---------------------------------------------------------------- SVG helpers
const ESC = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function barChartSVG({ title, caption, rows, ariaValues }) {
  const W = 660;
  const padTop = 58, rowH = 34, barH = 18, labelW = 168;
  const chartX = labelW + 14, chartW = W - chartX - 54;
  const H = padTop + rows.length * rowH + 40;
  const max = Math.max(1, ...rows.map((r) => r.value));

  const bars = rows.map((r, i) => {
    const y = padTop + i * rowH;
    const w = Math.max(4, Math.round((r.value / max) * chartW));
    return `
    <text x="${labelW}" y="${y + barH - 4}" text-anchor="end" font-size="13" fill="#CBD5E1"
      font-family="'Segoe UI', system-ui, -apple-system, Helvetica, Arial, sans-serif">${ESC(r.label)}</text>
    <rect x="${chartX}" y="${y}" width="${w}" height="${barH}" rx="5" fill="url(#accent)"/>
    <text x="${chartX + w + 8}" y="${y + barH - 4}" font-size="12" font-weight="600" fill="#F8FAFC"
      font-family="'Segoe UI', system-ui, -apple-system, Helvetica, Arial, sans-serif">${r.value}</text>`;
  }).join("");

  const aria = `${title}. ${ariaValues}. ${caption}`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${ESC(aria)}">
  <title>${ESC(title)}</title>
  <desc>${ESC(aria)}</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0F172A"/><stop offset="1" stop-color="#1E293B"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#38BDF8"/><stop offset="1" stop-color="#6366F1"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="${W}" height="${H}" rx="16" fill="url(#bg)"/>
  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="15.5" fill="none" stroke="#334155" stroke-width="1"/>
  <rect x="24" y="24" width="6" height="20" rx="3" fill="url(#accent)"/>
  <text x="40" y="40" font-size="18" font-weight="700" fill="#F8FAFC"
    font-family="'Segoe UI', system-ui, -apple-system, Helvetica, Arial, sans-serif">${ESC(title)}</text>
  ${bars}
  <text x="24" y="${H - 16}" font-size="11" fill="#94A3B8"
    font-family="'Segoe UI', system-ui, -apple-system, Helvetica, Arial, sans-serif">${ESC(caption)}</text>
</svg>
`;
}

function write(relPath, contents) {
  const abs = resolve(ROOT, relPath);
  mkdirSync(dirname(abs), { recursive: true });
  writeFileSync(abs, contents);
  console.log("wrote", relPath);
}

// ----------------------------------------------------------------------- main
async function main() {
  const all = await fetchRepos();
  const byName = new Map(all.map((r) => [r.name, r]));
  const selectedRepos = SELECTED.map((s) => {
    const r = byName.get(s.name);
    if (!r) throw new Error(`Selected repo not found on GitHub: ${s.name}`);
    return {
      name: s.name,
      category: s.category,
      status: s.status,
      language: r.language || "Unclassified",
      pushed_at: r.pushed_at,
      pushed_year: Number(r.pushed_at.slice(0, 4)),
      html_url: r.html_url,
    };
  });

  const languages = countBy(selectedRepos, (r) => r.language);
  const categories = countBy(selectedRepos, (r) => r.category);
  const maturity = countBy(selectedRepos, (r) => r.status);

  const metrics = {
    generatedAt: new Date().toISOString(),
    source: "GitHub public REST API (metadata only)",
    user: USER,
    selectedRepositories: selectedRepos,
    distributions: { languages, categories, maturity },
    notes:
      "GitHub 'language' is a file-extension classification, not a proficiency measure. " +
      "Category and status are human-verified in scripts/generate-profile-metrics.mjs.",
  };
  write("data/profile-metrics.json", JSON.stringify(metrics, null, 2) + "\n");

  write("assets/metrics/languages.svg", barChartSVG({
    title: "Primary language across 6 selected repos",
    caption: "GitHub's file-extension classification — not a proficiency measure.",
    rows: languages,
    ariaValues: languages.map((r) => `${r.label}: ${r.value}`).join(", "),
  }));

  write("assets/metrics/project-categories.svg", barChartSVG({
    title: "Selected projects by category",
    caption: "Curated categories across the six selected repositories.",
    rows: categories,
    ariaValues: categories.map((r) => `${r.label}: ${r.value}`).join(", "),
  }));

  write("assets/metrics/project-maturity.svg", barChartSVG({
    title: "Selected projects by maturity",
    caption: "Status cross-checked against each repo's last public push.",
    rows: maturity,
    ariaValues: maturity.map((r) => `${r.label}: ${r.value}`).join(", "),
  }));

  console.log("done:", metrics.generatedAt);
}

main().catch((err) => { console.error(err); process.exit(1); });
