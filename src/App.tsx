import React, { useState, useMemo, useEffect } from 'react';
import {
  ChevronDown,
  ChevronUp,
  ArrowUp,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  Search,
  ShieldCheck,
  ArrowRight,
  FileCode2,
  Sparkles,
  MapPin,
  Linkedin,
  Github,
  X,
  Briefcase,
  Award,
  Lightbulb
} from 'lucide-react';

// ============================================================================
// DATA: CORE ARCHITECTURE & ENGINEERING TRACKS
// ============================================================================
const ARCHITECTURE_TRACKS = [
  {
    id: 'track-sa',
    trackTitle: 'Solutions & Cloud Infrastructure Architecture',
    badge: 'Cloud Modernisation, Multi-Region Networking & FinOps',
    accent: 'indigo',
    businessValue:
      'Designs resilient cloud infrastructure, cross-region networks and event-driven AI workloads, with least-privilege IAM, FinOps controls and measures to prevent downtime.',
    matchedSkills: [
      'AWS Well-Architected',
      'AWS CloudFormation & VPC Peering',
      'Amazon ECS & FastAPI',
      'Amazon Bedrock Serverless',
      'Cost Optimisation (FinOps)',
      'Architecture Decision Records'
    ],
    relevantProjects: 'CS-01 (LLM Cost Router), CS-05 (Cross-Region VPC), CS-06 (Fraud ECS) & CS-07 (Serverless Bedrock)'
  },
  {
    id: 'track-ai',
    trackTitle: 'Agentic AI & Production LLMOps Engineering',
    badge: 'Multi-Agent Systems, Claude SDK & Automated CI/CD',
    accent: 'emerald',
    businessValue:
      'Builds stateful multi-agent workflows, automated code review agents and 5-job GitHub Actions MLOps pipelines, using drift checks and escalation guardrails to handle enterprise workflows safely.',
    matchedSkills: [
      'LangGraph & LangChain',
      'Claude Agent SDK & MCP',
      'Python, TypeScript & FastAPI',
      'Semantic Vector Caching',
      'Deepchecks & Drift Gates',
      'Docker Microservices'
    ],
    relevantProjects: 'CS-02 (FinBERT CI/CD), CS-03 (UDA-Hub Support Agent) & CS-04 (Claude Code Review Agent)'
  },
  {
    id: 'track-data',
    trackTitle: 'Data Platforms, Streaming, Scala & RevOps CRM',
    badge: 'Lakehouses, Kafka/Spark, Scala FP & CRM Integration',
    accent: 'amber',
    businessValue:
      'Builds and validates Medallion lakehouses, functional Scala pipelines, computer vision workflows and HubSpot CRM synchronisation bridges for high-volume event streams and batch datasets, with zero-drift replay verification.',
    matchedSkills: [
      'Apache Kafka, Faust & KSQL',
      'AWS Glue, Iceberg & Athena',
      'Amazon SageMaker & Step Functions',
      'Scala Functional Programming',
      'PyTorch CNN & OpenCV',
      'HubSpot CRM API & Clay Sync'
    ],
    relevantProjects: 'CS-08 (Exastore Lakehouse), CS-09 (Kafka/Spark), CS-10 (Scala FP), CS-11 (Vision) & CS-12 (HubSpot Sync)'
  }
];

// ============================================================================
// DATA: 5 CORE ARCHITECTURAL CAPABILITIES
// ============================================================================
const CORE_CAPABILITIES = [
  {
    id: 'cap-1',
    accent: 'indigo',
    title: 'Multi-Agent AI Systems, Claude SDK & Deterministic LLMOps',
    detail:
      'Stateful agent routing with LangGraph, TypeScript Claude Agent SDK specialists, Model Context Protocol (MCP), semantic vector caching, and tiered LLM cost optimisation.'
  },
  {
    id: 'cap-2',
    accent: 'emerald',
    title: 'Enterprise Data Lakehouses, Event Streaming & Functional Scala',
    detail:
      'Bronze-Silver-Gold Medallion lakehouses on AWS Glue, Apache Iceberg, and Amazon Athena, real-time Kafka/Faust/KSQL and Spark Structured Streaming, and 100%-scored EPFL Scala functional pipelines.'
  },
  {
    id: 'cap-3',
    accent: 'indigo',
    title: 'Cloud Infrastructure, Cross-Region Networking & Container Migration',
    detail:
      'Two-region AWS VPC peering and routing validation, version-pinned AWS Glue and Amazon ECS FastAPI microservice migrations, and CloudFormation event-driven Amazon Bedrock workloads.'
  },
  {
    id: 'cap-4',
    accent: 'amber',
    title: 'Idempotent RevOps CRM Engineering & Cloud FinOps Governance',
    detail:
      'Deterministic Signal-to-CRM synchronisation bridges (Clay to HubSpot) with replay idempotency and protected-field survivorship, paired with explicit latency-versus-cost architectural trade-offs.'
  },
  {
    id: 'cap-5',
    accent: 'emerald',
    title: 'End-to-End MLOps Pipelines & Computer Vision',
    detail:
      '5-job GitHub Actions CI/CD workflows with Deepchecks drift gating, serverless AWS Step Functions and SageMaker Model Monitor orchestration, and custom PyTorch CNN keypoint regression.'
  }
];

