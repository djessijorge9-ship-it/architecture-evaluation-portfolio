import { catalogueCount, programmeCatalog } from './catalogue.ts';

export type Category =
  | 'Agentic AI & Supervision'
  | 'Multimodal & Observability'
  | 'Cloud ML & Generative Models';

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  repoUrl: string | null;
  isRepoCurated: boolean;
  category: Category;
  stack: string[];
  guardrails: string[];
  evaluation: string;
  metric: string;
  metricLabel: string;
  pipeline: string[];
};

// Manual curation requires an architecture README ordered diagram → guardrails/state
// → offline tests → evaluation table, with no unfinished instructional material;
// plus redistribution rights and no secrets/non-public datasets (public MNIST/UCI
// Concrete and the author's own synthetic/evaluation data only). This helper checks
// that review flag and a dedicated URL, not repository contents or licensing.
export function getCuratedRepositoryUrl(project: Pick<Project, 'repoUrl' | 'isRepoCurated'>): string | null {
  if (project.isRepoCurated !== true || !project.repoUrl) return null;

  try {
    const url = new URL(project.repoUrl);
    const repositoryPath = url.pathname.match(/^\/djessijorge9-ship-it\/([A-Za-z0-9_.-]+)\/?$/i);
    if (
      url.protocol !== 'https:' || url.hostname !== 'github.com' || url.port ||
      url.username || url.password || url.search || url.hash ||
      !repositoryPath || /^\.{1,2}$/.test(repositoryPath[1]) ||
      /\.git$/i.test(repositoryPath[1])
    ) return null;

    return `https://github.com/djessijorge9-ship-it/${repositoryPath[1]}`;
  } catch {
    return null;
  }
}

export const profile = {
  name: 'Djessi Jorge',
  location: 'London, UK',
  github: 'https://github.com/djessijorge9-ship-it/',
  linkedin: 'https://www.linkedin.com/in/djessijorge/',
  portfolio: 'https://portfolio.djessi2.chatgpt.site/',
};

export const summary = 'Focused on translating requirements into bounded AI workflows, evidence-grounded answers and evaluated cloud ML solutions. Combines thirteen completed IBM, AWS and Udacity credentials with 31 projects spanning agentic AI, generative models, NLP, computer vision, deep reinforcement learning, cloud ML and streaming data. Explore every project’s execution flow, guardrails and recorded evaluation, with a practical focus on model evaluation, transaction integrity, observability and clear technical documentation.';

export const disclaimer = 'Selected certification projects. Results reflect educational prototypes and recorded project evaluations.';

export const categories: Category[] = [
  'Agentic AI & Supervision',
  'Multimodal & Observability',
  'Cloud ML & Generative Models',
];

export const metrics = [
  { value: '13', label: 'Completed IBM, AWS & Udacity Credentials (Oct 2026)' },
  { value: '66+', label: 'Offline & Live Verification Tests Passed Across Agentic/Multimodal Suites' },
  { value: '0', label: 'Execution Errors in 20-Scenario Deterministic Multi-Agent Ledger Run' },
  { value: '5.73 MPa', label: 'Holdout RMSE (40.82% Lower than Ridge Baseline on AWS ML Capstone)' },
];

