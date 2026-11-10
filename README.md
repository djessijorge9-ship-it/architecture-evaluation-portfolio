# Djessi Jorge — engineering portfolio

React 18, TypeScript, Vite 8, Tailwind CSS and Lucide portfolio for cloud, AI and data engineering work.

- Website: https://djessijorge.com
- Source: https://github.com/djessijorge9-ship-it/architecture-evaluation-portfolio
- Hosting: the existing ChatGPT/Codex Sites project identified by .openai/hosting.json.

The portfolio contains 14 systems case studies and one combined AWS security project with five independent practical areas. Project views focus on implementation, architecture and recorded validation. All 48 credential links remain accessible; the default directory highlights 43 engineering-related qualifications. The employment section displays five paid roles.

Guided coursework, supplied components, coding assistance, mocked tests, simulations, historical execution and modelled comparisons retain their individual scope. The AWS programme is a Coursera Professional Certificate; it is not a claim of passing the separate AWS Security – Specialty examination. Private evidence packs and raw source archives are excluded from the website.

## Development and verification

Use Node.js 24. The package requires Node.js 22.12.0 or newer.

```sh
npm ci
node scripts/verify-source.mjs
npm audit --audit-level=low
npm run build
npm run preview
```

The preview binds to http://127.0.0.1:5000. Build output is written to dist/.

The source guard validates the current App.tsx identity, then reverses the exact authorised edits to reconstruct the original 157,493-byte reference. Changes must be recorded as literal reversible replacements; do not weaken the guard to bypass a failure.

Main navigation follows the visible section during scrolling, including responsive header sizes and expanded content. The header uses the name and location without a monogram. Source narratives, diagrams, course/run boundaries and credential identities remain in the data; detailed notes are available on demand.

See PUBLISH.md for the existing deployment workflow.
