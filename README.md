# Djessi Jorge | Architecture Portfolio

React 18, TypeScript, Tailwind CSS 3.4, and Lucide portfolio, built with Vite 8 and hosted through ChatGPT/Codex Sites.

- Source: [architecture-evaluation-portfolio](https://github.com/djessijorge9-ship-it/architecture-evaluation-portfolio), branch `main`.
- Site: [Djessi Jorge Systems Portfolio](https://djessi-jorge-systems-portfolio.djessi2.chatgpt.site).

`src/App.tsx` preserves the supplied 157,493-byte component exactly, including all 12 case studies, 45 credentials, data arrays, architecture diagrams, layout, and styling. Its SHA256 is:

```text
1705c8b0b180d9b8296584a18e88f4f7174e9928d1957294c9f6c7c7cdbb6b2d
```

## Local development

Use Node.js 24. The package requires Node.js 22.12.0 or newer.

```sh
npm ci
npm run dev
```

Open `http://127.0.0.1:5000`. The dev and preview servers bind to the local loopback interface.

```sh
npm audit --audit-level=low
npm run build
npm run preview
```

The production build writes `dist/index.html` and static assets. Stop the dev server before starting preview because both use port 5000. The build script remains `vite build`; TypeScript retains `strict: false` and `noImplicitAny: false`, without a blocking `tsc -b` step.

## Verification

The upgraded dependency set passed a clean install, an audit with zero reported vulnerabilities, and a production build. Build tooling uses Vite 8.3.5 and `@vitejs/plugin-react` 6.2.1. React 18, Tailwind CSS 3.4, and the supplied portfolio component are preserved.

## Source and hosting

GitHub stores the source and verifies pull requests and pushes to `main` with Node.js 24, a clean install, a dependency audit, and a production build. That workflow verifies the repository; it does not publish a Sites release.

The tracked `.openai/hosting.json` identifies the existing Site and declares `dist` as its static output directory. Keep that identity when updating this portfolio. Ask Codex with the Sites plugin to apply and publish updates to the existing Site. See [PUBLISH.md](./PUBLISH.md) for the update workflow.