// ============================================================================
// DATA: 14 SYSTEM CASE STUDIES (CS-01 TO CS-14 | CLEAN EXECUTIVE FORMAT)
// ============================================================================
const CASE_STUDIES = [
  {
    id: 'cs-01',
    code: 'CS-01',
    category: 'ai',
    accent: 'indigo',
    domainBadge: 'AI OPS & LLM COST GOVERNANCE',
    title: 'Intelligent LLM Complexity Router & Semantic Caching Service',
    subtitle:
      'Two-tier query complexity router (gpt-4o-mini vs. gpt-4o) with Chroma vector semantic caching, 231 passing unit tests, and a 74-row cost evaluation ledger.',
    stack: ['Python', 'FastAPI', 'Chroma Semantic Cache', '2-Tier LLM Router', 'RAGAS Evaluation', 'Pytest (231 Tests)'],
    headlineMetric: '65.0% Modelled Cost Saving',
    headlineMetricLabel: '$0.1009 Routed vs. $0.2882 Baseline',
    certName: 'AI Ops Engineer Nanodegree',
    certUrl: 'https://www.udacity.com/certificate/e/0d76b32a-d670-11f1-a0db-431d20b60fd0',
    narrative: {
      context:
        'Routing every incoming enterprise customer FAQ query directly to a frontier large language model creates unnecessary token expenditure for routine questions that can be answered by a smaller model or served from a semantic cache.',
      objective:
        'Architect a FastAPI routing gateway that classifies prompt complexity across a 2-tier model policy (gpt-4o-mini vs. gpt-4o), serves recurring intents from a Chroma vector cache, and tracks per-request cost differentials.',
      execution: [
        'Engineered a deterministic complexity router (`router.py`) that evaluates query structure and intent before dispatching traffic between lightweight (`gpt-4o-mini`) and frontier (`gpt-4o`) model tiers.',
        'Integrated a Chroma semantic cache (`semantic.py`) in front of the model gateway to return verified answers immediately on recurring FAQ queries.',
        'Validated end-to-end routing, caching, and fallback logic across 231 passing unit tests alongside automated hallucination and RAGAS quality checks.',
        'Generated a 74-row cost evaluation ledger comparing tiered routing and caching against a uniform all-gpt-4o baseline.'
      ],
      outcome:
        'Demonstrated a 65.0% modelled LLM inference cost saving across the 74-row evaluation ledger ($0.1009 routed spend versus $0.2882 all-gpt-4o baseline), backed by 231 passing unit tests.'
    },
    takeaway: {
      headline: '2-Tier Complexity Routing + Semantic Vector Cache vs. Uniform Frontier Model Calls',
      tradeoffLesson:
        'Evaluating query complexity and checking a Chroma semantic cache before model dispatch introduced minimal gateway overhead while delivering a 65.0% modelled token cost reduction ($0.1009 vs. $0.2882) without sacrificing answer quality.'
    },
    diagramConfig: {
      title: 'Intelligent LLM FAQ routing service & semantic caching architecture',
      subtitleLine1:
        'FastAPI routing gateway combining a Chroma semantic vector cache with 2-tier (gpt-4o-mini / gpt-4o) model dispatch.',
      subtitleLine2:
        'Backed by 231 passing unit tests, RAGAS quality checks, and a 74-row cost evaluation ledger (65.0% cost saving).',
      orchestratorLabel: 'FastAPI 2-Tier Router & Cost Governance Orchestrator',
      entryNode: { label: 'FastAPI Gateway', sub: '(FAQ Request)', color: '#7C3AED', icon: 'api' },
      topServices: [
        { label: 'Chroma Vector Cache', sub: '(Semantic Lookup)', color: '#C026D3', icon: 'cache' },
        { label: 'Complexity Router', sub: '(Mini vs Frontier)', color: '#059669', icon: 'ai' },
        { label: 'Tier 1: gpt-4o-mini', sub: '(Routine FAQs)', color: '#059669', icon: 'ai' },
        { label: 'Hallucination Gate', sub: '(Support Checks)', color: '#059669', icon: 'shield' },
        { label: 'RAGAS Evaluator', sub: '(Quality Metrics)', color: '#059669', icon: 'metrics' }
      ],
      flowSteps: [
        { line1: 'Check Chroma cache', line2: 'for semantic match', line3: 'on incoming FAQ' },
        { line1: 'Evaluate query', line2: 'complexity rule', line3: '& token budget' },
        { line1: 'Route request to', line2: 'gpt-4o-mini or', line3: 'gpt-4o model tier' },
        { line1: 'Run hallucination', line2: '& RAGAS quality', line3: 'verification checks' },
        { line1: 'Record token spend', line2: 'in 74-row cost', line3: 'evaluation ledger' }
      ],
      branchLabel: 'If cache hit',
      returnStep1: { line1: 'Compare vs baseline', line2: '($0.1009 vs $0.2882)' },
      returnStep2: { line1: 'Return FAQ JSON', line2: '& update cache' },
      rightModelNode: { label: 'Tier 2: gpt-4o', sub: '(Complex Synthesis)', color: '#059669', icon: 'ai' },
      bottomStoreNode: { label: 'Cost & Eval Ledger', sub: '(231 Passing Tests)', color: '#7C3AED', icon: 'search' }
    },
    evidence: {
      credential: 'Udacity AI Ops Engineer Nanodegree (Issued Nov 2, 2026)',
      sha256: '579353dc5062c9ae0ddaff5a99cb79d037f03dde569f4b6d9e1b59cda2e1a2c8',
      deliverables: [
        'Two-tier LLM query complexity router dispatching between gpt-4o-mini and gpt-4o',
        'Chroma vector semantic cache short-circuiting repeated enterprise FAQ requests',
        'Automated RAGAS quality and hallucination verification checks across benchmark prompts',
        '74-row cost evaluation ledger proving $0.1009 routed spend vs. $0.2882 all-gpt-4o baseline'
      ],
      filesIncluded: [
        'src/llm_faq_service/router/router.py',
        'src/llm_faq_service/cache/semantic.py',
        'tests/unit/test_router_and_cache.py',
        'reports/cost_evaluation_ledger_74rows.csv'
      ],
      scopeSummary:
        'Verified across 231 passing unit tests, Chroma vector semantic caching module, 2-tier complexity router, and 74-row cost evaluation ledger demonstrating a 65.0% modelled cost reduction.'
    }
  },
  {
    id: 'cs-02',
    code: 'CS-02',
    category: 'ai',
    accent: 'emerald',
    domainBadge: 'AUTOMATED CI/CD MLOPS & DRIFT GATING',
    title: 'End-to-End CI/CD MLOps Pipeline for Financial Sentiment Analysis (FinBERT)',
    subtitle:
      'Deployed pretrained FinBERT behind FastAPI with a 5-job GitHub Actions workflow, 7 passing pytest checks, and automated Deepchecks drift gates.',
    stack: ['FinBERT', 'GitHub Actions (5-Job CI/CD)', 'Deepchecks Drift', 'FastAPI', 'Pytest Suite', 'Docker & AWS ECS'],
    headlineMetric: '5 / 5 CI Jobs Passed',
    headlineMetricLabel: 'Deepchecks Drift Gated',
    certName: 'AI Ops Engineer Nanodegree',
    certUrl: 'https://www.udacity.com/certificate/e/0d76b32a-d670-11f1-a0db-431d20b60fd0',
    narrative: {
      context:
        'Deploying financial NLP inference services without automated continuous integration and statistical drift checks risks promoting broken containers or serving degraded sentiment predictions when market language shifts.',
      objective:
        'Deploy a pretrained FinBERT sentiment model behind a containerised FastAPI service governed by a 5-job GitHub Actions CI/CD workflow that enforces automated unit testing and Deepchecks drift thresholds prior to deployment.',
      execution: [
        'Constructed a 5-job GitHub Actions workflow (`lint`, `test`, `deepchecks`, `build`, and `deploy`) to automate code quality, model validation, and container packaging.',
        'Executed a 7-case pytest unit and real-model smoke inference suite against the FastAPI sentiment endpoint, completing in 0.56 seconds.',
        'Configured explicit evaluation thresholds in `params.yaml` and integrated Deepchecks suites to audit property drift and prediction drift on every pipeline run.',
        'Verified that property drift (`0.4042` vs. `0.50` limit), prediction drift (`0.2317` vs. `0.60` limit), and weighted F1 (`0.59` vs. `0.56` threshold) passed before triggering container build and ECS rollout.'
      ],
      outcome:
        'Passed all 5 GitHub Actions CI/CD stages, all 7 pytest unit and smoke inference tests in 0.56 seconds, and all Deepchecks statistical drift gates (0.4042 property drift and 0.2317 prediction drift; 0.59 weighted F1).'
    },
    takeaway: {
      headline: 'Pre-Deployment Deepchecks Drift Gating in GitHub Actions vs. Ungated Container Releases',
      tradeoffLesson:
        'Embedding automated `lint`, `test`, and `deepchecks` drift assertions directly into GitHub Actions before `build` and `deploy` guaranteed that only schema-valid, drift-verified FinBERT containers progressed to registry push and ECS rollout.'
    },
    diagramConfig: {
      title: 'FinBERT 5-job GitHub Actions CI/CD & automated drift gating architecture',
      subtitleLine1:
        '5-job GitHub Actions pipeline (lint, test, deepchecks, build, deploy) deploying FinBERT behind FastAPI.',
      subtitleLine2:
        'Enforces 7 pytest unit/smoke checks (0.56s) and Deepchecks drift bounds (0.4042 property / 0.2317 prediction drift).',
      orchestratorLabel: '5-Job GitHub Actions CI/CD & FastAPI Inference Orchestrator',
      entryNode: { label: 'GitHub Push / API', sub: '(CI/CD Trigger)', color: '#7C3AED', icon: 'git' },
      topServices: [
        { label: 'params.yaml', sub: '(Drift Thresholds)', color: '#C026D3', icon: 'cache' },
        { label: 'Job 1: Lint', sub: '(Code Quality)', color: '#059669', icon: 'ai' },
        { label: 'Job 2: Pytest', sub: '(7 Cases / 0.56s)', color: '#059669', icon: 'ai' },
        { label: 'Job 3: Deepchecks', sub: '(Drift Validation)', color: '#059669', icon: 'shield' },
        { label: 'Job 4 & 5: Build', sub: '& ECS Rollout', color: '#059669', icon: 'cloud' }
      ],
      flowSteps: [
        { line1: 'Load F1 & drift', line2: 'thresholds from', line3: 'params.yaml config' },
        { line1: 'Run Job 1 lint &', line2: 'Job 2 pytest suite', line3: '(7 cases in 0.56s)' },
        { line1: 'Verify Deepchecks', line2: 'property (0.4042) &', line3: 'pred (0.2317) drift' },
        { line1: 'Build Docker image', line2: 'with FinBERT &', line3: 'FastAPI service' },
        { line1: 'Push image & start', line2: 'Amazon ECS service', line3: 'deployment rollout' }
      ],
      branchLabel: 'All gates pass',
      returnStep1: { line1: 'Real-model smoke', line2: 'inference check' },
      returnStep2: { line1: 'Serve sentiment', line2: 'prediction JSON' },
      rightModelNode: { label: 'FastAPI + FinBERT', sub: '(Sentiment Service)', color: '#059669', icon: 'ai' },
      bottomStoreNode: { label: 'CI & Drift Reports', sub: '(5/5 Jobs Passed)', color: '#7C3AED', icon: 'search' }
    },
    evidence: {
      credential: 'Udacity AI Ops Engineer Nanodegree (Issued Nov 2, 2026)',
      sha256: 'b817f0567bc25a8cbc5d6c3395f4f58b36742acaddabdf96529af7bc8a0af6fd',
      deliverables: [
        '5-job GitHub Actions CI/CD workflow (lint, test, deepchecks, build, deploy)',
        'Containerised FastAPI inference service serving pretrained FinBERT sentiment predictions',
        '7 passing pytest unit and smoke inference checks executing in 0.56 seconds',
        'Automated Deepchecks drift gating verifying 0.4042 property drift, 0.2317 prediction drift, and 0.59 weighted F1'
      ],
      filesIncluded: [
        '.github/workflows/ci_cd_pipeline.yml',
        'app/main.py',
        'params.yaml',
        'tests/test_api_and_model.py',
        'reports/deepchecks_drift_summary.json'
      ],
      scopeSummary:
        'Verified 5-job GitHub Actions CI/CD pipeline deploying pretrained FinBERT behind FastAPI with 7 passing pytest cases and automated Deepchecks drift gating.'
    }
  },
  {
    id: 'cs-03',
    code: 'CS-03',
    category: 'ai',
    accent: 'indigo',
    domainBadge: 'AGENTIC AI & RAG ORCHESTRATION',
    title: 'UDA-Hub: Autonomous Customer Support & Knowledge Routing Agent',
    subtitle:
      'Stateful multi-agent support workflow using LangGraph, Python, persistent state, and guarded tool execution over CultPass support scenarios.',
    stack: ['LangGraph', 'Python', 'Persistent Thread State', 'RAG Knowledge Lookup', 'Guarded Support Tools', 'Escalation Gate'],
    headlineMetric: '21 Offline Tests & 10/10 Live Ticket Checks',
    headlineMetricLabel: '8 Multi-Turn Tickets (25 Requests)',
    certName: 'Agentic AI Engineer with LangChain & LangGraph Nanodegree',
    certUrl: 'https://www.udacity.com/certificate/e/7f3f43c0-cd31-11f1-85d2-5797698f73c3',
    narrative: {
      context:
        'Customer support teams face growing ticket backlogs when tier-1 inquiries require cross-referencing policy articles and account records, while unguarded chatbots risk hallucinating on complex edge cases.',
      objective:
        'Design and build the UDA-Hub stateful LangGraph support agent capable of classifying ticket intent, retrieving verified knowledge base articles, executing authorised account tools, and escalating unresolved issues cleanly to human specialists.',
      execution: [
        'Architected a stateful LangGraph supervisor workflow separating intent triage, RAG knowledge retrieval, account database tools, and structured human handoff over CultPass support operations.',
        'Configured persistent thread checkpointing so multi-turn customer conversations retain full context across follow-up interactions.',
        'Validated deterministic routing, tool invocation, and fallback behaviour across 21 offline test cases and 2 database setup notebooks.',
        'Executed an end-to-end live validation across 8 multi-turn customer support tickets (25 provider requests), verifying all 10 enumerated quality and escalation checks.'
      ],
      outcome:
        'Passed 21 out of 21 offline unit tests and 10 out of 10 live ticket validation checks across 8 multi-turn CultPass support scenarios (25 live requests) with structured human escalation.'
    },
    takeaway: {
      headline: 'Stateful LangGraph Thread Memory + Structured Escalation Gate vs. Stateless Single-Turn Prompts',
      tradeoffLesson:
        'Maintaining explicit LangGraph thread state and enforcing deterministic escalation criteria guaranteed that routine policy and account inquiries resolved autonomously while ambiguous edge cases handed off cleanly to human agents.'
    },
    diagramConfig: {
      title: 'UDA-Hub stateful LangGraph customer support & knowledge agent',
      subtitleLine1:
        'Stateful LangGraph workflow combining intent triage, knowledge base RAG retrieval, and guarded account tools.',
      subtitleLine2:
        'Verified across 21 passing offline tests and an 8-ticket (25-request) live validation run passing 10/10 checks.',
      orchestratorLabel: 'LangGraph Stateful Customer Support Orchestrator',
      entryNode: { label: 'Support Ticket', sub: '(Multi-Turn User)', color: '#7C3AED', icon: 'api' },
      topServices: [
        { label: 'State Checkpointer', sub: '(Thread Memory)', color: '#C026D3', icon: 'cache' },
        { label: 'Intent Classifier', sub: '(Ticket Triage)', color: '#059669', icon: 'ai' },
        { label: 'Knowledge Base RAG', sub: '(Policy Articles)', color: '#059669', icon: 'ai' },
        { label: 'Account DB Tools', sub: '(Guarded Lookup)', color: '#059669', icon: 'db' },
        { label: 'Escalation Gate', sub: '(Human Handoff)', color: '#059669', icon: 'shield' }
      ],
      flowSteps: [
        { line1: 'Load persistent', line2: 'LangGraph thread', line3: 'conversation state' },
        { line1: 'Classify customer', line2: 'ticket intent &', line3: 'urgency level' },
        { line1: 'Query knowledge', line2: 'base & execute', line3: 'authorised DB tools' },
        { line1: 'Verify resolution', line2: 'completeness vs', line3: 'escalation rules' },
        { line1: 'Log outcome in', line2: 'validation summary', line3: '(10/10 checks pass)' }
      ],
      branchLabel: 'If resolved',
      returnStep1: { line1: 'Structured human', line2: 'escalation summary' },
      returnStep2: { line1: 'Return verified', line2: 'support resolution' },
      rightModelNode: { label: 'LLM Synthesizer', sub: '(Grounded Answer)', color: '#059669', icon: 'ai' },
      bottomStoreNode: { label: 'Support DB & KB', sub: '(21 Offline / 8 Live)', color: '#7C3AED', icon: 'search' }
    },
    evidence: {
      credential: 'Udacity Agentic AI Engineer Nanodegree (Issued Oct 21, 2026)',
      sha256: 'b349ed54cff77f45996fa850576ad1d916597b316b332821bb1d0e5d18255ae3',
      deliverables: [
        'Stateful LangGraph multi-agent customer support supervisor over CultPass operations',
        'Persistent thread memory and guarded SQLite account and knowledge retrieval tools',
        '21 passing offline unit tests covering routing, tool execution, and escalation paths',
        'Live validation across 8 multi-turn support tickets (25 requests) passing 10/10 quality checks'
      ],
      filesIncluded: [
        'agentic/workflow.py',
        'agentic/tools/support_tools.py',
        '01_db_setup.ipynb',
        '02_ticket_resolution_eval.ipynb',
        'tests/test_uda_hub_agent.py'
      ],
      scopeSummary:
        'Verified across 21 passing offline unit tests, 2 database setup and evaluation notebooks, and an 8-ticket (25-request) live validation run passing 10/10 checks.'
    }
  },
  {
    id: 'cs-04',
    code: 'CS-04',
    category: 'ai',
    accent: 'emerald',
    domainBadge: 'AI ENGINEERING & CODE QUALITY AUTOMATION',
    title: 'Enterprise Automated Code Review & Security Analysis CLI',
    subtitle:
      'Read-only TypeScript CLI orchestrating three Anthropic Claude Agent SDK specialists with head-SHA snapshots, SQL injection risk flagging, and deterministic policy scoring.',
    stack: ['Claude Agent SDK', 'TypeScript CLI', '3 Specialist Agents', 'JSON / MD / HTML Reports', '42 Tool Unit Tests', 'SQL Risk Audit'],
    headlineMetric: '42 / 42 Passing Tool Tests',
    headlineMetricLabel: '3 Claude Specialist Review Agents',
    certName: 'AI Engineering with Claude Nanodegree',
    certUrl: 'https://www.udacity.com/certificate/e/cc24fb94-d484-11f1-9745-7779ca96d13b',
    narrative: {
      context:
        'Manual code reviews take significant senior engineering time and can overlook subtle quality, test coverage, or SQL construction risks, whereas autonomous agents with write privileges risk mutating repository branches unexpectedly.',
      objective:
        'Build a deterministic, read-only TypeScript CLI powered by the Anthropic Claude Agent SDK that coordinates three specialist review agents over local git diffs to generate structured JSON, Markdown, and HTML audit reports.',
      execution: [
        'Engineered a read-only TypeScript CLI orchestrating three specialised Claude SDK agents: Code Quality, Test Coverage Estimation, and Refactoring.',
        'Scoped agent analysis strictly to local git diffs and head-SHA snapshots so reviews execute safely without mutating developer branches.',
        'Implemented automated detection, contextual qualification, and deterministic policy scoring of unsafe SQL query construction and code maintainability issues.',
        'Validated all custom analysis tools across 42 passing unit tests and 3 end-to-end live Claude Agent SDK integration reviews, emitting schema-validated JSON, Markdown, and HTML reports.'
      ],
      outcome:
        'Passed 42 out of 42 tool unit tests and 3 live Claude Agent SDK integration reviews, producing reproducible JSON, Markdown, and HTML code review artefacts with zero repository mutations.'
    },
    takeaway: {
      headline: 'Read-Only Multi-Specialist Claude SDK CLI vs. Mutating Auto-Commit Agents',
      tradeoffLesson:
        'Enforcing a strict read-only contract across three specialised Claude SDK agents (Quality, Coverage, Refactoring) guaranteed safe local and CI execution while delivering structured, developer-ready review reports.'
    },
    diagramConfig: {
      title: 'Enterprise code review agent CLI with Anthropic Claude Agent SDK',
      subtitleLine1:
        'Read-only TypeScript CLI coordinating 3 Claude Agent SDK specialists (Code Quality, Test Coverage, Refactoring).',
      subtitleLine2:
        'Verified across 42 passing tool unit tests and 3 live SDK integration reviews outputting JSON, Markdown, and HTML reports.',
      orchestratorLabel: 'TypeScript CLI & Claude Agent SDK Review Orchestrator',
      entryNode: { label: 'Git Diff Input', sub: '(Head-SHA Snapshot)', color: '#7C3AED', icon: 'git' },
      topServices: [
        { label: 'Read-Only Guard', sub: '(Zero Repo Mutation)', color: '#C026D3', icon: 'lock' },
        { label: 'Agent 1: Quality', sub: '(Defect & SQL Audit)', color: '#059669', icon: 'ai' },
        { label: 'Agent 2: Coverage', sub: '(Gap Estimation)', color: '#059669', icon: 'ai' },
        { label: 'Agent 3: Refactor', sub: '(Clean Code Diffs)', color: '#059669', icon: 'ai' },
        { label: 'Report Emitter', sub: '(JSON / MD / HTML)', color: '#059669', icon: 'metrics' }
      ],
      flowSteps: [
        { line1: 'Capture read-only', line2: 'git diff & head-SHA', line3: 'source snapshot' },
        { line1: 'Run Code Quality', line2: 'specialist (audit', line3: 'SQL & defects)' },
        { line1: 'Run Test Coverage', line2: 'estimation & gap', line3: 'analysis specialist' },
        { line1: 'Run Refactoring', line2: 'specialist & merge', line3: 'adjudicated findings' },
        { line1: 'Generate validated', line2: 'JSON, Markdown &', line3: 'HTML review reports' }
      ],
      branchLabel: '42/42 tool tests',
      returnStep1: { line1: 'Schema-validated', line2: 'adjudication JSON' },
      returnStep2: { line1: 'Export HTML, MD', line2: '& JSON review files' },
      rightModelNode: { label: 'Claude Agent SDK', sub: '(3 Live Reviews)', color: '#059669', icon: 'ai' },
      bottomStoreNode: { label: 'Review Artefacts', sub: '(42 Passing Tests)', color: '#7C3AED', icon: 'search' }
    },
    evidence: {
      credential: 'Udacity AI Engineering with Claude Nanodegree (Issued Oct 31, 2026)',
      sha256: 'd5743f06260b66e0ac6ce9455c1c17b12e9ae143f4056cbcbd0a3c6655326c21',
      deliverables: [
        'Read-only TypeScript CLI coordinating 3 Anthropic Claude Agent SDK specialists',
        'Head-SHA source snapshot isolation ensuring zero repository mutations during analysis',
        'Deterministic policy scoring and SQL injection risk flagging over modified code diffs',
        '42 passing tool unit tests and multi-format report generation (JSON, Markdown, HTML)'
      ],
      filesIncluded: [
        'src/cli/index.ts',
        'src/agents/quality_coverage_refactor.ts',
        'src/tools/diff_and_ast_tools.ts',
        'tests/tools.test.ts',
        'reports/code_review_report.html'
      ],
      scopeSummary:
        'Verified read-only TypeScript CLI with 3 Claude Agent SDK specialists, 42 passing tool unit tests, and 3 live integration reviews outputting JSON, Markdown, and HTML reports.'
    }
  },
  {
    id: 'cs-05',
    code: 'CS-05',
    category: 'cloud',
    accent: 'indigo',
    domainBadge: 'CLOUD ARCHITECTURE & NETWORKING',
    title: 'Cross-Region AWS Network Architecture & Multi-Account Governance Blueprint',
    subtitle:
      'Enterprise AWS organisation design paired with live two-region VPC peering, custom route tables, security groups, and verified cross-region network traffic receipts.',
    stack: ['AWS VPC Peering', 'Cross-Region Routing', 'AWS Organizations Blueprint', 'Security Groups & NACLs', 'VPC Flow Logs', 'FinOps Governance'],
    headlineMetric: '2-Region VPC Peered',
    headlineMetricLabel: 'Verified Cross-Region Traffic',
    certName: 'AWS Cloud Architect Nanodegree',
    certUrl: 'https://www.udacity.com/certificate/e/d2ed9638-cae4-11f1-bbfe-07a631d7ce6a',
    narrative: {
      context:
        'Enterprise cloud estates require segmented network topologies across geographic regions and structured multi-account cost and security governance to prevent lateral movement and budget overruns.',
      objective:
        'Execute a live two-region AWS VPC peering and private routing validation while authoring a comprehensive multi-account AWS Organizations, Service Control Policy (SCP), and FinOps budget blueprint.',
      execution: [
        'Provisioned non-overlapping VPC networks across two AWS regions and established an active cross-region VPC peering connection.',
        'Configured regional route tables, least-privilege security groups, network ACLs, and VPC Flow Logs to verify private cross-region IP connectivity.',
        'Designed an enterprise multi-account AWS Organizations structure separating Security, Shared Services, Sandbox, and Production organisational units (OUs).',
        'Authored Service Control Policies (SCPs), cost-allocation tagging standards, and AWS Budgets alerting blueprints.'
      ],
      outcome:
        'Verified live two-region AWS VPC peering, route propagation, and private cross-region traffic receipts alongside a complete multi-account AWS Organizations and FinOps governance blueprint.'
    },
    takeaway: {
      headline: 'Private Cross-Region VPC Peering + Segmented OU Governance vs. Flat Single-Region Networks',
      tradeoffLesson:
        'Pairing explicit cross-region CIDR route tables and least-privilege security groups with a segmented multi-account OU blueprint isolated workload blast radius while maintaining private cross-region communication.'
    },
    diagramConfig: {
      title: 'Cross-region AWS VPC peering & enterprise governance architecture',
      subtitleLine1:
        'Live two-region AWS VPC peering, route table propagation, and private IP connectivity verification.',
      subtitleLine2:
        'Paired with enterprise multi-account AWS Organizations, SCP guardrails, and FinOps budget governance blueprints.',
      orchestratorLabel: 'Cross-Region AWS VPC Peering & Network Governance Topology',
      entryNode: { label: 'Primary Region VPC', sub: '(Private Subnet)', color: '#7C3AED', icon: 'cloud' },
      topServices: [
        { label: 'Route Tables', sub: '(Cross-Region CIDR)', color: '#C026D3', icon: 'cache' },
        { label: 'VPC Peering Link', sub: '(Active Peering)', color: '#059669', icon: 'api' },
        { label: 'Security Groups', sub: '(Least-Privilege)', color: '#DC2626', icon: 'shield' },
        { label: 'VPC Flow Logs', sub: '(Traffic Telemetry)', color: '#059669', icon: 'metrics' },
        { label: 'Org & FinOps Plan', sub: '(SCPs & Budgets)', color: '#059669', icon: 'lock' }
      ],
      flowSteps: [
        { line1: 'Provision primary', line2: '& secondary region', line3: 'non-overlapping VPCs' },
        { line1: 'Establish active', line2: 'cross-region VPC', line3: 'peering connection' },
        { line1: 'Configure regional', line2: 'route tables &', line3: 'security group rules' },
        { line1: 'Validate private IP', line2: 'connectivity &', line3: 'VPC flow telemetry' },
        { line1: 'Deliver multi-acct', line2: 'Organizations, SCP', line3: '& FinOps blueprint' }
      ],
      branchLabel: 'Peering active',
      returnStep1: { line1: 'Verify route tables', line2: '& flow log receipts' },
      returnStep2: { line1: 'Confirm cross-region', line2: 'private reachability' },
      rightModelNode: { label: 'Secondary VPC', sub: '(Peered Region)', color: '#059669', icon: 'cloud' },
      bottomStoreNode: { label: 'Network & Org Audit', sub: '(2 Regions Verified)', color: '#7C3AED', icon: 'search' }
    },
    evidence: {
      credential: 'Udacity AWS Cloud Architect Nanodegree (Issued Oct 30, 2026)',
      sha256: '13c27505568d35b60882a5150ec40b86bf4f076c705133845b865852f20353fe',
      deliverables: [
        'Live two-region AWS VPC peering topology with non-overlapping CIDR blocks',
        'Custom regional route tables, security groups, and verified cross-region network traffic receipts',
        'Enterprise multi-account AWS Organizations and Service Control Policy (SCP) architecture blueprint',
        'Cloud FinOps cost-allocation tagging and budget governance framework'
      ],
      filesIncluded: [
        'architecture/enterprise_multi_account_blueprint.pdf',
        'network/vpc_peering_route_tables.json',
        'verification/cross_region_connectivity_receipts.log',
        'finops/cost_governance_model.xlsx'
      ],
      scopeSummary:
        'Verified live two-region AWS VPC peering and cross-region routing connectivity paired with enterprise multi-account AWS Organizations and FinOps governance blueprints.'
    }
  },
  {
    id: 'cs-06',
    code: 'CS-06',
    category: 'cloud',
    accent: 'amber',
    domainBadge: 'CLOUD MIGRATION & CONTAINERISED API',
    title: 'Credit Card Fraud Pipeline Migration to AWS Glue & ECS FastAPI',
    subtitle:
      'Cloud migration of a legacy credit card fraud pipeline onto S3, AWS Glue ETL jobs, and a containerised FastAPI scoring service on Amazon ECS.',
    stack: ['AWS Glue ETL', 'FastAPI', 'Amazon ECS', 'Docker Containers', 'Amazon S3 Versioning', 'CloudWatch Logs'],
    headlineMetric: 'Glue + ECS Live',
    headlineMetricLabel: 'Containerised Fraud Pipeline',
    certName: 'AWS Cloud Architect Nanodegree',
    certUrl: 'https://www.udacity.com/certificate/e/d2ed9638-cae4-11f1-bbfe-07a631d7ce6a',
    narrative: {
      context:
        'Legacy monolithic fraud scoring scripts tightly coupled batch data preparation with synchronous inference, making it difficult to audit dataset lineage or scale real-time HTTP scoring independently.',
      objective:
        'Migrate the credit card fraud pipeline to managed AWS infrastructure by decoupling version-pinned S3 data preparation (AWS Glue) from a containerised FastAPI inference microservice deployed on Amazon ECS.',
      execution: [
        'Configured versioned Amazon S3 storage with explicit `VersionId`-pinned dataset lineage across raw and curated zones.',
        'Developed and executed AWS Glue ETL jobs to cleanse, transform, and partition credit card transaction records.',
        'Containerised the FastAPI fraud scoring service with Docker and validated local container packaging against a deterministic 16-row test fixture.',
        'Deployed the container task to Amazon ECS and verified live HTTP inference responses and CloudWatch runtime telemetry.'
      ],
      outcome:
        'Completed end-to-end migration to AWS Glue ETL and Amazon ECS FastAPI container serving, verified via S3 VersionId lineage, 16-row Docker fixture tests, and live HTTP runtime probes.'
    },
    takeaway: {
      headline: 'Decoupled AWS Glue Batch ETL + Amazon ECS FastAPI Containers vs. Monolithic Scripts',
      tradeoffLesson:
        'Pinning S3 dataset `VersionId` metadata for AWS Glue ETL and validating the FastAPI Docker image against a 16-row fixture prior to Amazon ECS deployment ensured reproducible data lineage and reliable container serving.'
    },
    diagramConfig: {
      title: 'Credit card fraud pipeline migration to AWS Glue & Amazon ECS',
      subtitleLine1:
        'Version-pinned Amazon S3 data lineage feeding AWS Glue ETL jobs and a containerised FastAPI service on Amazon ECS.',
      subtitleLine2:
        'Verified via 16-row Docker test fixtures, Amazon ECS task deployment logs, and live HTTP runtime probes.',
      orchestratorLabel: 'AWS Glue ETL & Amazon ECS FastAPI Migration Architecture',
      entryNode: { label: 'S3 Raw Storage', sub: '(VersionId Pinned)', color: '#7C3AED', icon: 'db' },
      topServices: [
        { label: 'S3 Versioning', sub: '(Dataset Lineage)', color: '#C026D3', icon: 'lock' },
        { label: 'AWS Glue ETL', sub: '(Feature Cleansing)', color: '#059669', icon: 'ai' },
        { label: 'Docker Fixture', sub: '(16-Row Validation)', color: '#059669', icon: 'cache' },
        { label: 'Amazon ECR / ECS', sub: '(Container Service)', color: '#059669', icon: 'cloud' },
        { label: 'CloudWatch Logs', sub: '(Runtime Telemetry)', color: '#EA580C', icon: 'metrics' }
      ],
      flowSteps: [
        { line1: 'Ingest raw fraud', line2: 'dataset into S3 with', line3: 'pinned VersionId' },
        { line1: 'Execute AWS Glue', line2: 'ETL job to stage', line3: 'curated features' },
        { line1: 'Build FastAPI Docker', line2: 'image & verify on', line3: '16-row test fixture' },
        { line1: 'Deploy container', line2: 'task onto managed', line3: 'Amazon ECS cluster' },
        { line1: 'Run live HTTP', line2: 'scoring probes &', line3: 'capture ECS logs' }
      ],
      branchLabel: '16-row test pass',
      returnStep1: { line1: 'Verify HTTP 200', line2: 'fraud score JSON' },
      returnStep2: { line1: 'Confirm S3 & ECS', line2: 'runtime lineage' },
      rightModelNode: { label: 'ECS FastAPI Task', sub: '(Live HTTP Endpoint)', color: '#059669', icon: 'api' },
      bottomStoreNode: { label: 'Curated S3 Store', sub: '(Glue ETL Output)', color: '#7C3AED', icon: 'search' }
    },
    evidence: {
      credential: 'Udacity AWS Cloud Architect Nanodegree (Issued Oct 30, 2026)',
      sha256: '5d719209b8d4cb65be5c84ba1738afb83facb933c8c7b58c959b7c50408788f4',
      deliverables: [
        'VersionId-pinned Amazon S3 data storage and AWS Glue ETL transformation pipeline',
        'Containerised FastAPI fraud scoring microservice validated on a 16-row test fixture',
        'Live Amazon ECS container task deployment with verified HTTP runtime scoring probes',
        'Cloud migration architecture decision record and operational runbook'
      ],
      filesIncluded: [
        'glue/credit_card_fraud_etl.py',
        'service/app.py',
        'service/Dockerfile',
        'verification/ecs_runtime_probe_receipt.json'
      ],
      scopeSummary:
        'Verified S3 VersionId-pinned dataset lineage, AWS Glue ETL execution, 16-row Docker fixture validation, and live Amazon ECS FastAPI container deployment.'
    }
  },
  {
    id: 'cs-07',
    code: 'CS-07',
    category: 'cloud',
    accent: 'amber',
    domainBadge: 'SERVERLESS AI & CLOUDFORMATION IAC',
    title: 'Event-Driven AI Document Summarisation with CloudFormation & Amazon Bedrock',
    subtitle:
      'Immutable AWS CloudFormation stack provisioning S3 event notifications, AWS Lambda compute, Amazon Bedrock LLM summarisation, and CloudWatch telemetry.',
    stack: ['Amazon Bedrock', 'AWS CloudFormation', 'AWS Lambda', 'Amazon S3 Events', 'Least-Privilege IAM', 'FinOps Optimisation'],
    headlineMetric: 'Bedrock + IaC Stack',
    headlineMetricLabel: 'Event-Driven AI Pipeline',
    certName: 'AWS Cloud Architect Nanodegree',
    certUrl: 'https://www.udacity.com/certificate/e/d2ed9638-cae4-11f1-bbfe-07a631d7ce6a',
    narrative: {
      context:
        'Running dedicated compute instances for intermittent document summarisation and generative AI workloads creates high idle cloud expenditure and manual provisioning drift.',
      objective:
        'Modernise an AI document processing workload using AWS CloudFormation Infrastructure as Code to deploy an event-driven Amazon S3, AWS Lambda, and Amazon Bedrock pipeline paired with FinOps cost-optimisation blueprints.',
      execution: [
        'Authored modular AWS CloudFormation templates provisioning input/output S3 buckets, event notifications, least-privilege IAM roles, and AWS Lambda functions.',
        'Configured the AWS Lambda handler to trigger automatically on S3 object uploads, invoke Amazon Bedrock LLM summarisation, and write structured outputs.',
        'Verified end-to-end CloudFormation stack deployment, S3 event triggering, and Bedrock invocation telemetry in CloudWatch Logs.',
        'Formulated FinOps architectural optimisation blueprints covering S3 lifecycle tiering, response caching, and batch inference scheduling.'
      ],
      outcome:
        'Delivered a reproducible CloudFormation-provisioned S3, Lambda, and Amazon Bedrock event-driven summarisation pipeline that eliminates idle compute burn between inference events.'
    },
    takeaway: {
      headline: 'CloudFormation Event-Driven S3 + Lambda + Bedrock vs. Always-On Compute Clusters',
      tradeoffLesson:
        'Triggering AWS Lambda and Amazon Bedrock strictly on S3 object upload events via CloudFormation IaC eliminated 100% of idle compute cost between requests while enforcing scoped IAM execution roles.'
    },
    diagramConfig: {
      title: 'Event-driven Amazon Bedrock workload modernisation with CloudFormation',
      subtitleLine1:
        'AWS CloudFormation stack chaining Amazon S3 object events, AWS Lambda orchestration, and Amazon Bedrock inference.',
      subtitleLine2:
        'Paired with FinOps architectural designs for S3 lifecycle tiering, response caching, and batch optimisation.',
      orchestratorLabel: 'CloudFormation Serverless S3 + Lambda + Bedrock Orchestrator',
      entryNode: { label: 'S3 Input Bucket', sub: '(Document Upload)', color: '#7C3AED', icon: 'db' },
      topServices: [
        { label: 'CloudFormation', sub: '(IaC Templates)', color: '#C026D3', icon: 'cloud' },
        { label: 'IAM Execution Role', sub: '(Scoped Policy)', color: '#DC2626', icon: 'lock' },
        { label: 'AWS Lambda', sub: '(Event Orchestrator)', color: '#EA580C', icon: 'api' },
        { label: 'CloudWatch Logs', sub: '(Execution Trace)', color: '#059669', icon: 'metrics' },
        { label: 'FinOps Blueprint', sub: '(Lifecycle & Cache)', color: '#059669', icon: 'cache' }
      ],
      flowSteps: [
        { line1: 'Provision S3, IAM &', line2: 'Lambda stack via', line3: 'CloudFormation IaC' },
        { line1: 'Upload document to', line2: 'S3 & trigger event', line3: 'notification hook' },
        { line1: 'Invoke AWS Lambda', line2: 'with least-privilege', line3: 'Bedrock IAM role' },
        { line1: 'Call Amazon Bedrock', line2: 'summarisation LLM', line3: '& format output' },
        { line1: 'Persist result to S3', line2: 'output bucket &', line3: 'log CloudWatch' }
      ],
      branchLabel: 'Event-driven',
      returnStep1: { line1: 'Apply S3 lifecycle', line2: '& caching FinOps' },
      returnStep2: { line1: 'Store structured', line2: 'Bedrock summary' },
      rightModelNode: { label: 'Amazon Bedrock', sub: '(LLM Summarizer)', color: '#059669', icon: 'ai' },
      bottomStoreNode: { label: 'S3 Output & Logs', sub: '(CloudFormation IaC)', color: '#7C3AED', icon: 'search' }
    },
    evidence: {
      credential: 'Udacity AWS Cloud Architect Nanodegree (Issued Oct 30, 2026)',
      sha256: '45d71a891038d67813ef83f7dac11462bf2be5c8073405678853952eedc2bc77',
      deliverables: [
        'Immutable AWS CloudFormation template provisioning S3 buckets, IAM roles, and AWS Lambda',
        'Event-driven Amazon Bedrock document summarisation handler with CloudWatch telemetry',
        'Verified S3 upload trigger and Bedrock summary output artefacts',
        'FinOps optimisation blueprint covering S3 lifecycle tiering and response caching'
      ],
      filesIncluded: [
        'iac/cloudformation_bedrock_pipeline.yaml',
        'lambda/summarize_handler.py',
        'verification/cloudwatch_bedrock_execution.json',
        'docs/finops_optimization_proposal.md'
      ],
      scopeSummary:
        'Verified live AWS CloudFormation deployment chaining S3 event triggers, AWS Lambda, and Amazon Bedrock summarisation paired with FinOps optimisation blueprints.'
    }
  },
  {
    id: 'cs-08',
    code: 'CS-08',
    category: 'data',
    accent: 'emerald',
    domainBadge: 'DATA ENGINEERING & MEDALLION LAKEHOUSE',
    title: 'Exastore Medallion Data Lakehouse on AWS Glue, Iceberg & Athena',
    subtitle:
      'Bronze, Silver, and Gold lakehouse architecture using S3, AWS Glue jobs, Apache Iceberg tables (with CDC time-travel queries), and Amazon Athena analytical SQL.',
    stack: ['AWS Glue', 'Apache Iceberg', 'Amazon Athena (25 Queries)', 'Amazon S3', 'Bronze-Silver-Gold', 'ACID Time-Travel'],
    headlineMetric: '5 Glue Runs & 25 Athena Queries',
    headlineMetricLabel: 'Bronze, Silver & Gold Iceberg Tables',
    certName: 'Data Engineering with AWS Nanodegree',
    certUrl: 'https://www.udacity.com/certificate/e/7409073a-d07d-11f1-b53e-4b451568887b',
    narrative: {
      context:
        'Raw e-commerce operational exports arrive with malformed timestamps and unjoined entity records, requiring a governed lakehouse architecture that supports ACID transactions, schema enforcement, and historical time-travel.',
      objective:
        'Architect the Exastore Bronze-Silver-Gold Medallion Data Lakehouse on Amazon S3, AWS Glue, Apache Iceberg, and Amazon Athena with automated data cleansing and Change Data Capture (CDC) verification.',
      execution: [
        'Ingested raw e-commerce datasets into Bronze S3 tables covering 2,133 orders, 912 users, 391 products, and 498 operational events.',
        'Developed AWS Glue ETL jobs that filter malformed timestamps while preserving raw Bronze records, joining entities into cleansed Silver Apache Iceberg tables (2,019 validated order-details rows).',
        'Built Gold analytical aggregations (13 monthly and 491 hourly performance summaries) and executed Apache Iceberg snapshot time-travel and CDC merges.',
        'Validated all Medallion layers across 5 AWS Glue job runs and 25 serverless Amazon Athena SQL queries.'
      ],
      outcome:
        'Verified all Bronze (2,133 orders / 912 users), Silver (2,019 cleansed order-details), and Gold (13 monthly / 491 hourly) Apache Iceberg tables across 5 AWS Glue runs and 25 Amazon Athena queries.'
    },
    takeaway: {
      headline: 'Apache Iceberg ACID Lakehouse + Serverless Amazon Athena vs. Unversioned Raw S3 Files',
      tradeoffLesson:
        'Modelling Bronze, Silver, and Gold layers as Apache Iceberg tables registered in AWS Glue Catalog enabled ACID CDC updates and snapshot time-travel via serverless Amazon Athena without running an always-on warehouse cluster.'
    },
    diagramConfig: {
      title: 'Exastore Medallion data lakehouse on AWS Glue, Iceberg & Athena',
      subtitleLine1:
        'Bronze (2,133 orders), Silver (2,019 cleansed order-details), and Gold (13 monthly / 491 hourly) Iceberg lakehouse.',
      subtitleLine2:
        'Verified across 5 AWS Glue ETL job runs, Apache Iceberg CDC time-travel snapshots, and 25 Amazon Athena SQL queries.',
      orchestratorLabel: 'AWS Glue & Apache Iceberg Medallion Lakehouse Orchestrator',
      entryNode: { label: 'S3 Raw Exports', sub: '(Orders/Users/Events)', color: '#7C3AED', icon: 'db' },
      topServices: [
        { label: 'Glue Data Catalog', sub: '(Iceberg Metadata)', color: '#C026D3', icon: 'cache' },
        { label: 'Bronze Zone', sub: '(2,133 Orders / 912 Users)', color: '#059669', icon: 'db' },
        { label: 'Silver Cleansed', sub: '(2,019 Order-Details)', color: '#059669', icon: 'ai' },
        { label: 'Iceberg CDC', sub: '(Time-Travel Snapshots)', color: '#059669', icon: 'shield' },
        { label: 'Gold Marts', sub: '(13 Monthly / 491 Hourly)', color: '#059669', icon: 'metrics' }
      ],
      flowSteps: [
        { line1: 'Ingest raw CSVs into', line2: 'Bronze tables (2,133', line3: 'orders, 912 users)' },
        { line1: 'Filter invalid', line2: 'timestamps into', line3: 'Silver (2,019 rows)' },
        { line1: 'Execute Iceberg', line2: 'CDC merges &', line3: 'snapshot time-travel' },
        { line1: 'Materialise Gold', line2: 'KPI marts (13 mo /', line3: '491 hourly rows)' },
        { line1: 'Verify tables across', line2: '25 Amazon Athena', line3: 'serverless queries' }
      ],
      branchLabel: '5 Glue runs pass',
      returnStep1: { line1: 'Validate row counts', line2: '& schema integrity' },
      returnStep2: { line1: 'Publish Gold BI', line2: 'query results' },
      rightModelNode: { label: 'Amazon Athena', sub: '(25 SQL Queries)', color: '#059669', icon: 'search' },
      bottomStoreNode: { label: 'S3 Iceberg Tables', sub: '(Bronze/Silver/Gold)', color: '#7C3AED', icon: 'db' }
    },
    evidence: {
      credential: 'Udacity Data Engineering with AWS Nanodegree (Issued Oct 30, 2026)',
      sha256: 'eee46fe24e5bbc3e538330519d9545001d0e55a4e1f3d9bc4ce28db4af36beb6',
      deliverables: [
        'Bronze-Silver-Gold Medallion Lakehouse built on Amazon S3, AWS Glue, and Apache Iceberg',
        'Automated timestamp validation filtering malformed rows into 2,019 cleansed Silver order-details records',
        'Apache Iceberg ACID Change Data Capture (CDC) merges and snapshot time-travel queries',
        '5 verified AWS Glue ETL runs and 25 Amazon Athena analytical SQL queries'
      ],
      filesIncluded: [
        'glue_jobs/bronze_to_silver_iceberg.py',
        'glue_jobs/silver_to_gold_aggregations.py',
        'sql/athena_medallion_verification_25queries.sql',
        'reports/glue_and_athena_execution_receipts.json'
      ],
      scopeSummary:
        'Verified Bronze-Silver-Gold Apache Iceberg tables across 5 AWS Glue ETL runs and 25 Amazon Athena analytical SQL queries.'
    }
  },
  {
    id: 'cs-09',
    code: 'CS-09',
    category: 'data',
    accent: 'indigo',
    domainBadge: 'REAL-TIME EVENT STREAMING',
    title: 'Real-Time Public Transit (Kafka/Faust/KSQL) & STEDI Balance (Spark Streaming) Pipelines',
    subtitle:
      'Two event-streaming architectures: CTA public transit turnstile & weather stream processing (Kafka, Faust, KSQL) and STEDI human balance analytics (Spark Structured Streaming).',
    stack: ['Apache Kafka', 'Faust & KSQL', 'Spark Structured Streaming', 'Schema Registry (Avro)', 'Kafka Connect', 'PySpark'],
    headlineMetric: '2 Streaming Systems',
    headlineMetricLabel: 'Kafka, Faust, KSQL & Spark',
    certName: 'Data Streaming Nanodegree (Kafka & Spark)',
    certUrl: 'https://www.udacity.com/certificate/e/ce6e6422-d041-11f1-bbc9-23cf1ca0d113',
    narrative: {
      context:
        'Live transit turnstile feeds and wearable accelerometer sensors generate continuous event streams that require schema-validated broker ingestion and stateful stream-to-stream joins.',
      objective:
        'Architect two production-pattern streaming pipelines: (1) a public transit telemetry platform using Apache Kafka, Schema Registry Avro, Faust, and KSQL, and (2) a human balance sensor pipeline using Spark Structured Streaming.',
      execution: [
        'Engineered Apache Kafka Avro producers and Confluent Schema Registry contracts for real-time CTA train arrival, turnstile, and weather events.',
        'Configured Kafka Connect PostgreSQL JDBC connectors, Faust Python stream processors, and KSQL continuous aggregation tables to power live transit status views.',
        'Developed PySpark Structured Streaming jobs consuming Kafka topics for STEDI customer profiles, accelerometer readings, and step-trainer telemetry.',
        'Executed stateful stream-to-stream joins in Spark to filter and score consented customer sensor events in real time.'
      ],
      outcome:
        'Delivered two complete real-time streaming systems verifying Avro schema enforcement, Kafka Connect ingestion, Faust/KSQL stateful table aggregations, and PySpark Structured Streaming multi-topic joins.'
    },
    takeaway: {
      headline: 'Declarative KSQL/Faust Stream Tables + Expressive PySpark Structured Streaming Joins',
      tradeoffLesson:
        'Pairing KSQL and Faust for low-overhead topic transformations with PySpark Structured Streaming for complex multi-stream DataFrame joins matched each streaming workload to its optimal execution engine.'
    },
    diagramConfig: {
      title: 'Real-time Kafka/Faust/KSQL transit & Spark Structured Streaming architecture',
      subtitleLine1:
        'Pipeline 1: CTA train & turnstile producers, Schema Registry Avro, Kafka Connect, Faust, and KSQL tables.',
      subtitleLine2:
        'Pipeline 2: STEDI wearable sensor risk evaluation joining Kafka streams via PySpark Structured Streaming.',
      orchestratorLabel: 'Apache Kafka, Faust, KSQL & Spark Structured Streaming',
      entryNode: { label: 'Event Producers', sub: '(Transit & Sensors)', color: '#7C3AED', icon: 'api' },
      topServices: [
        { label: 'Schema Registry', sub: '(Avro Contracts)', color: '#C026D3', icon: 'cache' },
        { label: 'Kafka Connect', sub: '(Postgres Sync)', color: '#059669', icon: 'db' },
        { label: 'Faust Processor', sub: '(Station Stream)', color: '#059669', icon: 'ai' },
        { label: 'KSQL Tables', sub: '(Turnstile Counts)', color: '#059669', icon: 'metrics' },
        { label: 'Spark Streaming', sub: '(Sensor Risk Join)', color: '#EA580C', icon: 'cloud' }
      ],
      flowSteps: [
        { line1: 'Publish Avro & JSON', line2: 'events into Apache', line3: 'Kafka broker topics' },
        { line1: 'Ingest relational', line2: 'reference tables via', line3: 'Kafka Connect JDBC' },
        { line1: 'Transform station', line2: 'events in Faust &', line3: 'aggregate in KSQL' },
        { line1: 'Consume sensor &', line2: 'consent streams in', line3: 'PySpark Streaming' },
        { line1: 'Join streaming', line2: 'DataFrames & emit', line3: 'curated topic sinks' }
      ],
      branchLabel: 'Schema valid',
      returnStep1: { line1: 'Update live transit', line2: 'status monitor UI' },
      returnStep2: { line1: 'Write curated Spark', line2: 'streaming output' },
      rightModelNode: { label: 'Streaming Sinks', sub: '(Live UI & Topics)', color: '#059669', icon: 'search' },
      bottomStoreNode: { label: 'Kafka Topic Store', sub: '(Avro & JSON Streams)', color: '#7C3AED', icon: 'db' }
    },
    evidence: {
      credential: 'Udacity Data Streaming Nanodegree (Issued Oct 25, 2026)',
      sha256: '17dee699f7a88e9276fad12482b1fa0ecf8498bb06d08d1aedd0b72ddee374e0',
      deliverables: [
        'CTA public transit Kafka producers, Confluent Schema Registry Avro schemas, and Kafka Connect JDBC ingestion',
        'Faust Python stream processor and KSQL continuous turnstile aggregation tables',
        'STEDI human balance PySpark Structured Streaming pipeline joining customer, accelerometer, and trainer topics',
        'Real-time sink topic verification and streaming UI telemetry'
      ],
      filesIncluded: [
        'producers/models/station.py',
        'consumers/faust_stream.py',
        'consumers/ksql.py',
        'spark/sparkpyeventskafkastreamtoconsole.py',
        'spark/sparkpyrediskafkastreamtoconsole.py'
      ],
      scopeSummary:
        'Verified across two complete streaming systems: CTA Public Transit (Kafka, Schema Registry, Faust, KSQL) and STEDI Balance Analytics (Spark Structured Streaming).'
    }
  },
  {
    id: 'cs-10',
    code: 'CS-10',
    category: 'data',
    accent: 'indigo',
    domainBadge: 'SCALA FUNCTIONAL PROGRAMMING & SPARK',
    title: 'EPFL Functional Programming in Scala, Parallel Collections & Spark Analytics',
    subtitle:
      'Five-course functional programming and Apache Spark specialisation completed with 100% scores across 17 functional Scala implementations and 265 passing unit tests.',
    stack: ['Scala', 'Functional Programming', 'Apache Spark RDD/DataFrame', 'Spatial Interpolation', '265 Passing Tests', 'sbt'],
    headlineMetric: '100% Score (5 / 5 Courses)',
    headlineMetricLabel: '17 Implementations & 265 Passing Tests',
    certName: 'EPFL Functional Programming in Scala Specialization',
    certUrl: 'https://www.coursera.org/account/accomplishments/specialization/IUG5FUNQECAG',
    narrative: {
      context:
        'Computing high-resolution global temperature grids and aggregating multi-year datasets on imperative pipelines often introduces mutable-state concurrency bugs and costly Spark shuffle bottlenecks.',
      objective:
        'Engineer the Earth Observatory spatial climate interpolation engine using pure functional Scala collections alongside distributed Apache Spark RDD, DataFrame, and Dataset pipelines across the 5-course EPFL specialisation.',
      execution: [
        'Implemented pure functional parsing and station temperature alignment in `Extraction.scala` using immutable Scala case classes and collections.',
        'Built inverse-distance weighted spatial interpolation and bilinear grid deviation modules (`Manipulation.scala`, `Visualization2.scala`) to render global temperature anomaly map tiles.',
        'Developed distributed Apache Spark RDD and DataFrame pipelines (`wikipedia`, `stackoverflow`, `timeusage`) using custom partitioning to minimise shuffle overhead.',
        'Verified correctness across 17 functional programming implementations and 265 passing automated unit test cases across all 5 EPFL courses.'
      ],
      outcome:
        'Completed all 5 courses and the Earth Observatory Capstone of the EPFL Functional Programming in Scala Specialization with 100% scores across 20 graded assessments and 265 passing unit tests.'
    },
    takeaway: {
      headline: 'Immutable Functional Scala Collections + Custom Spark Partitioning vs. Mutable State',
      tradeoffLesson:
        'Enforcing pure immutability in the Observatory spatial interpolation engine and custom hash partitioning in Apache Spark eliminated concurrency race conditions and reduced network shuffle overhead.'
    },
    diagramConfig: {
      title: 'EPFL Scala functional climate observatory & Spark analytics architecture',
      subtitleLine1:
        'Purely functional Scala spatial interpolation (Earth Observatory Capstone) and Apache Spark RDD/DataFrame analytics.',
      subtitleLine2:
        'Verified with 100% scores across all 5 EPFL courses, 17 implementations, and 265 passing test suites.',
      orchestratorLabel: 'Scala Functional Pipeline & Apache Spark Distributed Analytics',
      entryNode: { label: 'Climate Archives', sub: '(Station CSVs)', color: '#7C3AED', icon: 'db' },
      topServices: [
        { label: 'Immutable ADTs', sub: '(Pure Case Classes)', color: '#C026D3', icon: 'lock' },
        { label: 'Spatial IDW', sub: '(Interpolation)', color: '#059669', icon: 'ai' },
        { label: 'Bilinear Grid', sub: '(Manipulation.scala)', color: '#059669', icon: 'metrics' },
        { label: 'Tile Renderer', sub: '(Visualization2.scala)', color: '#059669', icon: 'cloud' },
        { label: 'Apache Spark', sub: '(RDD & DataFrames)', color: '#EA580C', icon: 'search' }
      ],
      flowSteps: [
        { line1: 'Parse station &', line2: 'temperature CSVs in', line3: 'Extraction.scala' },
        { line1: 'Compute inverse-', line2: 'distance weighted', line3: 'spatial temperatures' },
        { line1: 'Project bilinear', line2: 'anomaly grids in', line3: 'Manipulation.scala' },
        { line1: 'Render 256x256', line2: 'colour-mapped', line3: 'slippy map PNG tiles' },
        { line1: 'Execute Spark RDD/', line2: 'DataFrame jobs &', line3: '265 unit tests' }
      ],
      branchLabel: '265 tests pass',
      returnStep1: { line1: 'Verify property &', line2: 'bounds assertions' },
      returnStep2: { line1: 'Export anomaly', line2: 'grids & PNG tiles' },
      rightModelNode: { label: 'Spark & Scala', sub: '(100% across 5 Courses)', color: '#059669', icon: 'metrics' },
      bottomStoreNode: { label: 'Scala Codebase', sub: '(17 Implementations)', color: '#7C3AED', icon: 'search' }
    },
    evidence: {
      credential: 'Coursera EPFL Functional Programming in Scala Specialization (Issued Nov 2, 2026)',
      sha256: '2d70d4e5cc3967b4d6b12fdecab88de14803a9a9ccedb1dc0eb2b4357252b25a',
      deliverables: [
        '100% completion across all 5 EPFL Scala courses (Principles, Design, Parallel Programming, Spark Big Data, Capstone)',
        'Earth Observatory spatial climate interpolation and bilinear grid tile rendering engine in pure Scala',
        'Distributed Apache Spark RDD, DataFrame, and Dataset analytical pipelines (Wikipedia, StackOverflow, TimeUsage)',
        '17 functional Scala implementations verified across 265 passing unit test cases'
      ],
      filesIncluded: [
        'observatory/src/main/scala/observatory/Extraction.scala',
        'observatory/src/main/scala/observatory/Manipulation.scala',
        'observatory/src/main/scala/observatory/Visualization2.scala',
        'stackoverflow/src/main/scala/stackoverflow/StackOverflow.scala',
        'timeusage/src/main/scala/timeusage/TimeUsage.scala'
      ],
      scopeSummary:
        'Verified 100% score across all 5 EPFL Scala courses, Earth Observatory Capstone, 17 functional implementations, and 265 passing unit tests.'
    }
  },
  {
    id: 'cs-11',
    code: 'CS-11',
    category: 'data',
    accent: 'amber',
    domainBadge: 'COMPUTER VISION & SERVERLESS MLOPS',
    title: 'PyTorch Facial Keypoint Detection & Scones Unlimited SageMaker MLOps Workflow',
    subtitle:
      'Combines a 4-block PyTorch CNN achieving 2.69 px mean error across 770 held-out test images with an event-driven Amazon SageMaker & AWS Step Functions workflow.',
    stack: ['Amazon SageMaker', 'AWS Step Functions', 'PyTorch CNN', 'OpenCV Haar Cascade', 'AWS Lambda', 'Model Monitor'],
    headlineMetric: '2.69 px Mean Error',
    headlineMetricLabel: 'vs. 7.96 px Baseline (770 Test Images)',
    certName: 'AWS Machine Learning Engineer Nanodegree',
    certUrl: 'https://www.udacity.com/certificate/e/41150320-caa0-11f1-a7b7-677d26a7417a',
    narrative: {
      context:
        'Production computer vision requires both compact deep learning architectures validated on unseen holdout images and serverless cloud orchestration that halts low-confidence predictions automatically.',
      objective:
        'Deliver a custom PyTorch CNN facial keypoint regression pipeline alongside an event-driven AWS Step Functions, AWS Lambda, and Amazon SageMaker MLOps workflow with Model Monitor data capture.',
      execution: [
        'Designed a 4-block PyTorch CNN (`models.py`) operating on OpenCV Haar Cascade normalised 128x128 greyscale face crops to predict 68 facial landmarks (136 coordinates).',
        'Trained the PyTorch network to epoch 35 and evaluated accuracy across 770 held-out test images, reducing mean Euclidean error to 2.69 pixels compared to the 7.96-pixel baseline.',
        'Chained three AWS Lambda functions (`serializeImageData`, `classifyImageData`, `filterLowConfidenceInferences`) inside an AWS Step Functions state machine orchestrating a SageMaker endpoint.',
        'Configured SageMaker Model Monitor S3 payload capture and verified both high-confidence pass executions and low-confidence threshold exceptions.'
      ],
      outcome:
        'Achieved a verified 2.69-pixel mean holdout error across 770 unseen test images (a 66.2% error reduction over the 7.96-pixel baseline) and verified end-to-end AWS Step Functions confidence gating and SageMaker Model Monitor capture.'
    },
    takeaway: {
      headline: 'Compact 4-Block PyTorch CNN + Serverless Step Functions Gate vs. Ungated Heavyweight Models',
      tradeoffLesson:
        'Combining a compact 128x128 PyTorch CNN (66.2% error reduction over baseline) with serverless AWS Step Functions confidence gating prevented low-confidence predictions from propagating downstream while avoiding idle orchestration cluster costs.'
    },
    diagramConfig: {
      title: 'PyTorch facial keypoint CNN & Scones Unlimited SageMaker MLOps workflow',
      subtitleLine1:
        'Vision CNN: 128x128 PyTorch keypoint network (68 landmarks) achieving 2.69 px error vs. 7.96 px on 770 holdout images.',
      subtitleLine2:
        'Serverless MLOps: AWS Step Functions chaining 3 Lambda handlers with SageMaker inference and Model Monitor capture.',
      orchestratorLabel: 'PyTorch Vision CNN & AWS Step Functions SageMaker Orchestrator',
      entryNode: { label: 'Image Input', sub: '(S3 / OpenCV Crop)', color: '#7C3AED', icon: 'api' },
      topServices: [
        { label: 'OpenCV Haar ROI', sub: '(128x128 Greyscale)', color: '#C026D3', icon: 'cache' },
        { label: 'PyTorch 4-Block CNN', sub: '(68 Landmarks / Ep 35)', color: '#059669', icon: 'ai' },
        { label: 'Lambda Step 1 & 2', sub: '(Serialise & Classify)', color: '#EA580C', icon: 'cloud' },
        { label: 'Lambda Step 3 Gate', sub: '(Confidence Filter)', color: '#DC2626', icon: 'shield' },
        { label: 'Model Monitor', sub: '(S3 Payload Capture)', color: '#059669', icon: 'metrics' }
      ],
      flowSteps: [
        { line1: 'Detect face ROI via', line2: 'OpenCV & normalise', line3: '128x128 greyscale' },
        { line1: 'Predict 68 facial', line2: 'keypoints (2.69 px', line3: 'on 770 holdout set)' },
        { line1: 'Trigger AWS Step', line2: 'Functions & serialise', line3: 'image in Lambda 1' },
        { line1: 'Invoke SageMaker', line2: 'endpoint in Lambda 2', line3: '& capture S3 JSONL' },
        { line1: 'Enforce confidence', line2: 'threshold gate in', line3: 'Lambda 3 handler' }
      ],
      branchLabel: 'Confidence pass',
      returnStep1: { line1: 'Verify 2.69 px vs', line2: '7.96 px baseline' },
      returnStep2: { line1: 'Return predictions', line2: 'or halt low-conf' },
      rightModelNode: { label: 'SageMaker & PyTorch', sub: '(Verified Models)', color: '#059669', icon: 'ai' },
      bottomStoreNode: { label: 'Holdout & Capture', sub: '(770 Test Images)', color: '#7C3AED', icon: 'search' }
    },
    evidence: {
      credential: 'Udacity AWS ML Engineer & Computer Vision Nanodegrees (Issued Oct 2026)',
      sha256: 'd15ec128efa36d9dd208b716258cbaea3d0a84a524a1eb1b0e6c1a4b784d8c2c',
      deliverables: [
        '4-block PyTorch CNN predicting 68 facial keypoints with 2.69 px mean error across 770 held-out test images (vs. 7.96 px baseline)',
        'OpenCV Haar Cascade face detection and 128x128 greyscale normalisation pipeline',
        'AWS Step Functions state machine chaining serializeImageData, classifyImageData, and filterLowConfidenceInferences',
        'Amazon SageMaker Model Monitor real-time S3 payload capture and drift visualisation'
      ],
      filesIncluded: [
        'models.py',
        'lambdas/serializeImageData/lambda_function.py',
        'lambdas/classifyImageData/lambda_function.py',
        'lambdas/filterLowConfidenceInferences/lambda_function.py',
        'saved_models/evaluation_summary.json'
      ],
      scopeSummary:
        'Verified 2.69 px vs. 7.96 px holdout error across 770 unseen test images alongside end-to-end AWS Step Functions confidence gating and SageMaker Model Monitor capture.'
    }
  },
  {
    id: 'cs-12',
    code: 'CS-12',
    category: 'data',
    accent: 'emerald',
    domainBadge: 'REVOPS ARCHITECTURE & CRM DATA INTEGRATION',
    title: 'Idempotent Signal-to-CRM Data Synchronisation & HubSpot Replay Bridge',
    subtitle:
      'Account intelligence ingestion and idempotent CRM synchronisation pipeline connecting a 5-company, 8-column Clay data contract to a live HubSpot CRM environment.',
    stack: ['HubSpot CRM API', 'Clay Data Contract', 'Python Sync Bridge', 'Idempotent Replay', 'Field Survivorship', '48 Pre-Flight Checks'],
    headlineMetric: '0 Drift Across 3x Replays',
    headlineMetricLabel: '5 Live Creates & 15 Idempotent Skips',
    certName: 'HubSpot Data Integrations Certified',
    certUrl: 'https://app-eu1.hubspot.com/academy/achievements/4p7h00wk/en/1/djessi-jorge/hubspot-data-integrations-certified',
    narrative: {
      context:
        'Go-to-Market (GTM) and RevOps data enrichment pipelines frequently corrupt production CRMs by creating duplicate company records, overwriting human-curated fields, or drifting when webhook batches are replayed.',
      objective:
        'Engineer a deterministic Signal-to-CRM synchronisation bridge that transfers a 5-company, 8-column (40-cell) Clay enrichment contract into a live HubSpot CRM environment (containing 32 pre-existing companies) with strict replay idempotency.',
      execution: [
        'Validated the 5-company, 8-column (40-cell) Clay import contract and generated a pre-flight diff plan against the 32 pre-existing HubSpot company records.',
        'Verified domain-key identity resolution and protected-field survivorship rules offline across 18 mock HubSpot API tests and 30 local wrapper checks.',
        'Executed the initial live HubSpot synchronisation run, creating 5 net-new target companies with zero unintended updates to existing CRM records.',
        'Executed 3 consecutive identical replay runs against the live HubSpot API, recording 0 duplicate creates, 0 overwrites, and 5 deterministic skips on every replay run (15 total skips).'
      ],
      outcome:
        'Achieved 0 drift across 3 consecutive replay runs in a live HubSpot CRM environment (5 initial creates, 0 unintended updates, and 5 deterministic skips on every replay across 32 pre-existing companies).'
    },
    takeaway: {
      headline: 'Pre-Flight Diff Plan + Domain-Key Replay Idempotency vs. Blind Webhook Upserts',
      tradeoffLesson:
        'Enforcing domain-key identity resolution and a pre-flight reviewed plan before live HubSpot API mutation guaranteed that 3 consecutive replay runs produced zero duplicate records and zero field drift.'
    },
    diagramConfig: {
      title: 'Idempotent Clay-to-HubSpot CRM synchronisation & replay bridge',
      subtitleLine1:
        '5-company, 8-column (40-cell) Clay enrichment contract synchronised into a live HubSpot portal (32 existing companies).',
      subtitleLine2:
        'Verified across 48 offline/mock checks, 5 initial live creates, and 3 consecutive replay runs with 0 CRM drift.',
      orchestratorLabel: 'Python Signal-to-CRM Idempotent Sync & Replay Orchestrator',
      entryNode: { label: 'Clay Enrichment', sub: '(5 Co / 40 Cells)', color: '#7C3AED', icon: 'db' },
      topServices: [
        { label: 'Pre-Flight Plan', sub: '(Diff vs 32 Existing)', color: '#C026D3', icon: 'cache' },
        { label: 'Identity Resolver', sub: '(Domain Key Match)', color: '#059669', icon: 'search' },
        { label: 'Survivorship Gate', sub: '(Protected Fields)', color: '#DC2626', icon: 'shield' },
        { label: 'Mock Test Suite', sub: '(48 Offline Checks)', color: '#059669', icon: 'ai' },
        { label: 'Replay Verifier', sub: '(3x Replay = 0 Drift)', color: '#059669', icon: 'metrics' }
      ],
      flowSteps: [
        { line1: 'Validate 5-company', line2: '8-col Clay contract', line3: '(40 enriched cells)' },
        { line1: 'Snapshot 32 live', line2: 'HubSpot companies &', line3: 'build pre-flight diff' },
        { line1: 'Execute Run 1:', line2: '5 live creates &', line3: '0 unintended updates' },
        { line1: 'Execute 3x identical', line2: 'replays: 0 creates,', line3: '0 updates, 15 skips' },
        { line1: 'Audit post-transfer', line2: 'HubSpot state &', line3: 'confirm 0 CRM drift' }
      ],
      branchLabel: 'Idempotent skip',
      returnStep1: { line1: 'Preserve pre/post', line2: 'CRM audit receipts' },
      returnStep2: { line1: 'Confirm 0 drift', line2: 'across 37 companies' },
      rightModelNode: { label: 'HubSpot CRM API', sub: '(Live Portal Sync)', color: '#EA580C', icon: 'api' },
      bottomStoreNode: { label: 'Sync Audit Ledger', sub: '(5 Creates / 15 Skips)', color: '#7C3AED', icon: 'lock' }
    },
    evidence: {
      credential: 'HubSpot Data Integrations Certified (Valid 2026–2027)',
      sha256: 'be224405b734be2a9e966552eeffef31eec5b4d698ed45dc859d6d2d9b3ba72a',
      deliverables: [
        '5-company, 8-column (40-cell) Clay account intelligence import contract and schema validator',
        'Pre-flight CRM diff planner auditing 32 pre-existing HubSpot company records prior to mutation',
        '48 passing offline and mock API verification checks covering domain-key deduplication and field survivorship',
        'Live HubSpot API transfer receipt proving 5 initial creates, 0 unintended updates, and 0 drift across 3 consecutive replay runs'
      ],
      filesIncluded: [
        'src/bridge/clay_hubspot_sync.py',
        'contracts/clay_five_company_contract.csv',
        'receipts/clay_import_review_receipt.json',
        'receipts/live_transfer_summary.json',
        'tests/test_idempotent_replay_suite.py'
      ],
      scopeSummary:
        'Verified across 48 offline and mock API checks, 5 initial live HubSpot company creates, and 3 consecutive replay runs with 0 duplicate creates and 0 CRM drift.'
    }
  },
  {
    id: 'cs-13',
    code: 'CS-13',
    category: 'ai',
    accent: 'emerald',
    domainBadge: 'GOOGLE ADK, VERTEX AI & A2A SYSTEMS',
    title: 'Google ADK & Vertex AI: Four Independent Academic Agent Systems',
    subtitle:
      'ND906 portfolio covering separate legal reporting, research orchestration, grounded support and A2A banking implementations, with source-specific historical evidence.',
    stack: ['Google ADK', 'Vertex AI Gemini', 'FastAPI & Pydantic', 'Vertex AI Search', 'Cloud SQL & MCP Toolbox', 'Agent2Agent (A2A)'],
    headlineMetric: '4 Accepted Projects',
    headlineMetricLabel: 'ND906 | 4 Nov 2026',
    certName: 'Google Agentic AI Engineer Nanodegree',
    certUrl: 'https://www.udacity.com/certificate/e/abc7f810-d49d-11f1-851e-ff548a14528e',
    narrative: {
      context:
        'Four distinct academic scenarios expose different agent-engineering risks: maintaining context across report sections, coordinating research refinement, selecting authoritative support tools and limiting disclosure in a multi-agent banking prototype. Each implementation and its evaluation cohort is independent.',
      objective:
        'Implement four separate Google agent systems with inspectable orchestration, structured state, task-specific tools and deterministic controls, while keeping mocked checks, simulated research sources and historical live-model observations explicitly scoped to their originating project.',
      execution: [
        'P01 Legal Intelligence: built a FastAPI/Pydantic and Vertex AI workflow using three specialist personas to generate four sequential report sections, passing accepted-section context forward with bounded retries, writing-quality heuristics and token/cost telemetry.',
        'P02 Research Assistant: implemented actual Google ADK Runner orchestration with ParallelAgent source branches, SequentialAgent aggregation and a Researcher/Critic refinement loop. The retained run uses nine simulated references; its search agents do not retrieve external publications.',
        'P03 Betty’s Bird Boutique: revised the ADK support agent for accepted review 4864251, routing document questions to Standard Vertex AI Search, catalogue reads to parameterised Cloud SQL SELECT tools through MCP Toolbox and bird questions to a separate Google Search AgentTool, with provider grounding-URL retention.',
        'P04 Multi-Agent Banking: separated manager, deposit and loan into three independent ADK applications communicating through A2A, using read-only parameterised SQL, structured state, Decimal arithmetic, an isolated Boolean equity check and deterministic final wording.'
      ],
      outcome:
        'Four accepted assessments are recorded under reviews 4863109, 4863111, 4864251 and 4863110. Separate historical cohorts retain 31 network-mocked P01 checks and one four-section live report at 21.295 seconds with 16,591 tokens; a seven-stage P02 live-model run at 36.244 seconds with simulated sources; a revised six-turn P03 session with 15 model calls and 44.699 seconds of top-level execution; and 18 completed P04 requests across 15 threads without recorded RPC/task errors. These observations do not establish legal accuracy, external research verification, banking correctness or production reliability.'
    },
    takeaway: {
      headline: 'Task-Specific Model Flexibility vs. Deterministic Boundaries & Evidence Scope',
      tradeoffLesson:
        'Structured state, constrained tools and local deterministic checks make model behaviour more inspectable while preserving the limits of simulated retrieval, heuristic writing scores and unlabelled scenarios. These four independent academic implementations retain disclosed AI assistance and supplied-starter provenance; historical run observations do not establish unaided authorship, commercial impact or current service availability.'
    },
    diagramConfig: {
      title: 'ND906: Four independent academic agent systems',
      subtitleLine1:
        'P01 legal, P02 research, P03 boutique and P04 banking execute as separate academic implementations.',
      subtitleLine2:
        'Arrows show a common engineering pattern; historical run cohorts remain project-specific.',
      orchestratorLabel: 'COMMON ENGINEERING PATTERN | 4 INDEPENDENT SYSTEMS',
      entryNode: { label: 'Academic Scenario', sub: '(Select P01 to P04)', color: '#7C3AED', icon: 'api' },
      topServices: [
        { label: 'P01 Legal', sub: '(FastAPI / Vertex)', color: '#C026D3', icon: 'api' },
        { label: 'P02 Research', sub: '(ADK / Simulation)', color: '#059669', icon: 'ai' },
        { label: 'P03 Boutique', sub: '(Search / Catalogue)', color: '#059669', icon: 'search' },
        { label: 'P04 Banking', sub: '(ADK / A2A)', color: '#059669', icon: 'shield' },
        { label: 'Vertex AI', sub: '(Per-Project Calls)', color: '#7C3AED', icon: 'ai' }
      ],
      flowSteps: [
        { line1: 'Select P01, P02,', line2: 'P03 or P04', line3: 'independently' },
        { line1: 'Define structured', line2: 'state, persona or', line3: 'task contracts' },
        { line1: 'Route the chosen', line2: 'model and tools', line3: 'for that project' },
        { line1: 'Apply per-project', line2: 'bounded workflow', line3: 'and local controls' },
        { line1: 'Record its own', line2: 'run cohort and', line3: 'accepted artefacts' }
      ],
      branchLabel: 'Local guardrail path',
      returnStep1: { line1: 'Check local schema', line2: 'and tool boundaries' },
      returnStep2: { line1: 'Keep evidence', line2: 'project-specific' },
      rightModelNode: { label: 'Vertex AI Gemini', sub: '(Separate Calls)', color: '#059669', icon: 'ai' },
      bottomStoreNode: { label: 'Accepted Artefacts', sub: '(4 Independent ZIPs)', color: '#7C3AED', icon: 'lock' }
    },
    evidence: {
      credential: 'Google Agentic AI Engineer Nanodegree (Udacity, Issued Nov 4, 2026)',
      sha256: '9285fb71111c9595939f1bf02e6fca097b1f8b4817efa0451338608187da8d7a',
      deliverables: [
        'P01: FastAPI report service, persona/context orchestration, writing-quality validator, saved response/metrics and separately labelled mocked-check output.',
        'P02: ADK parallel/sequential/refinement agents, saved seven-stage workflow and research report, with synthetic-source disclosures and offline-check source.',
        'P03: revised support/search agents, source-grounding callbacks, SQL tool configuration, saved main/current-search traces and accepted review 4864251; earlier failed review 4863108 remains separate history.',
        'P04: independent manager/deposit/loan ADK and A2A apps, parameterised read-only tools, structured loan controls, scenario results and prototype approval/decline traces.',
        'Complete ND906 evidence ZIP containing four original accepted submission archives and their separately accessible artefacts, with recorded archive integrity metadata.'
      ],
      filesIncluded: [
        'nd906 Portfolio Evidence.zip',
        'project/starter/src/core/agent_system.py',
        'project/starter/src/core/quality_validator.py',
        'project/starter/agents/orchestrator.py',
        'starter/agent.py',
        'starter/search_agent.py',
        'starter/tools.yaml',
        'project/starter/manager/agent.py',
        'project/starter/loan/loan.py',
        'project/starter/deposit/agent.py'
      ],
      scopeSummary:
        'Four independent ND906 academic implementations accepted under reviews 4863109, 4863111, 4864251 and 4863110. The checksum identifies the complete programme evidence ZIP. Source records disclose AI assistance and supplied-starter material; mocked checks, simulated references and live-model observations remain separately labelled, and current service availability was not revalidated.'
    }
  },
  {
    id: 'cs-14',
    code: 'CS-14',
    category: 'cloud',
    accent: 'indigo',
    domainBadge: 'AZURE INFRASTRUCTURE, CI/CD & RELEASE QUALITY',
    title: 'Azure Cloud DevOps: Infrastructure, CI/CD & Quality Release Gates',
    subtitle: 'ND082: three independent, AI-assisted academic implementations covering Azure infrastructure, CI/CD delivery and release verification with supplied applications and historical evidence.',
    stack: [
      'Packer & Terraform',
      'GitHub Actions',
      'Azure Pipelines',
      'Azure App Service & VMs',
      'Newman, Selenium & JMeter',
      'Azure Monitor & Log Analytics'
    ],
    headlineMetric: '3 Accepted Projects',
    headlineMetricLabel: 'ND082 | 4 Nov 2026',
    certName: 'Cloud DevOps using Microsoft Azure Nanodegree',
    certUrl: 'https://www.udacity.com/certificate/e/7eaa03b8-d043-11f1-bd05-3b6d8f4ec1ee',
    narrative: {
      context: 'Three independent coursework scenarios require repeatable Azure provisioning, traceable application delivery and inspectable release gates. Their network controls, supplied applications, execution targets and retained evidence have different scopes.',
      objective: 'Implement separately scoped infrastructure, CI/CD and release-quality workflows with reproducible configuration, explicit deployment gates, correlated telemetry and bounded cleanup evidence, preserving the provenance of each historical observation.',
      execution: [
        'P01 Infrastructure: used Packer and parameterised Terraform for tagged private Linux VMs, managed disks and a Standard Load Balancer, with NSG Internet denial, learner-resource-group scope guards, policy checks and saved apply/destroy readbacks.',
        'P02 CI/CD: defined a Flask prediction contract, GitHub CI and Azure Pipelines Build/Deploy with federated identity configuration, isolated packaging, readiness/heading smoke gates and request-ID log correlation. The demonstrated source snapshot and later accepted documentation snapshot remain distinct.',
        'P03 Release Quality: provisioned temporary Terraform infrastructure and deployed supplied precompiled FakeRestAPI to Windows App Service. Azure Pipelines coordinates Newman, bounded JMeter workloads, separate Selenium workflows against a public training site, Azure Monitor/Log Analytics and scoped cleanup readback.'
      ],
      outcome: 'P01 records 21 resources applied and later destroyed, with Hello World checks on both private VMs through Run Command; Internet ingress stays blocked and inert policy remnants remain. P02 saved Cloud Shell and GitHub runs each report 59 passing checks; the same demonstrated source snapshot completed Azure Build/Deploy and an HTTP 200 prediction correlated with its request-ID log. P03 retains 201 API assertion cases across 54 HTTP requests, three passing browser workflows, and 969 stress / 629 endurance successful workload requests, excluding one ownership preflight per load report. These are separate historical academic cohorts, not a production reliability score.'
    },
    takeaway: {
      headline: 'Repeatable Delivery vs. Scoped Verification & Cleanup',
      tradeoffLesson: 'Reproducible infrastructure and release gates answer different questions, so private-VM readbacks, local checks, CI runs and bounded load cohorts stay separately labelled. This AI-assisted coursework uses supplied applications and historical evidence; it does not establish current Azure availability, a production SLA or complete removal of every policy object.'
    },
    diagramConfig: {
      title: 'ND082: Three independent Azure coursework implementations',
      subtitleLine1: 'Conceptual reference across three separate academic infrastructure, CI/CD and release-quality implementations.',
      subtitleLine2: 'Arrows show a common pattern; execution targets, verification cohorts and cleanup scope remain project-specific.',
      orchestratorLabel: 'COMMON PATTERN | 3 INDEPENDENT AZURE PROJECTS',
      entryNode: {
        label: 'Scoped Coursework',
        sub: '(Select P01 to P03)',
        color: '#7C3AED',
        icon: 'shield'
      },
      topServices: [
        {
          label: 'Packer/Terraform',
          sub: '(Image / Scoped IaC)',
          color: '#7C3AED',
          icon: 'cloud'
        },
        {
          label: 'GitHub CI',
          sub: '(Saved CI Checks)',
          color: '#059669',
          icon: 'git'
        },
        {
          label: 'Azure Pipelines',
          sub: '(Project Releases)',
          color: '#059669',
          icon: 'git'
        },
        {
          label: 'App Service',
          sub: '(Supplied Apps)',
          color: '#059669',
          icon: 'api'
        },
        {
          label: 'Azure Monitor',
          sub: '(Logs / Alerts)',
          color: '#059669',
          icon: 'metrics'
        }
      ],
      flowSteps: [
        {
          line1: 'Select one project',
          line2: 'and verify its',
          line3: 'resource scope'
        },
        {
          line1: 'Prepare its image,',
          line2: 'source or supplied',
          line3: 'application artefact'
        },
        {
          line1: 'Provision and',
          line2: 'deploy that project',
          line3: 'independently'
        },
        {
          line1: 'Run its scoped',
          line2: 'service, API or',
          line3: 'release checks'
        },
        {
          line1: 'Retain logs and',
          line2: 'project-specific',
          line3: 'cleanup evidence'
        }
      ],
      branchLabel: 'Scope or gate control',
      returnStep1: {
        line1: 'Inspect retained',
        line2: 'run-specific evidence'
      },
      returnStep2: {
        line1: 'Keep cohorts and',
        line2: 'cleanup scope distinct'
      },
      rightModelNode: {
        label: 'Azure Runtime',
        sub: '(VMs / App Service)',
        color: '#059669',
        icon: 'cloud'
      },
      bottomStoreNode: {
        label: 'Accepted Artefacts',
        sub: '(3 Independent ZIPs)',
        color: '#7C3AED',
        icon: 'lock'
      }
    },
    evidence: {
      credential: 'Cloud DevOps using Microsoft Azure Nanodegree (Udacity, Issued Nov 4, 2026)',
      sha256: '94bc49d21086a6b24762d0b8b43acece97fef941312d5a0d52b24e290f99c9ac',
      deliverables: [
        'P01: Packer image configuration, parameterised Terraform topology, scope/policy guards and retained private-VM, deployment and bounded cleanup evidence.',
        'P02: Flask contract and packaging, GitHub/Azure pipeline definitions, saved check results and correlated App Service prediction/log evidence, preserving source-snapshot provenance.',
        'P03: Azure release pipeline, supplied application/test archives, separately counted API/browser/load results, monitoring records and scoped cleanup readback.',
        'Complete ND082 evidence package with three original accepted submission ZIPs, source artefacts and recorded archive-integrity metadata.'
      ],
      filesIncluded: [
        'nd082 Portfolio Evidence.zip',
        'main.tf',
        'server.json',
        '.github/workflows/ci.yml',
        'azure-pipelines.yml',
        'azure-pipelines.yaml',
        'execution-evidence/postman/TEST-DataValidation.xml',
        'execution-evidence/cleanup-verification.json',
        'scripts/pipeline_support.py'
      ],
      scopeSummary: 'Three independent accepted ND082 academic implementations, with disclosed AI assistance and supplied applications. The checksum identifies the complete programme evidence ZIP. Saved infrastructure, CI/CD and release-verification cohorts retain their own network, source-snapshot, workload and cleanup limits; current Azure state and production reliability were not revalidated.'
    }
  }
];

