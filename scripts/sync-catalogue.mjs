import { readFile, writeFile } from 'node:fs/promises';
import { programmeCatalog, catalogueCount, catalogueProjects } from '../src/catalogue.ts';
import { summary } from '../src/data.ts';

const root = new URL('../', import.meta.url);
const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const list = (items, tag) => `<${tag}>${items.map(item => `<li>${escape(item)}</li>`).join('')}</${tag}>`;
const section = `<section id="project-catalogue" aria-labelledby="catalogue-heading">
  <h2 id="catalogue-heading">Complete Udacity Project Catalogue</h2>
  <p>${catalogueCount} distinct projects across nine completed Nanodegrees and one completed course certificate. Five featured architecture blueprints are a subset of this complete catalogue. Capstone proposals and final implementations count as one project; archive revisions and lesson exercises are excluded.</p>
  <p>Educational prototypes evaluated in October 2026. Programme completion is verified by the linked certificates; retained implementation and evaluation records support the individual results. Demonstration services are not promised to remain live.</p>
  ${programmeCatalog.map(programme => `<section aria-labelledby="catalogue-${escape(programme.id)}">
    <h3 id="catalogue-${escape(programme.id)}">${escape(programme.title)} · ${programme.projects.length} projects</h3>
    <p>Enrolled version ${escape(programme.version)} · <a href="${escape(programme.credentialUrl)}" target="_blank" rel="noopener noreferrer">Verify programme completion ↗</a></p>
    ${programme.projects.map(project => `<article id="catalogue-project-${escape(project.id)}" data-catalogue-project="${escape(project.id)}">
      <h4>${escape(project.title)}</h4><p>${escape(project.stack.join(' / '))}</p>
      <p>${escape(project.evaluation)}</p>
      <details class="static-inspection"><summary>Inspect Architecture &amp; Evaluation</summary>
        <h5>System Execution Pipeline</h5>${list(project.pipeline, 'ol')}
        <h5>Deterministic Guardrails &amp; State Integrity</h5>${list(project.guardrails, 'ul')}
        <h5>Empirical Verification Telemetry</h5><p>${escape(project.evaluation)}</p>
        <h5>Evidence &amp; Limitations</h5><p>${escape(project.evidence)}</p><p>${escape(project.limitation)}</p>
        <p class="static-artifact-status">Prototype Evaluated (Oct 2026) • Recorded evaluation evidence</p>
      </details>
    </article>`).join('\n')}
  </section>`).join('\n')}
</section>`;

