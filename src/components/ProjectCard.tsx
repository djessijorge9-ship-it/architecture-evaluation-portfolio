import { ArrowUpRight, CheckCheck, GitBranch, ShieldCheck } from 'lucide-react';
import { getCuratedRepositoryUrl } from '../data';
import type { Project } from '../data';

export function ProjectCard({ project, index, onInspect }: {
  project: Project; index: number; onInspect: (project: Project) => void;
}) {
  const repositoryUrl = getCuratedRepositoryUrl(project);

  return (
    <article className={`project-card ${index === 4 ? 'project-featured' : ''}`} onClick={event => {
      if (event.target instanceof Element && event.target.closest('button, a')) return;
      if (window.getSelection()?.toString()) return;
      onInspect(project);
    }}>
      <div className="project-topline">
        <span className="project-identifier">SYSTEM / {String(index + 1).padStart(2, '0')}</span>
        <time className="project-date" dateTime="2026-10">October 2026</time>
      </div>
      <div className="project-open-button">
        <div className="project-heading">
          <span className="project-icon"><GitBranch size={21} strokeWidth={1.5} aria-hidden="true" /></span>
          <div><h3 className="project-title">{project.title}</h3><p className="project-subtitle">{project.subtitle}</p></div>
          <ArrowUpRight className="project-open-arrow" size={20} aria-hidden="true" />
        </div>
      </div>
      <p className="project-category">{project.category}</p>
      <div className="stack-pills" aria-label="System architecture and stack">
        {project.stack.map(tool => <span className="stack-pill" key={tool}>{tool}</span>)}
      </div>
      <div className="card-divider" />
      <div className="project-body">
        <div className="project-architecture">
          <h4 className="zone-label"><ShieldCheck size={14} aria-hidden="true" /> Engineering &amp; guardrail design</h4>
          <ul className="guardrail-list">{project.guardrails.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
        <div className="project-evaluation evaluation-box">
          <h4 className="evaluation-heading"><CheckCheck size={15} aria-hidden="true" /> Empirical evaluation</h4>
          <div className="project-metric"><span className="metric-inline-value">{project.metric}</span><span className="metric-inline-label">{project.metricLabel}</span></div>
          <p className="evaluation-copy">{project.evaluation}</p>
        </div>
      </div>
      <div className="project-footer"><span>Architecture · Boundaries · Evidence</span><div className="project-actions"><button type="button" className="button button-primary project-inspect-button" aria-label={`Inspect Architecture & Evaluation: ${project.title} — ${project.subtitle}`} onClick={() => onInspect(project)}>Inspect Architecture &amp; Evaluation <ArrowUpRight size={15} aria-hidden="true" /></button>{repositoryUrl && <a className="inspect-link repository-link" href={repositoryUrl} target="_blank" rel="noopener noreferrer">Repository &amp; Evidence <ArrowUpRight size={15} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>}</div></div>
    </article>
  );
}