export const projects: Project[] = [
  {
    id: 'uda-hub',
    repoUrl: null,
    isRepoCurated: false,
    title: 'UDA-Hub',
    subtitle: 'Autonomous Knowledge Agent',
    category: 'Agentic AI & Supervision',
    stack: ['Python', 'LangGraph', 'Pydantic', 'SQLAlchemy', 'SQLite'],
    guardrails: [
      'Developed a Python/LangGraph supervisor coordinating triage, knowledge retrieval, account operations, resolution, escalation and memory.',
      'Used Pydantic, SQLAlchemy and SQLite for structured decisions and persistent state.',
      'Implemented tenant-scoped retrieval, exact-quotation checks, ownership checks and confirmed, idempotent cancellation.',
    ],
    evaluation: 'Passed 21 offline tests; a final eight-ticket synthetic provider run resolved five cases and escalated three, exercising grounding, memory and guarded actions.',
    metric: '21',
    metricLabel: 'offline tests passed',
    pipeline: ['Triage', 'Tenant-scoped retrieval', 'Exact-quotation & ownership checks', 'Confirmed, idempotent cancellation / escalation', 'Persistent SQLite state'],
  },
  {
    id: 'beavers-choice',
    repoUrl: null,
    isRepoCurated: false,
    title: "Beaver's Choice",
    subtitle: 'Multi-Agent Sales Workflow',
    category: 'Agentic AI & Supervision',
    stack: ['Python', 'smolagents', 'Deterministic JSON Tools', 'SQLite'],
    guardrails: [
      'Built a four-agent Python/smolagents workflow for inventory, quoting and sales in a fictional paper-supply business.',
      'Kept pricing, dates, stock validation and ledger authority in deterministic JSON tools.',
      'Used atomic SQLite transactions, request keys and content hashes to prevent partial commits and duplicate charges.',
    ],
    evaluation: 'Evaluated all 20 supplied scenarios in one model-provider run: four orders fulfilled, 16 declined and zero execution errors, with independent receipt and ledger reconciliation.',
    metric: '0',
    metricLabel: 'execution errors in 20 supplied scenarios',
    pipeline: ['Four-agent workflow', 'Inventory, quoting & sales', 'Deterministic JSON tools', 'Atomic SQLite transactions', 'Receipt & ledger reconciliation'],
  },
  {
    id: 'omnitrainer',
    repoUrl: null,
    isRepoCurated: false,
    title: 'OmniTrainer',
    subtitle: 'Multimodal Customer Service Training',
    category: 'Multimodal & Observability',
    stack: ['FastAPI', 'Gradio', 'Gemini API', 'Pydantic', 'OpenTelemetry', 'Arize Phoenix'],
    guardrails: [
      'Connected FastAPI and Gradio to a Gemini-backed training prototype supporting text, image, audio and video.',
      'Used typed Pydantic requests and modality-specific moderation before customer-model calls.',
      'Instrumented conversations, turns, moderation and feedback with OpenTelemetry/Phoenix.',
    ],
    evaluation: 'Passed 45 offline tests and five live setup tests; an observed browser session retained context across two accepted turns and blocked a hostile third turn. Documented imperfect text and video evaluation results.',
    metric: '45',
    metricLabel: 'offline tests passed',
    pipeline: ['Text, image, audio & video', 'Typed Pydantic requests', 'Modality-specific moderation', 'Gemini customer-model calls', 'OpenTelemetry / Phoenix'],
  },
  {
    id: 'synthetic-handwriting',
    repoUrl: null,
    isRepoCurated: false,
    title: 'Synthetic Handwriting',
    subtitle: 'Conditional GAN and Diffusion',
    category: 'Cloud ML & Generative Models',
    stack: ['PyTorch', 'Conditional GAN', 'Diffusion', 'CNN', 'MNIST'],
    guardrails: [
      'Adapted Udacity starter architectures in PyTorch and trained conditional GAN and diffusion generators on 60,000 MNIST images.',
      'Added reproducible checkpointing, cosine noise scheduling and exponential moving averages.',
      'Compared unfiltered samples, FID and synthetic-data utility.',
    ],
    evaluation: 'A CNN trained only on 5,000 diffusion-generated digits achieved 95.98% accuracy on 10,000 held-out real digits, versus 81.79% using GAN-generated data in the retained single-seed experiment.',
    metric: '95.98%',
    metricLabel: 'CNN accuracy on 10,000 held-out real digits',
    pipeline: ['60,000 MNIST images', 'Conditional GAN & diffusion', 'Unfiltered samples & FID', 'CNN synthetic-data utility', '10,000 held-out real digits'],
  },
  {
    id: 'concrete-strength',
    repoUrl: null,
    isRepoCurated: false,
    title: 'Concrete Strength Prediction',
    subtitle: 'AWS ML Capstone',
    category: 'Cloud ML & Generative Models',
    stack: ['AWS SageMaker', 'XGBoost', 'Ridge Baseline', 'Python'],
    guardrails: [
      'Compared mean and Ridge baselines with XGBoost using five recipe-grouped folds and a sealed holdout.',
      'Selected XGBoost before holdout evaluation.',
      'Quantified uncertainty with a paired recipe-group bootstrap.',
      'Separately demonstrated the frozen configuration through an actual SageMaker training job and endpoint request; removed the endpoint after evidence collection.',
    ],
    evaluation: 'Achieved 5.73 MPa RMSE, 40.82% lower than Ridge, across 180 observations from 86 unseen exact recipes.',
    metric: '5.73 MPa',
    metricLabel: 'holdout RMSE',
    pipeline: ['Mean & Ridge baselines / XGBoost', 'Five recipe-grouped folds', 'Sealed holdout evaluation', 'Paired recipe-group bootstrap', 'SageMaker training & endpoint demonstration'],
  },
];

