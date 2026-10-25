import { useId, useMemo, useState } from 'react';
import { ArrowDown, ArrowUpRight, BookOpen, CheckCheck, ChevronDown, Search, ShieldCheck } from 'lucide-react';
import { catalogueCount, programmeCatalog } from '../catalogue';
import '../catalogue.css';

type CatalogueItem = (typeof programmeCatalog)[number]['projects'][number];

function searchableText(project: CatalogueItem) {
  return [project.title, ...project.stack, ...project.pipeline, ...project.guardrails,
    project.evaluation, project.limitation, project.evidence].join(' ').toLocaleLowerCase();
}

function CatalogueRecord({ project, index, onInspectFeatured }: {
  project: CatalogueItem;
  index: number;
  onInspectFeatured: (id: string) => void;
}) {
  const headingId = useId();
  return (
    <article id={`catalogue-project-${project.id}`} className="catalogue-record" aria-labelledby={headingId}>
      <div className="catalogue-record-heading">
        <span className="catalogue-record-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
        <div>
          <h4 id={headingId} className="catalogue-record-title">{project.title}</h4>
          {project.featuredId && <span className="catalogue-featured-label">Featured case study</span>}
        </div>
      </div>
      <ul className="catalogue-stack" aria-label="Technology stack">
        {project.stack.map(tool => <li key={tool}>{tool}</li>)}
      </ul>
      <p className="catalogue-record-preview">{project.evaluation}</p>
      <details className="catalogue-details">
        <summary aria-label={`Inspect Architecture & Evaluation: ${project.title}`}>
          <span>Inspect Architecture &amp; Evaluation</span>
          <ChevronDown size={16} aria-hidden="true" />
        </summary>
        <div className="catalogue-detail-body">
          <p className="catalogue-evidence-status">Prototype Evaluated (Oct 2026) • Recorded evaluation evidence</p>
          <section className="catalogue-detail-section">
            <h5><ArrowDown size={14} aria-hidden="true" /> System Execution Pipeline</h5>
            <ol className="catalogue-pipeline">
              {project.pipeline.map((step, stepIndex) => <li key={`${stepIndex}-${step}`}>
                <span className="catalogue-step-number" aria-hidden="true">{String(stepIndex + 1).padStart(2, '0')}</span>
                <span>{step}</span>
              </li>)}
            </ol>
          </section>
          <section className="catalogue-detail-section">
            <h5><ShieldCheck size={14} aria-hidden="true" /> Deterministic Guardrails &amp; State Integrity</h5>
            <ul className="catalogue-guardrails">{project.guardrails.map(item => <li key={item}>{item}</li>)}</ul>
          </section>
          <section className="catalogue-detail-section catalogue-evaluation">
            <h5><CheckCheck size={14} aria-hidden="true" /> Empirical Verification Telemetry</h5>
            <p>{project.evaluation}</p>
            <div className="catalogue-limitation"><span>Evaluation boundary</span><p>{project.limitation}</p></div>
          </section>
          <div className="catalogue-evidence"><BookOpen size={14} aria-hidden="true" /><p><span>Evidence record</span>{project.evidence}</p></div>
          {project.featuredId && <button className="button button-secondary catalogue-featured-button" type="button"
            onClick={() => onInspectFeatured(project.featuredId!)}
            aria-label={`Open detailed case study: ${project.title}`}>
            Open detailed case study <ArrowUpRight size={14} aria-hidden="true" />
          </button>}
        </div>
      </details>
    </article>
  );
}

export function ProjectCatalogue({ onInspectFeatured }: { onInspectFeatured: (id: string) => void }) {
  const [programmeId, setProgrammeId] = useState('all');
  const [query, setQuery] = useState('');
  const controlsId = useId();
  const searchTerm = query.trim().toLocaleLowerCase();
  const groups = useMemo(() => programmeCatalog
    .filter(programme => programmeId === 'all' || programme.id === programmeId)
    .map(programme => ({ ...programme, projects: programme.projects.filter(project => !searchTerm ||
      programme.title.toLocaleLowerCase().includes(searchTerm) || searchableText(project).includes(searchTerm)) }))
    .filter(programme => programme.projects.length > 0), [programmeId, searchTerm]);
  const visibleCount = groups.reduce((total, programme) => total + programme.projects.length, 0);
  return (
    <section id="project-catalogue" className="content-section project-catalogue" aria-labelledby={`${controlsId}-title`}>
      <div className="section-header catalogue-section-header">
        <div>
          <p className="section-kicker"><span className="section-index">ALL PROJECTS</span> / COMPLETE LEARNING PORTFOLIO</p>
          <h2 id={`${controlsId}-title`} className="section-title">Complete Udacity Project Catalogue</h2>
          <p className="section-description">{catalogueCount} distinct systems across nine Nanodegrees and one course. Explore the implementation, guardrails and recorded evaluation for each project.</p>
        </div>
        <div className="catalogue-total" aria-label={`${catalogueCount} distinct systems`}><strong>{String(catalogueCount).padStart(2, '0')}</strong><span>PROJECTS &amp; CAPSTONES</span></div>
      </div>
      <div className="catalogue-scope-note"><BookOpen size={15} aria-hidden="true" /><p>Course projects and prototypes, evaluated within their stated scope. The concrete capstone includes its proposal and final study as one system.</p></div>
      <div className="catalogue-controls">
        <div className="catalogue-select-field">
          <label htmlFor={`${controlsId}-programme`}>Programme</label>
          <div className="catalogue-select-wrap"><select id={`${controlsId}-programme`} value={programmeId} onChange={event => setProgrammeId(event.target.value)}>
            <option value="all">All programmes ({programmeCatalog.length})</option>
            {programmeCatalog.map(programme => <option key={programme.id} value={programme.id}>{programme.title} ({programme.projects.length})</option>)}
          </select><ChevronDown size={15} aria-hidden="true" /></div>
        </div>
        <div className="catalogue-search-field">
          <label htmlFor={`${controlsId}-search`}>Search projects or technology</label>
          <div className="catalogue-search-wrap"><Search size={16} aria-hidden="true" /><input id={`${controlsId}-search`} type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="e.g. LangGraph, vision, streaming" /></div>
        </div>
        <p className="catalogue-results" role="status" aria-live="polite" aria-atomic="true"><strong>{visibleCount}</strong> of {catalogueCount} projects</p>
      </div>
      <div className="catalogue-programmes">
        {groups.map(programme => <section key={programme.id} className="catalogue-programme" aria-labelledby={`${controlsId}-${programme.id}`}>
          <div className="catalogue-programme-header"><div><span className="catalogue-programme-id">{programme.id.toLocaleUpperCase()} · {programme.version}</span><h3 id={`${controlsId}-${programme.id}`}>{programme.title}</h3><a className="catalogue-credential" href={programme.credentialUrl} target="_blank" rel="noopener noreferrer">Verify programme completion ↗<span className="sr-only"> (opens in a new tab)</span></a></div><span className="catalogue-programme-count">{programme.projects.length} {programme.projects.length === 1 ? 'project' : 'projects'}</span></div>
          <div className="catalogue-records">{programme.projects.map((project, index) => <CatalogueRecord key={project.id} project={project} index={index} onInspectFeatured={onInspectFeatured} />)}</div>
        </section>)}
        {visibleCount === 0 && <div className="catalogue-empty"><Search size={24} aria-hidden="true" /><h3>No matching projects</h3><p>Try a different programme, project name or technology.</p><button type="button" className="button button-secondary" onClick={() => { setQuery(''); setProgrammeId('all'); }}>Clear filters</button></div>}
      </div>
    </section>
  );
}
