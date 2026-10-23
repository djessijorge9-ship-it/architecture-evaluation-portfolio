import { useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, CheckCheck, GitBranch, Github, ShieldCheck, X } from 'lucide-react';
import { disclaimer, getCuratedRepositoryUrl } from '../data';
import type { Project } from '../data';

export function ProjectDrawer({ project, onClose }: { project: Project; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const repositoryUrl = getCuratedRepositoryUrl(project);
  useEffect(() => {
    const dialog = ref.current!;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; if (dialog.open) dialog.close(); };
  }, []);
  return (
    <dialog ref={ref} className="project-dialog" aria-labelledby="drawer-title" onClose={() => { if (!ref.current?.open) onClose(); }} onClick={event => { if (event.target === event.currentTarget) ref.current?.close(); }}>
      <div className="drawer-header"><span className="drawer-eyebrow"><GitBranch size={16} aria-hidden="true" /> Architecture inspection</span><button className="icon-button dialog-close" aria-label="Close architecture inspection" onClick={() => ref.current?.close()} autoFocus><X size={21} /></button></div>
      <div className="drawer-content">
        <p className="eyebrow">{project.category} / October 2026</p>
        <h2 className="drawer-title" id="drawer-title">{project.title}</h2><p className="drawer-subtitle">{project.subtitle}</p>
        <p className="prototype-status"><CheckCheck size={15} aria-hidden="true"/><span>Prototype Evaluated (Oct 2026) • Architectural Telemetry Verified</span></p>
        <div className="stack-pills">{project.stack.map(tool => <span className="stack-pill" key={tool}>{tool}</span>)}</div>
        <section className="drawer-section" aria-labelledby="pipeline-heading"><h3 id="pipeline-heading" className="zone-label"><GitBranch size={15} aria-hidden="true" /> System Execution Pipeline</h3>
          <ol className="pipeline-diagram execution-pipeline" role="list" aria-label={`${project.title} execution steps`}>
            {project.pipeline.map((step, index) => <li className="execution-pipeline-item" key={step}>
              <div className="pipeline-step"><span className="pipeline-step-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><span className="pipeline-step-label">{step}</span></div>
              {index < project.pipeline.length - 1 && <ArrowDown className="pipeline-arrow" size={18} aria-hidden="true"/>}
            </li>)}
          </ol>
        </section>
        <section className="drawer-section" aria-labelledby="guardrails-heading"><h3 className="zone-label" id="guardrails-heading"><ShieldCheck size={15} aria-hidden="true" /> Deterministic Guardrails &amp; State Integrity</h3><ul className="guardrail-list">{project.guardrails.map(item => <li key={item}>{item}</li>)}</ul></section>
        <section className="evaluation-box drawer-evaluation" aria-labelledby="evaluation-heading"><h3 className="evaluation-heading" id="evaluation-heading"><CheckCheck size={16} aria-hidden="true" /> Empirical Verification Telemetry</h3><div className="project-metric"><span className="metric-inline-value">{project.metric}</span><span className="metric-inline-label">{project.metricLabel}</span></div><p className="evaluation-copy">{project.evaluation}</p></section>
        <p className="drawer-disclaimer">{disclaimer}</p>
        <div className="drawer-actions">{repositoryUrl && <a className="button button-primary repository-link" href={repositoryUrl} target="_blank" rel="noopener noreferrer"><Github size={17} aria-hidden="true" /> Repository &amp; Evidence <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>}<button className="button button-secondary" onClick={() => ref.current?.close()}>Back to systems</button></div>
      </div>
    </dialog>
  );
}
