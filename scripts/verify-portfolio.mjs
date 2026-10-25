import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

assert(Number(process.versions.node.split('.')[0]) >= 24, 'Use Node.js 24 or newer.');
const root = fileURLToPath(new URL('../', import.meta.url));
const read = relative => readFile(path.join(root, relative), 'utf8');
const data = await import(pathToFileURL(path.join(root, 'src/data.ts')).href);
const { blueprints } = await import(pathToFileURL(path.join(root, 'src/blueprints.ts')).href);
const { programmeCatalog, catalogueCount, catalogueProjects } = await import(pathToFileURL(path.join(root, 'src/catalogue.ts')).href);
const { projects, credentials, profile, disclaimer, metrics, skills, executiveSummary, getCuratedRepositoryUrl } = data;
const [sourceHtml, builtHtml, readme, mainSource] = await Promise.all([
  read('index.html'),
  read('dist/index.html').catch(() => { throw new Error('Build dist/ first with npm run build.'); }),
  read('README.md'),
  read('src/main.tsx'),
]);

const decode = text => text.replace(/&(?:amp|lt|gt|quot|apos|nbsp);|&#(?:x[0-9a-f]+|[0-9]+);/gi, entity => {
  const named = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&apos;': "'", '&nbsp;': ' ' };
  if (named[entity.toLowerCase()] !== undefined) return named[entity.toLowerCase()];
  return String.fromCodePoint(entity[2].toLowerCase() === 'x' ? parseInt(entity.slice(3, -1), 16) : parseInt(entity.slice(2, -1), 10));
});
const plain = html => decode(html.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const comparable = text => plain(text).toLowerCase().replace(/[.,;:!?]/g, '').replace(/\s+/g, ' ').trim();
const compact = text => text.replace(/\s+/g, ' ').trim();
const attributes = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(["'])(.*?)\2/gs)].map(([, key, , value]) => [key.toLowerCase(), decode(value)]));
const anchors = html => [...html.matchAll(/<a\b[^>]*>[\s\S]*?<\/a>/gi)].map(match => ({ ...attributes(match[0]), text: plain(match[0]) }));

function elementById(html, id) {
  const opening = [...html.matchAll(/<([a-z][\w-]*)\b[^>]*>/gi)].find(match => attributes(match[0]).id === id);
  assert(opening, `Missing element #${id}.`);
  const tokens = new RegExp(`<(/?)${opening[1]}\\b[^>]*>`, 'gi');
  tokens.lastIndex = opening.index;
  let depth = 0;
  for (let token; (token = tokens.exec(html));) {
    depth += token[1] ? -1 : 1;
    if (depth === 0) return html.slice(opening.index, tokens.lastIndex);
  }
  throw new Error(`Unclosed element #${id}.`);
}

function graph(html) {
  const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)].filter(match => attributes(match[1]).type === 'application/ld+json');
  assert.equal(scripts.length, 1, 'Exactly one JSON-LD graph must be present.');
  const parsed = JSON.parse(scripts[0][2]);
  assert.equal(parsed['@context'], 'https://schema.org');
  assert(Array.isArray(parsed['@graph']), 'JSON-LD must use a graph.');
  return parsed;
}

function metadata(html) {
  const result = { title: plain(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? '') };
  for (const tag of html.matchAll(/<meta\b[^>]*>/gi)) {
    const attrs = attributes(tag[0]);
    if (attrs.name || attrs.property) result[attrs.name ?? attrs.property] = attrs.content;
  }
  for (const tag of html.matchAll(/<link\b[^>]*>/gi)) {
    const attrs = attributes(tag[0]);
    if (attrs.rel === 'canonical') result.canonical = attrs.href;
  }
  return result;
}

const expectedCredentials = [
  ['IBM Systems and Solutions Architect Professional Certificate', 'IBM & SkillUp via Coursera', '2026-10-11', 'https://www.coursera.org/account/accomplishments/specialization/QCTS5SIEC9UJ'],
  ['IBM RAG and Agentic AI Professional Certificate', 'IBM via Coursera', '2026-10-16', 'https://www.coursera.org/account/accomplishments/specialization/EV46HYDJREGC'],
  ['AWS Generative AI Developer Advanced Professional Certificate', 'Amazon Web Services via Coursera', '2026-10-16', 'https://www.coursera.org/account/accomplishments/specialization/2HU8OE27XZOW'],
  ['AWS Machine Learning Engineer Nanodegree', 'Udacity', '2026-10-18', 'https://www.udacity.com/certificate/e/41150320-caa0-11f1-a7b7-677d26a7417a'],
  ['Agentic AI Engineer with LangChain and LangGraph Nanodegree', 'Udacity', '2026-10-21', 'https://www.udacity.com/certificate/e/7f3f43c0-cd31-11f1-85d2-5797698f73c3'],
  ['Deep Learning Nanodegree', 'Udacity', '2026-10-21', 'https://www.udacity.com/certificate/e/38c7402a-cd3e-11f1-a421-27adc65a9265'],
  ['Generative AI Nanodegree', 'Udacity', '2026-10-21', 'https://www.udacity.com/certificate/e/823fea76-cd71-11f1-a3e2-1f751a2fc192'],
  ['Agentic AI Nanodegree', 'Udacity', '2026-10-21', 'https://www.udacity.com/certificate/e/0ca6ac48-cd2e-11f1-81c4-0340813a7e5f'],
  ['Computer Vision Nanodegree', 'Udacity', '2026-10-23', 'https://www.udacity.com/certificate/e/9c2fe1da-cdb1-11f1-afaa-73d387b1c8b9'],
  ['Deep Reinforcement Learning Nanodegree', 'Udacity', '2026-10-23', 'https://www.udacity.com/certificate/e/2a76d76c-ce2c-11f1-9a30-cb3177fb5d4d'],
  ['Natural Language Processing Nanodegree', 'Udacity', '2026-10-25', 'https://www.udacity.com/certificate/e/c1c1a7aa-cdaf-11f1-b6f9-8bb02a043926'],
  ['Microservices at Scale using AWS and Kubernetes', 'Udacity', '2026-10-25', 'https://www.udacity.com/certificate/e/5d8dfadc-d042-11f1-93ef-5f6905dcf04d'],
  ['Data Streaming Nanodegree', 'Udacity', '2026-10-25', 'https://www.udacity.com/certificate/e/ce6e6422-d041-11f1-bbc9-23cf1ca0d113'],
];
const expectedScopes = [
  '11 Courses • Systems Architecture, Enterprise Data Architecture, Cloud Native, Microservices, Docker/Kubernetes, Cybersecurity & GenAI Architecture',
  '10 Courses • RAG, Vector Databases, Multimodal GenAI, LangChain, LangGraph, CrewAI, AutoGen, BeeAI & MCP',
  '22 Courses • Amazon Bedrock, Knowledge Bases, Lambda, Step Functions, Bedrock Guardrails, Security, Cost Optimization & Evaluation',
];
const expectedResults = {
  'uda-hub': 'Passed 21 offline tests; a final eight-ticket synthetic provider run resolved five cases and escalated three, exercising grounding, memory and guarded actions.',
  'beavers-choice': 'Evaluated all 20 supplied scenarios in one model-provider run: four orders fulfilled, 16 declined and zero execution errors, with independent receipt and ledger reconciliation.',
  omnitrainer: 'Passed 45 offline tests and five live setup tests; an observed browser session retained context across two accepted turns and blocked a hostile third turn. Documented imperfect text and video evaluation results.',
  'synthetic-handwriting': 'A CNN trained only on 5,000 diffusion-generated digits achieved 95.98% accuracy on 10,000 held-out real digits, versus 81.79% using GAN-generated data in the retained single-seed experiment.',
  'concrete-strength': 'Achieved 5.73 MPa RMSE, 40.82% lower than Ridge, across 180 observations from 86 unseen exact recipes.',
};

assert.equal(projects.length, 5);
assert.deepEqual(projects.map(project => project.id), Object.keys(expectedResults));
assert.equal(blueprints.length, 5);
assert.deepEqual(blueprints.map(blueprint => blueprint.id), projects.map(project => project.id));
assert.equal(skills.length, 7);
assert.equal(credentials.length, 13);
assert.equal(new Set(credentials.map(credential => credential.verificationUrl)).size, 13, 'Each credential needs its own official destination.');
assert.equal(credentials.filter(credential => credential.title.endsWith('Professional Certificate')).length, 3);
assert.equal(credentials.filter(credential => credential.title.endsWith('Nanodegree')).length, 9);
const courseCertificate = credentials.find(credential => credential.title === 'Microservices at Scale using AWS and Kubernetes');
assert.equal(courseCertificate?.scope, 'Udacity Course Certificate');
assert.equal(credentials.filter(credential => credential.scope === 'Udacity Course Certificate').length, 1);
assert(readme.includes('Thirteen credentials were completed in October 2026: three professional certificates, nine Udacity Nanodegrees and one Udacity course certificate.'));
assert.deepEqual(credentials.map(credential => [credential.title, credential.issuer, credential.isoDate, credential.verificationUrl]), expectedCredentials);
const certificateDate = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
assert.deepEqual(credentials.map(credential => credential.date), expectedCredentials.map(([, , isoDate]) => certificateDate.format(new Date(`${isoDate}T00:00:00Z`))));
assert.deepEqual(credentials.slice(0, 3).map(credential => credential.scope), expectedScopes);
assert.equal(metrics[0].value, '13');
assert.equal(metrics[0].label, 'Completed IBM, AWS & Udacity Credentials (Oct 2026)');
assert.equal(metrics[1].value, '66+');
assert.equal(profile.location, 'London, UK');
assert.deepEqual(Object.keys(profile).sort(), ['github', 'linkedin', 'location', 'name', 'portfolio']);
const expectedPortfolioUrl = 'https://portfolio.djessi2.chatgpt.site/';
assert.equal(profile.portfolio, expectedPortfolioUrl);
assert(executiveSummary.includes(expectedPortfolioUrl), 'Recruiter summary must include the current portfolio URL.');
assert(executiveSummary.includes('Verified Credentials (13 completed in October 2026)'), 'Recruiter summary ledger count must match the credential records.');
assert(executiveSummary.includes('Udacity Course Certificate'), 'Recruiter summary must identify the course certificate accurately.');
assert(data.summary.includes('thirteen completed IBM, AWS and Udacity credentials'));
for (const credential of credentials) assert(executiveSummary.includes(credential.verificationUrl), `Recruiter summary missing ${credential.title} verification URL.`);
assert.equal(disclaimer, 'Selected certification projects. Results reflect educational prototypes and recorded project evaluations.');
assert.equal(typeof getCuratedRepositoryUrl, 'function', 'Export the repository curation gate from src/data.ts.');

const curatedFixtureUrl = 'https://github.com/djessijorge9-ship-it/verification-fixture';
const fixture = { ...projects[0], repoUrl: null, isRepoCurated: false };
assert.equal(getCuratedRepositoryUrl(fixture), null);
assert.equal(getCuratedRepositoryUrl({ ...fixture, repoUrl: curatedFixtureUrl }), null, 'A URL alone must not enable a repository link.');
assert.equal(getCuratedRepositoryUrl({ ...fixture, isRepoCurated: true }), null, 'An attestation alone must not enable a repository link.');
assert.equal(getCuratedRepositoryUrl({ ...fixture, repoUrl: profile.github, isRepoCurated: true }), null, 'An account profile is not a project repository.');
assert.equal(getCuratedRepositoryUrl({ ...fixture, repoUrl: profile.github.replace(/\/$/, ''), isRepoCurated: true }), null);
assert.equal(getCuratedRepositoryUrl({ ...fixture, repoUrl: 'http://github.com/djessijorge9-ship-it/verification-fixture', isRepoCurated: true }), null);
assert.equal(getCuratedRepositoryUrl({ ...fixture, repoUrl: 'https://github.com/another-owner/verification-fixture', isRepoCurated: true }), null);
assert.equal(getCuratedRepositoryUrl({ ...fixture, repoUrl: curatedFixtureUrl, isRepoCurated: true }), curatedFixtureUrl);
for (const project of projects) {
  assert.equal(project.repoUrl, null, `${project.id}: uncurated repositories must have null URLs.`);
  assert.equal(project.isRepoCurated, false, `${project.id}: curation must not be asserted before review.`);
  assert.equal(getCuratedRepositoryUrl(project), null);
  assert.equal(project.evaluation, expectedResults[project.id]);
  assert(readme.includes(project.evaluation), `${project.id}: README must preserve the complete recorded result.`);
}

const sourceGraph = graph(sourceHtml);
const expectedCoverage = { nd189: 5, nd901: 3, nd900: 4, nd608: 3, nd101: 4, nd891: 3, nd892: 3, nd893: 3, nd029: 2, cd12355: 1 };
assert.equal(catalogueCount, 31);
assert.equal(programmeCatalog.length, 10);
assert.deepEqual(Object.fromEntries(programmeCatalog.map(programme => [programme.id, programme.projects.length])), expectedCoverage);
assert.equal(new Set(catalogueProjects.map(project => project.id)).size, 31, 'Catalogue project IDs must be unique.');
assert.deepEqual(catalogueProjects.filter(project => project.featuredId).map(project => project.featuredId).sort(), projects.map(project => project.id).sort(), 'Featured projects are a subset of the catalogue, counted once.');
assert.equal(catalogueProjects.filter(project => !project.featuredId).length, 26);
assert(executiveSummary.includes('Complete Udacity Project Catalogue: 31 distinct projects'));
for (const programme of programmeCatalog) {
  assert(credentials.some(credential => credential.verificationUrl === programme.credentialUrl), `${programme.id}: completion certificate missing.`);
  for (const project of programme.projects) {
    assert.equal(project.repoUrl, null);
    assert.equal(project.isRepoCurated, false);
    assert(project.pipeline.length >= 3 && project.guardrails.length >= 2);
    for (const key of ['evaluation', 'limitation', 'evidence']) assert(project[key].length > 30, `${project.id}: incomplete ${key}.`);
    for (const value of [project.title, project.evaluation, project.limitation]) {
      assert(executiveSummary.includes(value), `${project.id}: missing from clipboard summary.`);
      assert(readme.includes(value), `${project.id}: missing from README.`);
    }
  }
}
assert.deepEqual(graph(builtHtml), sourceGraph, 'Source and built structured data differ.');
const catalogueSchema = sourceGraph['@graph'].find(node => node['@type'] === 'ItemList');
assert.equal(catalogueSchema?.numberOfItems, 31);
assert.deepEqual(catalogueSchema.itemListElement.map(entry => entry.item.name), catalogueProjects.map(project => project.title));
const person = sourceGraph['@graph'].find(node => node['@type'] === 'Person');
const page = sourceGraph['@graph'].find(node => node['@type'] === 'ProfilePage');
assert(person && page, 'Person and ProfilePage nodes must exist.');
assert.equal(page.mainEntity?.['@id'], person['@id']);
assert.equal(page.url, expectedPortfolioUrl);
assert.equal(person.url, expectedPortfolioUrl);
assert.equal(page['@id'], `${expectedPortfolioUrl}#profile-page`);
assert.equal(person['@id'], `${expectedPortfolioUrl}#person`);
assert.equal(person.address.addressLocality, 'London');
assert.equal(person.address.addressCountry, 'UK');
assert.deepEqual(person.sameAs, [profile.linkedin, profile.github]);
assert.deepEqual(person.hasCredential.map(credential => [credential.name, credential.creator?.name, credential.dateCreated, credential.url]), expectedCredentials);
assert(/\bcourse certificate\b/i.test(person.hasCredential.find(credential => credential.name === courseCertificate.title)?.description ?? ''), 'Structured data must identify the course certificate accurately.');
expectedScopes.forEach((scope, index) => assert(person.hasCredential[index].description.includes(scope)));
const sourceMetadata = metadata(sourceHtml);
assert.deepEqual(metadata(builtHtml), sourceMetadata, 'Source and built metadata differ.');
const title = 'Djessi Jorge — Solutions Architect & Agentic AI Engineer';
for (const key of ['title', 'og:title', 'og:site_name', 'twitter:title']) assert.equal(sourceMetadata[key], title);
assert.equal(sourceMetadata['og:type'], 'website');
assert.equal(sourceMetadata['twitter:card'], 'summary_large_image');
assert.equal(sourceMetadata['og:url'], sourceMetadata.canonical);
assert.equal(sourceMetadata.canonical, expectedPortfolioUrl);
assert.equal(sourceMetadata['og:description'], sourceMetadata.description);
assert.equal(sourceMetadata['twitter:description'], sourceMetadata.description);
assert(sourceMetadata.description.includes('AWS SageMaker'));
const sourceRoot = elementById(sourceHtml, 'root');
assert.equal(compact(elementById(builtHtml, 'root')), compact(sourceRoot), 'Source and built semantic portfolios differ.');
assert(sourceRoot.includes('<main'), 'Initial root must contain a semantic main element.');
assert(!sourceRoot.includes('<noscript'), 'The recovery layer must remain independent of the React root.');
assert(sourceHtml.includes('<script type="module" src="/src/main.tsx"></script>'), 'Preserve the React mount script.');
assert(mainSource.includes('createRoot(') && !mainSource.includes('hydrateRoot('));

for (const [label, html] of [['source', sourceHtml], ['build', builtHtml]]) {
  const ids = [...html.matchAll(/<[a-z][\w-]*\b[^>]*>/gi)].map(match => attributes(match[0]).id).filter(Boolean);
  assert.equal(ids.length, new Set(ids).size, `${label}: duplicate HTML IDs.`);
  const text = plain(elementById(html, 'static-portfolio'));
  for (const expected of ['VERIFIED BUILD • 13 CREDENTIALS & 31 PROJECTS', 'System Architecture Blueprints', 'Verification & Evaluation Benchmarks', 'Evaluated Systems & Reference Architectures', 'Complete Udacity Project Catalogue', 'Credentials & Programmes', 'Technical Capability Matrix', 'LONDON, UK', disclaimer]) assert(text.includes(expected), `${label}: missing ${expected}.`);
  assert(text.includes('thirteen completed IBM, AWS and Udacity credentials'));
  assert(text.includes(metrics[0].label), `${label}: benchmark must count credentials.`);
  assert(!/\b(?:seven|7|nine|9|ten|10)\s+(?:(?:completed\s+IBM,\s+AWS\s+and\s+Udacity\s+)|(?:completed\s+))?(?:credentials|programmes|certificate links)\b/i.test(text), `${label}: stale credential count.`);
  const articles = [...elementById(html, 'architecture-projects').matchAll(/<article\b[^>]*>[\s\S]*?<\/article>/gi)].map(match => match[0]);
  assert.equal(articles.length, 5, `${label}: exactly five project articles.`);
  projects.forEach((project, index) => {
    const article = articles[index];
    assert(plain(article).includes(project.title));
    assert(/<details\b/.test(article), `${label}/${project.id}: native static inspection missing.`);
    for (const inspectionLabel of ['Inspect Architecture & Evaluation', 'System Execution Pipeline', 'Deterministic Guardrails & State Integrity', 'Empirical Verification Telemetry', 'Prototype Evaluated (Oct 2026) • Architectural Telemetry Verified']) assert(plain(article).includes(inspectionLabel), `${label}/${project.id}: missing ${inspectionLabel}.`);
    for (const sentence of [...project.guardrails, project.evaluation]) assert(comparable(article).includes(comparable(sentence)), `${label}/${project.id}: incomplete project evidence.`);
    assert(anchors(article).every(anchor => anchor.href?.startsWith('#')), `${label}/${project.id}: uncurated project has an external card link.`);
  });
  const credentialSection = elementById(html, 'credentials');
  const catalogueSection = elementById(html, 'project-catalogue');
  assert.equal([...catalogueSection.matchAll(/data-catalogue-project=/g)].length, 31, `${label}: complete non-JS project inventory missing.`);
  for (const project of catalogueProjects) {
    const record = elementById(catalogueSection, `catalogue-project-${project.id}`);
    assert(record.includes('<details'), `${label}/${project.id}: static inspection unavailable.`);
    for (const value of [project.title, ...project.pipeline, ...project.guardrails, project.evaluation, project.limitation, project.evidence]) assert(comparable(record).includes(comparable(value)), `${label}/${project.id}: incomplete catalogue record.`);
    assert.equal(anchors(record).length, 0, 'Uncurated records must not contain external repository links.');
  }
  const verificationAnchors = anchors(credentialSection).filter(anchor => anchor.text === 'Verify Certificate ↗');
  assert.equal(verificationAnchors.length, 13, `${label}: visible verification count must match 13 credential records.`);
  assert.deepEqual(verificationAnchors.map(anchor => anchor.href), credentials.map(credential => credential.verificationUrl), `${label}: certificate links differ.`);
  credentials.forEach(credential => {
    for (const value of [credential.title, credential.issuer, credential.date, ...(credential.scope ? [credential.scope] : [])]) assert(plain(credentialSection).includes(value), `${label}: incomplete credential ${credential.title}.`);
    assert(readme.includes(credential.verificationUrl), `README missing ${credential.title} verification URL.`);
  });
  const blueprintSection = elementById(html, 'system-blueprints');
  for (const blueprint of blueprints) for (const value of [blueprint.tabLabel, blueprint.title, blueprint.stack, ...blueprint.nodes, ...blueprint.outcomes, blueprint.benchmark]) assert(plain(blueprintSection).includes(value), `${label}/${blueprint.id}: incomplete blueprint.`);
  const recovery = html.match(/<noscript\b[^>]*>([\s\S]*?)<\/noscript>/i)?.[1] ?? '';
  assert(/<nav\b[^>]*aria-label=["']Portfolio recovery navigation["']/i.test(recovery), `${label}: independent recovery navigation missing.`);
  const recoveryHrefs = anchors(recovery).map(anchor => anchor.href);
  for (const href of ['#project-catalogue', '#architecture-projects', '#credentials', '#skill-matrix', profile.github, profile.linkedin]) assert(recoveryHrefs.includes(href), `${label}: missing recovery destination ${href}.`);
}

const releasePaths = ['README.md', 'index.html', 'src/data.ts', 'src/catalogue.ts', 'src/catalogue.css', 'src/blueprints.ts', 'src/App.tsx', 'src/main.tsx', 'src/styles.css', 'src/components/ProjectCatalogue.tsx', 'src/components/ProjectCard.tsx', 'src/components/ProjectDrawer.tsx', 'src/components/ArchitecturePreview.tsx', 'scripts/sync-catalogue.mjs', 'scripts/verify-portfolio.mjs', 'package.json', 'package-lock.json', 'tsconfig.json', 'vite.config.ts', '.gitignore'];
async function builtTextPaths(directory) {
  const entries = await readdir(path.join(root, directory), { withFileTypes: true });
  const paths = await Promise.all(entries.map(entry => entry.isDirectory() ? builtTextPaths(path.join(directory, entry.name)) : /\.(?:html|js|css|json)$/i.test(entry.name) ? [path.join(directory, entry.name)] : []));
  return paths.flat();
}
const privatePatterns = [
  ['personal address', /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i],
  ['direct contact protocol', /\b(?:mail\x74o|t\x65l):(?=[+0-9A-Z])/i],
  ['UK telephone', /\+44(?:[\s().-]*\d){10}\b/],
  ['private key', /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/],
  ['GitHub credential', /\bgh[pousr]_[A-Za-z0-9]{20,}\b/],
  ['API credential', /\bsk-[A-Za-z0-9_-]{20,}\b/],
  ['AWS access credential', /\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/],
];
for (const relative of [...releasePaths, ...await builtTextPaths('dist')]) {
  const text = await read(relative);
  for (const [kind, pattern] of privatePatterns) assert(!pattern.test(text), `${relative}: found ${kind}; remove it before release.`);
  assert(!new RegExp('\\b(?:' + ['TO' + 'DO', 'FIX' + 'ME'].join('|') + ')\\b').test(text), `${relative}: unfinished release content.`);
}
for (const [kind, pattern] of privatePatterns) assert(!pattern.test(executiveSummary), `Recruiter summary contains ${kind}.`);
console.log('PASS: 31 complete projects across nine Nanodegrees and one course, 26 additions, five featured blueprints, thirteen official credentials, canonical URL, source/build parity, repository gates, static recovery and release privacy.');