// ============================================================================
// DATA: FEATURED ARCHITECTURAL IMPLEMENTATIONS
// ============================================================================
const FEATURED_IMPLEMENTATIONS = [
  {
    "projectId": "cs-05",
    "focus": "Private AWS networking and governance",
    "contribution": "Configured and verified private VPC peering across two AWS regions, with route tables, security groups and flow-log checks. Produced a separate multi-account governance and FinOps blueprint.",
    "decision": "Explicit CIDR routes and least-privilege security groups support private communication; the separate OU/SCP design remains a governance blueprint."
  },
  {
    "projectId": "cs-14",
    "focus": "Azure delivery and release checks",
    "contribution": "Implemented Azure infrastructure, CI/CD and release checks across three independent projects using supplied applications and AI assistance, supported by historical execution evidence.",
    "decision": "Separated provisioning, deployment readiness and release testing so that each check had a clear purpose and evidence scope."
  },
  {
    "projectId": "cs-01",
    "focus": "LLM routing and modelled cost",
    "contribution": "Built a two-tier router and Chroma semantic cache, validated routing, caching and fallback across 231 unit tests, and produced a 74-row cost ledger.",
    "decision": "Checked the cache before reserving the stronger model for complex queries; the ledger records a 65.0% modelled saving against an all-gpt-4o baseline."
  }
];

