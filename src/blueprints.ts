export type Blueprint = {
  id: string;
  tabLabel: string;
  title: string;
  stack: string;
  nodes: [string, string, string];
  outcomes: string[];
  benchmark: string;
};

export const blueprints: Blueprint[] = [
  {
    id: 'uda-hub',
    tabLabel: '01 UDA-Hub',
    title: 'UDA-Hub',
    stack: 'Python / LangGraph / SQLite',
    nodes: [
      'Triage & Supervision',
      'Tenant-Scoped Lexical Retrieval',
      'Exact-Quotation & Ownership Checks',
    ],
    outcomes: ['Confirmed Idempotent State (SQLite)', 'Guarded Human Escalation'],
    benchmark: '21 offline tests passed • 5/8 synthetic cases resolved, 3/8 escalated',
  },
  {
    id: 'beavers-choice',
    tabLabel: "02 Beaver's Choice",
    title: "Beaver's Choice",
    stack: 'Python / smolagents / SQLite',
    nodes: [
      '4-Agent Sales & Quoting Router',
      'Deterministic JSON Tool Authority (Pricing/Dates/Stock)',
      'Request Key & Content-Hash Deduplication',
    ],
    outcomes: ['Atomic SQLite Transaction & Ledger Reconciliation'],
    benchmark: '20/20 scenarios evaluated • 4 fulfilled, 16 declined • 0 execution errors',
  },
  {
    id: 'omnitrainer',
    tabLabel: '03 OmniTrainer',
    title: 'OmniTrainer',
    stack: 'FastAPI / Gradio / Gemini / OpenTelemetry',
    nodes: [
      'Typed Pydantic Multimodal Ingest (Text/Image/Audio/Video)',
      'Pre-Call Modality-Specific Moderation Gate',
      'Gemini Customer Simulation Turn',
    ],
    outcomes: ['OpenTelemetry & Arize Phoenix Trace Instrumentation'],
    benchmark: '45 offline + 5 live setup tests passed • Hostile 3rd turn blocked',
  },
  {
    id: 'synthetic-handwriting',
    tabLabel: '04 Diffusion/GAN',
    title: 'Synthetic Handwriting',
    stack: 'PyTorch / Conditional GAN & Diffusion',
    nodes: [
      '60,000 MNIST Training Corpus',
      'Cosine Noise Schedule + EMA + Reproducible Checkpointing',
      '5,000 Synthetic Digit Generation & FID Comparison',
    ],
    outcomes: ['Downstream CNN Utility Evaluation on 10,000 Real Digits'],
    benchmark: '95.98% CNN accuracy (Diffusion) vs 81.79% (GAN) on 10k held-out real digits',
  },
  {
    id: 'concrete-strength',
    tabLabel: '05 AWS XGBoost',
    title: 'Concrete Strength',
    stack: 'AWS SageMaker / XGBoost / Ridge',
    nodes: [
      '5 Recipe-Grouped Folds (Mean & Ridge Baselines vs XGBoost)',
      'Sealed Holdout Evaluation & Paired Recipe-Group Bootstrap',
      'Frozen Config SageMaker Training Job & Live Endpoint Request',
    ],
    outcomes: ['Evidence Collected & Endpoint Teardown'],
    benchmark: '5.73 MPa RMSE (40.82% lower than Ridge) across 180 observations / 86 unseen recipes',
  },
];
