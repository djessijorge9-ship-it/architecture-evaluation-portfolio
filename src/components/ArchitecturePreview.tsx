import { useId, useRef } from 'react';
import type { KeyboardEvent } from 'react';
import { ArrowDown, Check, GitBranch } from 'lucide-react';
import { blueprints } from '../blueprints';

type ArchitecturePreviewProps = {
  activeSystemId: string;
  onSystemChange: (id: string) => void;
};

export function ArchitecturePreview({ activeSystemId, onSystemChange }: ArchitecturePreviewProps) {
  const instanceId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeIndex = Math.max(0, blueprints.findIndex(blueprint => blueprint.id === activeSystemId));

  function selectTab(index: number) {
    onSystemChange(blueprints[index].id);
    tabRefs.current[index]?.focus();
  }

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number;
    switch (event.key) {
      case 'ArrowRight':
        nextIndex = (index + 1) % blueprints.length;
        break;
      case 'ArrowLeft':
        nextIndex = (index - 1 + blueprints.length) % blueprints.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = blueprints.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    selectTab(nextIndex);
  }

  return <aside className="blueprint-viewer hero-visual" aria-label="System Architecture Blueprints">
    <div className="blueprint-viewer-heading"><GitBranch size={15} aria-hidden="true"/><span>System Architecture Blueprints</span></div>
    <div className="blueprint-tabs" role="tablist" aria-label="Choose a project system blueprint">
      {blueprints.map((blueprint, index) => <button
        type="button"
        className={`blueprint-tab ${index === activeIndex ? 'blueprint-tab-active' : ''}`}
        id={`${instanceId}-tab-${blueprint.id}`}
        role="tab"
        aria-selected={index === activeIndex}
        aria-controls={`${instanceId}-panel-${blueprint.id}`}
        tabIndex={index === activeIndex ? 0 : -1}
        key={blueprint.id}
        ref={element => { tabRefs.current[index] = element; }}
        onClick={() => onSystemChange(blueprint.id)}
        onKeyDown={event => handleTabKeyDown(event, index)}
      ><span className="blueprint-tab-number">{blueprint.tabLabel.slice(0, 2)}</span>{' '}<span>{blueprint.tabLabel.slice(3)}</span></button>)}
    </div>

    {blueprints.map((blueprint, index) => <section
      className="blueprint-panel"
      id={`${instanceId}-panel-${blueprint.id}`}
      role="tabpanel"
      aria-labelledby={`${instanceId}-tab-${blueprint.id}`}
      tabIndex={0}
      hidden={index !== activeIndex}
      key={blueprint.id}
    >{index === activeIndex && <>
      <header className="blueprint-heading"><h2 className="blueprint-title">{blueprint.title}</h2></header>

      <div className="blueprint-map" aria-label={`${blueprint.title} system flow`}>
        <ol className="blueprint-steps">
          {blueprint.nodes.map((node, nodeIndex) => <li className="blueprint-step" key={node}>
            <div className="blueprint-node"><span className="blueprint-node-number">{String(nodeIndex + 1).padStart(2, '0')}</span><span className="blueprint-node-label">{node}</span></div>
            <div className="blueprint-connector" aria-hidden="true"><ArrowDown size={18}/></div>
          </li>)}
        </ol>
        <ul className={`blueprint-outcomes ${blueprint.outcomes.length > 1 ? 'blueprint-outcomes-branched' : ''}`} aria-label="System outcomes">
          {blueprint.outcomes.map(outcome => <li className="blueprint-outcome" key={outcome}>{outcome}</li>)}
        </ul>
      </div>

      <footer className="blueprint-footer"><div className="blueprint-benchmark"><Check size={14} aria-hidden="true"/><p>{blueprint.benchmark}</p></div><p className="blueprint-stack">{blueprint.stack}</p></footer>
    </>}</section>)}
  </aside>;
}