// ============================================================================
// DATA: OFFICIAL VERIFIED CERTIFICATES (19 Udacity + 28 Categorized Credentials)
// ============================================================================
const UDACITY_CERTIFICATES = [
  {
    title: 'Cloud DevOps using Microsoft Azure Nanodegree',
    date: 'Nov 4, 2026',
    category: 'Cloud DevOps & Azure',
    url: 'https://www.udacity.com/certificate/e/7eaa03b8-d043-11f1-bd05-3b6d8f4ec1ee'
  },
  {
    title: 'Google Agentic AI Engineer Nanodegree',
    date: 'Nov 4, 2026',
    category: 'Agentic AI',
    url: 'https://www.udacity.com/certificate/e/abc7f810-d49d-11f1-851e-ff548a14528e'
  },
  {
    title: 'AI Ops Engineer Nanodegree',
    date: 'Nov 2, 2026',
    category: 'AI & LLMOps',
    url: 'https://www.udacity.com/certificate/e/0d76b32a-d670-11f1-a0db-431d20b60fd0'
  },
  {
    title: 'Deep Learning Topics with Computer Vision and NLP',
    date: 'Nov 2, 2026',
    category: 'Deep Learning',
    url: 'https://www.udacity.com/certificate/e/861f0eca-d6fc-11f1-9833-8ff8bc1dcd72'
  },
  {
    title: 'Security Engineer Nanodegree',
    date: 'Nov 1, 2026',
    category: 'Cloud & Security',
    url: 'https://www.udacity.com/certificate/e/622b9928-d08d-11f1-93d8-d39604a654e8'
  },
  {
    title: 'AI Engineering with Claude Nanodegree',
    date: 'Oct 31, 2026',
    category: 'Agentic AI',
    url: 'https://www.udacity.com/certificate/e/cc24fb94-d484-11f1-9745-7779ca96d13b'
  },
  {
    title: 'Data Engineering with Microsoft Azure Nanodegree',
    date: 'Oct 31, 2026',
    category: 'Data Platforms',
    url: 'https://www.udacity.com/certificate/e/14e369bc-d041-11f1-93bb-2f4e1e67bcea'
  },
  {
    title: 'AWS Cloud Architect Nanodegree',
    date: 'Oct 30, 2026',
    category: 'Cloud Architecture',
    url: 'https://www.udacity.com/certificate/e/d2ed9638-cae4-11f1-bbfe-07a631d7ce6a'
  },
  {
    title: 'Data Engineering with AWS Nanodegree',
    date: 'Oct 30, 2026',
    category: 'Data Platforms',
    url: 'https://www.udacity.com/certificate/e/7409073a-d07d-11f1-b53e-4b451568887b'
  },
  {
    title: 'Natural Language Processing Nanodegree',
    date: 'Oct 25, 2026',
    category: 'AI & NLP',
    url: 'https://www.udacity.com/certificate/e/c1c1a7aa-cdaf-11f1-b6f9-8bb02a043926'
  },
  {
    title: 'Data Streaming Nanodegree (Kafka & Spark)',
    date: 'Oct 25, 2026',
    category: 'Data Streaming',
    url: 'https://www.udacity.com/certificate/e/ce6e6422-d041-11f1-bbc9-23cf1ca0d113'
  },
  {
    title: 'Microservices at Scale using AWS & Kubernetes',
    date: 'Oct 25, 2026',
    category: 'Cloud Architecture',
    url: 'https://www.udacity.com/certificate/e/5d8dfadc-d042-11f1-93ef-5f6905dcf04d'
  },
  {
    title: 'Computer Vision Nanodegree',
    date: 'Oct 23, 2026',
    category: 'Deep Learning',
    url: 'https://www.udacity.com/certificate/e/9c2fe1da-cdb1-11f1-afaa-73d387b1c8b9'
  },
  {
    title: 'Deep Reinforcement Learning Nanodegree',
    date: 'Oct 23, 2026',
    category: 'Deep Learning',
    url: 'https://www.udacity.com/certificate/e/2a76d76c-ce2c-11f1-9a30-cb3177fb5d4d'
  },
  {
    title: 'Agentic AI Engineer with LangChain & LangGraph',
    date: 'Oct 21, 2026',
    category: 'Agentic AI',
    url: 'https://www.udacity.com/certificate/e/7f3f43c0-cd31-11f1-85d2-5797698f73c3'
  },
  {
    title: 'Deep Learning Nanodegree',
    date: 'Oct 21, 2026',
    category: 'Deep Learning',
    url: 'https://www.udacity.com/certificate/e/38c7402a-cd3e-11f1-a421-27adc65a9265'
  },
  {
    title: 'Generative AI Nanodegree',
    date: 'Oct 21, 2026',
    category: 'Generative AI',
    url: 'https://www.udacity.com/certificate/e/823fea76-cd71-11f1-a3e2-1f751a2fc192'
  },
  {
    title: 'Agentic AI Nanodegree',
    date: 'Oct 21, 2026',
    category: 'Agentic AI',
    url: 'https://www.udacity.com/certificate/e/0ca6ac48-cd2e-11f1-81c4-0340813a7e5f'
  },
  {
    title: 'AWS Machine Learning Engineer Nanodegree',
    date: 'Oct 18, 2026',
    category: 'Cloud MLOps',
    url: 'https://www.udacity.com/certificate/e/41150320-caa0-11f1-a7b7-677d26a7417a'
  }
];

