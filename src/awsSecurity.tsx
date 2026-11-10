import React from 'react';
import {
  Activity, ArrowLeft, ArrowUpRight, CheckCircle2, ChevronDown,
  KeyRound, LockKeyhole, MapPin, Network, ShieldCheck
} from 'lucide-react';
import { AWS_SECURITY_CASES, AWS_SECURITY_PROGRAMME } from './awsSecurityData';

export const AWS_SECURITY_PROJECT_ID = 'aws-security';

const AREA_META = {
  'aws-iam': {
    label: 'IAM', icon: KeyRound,
    contribution: ['Attached the supplied IAM policy and updated the role trust relationship.', 'Verified the console role switch after Djessi completed operator-user sign-in.'],
    supplied: 'Supplied IAM policies and infrastructure; console changes performed with coding assistance.',
    caption: 'Trust-policy update and console role switch. The validated outcome is console role assumption.',
    future: ['Add a separately scoped service-operation permissions test alongside the role-assumption check.']
  },
  'aws-firewall': {
    label: 'Firewall', icon: Network,
    contribution: ['Queried ICMP, SURICATA-signature and DNS telemetry, and decoded the fictitious course fixture.', 'Applied existing quarantine groups to three lab targets and checked the resulting assignments.'],
    supplied: 'Course-provided network, firewall, DNS and logging controls; AI-assisted investigation and configuration.',
    caption: 'Twelve-hour query observations. The request ended at DNS resolution before TLS; quarantine retained internal connectivity.',
    future: ['Validate DNS and TLS behaviour at their intended stages without weakening active protections.', 'Add a connectivity matrix for permitted and denied paths after quarantine.']
  },
  'aws-encryption': {
    label: 'Encryption', icon: LockKeyhole,
    contribution: ['Checked S3/KMS object settings and exercised the image-access controls.', 'Prepared AI-assisted insertions for the supplied sales-data scaffold; recorded five staged runs and table counts.'],
    supplied: 'Course-provided image tools and SalesAnalytics.py scaffold; external key retrieval was simulated.',
    caption: 'Final 9 November execution and table-population checks, separate from the older attempt. Counts do not establish cryptographic correctness.',
    future: ['Add encrypt/decrypt readback and persistent-key recovery checks.', 'Review scan pagination, idempotent loading and governed key retrieval before operational use.']
  },
  'aws-cloudwatch': {
    label: 'CloudWatch', icon: Activity,
    contribution: ['Configured the CloudWatch agent, authentication metric filter and authentication/NAT alarms.', 'Used deliberate authentication failures and a controlled upload to validate the alarm and notification paths.'],
    supplied: 'Course-provided blog infrastructure; configuration and controlled tests operated with coding assistance.',
    caption: 'Controlled alarm tests with the configured comparison operators and periods. Actual log retention was Never expire.',
    future: ['Define a retention policy with an operational and security rationale.', 'Add boundary-value tests for the strict thresholds and notification-path failure handling.']
  },
  'aws-incident-response': {
    label: 'Incident response', icon: ShieldCheck,
    contribution: ['Checked preservation artefacts and verified Systems Manager access with zero inbound security-group rules.', 'Configured EventBridge with the supplied Lambda and checked the second target’s containment states.'],
    supplied: 'Course-provided incident-response Lambda and infrastructure; AI-assisted configuration and state checks.',
    caption: 'Manual restoration and second-target containment were separate checks in a controlled SSH simulation. The Lambda was supplied by the course.',
    future: ['Measure containment timing and explicitly check existing network sessions.']
  }
};