export const credentials: { title: string; issuer: string; date: string; isoDate: string; verificationUrl: string; scope?: string }[] = [
  {
    title: 'IBM Systems and Solutions Architect Professional Certificate',
    issuer: 'IBM & SkillUp via Coursera',
    date: '11 October 2026',
    isoDate: '2026-10-11',
    scope: '11 Courses • Systems Architecture, Enterprise Data Architecture, Cloud Native, Microservices, Docker/Kubernetes, Cybersecurity & GenAI Architecture',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/specialization/QCTS5SIEC9UJ',
  },
  {
    title: 'IBM RAG and Agentic AI Professional Certificate',
    issuer: 'IBM via Coursera',
    date: '16 October 2026',
    isoDate: '2026-10-16',
    scope: '10 Courses • RAG, Vector Databases, Multimodal GenAI, LangChain, LangGraph, CrewAI, AutoGen, BeeAI & MCP',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/specialization/EV46HYDJREGC',
  },
  {
    title: 'AWS Generative AI Developer Advanced Professional Certificate',
    issuer: 'Amazon Web Services via Coursera',
    date: '16 October 2026',
    isoDate: '2026-10-16',
    scope: '22 Courses • Amazon Bedrock, Knowledge Bases, Lambda, Step Functions, Bedrock Guardrails, Security, Cost Optimization & Evaluation',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/specialization/2HU8OE27XZOW',
  },
  {
    title: 'AWS Machine Learning Engineer Nanodegree',
    issuer: 'Udacity',
    date: '18 October 2026',
    isoDate: '2026-10-18',
    verificationUrl: 'https://www.udacity.com/certificate/e/41150320-caa0-11f1-a7b7-677d26a7417a',
  },
  {
    title: 'Agentic AI Engineer with LangChain and LangGraph Nanodegree',
    issuer: 'Udacity',
    date: '21 October 2026',
    isoDate: '2026-10-21',
    verificationUrl: 'https://www.udacity.com/certificate/e/7f3f43c0-cd31-11f1-85d2-5797698f73c3',
  },
  {
    title: 'Deep Learning Nanodegree',
    issuer: 'Udacity',
    date: '21 October 2026',
    isoDate: '2026-10-21',
    verificationUrl: 'https://www.udacity.com/certificate/e/38c7402a-cd3e-11f1-a421-27adc65a9265',
  },
  {
    title: 'Generative AI Nanodegree',
    issuer: 'Udacity',
    date: '21 October 2026',
    isoDate: '2026-10-21',
    verificationUrl: 'https://www.udacity.com/certificate/e/823fea76-cd71-11f1-a3e2-1f751a2fc192',
  },
  {
    title: 'Agentic AI Nanodegree',
    issuer: 'Udacity',
    date: '21 October 2026',
    isoDate: '2026-10-21',
    verificationUrl: 'https://www.udacity.com/certificate/e/0ca6ac48-cd2e-11f1-81c4-0340813a7e5f',
  },
  {
    title: 'Computer Vision Nanodegree',
    issuer: 'Udacity',
    date: '23 October 2026',
    isoDate: '2026-10-23',
    verificationUrl: 'https://www.udacity.com/certificate/e/9c2fe1da-cdb1-11f1-afaa-73d387b1c8b9',
  },
  {
    title: 'Deep Reinforcement Learning Nanodegree',
    issuer: 'Udacity',
    date: '23 October 2026',
    isoDate: '2026-10-23',
    verificationUrl: 'https://www.udacity.com/certificate/e/2a76d76c-ce2c-11f1-9a30-cb3177fb5d4d',
  },
  {
    title: 'Natural Language Processing Nanodegree',
    issuer: 'Udacity',
    date: '25 October 2026',
    isoDate: '2026-10-25',
    verificationUrl: 'https://www.udacity.com/certificate/e/c1c1a7aa-cdaf-11f1-b6f9-8bb02a043926',
  },
  {
    title: 'Microservices at Scale using AWS and Kubernetes',
    issuer: 'Udacity',
    date: '25 October 2026',
    isoDate: '2026-10-25',
    scope: 'Udacity Course Certificate',
    verificationUrl: 'https://www.udacity.com/certificate/e/5d8dfadc-d042-11f1-93ef-5f6905dcf04d',
  },
  {
    title: 'Data Streaming Nanodegree',
    issuer: 'Udacity',
    date: '25 October 2026',
    isoDate: '2026-10-25',
    verificationUrl: 'https://www.udacity.com/certificate/e/ce6e6422-d041-11f1-bbc9-23cf1ca0d113',
  },
];