const COURSERA_AND_INDUSTRY_CERTIFICATES = [
  // 1. AI, Agents & Anthropic (12)
  {
    title: 'IBM RAG and Agentic AI Professional Certificate (10 Courses)',
    issuer: 'Coursera | IBM',
    date: 'Oct 16, 2026',
    group: 'ai',
    url: 'https://www.coursera.org/account/accomplishments/specialization/EV46HYDJREGC'
  },
  {
    title: 'Agentic AI',
    issuer: 'DeepLearning.AI',
    date: 'Oct 16, 2026',
    group: 'ai',
    url: 'https://www.deeplearning.ai/certificates/6320bb8e-7e6a-4e2b-8ed3-42d0ba4fbdf1'
  },
  {
    title: 'Project: Ambient Agents with LangGraph',
    issuer: 'LangChain Academy',
    date: 'Oct 9, 2026',
    group: 'ai',
    url: 'https://academy.langchain.com/certificates/w3rqjimvt1'
  },
  {
    title: 'Project: Deep Research with LangGraph',
    issuer: 'LangChain Academy',
    date: 'Oct 9, 2026',
    group: 'ai',
    url: 'https://academy.langchain.com/certificates/8xhabu9let'
  },
  {
    title: 'Model Context Protocol (MCP): Advanced Topics',
    issuer: 'Anthropic',
    date: 'Aug 12, 2026',
    group: 'ai',
    url: 'https://verify.skilljar.com/c/edqzruxwuh7g'
  },
  {
    title: 'Claude with the Anthropic API',
    issuer: 'Anthropic',
    date: 'Aug 12, 2026',
    group: 'ai',
    url: 'https://verify.skilljar.com/c/8dracemq5gjc'
  },
  {
    title: 'Claude Code in Action',
    issuer: 'Anthropic',
    date: 'Aug 12, 2026',
    group: 'ai',
    url: 'https://verify.skilljar.com/c/kuq26wcrks7p'
  },
  {
    title: 'AI Fluency for Builders',
    issuer: 'Anthropic & CodePath',
    date: 'Aug 12, 2026',
    group: 'ai',
    url: 'https://verify.skilljar.com/c/ueiyh8ocjbft'
  },
  {
    title: 'Claude with Amazon Bedrock',
    issuer: 'Anthropic',
    date: 'Aug 12, 2026',
    group: 'ai',
    url: 'https://verify.skilljar.com/c/3xbfq6wq7muf'
  },
  {
    title: 'Claude with Google Vertex AI',
    issuer: 'Anthropic',
    date: 'Aug 12, 2026',
    group: 'ai',
    url: 'https://verify.skilljar.com/c/ftmwqhbfauiv'
  },
  {
    title: 'Claude Code 101',
    issuer: 'Anthropic',
    date: 'Aug 11, 2026',
    group: 'ai',
    url: 'https://verify.skilljar.com/c/4425yt2uc2b5'
  },
  {
    title: 'AI Agents with Model Context Protocol Specialization (3 Courses)',
    issuer: 'Coursera | Vanderbilt University',
    date: 'Jul 19, 2026',
    group: 'ai',
    url: 'https://www.coursera.org/account/accomplishments/specialization/AW9TFC4M0K44'
  },

  // 2. Cloud, Scala & DevOps (6)
  {
    title: 'EPFL Functional Programming in Scala Specialization (5 Courses)',
    issuer: 'Coursera | EPFL',
    date: 'Nov 2, 2026',
    group: 'cloud',
    url: 'https://www.coursera.org/account/accomplishments/specialization/IUG5FUNQECAG'
  },
  {
    title: 'Functional Programming in Scala Capstone',
    issuer: 'Coursera | EPFL',
    date: 'Nov 2, 2026',
    group: 'cloud',
    url: 'https://www.coursera.org/account/accomplishments/certificate/82B9SBMPE7ZJ'
  },
  {
    title: 'AWS Generative AI Developer Advanced Specialization (22 Courses)',
    issuer: 'Coursera | Amazon Web Services',
    date: 'Oct 16, 2026',
    group: 'cloud',
    url: 'https://www.coursera.org/account/accomplishments/specialization/2HU8OE27XZOW'
  },
  {
    title: 'IBM Systems and Solutions Architect Professional Certificate (11 Courses)',
    issuer: 'Coursera | IBM',
    date: 'Oct 11, 2026',
    group: 'cloud',
    url: 'https://www.coursera.org/account/accomplishments/specialization/QCTS5SIEC9UJ'
  },
  {
    title: 'IBM Applied DevOps Engineering Professional Certificate (9 Courses)',
    issuer: 'Coursera | IBM',
    date: 'Sep 21, 2026',
    group: 'cloud',
    url: 'https://www.coursera.org/account/accomplishments/specialization/5DXUZ4L5PT0I'
  },
  {
    title: 'AI Infrastructure and Operations Fundamentals',
    issuer: 'Coursera | NVIDIA',
    date: 'Aug 17, 2026',
    group: 'cloud',
    url: 'https://www.coursera.org/account/accomplishments/verify/FTC7S5A7W5L6'
  },

  // 3. Data & ML (4)
  {
    title: 'Open Source Data Engineering with Spark, dbt & Airflow (6 Courses)',
    issuer: 'Coursera',
    date: 'Oct 15, 2026',
    group: 'data',
    url: 'https://www.coursera.org/account/accomplishments/specialization/2ZE4FRYM0PM3'
  },
  {
    title: 'Data Engineering on AWS - The Complete Training (3 Courses)',
    issuer: 'Coursera | Packt',
    date: 'Oct 14, 2026',
    group: 'data',
    url: 'https://www.coursera.org/account/accomplishments/specialization/XFNMEDEZ6WUS'
  },
  {
    title: 'IBM Data Architecture Professional Certificate (13 Courses)',
    issuer: 'Coursera | IBM',
    date: 'Sep 8, 2026',
    group: 'data',
    url: 'https://www.coursera.org/account/accomplishments/specialization/M9GM6H6WND6R'
  },
  {
    title: 'Machine Learning Specialization (3 Courses)',
    issuer: 'Coursera | Stanford Online & DeepLearning.AI',
    date: 'Jul 14, 2026',
    group: 'data',
    url: 'https://www.coursera.org/account/accomplishments/specialization/1OAYFL1K024S'
  },

  // 4. Blockchain, RegTech & Ops (6)
  {
    title: 'Decentralized Finance (DeFi): The Future of Finance (4 Courses)',
    issuer: 'Coursera | Duke University',
    date: 'Oct 7, 2026',
    group: 'fintech',
    url: 'https://www.coursera.org/account/accomplishments/specialization/SYLLJLRO34F8'
  },
  {
    title: 'Blockchain Specialization (4 Courses)',
    issuer: 'Coursera | University at Buffalo',
    date: 'Oct 5, 2026',
    group: 'fintech',
    url: 'https://www.coursera.org/account/accomplishments/specialization/DFMRJGNKBSDA'
  },
  {
    title: 'Six Sigma Green Belt Specialization (4 Courses)',
    issuer: 'Coursera | Kennesaw State University',
    date: 'Sep 11, 2026',
    group: 'fintech',
    url: 'https://www.coursera.org/account/accomplishments/specialization/XKEQ64NEZDTZ'
  },
  {
    title: 'Regulatory Compliance Specialization (4 Courses)',
    issuer: 'Coursera | University of Pennsylvania',
    date: 'Sep 3, 2026',
    group: 'fintech',
    url: 'https://www.coursera.org/account/accomplishments/specialization/ZM6L19GQBDJ6'
  },
  {
    title: 'FinTech: Finance Industry Transformation and Regulation (4 Courses)',
    issuer: 'Coursera | HKUST',
    date: 'Aug 28, 2026',
    group: 'fintech',
    url: 'https://www.coursera.org/account/accomplishments/specialization/E7ZOQRSRL8O2'
  },
  {
    title: 'HubSpot Data Integrations Certified (Valid 2026–2027)',
    issuer: 'HubSpot Academy',
    date: 'Jul 31, 2026',
    group: 'fintech',
    url: 'https://app-eu1.hubspot.com/academy/achievements/4p7h00wk/en/1/djessi-jorge/hubspot-data-integrations-certified'
  }
];

