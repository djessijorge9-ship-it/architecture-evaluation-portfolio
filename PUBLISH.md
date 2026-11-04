# Update the portfolio

The [public repository](https://github.com/djessijorge9-ship-it/architecture-evaluation-portfolio) uses `main`. ChatGPT/Codex Sites manages the existing portfolio through the identity in `.openai/hosting.json` and the static `dist` build.

The canonical domain is [djessijorge.com](https://djessijorge.com), with root and `www` active through native Sites hosting and verified HTTPS certificates. The [Sites fallback URL](https://djessi-jorge-systems-portfolio.djessi2.chatgpt.site) remains available for release verification.

The current source contains 13 case studies and 46 credentials: 18 Udacity credentials and 28 industry credentials. CS-13 covers four independent ND906 academic implementations. Preserve its qualifications around AI assistance, mocked checks, simulated research references, and historical live-model observations when updating its narrative.

## Update the GitHub source

Use Node.js 24 and an existing clone of the repository. From that clone, start with a clean working tree and get the latest source:

```powershell
git switch main
if ($LASTEXITCODE -ne 0) { throw 'Switching to main failed.' }

git pull --ff-only origin main
if ($LASTEXITCODE -ne 0) { throw 'Updating main failed. Resolve this before editing.' }
```

Make the intended changes, then verify and publish the source commit:

```powershell
npm ci
if ($LASTEXITCODE -ne 0) { throw 'Dependency installation failed.' }

node scripts/verify-source.mjs
if ($LASTEXITCODE -ne 0) { throw 'Source preservation verification failed.' }

npm audit --audit-level=low
if ($LASTEXITCODE -ne 0) { throw 'Dependency audit failed. Review before publishing.' }

npm run build
if ($LASTEXITCODE -ne 0) { throw 'The production build failed.' }

git add -A
if ($LASTEXITCODE -ne 0) { throw 'Staging failed.' }

git diff --cached --check
if ($LASTEXITCODE -ne 0) { throw 'Review the staged whitespace errors.' }

git diff --cached --stat
if ($LASTEXITCODE -ne 0) { throw 'Reading staged changes failed.' }

git commit -m "Update architecture portfolio"
if ($LASTEXITCODE -ne 0) { throw 'Commit failed.' }

git push origin main
if ($LASTEXITCODE -ne 0) { throw 'Push failed.' }
```

Commit source, the npm lockfile, `scripts/authorized-source-changes.json`, the verification script, and `.openai/hosting.json`. Keep generated `node_modules/` and `dist/` out of Git. If branch protection requires a pull request, commit to a feature branch and merge it into `main` through the normal review process.

The ND906 extension is an explicitly authorized change to the original component. All 12 original case-study objects, 45 original credential objects, and the SVG function and layout source remain intact. The source guard verifies the current component identity and reverses the exact authorized replacements to reconstruct the original byte hash. If a future request explicitly authorizes further component changes, document and review their literal replacements, preserve their order, update the current identity in the manifest, and confirm that reversing every authorized replacement still reconstructs the original baseline. Do not update the manifest merely to bypass a guard failure.

## Publish the same Site

After the source change is ready, ask Codex with the Sites plugin:

> Update and publish the existing Djessi Jorge portfolio Site from the latest `main` in `djessijorge9-ship-it/architecture-evaluation-portfolio`. Reuse the Site identity in `.openai/hosting.json`, build with `npm run build`, and publish the static `dist` output. Preserve the existing root and `www` custom-domain configuration.

For a direct editing request, identify this existing portfolio and describe the desired change. Codex can apply the edit and publish it to the same Site. Keep the existing project identity and audience; do not create a replacement Site for routine updates.

GitHub Actions runs install, audit, source-preservation verification, and build checks on pushes and pull requests to `main`. Passing those checks confirms the repository build. A Sites publication is a separate release step; a GitHub push alone does not update the hosted application.

After Sites reports a successful release, verify the returned URL, all 13 project controls, and the 46 credential links. Once native hosting confirms DNS and TLS activation, verify both custom-domain hostnames and the canonical root URL before describing the domain as active.
