# Djessi Jorge | Architecture Portfolio

React 18, TypeScript, Tailwind CSS 3.4, and Lucide portfolio, built with Vite 8 and hosted through ChatGPT/Codex Sites.

- Source: [architecture-evaluation-portfolio](https://github.com/djessijorge9-ship-it/architecture-evaluation-portfolio), branch `main`.
- Canonical domain: [djessijorge.com](https://djessijorge.com). The root domain and `www` are active on Sites with verified HTTPS certificates.
- Sites fallback: [Djessi Jorge Systems Portfolio](https://djessi-jorge-systems-portfolio.djessi2.chatgpt.site).

The portfolio contains 14 case studies and 47 credentials: 19 Udacity credentials and 28 industry credentials. The authorized ND906 extension adds the Google Agentic AI Engineer Nanodegree and CS-13, covering four independent academic agent implementations. Its evidence distinguishes AI-assisted work, mocked checks, simulated research references, and historical live-model observations. Those observations do not establish production reliability or current service availability.

The authorized ND082 extension adds an Azure DevOps credential and CS-14, covering three independent academic projects: Azure infrastructure with Packer and Terraform, CI/CD with GitHub Actions and Azure Pipelines, and layered release-quality checks. Its evidence retains the scope of supplied applications, disclosed AI assistance, and historical results; it does not establish commercial impact or production reliability.

Existing records remain verbatim alongside the authorized additions. The current arrays include 14 case studies, 19 Udacity credentials, 28 industry credentials, architecture tracks, core capabilities, credential groups, and the enterprise timeline. CS-13 and the Google Agentic AI Engineer Nanodegree remain included.

The presentation uses a 1440px desktop container, larger responsive typography and controls, more space within the track cards, and clearer architecture diagrams. SVG labels are enlarged, and the orchestration header and numbered badges are repositioned. These authorized presentation changes are recorded alongside the earlier content additions in the source manifest. `src/App.tsx` has a new byte identity:

```text
Current:  174939 bytes | SHA256 9a8bc2cdf4d1482b39018b3881fdb992176f3f145d076f22fa8ab9c689171a06
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

`scripts/verify-source.mjs` checks the current component's bytes and SHA256 against `scripts/authorized-source-changes.json`, then reverses the exact authorized replacements in reverse order. The reconstructed component must match the full original 157,493-byte SHA256. This checks preservation of the complete baseline outside the reviewed content additions and presentation changes. The guard also rejects Drive and Docs URLs in the public source and change manifest.

Build tooling uses Vite 8.3.5 and `@vitejs/plugin-react` 6.2.1. React 18 and Tailwind CSS 3.4 are retained. Run the source guard, dependency audit, and production build above before publishing a release.

## Source and hosting

GitHub stores the source and verifies pull requests and pushes to `main` with Node.js 24, a clean install, a dependency audit, source-preservation verification, and a production build. That workflow verifies the repository; it does not publish a Sites release.

The tracked `.openai/hosting.json` identifies the existing Site and declares `dist` as its static output directory. Keep that identity when updating this portfolio. Ask Codex with the Sites plugin to apply and publish updates to the existing Site. See [PUBLISH.md](./PUBLISH.md) for the update workflow.