function followNavigation(event: React.MouseEvent<HTMLAnchorElement>, onNavigate?: () => void) {
  if (!onNavigate || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
  event.preventDefault();
  onNavigate();
}

export function AwsSecurityProjectCard({ onOpen }: { onOpen?: () => void }) {
  return <a id="aws-security-project-card" className="pv-project-tile awss-project-tile cloud" href={`?case=${AWS_SECURITY_PROJECT_ID}`} onClick={event => followNavigation(event, onOpen)} aria-label="View AWS security engineering project">
    <div className="pv-card-meta"><span className="pv-domain cloud">Cloud &amp; security</span></div>
    <div className="pv-tile-art awss-project-art"><div className="awss-project-map" aria-label="Security disciplines">{AWS_SECURITY_CASES.map(area => { const meta = AREA_META[area.id]; const Icon = meta.icon; return <span key={area.id}><Icon aria-hidden="true" /><span>{meta.label}</span></span>; })}</div></div>
    <div className="pv-tile-body"><h3>AWS security engineering</h3><p>IAM troubleshooting, firewall investigation, KMS configuration, security monitoring and incident-response validation.</p><div className="pv-chips"><span>IAM</span><span>Network Firewall</span><span>KMS</span><span>CloudWatch</span></div></div>
    <div className="pv-card-footer"><small>Course-provided infrastructure · AI-assisted</small><ArrowUpRight aria-hidden="true" /></div>
  </a>;
}

export function AwsSecurityProjectPage({ activeAreaId, onAreaChange, onBack }: {
  activeAreaId: string;
  onAreaChange: (id: string) => void;
  onBack: () => void;
}) {
  const study = AWS_SECURITY_CASES.find(item => item.id === activeAreaId) || AWS_SECURITY_CASES[0];
  const index = AWS_SECURITY_CASES.findIndex(item => item.id === study.id);
  const meta = AREA_META[study.id];
  const changeTab = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? AWS_SECURITY_CASES.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + AWS_SECURITY_CASES.length) % AWS_SECURITY_CASES.length;
    const next = AWS_SECURITY_CASES[nextIndex];
    onAreaChange(next.id);
    document.getElementById(`aws-area-tab-${next.id}`)?.focus();
  };
  const contributionDetail = study.attribution.replace(/^Guided, AI-assisted practical work under Djessi Jorge[’']s direction and approvals[.,]?\s*/i, '');
  const implementationDetails = study.implementation;

  return <div className="pv-site awss-page">
    <a className="pv-skip" href="#aws-case-main">Skip to project</a>
    <header className="pv-header awss-page-header"><div className="pv-shell awss-header-inner">
      <a className="pv-brand" href="./#section-cases" onClick={event => followNavigation(event, onBack)} aria-label="Djessi Jorge, back to portfolio"><span><strong>Djessi Jorge</strong><small><MapPin aria-hidden="true" /> London, UK</small></span></a>
      <a className="awss-back-link" href="./#section-cases" onClick={event => followNavigation(event, onBack)}><ArrowLeft aria-hidden="true" /> Back to portfolio</a>
    </div></header>

    <main id="aws-case-main" className="pv-shell awss-case-main">
      <nav className="awss-breadcrumb" aria-label="Breadcrumb"><a href="./#section-cases" onClick={event => followNavigation(event, onBack)}>Portfolio</a><span aria-hidden="true">/</span><span aria-current="page">AWS security engineering</span></nav>
      <section className="awss-case-hero" aria-labelledby="aws-case-title">
        <div className="awss-case-heading"><span className="pv-eyebrow"><ShieldCheck aria-hidden="true" /> Cloud security</span><h1 id="aws-case-title" tabIndex={-1}>AWS security engineering</h1><p className="awss-case-summary">Access controls, network investigation, encryption, monitoring and incident response.</p><p className="awss-project-scope">Guided, AI-assisted practical work under Djessi Jorge’s direction and approvals, using course-provided infrastructure and scaffolds. The lab areas were carried out independently.</p></div>
      </section>

      <div className="awss-credential-strip"><div><strong>{AWS_SECURITY_PROGRAMME.title}</strong><span>Amazon Web Services · Coursera Professional Certificate</span></div><a className="pv-text-link" href={AWS_SECURITY_PROGRAMME.url} target="_blank" rel="noreferrer">Verify credential <ArrowUpRight aria-hidden="true" /></a></div>

      <section className="awss-section" aria-label="AWS security practical work">
        <div className="awss-area-tabs" role="tablist" aria-label="AWS security practical areas">{AWS_SECURITY_CASES.map(area => { const AreaIcon = AREA_META[area.id].icon; return <button className="awss-area-tab" key={area.id} role="tab" id={`aws-area-tab-${area.id}`} aria-selected={study.id === area.id} aria-controls="aws-area-panel" tabIndex={study.id === area.id ? 0 : -1} onClick={() => onAreaChange(area.id)} onKeyDown={changeTab}><AreaIcon aria-hidden="true" /><span>{AREA_META[area.id].label}</span></button>; })}</div>
        <div className="awss-area-panel" id="aws-area-panel" role="tabpanel" aria-labelledby={`aws-area-tab-${study.id}`} tabIndex={0} key={study.id}>
          <div className="awss-area-lead"><h2>{study.title}</h2></div>
          <div className="awss-outcome"><span>Validated outcome</span><strong>{study.resultLabel}</strong><p>{study.criticalCaveat}</p></div>
          <section className="awss-contribution" aria-labelledby="aws-contribution-heading"><h3 id="aws-contribution-heading">Implementation</h3><ul>{meta.contribution.map(text => <li key={text}><CheckCircle2 aria-hidden="true" /><span>{text}</span></li>)}</ul><p className="awss-supplied">{meta.supplied}</p></section>

          <section id="aws-validation" className="awss-section" aria-labelledby="aws-validation-heading">
            <h3 id="aws-validation-heading">Validation</h3>
            <div className="awss-validation-wrap"><table className="awss-validation-table">
              <caption className="pv-sr-only">Expected and observed results for {study.title}</caption>
              <thead><tr><th scope="col">Check</th><th scope="col">Expected result</th><th scope="col">Observed result</th></tr></thead>
              <tbody>{study.validation.map(row => <tr key={row.check}><th scope="row">{row.check}</th><td data-label="Expected result">{row.expected}</td><td data-label="Observed result">{row.observed}</td></tr>)}</tbody>
            </table></div>
          </section>

          {study.visuals?.length > 0 && <section className="awss-section" aria-labelledby="aws-visuals-heading">
            <h3 id="aws-visuals-heading">Validation snapshot</h3>
            <p className="awss-visual-label">Typeset technical summary</p>
            <div className="awss-visual-grid">{study.visuals.map(visual => <figure className="awss-visual" key={visual.src}>
              <a href={visual.src} target="_blank" rel="noreferrer" aria-label={`Open full-size technical summary: ${study.shortTitle}`}><img src={visual.src} alt={visual.alt.replace(/^Reviewed evidence excerpt /i, 'Technical summary ')} loading="lazy" /></a>
              <figcaption className="awss-visual-caption"><p>{meta.caption}</p><a className="pv-text-link" href={visual.src} target="_blank" rel="noreferrer">View full-size <ArrowUpRight aria-hidden="true" /></a></figcaption>
            </figure>)}</div>
          </section>}

          <details className="awss-engineering-notes">
            <summary><span>Engineering notes</span><ChevronDown aria-hidden="true" /></summary>
            <div className="awss-engineering-notes-body">
              <section><h3>Problem and objectives</h3><p>{study.problem}</p><ul>{study.objectives.map(text => <li key={text}>{text}</li>)}</ul></section>
              <section><h3>Contribution and implementation detail</h3><p>{contributionDetail ? contributionDetail[0].toUpperCase() + contributionDetail.slice(1) : ''}</p><ol>{implementationDetails.map(text => <li key={text}>{text}</li>)}</ol></section>
              <section><h3>Challenges and handling</h3>{study.challenges.map(item => <div key={item.issue}><h4>{item.issue}</h4><p>{item.handling}</p></div>)}</section>
              <section><h3>Technical inferences</h3><ul>{study.takeaways.map(item => <li key={item.text}>{item.text}</li>)}</ul></section>
              <section><h3>Future improvements</h3><p>Proposed work, not completed in these labs.</p><ul>{meta.future.map(text => <li key={text}>{text}</li>)}</ul></section>
            </div>
          </details>
        </div>
      </section>

      <footer className="awss-case-footer"><a className="pv-text-link" href="./#section-cases" onClick={event => followNavigation(event, onBack)}><ArrowLeft aria-hidden="true" /> Back to portfolio projects</a></footer>
    </main>
  </div>;
}
