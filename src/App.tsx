import { useEffect, useRef, useState } from 'react';
import { Activity, ArrowRight, ArrowUpRight, Award, Blocks, Check, CheckCheck, Copy, Github, GraduationCap, Layers, Linkedin, MapPin, Menu, ShieldCheck, Terminal, X } from 'lucide-react';
import { categories, credentials, disclaimer, education, executiveSummary, metrics, profile, projects, skills, summary } from './data';
import type { Category, Project } from './data';
import { ArchitecturePreview } from './components/ArchitecturePreview';
import { blueprints } from './blueprints';
import { ProjectCard } from './components/ProjectCard';
import { ProjectDrawer } from './components/ProjectDrawer';

const navigation = [{id:'architecture-projects',label:'Systems'}, {id:'credentials',label:'Credentials'}, {id:'skill-matrix',label:'Skill matrix'}];
const metricIcons = [GraduationCap, CheckCheck, ShieldCheck, Activity];
const systemFromUrl = () => {
  const id = new URLSearchParams(window.location.search).get('system');
  return blueprints.some(system => system.id === id) ? id! : blueprints[0].id;
};

export default function App() {
  const [filter, setFilter] = useState<Category | 'All'>('All');
  const [activeSystemId, setActiveSystemId] = useState(systemFromUrl);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState('architecture-projects');
  const [menuOpen, setMenuOpen] = useState(false);
  const [copyState, setCopyState] = useState<'idle'|'copied'|'manual'>('idle');
  const copyDialog = useRef<HTMLDialogElement>(null);
  const copyText = useRef<HTMLTextAreaElement>(null);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    }, { rootMargin: '-15% 0px -65% 0px' });
    navigation.forEach(({id}) => { const node=document.getElementById(id); if(node) observer.observe(node); });
    return () => { observer.disconnect(); clearTimeout(copyTimer.current); };
  }, []);

  function selectSystem(id: string) {
    if (!blueprints.some(system => system.id === id)) return;
    setActiveSystemId(id);
    const url = new URL(window.location.href);
    url.searchParams.set('system', id);
    window.history.replaceState(window.history.state, '', url);
  }

  function inspectProject(project: Project) {
    selectSystem(project.id);
    setSelectedProject(project);
  }

  useEffect(() => {
    const syncSystem = () => setActiveSystemId(systemFromUrl());
    window.addEventListener('popstate', syncSystem);
    return () => window.removeEventListener('popstate', syncSystem);
  }, []);

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(executiveSummary);
      setCopyState('copied');
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopyState('idle'), 3500);
    } catch {
      setCopyState('manual');
      copyDialog.current?.showModal();
      copyText.current?.focus();
      copyText.current?.select();
    }
  }

  const filteredProjects=projects.filter(project => filter==='All' || project.category===filter);
  return <div className="app-shell">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="topbar"><div className="page-wrap topbar-inner">
      <a className="brand" href="#top" aria-label="Djessi Jorge, back to top"><span className="brand-mark"><Terminal size={20} strokeWidth={1.8} aria-hidden="true" /></span><span className="brand-name">DJESSI JORGE</span></a>
      <span className="header-status"><span className="status-dot" />VERIFIED BUILD • {credentials.length} CREDENTIALS &amp; 5 EVALUATED SYSTEMS</span>
      <nav className="main-nav" aria-label="Main navigation">{navigation.map(link => <a className={`nav-link ${activeSection===link.id?'nav-active':''}`} href={`#${link.id}`} key={link.id} aria-current={activeSection===link.id?'location':undefined}>{link.label}</a>)}</nav>
      <div className="header-actions"><button className="copy-button" onClick={copySummary}><span aria-hidden="true">{copyState==='copied'?<Check size={15}/>:<Copy size={15}/>}</span><span>{copyState==='copied'?'Copied':'Copy summary'}</span></button><button className="icon-button mobile-menu-button" aria-label={menuOpen?'Close navigation':'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X size={21}/>:<Menu size={21}/>}</button></div>
    </div>
      {menuOpen && <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">{navigation.map(link=><a href={`#${link.id}`} key={link.id} onClick={()=>setMenuOpen(false)}>{link.label}<ArrowUpRight size={15} aria-hidden="true"/></a>)}</nav>}
    </header>

    <div id="top" className="contact-strip"><div className="page-wrap contact-strip-inner"><span className="contact-item"><MapPin size={13} aria-hidden="true"/>{profile.location}</span><div className="contact-social"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)"><Linkedin size={14} aria-hidden="true"/>LinkedIn<ArrowUpRight size={12} aria-hidden="true"/></a><a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)"><Github size={14} aria-hidden="true"/>GitHub<ArrowUpRight size={12} aria-hidden="true"/></a></div></div></div>

    <main id="main" className="page-wrap">
      <section className="hero" aria-labelledby="hero-heading"><div className="hero-copy"><p className="eyebrow"><span className="section-index">PORTFOLIO / OCT 2026</span><span className="eyebrow-separator">·</span>DJESSI JORGE</p><h1 id="hero-heading">Solutions Architect <span className="hero-role"><span className="hero-slash">/</span> Agentic AI Engineer</span></h1><p className="hero-summary">{summary}</p><div className="action-bar"><a className="button button-primary" href="#architecture-projects">Explore Evaluated Systems<ArrowRight size={17} aria-hidden="true"/></a><a className="button button-secondary" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={16} aria-hidden="true"/><span>GitHub <span className="action-detail">(github.com/djessijorge9-ship-it)</span></span><span className="sr-only"> (opens in a new tab)</span></a><a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={16} aria-hidden="true"/><span>LinkedIn <span className="action-detail">(in/djessijorge)</span></span><span className="sr-only"> (opens in a new tab)</span></a></div></div><ArchitecturePreview activeSystemId={activeSystemId} onSystemChange={selectSystem}/></section>
      <section className="benchmark-section" aria-labelledby="benchmarks-heading"><h2 className="benchmark-heading" id="benchmarks-heading">Verification &amp; Evaluation Benchmarks</h2><div className="benchmark-grid">{metrics.map((metric,index)=>{const Icon=metricIcons[index]; return <div className="benchmark-card" key={metric.value}><div className="benchmark-top"><span className="benchmark-value">{metric.value}</span><Icon className="benchmark-icon" size={20} strokeWidth={1.5} aria-hidden="true"/></div><p className="benchmark-label">{metric.label}</p></div>;})}</div></section>

      <section className="content-section" id="architecture-projects" aria-labelledby="projects-heading"><div className="section-header"><div><p className="section-kicker"><span className="section-index">01</span> / ARCHITECTURE &amp; EVALUATION</p><h2 className="section-title" id="projects-heading">Evaluated Systems &amp; Reference Architectures</h2></div><span className="section-aside"><Blocks size={15} aria-hidden="true"/>5 certification projects</span></div><p className="disclaimer"><ShieldCheck size={15} aria-hidden="true"/>{disclaimer}</p><div className="filter-bar" role="group" aria-label="Filter projects by category"><button className={`filter-pill ${filter==='All'?'filter-active':''}`} aria-pressed={filter==='All'} onClick={()=>setFilter('All')}>All (5)</button>{categories.map(category=><button className={`filter-pill ${filter===category?'filter-active':''}`} aria-pressed={filter===category} onClick={()=>setFilter(category)} key={category}>{category}</button>)}</div><p className="results-count" role="status">Showing {filteredProjects.length} of 5 systems</p><div className="project-grid">{filteredProjects.map(project=><ProjectCard project={project} index={projects.indexOf(project)} key={project.id} onInspect={inspectProject}/>)}</div></section>

      <section className="content-section" id="credentials" aria-labelledby="credentials-heading"><div className="section-header"><div><p className="section-kicker"><span className="section-index">02</span> / EDUCATION &amp; CREDENTIALS</p><h2 className="section-title" id="credentials-heading">Credentials &amp; Programmes</h2></div><span className="section-aside"><Award size={16} aria-hidden="true"/>{credentials.length} completed credentials</span></div><div className="education-grid">{education.map(item=><div className="education-card" key={item.provider}><span className="provider-mark"><GraduationCap size={20} aria-hidden="true"/></span><div className="education-copy"><h3>{item.provider}</h3><p>{item.text}</p></div></div>)}</div><ol className="credentials-ledger">{credentials.map((credential,i)=><li className="credential-row" key={credential.title}><span className="credential-number">{String(i+1).padStart(2,'0')}</span><div className="credential-info"><h3 className="credential-title">{credential.title}</h3><p className="credential-issuer">{credential.issuer}</p>{credential.scope && <p className="credential-scope">{credential.scope}</p>}<a className="certificate-link" href={credential.verificationUrl} target="_blank" rel="noopener noreferrer" aria-label={`Verify Certificate for ${credential.title} (opens in a new tab)`}>Verify Certificate ↗</a></div><div className="issued-date"><span>Issued</span><time dateTime={credential.isoDate}>{credential.date}</time></div><CheckCheck className="credential-arrow" size={18} aria-label="Completed"/></li>)}</ol></section>

      <section className="content-section" id="skill-matrix" aria-labelledby="skills-heading"><div className="section-header"><div><p className="section-kicker"><span className="section-index">03</span> / TECHNICAL CAPABILITIES</p><h2 className="section-title" id="skills-heading">Technical Capability Matrix</h2></div><span className="section-aside"><Layers size={15} aria-hidden="true"/>7 capability domains</span></div><div className="skills-legend"><span className="legend-item"><span className="legend-dot"/>Applied Project Capabilities</span><span className="legend-item"><span className="legend-outline"/>Programme Training Exposure</span></div><div className="skill-matrix">{skills.map((skill,i)=><div className="skill-row" key={skill.domain}><h3 className="skill-domain"><span>{String(i+1).padStart(2,'0')}</span>{skill.domain}</h3><div className="skill-content"><div className="skill-badges" aria-label="Applied project capabilities">{skill.applied.map(item=><span className="applied-badge" key={item}>{item}</span>)}</div>{skill.training && <div className="training-group"><span className="training-label">{skill.training.provider}</span><div className="skill-badges">{skill.training.items.map(item=><span className="training-badge" key={item}>{item}</span>)}</div></div>}</div></div>)}</div></section>

      <section className="contact-section" aria-labelledby="contact-heading"><div><p className="section-kicker"><span className="status-dot"/>{profile.location.toUpperCase()}</p><h2 className="contact-heading" id="contact-heading">Djessi Jorge</h2><p>Solutions Architect / Agentic AI Engineer</p></div><div className="contact-links"><a className="button button-primary" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17} aria-hidden="true"/>LinkedIn<ArrowUpRight size={16} aria-hidden="true"/><span className="sr-only"> (opens in a new tab)</span></a><a className="button button-secondary" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={17} aria-hidden="true"/>View GitHub Profile<ArrowUpRight size={16} aria-hidden="true"/><span className="sr-only"> (opens in a new tab)</span></a></div></section>
    </main>
    <footer className="site-footer"><div className="page-wrap footer-inner"><span>DJESSI JORGE <span className="footer-divider">/</span> SYSTEM ARCHITECTURE &amp; EVALUATION</span><div className="footer-links"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub<ArrowUpRight size={12} aria-hidden="true"/><span className="sr-only"> (opens in a new tab)</span></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<ArrowUpRight size={12} aria-hidden="true"/><span className="sr-only"> (opens in a new tab)</span></a><a href="#top">Back to top ↑</a></div></div></footer>
    {selectedProject && <ProjectDrawer project={selectedProject} onClose={()=>setSelectedProject(null)}/>}
    <dialog className="copy-fallback" ref={copyDialog} aria-labelledby="copy-heading" onClose={()=>setCopyState('idle')}><div className="drawer-header"><h2 id="copy-heading">Executive summary</h2><button className="icon-button" aria-label="Close executive summary" onClick={()=>copyDialog.current?.close()}><X size={20}/></button></div><p>Automatic copying is unavailable. Select and copy the summary below.</p><textarea ref={copyText} readOnly value={executiveSummary} aria-label="Executive summary text"/><button className="button button-secondary" onClick={()=>{copyText.current?.focus();copyText.current?.select();}}>Select summary</button></dialog>
    <div className={`toast ${copyState==='copied'?'toast-visible':''}`} role="status">{copyState==='copied' && <><Check size={16} aria-hidden="true"/>Executive summary copied</>}</div>
  </div>;
}