export const education = [
  {
    provider: 'Udacity',
    text: 'Nanodegree programmes in agentic AI engineering, generative AI, deep learning, deep reinforcement learning, computer vision, natural language processing, data streaming and AWS machine learning engineering; plus a course certificate in microservices at scale using AWS and Kubernetes. Completed October 2026.',
  },
  {
    provider: 'IBM, SkillUp and Amazon Web Services via Coursera',
    text: 'Professional certificate study in systems and solutions architecture, RAG, agentic AI and advanced AWS generative AI development; completed October 2026.',
  },
];

export const skills: {
  domain: string;
  applied: string[];
  training?: { provider: 'IBM Training' | 'AWS Training'; items: string[] };
}[] = [
  {
    domain: 'Solution Design',
    applied: ['requirements analysis', 'model selection', 'workflow decomposition', 'API integration', 'data and action boundaries'],
  },
  {
    domain: 'Agentic AI',
    applied: ['LangGraph', 'smolagents', 'tool calling', 'structured outputs', 'persistent memory', 'human escalation'],
    training: { provider: 'IBM Training', items: ['LangChain', 'CrewAI', 'AutoGen', 'BeeAI', 'MCP'] },
  },
  {
    domain: 'Retrieval',
    applied: ['tenant-scoped lexical retrieval', 'evidence checks'],
    training: { provider: 'IBM Training', items: ['RAG', 'embeddings', 'vector databases', 'advanced retrievers'] },
  },
  {
    domain: 'AWS',
    applied: ['SageMaker training and endpoint demonstration'],
    training: { provider: 'AWS Training', items: ['Amazon Bedrock', 'Lambda', 'Step Functions', 'Bedrock Guardrails', 'security', 'monitoring', 'cost optimisation'] },
  },
  {
    domain: 'ML & Generative Models',
    applied: ['Python', 'PyTorch', 'XGBoost', 'Ridge', 'grouped validation', 'holdout evaluation', 'GANs', 'diffusion', 'synthetic-data evaluation'],
  },
  {
    domain: 'Application Engineering',
    applied: ['FastAPI', 'Gradio', 'Pydantic', 'SQLAlchemy', 'SQLite', 'JSON tool contracts', 'atomic transactions', 'idempotency'],
  },
  {
    domain: 'Verification & Observability',
    applied: ['offline tests', 'synthetic-scenario evaluation', 'baseline comparisons', 'OpenTelemetry', 'Phoenix', 'reproducible execution evidence'],
  },
];

export const executiveSummary = [
  `${profile.name} — Solutions Architect / Agentic AI Engineer`,
  summary,
  `${profile.location}\nPortfolio: ${profile.portfolio}\nLinkedIn: ${profile.linkedin}\nGitHub: ${profile.github}`,
  `Verified Credentials (${credentials.length} completed in October 2026)`,
  ...credentials.map((credential) => `${credential.title} — ${credential.issuer}${credential.scope ? `\n${credential.scope}` : ''}\nCompleted: ${credential.date}\nVerify Certificate: ${credential.verificationUrl}`),
  disclaimer,
  ...projects.map((project) => `${project.title} — ${project.subtitle} (October 2026)\n${project.evaluation}`),
  `Complete Udacity Project Catalogue: ${catalogueCount} distinct projects across nine completed Nanodegrees and one course certificate. Five featured systems are a subset. Proposals and final implementations count once; lesson exercises and archive revisions are excluded.`,
  ...programmeCatalog.flatMap(programme => [
    `${programme.title} — ${programme.projects.length} projects\nVerify completion: ${programme.credentialUrl}`,
    ...programme.projects.map(project => `${project.title}\n${project.evaluation}\nLimits: ${project.limitation}`),
  ]),
  projects[1].guardrails[0],
  projects[3].guardrails[0],
  projects[4].guardrails[3],
].join('\n\n');

