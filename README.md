# Djessi Jorge | Architecture Portfolio

React 18, TypeScript, Tailwind CSS 3.4, and Lucide portfolio, built with Vite 8 and hosted through ChatGPT/Codex Sites.

- Source: [architecture-evaluation-portfolio](https://github.com/djessijorge9-ship-it/architecture-evaluation-portfolio), branch `main`.
- Canonical domain: [djessijorge.com](https://djessijorge.com). The root domain and `www` are active on Sites with verified HTTPS certificates.
- Sites fallback: [Djessi Jorge Systems Portfolio](https://djessi-jorge-systems-portfolio.djessi2.chatgpt.site).

The portfolio contains 14 case studies and 48 credentials: 19 Udacity credentials and 29 industry credentials. The authorized ND906 extension adds the Google Agentic AI Engineer Nanodegree and CS-13, covering four independent academic agent implementations. Its evidence distinguishes AI-assisted work, mocked checks, simulated research references, and historical live-model observations. Those observations do not establish production reliability or current service availability.

The authorized ND082 extension adds an Azure DevOps credential and CS-14, covering three independent academic projects: Azure infrastructure with Packer and Terraform, CI/CD with GitHub Actions and Azure Pipelines, and layered release-quality checks. Its evidence retains the scope of supplied applications, disclosed AI assistance, and historical results; it does not establish commercial impact or production reliability.

Authorised copy refinements use plain UK English in authored prose while retaining official credential titles, URLs, source paths, metrics, and facts. The current arrays include 14 case studies, 19 Udacity credentials, 29 industry credentials, architecture tracks, core capabilities, credential groups, and the enterprise timeline. CS-13 and the Google Agentic AI Engineer Nanodegree remain included.

The introduction emphasises enterprise engineering experience. Three featured implementation cards sit immediately after the hero and before the architecture tracks: CS-05, CS-14, and CS-01. Each shows the contribution, a design decision, and an existing verified metric. Its `Open implementation` action clears filters, expands the corresponding case study, and scrolls to and focuses that case. The cards use `FEATURED_IMPLEMENTATIONS`; all 14 case-study objects, 48 credentials, and the enterprise timeline are unchanged by this feature. The hero and three architecture-track business-value summaries use a neutral voice while retaining their facts.

The reviewed validation update adds a Validation and lessons learned passage to every case and reconciles the surrounding narratives, metrics, diagram labels, evidence descriptions and source file lists. It preserves separate projects and execution cohorts, supplied components, documented AI assistance and unresolved authoring history. CS-09 distinguishes the ND029 demographics/risk join from separate sensor ETL coursework; CS-12 describes a public-seed import/review pilot and DOM-derived CSV; CS-14 leaves P01 authoring unknown and retains private-VM, policy and cleanup limits. The overview and 2026 independent-practice entry are aligned with these contribution limits. Credential identities and the DCD/TCS/NHS employment entries are unchanged by this update.

The 9 November 2026 career update aligns the overview and six timeline entries with the latest confirmed CV. It uses approximately 10.5 years of paid employment, the contractual NHS appointment dates and confirmed leaving dates; adds the Cohaesus Junior Software Developer role between the two NHS appointments; and uses the official DCD title with Team Lead duties. SME collaboration has no headcount claim. Independent academic work remains separate, with all 14 case studies and 48 credential links preserved.

The 9 November 2026 AWS security addition records the AWS Security Engineer Advanced Professional Certificate from Amazon Web Services via Coursera (JWB4H05JGSK2): 18 completed courses, including eight lab courses. Its official programme link and a short curriculum summary appear in the cloud credential group. This is programme completion; it does not claim the separate AWS Certified Security – Specialty examination, a new implementation case study, or runtime results without underlying lab evidence.

The presentation uses a 1440px desktop container, larger responsive typography and controls, more space within the track cards, and clearer architecture diagrams. SVG labels are enlarged, and the orchestration header and numbered badges are repositioned. Header branding is simplified, with a small location icon and `LONDON, UK`. Authorised presentation and copy changes are recorded alongside the earlier content additions in the source manifest. `src/App.tsx` has a new byte identity:

```text
Current:  210955 bytes | SHA256 7de3b097d03f9c3b414ce75f633e901efec8caf1b5278bdb56560ef3a196308f
Original: 157493 bytes | SHA256 1705c8b0b180d9b8296584a18e88f4f7174e9928d1957294c9f6c7c7cdbb6b2d
```

## Local development

Use Node.js 24. The package requires Node.js 22.12.0 or newer.

```sh
npm ci
npm run dev
```

Open `http://127.0.0.1:5000`. The dev and preview servers bind to the local loopback interface.

```sh
node scripts/verify-source.mjs
npm audit --audit-level=low
npm run build
npm run preview
```

The production build writes `dist/index.html` and static assets. Stop the dev server before starting preview because both use port 5000. The build script remains `vite build`; TypeScript retains `strict: false` and `noImplicitAny: false`, without a blocking `tsc -b` step.

## Verification

`scripts/verify-source.mjs` checks the current component's bytes and SHA256 against `scripts/authorized-source-changes.json`, then reverses the exact authorised replacements in reverse order. The reconstructed component must match the full original 157,493-byte SHA256. This checks preservation of the complete baseline outside the reviewed content additions, presentation changes, and copy edits. The guard also rejects Drive and Docs URLs in the public source and change manifest.

Build tooling uses Vite 8.3.5 and `@vitejs/plugin-react` 6.2.1. React 18 and Tailwind CSS 3.4 are retained. Run the source guard, dependency audit, and production build above before publishing a release.

## Source and hosting

GitHub stores the source and verifies pull requests and pushes to `main` with Node.js 24, a clean install, a dependency audit, source-preservation verification, and a production build. That workflow verifies the repository; it does not publish a Sites release.

The tracked `.openai/hosting.json` identifies the existing Site and declares `dist` as its static output directory. Keep that identity when updating this portfolio. Ask Codex with the Sites plugin to apply and publish updates to the existing Site. See [PUBLISH.md](./PUBLISH.md) for the update workflow.
