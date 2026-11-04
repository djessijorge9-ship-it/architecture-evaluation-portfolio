# Update the portfolio

The [public repository](https://github.com/djessijorge9-ship-it/architecture-evaluation-portfolio) uses `main`. The [portfolio Site](https://djessi-jorge-systems-portfolio.djessi2.chatgpt.site) is managed through ChatGPT/Codex Sites, using the existing identity in `.openai/hosting.json` and the static `dist` build.

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

Commit source, the npm lockfile, and `.openai/hosting.json`. Keep generated `node_modules/` and `dist/` out of Git. If branch protection requires a pull request, commit to a feature branch and merge it into `main` through the normal review process. Preserve the supplied `src/App.tsx` unless the requested change explicitly calls for editing it.

## Publish the same Site

After the source change is ready, ask Codex with the Sites plugin:

> Update and publish the existing Djessi Jorge portfolio Site from the latest `main` in `djessijorge9-ship-it/architecture-evaluation-portfolio`. Reuse the Site identity in `.openai/hosting.json`, build with `npm run build`, and publish the static `dist` output.

For a direct editing request, identify this existing portfolio and describe the desired change. Codex can apply the edit and publish it to the same Site. Keep the existing project identity and audience; do not create a replacement Site for routine updates.

GitHub Actions runs install, audit, and build checks on pushes and pull requests to `main`. Passing those checks confirms the repository build. A Sites publication is a separate release step; a GitHub push alone does not update the hosted application.

After Sites reports a successful release, open its returned URL and confirm the portfolio renders and its project controls and credential links work.