const htmlUrl = new URL('index.html', root);
let html = await readFile(htmlUrl, 'utf8');
const start = '<!-- PROJECT CATALOGUE START -->';
const end = '<!-- PROJECT CATALOGUE END -->';
if (!html.includes(start)) html = html.replace(/(?=<section\b[^>]*\bid="credentials")/, `${start}\n${end}\n        `);
if (!html.includes(start) || !html.includes(end)) throw new Error('Static catalogue insertion markers are missing.');
html = html.slice(0, html.indexOf(start) + start.length) + '\n' + section + '\n' + html.slice(html.indexOf(end));
html = html.replace('VERIFIED BUILD • 13 CREDENTIALS &amp; 5 EVALUATED SYSTEMS', `VERIFIED BUILD • 13 CREDENTIALS &amp; ${catalogueCount} PROJECTS`);
html = html.replace('VERIFIED BUILD • 13 CREDENTIALS & 5 EVALUATED SYSTEMS', `VERIFIED BUILD • 13 CREDENTIALS &amp; ${catalogueCount} PROJECTS`);
if (!html.includes('href="#project-catalogue">All projects')) html = html.replace('<a href="#architecture-projects">', '<a href="#project-catalogue">All projects</a> | <a href="#architecture-projects">');
html = html.replace(/<noscript>([\s\S]*?)<\/noscript>/, (match, content) => content.includes('href="#project-catalogue"') ? match : `<noscript>${content.replace('<a href="#architecture-projects">', '<a href="#project-catalogue">All projects</a> | <a href="#architecture-projects">')}</noscript>`);
html = html.replace(/<section aria-labelledby="static-summary-heading">[\s\S]*?<\/section>/, `<section aria-labelledby="static-summary-heading"><h2 id="static-summary-heading">Summary</h2><p>${escape(summary)}</p></section>`);
const schema = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
const graph = JSON.parse(schema[1]);
graph['@graph'] = graph['@graph'].filter(node => node['@type'] !== 'ItemList');
const page = graph['@graph'].find(node => node['@type'] === 'ProfilePage');
page.hasPart = { '@id': 'https://portfolio.djessi2.chatgpt.site/#project-catalogue' };
graph['@graph'].push({
  '@type': 'ItemList', '@id': page.hasPart['@id'], name: 'Complete Udacity Project Catalogue', numberOfItems: catalogueCount,
  itemListElement: catalogueProjects.map((project, index) => ({ '@type': 'ListItem', position: index + 1, item: { '@type': 'CreativeWork', name: project.title, url: `https://portfolio.djessi2.chatgpt.site/#catalogue-project-${project.id}`, description: project.evaluation } })),
});
html = html.replace(schema[0], `<script type="application/ld+json">\n${JSON.stringify(graph, null, 2)}\n    </script>`);
await writeFile(htmlUrl, html);
const readmeUrl = new URL('README.md', root);
let readme = await readFile(readmeUrl, 'utf8');
readme = readme.replace('It presents five evaluated educational systems and thirteen completed IBM, AWS and Udacity credentials.', `It presents ${catalogueCount} distinct Udacity projects, five featured architecture blueprints and thirteen completed IBM, AWS and Udacity credentials.`);
readme = readme.replace(/^\| `(?:src\/catalogue.ts|scripts\/sync-catalogue.mjs)` \|.*\n/gm, '');
readme = readme.replace('| `src/blueprints.ts` |', '| `src/catalogue.ts` | Complete programme-to-project mapping, execution flows, guardrails, recorded results and limits |\n| `scripts/sync-catalogue.mjs` | Generate the matching static catalogue, structured data and README inventory during build |\n| `src/blueprints.ts` |');
const readmeStart = '<!-- COMPLETE PROJECT INVENTORY START -->';
const readmeEnd = '<!-- COMPLETE PROJECT INVENTORY END -->';
if (!readme.includes(readmeStart)) readme = readme.replace('## 4. Verified Credentials Ledger', `${readmeStart}\n${readmeEnd}\n\n## 4. Verified Credentials Ledger`);
const cell = value => String(value).replace(/\|/g, '\\|').replace(/\n/g, ' ');
const inventory = `### Complete Udacity project inventory\n\n**${catalogueCount} distinct projects; 26 additions beyond the original five featured systems.** Coverage is all nine completed Udacity Nanodegrees plus the completed microservices course certificate as of 25 October 2026. The AWS capstone proposal and final implementation count as one system; both assessment stages are represented. Lesson exercises, diagnostic reruns, archive revisions and programmes still in progress are excluded.\n\nProgramme completion is independently linked to official certificates. Individual retained execution records support the results below; a programme certificate does not replace a missing individual review receipt. Raw course implementations, private datasets and provider logs are excluded from this application repository.\n\n| Completed programme | Distinct projects | Previously featured | Added |\n| --- | ---: | ---: | ---: |\n${programmeCatalog.map(programme => `| [${cell(programme.title)}](${programme.credentialUrl}) | ${programme.projects.length} | ${programme.projects.filter(project => project.featuredId).length} | ${programme.projects.filter(project => !project.featuredId).length} |`).join('\n')}\n| **Total** | **${catalogueCount}** | **5** | **26** |\n\n${programmeCatalog.map(programme => `#### ${programme.title}\n\nCurriculum record: ${programme.version}. [Verify completion](${programme.credentialUrl}).\n\n| Project / stack | Execution pipeline | Guardrails / state | Recorded evaluation and limits |\n| --- | --- | --- | --- |\n${programme.projects.map(project => `| **${cell(project.title)}**<br>${cell(project.stack.join(', '))} | ${cell(project.pipeline.join(' → '))} | ${cell(project.guardrails.join(' '))} | ${cell(project.evaluation)}<br>**Limits:** ${cell(project.limitation)}<br>**Evidence:** ${cell(project.evidence)} |`).join('\n')}`).join('\n\n')}\n`;
readme = readme.slice(0, readme.indexOf(readmeStart) + readmeStart.length) + '\n' + inventory + '\n' + readme.slice(readme.indexOf(readmeEnd));
await writeFile(readmeUrl, readme);
console.log(`Synced ${catalogueCount} catalogue projects into semantic HTML and structured data.`);