const CERT_GROUPS = [
  {
    id: 'ai',
    title: 'AI, Agents & Anthropic (12)',
    shortLabel: 'AI, Agents & Anthropic (12)'
  },
  {
    id: 'cloud',
    title: 'Cloud, Scala & DevOps (6)',
    shortLabel: 'Cloud, Scala & DevOps (6)'
  },
  {
    id: 'data',
    title: 'Data & ML (4)',
    shortLabel: 'Data & ML (4)'
  },
  {
    id: 'fintech',
    title: 'Blockchain, RegTech & Ops (6)',
    shortLabel: 'Blockchain, RegTech & Ops (6)'
  }
];

// ============================================================================
// DATA: QUALITATIVE ENTERPRISE TIMELINE (2014–2026)
// ============================================================================
const ENTERPRISE_TIMELINE = [
  {
    period: '2026',
    role: 'Independent Applied AI & Systems Specialist',
    company: 'Self-Directed Technical Practice & Architecture Delivery',
    location: 'London, United Kingdom',
    domainBadge: 'Multi-Agent AI, Cloud Architecture & Data Platforms',
    accent: 'indigo',
    summary:
      'Designing deterministic generative AI workflows, stateful multi-agent systems, and cloud-native data pipelines backed by 19 completed Udacity Nanodegrees and courses (50+ accepted engineering projects) plus AWS, Anthropic, LangChain, IBM, and EPFL specialisations.',
    highlights: [
      'Architected stateful multi-agent orchestration pipelines using LangGraph, Anthropic Claude Code, and FastAPI with schema-validated tool execution, complexity routing, and automated faithfulness gates.',
      'Delivered end-to-end cloud reference implementations across AWS (SageMaker, Glue, Iceberg, Athena, ECS, Step Functions, CloudFormation), 5-job GitHub Actions MLOps pipelines, and real-time streaming platforms (Apache Kafka, Spark, Scala).',
      'Engineered an idempotent Signal-to-CRM data synchronisation bridge connecting Clay enrichment contracts to a live HubSpot CRM portal with zero-drift replay verification.'
    ],
    tags: ['LangGraph', 'Claude Code & MCP', 'AWS Architecture', 'CloudFormation', 'Apache Kafka', 'Scala & Spark', 'PyTorch', 'FastAPI']
  },
  {
    period: '2024–2026',
    role: 'Senior Curriculum Curator & Technical Learning Designer',
    company: 'DCD Academy (DataCenterDynamics)',
    location: 'London, United Kingdom',
    domainBadge: 'Data Centre Infrastructure, Power, Cooling & AI Enablement',
    accent: 'indigo',
    summary:
      'Led end-to-end technical learning architecture and AI-assisted curriculum production across mission-critical data-centre engineering domains, acting as Team Lead to junior peers and collaborating with 24 senior subject-matter experts.',
    highlights: [
      'Curated and structured technical engineering programmes covering data-centre power distribution, liquid and air cooling thermodynamics, hyperscale cloud infrastructure, energy sustainability, and AI operations.',
      'Integrated generative AI production workflows (Anthropic Claude, ChatGPT, HeyGen, ElevenLabs) with Articulate Storyline 360 and Thought Industries LMS to standardise technical accuracy and modular delivery.',
      'Acted as Team Lead mentoring and coaching junior peers while partnering with 24 principal engineers and industry SMEs to translate complex infrastructure specifications into competency frameworks, SOPs, and scenario-driven assessments.'
    ],
    tags: ['Data Centre Infrastructure', 'Power & Cooling Systems', 'AI Production Workflows', 'SME Collaboration', 'Thought Industries LMS']
  },
  {
    period: '2018–2023',
    role: '1st to 3rd Line Technical Support Engineer & Team Lead',
    company: 'Tata Consultancy Services (Supporting EDF Energy)',
    location: 'London & Croydon, United Kingdom',
    domainBadge: 'Red, Green & Blue Segregated Enterprise Networks',
    accent: 'emerald',
    summary:
      'Provided high-availability 1st to 3rd line infrastructure, endpoint, and energy trading-floor support for EDF Energy across strictly segregated corporate and power generation network environments, acting as Team Lead and senior escalation point for junior support engineers.',
    highlights: [
      'Supported critical enterprise operations across EDF Energy corporate networks (Red and Green), power Generation enclaves (Blue), and live wholesale energy trading-floor systems at Interchange Croydon.',
      'Acted as Team Lead overseeing queue health, SLA compliance, and shift handovers; mentored junior 1st/2nd line analysts on root-cause incident diagnostics, problem management escalations, and change control governance in ServiceNow.',
      'Managed endpoint security compliance, automated software deployment, and real-time user experience telemetry using Microsoft Intune, Active Directory, and Aternity monitoring.'
    ],
    tags: ['ServiceNow Diagnostics', 'Red/Green/Blue Networks', 'Microsoft Intune', 'Aternity Telemetry', 'Trading Floor Support']
  },
  {
    period: '2014–2018',
    role: 'System Implementation Specialist & Data Analyst',
    company: "King's College Hospital NHS Foundation Trust",
    location: 'London, United Kingdom',
    domainBadge: 'SQL Server Statutory Data Audit & Clinical PAS/PIMS',
    accent: 'emerald',
    summary:
      'Led clinical system implementation and workflow mapping, and used SQL Server to validate statutory data across acute and specialist NHS healthcare clinics.',
    highlights: [
      'Rolled out and supported clinical PAS and PIMS patient administration modules across Caldecott Sexual Health and The Havens (Sexual Assault Referral Centres), enforcing strict clinical data confidentiality.',
      'Authored complex SQL Server queries to audit, cleanse, and reconcile large patient-level datasets for mandatory NHS statutory submissions and operational performance reporting.',
      'Conducted end-to-end clinical workflow mapping, user acceptance testing (UAT), and schema migration validation between legacy hospital databases and modern electronic health record systems.'
    ],
    tags: ['SQL Server Data Audit', 'PAS / PIMS Implementation', 'Clinical Data Governance', 'UAT & Workflow Mapping', 'NHS Statutory Reporting']
  }
];

// ============================================================================
// COMPONENT: AWS REFERENCE ARCHITECTURE DIAGRAM (SELF-CONTAINED SVG)
// ============================================================================
const AwsReferenceArchitectureSVG = ({ config, projectId }) => {
  const renderTileIcon = (x, y, type) => {
    const cx = x + 22;
    const cy = y + 22;
    switch (type) {
      case 'api':
        return (
          <g stroke="#FFFFFF" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d={`M ${cx - 8} ${cy - 10} L ${cx - 13} ${cy} L ${cx - 8} ${cy + 10}`} />
            <path d={`M ${cx + 8} ${cy - 10} L ${cx + 13} ${cy} L ${cx + 8} ${cy + 10}`} />
            <line x1={cx + 3} y1={cy - 9} x2={cx - 3} y2={cy + 9} />
          </g>
        );
      case 'cache':
        return (
          <g stroke="#FFFFFF" strokeWidth="1.6" fill="none">
            <ellipse cx={cx} cy={cy - 8} rx="11" ry="4" />
            <path d={`M ${cx - 11} ${cy - 8} V ${cy + 7} C ${cx - 11} ${cy + 10} ${cx + 11} ${cy + 10} ${cx + 11} ${cy + 7} V ${cy - 8}`} />
            <text x={cx} y={cy + 4} textAnchor="middle" fill="#FFFFFF" stroke="none" fontSize="10" fontWeight="700" fontFamily="sans-serif">
              R
            </text>
          </g>
        );
      case 'ai':
        return (
          <g stroke="#FFFFFF" strokeWidth="1.6" fill="none" strokeLinecap="round">
            <path d={`M ${cx - 2} ${cy - 11} C ${cx - 9} ${cy - 11} ${cx - 12} ${cy - 5} ${cx - 10} ${cy + 1} C ${cx - 12} ${cy + 6} ${cx - 8} ${cy + 11} ${cx - 2} ${cy + 11} Z`} />
            <line x1={cx + 1} y1={cy - 6} x2={cx + 9} y2={cy - 6} />
            <circle cx={cx + 11} cy={cy - 6} r="2" fill="#FFFFFF" />
            <line x1={cx + 1} y1={cy} x2={cx + 11} y2={cy} />
            <circle cx={cx + 13} cy={cy} r="2" fill="#FFFFFF" />
            <line x1={cx + 1} y1={cy + 6} x2={cx + 9} y2={cy + 6} />
            <circle cx={cx + 11} cy={cy + 6} r="2" fill="#FFFFFF" />
          </g>
        );
      case 'search':
        return (
          <g stroke="#FFFFFF" strokeWidth="1.7" fill="none" strokeLinecap="round">
            <line x1={cx - 11} y1={cy + 9} x2={cx - 11} y2={cy - 3} />
            <line x1={cx - 6} y1={cy + 9} x2={cx - 6} y2={cy - 9} />
            <line x1={cx - 1} y1={cy + 9} x2={cx - 1} y2={cy - 5} />
            <circle cx={cx + 4} cy={cy + 1} r="6.5" />
            <line x1={cx + 9} y1={cy + 6} x2={cx + 13} y2={cy + 10} />
          </g>
        );
      case 'lock':
        return (
          <g stroke="#FFFFFF" strokeWidth="1.6" fill="none">
            <rect x={cx - 9} y={cy - 2} width="18" height="13" rx="2" />
            <path d={`M ${cx - 5} ${cy - 2} V ${cy - 7} A 5 5 0 0 1 ${cx + 5} ${cy - 7} V ${cy - 2}`} />
            <circle cx={cx} cy={cy + 4} r="1.5" fill="#FFFFFF" />
          </g>
        );
      case 'key':
        return (
          <g stroke="#FFFFFF" strokeWidth="1.6" fill="none" strokeLinecap="round">
            <circle cx={cx - 5} cy={cy} r="5.5" />
            <line x1={cx + 1} y1={cy} x2={cx + 12} y2={cy} />
            <line x1={cx + 8} y1={cy} x2={cx + 8} y2={cy + 4} />
            <line x1={cx + 11} y1={cy} x2={cx + 11} y2={cy + 4} />
          </g>
        );
      case 'shield':
        return (
          <g stroke="#FFFFFF" strokeWidth="1.6" fill="none">
            <path d={`M ${cx} ${cy - 11} L ${cx + 10} ${cy - 7} V ${cy + 1} C ${cx + 10} ${cy + 7} ${cx} ${cy + 11} ${cx} ${cy + 11} C ${cx} ${cy + 11} ${cx - 10} ${cy + 7} ${cx - 10} ${cy + 1} V ${cy - 7} Z`} />
            <circle cx={cx} cy={cy - 1} r="2.5" />
          </g>
        );
      case 'db':
        return (
          <g stroke="#FFFFFF" strokeWidth="1.6" fill="none">
            <ellipse cx={cx - 2} cy={cy - 8} rx="9" ry="3.5" />
            <path d={`M ${cx - 11} ${cy - 8} V ${cy + 6} C ${cx - 11} ${cy + 9} ${cx + 7} ${cy + 9} ${cx + 7} ${cy + 6} V ${cy - 8}`} />
            <path d={`M ${cx + 8} ${cy - 4} L ${cx + 4} ${cy + 2} H ${cx + 9} L ${cx + 5} ${cy + 8}`} strokeLinecap="round" strokeLinejoin="round" />
          </g>
        );
      case 'git':
        return (
          <g stroke="#FFFFFF" strokeWidth="1.7" fill="none" strokeLinecap="round">
            <circle cx={cx - 6} cy={cy - 6} r="3" />
            <circle cx={cx - 6} cy={cy + 7} r="3" />
            <circle cx={cx + 7} cy={cy} r="3" />
            <line x1={cx - 6} y1={cy - 3} x2={cx - 6} y2={cy + 4} />
            <path d={`M ${cx - 3} ${cy - 6} C ${cx + 2} ${cy - 6} ${cx + 2} ${cy} ${cx + 4} ${cy}`} />
          </g>
        );
      case 'cloud':
        return (
          <g stroke="#FFFFFF" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d={`M ${cx - 8} ${cy + 6} H ${cx + 8} A 4.5 4.5 0 0 0 ${cx + 9} ${cy - 3} A 6 6 0 0 0 ${cx - 3} ${cy - 6} A 5 5 0 0 0 ${cx - 8} ${cy + 6} Z`} />
          </g>
        );
      case 'metrics':
        return (
          <g stroke="#FFFFFF" strokeWidth="1.6" fill="none" strokeLinecap="round">
            <path d={`M ${cx - 9} ${cy + 5} H ${cx + 4}`} />
            <polyline points={`${cx - 8},${cy + 2} ${cx - 4},${cy - 3} ${cx},${cy} ${cx + 5},${cy - 6}`} />
            <circle cx={cx + 6} cy={cy + 3} r="4.5" />
            <line x1={cx + 9} y1={cy + 6} x2={cx + 12} y2={cy + 9} />
          </g>
        );
      default:
        return (
          <g stroke="#FFFFFF" strokeWidth="1.6" fill="none">
            <polygon points={`${cx},${cy - 10} ${cx + 9},${cy - 5} ${cx + 9},${cy + 5} ${cx},${cy + 10} ${cx - 9},${cy + 5} ${cx - 9},${cy - 5}`} />
            <circle cx={cx} cy={cy} r="3" />
          </g>
        );
    }
  };

  const renderTile = (x, y, label, sub, color, iconType, key) => (
    <g key={key}>
      <rect x={x} y={y} width="44" height="44" rx="4" fill={color} />
      {renderTileIcon(x, y, iconType)}
      <text x={x + 22} y={y + 57} textAnchor="middle" fill="#1E293B" fontSize="10.5" fontWeight="600" fontFamily="sans-serif">
        {label}
      </text>
      {sub && (
        <text x={x + 22} y={y + 68} textAnchor="middle" fill="#475569" fontSize="9.5" fontFamily="sans-serif">
          {sub}
        </text>
      )}
    </g>
  );

  const renderNumberBadge = (x, y, num) => (
    <g key={`badge-${num}`}>
      <rect x={x} y={y} width="26" height="26" rx="5" fill="#93C5FD" stroke="#60A5FA" strokeWidth="1" />
      <text x={x + 13} y={y + 18} textAnchor="middle" fill="#0F172A" fontSize="13" fontWeight="800" fontFamily="sans-serif">
        {num}
      </text>
    </g>
  );

  const stepXPositions = [138, 266, 394, 522, 650];

  return (
    <div className="w-full overflow-x-auto rounded-xl border border-slate-300 bg-white p-3 shadow-sm">
      <svg
        viewBox="0 0 900 495"
        className="w-full min-w-[760px] h-auto select-none"
        role="img"
        aria-label={config.title}
      >
        <defs>
          <marker id={`arrow-dark-${projectId}`} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,1 L7,4 L0,7 Z" fill="#1E293B" />
          </marker>
        </defs>

        {/* White Diagram Canvas */}
        <rect x="0" y="0" width="900" height="495" fill="#FFFFFF" />

        {/* Top Header Title & 2-Line Subtitle */}
        <text x="24" y="28" fill="#0F172A" fontSize="21" fontWeight="800" fontFamily="sans-serif" textLength={['cs-07', 'cs-09', 'cs-11'].includes(projectId) ? 852 : undefined} lengthAdjust="spacingAndGlyphs">
          {config.title}
        </text>
        <text x="24" y="47" fill="#334155" fontSize="11.5" fontFamily="sans-serif">
          {config.subtitleLine1}
        </text>
        <text x="24" y="61" fill="#334155" fontSize="11.5" fontFamily="sans-serif">
          {config.subtitleLine2}
        </text>

        {/* Double Horizontal Divider Line */}
        <line x1="24" y1="72" x2="876" y2="72" stroke="#94A3B8" strokeWidth="1" />
        <line x1="24" y1="75" x2="876" y2="75" stroke="#CBD5E1" strokeWidth="1" />

        {/* Top Row of 5 Service Tiles */}
        {config.topServices.map((svc, idx) => {
          const tileX = stepXPositions[idx] + 30;
          const tileY = 92;
          return (
            <g key={`top-svc-${idx}`}>
              {renderTile(tileX, tileY, svc.label, svc.sub, svc.color, svc.icon, `top-${idx}`)}
              {idx === 0 ? (
                <line
                  x1={tileX + 22}
                  y1={222}
                  x2={tileX + 22}
                  y2={164}
                  stroke="#1E293B"
                  strokeWidth="1.3"
                  markerEnd={`url(#arrow-dark-${projectId})`}
                />
              ) : (
                <line
                  x1={tileX + 22}
                  y1={222}
                  x2={tileX + 22}
                  y2={164}
                  stroke="#1E293B"
                  strokeWidth="1.2"
                />
              )}
            </g>
          );
        })}

        {/* Central Dashed Orchestrator Boundary Box */}
        <rect
          x="116"
          y="174"
          width="662"
          height="226"
          rx="4"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="1.3"
          strokeDasharray="4 4"
        />

        {/* Orange Compute Orchestrator Badge inside Top-Left of Dashed Box */}
        <rect x="116" y="174" width="24" height="24" fill="#EA580C" />
        <polygon points="128,178 135,182 135,190 128,194 121,190 121,182" stroke="#FFFFFF" strokeWidth="1.3" fill="none" />
        <text x="146" y="190" dominantBaseline="text-after-edge" fill="#475569" fontSize="11" fontWeight="600" fontFamily="sans-serif">
          {config.orchestratorLabel}
        </text>

        {/* Left Entry Service Tile */}
        {renderTile(36, 232, config.entryNode.label, config.entryNode.sub, config.entryNode.color, config.entryNode.icon, 'entry-node')}

        {/* Arrow from Entry Tile to Process Box 1 */}
        <line
          x1="80"
          y1="254"
          x2="136"
          y2="254"
          stroke="#1E293B"
          strokeWidth="1.4"
          markerEnd={`url(#arrow-dark-${projectId})`}
        />

        {/* 5 Horizontal Process Step Boxes inside Orchestrator */}
        {config.flowSteps.map((step, idx) => {
          const bx = stepXPositions[idx];
          const by = 222;
          const bw = 104;
          const bh = 64;
          return (
            <g key={`flow-step-${idx}`}>
              <rect x={bx} y={by} width={bw} height={bh} fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.3" />
              <text x={bx + 52} y={by + 22} textAnchor="middle" fill="#0F172A" fontSize="10.2" fontWeight="600" fontFamily="sans-serif">
                {step.line1}
              </text>
              <text x={bx + 52} y={by + 36} textAnchor="middle" fill="#0F172A" fontSize="10.2" fontWeight="600" fontFamily="sans-serif">
                {step.line2}
              </text>
              {step.line3 && (
                <text x={bx + 52} y={by + 50} textAnchor="middle" fill="#334155" fontSize="9.5" fontFamily="sans-serif">
                  {step.line3}
                </text>
              )}

              {idx < 4 && (
                <line
                  x1={bx + bw}
                  y1={by + 32}
                  x2={stepXPositions[idx + 1] - 2}
                  y2={by + 32}
                  stroke="#1E293B"
                  strokeWidth="1.4"
                  markerEnd={`url(#arrow-dark-${projectId})`}
                />
              )}
            </g>
          );
        })}

        {/* Conditional Downward Branch from Box 1 */}
        <line
          x1="190"
          y1="286"
          x2="190"
          y2="324"
          stroke="#1E293B"
          strokeWidth="1.3"
          markerEnd={`url(#arrow-dark-${projectId})`}
        />
        <rect x="152" y="295" width="76" height="15" fill="#FFFFFF" />
        <text x="190" y="306" textAnchor="middle" fill="#0F172A" fontSize="9" fontWeight="600" fontFamily="sans-serif">
          {config.branchLabel}
        </text>

        {/* Bottom Row inside Orchestrator */}
        <rect x="138" y="326" width="104" height="58" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.3" />
        <text x="190" y="352" textAnchor="middle" fill="#0F172A" fontSize="10.2" fontWeight="600" fontFamily="sans-serif">
          {config.returnStep2.line1}
        </text>
        <text x="190" y="366" textAnchor="middle" fill="#334155" fontSize="9.5" fontFamily="sans-serif">
          {config.returnStep2.line2}
        </text>

        <rect x="266" y="326" width="104" height="58" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.3" />
        <text x="318" y="352" textAnchor="middle" fill="#0F172A" fontSize="10.2" fontWeight="600" fontFamily="sans-serif">
          {config.returnStep1.line1}
        </text>
        <text x="318" y="366" textAnchor="middle" fill="#334155" fontSize="9.5" fontFamily="sans-serif">
          {config.returnStep1.line2}
        </text>

        {/* Arrow from Output Guardrails to Return Response */}
        <line
          x1="266"
          y1="355"
          x2="244"
          y2="355"
          stroke="#1E293B"
          strokeWidth="1.4"
          markerEnd={`url(#arrow-dark-${projectId})`}
        />

        {/* Arrow from Return Response back to Entry Node */}
        <polyline
          points="138,355 58,355 58,304"
          fill="none"
          stroke="#1E293B"
          strokeWidth="1.3"
          markerEnd={`url(#arrow-dark-${projectId})`}
        />

        {/* Right Model Node outside Orchestrator */}
        {renderTile(
          812,
          232,
          config.rightModelNode.label,
          config.rightModelNode.sub,
          config.rightModelNode.color,
          config.rightModelNode.icon,
          'right-model'
        )}

        {/* Arrow from Box 5 to Right Model Tile */}
        <line
          x1="754"
          y1="254"
          x2="810"
          y2="254"
          stroke="#1E293B"
          strokeWidth="1.4"
          markerEnd={`url(#arrow-dark-${projectId})`}
        />

        {/* Return Path from Right Model Tile into Output Guardrails */}
        <polyline
          points="834,304 834,355 372,355"
          fill="none"
          stroke="#1E293B"
          strokeWidth="1.4"
          markerEnd={`url(#arrow-dark-${projectId})`}
        />

        {/* Bottom Storage / Index Tile below Box 3 */}
        {renderTile(
          424,
          418,
          config.bottomStoreNode.label,
          config.bottomStoreNode.sub,
          config.bottomStoreNode.color,
          config.bottomStoreNode.icon,
          'bottom-store'
        )}

        {/* Vertical Arrow from Box 3 to Bottom Store Tile */}
        <line
          x1="446"
          y1="286"
          x2="446"
          y2="416"
          stroke="#1E293B"
          strokeWidth="1.4"
          markerEnd={`url(#arrow-dark-${projectId})`}
        />

        {/* Numbered Blue Step Badges (1 to 5) inside the Diagram */}
        {renderNumberBadge(82, 218, 1)}
        {renderNumberBadge(242, 192, 2)}
        {renderNumberBadge(456, 304, 3)}
        {renderNumberBadge(500, 192, 4)}
        {renderNumberBadge(628, 192, 5)}
      </svg>
    </div>
  );
};

// ============================================================================
// MAIN BRIGHT-THEME PORTFOLIO APPLICATION
// ============================================================================
export default function App() {
  const [activeNav, setActiveNav] = useState('overview');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCertGroup, setSelectedCertGroup] = useState('all');

  // First project expanded by default
  const [expandedIds, setExpandedIds] = useState(['cs-01']);
  const [pendingCaseId, setPendingCaseId] = useState(null);

  // Optional Architectural Takeaway visibility per project
  const [openTakeaways, setOpenTakeaways] = useState({
    'cs-01': true,
    'cs-02': true,
    'cs-03': true,
    'cs-04': true,
    'cs-05': true,
    'cs-06': true,
    'cs-07': true,
    'cs-08': true,
    'cs-09': true,
    'cs-10': true,
    'cs-11': true,
    'cs-12': true,
    'cs-13': true,
    'cs-14': true
  });

  // Clipboard state for SHA256 copy button
  const [copiedHash, setCopiedHash] = useState(null);

  // Recruiter-Friendly Project Summary & Scope Modal state
  const [summaryModalProject, setSummaryModalProject] = useState(null);

  // Filtered Case Studies
  const filteredCaseStudies = useMemo(() => {
    return CASE_STUDIES.filter((cs) => {
      const matchesCat =
        selectedCategory === 'all' ||
        (selectedCategory === 'ai' && cs.category === 'ai') ||
        (selectedCategory === 'cloud' && cs.category === 'cloud') ||
        (selectedCategory === 'data' && cs.category === 'data');

      const q = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !q ||
        cs.title.toLowerCase().includes(q) ||
        cs.code.toLowerCase().includes(q) ||
        cs.domainBadge.toLowerCase().includes(q) ||
        cs.subtitle.toLowerCase().includes(q) ||
        cs.stack.some((t) => t.toLowerCase().includes(q));

      return matchesCat && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  // Visible Certificate Groups
  const visibleCertGroups = useMemo(() => {
    if (selectedCertGroup === 'all') return CERT_GROUPS;
    return CERT_GROUPS.filter((g) => g.id === selectedCertGroup);
  }, [selectedCertGroup]);

  // Toggle single case study card
  const toggleProject = (id) => {
    setExpandedIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  // Toggle individual project takeaway
  const toggleTakeaway = (id) => {
    setOpenTakeaways((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Open the full case after React has applied the filter and expansion changes.
  const openImplementation = (id) => {
    setSelectedCategory('all');
    setSearchQuery('');
    setExpandedIds((ids) => ids.includes(id) ? ids : [...ids, id]);
    setActiveNav('cases');
    setPendingCaseId(id);
  };

  useEffect(() => {
    if (!pendingCaseId || selectedCategory !== 'all' || searchQuery || !expandedIds.includes(pendingCaseId)) return;
    const article = document.getElementById(`case-${pendingCaseId}`);
    const heading = document.getElementById(`case-title-${pendingCaseId}`);
    if (!article || !heading) return;
    const frame = window.requestAnimationFrame(() => {
      heading.focus({ preventScroll: true });
      article.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        block: 'start'
      });
      setPendingCaseId(null);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pendingCaseId, selectedCategory, searchQuery, expandedIds]);

  // Smooth navigation scroll
  const scrollToSection = (navId, elementId) => {
    setActiveNav(navId);
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Smooth scroll back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Copy SHA256 hash
  const handleCopyHash = (hash, e) => {
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(hash);
    }
    setCopiedHash(hash);
    setTimeout(() => setCopiedHash(null), 2200);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans relative">
      {/* Subtle Daylight Alabaster Dot-Matrix Drafting Canvas */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-65"
        style={{
          backgroundImage: 'radial-gradient(rgba(15, 23, 42, 0.06) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse 85% 65% at 50% 15%, black 45%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 65% at 50% 15%, black 45%, transparent 100%)'
        }}
      />

      {/* =====================================================================
          FIXED RIGHT-HAND SIDE VERTICALLY-ORIENTED LINKEDIN & GITHUB RAIL
      ===================================================================== */}
      <aside
        aria-label="External Profiles"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 pr-0"
      >
        <a
          href="https://www.linkedin.com/in/djessijorge/"
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col items-center justify-center gap-2 py-4 px-2.5 rounded-l-xl bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all"
          title="Connect on LinkedIn"
        >
          <Linkedin className="w-4 h-4 shrink-0" />
          <span
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            className="text-[11px] font-mono font-bold tracking-wider uppercase select-none"
          >
            Connect on LinkedIn
          </span>
        </a>

        <a
          href="https://github.com/djessijorge9-ship-it/architecture-evaluation-portfolio"
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col items-center justify-center gap-2 py-4 px-2.5 rounded-l-xl bg-slate-900 hover:bg-slate-800 text-white shadow-md transition-all"
          title="GitHub Repository"
        >
          <Github className="w-4 h-4 shrink-0" />
          <span
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            className="text-[11px] font-mono font-bold tracking-wider uppercase select-none"
          >
            GitHub
          </span>
        </a>
      </aside>

      {/* =====================================================================
          NON-STICKY BRIGHT-THEME NAVIGATION HEADER (4 CLEAN TABS)
      ===================================================================== */}
      <header className="relative z-30 bg-white border-b border-slate-200 text-[#0F172A]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 pr-14 sm:pr-16 h-20 flex items-center justify-between gap-3 max-lg:h-auto max-lg:min-h-20 max-lg:flex-wrap max-lg:py-4">
          {/* Brand Identity */}
          <button
            onClick={() => scrollToSection('overview', 'section-overview')}
            className="text-left flex items-center gap-2.5 shrink-0"
          >
            <div>
              <span className="font-extrabold tracking-tight text-base sm:text-lg block leading-none text-slate-900">
                DJESSI JORGE
              </span>
              <span className="font-mono text-xs tracking-wider uppercase inline-flex items-center gap-1 mt-0.5 text-slate-500">
                <MapPin className="w-3 h-3 shrink-0" aria-hidden="true" />
                <span>LONDON, UK</span>
              </span>
            </div>
          </button>

          {/* Clean 4-Tab Section Navigation */}
          <nav className="grid grid-cols-2 items-center gap-1 w-full lg:flex lg:w-auto lg:flex-wrap">
            {[
              { id: 'overview', label: 'Overview', target: 'section-overview' },
              { id: 'cases', label: 'System Case Studies', target: 'section-cases' },
              { id: 'credentials', label: 'Verified Credentials', target: 'section-credentials' },
              { id: 'experience', label: 'Enterprise Experience', target: 'section-experience' }
            ].map((item) => {
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id, item.target)}
                  className={`px-4 py-2 rounded-lg text-sm sm:text-[15px] font-medium transition-all ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* =====================================================================
          MAIN PORTFOLIO CONTENT
      ===================================================================== */}
      <main className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 pr-14 sm:pr-16 pt-10 pb-20 space-y-24">
        {/* ===================================================================
            SECTION 1: OVERVIEW, HERO & CORE ARCHITECTURE TRACKS
        =================================================================== */}
        <section id="section-overview" className="scroll-mt-8 space-y-8">
          {/* Core Value Proposition Headline + Primary Action */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.14] text-slate-900">
              Engineer & Architect{' '}
              <span className="text-slate-500 font-semibold">
                building backend, AI and data systems, with a focus on
              </span>{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 bg-clip-text text-transparent">
                performance, running costs and practical results.
              </span>
            </h1>

            <p className="text-base sm:text-lg max-w-4xl leading-relaxed text-slate-600">
              Experienced enterprise IT professional with 12 years across energy, NHS clinical systems and data-centre technical learning. Combines operational leadership and mentoring with practical cloud/AI engineering across AWS, Azure, Python APIs and CI/CD. Independent LLM routing and caching work demonstrated a 65.0% modelled cost saving across a 74-row evaluation ledger, backed by 231 passing unit tests.
            </p>

            {/* Primary Hero Action Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => scrollToSection('cases', 'section-featured')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm sm:text-base font-semibold border border-indigo-200 bg-indigo-50/70 hover:bg-indigo-100/80 text-indigo-700 transition-colors"
              >
                <span>Explore featured implementations</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('credentials', 'section-credentials')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm sm:text-base font-semibold border border-emerald-200 bg-emerald-50/70 hover:bg-emerald-100/80 text-emerald-800 transition-colors"
              >
                <Award className="w-4 h-4 text-emerald-600" />
                <span>View Verified Credentials</span>
              </button>
            </div>
          </div>

          {/* Featured architectural implementations */}
          <section id="section-featured" aria-labelledby="featured-heading" className="scroll-mt-8 rounded-xl border border-slate-200 bg-white p-5 sm:p-6 space-y-5 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="space-y-2 max-w-4xl">
                <h2 id="featured-heading" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  Featured architectural implementations
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                  Cloud networking, Azure delivery and cost-aware AI, with clear implementation scope, design decisions and recorded verification.
                </p>
              </div>
              <button type="button" onClick={() => scrollToSection('cases', 'section-cases')} className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-700 hover:text-indigo-900 underline underline-offset-4">
                View all 14 case studies <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {FEATURED_IMPLEMENTATIONS.map((feature) => {
                const cs = CASE_STUDIES.find((project) => project.id === feature.projectId);
                if (!cs) return null;
                return (
                  <article key={cs.id} aria-labelledby={`featured-${cs.id}`} className="min-w-0 rounded-lg border border-slate-200 border-t-4 border-t-indigo-600 bg-slate-50/70 p-5 flex flex-col gap-4">
                    <div className="space-y-3">
                      <span className="inline-block rounded-md bg-indigo-100 px-2.5 py-1 text-xs font-mono font-bold text-indigo-800">{cs.code}</span>
                      <h3 id={`featured-${cs.id}`} className="text-lg sm:text-xl font-bold leading-snug text-slate-900">{feature.focus}</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {cs.stack.slice(0, 3).map((technology) => (
                          <span key={technology} className="max-w-full rounded-md border border-slate-200 bg-white px-2 py-1 text-xs font-mono text-slate-600">{technology}</span>
                        ))}
                      </div>
                    </div>
                    <dl className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-slate-600">
                      <div>
                        <dt className="mb-1 text-xs font-bold uppercase tracking-wide text-slate-800">Implementation</dt>
                        <dd>{feature.contribution}</dd>
                      </div>
                      <div>
                        <dt className="mb-1 text-xs font-bold uppercase tracking-wide text-slate-800">Design decision</dt>
                        <dd>{feature.decision}</dd>
                      </div>
                    </dl>
                    <div className="mt-auto pt-4 border-t border-slate-200 space-y-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Recorded verification</p>
                        <p className="mt-1 text-lg font-mono font-bold leading-snug text-indigo-700 break-words">{cs.headlineMetric}</p>
                        <p className="mt-1 text-xs sm:text-sm font-mono text-slate-500">{cs.headlineMetricLabel}</p>
                      </div>
                      <button type="button" onClick={() => openImplementation(cs.id)} aria-label={`Open implementation: ${cs.code} ${feature.focus}`} className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Open implementation <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-500">
              Independent academic implementations. Supplied components, assistance and historical verification limits are retained in the project details.
            </p>
          </section>


          {/* CORE ARCHITECTURE & ENGINEERING TRACKS (Static Skill Badges) */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-emerald-600" />
                <h2 className="text-sm sm:text-base font-bold uppercase tracking-wider text-slate-900">
                  Core Architecture & Engineering Tracks
                </h2>
              </div>
              <span className="text-xs font-mono text-slate-500">
                Domain Capabilities & Technical Stack
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {ARCHITECTURE_TRACKS.map((item) => {
                const topBorder =
                  item.accent === 'indigo'
                    ? 'border-t-4 border-t-indigo-600'
                    : item.accent === 'emerald'
                    ? 'border-t-4 border-t-emerald-600'
                    : 'border-t-4 border-t-amber-500';
                const badgeStyle =
                  item.accent === 'indigo'
                    ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                    : item.accent === 'emerald'
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-amber-50 text-amber-800 border-amber-200';

                return (
                  <div
                    key={item.id}
                    className={`rounded-lg border border-slate-200 bg-slate-50/70 p-5 sm:p-6 flex flex-col justify-between space-y-3 ${topBorder}`}
                  >
                    <div className="space-y-2">
                      <span className={`inline-block px-2.5 py-1 rounded text-xs font-mono font-semibold border ${badgeStyle}`}>
                        {item.badge}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900">{item.trackTitle}</h3>
                      <p className="text-sm sm:text-[15px] leading-relaxed text-slate-600">
                        {item.businessValue}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-200">
                      <div className="text-xs font-mono uppercase font-semibold text-slate-500">
                        Core Technologies:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {item.matchedSkills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-md text-xs font-mono border border-slate-200 bg-white text-slate-700 select-none"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="text-xs sm:text-sm font-mono font-semibold text-indigo-600 pt-1">
                        Featured Proof: {item.relevantProjects}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 5 Core Architectural Focus Areas */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <h2 className="text-sm sm:text-base font-mono font-bold uppercase tracking-wider text-slate-900">
                  FOCUS AREAS & ARCHITECTURAL SCOPE
                </h2>
              </div>
              <span className="text-xs font-mono text-slate-500">
                Production & Verified Implementation Scope
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {CORE_CAPABILITIES.map((cap, idx) => {
                const dotColor =
                  cap.accent === 'indigo'
                    ? 'bg-indigo-600'
                    : cap.accent === 'emerald'
                    ? 'bg-emerald-600'
                    : 'bg-amber-500';
                return (
                  <div
                    key={cap.id}
                    className={`p-4 rounded-lg border border-slate-200 bg-slate-50/70 ${
                      idx === 4 ? 'md:col-span-2' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 ${dotColor}`} />
                      <div className="space-y-1">
                        <h3 className="text-base sm:text-lg font-bold leading-snug text-slate-900">{cap.title}</h3>
                        <p className="text-sm sm:text-[15px] leading-relaxed text-slate-600">{cap.detail}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2: SYSTEM CASE STUDIES & ARCHITECTURE DIAGRAMS (CS-01 TO CS-14)
        =================================================================== */}
        <section id="section-cases" className="scroll-mt-24 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border border-indigo-200 bg-indigo-50 text-indigo-700 font-semibold mb-2">
              <span>ENGINEERING & ARCHITECTURE CASE STUDIES (CS-01 TO CS-14)</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              System Architecture Diagrams, Execution & Measured Outcomes
            </h2>
            <p className="text-base mt-1 text-slate-600">
              Each project details the operational challenge, architectural objective, engineering execution, measured outcome, architectural trade-off takeaway, and end-to-end system diagram.
            </p>
          </div>

          {/* Filter & Search Bar */}
          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: 'all', label: 'All Case Studies (14)' },
                { id: 'ai', label: 'Agentic AI & AI Ops (5)' },
                { id: 'cloud', label: 'Cloud & Serverless Architecture (4)' },
                { id: 'data', label: 'Data, Scala, Vision & RevOps (5)' }
              ].map((tab) => {
                const active = selectedCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-mono transition-all border ${
                      active
                        ? 'bg-indigo-600 text-white border-indigo-600 font-semibold shadow-sm'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900 hover:border-slate-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by stack (e.g. Scala, Kafka)..."
                className="w-full px-3.5 pl-8 pr-7 py-2 rounded-lg text-xs sm:text-sm font-mono border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:border-indigo-500 outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* 14 Case Study Cards */}
          <div className="space-y-6">
            {filteredCaseStudies.map((cs) => {
              const isExpanded = expandedIds.includes(cs.id);
              const showTakeaway = openTakeaways[cs.id];

              const leftBorderAccent =
                cs.accent === 'indigo'
                  ? 'border-l-4 border-l-indigo-600'
                  : cs.accent === 'emerald'
                  ? 'border-l-4 border-l-emerald-600'
                  : 'border-l-4 border-l-amber-500';

              const codeBadgeStyle =
                cs.accent === 'indigo'
                  ? 'bg-indigo-600 text-white'
                  : cs.accent === 'emerald'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-amber-500 text-slate-950';

              const domainBadgeStyle =
                cs.accent === 'indigo'
                  ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                  : cs.accent === 'emerald'
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : 'bg-amber-50 text-amber-800 border-amber-200';

              return (
                <article
                  key={cs.id}
                  id={`case-${cs.id}`}
                  aria-labelledby={`case-title-${cs.id}`}
                  className={`scroll-mt-8 rounded-xl border border-slate-200 bg-white shadow-sm transition-all overflow-hidden ${leftBorderAccent}`}
                >
                  {/* Card Header */}
                  <div
                    onClick={() => toggleProject(cs.id)}
                    className="p-5 sm:p-6 cursor-pointer select-none flex flex-col lg:flex-row lg:items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors"
                  >
                    <div className="space-y-2.5 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`px-3 py-1 rounded-md text-xs sm:text-sm font-mono font-extrabold ${codeBadgeStyle}`}>
                          {cs.code}
                        </span>
                        <span className={`px-3 py-1 rounded-md text-xs sm:text-[13px] font-mono font-semibold border ${domainBadgeStyle}`}>
                          {cs.domainBadge}
                        </span>
                      </div>

                      <h3 id={`case-title-${cs.id}`} tabIndex={-1} className="text-xl sm:text-2xl font-bold leading-snug text-slate-900">
                        {cs.title}
                      </h3>
                      <p className="text-sm sm:text-base leading-relaxed text-slate-600">{cs.subtitle}</p>

                      {/* Static Tech Stack Badges */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        {cs.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-md text-xs sm:text-[13px] font-mono border border-slate-200 bg-slate-50 text-slate-700 select-none"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Primary Metric + Explore Project Trigger */}
                    <div className="flex flex-wrap items-center justify-between lg:justify-end gap-5 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100 min-w-0 max-w-full">
                      <div className="text-left lg:text-right min-w-0 max-w-full break-words">
                        <div className="text-lg sm:text-xl font-mono font-extrabold text-indigo-600">
                          {cs.headlineMetric}
                        </div>
                        <div className="text-xs sm:text-sm font-mono text-slate-500">
                          {cs.headlineMetricLabel}
                        </div>
                      </div>

                      <div
                        className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-mono font-semibold border shrink-0 ${
                          isExpanded
                            ? 'bg-indigo-600 text-white border-indigo-600'
                            : 'bg-slate-50 text-slate-700 border-slate-200'
                        }`}
                      >
                        <span>{isExpanded ? 'Close Project' : 'Explore Project'}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Case Study Body */}
                  {isExpanded && (
                    <div className="px-5 sm:px-6 pb-6 pt-5 border-t border-slate-200 bg-slate-50/70 space-y-6">
                      {/* 1. 4-Box Narrative Breakdown */}
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700">
                            PROJECT OVERVIEW & EXECUTION
                          </span>
                          <a
                            href={cs.certUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-emerald-700 hover:text-emerald-800 underline"
                          >
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>Official Certificate: {cs.certName}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Context & Operational Challenge */}
                          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-1.5">
                            <div className="text-xs sm:text-sm font-mono font-bold uppercase text-indigo-700">
                              Context & Operational Challenge
                            </div>
                            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                              {cs.narrative.context}
                            </p>
                          </div>

                          {/* Architectural Objective */}
                          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-1.5">
                            <div className="text-xs sm:text-sm font-mono font-bold uppercase text-sky-700">
                              Architectural Objective
                            </div>
                            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                              {cs.narrative.objective}
                            </p>
                          </div>

                          {/* System Implementation & Engineering Execution */}
                          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2 md:col-span-2">
                            <div className="text-xs sm:text-sm font-mono font-bold uppercase text-emerald-700">
                              System Implementation & Engineering Execution
                            </div>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1">
                              {cs.narrative.execution.map((act, idx) => (
                                <li key={idx} className="text-sm sm:text-base leading-relaxed text-slate-700 flex items-start gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                  <span className="leading-relaxed">{act}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Measured Outcome & Verification Benchmarks */}
                          <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/60 shadow-sm space-y-1.5 md:col-span-2">
                            <div className="text-xs sm:text-sm font-mono font-bold uppercase text-emerald-950">
                              Measured Outcome & Verification Benchmarks
                            </div>
                            <p className="text-sm sm:text-base leading-relaxed font-medium text-slate-800">
                              {cs.narrative.outcome}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 2. Optional Architectural Takeaway */}
                      <div className="rounded-xl border border-amber-300 bg-amber-50/70 overflow-hidden">
                        <button
                          onClick={() => toggleTakeaway(cs.id)}
                          className="w-full px-4 py-3 flex items-center justify-between gap-2 text-left hover:bg-amber-100/50 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
                            <span className="text-xs sm:text-sm font-mono font-bold uppercase text-amber-900">
                              Optional Architectural Takeaway: {cs.takeaway.headline}
                            </span>
                          </div>
                          <span className="text-[11px] font-mono font-semibold text-amber-800 shrink-0">
                            {showTakeaway ? 'Hide Takeaway' : 'Show Takeaway'}
                          </span>
                        </button>

                        {showTakeaway && (
                          <div className="px-4 pb-3.5 pt-1 border-t border-amber-200/80 text-sm sm:text-base text-slate-800 leading-relaxed">
                            {cs.takeaway.tradeoffLesson}
                          </div>
                        )}
                      </div>

                      {/* 3. Project-Aligned Architecture Diagram */}
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700">
                            SYSTEM ARCHITECTURE & WORKFLOW DIAGRAM
                          </span>
                          <span className="text-[11px] font-mono text-slate-500">
                            End-to-End Orchestrator & Service Topology
                          </span>
                        </div>
                        <AwsReferenceArchitectureSVG config={cs.diagramConfig} projectId={cs.id} />
                      </div>

                      {/* 4. Clean Single-Row Executive Evidence Footer */}
                      <div className="p-4 rounded-xl border border-slate-200 bg-white flex flex-col sm:flex-row sm:flex-wrap sm:items-center justify-between gap-4 min-w-0">
                        <div className="space-y-1 min-w-0 max-w-full break-words">
                          <div className="text-sm font-mono font-bold uppercase text-emerald-700">
                            VERIFIED CREDENTIAL & ARCHIVE INTEGRITY
                          </div>
                          <div className="text-sm font-semibold text-slate-800">{cs.evidence.credential}</div>
                          <div className="flex flex-wrap items-center gap-2 pt-0.5">
                            <span className="text-[11px] font-mono text-slate-500">
                              SHA256: {cs.evidence.sha256.slice(0, 18)}...
                            </span>
                            <button
                              onClick={(e) => handleCopyHash(cs.evidence.sha256, e)}
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100"
                            >
                              {copiedHash === cs.evidence.sha256 ? (
                                <>
                                  <Check className="w-3 h-3 text-emerald-600" />
                                  <span>Copied SHA256</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3" />
                                  <span>Copy SHA256</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 min-w-0 max-w-full">
                          <a
                            href={cs.certUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-mono font-semibold border border-emerald-300 max-w-full whitespace-normal text-left bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-colors"
                          >
                            <Award className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Verify Certificate</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>

                          <button
                            onClick={() => setSummaryModalProject(cs)}
                            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-mono font-bold bg-indigo-600 max-w-full whitespace-normal text-left hover:bg-indigo-500 text-white transition-colors"
                          >
                            <FileCode2 className="w-4 h-4" />
                            <span>Project Summary & Scope</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: VERIFIED CREDENTIALS (19 Udacity + 28 Categorized Links)
        =================================================================== */}
        <section id="section-credentials" className="scroll-mt-24 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border border-emerald-200 bg-emerald-50 text-emerald-700 font-semibold mb-2">
              <span>OFFICIAL CERTIFICATE VERIFICATION DIRECTORY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Verified Udacity Nanodegrees, Coursera Specialisations & Certifications
            </h2>
            <p className="text-sm mt-1 text-slate-600">
              47 verified credentials: 19 Udacity Nanodegrees and courses, plus 28 industry credentials. Select any credential below to open its official verification page on Udacity, Coursera, Anthropic, LangChain Academy, DeepLearning.AI, or HubSpot Academy.
            </p>
          </div>

          {/* Card 1: 19 Udacity Graduated Nanodegrees & Courses */}
          <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-600" />
                <h3 className="text-xl font-bold text-slate-900">
                  Udacity Graduated Nanodegrees & Advanced Engineering Certificates (19 Verified)
                </h3>
              </div>
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
                50+ Reviewed Project Archives
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {UDACITY_CERTIFICATES.map((cert) => (
                <a
                  key={cert.url}
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group p-3.5 rounded-lg border border-slate-200 bg-slate-50/70 hover:bg-indigo-50/50 hover:border-indigo-300 transition-all flex flex-col items-start sm:flex-row sm:items-center justify-between gap-3 min-w-0"
                >
                  <div className="space-y-0.5 min-w-0 max-w-full break-words">
                    <div className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-indigo-700 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{cert.title}</span>
                    </div>
                    <div className="text-xs sm:text-[13px] font-mono text-slate-500 pl-5">
                      {cert.category} | Issued {cert.date}
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs sm:text-sm font-mono font-semibold bg-white border border-slate-200 text-indigo-600 group-hover:border-indigo-300 shrink-0">
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Card 2: Coursera Specializations, Anthropic, LangChain, DeepLearning.AI & HubSpot Certifications (28 Verified) */}
          <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <h3 className="text-xl font-bold text-slate-900">
                  Coursera Specialisations, Anthropic, LangChain, DeepLearning.AI & HubSpot Certifications (28 Verified)
                </h3>
              </div>
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                90+ Total Verified Certificates
              </span>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => setSelectedCertGroup('all')}
                className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-mono transition-all border ${
                  selectedCertGroup === 'all'
                    ? 'bg-emerald-600 text-white border-emerald-600 font-semibold shadow-sm'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                All (28)
              </button>
              {CERT_GROUPS.map((grp) => {
                const active = selectedCertGroup === grp.id;
                return (
                  <button
                    key={grp.id}
                    onClick={() => setSelectedCertGroup(grp.id)}
                    className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-mono transition-all border ${
                      active
                        ? 'bg-emerald-600 text-white border-emerald-600 font-semibold shadow-sm'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900 hover:border-slate-300'
                    }`}
                  >
                    {grp.shortLabel}
                  </button>
                );
              })}
            </div>

            {/* Categorized Credential Grids */}
            <div className="space-y-6">
              {visibleCertGroups.map((grp) => {
                const items = COURSERA_AND_INDUSTRY_CERTIFICATES.filter((c) => c.group === grp.id);
                return (
                  <div key={grp.id} className="space-y-2.5">
                    <div className="text-sm font-mono font-bold uppercase tracking-wider text-slate-700 border-l-4 border-l-emerald-600 pl-2.5">
                      {grp.title}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {items.map((cert) => (
                        <a
                          key={cert.url}
                          href={cert.url}
                          target="_blank"
                          rel="noreferrer"
                          className="group p-3.5 rounded-lg border border-slate-200 bg-slate-50/70 hover:bg-emerald-50/50 hover:border-emerald-300 transition-all flex flex-col items-start sm:flex-row sm:items-center justify-between gap-3 min-w-0"
                        >
                          <div className="space-y-0.5 min-w-0 max-w-full break-words">
                            <div className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-800 flex items-center gap-1.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              <span>{cert.title}</span>
                            </div>
                            <div className="text-xs sm:text-[13px] font-mono text-slate-500 pl-5">
                              {cert.issuer} | Issued {cert.date}
                            </div>
                          </div>
                          <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs sm:text-sm font-mono font-semibold bg-white border border-slate-200 text-emerald-700 group-hover:border-emerald-300 shrink-0">
                            <span>Verify</span>
                            <ExternalLink className="w-3 h-3" />
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: QUALITATIVE ENTERPRISE EXPERIENCE TIMELINE (2014–2026)
        =================================================================== */}
        <section id="section-experience" className="scroll-mt-24 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border border-indigo-200 bg-indigo-50 text-indigo-700 font-semibold mb-2">
              <span>ENTERPRISE CAREER TRACK RECORD (2014–2026)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              12 Years of London Enterprise Delivery & Systems Engineering
            </h2>
            <p className="text-sm mt-1 text-slate-600">
              Qualitative, audit-verified operational scope across data-centre infrastructure, segregated energy networks, and NHS clinical systems.
            </p>
          </div>

          <div className="relative pl-6 sm:pl-8 space-y-6 before:content-[''] before:absolute before:left-[11px] sm:before:left-[15px] before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-indigo-600 before:via-sky-500 before:to-emerald-600">
            {ENTERPRISE_TIMELINE.map((item) => {
              const isIndigo = item.accent === 'indigo';
              return (
                <div key={item.period} className="relative">
                  <div
                    className={`w-6 h-6 rounded-full border-4 bg-white absolute -left-6 sm:-left-8 top-5 ${
                      isIndigo ? 'border-indigo-600' : 'border-emerald-600'
                    }`}
                  />

                  <div className="p-5 sm:p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-xs sm:text-sm font-bold text-indigo-600">
                        {item.period} | {item.location}
                      </span>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs sm:text-sm font-mono font-semibold border ${
                          isIndigo
                            ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                            : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        }`}
                      >
                        {item.domainBadge}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {item.role} <span className="text-slate-500 font-semibold">| {item.company}</span>
                    </h3>

                    <p className="text-sm sm:text-base mt-2 mb-3.5 leading-relaxed text-slate-600">
                      {item.summary}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {item.highlights.map((bullet, idx) => (
                        <li key={idx} className="text-sm sm:text-base leading-relaxed text-slate-700 flex items-start gap-2.5">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isIndigo ? 'text-indigo-600' : 'text-emerald-600'
                            }`}
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-md text-xs sm:text-[13px] font-mono border border-slate-200 bg-slate-50 text-slate-700 select-none"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scroll Back to Top Arrow Button at Bottom of Page */}
          <div className="pt-8 flex justify-center">
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 bg-white hover:bg-indigo-50 hover:border-indigo-200 text-slate-700 hover:text-indigo-700 text-xs font-mono font-semibold shadow-sm transition-all"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>
        </section>
      </main>

      {/* Floating Bottom-Right Scroll Back to Top Arrow Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Scroll back to top"
        className="fixed bottom-6 right-4 z-40 p-3 rounded-full bg-white hover:bg-indigo-600 text-slate-700 hover:text-white border border-slate-200 hover:border-indigo-600 shadow-md transition-all"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      {/* =====================================================================
          CLEAN BRIGHT-THEME MODAL: PROJECT SUMMARY & SCOPE
      ===================================================================== */}
      {summaryModalProject && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto"
          onClick={() => setSummaryModalProject(null)}
        >
          <div
            className="max-w-2xl w-full min-w-0 rounded-2xl border border-slate-200 bg-white p-6 space-y-5 shadow-2xl my-0 text-slate-900 max-h-[calc(100dvh-2rem)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                <span className="text-xs font-mono font-bold uppercase text-indigo-700">
                  {summaryModalProject.code} | PROJECT SUMMARY, DELIVERABLES & SCOPE
                </span>
              </div>
              <button
                onClick={() => setSummaryModalProject(null)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-sm sm:text-base">
              {/* Title & Verified Credential */}
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900">
                  {summaryModalProject.title}
                </div>
                <div className="text-xs font-mono mt-0.5 text-slate-500">
                  {summaryModalProject.evidence.credential}
                </div>
              </div>

              {/* Verification Scope Summary */}
              <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/60 space-y-1">
                <div className="text-xs font-mono font-bold uppercase text-emerald-800">
                  Executive Verification Summary
                </div>
                <p className="text-slate-700 leading-relaxed">
                  {summaryModalProject.evidence.scopeSummary}
                </p>
              </div>

              {/* Key Engineering Deliverables */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
                <div className="text-xs font-mono font-bold uppercase text-indigo-700">
                  Key Architectural & Engineering Deliverables
                </div>
                <ul className="space-y-1.5">
                  {summaryModalProject.evidence.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Representative Source Modules & Archive SHA256 */}
              <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                <div className="text-xs font-mono font-bold uppercase text-slate-700">
                  Representative Source Modules & Archive Checksum
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {summaryModalProject.evidence.filesIncluded.map((f) => (
                    <span
                      key={f}
                      className="px-2.5 py-1 rounded-md text-xs sm:text-[13px] font-mono border border-slate-200 bg-slate-50 text-slate-700 max-w-full break-all"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-slate-500 break-all">
                    Archive SHA256: {summaryModalProject.evidence.sha256}
                  </span>
                  <button
                    onClick={(e) => handleCopyHash(summaryModalProject.evidence.sha256, e)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-mono bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 shrink-0"
                  >
                    {copiedHash === summaryModalProject.evidence.sha256 ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>Copied SHA256</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy SHA256</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex flex-wrap justify-between items-center gap-3 pt-2">
                <a
                  href={summaryModalProject.certUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-emerald-700 hover:underline"
                >
                  <Award className="w-4 h-4" />
                  <span>Open Official Certificate Verification</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setSummaryModalProject(null)}
                  className="px-4 py-2 rounded-lg font-mono text-xs bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors"
                >
                  Close Summary
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
