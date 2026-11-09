import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  ArrowUp, ArrowDown, ArrowRight, ArrowUpRight, ChevronDown,
  CheckCircle2, Copy, Check, Search, ShieldCheck, FileCode2,
  MapPin, Linkedin, Github, X, Award, Cloud, Cpu, Database,
  Network, FlaskConical
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
      'Combines two-region private networking, container delivery and event-driven AI coursework with separate IAM, FinOps and multi-account design exercises.',
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
    trackTitle: 'Agentic AI & LLMOps Engineering',
    badge: 'Multi-Agent Systems, Claude SDK & Automated CI/CD',
    accent: 'emerald',
    businessValue:
      'Work covers stateful agents, code-review tooling and five-job MLOps pipelines, with scoped context, drift checks and recorded test and review workflows.',
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
      'Covers lakehouse and streaming coursework, Scala implementations, vision projects and a five-company HubSpot bridge, with validation results kept separate by project and run.',
    matchedSkills: [
      'Apache Kafka, Faust & KSQL',
      'AWS Glue, Iceberg & Athena',
      'Amazon SageMaker & Step Functions',
      'Scala Functional Programming',
      'PyTorch CNN & OpenCV',
      'HubSpot API & Clay Import/Review'
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
    title: 'Multi-Agent AI Systems, Claude SDK & LLMOps',
    detail:
      'Stateful agent workflows, TypeScript Claude Agent SDK specialists, Model Context Protocol tools, semantic caching and tiered LLM routing, with project-specific assistance and validation records.'
  },
  {
    id: 'cap-2',
    accent: 'emerald',
    title: 'Enterprise Data Lakehouses, Event Streaming & Functional Scala',
    detail:
      'Bronze-Silver-Gold lakehouse coursework on AWS Glue, Iceberg and Athena; Kafka/Faust/KSQL and Spark streaming; and 17 Scala assignments with separately recorded checks.'
  },
  {
    id: 'cap-3',
    accent: 'indigo',
    title: 'Cloud Infrastructure, Cross-Region Networking & Container Migration',
    detail:
      'Historical two-region AWS private-network checks, starter-derived Glue/ECS fraud workflows and CloudFormation-managed S3/Lambda/Bedrock summarisation.'
  },
  {
    id: 'cap-4',
    accent: 'amber',
    title: 'CRM Replay Controls & Cloud Governance',
    detail:
      'A Python/SQLite bridge from public-seed Clay import/review to HubSpot, with three recorded repeat runs; separate cloud governance designs and modelled cost comparisons.'
  },
  {
    id: 'cap-5',
    accent: 'emerald',
    title: 'End-to-End MLOps Pipelines & Computer Vision',
    detail:
      'Five-job MLOps CI/CD, a separately validated SageMaker/Step Functions workflow and PyTorch keypoint regression, with delivery, model evaluation and confidence gating kept distinct.'
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
    domainBadge: 'LLM VALIDATION & MODELLED COST ANALYSIS',
    title: 'LLM FAQ Service: Guardrails, Tracing & Bounded Cost Analysis',
    subtitle:
      'AI-assisted additions to a supplied FastAPI and Chroma service, with 231 mocked checks, separate retrieval sweeps and a mixed live/seeded cost comparison.',
    stack: ['Python / FastAPI', 'Supplied Chroma Cache', 'Supplied 2-Tier Router', 'Guard Patterns & Tracing', 'Separate RAGAS Sweeps', '231 Mocked Checks'],
    headlineMetric: '65.0% Modelled Cost Difference',
    headlineMetricLabel: '74 Mixed Rows | Hypothetical Baseline',
    certName: 'AI Ops Engineer Nanodegree',
    certUrl: 'https://www.udacity.com/certificate/e/0d76b32a-d670-11f1-a0db-431d20b60fd0',
    narrative: {
      context:
        'This academic capstone supplied an LLM FAQ service with FastAPI, Chroma retrieval and semantic caching, two-tier model routing, evaluation and scanner infrastructure, and most tests. It was an extension and validation exercise rather than a platform built from an empty repository.',
      objective:
        'Extend the supplied service with catalogue content, input guard patterns and tracing, then compare retrieval settings and historical-price cost scenarios without treating mocked checks or mixed evaluation data as production evidence.',
      execution: [
        'AI-assisted preparation added five catalogue documents and three input patterns to the supplied service. A starter comparison binds nine modified source/data files to the accepted archive; individual change authorship is not established.',
        'Added an exporter and classification, request, retrieval and generation spans. Deliberately malformed ingestion and paired prompt-injection examples were checked separately from routine service tests.',
        'Retained 231 passing tests with Chroma, OpenAI, Phoenix and scanner boundaries mocked. Separate 30-question sweeps favoured k=10 for faithfulness and recall, with lower precision than k=5; the configured default remained k=5.',
        'Compared 74 cost rows against a hypothetical all-gpt-4o baseline. The write-up discloses 38 recorded live calls and 36 seeded synthetic rows; the ledger does not individually flag that split.'
      ],
      outcome:
        'The retained archive records 231 passing tests and a 74-row historical-price comparison of $0.1009 versus a hypothetical $0.2882 baseline, a 65.0% modelled difference. These results do not measure production savings or establish unchanged answer quality.'
    },
    diagramConfig: {
      title: 'Supplied LLM FAQ service with added guard patterns & tracing',
      subtitleLine1:
        'Runtime reference: supplied FastAPI, Chroma cache and two-tier routing, extended with catalogue content, patterns and spans.',
      subtitleLine2:
        'Separate historical checks: 231 mocked tests, 30-question retrieval sweeps and 74 mixed live/seeded cost rows.',
      orchestratorLabel: 'Supplied FastAPI Runtime & Added Trace Instrumentation',
      entryNode: { label: 'FastAPI Gateway', sub: '(Supplied Service)', color: '#7C3AED', icon: 'api' },
      topServices: [
        { label: 'Chroma Cache', sub: '(Supplied Lookup)', color: '#C026D3', icon: 'cache' },
        { label: 'Complexity Router', sub: '(Supplied Rules)', color: '#059669', icon: 'ai' },
        { label: 'gpt-4o-mini', sub: '(Routine Queries)', color: '#059669', icon: 'ai' },
        { label: 'Guard Patterns', sub: '(Added Inputs)', color: '#059669', icon: 'shield' },
        { label: 'Phoenix Tracing', sub: '(Added Spans)', color: '#059669', icon: 'metrics' }
      ],
      flowSteps: [
        { line1: 'Check semantic', line2: 'cache in supplied', line3: 'service runtime' },
        { line1: 'Apply supplied', line2: 'complexity routing', line3: 'rules on a miss' },
        { line1: 'Select mini or', line2: 'gpt-4o provider', line3: 'for model dispatch' },
        { line1: 'Check configured', line2: 'guard patterns &', line3: 'record runtime spans' },
        { line1: 'Retain bounded', line2: 'runtime evidence', line3: 'for separate analysis' }
      ],
      branchLabel: 'Cache lookup branch',
      returnStep1: { line1: 'Reuse cached answer', line2: 'when threshold met' },
      returnStep2: { line1: 'Return FAQ JSON', line2: 'through supplied API' },
      rightModelNode: { label: 'gpt-4o', sub: '(Complex Queries)', color: '#059669', icon: 'ai' },
      bottomStoreNode: { label: 'Separate Evaluations', sub: '(Retrieval / Cost)', color: '#7C3AED', icon: 'search' }
    },
    evidence: {
      credential: 'Udacity AI Ops Engineer Nanodegree (Issued Nov 2, 2026)',
      sha256: '579353dc5062c9ae0ddaff5a99cb79d037f03dde569f4b6d9e1b59cda2e1a2c8',
      deliverables: [
        'Starter comparison identifying five catalogue documents, three input patterns, an exporter and added spans',
        '231 passing service checks with external, vector-store and scanner boundaries mocked',
        'Separate 30-question retrieval sweeps, paired guard examples and malformed-ingestion evidence',
        '74-row mixed live/seeded historical-price analysis: $0.1009 versus a hypothetical $0.2882 baseline'
      ],
      filesIncluded: [
        'src/gateway/app.py',
        'src/gateway/router.py',
        'src/cache/semantic.py',
        'tests/conftest.py',
        'evidence/test.txt',
        'evidence/topk_sweep.log',
        'data/cost_log.jsonl',
        'evidence/cost_report.txt',
        'WRITEUP.md'
      ],
      scopeSummary:
        'Academic, AI-assisted extension of a supplied service. Archive evidence records 231 tests, 74 cost rows and a 65.0% modelled difference. The reviewer separately states 235 tests, 87 rows and 61.9%; that discrepancy remains unresolved and is not substituted for the retained archive results. No production savings, measured scanner accuracy or current availability is established.'
    },
    validationLessons: 'Validation separated 231 passing mocked service checks from historical provider execution. Additions to the supplied service included catalogue data, guard patterns and trace instrumentation; deliberate malformed-ingestion and paired prompt-injection checks were recorded separately. In a 30-question sweep, k=10 versus k=5 raised faithfulness from 0.848 to 0.931 and recall from 0.867 to 0.922, while precision fell from 0.822 to 0.741. The write-up favoured k=10, but the configured default remained k=5. The separate 65.0% modelled cost comparison mixes live and seeded rows against a hypothetical baseline. Retrieval settings, service checks and that mixed cost ledger answer different questions; these bounded experiments establish neither production savings nor a quality guarantee.'
  },
  {
    id: 'cs-02',
    code: 'CS-02',
    category: 'ai',
    accent: 'emerald',
    domainBadge: 'CI/CD VALIDATION & DRIFT GATING',
    title: 'FinBERT Sentiment Service: CI/CD & Deployment Validation',
    subtitle:
      'AI-assisted completion of a supplied API starter around pretrained FinBERT, with five successful historical CI jobs and ECS deployment dispatch rather than a proven completed rollout.',
    stack: ['Pretrained FinBERT', '5-Job GitHub Actions', 'Deepchecks Drift Gates', 'FastAPI', '7 API Tests', 'Docker / ECS Dispatch'],
    headlineMetric: '5 / 5 CI Jobs Passed',
    headlineMetricLabel: 'Historical Run | ECS Dispatch Only',
    certName: 'AI Ops Engineer Nanodegree',
    certUrl: 'https://www.udacity.com/certificate/e/0d76b32a-d670-11f1-a0db-431d20b60fd0',
    narrative: {
      context:
        'This academic project reused pretrained FinBERT weights and an educational dataset. The supplied starter left API and monitoring sections unimplemented; retained work completed endpoint validation, logging, metrics and delivery checks without claiming model fine-tuning or new research.',
      objective:
        'Complete a containerised FastAPI sentiment service and a five-job delivery workflow that checks code, API behaviour and configured drift bounds before image publication and ECS deployment dispatch.',
      execution: [
        'Assistant-operated preparation completed the starter API and monitoring sections, data/evaluation/promotion scripts, drift checks and container workflow. The individual author of each recorded CI correction is unestablished.',
        'Historical CI logs record seven Ruff errors and a later image-output suppression that left deployment without its required image. Recorded commits corrected lint handling and passed an image tag, reconstructing the ECR URI inside deployment.',
        'A later commit narrowed serving dependencies to CPU-only packages. An intervening build failed with its detailed log unavailable, so neither a complete failure sequence nor a controlled packaging-performance improvement is claimed.',
        'The final recorded run passed lint, test, deepchecks, build and deploy. Seven API tests passed in 0.56 seconds; separate model smoke and drift checks recorded property drift 0.4042 below 0.50 and prediction drift 0.2317 below 0.60.'
      ],
      outcome:
        'All five jobs succeeded in the final historical CI run. The retained ECS response still reports rolloutState=IN_PROGRESS, establishing deployment dispatch rather than steady state or present endpoint health. The model smoke result and drift checks are bounded validation, not prediction-accuracy evidence.'
    },
    diagramConfig: {
      title: 'FinBERT CI/CD checks & historically dispatched ECS deployment',
      subtitleLine1:
        'Supplied API starter completed around pretrained FinBERT; five GitHub Actions jobs passed in the retained final run.',
      subtitleLine2:
        'Seven API tests and separate model/drift checks passed; the ECS response remained IN_PROGRESS.',
      orchestratorLabel: 'GitHub Actions Validation, Image Publication & ECS Dispatch',
      entryNode: { label: 'GitHub Workflow', sub: '(Historical Run)', color: '#7C3AED', icon: 'git' },
      topServices: [
        { label: 'params.yaml', sub: '(Configured Bounds)', color: '#C026D3', icon: 'cache' },
        { label: 'Job 1: Lint', sub: '(Code Checks)', color: '#059669', icon: 'ai' },
        { label: 'Job 2: API Tests', sub: '(7 / 0.56s)', color: '#059669', icon: 'ai' },
        { label: 'Job 3: Deepchecks', sub: '(Drift Bounds)', color: '#059669', icon: 'shield' },
        { label: 'Build & Deploy', sub: '(Dispatch Only)', color: '#059669', icon: 'cloud' }
      ],
      flowSteps: [
        { line1: 'Load configured', line2: 'evaluation & drift', line3: 'bounds for checks' },
        { line1: 'Run lint and', line2: 'seven API tests', line3: 'in historical CI' },
        { line1: 'Check property', line2: '0.4042 / 0.50 &', line3: 'pred 0.2317 / 0.60' },
        { line1: 'Build CPU-only', line2: 'serving image &', line3: 'pass image tag' },
        { line1: 'Reconstruct URI', line2: 'and dispatch ECS', line3: 'deployment update' }
      ],
      branchLabel: 'Recorded checks pass',
      returnStep1: { line1: 'Separate model', line2: 'smoke inference' },
      returnStep2: { line1: 'Rollout retained as', line2: 'IN_PROGRESS' },
      rightModelNode: { label: 'Pretrained FinBERT', sub: '(Reused Weights)', color: '#059669', icon: 'ai' },
      bottomStoreNode: { label: 'Historical CI Logs', sub: '(5 Jobs / Drift)', color: '#7C3AED', icon: 'search' }
    },
    evidence: {
      credential: 'Udacity AI Ops Engineer Nanodegree (Issued Nov 2, 2026)',
      sha256: 'b817f0567bc25a8cbc5d6c3395f4f58b36742acaddabdf96529af7bc8a0af6fd',
      deliverables: [
        'Completed starter API and monitoring sections around reused FinBERT weights and an educational dataset',
        'Five-job GitHub Actions workflow with recorded lint and image-tag handoff corrections',
        'Seven API tests passing in 0.56 seconds, plus a separate real-model smoke check',
        'Drift results within configured bounds and a successful deploy job with ECS rollout still IN_PROGRESS'
      ],
      filesIncluded: [
        '.github/workflows/ci-cd.yml',
        'app/main.py',
        'app/utils.py',
        'tests/test_api.py',
        'tests/conftest.py',
        'params.yaml',
        'requirements-api.txt',
        'Dockerfile'
      ],
      scopeSummary:
        'Academic, assistant-operated implementation and historical CI evidence. Five final jobs passed; seven API tests and separate model/drift checks are retained. ECS dispatch succeeded without evidence of completed rollout or present health. Reviewer-only weighted F1 is not presented as a reproduced measurement, and individual CI correction authorship remains unrecorded.'
    },
    validationLessons: 'CI logs exposed two delivery problems: Ruff reported seven errors, and GitHub suppressed an image URI output as potentially secret, leaving deployment without its required image. Recorded commits corrected lint handling and passed only an image tag between jobs, reconstructing the URI within deployment to keep its required input local. Later CPU-only container dependencies narrowed the serving package. The final run passed five jobs, including seven API tests and separate model and drift checks. The specific correction author is unrecorded. CI, drift checks and deployment dispatch provide separate evidence; service readiness still requires an observed completed rollout and health checks, which the successful deploy job does not establish.'
  },
  {
    id: 'cs-03',
    code: 'CS-03',
    category: 'ai',
    accent: 'indigo',
    domainBadge: 'LANGGRAPH VALIDATION & GUARDED SUPPORT TOOLS',
    title: 'UDA-Hub: Tenant-Scoped LangGraph Support Prototype',
    subtitle:
      'Substantially AI-assisted academic implementation using supplied entities, seed data and articles, with weighted lexical retrieval, persistent state and local guarded actions.',
    stack: ['LangGraph / Python', 'Persistent Thread State', 'Weighted Lexical Retrieval', 'Guarded SQLite Tools', '21 Offline Tests', 'Synthetic Provider Scenarios'],
    headlineMetric: '21 Offline Tests | 8 Synthetic Tickets',
    headlineMetricLabel: '25 Historical Provider Requests',
    certName: 'Agentic AI Engineer with LangChain & LangGraph Nanodegree',
    certUrl: 'https://www.udacity.com/certificate/e/7f3f43c0-cd31-11f1-85d2-5797698f73c3',
    narrative: {
      context:
        'UDA-Hub is an academic CultPass support prototype. It reuses supplied SQLAlchemy entities, seed data and four knowledge articles; the supplied sample workflow was not used. Substantial AI assistance supported the new graph, repositories, guarded tools, tests, ten scenario articles and documentation.',
      objective:
        'Implement persistent support conversations with weighted lexical knowledge lookup, tenant-scoped local account actions and structured escalation, then validate deterministic boundaries separately from historical model-provider behaviour.',
      execution: [
        'Implemented a LangGraph workflow over supplied educational data with intent triage, weighted lexical retrieval and structured responses. Retrieval uses lexical weights rather than vector embeddings.',
        'Added persistent thread state and guarded SQLite actions for synthetic accounts. Tenant/user identifiers remain trusted upstream inputs rather than a complete authentication system; cancellations affect the local teaching database only.',
        'Ran 21 offline tests with an injected deterministic model, exercising real graph/repository behaviour, ownership boundaries, exact quotations, invalid output and memory across restarts. Two database-setup notebooks are separate setup evidence.',
        'A separate historical gpt-4o-mini run attempted 25 provider requests across eight synthetic multi-turn tickets and passed ten enumerated scenario assertions, with five tickets resolved and three escalated. These counts are not a production accuracy measure.'
      ],
      outcome:
        'The retained evidence contains 21 passing offline tests and ten passing assertions in the separate eight-ticket provider run. Deliberate ownership and unknown-account errors exercised negative boundaries. Operational confidence is heuristic rather than a calibrated probability, and current availability or customer success is not established.'
    },
    diagramConfig: {
      title: 'UDA-Hub academic LangGraph support prototype & local tools',
      subtitleLine1:
        'AI-assisted graph and guarded tools reuse supplied educational data; retrieval is weighted lexical, not embedding-based.',
      subtitleLine2:
        'Separate evidence: 21 deterministic offline tests and 8 synthetic provider tickets using 25 requests / 10 assertions.',
      orchestratorLabel: 'LangGraph Prototype with Persistent State & Structured Escalation',
      entryNode: { label: 'Synthetic Ticket', sub: '(Trusted IDs)', color: '#7C3AED', icon: 'api' },
      topServices: [
        { label: 'State Checkpointer', sub: '(Thread Memory)', color: '#C026D3', icon: 'cache' },
        { label: 'Intent Classifier', sub: '(Schema Output)', color: '#059669', icon: 'ai' },
        { label: 'Lexical Retrieval', sub: '(Teaching Articles)', color: '#059669', icon: 'ai' },
        { label: 'Local DB Tools', sub: '(Tenant-Scoped)', color: '#059669', icon: 'db' },
        { label: 'Escalation Gate', sub: '(Heuristic Bounds)', color: '#059669', icon: 'shield' }
      ],
      flowSteps: [
        { line1: 'Load persistent', line2: 'thread state for', line3: 'trusted tenant IDs' },
        { line1: 'Classify intent', line2: 'using explicit', line3: 'output schemas' },
        { line1: 'Retrieve lexical', line2: 'matches or invoke', line3: 'guarded local tools' },
        { line1: 'Apply confidence', line2: 'and escalation', line3: 'rules to the result' },
        { line1: 'Record synthetic', line2: 'scenario outcome', line3: 'for bounded checks' }
      ],
      branchLabel: 'Resolution decision',
      returnStep1: { line1: 'Structured', line2: 'escalation record' },
      returnStep2: { line1: 'Return support', line2: 'response JSON' },
      rightModelNode: { label: 'gpt-4o-mini', sub: '(Historical Run)', color: '#059669', icon: 'ai' },
      bottomStoreNode: { label: 'Teaching DB & KB', sub: '(Local / Synthetic)', color: '#7C3AED', icon: 'search' }
    },
    evidence: {
      credential: 'Udacity Agentic AI Engineer Nanodegree (Issued Oct 21, 2026)',
      sha256: 'b349ed54cff77f45996fa850576ad1d916597b316b332821bb1d0e5d18255ae3',
      deliverables: [
        'AI-assisted graph, repositories and tools reusing supplied entities, seed data and four knowledge articles',
        'Persistent thread memory, weighted lexical retrieval and guarded actions in a local synthetic SQLite database',
        '21 passing offline tests using an injected deterministic model and real graph/repository behaviour',
        'Separate eight-ticket provider run: 25 requests, ten scenario assertions, five resolved and three escalated'
      ],
      filesIncluded: [
        'SOURCE-ATTRIBUTION.json',
        'README.txt',
        'agentic/workflow.py',
        'agentic/agents/specialists.py',
        'tests/test_workflow.py',
        'tests/fake_model.py',
        'evidence/offline-test-output.txt',
        'evidence/live-provider-results.json',
        'evidence/live-provider-events.jsonl',
        'evidence/validation-summary.json'
      ],
      scopeSummary:
        'Substantially AI-assisted academic prototype over supplied data. Offline tests inject a deterministic model; the separate historical provider run uses eight synthetic tickets. Trusted upstream identifiers, local actions and heuristic confidence limit the claims. The reported earlier 23-request debugging sequence lacks retained original failures and pre-change prompts, so it is not presented as an independently reconstructed incident.'
    },
    validationLessons: 'AI-assisted implementation and verification used 21 offline tests with an injected deterministic model, followed by a separate eight-ticket course-provider run using 25 requests. Tests covered tenant isolation, guarded account actions, exact quotations, invalid model output and memory across restarts. Persistent state, tenant-scoped tools and exact JSON output schemas made behaviour inspectable; final prompts clarified confidence semantics, while provider traces exercised resolution, escalation, ownership and remembered preferences. Lexical retrieval and confidence thresholds retain limitations. Conservative escalation needs tests alongside successful answers: synthetic resolutions and escalation assertions establish bounded scenario behaviour, not production accuracy, full authentication or calibrated probabilities.'
  },
  {
    id: 'cs-04',
    code: 'CS-04',
    category: 'ai',
    accent: 'emerald',
    domainBadge: 'SDK REVIEW ORCHESTRATION & SOURCE ADJUDICATION',
    title: 'Claude Agent SDK Review CLI: Supplied PRs & Verified Reports',
    subtitle:
      'AI-assisted completion of a supplied TypeScript CLI scaffold, separating Claude specialist drafts, source adjudication and 42 tests with the paid-model boundary mocked.',
    stack: ['Claude Agent SDK', 'TypeScript CLI', '3 Review Specialists', 'Source-Adjudicated Reports', '42 Mocked-Boundary Tests', 'JSON / MD / HTML'],
    headlineMetric: '42 Review-Tool Tests Passed',
    headlineMetricLabel: 'Mocked Boundary | 3 SDK PR Runs',
    certName: 'AI Engineering with Claude Nanodegree',
    certUrl: 'https://www.udacity.com/certificate/e/cc24fb94-d484-11f1-9745-7779ca96d13b',
    narrative: {
      context:
        'This academic project supplied an unimplemented orchestrator alongside Zod, CLI, helper and Skill scaffolding. Supplied teaching pull requests provided review targets. Codex assisted implementation and debugging; separate Claude specialists generated review drafts rather than establishing commercial security findings.',
      objective:
        'Complete a read-only review CLI with constrained tools, head snapshots, schema/completeness checks and deterministic scoring, then compare generated findings against exact source before emitting final reports.',
      execution: [
        'The coding assistant completed SDK orchestration, read-tool allowlists, source snapshots, lint/completeness checks, prompts, safe rendering and tests around the supplied contracts and helpers.',
        'Three Claude specialists reviewed code quality, estimated coverage and proposed refactoring on supplied PR heads. A schema-valid draft falsely claimed an email expression rejected plus-addresses; the assistant checked the exact source, tightened instructions and reran reviews.',
        'Model changes and review attempts remain separate cohorts. A subsequent source-adjudication pass removed speculative security claims and duplicate findings, repaired illustrative tests with inaccessible helpers or invalid fixtures, and recomputed scores without another model run.',
        'Final verification records 42 tool tests with the paid-model boundary mocked and separate SDK execution across three PR heads. Source/head, schema, Skill, lint and total checks covered nine final files: JSON, Markdown and HTML for each head.'
      ],
      outcome:
        'The retained tool suite passed 42 tests, and three historical SDK PR runs produced source-adjudicated final report sets. Nine final files are three formats for three heads, not nine independently accurate model reviews. Suggested target-module tests are illustrative and were not executed as the 42 tool tests.'
    },
    diagramConfig: {
      title: 'Review CLI execution & separate source-adjudication workflow',
      subtitleLine1:
        'AI-assisted completion of supplied scaffolding; Claude specialists draft findings on supplied teaching PR heads.',
      subtitleLine2:
        '42 mocked-boundary tool tests; 3 historical SDK PR runs; separate adjudication yields 9 files in 3 formats.',
      orchestratorLabel: 'Read-Only SDK Review Orchestration & Separately Checked Artefacts',
      entryNode: { label: 'Supplied PR Head', sub: '(Source Snapshot)', color: '#7C3AED', icon: 'git' },
      topServices: [
        { label: 'Read-Tool Guard', sub: '(Allowed Tools)', color: '#C026D3', icon: 'lock' },
        { label: 'Quality Specialist', sub: '(Draft Findings)', color: '#059669', icon: 'ai' },
        { label: 'Coverage Specialist', sub: '(Gap Estimates)', color: '#059669', icon: 'ai' },
        { label: 'Refactor Specialist', sub: '(Proposed Diffs)', color: '#059669', icon: 'ai' },
        { label: 'Final Reports', sub: '(After Adjudication)', color: '#059669', icon: 'metrics' }
      ],
      flowSteps: [
        { line1: 'Snapshot supplied', line2: 'PR head and read', line3: 'bounded source' },
        { line1: 'Run Code Quality', line2: 'specialist for', line3: 'draft findings' },
        { line1: 'Run Coverage &', line2: 'Refactoring for', line3: 'separate estimates' },
        { line1: 'Separately check', line2: 'drafts against', line3: 'the exact source' },
        { line1: 'Recompute scores', line2: 'and emit checked', line3: 'JSON / MD / HTML' }
      ],
      branchLabel: 'Separate validation',
      returnStep1: { line1: 'Check source, schema', line2: 'and head consistency' },
      returnStep2: { line1: 'Retain final reports', line2: '& adjudication record' },
      rightModelNode: { label: 'Claude Agent SDK', sub: '(3 PR Heads)', color: '#059669', icon: 'ai' },
      bottomStoreNode: { label: 'Final Review Files', sub: '(3 Heads / 3 Formats)', color: '#7C3AED', icon: 'search' }
    },
    evidence: {
      credential: 'Udacity AI Engineering with Claude Nanodegree (Issued Oct 31, 2026)',
      sha256: 'd5743f06260b66e0ac6ce9455c1c17b12e9ae143f4056cbcbd0a3c6655326c21',
      deliverables: [
        'AI-assisted SDK orchestrator and constrained read tools around supplied Zod, CLI, helper and Skill scaffolding',
        'Separate raw model attempts, tightened instructions and source-adjudication records for supplied PR heads',
        '42 passing review-tool tests with the paid-model boundary mocked, separate from SDK provider runs',
        'Nine source-adjudicated report files: JSON, Markdown and HTML for three PR heads, with deterministic score checks'
      ],
      filesIncluded: [
        'src/orchestrator.ts',
        'src/prompts/code-quality-analyzer.prompt.ts',
        'tests/orchestrator.test.ts',
        'evidence/adjudication.json',
        'evidence/tests.log',
        'evidence/report-verification.json',
        'evidence/pr-1/source/fixtures/clean-code.ts',
        'README.md'
      ],
      scopeSummary:
        'Academic, assistant-operated implementation, review inspection and adjudication over supplied targets. Claude-generated raw drafts and source-adjudicated final reports are distinct; final structure and tool success do not establish semantic accuracy. The 42 mocked-boundary tests are not executed target-module regression tests. Rejected raw drafts remain in original-workspace provenance outside the accepted archive.'
    },
    validationLessons: 'Real SDK reviews produced schema-valid reports with unsupported findings, including a claim that an email expression rejected plus-addresses. The coding assistant checked the exact PR source, tightened instructions and reran reviews; model changes and attempts remain separate, without a controlled accuracy-improvement claim. Further source adjudication removed speculative security claims and repaired illustrative tests using private helpers or invalid fixtures. Final verification records 42 tool tests with the paid-model boundary mocked and nine consistent reports for three PR heads. Read-tool constraints, valid JSON and deterministic scores bound execution and report structure, not semantic accuracy. Source inspection remains necessary: the supplied mock database and payment examples do not prove real SQL exfiltration, charging or compliance failures.'
  },
  {
    id: 'cs-05',
    code: 'CS-05',
    category: 'cloud',
    accent: 'indigo',
    domainBadge: 'AWS NETWORK VALIDATION & GOVERNANCE DESIGN',
    title: 'Cross-Region AWS Networking & Separate Governance Blueprint',
    subtitle:
      'Codex-assisted academic work: historical private VPC connectivity in one authorised account across two Regions, alongside an undeployed multi-account governance design.',
    stack: ['AWS VPC Peering', 'Explicit Regional Routes', 'Account / Ownership Guards', '8 Mocked Safety Tests', 'Ping & VPC Flow Logs', 'Separate Governance Design'],
    headlineMetric: '2 Regions | Private Connectivity',
    headlineMetricLabel: 'One Account | Governance Blueprint',
    certName: 'AWS Cloud Architect Nanodegree',
    certUrl: 'https://www.udacity.com/certificate/e/d2ed9638-cae4-11f1-bbfe-07a631d7ce6a',
    narrative: {
      context:
        'The supplied fictional Excipient scenario and report template combined network and governance design requirements. The README attributes research, runtime code, tests, reports, diagrams, evidence analysis and packaging to OpenAI Codex; unaided human operation is not established.',
      objective:
        'Validate a private two-Region VPC path within one authorised account, with account/ownership safety checks, while keeping the proposed multi-account OU, SCP, tagging and budget arrangements separate from the live network scope.',
      execution: [
        'Added a Python AWS runtime for non-overlapping VPCs, explicit regional routes, scoped security rules and Flow Logs. The first attempt failed before EC2 launch when the accepter Region could not yet find the peering connection.',
        'Codex added a bounded wait for the specific provider NotFound response, rejected terminal peering states and required active status in both Regions before routes and instances. The failed attempt was retained separately from the later run.',
        'Eight isolated fake-client safety tests passed without AWS service calls. A separate live run on 18 October 2026 recorded both private VMs running, successful ping observations and 12 matching ACCEPT Flow Log records per Region; the initial east-Region ping had 25% packet loss.',
        'Prepared a separate multi-account AWS Organizations, OU, SCP, cost-allocation tagging and budget blueprint. Those controls were designed rather than deployed, and no cross-account operation, failover, RTO, SLA or cost saving was measured.'
      ],
      outcome:
        'Historical observations corroborate private connectivity across two Regions within one authorised account, with bounded packet-loss evidence and matching ACCEPT logs. Eight mocked safety tests support runtime guard behaviour. The governance blueprint is a design artefact; cleanup records do not establish present cloud state.'
    },
    diagramConfig: {
      title: 'Historical one-account network path & separate governance design',
      subtitleLine1:
        'Two-Region private VPC peering with explicit routes and corroborating ping / ACCEPT logs, not automatic route propagation.',
      subtitleLine2:
        'Multi-account OUs, SCPs and FinOps remain design only; no cross-account or failover SLA was demonstrated.',
      orchestratorLabel: 'One-Account Network Runtime with Separate Governance Blueprint',
      entryNode: { label: 'Primary VPC', sub: '(One Account)', color: '#7C3AED', icon: 'cloud' },
      topServices: [
        { label: 'Explicit Routes', sub: '(Remote CIDR)', color: '#C026D3', icon: 'cache' },
        { label: 'VPC Peering', sub: '(Active Both Regions)', color: '#059669', icon: 'api' },
        { label: 'Security Rules', sub: '(Scoped Traffic)', color: '#DC2626', icon: 'shield' },
        { label: 'VPC Flow Logs', sub: '(ACCEPT Evidence)', color: '#059669', icon: 'metrics' },
        { label: 'Governance Plan', sub: '(Design Only)', color: '#059669', icon: 'lock' }
      ],
      flowSteps: [
        { line1: 'Create VPCs in', line2: 'two Regions within', line3: 'one authorised account' },
        { line1: 'Wait for visible', line2: 'peering and active', line3: 'state in both Regions' },
        { line1: 'Configure explicit', line2: 'regional routes &', line3: 'scoped traffic rules' },
        { line1: 'Observe private', line2: 'ping and matching', line3: 'ACCEPT Flow Logs' },
        { line1: 'Retain historical', line2: 'network evidence;', line3: 'governance is separate' }
      ],
      branchLabel: 'Active in both Regions',
      returnStep1: { line1: 'Corroborate ping', line2: 'with ACCEPT records' },
      returnStep2: { line1: 'Retain packet loss', line2: 'and scope limits' },
      rightModelNode: { label: 'Secondary VPC', sub: '(Same Account)', color: '#059669', icon: 'cloud' },
      bottomStoreNode: { label: 'Historical Evidence', sub: '(2 Regions / 1 Account)', color: '#7C3AED', icon: 'search' }
    },
    evidence: {
      credential: 'Udacity AWS Cloud Architect Nanodegree (Issued Oct 30, 2026)',
      sha256: '13c27505568d35b60882a5150ec40b86bf4f076c705133845b865852f20353fe',
      deliverables: [
        'Codex-assisted Python network runtime with account/ownership guards and a bounded peering visibility wait',
        'Eight isolated fake-client safety tests, separate from historical AWS service execution',
        'Two-Region private connectivity observations with 12 matching ACCEPT records per Region and retained initial packet loss',
        'Separate, undeployed multi-account OU, SCP, tagging and budget governance blueprint'
      ],
      filesIncluded: [
        'README.txt',
        'network_runtime.py',
        'test_network_runtime_offline.py',
        'network-runtime-offline-review.json',
        'evidence/network/state.json',
        'evidence/network-r2/observation.json',
        'evidence/network-r2/us-east-1-console-output.txt',
        'DjessiJorge_AWSArchitect_OrganizationInfrastructureProject.pdf'
      ],
      scopeSummary:
        'Codex-assisted academic work with a historical live network run in one authorised account across two Regions. Ping and Flow Logs corroborate private reachability, while the first east-Region ping recorded 25% loss. Eight safety tests used isolated fake clients. Multi-account governance remained a blueprint; cross-account deployment, failover, RTO, SLA, cost savings and current cloud state are unestablished.'
    },
    validationLessons: 'The first live peering attempt failed before EC2 launch when the accepter Region reported the connection as not found. A successful creation response had not made peering immediately visible there. Codex added a bounded, provider-specific visibility wait and required active status in both Regions before routing. Eight isolated mocked safety tests passed; a separate live run recorded private-VM ping success and matching ACCEPT Flow Logs in both Regions. Usable regional state needed corroboration beyond creation alone. These private-connectivity observations do not establish loss-free networking or failover assurances; multi-account governance remained a separate design exercise, and no failover SLA was measured.'
  },
  {
    id: 'cs-06',
    code: 'CS-06',
    category: 'cloud',
    accent: 'amber',
    domainBadge: 'CLOUD MIGRATION & CONTAINERISED API',
    title: 'Starter-Derived Fraud Training, Publication & ECS Serving on AWS',
    subtitle:
      'Three supplied interfaces adapted for Glue model training, immutable S3 publication, triggering-object archival and FastAPI serving, with separately recorded checks.',
    stack: ['AWS Glue & Spark ML', 'FastAPI & Amazon ECS', 'S3 Events & Versioning', 'Immutable Model Publication', 'Docker Containers', 'CloudWatch Logs'],
    headlineMetric: 'Held-out F1: 0.8344',
    headlineMetricLabel: '43,210 test rows | Historical B run',
    certName: 'AWS Cloud Architect Nanodegree',
    certUrl: 'https://www.udacity.com/certificate/e/d2ed9638-cae4-11f1-bbfe-07a631d7ce6a',
    narrative: {
      context:
        'The supplied fraud-training, model-loading and refresh interfaces need explicit feature contracts, traceable source-to-model publication and separate evidence that the trained model can be served. A notification-window failure is retained as prior attempt history with an unverified cause.',
      objective:
        'Complete the three starter interfaces, separate training-only preprocessing from held-out evaluation, and bind event handling, model publication, archival and ECS serving to recorded source identities.',
      execution: [
        'Codex-assisted source adaptation completed the Glue trainer, FastAPI loader and refresh function. Fixed Class 0/1 labels, feature-only request validation and training-only preprocessing preserve the model contract; 12 offline mocked checks cover these interfaces without executing AWS services.',
        'The source-bound B run trained a Spark Random Forest pipeline on 284,807 retained rows with a feature-group 70/15/15 split. The full input inventory records keys, ETags and sizes; it is not a transactionally locked, version-pinned dataset.',
        'The refresh path journals before starting Glue, deduplicates events and archives the triggering object only after successful model publication. Immutable model paths and pointers are retained; the triggering archive copy is pinned to its S3 VersionId.',
        'Separate ECS records retain two localhost HTTP smoke probes. A native 16-row Docker fixture, mocked interface tests, earlier attempts and the B training run remain distinct execution cohorts.'
      ],
      outcome:
        'The B run records F1 0.8344, PR-AUC 0.8082 and ROC-AUC 0.9821 on 43,210 held-out rows. Two localhost probes inside the ECS task returned HTTP 200 and checked functional delivery, not holdout accuracy. The earlier notification-window account has no proven cause; neither the later run nor its waiting barrier establishes a controlled before-and-after improvement or current endpoint availability.'
    },
    diagramConfig: {
      title: 'Source-bound fraud training, publication & ECS serving workflow',
      subtitleLine1:
        'Three supplied interfaces link S3 events, Glue training, immutable model publication and FastAPI serving.',
      subtitleLine2:
        'B-run holdout metrics, 12 mocked checks, a native fixture and two HTTP probes are separate historical cohorts.',
      orchestratorLabel: 'EVENT JOURNAL | TRAIN | PUBLISH | ARCHIVE | SERVE',
      entryNode: { label: 'S3 Object Event', sub: '(Trigger version)', color: '#7C3AED', icon: 'db' },
      topServices: [
        { label: 'S3 Event Journal', sub: '(Deduplication)', color: '#C026D3', icon: 'lock' },
        { label: 'Glue / Spark ML', sub: '(Train-only prep)', color: '#059669', icon: 'ai' },
        { label: 'Model Publication', sub: '(Immutable output)', color: '#059669', icon: 'cache' },
        { label: 'Amazon ECR / ECS', sub: '(FastAPI serving)', color: '#059669', icon: 'cloud' },
        { label: 'Source Receipts', sub: '(Separate checks)', color: '#EA580C', icon: 'metrics' }
      ],
      flowSteps: [
        { line1: 'Validate event', line2: 'and journal before', line3: 'one Glue start' },
        { line1: 'Train on retained', line2: 'source inventory', line3: '284,807 rows' },
        { line1: 'Publish model', line2: 'before successful', line3: 'completion archive' },
        { line1: 'Archive triggering', line2: 'object\'s exact', line3: 'S3 VersionId' },
        { line1: 'Load run model', line2: 'in ECS and probe', line3: 'localhost HTTP' }
      ],
      branchLabel: 'Separate checks',
      returnStep1: { line1: 'Keep held-out F1', line2: 'separate from HTTP' },
      returnStep2: { line1: 'Check source and', line2: 'model bindings' },
      rightModelNode: { label: 'FastAPI in ECS', sub: '(2 HTTP 200 probes)', color: '#059669', icon: 'api' },
      bottomStoreNode: { label: 'S3 Model Store', sub: '(Run-bound outputs)', color: '#7C3AED', icon: 'search' }
    },
    evidence: {
      credential: 'Udacity AWS Cloud Architect Nanodegree (Issued Oct 30, 2026)',
      sha256: '5d719209b8d4cb65be5c84ba1738afb83facb933c8c7b58c959b7c50408788f4',
      deliverables: [
        'Three completed starter interfaces for Glue training, FastAPI model loading and refresh/event handling, with substantial Codex assistance disclosed.',
        'Twelve offline mocked interface checks and a separate native 16-row Docker compatibility fixture.',
        'Source-bound B training metrics for 284,807 source rows and a 43,210-row holdout, without a before-and-after improvement claim.',
        'Immutable model publication, triggering-version archive receipts and two functional-only localhost HTTP probes inside ECS.'
      ],
      filesIncluded: [
        'completed_starter/fraud_detector_model_trainer.py',
        'completed_starter/fraud_detection_api/main.py',
        'completed_starter/refresh_function.py',
        'completed_starter/Dockerfile',
        'evidence/ATTEMPT-HISTORY.json',
        'evidence/audits/completed-starter-offline-tests.json',
        'evidence/runtime-b/train-metrics.json',
        'evidence/runtime-b/actual-http-smoke.json',
        'evidence/runtime-b/new-source-runtime-proof.json'
      ],
      scopeSummary:
        'Academic, starter-derived implementation with substantial Codex assistance disclosed. The earlier notification-window account, source-bound B training, mocked tests, native fixture and HTTP probes are separate records. The full training inventory is not transactionally version-locked; HTTP 200 does not establish predictive accuracy, production reliability or current service availability.'
    },
    validationLessons: 'Codex adapted three supplied starter interfaces and used 12 mocked tests to check schemas, event deduplication and publication/archive ordering. An attempt-history record reports no observed notification within the allotted window; the original runtime and cause remain unverified. A separate, source-bound run processed 284,807 source rows, recorded held-out F1 of 0.8344 and served two HTTP 200 smoke probes, which checked delivery rather than accuracy. Immutable model outputs and an event journal made state transitions inspectable; exact-version archival protected the triggering object without locking the whole training inventory. Training, publication, archival, predictive quality and serving need separate checks and execution cohorts. These classroom records establish no production fraud-decision, throughput or latency guarantee.'
  },
  {
    id: 'cs-07',
    code: 'CS-07',
    category: 'cloud',
    accent: 'amber',
    domainBadge: 'SERVERLESS AI & CLOUDFORMATION IAC',
    title: 'Event-Driven AI Document Summarisation with CloudFormation & Amazon Bedrock',
    subtitle:
      'CloudFormation-defined S3 notifications, Lambda and Amazon Nova Micro on Bedrock, with encrypted output and source-matched historical deployment receipts.',
    stack: ['Amazon Bedrock / Nova Micro', 'AWS CloudFormation', 'AWS Lambda', 'Amazon S3 Events', 'Least-Privilege IAM', 'FinOps Proposals'],
    headlineMetric: '13,932 Input / 447 Output Tokens',
    headlineMetricLabel: 'Recorded final document run',
    certName: 'AWS Cloud Architect Nanodegree',
    certUrl: 'https://www.udacity.com/certificate/e/d2ed9638-cae4-11f1-bbfe-07a631d7ce6a',
    narrative: {
      context:
        'The supplied document scenario requires a traceable upload-to-summary path with encrypted storage, scoped permissions and distinct input/output buckets. Storage and inference cost options need to be explained separately from the implemented workload.',
      objective:
        'Validate a CloudFormation-defined S3-to-Lambda-to-Bedrock workflow against its deployed source and saved encrypted output, while keeping proposed optimisations and generated-text quality outside the deployment-success claim.',
      execution: [
        'The retained template and Lambda source define separate input/output buckets, public-access blocks, AES256 encryption and scoped execution permissions. Output writes do not target the input notification bucket.',
        'The handler accepts supported S3 ObjectCreated events for plaintext inputs, bounds the actual read to 100,000 bytes, invokes Amazon Nova Micro through Bedrock and stores the resulting summary.',
        'CloudFormation validation, final UPDATE_COMPLETE receipts and local/deployed source hashes were compared. A saved upload after the final update produced a new output object from the matching source.',
        'The report proposes lifecycle tiering, selective storage changes, reuse/caching and batch inference. These options were not demonstrated as implemented savings, and the roughly 70 KB sample is below the cited Intelligent-Tiering eligibility threshold.'
      ],
      outcome:
        'The final workflow receipt records a 69,854-byte input and a fresh saved output at 2026-10-30 09:20:28 UTC, bound to deployed code/template hashes. Recorded usage is 13,932 input and 447 output tokens. This verifies event delivery and persisted output, not legal factual accuracy or cost savings. An earlier Lambda log is a separate execution; the reported ten local tests lack an independently retained raw test log.'
    },
    diagramConfig: {
      title: 'Event-driven Amazon Bedrock workload modernisation with CloudFormation',
      subtitleLine1:
        'CloudFormation connects encrypted S3 input, Lambda and Nova Micro on Bedrock to a separate encrypted output bucket.',
      subtitleLine2:
        'The final source-matched receipt records 13,932 input and 447 output tokens; cost optimisations remain proposals.',
      orchestratorLabel: 'CloudFormation Serverless S3 + Lambda + Bedrock Orchestrator',
      entryNode: { label: 'S3 Input Bucket', sub: '(Document Upload)', color: '#7C3AED', icon: 'db' },
      topServices: [
        { label: 'CloudFormation', sub: '(IaC Templates)', color: '#C026D3', icon: 'cloud' },
        { label: 'IAM Execution Role', sub: '(Scoped Policy)', color: '#DC2626', icon: 'lock' },
        { label: 'AWS Lambda', sub: '(Event Orchestrator)', color: '#EA580C', icon: 'api' },
        { label: 'CloudWatch Logs', sub: '(Execution Trace)', color: '#059669', icon: 'metrics' },
        { label: 'Workflow Receipt', sub: '(Hashes + token use)', color: '#059669', icon: 'cache' }
      ],
      flowSteps: [
        { line1: 'Provision S3, IAM', line2: 'and Lambda through', line3: 'CloudFormation' },
        { line1: 'Upload plaintext', line2: 'to the input S3', line3: 'notification path' },
        { line1: 'Validate event', line2: 'and bound the read', line3: 'to 100,000 bytes' },
        { line1: 'Invoke Nova Micro', line2: 'through Amazon', line3: 'Bedrock' },
        { line1: 'Persist encrypted', line2: 'summary and retain', line3: 'source receipts' }
      ],
      branchLabel: 'Event-driven',
      returnStep1: { line1: 'Check output and', line2: 'source identities' },
      returnStep2: { line1: 'Save encrypted', line2: 'summary object' },
      rightModelNode: { label: 'Amazon Nova Micro', sub: '(Via Bedrock)', color: '#059669', icon: 'ai' },
      bottomStoreNode: { label: 'S3 Summary Output', sub: '(AES256-encrypted)', color: '#7C3AED', icon: 'search' }
    },
    evidence: {
      credential: 'Udacity AWS Cloud Architect Nanodegree (Issued Oct 30, 2026)',
      sha256: '45d71a891038d67813ef83f7dac11462bf2be5c8073405678853952eedc2bc77',
      deliverables: [
        'CloudFormation template and Lambda source for bounded plaintext input, scoped IAM, separate AES256-encrypted S3 buckets and Bedrock invocation.',
        'Provider template-validation response and final deployment/output receipts bound to matching code and template hashes.',
        'A recorded final upload/output sequence with 13,932 input and 447 output tokens, separate from the earlier Lambda execution log.',
        'Storage and inference optimisation proposals, with sample-size limits and no implemented cost-saving claim.'
      ],
      filesIncluded: [
        'template.yaml',
        'lambda_function.py',
        'project_answers.md',
        'evidence/template-validation.json',
        'evidence/workflow-verification.json',
        'evidence/lambda-logs.json'
      ],
      scopeSummary:
        'Historical academic validation of the source-matched S3 notification, Lambda, Bedrock and encrypted-output chain. Per-action author attribution and a raw log for the reported local test count are not established. Proposal-only cost strategies, generated-text accuracy and current cloud availability remain outside the verified deployment account.'
    },
    validationLessons: 'Validation followed the document from S3 notification through Lambda and Bedrock to an encrypted output object. Separate buckets and bounded reads made the event path inspectable and avoided output-trigger recursion. CloudFormation validation and deployment receipts were checked alongside source hashes; an upload after the final update produced a saved summary from matching code, recording 13,932 input and 447 output tokens. These checks establish event delivery, not legal correctness. Lifecycle policies, caching and batch inference remained proposed optimisations requiring implementation and measurement before any storage, inference or idle-cost saving can be claimed. Deployment correctness, generated-text quality and future cost claims each need their own validation.'
  },
  {
    id: 'cs-08',
    code: 'CS-08',
    category: 'data',
    accent: 'emerald',
    domainBadge: 'DATA ENGINEERING & MEDALLION LAKEHOUSE',
    title: 'Exastore Medallion Data Lakehouse on AWS Glue, Iceberg & Athena',
    subtitle:
      'A batch Iceberg lakehouse over supplied CDC and event JSON, with tolerant timestamp handling, distinct materialised snapshots and retained Athena history queries.',
    stack: ['AWS Glue', 'Apache Iceberg', 'Amazon Athena (25 Queries)', 'Amazon S3 & S3 Tables', 'Bronze-Silver-Gold', 'Batch CDC & Snapshots'],
    headlineMetric: '5 Glue Runs & 25 Athena Queries',
    headlineMetricLabel: 'Historical batch runs | Distinct snapshots',
    certName: 'Data Engineering with AWS Nanodegree',
    certUrl: 'https://www.udacity.com/certificate/e/7409073a-d07d-11f1-b53e-4b451568887b',
    narrative: {
      context:
        'The supplied e-commerce CDC and event JSON includes invalid calendar values and records with different analytical eligibility. Raw retention, filtered analytics and later CDC changes need explicit snapshot and revenue definitions.',
      objective:
        'Process the supplied data through Bronze, Silver and Gold Iceberg layers, retain quality counters and historical queries, and explain which snapshot each row count and revenue metric represents.',
      execution: [
        'Four completed Glue scripts use supplied notebooks, scaffolding and datasets. Initial Bronze outputs retain 2,133 orders, 912 users, 391 products and 498 valid events; unchanged raw files remain available for inspection.',
        'Tolerant timestamp casts preserve affected CDC rows with null timestamps, while unsuitable analytics rows are excluded downstream. Source records include invalid dates such as 29 February 2025; no retained pre-fix exception establishes a crash-and-repair sequence.',
        'The initial Silver materialisation contains 2,019 order-details rows. Gold contains 13 monthly and 491 event-hour rows. Their order-detail and event-price revenue measures describe different populations and definitions.',
        'A later supplemental CDC demonstration changes Bronze orders from 2,133 to 2,131 and products from 391 to 393. Silver and Gold retain the earlier materialisation; history/time-travel queries compare the Bronze states separately.'
      ],
      outcome:
        'The execution ledger records five Glue runs and 25 Athena queries, all SUCCEEDED. Historical Bronze order revenue is 556,462.16 across 2,133 orders versus 555,744.83 across 2,131 later orders. These are distinct from Silver/Gold revenue definitions. Successful jobs and retained snapshots do not establish a refreshed end-to-end reconciliation, and no independent local SQL-test log or exact eight-gate suite is asserted.'
    },
    diagramConfig: {
      title: 'Exastore Medallion data lakehouse on AWS Glue, Iceberg & Athena',
      subtitleLine1:
        'Initial Bronze, Silver and Gold materialisations are separate from a later Bronze-only CDC demonstration.',
      subtitleLine2:
        'Five Glue runs and 25 Athena queries succeeded; row populations, revenue definitions and snapshot times remain explicit.',
      orchestratorLabel: 'AWS Glue & Apache Iceberg Medallion Lakehouse Orchestrator',
      entryNode: { label: 'Supplied JSON', sub: '(CDC and events)', color: '#7C3AED', icon: 'db' },
      topServices: [
        { label: 'Glue Data Catalog', sub: '(Iceberg Metadata)', color: '#C026D3', icon: 'cache' },
        { label: 'Initial Bronze', sub: '(2,133 orders)', color: '#059669', icon: 'db' },
        { label: 'Silver Snapshot', sub: '(2,019 order details)', color: '#059669', icon: 'ai' },
        { label: 'Later Bronze CDC', sub: '(2,131 orders)', color: '#059669', icon: 'shield' },
        { label: 'Gold Snapshot', sub: '(13 mo / 491 rows)', color: '#059669', icon: 'metrics' }
      ],
      flowSteps: [
        { line1: 'Load raw JSON', line2: 'and retain initial', line3: 'Bronze records' },
        { line1: 'Parse tolerantly', line2: 'and filter Silver', line3: '(2,019 details)' },
        { line1: 'Materialise Gold', line2: '13 monthly rows /', line3: '491 hourly rows' },
        { line1: 'Apply later CDC', line2: 'to Bronze only', line3: '2,133 to 2,131' },
        { line1: 'Query history and', line2: 'keep each snapshot', line3: 'scope explicit' }
      ],
      branchLabel: 'Distinct snapshots',
      returnStep1: { line1: 'Keep Silver/Gold', line2: 'at earlier snapshot' },
      returnStep2: { line1: 'Explain filtered', line2: 'rows and revenue' },
      rightModelNode: { label: 'Amazon Athena', sub: '(25 SQL Queries)', color: '#059669', icon: 'search' },
      bottomStoreNode: { label: 'S3 Iceberg Tables', sub: '(Bronze/Silver/Gold)', color: '#7C3AED', icon: 'db' }
    },
    evidence: {
      credential: 'Udacity Data Engineering with AWS Nanodegree (Issued Oct 30, 2026)',
      sha256: 'eee46fe24e5bbc3e538330519d9545001d0e55a4e1f3d9bc4ce28db4af36beb6',
      deliverables: [
        'Four batch Glue scripts for Bronze CDC/event ingestion, Silver enrichment and Gold aggregation over supplied data.',
        'Tolerant timestamp casts, explicit downstream eligibility filters and raw-source retention, without an invented pre-fix crash.',
        'Initial Silver/Gold materialisation and a separate later Bronze CDC/history demonstration with documented row and revenue definitions.',
        'Five successful Glue runs and 25 successful Athena queries in the retained execution ledger; no independently retained local SQL-test result is claimed.'
      ],
      filesIncluded: [
        'glue-jobs/cdc-batch/src/iceberg-cdc-bronze-layer.py',
        'glue-jobs/events/src/iceberg-events-bronze-layer.py',
        'glue-jobs/silver/src/iceberg-silver-layer.py',
        'glue-jobs/gold/src/iceberg-gold-layer.py',
        'runtime/execution-ledger.json',
        'runtime/bronze-phase.log',
        'runtime/final-phase.log',
        'runtime/table-summary.csv'
      ],
      scopeSummary:
        'Supplied academic datasets, notebooks and scaffolding underpin this bounded batch lakehouse. Per-action human/AI authorship is not established by the package. Five Glue/25 Athena completions and separately scoped initial/later counts are retained; no current cloud state, complete downstream CDC refresh, general replay guarantee or measured cost saving is claimed.'
    },
    validationLessons: 'Malformed calendar values in the supplied data were handled with tolerant timestamp casts, retaining raw records without rejecting the entire batch. Silver analytics excluded unsuitable timestamps, and saved outputs explained the row-count differences. Five Glue runs and 25 Athena queries completed successfully. Later Bronze CDC changed orders from 2,133 to 2,131, while Silver and Gold retained their earlier materialised snapshot. Deleted keys have no retained tombstones, making older-base replay unsafe. Rejected records, snapshot boundaries and revenue definitions therefore need explicit treatment: successful jobs and differing totals do not establish end-to-end reconciliation. This bounded batch design is neither a durable streaming checkpoint nor evidence of measured all-service savings.'
  },
  {
    id: 'cs-09',
    code: 'CS-09',
    category: 'data',
    accent: 'indigo',
    domainBadge: 'REAL-TIME EVENT STREAMING',
    title: 'Public Transit Event Counts & STEDI Customer/Risk Streaming',
    subtitle:
      'Two independent classroom implementations: Kafka/Faust/KSQL transit aggregation and a Spark stream-stream join between Redis customer demographics and supplied STEDI risk scores.',
    stack: ['Apache Kafka & Avro', 'Faust & KSQL', 'Spark 2.4.6 / PySpark', 'Redis Customer Data', 'Schema Registry & Kafka Connect', 'Plain-JSON Topic Sinks'],
    headlineMetric: '36,002 Transit Rider Events',
    headlineMetricLabel: 'Exact replay match | 5 separate Spark checks',
    certName: 'Data Streaming Nanodegree (Kafka & Spark)',
    certUrl: 'https://www.udacity.com/certificate/e/ce6e6422-d041-11f1-bbc9-23cf1ca0d113',
    narrative: {
      context:
        'The supplied transit simulator needs correct rider-event identity and aggregation. The separate STEDI application needs customer-demographic envelopes joined to supplied risk events by email; neither implementation is a wearable-sensor or consent ETL pipeline.',
      objective:
        'Complete the supplied Kafka/Faust/KSQL and Spark interfaces, validate each wire/output contract and keep event counts, synthetic-fixture tests and small classroom application samples in their own evidence cohorts.',
      execution: [
        'Transit producers use Registry-backed Avro for arrivals, turnstiles and weather. PostgreSQL/Kafka Connect station messages are plain JSON; manually registered Avro subjects describe logical station fields, not automatic Registry enforcement of those JSON wire records.',
        'The retained KSQL provider error identifies a missing table KEY. Final source declares event_id and KEY=event_id, emits one uniquely keyed event per rider, and groups by station_id. Later configuration and frozen-offset replay records verify recovery without identifying an undocumented actor or patch conversation.',
        'STEDI native Spark transforms decode all entries from Redis customer envelopes, select one live-write alias or initial snapshot array, validate demographics/risk fields and inner-join email/customer across two streams. Kafka output contains customer, score, email and birthYear.',
        'Five native Spark tests use synthetic fixtures, including both input arrival orders. A separate distributed classroom run records five matched messages for one customer. Its unwatermarked join retains customer state, and one batch took 11.447 seconds against a five-second trigger interval.'
      ],
      outcome:
        'The frozen-offset transit check matches 36,002 raw rider events to 36,002 summary riders across 92 unique station IDs, with no differences and a stable source. Separate service readback records 230 stops and 111 physical stations; 94 displayed line memberships are not 94 unique stations. STEDI has five passing native Spark tests in 42.946 seconds and five application messages for one customer. These counts do not establish transit demand, medical-model accuracy, bounded production state or a latency guarantee.'
    },
    diagramConfig: {
      title: 'Independent Kafka/Faust/KSQL transit & Spark demographics/risk streaming',
      subtitleLine1:
        'Transit uses Avro events and plain-JSON stations; STEDI joins Redis customer demographics with supplied risk scores.',
      subtitleLine2:
        'Arrows show a shared validation pattern, not an integrated system; counts and state limits remain implementation-specific.',
      orchestratorLabel: 'COMMON PATTERN | TRANSIT AND STEDI RUN SEPARATELY',
      entryNode: { label: 'Selected Workflow', sub: '(Transit or STEDI)', color: '#7C3AED', icon: 'api' },
      topServices: [
        { label: 'Transit Avro', sub: '(Registry-backed)', color: '#C026D3', icon: 'cache' },
        { label: 'Transit Connect', sub: '(Plain-JSON stations)', color: '#059669', icon: 'db' },
        { label: 'Faust + KSQL', sub: '(Transit counts)', color: '#059669', icon: 'ai' },
        { label: 'Redis Customers', sub: '(STEDI demographics)', color: '#059669', icon: 'metrics' },
        { label: 'Spark Inner Join', sub: '(STEDI risk events)', color: '#EA580C', icon: 'cloud' }
      ],
      flowSteps: [
        { line1: 'Select workflow', line2: 'and its supplied', line3: 'training inputs' },
        { line1: 'Decode records', line2: 'using that input', line3: 'contract' },
        { line1: 'Preserve identity', line2: 'event_id or', line3: 'customer email' },
        { line1: 'Aggregate transit', line2: 'or join STEDI', line3: 'streams separately' },
        { line1: 'Check selected', line2: 'counts / JSON keys', line3: 'against evidence' }
      ],
      branchLabel: 'Separate cohorts',
      returnStep1: { line1: 'Compare transit', line2: 'frozen-offset counts' },
      returnStep2: { line1: 'Check STEDI join', line2: 'and state limits' },
      rightModelNode: { label: 'Kafka + Training UI', sub: '(Separate outputs)', color: '#059669', icon: 'search' },
      bottomStoreNode: { label: 'Retained Kafka Data', sub: '(Avro / plain JSON)', color: '#7C3AED', icon: 'db' }
    },
    evidence: {
      credential: 'Udacity Data Streaming Nanodegree (Issued Oct 25, 2026)',
      sha256: '17dee699f7a88e9276fad12482b1fa0ecf8498bb06d08d1aedd0b72ddee374e0',
      deliverables: [
        'Supplied transit integration with Avro event producers, plain-JSON station records, Faust processing and explicitly keyed KSQL rider aggregation.',
        'Retained missing-KEY provider failure, final query/source bindings and a later exact 36,002-event frozen-offset replay match.',
        'Separate ND029 STEDI customer-demographic/risk stream-stream join, Redis envelope handling and exact customer/score/email/birthYear Kafka contract.',
        'Five native Spark synthetic-fixture checks plus a separate five-message, one-customer classroom sample, with unbounded join-state and batch-lag limits disclosed.'
      ],
      filesIncluded: [
        'producers/models/turnstile.py',
        'consumers/faust_stream.py',
        'consumers/ksql.py',
        'runtime-evidence/ksql-create-response.json',
        'runtime-evidence/exact-count-validation-final.json',
        'project/starter/streaming_common.py',
        'project/starter/sparkpykafkajoin.py',
        'tests/test_transformations.py',
        'spark/logs/transformation-tests.log',
        'evidence/enriched-risk-sample.jsonl'
      ],
      scopeSummary:
        'Two separate supplied classroom implementations, with original actor-level authoring and patch attribution unverified. Transit Avro events and plain-JSON station metadata have different validation boundaries. STEDI joins customer demographics and supplied risk scores, not accelerometer/step-trainer/consent ETL. Synthetic fixtures, frozen-offset counts and the one-customer application sample are distinct historical cohorts, without production or medical guarantees.'
    },
    validationLessons: 'A saved KSQL error identified a missing table key in the transit pipeline. The retained query declares event identity explicitly; a later frozen-offset replay matched 36,002 rider events across 92 stations exactly. The separate STEDI implementation passed five native Spark tests and emitted five matched events for one customer. Its unwatermarked stream-stream join retains customer state for later risk matches, without a production retention bound. Transit counts require one event per rider and an explicit key; topic existence alone does not prove counts. STEDI needs both arrival orders and the downstream JSON contract checked. These classroom records require separate identity, aggregation and output checks; neither the trigger interval nor the results establish a latency guarantee, optimal engine choice or throughput comparison.'
  },
  {
    id: 'cs-10',
    code: 'CS-10',
    category: 'data',
    accent: 'indigo',
    domainBadge: 'SCALA FUNCTIONAL PROGRAMMING & SPARK',
    title: 'EPFL Scala: Functional, Parallel & Spark Coursework Implementations',
    subtitle:
      'Seventeen separate AI-assisted assignment implementations across five courses, with 265 recorded test passes summed across distinct suites and explicit full-run/rendering limits.',
    stack: ['Scala', 'Functional Programming', 'Apache Spark RDD/DataFrame', 'Spatial Interpolation', '17 Separate Test Suites', 'sbt'],
    headlineMetric: '17 Separate Assignment Suites',
    headlineMetricLabel: '265 recorded passes across distinct runs',
    certName: 'EPFL Functional Programming in Scala Specialization',
    certUrl: 'https://www.coursera.org/account/accomplishments/specialization/IUG5FUNQECAG',
    narrative: {
      context:
        'The supplied EPFL coursework covers functional data structures, codecs, parallel algorithms, Spark analytics and a climate Observatory. Each assignment has its own inputs, tests, compatibility constraints and optional execution scope.',
      objective:
        'Complete and validate the supplied assignment contracts while distinguishing compiler/test-harness fixes, fixture correctness, bounded data runs, browser checks and official course grades.',
      execution: [
        'Source-chat records identify AI-agent implementation, investigation and classroom execution over supplied starters. The 17 assignments retain separate sources and saved suites; no per-function manual or unaided human authorship is inferred.',
        'The Codecs assertion failed to compile because MUnit inferred incompatible Json types; a one-type-parameter retry also failed. The retained assertion uses assertEquals[Json, Json], after which the saved suite records 26 passes without changing the expected codec contract.',
        'Wikipedia source avoids driver-side full-corpus List retention and repeated token arrays. Its 17-test suite and one bounded local[2] full-corpus run completed; the earlier grader out-of-memory cause remains unconfirmed, and no controlled shuffle or memory saving is established.',
        'Other final suites remain separate: StackOverflow full-data analysis failed on a jar:file URI and has no retained successful later analysis; TimeUsage full-data analysis was skipped. Observatory core tests passed, but only a 2015 world image and zoom-0 temperature tile were rendered; its external basemap remained unavailable.'
      ],
      outcome:
        'Saved suites record 265 passing tests across 17 distinct assignments, while official course records show 100% across five courses. These are different evidence types. Fixture passes do not complete the failed/skipped full-data analyses or extend Observatory beyond its 2015 preview. The Codecs compile correction, Wikipedia run and later UI checks are separately scoped historical records, not one combined benchmark or proof that races were eliminated.'
    },
    diagramConfig: {
      title: 'EPFL Scala: functional, parallel, Spark and Observatory coursework',
      subtitleLine1:
        'Seventeen independent assignments use supplied functional, parallel, analytics and climate-visualisation contracts.',
      subtitleLine2:
        '265 passes in separate suites. Optional full-data analyses: StackOverflow failed; TimeUsage skipped. Observatory: limited 2015 preview.',
      orchestratorLabel: 'COMMON VALIDATION PATTERN | SEPARATE ASSIGNMENTS',
      entryNode: { label: 'Assignment Input', sub: '(Course fixtures)', color: '#7C3AED', icon: 'db' },
      topServices: [
        { label: 'Immutable ADTs', sub: '(Sets / codecs)', color: '#C026D3', icon: 'lock' },
        { label: 'Parallel Tasks', sub: '(Separate exercises)', color: '#059669', icon: 'ai' },
        { label: 'Spark Analytics', sub: '(Local[2] runs)', color: '#059669', icon: 'metrics' },
        { label: 'Observatory UI', sub: '(2015 preview only)', color: '#059669', icon: 'cloud' },
        { label: 'Saved Suites', sub: '(17 distinct runs)', color: '#EA580C', icon: 'search' }
      ],
      flowSteps: [
        { line1: 'Choose one', line2: 'assignment and', line3: 'supplied inputs' },
        { line1: 'Implement its', line2: 'functional /', line3: 'parallel contract' },
        { line1: 'Run that suite', line2: 'and check compile', line3: 'errors separately' },
        { line1: 'Inspect optional', line2: 'data runs / UI', line3: 'within limits' },
        { line1: 'Retain source', line2: 'and scope for', line3: 'each run' }
      ],
      branchLabel: 'Per assignment',
      returnStep1: { line1: 'Retain failed /', line2: 'skipped full runs' },
      returnStep2: { line1: 'Scope tests to', line2: 'their own fixtures' },
      rightModelNode: { label: 'Recorded Outcomes', sub: '(Not one benchmark)', color: '#059669', icon: 'metrics' },
      bottomStoreNode: { label: 'Scala Sources', sub: '(17 assignment sets)', color: '#7C3AED', icon: 'search' }
    },
    evidence: {
      credential: 'Coursera EPFL Functional Programming in Scala Specialization (Issued Nov 2, 2026)',
      sha256: '2d70d4e5cc3967b4d6b12fdecab88de14803a9a9ccedb1dc0eb2b4357252b25a',
      deliverables: [
        'Seventeen separately retained assignment implementations and final saved suites, summing 265 passes, with AI-operated implementation/execution provenance.',
        'Codecs compiler failure/retry records and the exact two-type-parameter MUnit assertion, followed by 26 saved test passes.',
        'Wikipedia source, 17-test result and bounded local full-corpus run; earlier grader-memory cause remains unconfirmed.',
        'Separate StackOverflow failed optional analysis, TimeUsage skipped analysis and Observatory core/UI/2015-preview records; no complete-rendering or controlled performance claim.'
      ],
      filesIncluded: [
        'Assignments/C02-P04/Source/codecs/src/test/scala/codecs/CodecsSuite.scala',
        'Assignments/C04-P01/Source/wikipedia/src/main/scala/wikipedia/WikipediaRanking.scala',
        'Assignments/C04-P02/Source/stackoverflow/src/main/scala/stackoverflow/StackOverflow.scala',
        'Assignments/C04-P03/Source/timeusage/src/main/scala/timeusage/TimeUsage.scala',
        'Assignments/C05-P01/Source/observatory/src/main/scala/observatory/Extraction.scala',
        'Assignments/C05-P01/Source/observatory/capstone-ui/src/main/scala/observatory/JSMain.scala',
        'Sources/support/local/course2/codecs.log',
        'Sources/support/local/course4/wikipedia-full-corpus-memory.log',
        'Sources/support/local/course5/validation.json',
        'Sources/support/local/course5/preview/target/preview/2015-preview.json'
      ],
      scopeSummary:
        'AI-assisted coursework over supplied interfaces and fixtures. Course grades, 17 separate final suites, optional data runs and UI phases are distinct cohorts. StackOverflow full-data analysis failed, TimeUsage analysis was skipped, Wikipedia grader-memory cause remains unknown, and Observatory generated only 2015 world/zoom-0 temperature imagery while its external basemap failed. No unaided authorship, race elimination, measured shuffle gain or cluster-scale guarantee is claimed.'
    },
    validationLessons: 'Validation kept the AI-assisted Scala assignments separate. A Codecs test failed to compile because MUnit inferred incompatible JSON types; adding one type parameter produced another compiler error. Correcting the assertion to `assertEquals[Json, Json]` was followed by 26 passing tests. Separately, Wikipedia was revised to avoid driver-side corpus retention and repeated token arrays; 17 tests and a bounded full-corpus run completed. Immutable transformations, parallel tasks and Spark operations remain inspectable coursework designs, with compilation, correctness fixtures, data runs and rendering requiring distinct checks. A test-harness correction does not itself demonstrate changed modelled behaviour. Failed or skipped optional runs and limited Observatory imagery remain part of the result; no controlled race-elimination, cluster-scale performance or network-shuffle improvement is demonstrated.'
  },
  {
    id: 'cs-11',
    code: 'CS-11',
    category: 'data',
    accent: 'amber',
    domainBadge: 'COMPUTER VISION & SERVERLESS MLOPS',
    title: 'Facial Keypoint Regression & Separate SageMaker Confidence Workflow',
    subtitle:
      'Two independent academic projects: a PyTorch facial-keypoint image holdout and a Scones Unlimited classifier workflow with a 0.93 abstention gate.',
    stack: ['Amazon SageMaker', 'AWS Step Functions', 'PyTorch CNN', 'OpenCV Haar Cascade', 'AWS Lambda', 'SageMaker Data Capture'],
    headlineMetric: '2.69 px Mean Error',
    headlineMetricLabel: 'Facial Keypoints | 770 Official Test Images',
    certName: 'AWS Machine Learning Engineer Nanodegree',
    certUrl: 'https://www.udacity.com/certificate/e/41150320-caa0-11f1-a7b7-677d26a7417a',
    narrative: {
      context:
        'The facial-keypoint coursework asks whether image geometry and learned landmark predictions agree on a labelled holdout. The separate Scones Unlimited coursework asks whether a deployed classifier workflow returns or rejects a prediction according to an explicit confidence policy. They use different data, models and validation cohorts.',
      objective:
        'Adapt the two supplied Udacity starters with inspectable preprocessing, model evaluation and cloud payload contracts, keeping labelled regression error separate from workflow execution and confidence-based abstention.',
      execution: [
        'Facial keypoints: substantial AI assistance supported implementation, execution and documentation of a four-block PyTorch CNN, data transforms and a Haar-cascade inference pipeline for 68 landmarks in a common 128x128 greyscale image space.',
        'Facial keypoints: completed 40 training epochs, selected epoch 35 using the filename-subject-disjoint training/validation split, then evaluated all 770 official test images. These are image holdouts, not an unseen-subject benchmark; eight recorded geometry, range and Haar checks are a separate validation layer.',
        'Scones Unlimited: AI assistance prepared the implementation and analysis. The included execution_runner.py performed the historical cloud stages; the final notebook analysed saved evidence and retained 40 cloud-reference cells as explicitly skipped implementation references.',
        'Scones Unlimited: three Lambda handlers serialised an image, called the SageMaker endpoint and enforced a 0.93 confidence gate. Saved histories retain one success and one expected low-confidence rejection; 19 captured requests comprise 17 probes and two workflow calls, including repeated images.'
      ],
      outcome:
        'The selected facial-keypoint checkpoint recorded 2.691904-pixel mean landmark error versus a 7.961189-pixel training mean-face comparator on 770 official test images, in the same transformed pixel space. Separately, Scones returned a prediction at confidence 0.9957326055 and intentionally rejected a 0.6997604966 case below 0.93. Its 19 capture records have no joined ground-truth labels, so they do not measure accuracy, calibration or drift.'
    },
    diagramConfig: {
      title: 'Two independent vision projects: facial keypoints and Scones',
      subtitleLine1:
        'Facial keypoints: 2.691904 px mean error versus 7.961189 px on 770 official image holdouts.',
      subtitleLine2:
        'Scones: separate classifier, 0.93 abstention gate and request capture. Arrows show a common validation pattern.',
      orchestratorLabel: 'COMMON VALIDATION PATTERN | TWO INDEPENDENT PROJECTS',
      entryNode: { label: 'Select Project', sub: '(Keypoints / Scones)', color: '#7C3AED', icon: 'api' },
      topServices: [
        { label: 'OpenCV & PyTorch', sub: '(Facial Keypoints)', color: '#C026D3', icon: 'cache' },
        { label: 'Image Holdout', sub: '(770 Facial Images)', color: '#059669', icon: 'ai' },
        { label: 'Scones Lambdas', sub: '(Serialise / Classify)', color: '#EA580C', icon: 'cloud' },
        { label: 'Confidence Gate', sub: '(0.93 Abstention)', color: '#DC2626', icon: 'shield' },
        { label: 'S3 Data Capture', sub: '(19 Request Records)', color: '#059669', icon: 'metrics' }
      ],
      flowSteps: [
        { line1: 'Select one of two', line2: 'independent vision', line3: 'coursework projects' },
        { line1: 'Prepare that model', line2: 'and its image or', line3: 'payload contract' },
        { line1: 'Run keypoint model', line2: 'or Scones workflow', line3: 'as a separate path' },
        { line1: 'Check its holdout', line2: 'or confidence gate', line3: 'with its own cohort' },
        { line1: 'Retain separate', line2: 'metrics, histories', line3: 'and capture records' }
      ],
      branchLabel: 'Project-specific check',
      returnStep1: { line1: 'Labelled keypoint', line2: 'image-holdout error' },
      returnStep2: { line1: 'Scones confidence', line2: 'pass or abstention' },
      rightModelNode: { label: 'Project Model', sub: '(Independent Models)', color: '#059669', icon: 'ai' },
      bottomStoreNode: { label: 'Separate Evidence', sub: '(Holdout / Capture)', color: '#7C3AED', icon: 'search' }
    },
    evidence: {
      credential: 'Udacity AWS ML Engineer & Computer Vision Nanodegrees (Issued Oct 2026)',
      sha256: 'd15ec128efa36d9dd208b716258cbaea3d0a84a524a1eb1b0e6c1a4b784d8c2c',
      deliverables: [
        'Facial keypoints: supplied-starter attribution, four-block CNN, transform/training source, selected checkpoint and 770-image holdout predictions with the training mean-face comparator.',
        'Facial keypoints: eight recorded preprocessing, geometry and Haar checks; filename-subject-disjoint training/validation and an explicitly image-held-out official test.',
        'Scones: starter-derived three-Lambda Step Functions implementation, execution runner and saved success plus expected ThresholdConfidenceNotMet histories.',
        'Scones: 19 endpoint-capture request records and saved-evidence analysis, without joined truth labels, a paid Model Monitor schedule or a drift baseline.'
      ],
      filesIncluded: [
        'models.py',
        'data_load.py',
        'train.py',
        'evaluate.py',
        'pipeline.py',
        'SOURCE.json',
        'execution_runner.py',
        'lambdas/classify_image/lambda.py',
        'lambdas/filter_confidence/lambda.py',
        'evidence/root-execution/actual-workflow-executions.json',
        'evidence/root-execution/capture-summary.json'
      ],
      scopeSummary:
        'Two independent AI-assisted academic projects. Facial-keypoint mean error is measured on 770 official image holdouts after validation selection. Scones execution, abstention and 19 captured requests are separate observations without accuracy or drift labels. The original OpenCV-stop exception trace is absent; no complete compatibility-debugging sequence, unseen-subject benchmark or current service availability is claimed.'
    },
    validationLessons: 'Validation kept the two AI-assisted academic vision implementations separate. For facial keypoints, eight preprocessing checks covered geometry, normalisation and Haar detection. A validation-selected checkpoint evaluated on 770 held-out images recorded 2.691904-pixel mean error against a 7.961189-pixel mean-face comparator. This was an image holdout, not an unseen-subject benchmark. Separately, Scones recorded successful inference and an expected low-confidence rejection at a 0.93 gate. Preprocessing correctness, labelled model evaluation and abstention-policy behaviour answer different questions. Neither a confidence threshold nor payload capture establishes unseen-subject generalisation, demographic fairness, production robustness or drift detection, and these results do not form a combined reliability claim.'
  },
  {
    id: 'cs-12',
    code: 'CS-12',
    category: 'data',
    accent: 'emerald',
    domainBadge: 'REVOPS ARCHITECTURE & CRM DATA INTEGRATION',
    title: 'Five-Company Public-Seed Import & HubSpot Replay Pilot',
    subtitle:
      'A custom Python/SQLite adapter used a checked, DOM-derived Clay table CSV to create five marked HubSpot test companies and observe three identical-input replays.',
    stack: ['HubSpot CRM API', 'Clay Import Review', 'Python & SQLite', 'Reviewed Plan Digest', 'Write Reconciliation', 'Mock HTTP & Local Checks'],
    headlineMetric: '3 Replays, 0 Writes',
    headlineMetricLabel: '5 Initial Creates | Observed Pilot',
    certName: 'HubSpot Data Integrations Certified',
    certUrl: 'https://app-eu1.hubspot.com/academy/achievements/4p7h00wk/en/1/djessi-jorge/hubspot-data-integrations-certified',
    narrative: {
      context:
        'A bounded five-company pilot needed a reviewed CSV contract before creating marked HubSpot test records. The source rows were public seeds imported into a Clay table, without enrichment or qualification. Chrome blocked the native CSV download, leaving a transport and provenance gap before the approved transfer.',
      objective:
        'Verify all five rows and eight fields, require the exact reviewed plan before live mutation, track uncertain writes for reconciliation and compare selected fields on the 32 pre-existing companies through the pilot and its identical-input replays.',
      execution: [
        'The user directed the pilot and explicitly approved account-wide company read/write permissions. Coding assistants implemented and reviewed the custom standard-library Python/SQLite bridge, mock service and wrapper, and operated the import and transfer; independent manual implementation is not established.',
        'After ERR_BLOCKED_BY_CLIENT stopped native CSV export, the coding assistant retained the block evidence and captured 40 rendered cells in two horizontal table views. The column map and all values matched the approved public seed; the resulting CSV was labelled DOM-derived rather than a native Clay download.',
        'Eighteen synthetic loopback HTTP test methods separately exercised response-loss reconciliation, no automatic retry of uncertain writes, collision quarantine and preservation of remote edits. A different wrapper cohort passed 30 local checks using fake bridge outputs and no real HubSpot requests.',
        'One approved live apply created five marked test companies. Each of three identical-input replays recorded zero creates, zero updates and five skips. Final readback confirmed the same five mappings and unchanged monitored fields on 32 pre-existing companies.'
      ],
      outcome:
        'The observed live pilot retained five initial creates and 15 skips across three identical replays, with no replay creates or updates. Name, domain, description, update timestamp and archived state remained unchanged on the 32 pre-existing companies. The 40 checked source cells, 18 mock HTTP methods and 30 local wrapper checks are distinct evidence cohorts. No enrichment, native synchronisation or production reliability result is claimed.'
    },
    diagramConfig: {
      title: 'Public-seed Clay import review and bounded HubSpot replay pilot',
      subtitleLine1:
        'Five public-seed rows: 40 rendered cells checked after a blocked native CSV export, without enrichment.',
      subtitleLine2:
        'One live apply, three identical replays, 18 mock HTTP methods and 30 local wrapper checks are separate cohorts.',
      orchestratorLabel: 'CUSTOM PYTHON / SQLITE PILOT | REVIEWED PLAN & WRITE LEDGER',
      entryNode: { label: 'Reviewed Public Seed', sub: '(5 Rows / 8 Fields)', color: '#7C3AED', icon: 'db' },
      topServices: [
        { label: 'Reviewed Plan', sub: '(32 Existing Records)', color: '#C026D3', icon: 'cache' },
        { label: 'Identity Resolver', sub: '(Marked Test Domains)', color: '#059669', icon: 'search' },
        { label: 'Field-Change Guard', sub: '(Monitored Fields)', color: '#DC2626', icon: 'shield' },
        { label: 'Mock / Local Checks', sub: '(Separate Cohorts)', color: '#059669', icon: 'ai' },
        { label: 'Replay Readback', sub: '(3 Runs / 15 Skips)', color: '#059669', icon: 'metrics' }
      ],
      flowSteps: [
        { line1: 'Read public-seed', line2: 'Clay table cells', line3: 'and verify the CSV' },
        { line1: 'Review the plan', line2: 'and snapshot fields', line3: 'on 32 existing rows' },
        { line1: 'Apply once to', line2: 'create five marked', line3: 'HubSpot test rows' },
        { line1: 'Replay three times:', line2: 'zero creates/updates', line3: 'and 15 total skips' },
        { line1: 'Read back mappings', line2: 'and compare only', line3: 'monitored fields' }
      ],
      branchLabel: 'Reconcile or hold',
      returnStep1: { line1: 'Retain input and', line2: 'write-intent receipts' },
      returnStep2: { line1: 'Inspect selected', line2: 'before/after fields' },
      rightModelNode: { label: 'HubSpot CRM API', sub: '(Marked Test Records)', color: '#EA580C', icon: 'api' },
      bottomStoreNode: { label: 'SQLite Pilot Ledger', sub: '(Run / Write Intents)', color: '#7C3AED', icon: 'lock' }
    },
    evidence: {
      credential: 'HubSpot Data Integrations Certified (Valid 2026–2027)',
      sha256: 'be224405b734be2a9e966552eeffef31eec5b4d698ed45dc859d6d2d9b3ba72a',
      deliverables: [
        'Custom pilot_bridge.py and CSV validation, with a reviewed plan digest, SQLite mapping/write-intent ledger and an application-enforced five-test-record boundary.',
        'Blocked native-download evidence, the original rendered 40-cell capture and column map, a DOM-derived bridge CSV and public-seed import review receipt.',
        'Separate receipts for 18 mock HTTP test methods and 30 local wrapper checks; injected write/read faults remain mock scenarios rather than observed live incidents.',
        'One live five-create transfer, three zero-create/zero-update replays, same-five mapping readback and monitored-field comparison for 32 pre-existing companies.'
      ],
      filesIncluded: [
        'pilot_bridge.py',
        'tests/test_bridge_integration.py',
        'tests/mock_hubspot.py',
        'evidence/Mock HubSpot Test Report.json',
        'evidence/Wrapper Local Review.json',
        'live-evidence/clay/native-csv-blocked.txt',
        'live-evidence/clay/clay_dom_derived_bridge_input.csv',
        'live-evidence/clay/clay_import_review_receipt.json',
        'live-evidence/hubspot/live-transfer-summary.json',
        'live-evidence/hubspot/security-boundary-receipt.json'
      ],
      scopeSummary:
        'Assistant-operated five-company public-seed import/review and HubSpot test-record pilot, without Clay enrichment. A DOM-derived CSV replaced the blocked native download. Eighteen mock HTTP methods, 30 local wrapper checks and three live replays remain separate. Protection covers monitored company fields, not all account state. Later 20-company research and five-update runs are excluded; no native integration, general exactly-once guarantee or production reliability is established.'
    },
    validationLessons: 'When Clay’s native CSV export was blocked, the coding assistant captured the rendered table and checked all 40 cells against the five-company seed, retaining the fallback’s DOM-derived provenance. The Python/SQLite bridge created five marked HubSpot test companies. Three identical replays made no creates or updates, while monitored fields on 32 pre-existing companies remained unchanged. Eighteen mock HTTP tests separately exercised response-loss reconciliation and guards. Reviewed plan digests and a SQLite write ledger supported reconciliation before retries. The five-record boundary was application-enforced; account-wide API permissions were not provider-enforced five-record least privilege. This public-seed pilot used no enrichment and establishes neither general exactly-once delivery, native synchronisation nor production reliability.'
  },
  {
    id: 'cs-13',
    code: 'CS-13',
    category: 'ai',
    accent: 'emerald',
    domainBadge: 'GOOGLE ADK, VERTEX AI & A2A SYSTEMS',
    title: 'Google ADK & Vertex AI: Four Independent Academic Agent Systems',
    subtitle:
      'Four separate AI-assisted academic implementations: legal reporting, research with simulated references, tool-grounded support and prototype A2A banking, each with its own historical evidence.',
    stack: ['Google ADK', 'Vertex AI Gemini', 'FastAPI & Pydantic', 'Vertex AI Search', 'Cloud SQL & MCP Toolbox', 'Agent2Agent (A2A)'],
    headlineMetric: '4 Accepted Projects',
    headlineMetricLabel: 'ND906 | 4 Nov 2026',
    certName: 'Google Agentic AI Engineer Nanodegree',
    certUrl: 'https://www.udacity.com/certificate/e/abc7f810-d49d-11f1-851e-ff548a14528e',
    narrative: {
      context:
        'Four academic scenarios have different failure modes: incorrect party extraction in a supplied legal application, simulated research provenance, grounding and empty-result handling in a support agent, and database wire/state contracts in a banking prototype. Their tools, model calls and evaluation cohorts are independent.',
      objective:
        'Complete the separate supplied starters with inspectable orchestration, structured state, constrained tools and project-specific validation, while separating coding-assistant work from model reasoning inside the applications and from user direction or submission review.',
      execution: [
        'P01 Legal Intelligence: Codex completed the FastAPI/Pydantic and Vertex workflow for four sequential report sections. It corrected the supplied party parser after an actual response named against as a party, then added an input-specific regression. Writing-quality heuristics check structure and coverage, not legal accuracy.',
        'P02 Research Assistant: Codex completed ADK Runner/session execution, ParallelAgent and SequentialAgent orchestration, bounded Researcher/Critic refinement and citation-ID checks. The retained seven-stage live-model run uses nine simulated references; the workflow does not retrieve external publications.',
        'P03 Betty’s Bird Boutique: Codex completed tool wiring, read-only parameterised catalogue queries, search prompts and grounding callbacks. It corrected the actual callback contract and tightened history and empty-result prompts. The final six-turn run preserves provider grounding URLs and a no-match branch; two earlier semantic-diagnostic raw sessions are missing.',
        'P04 Multi-Agent Banking: Codex completed three separate ADK applications communicating through A2A, normalised the actual single-row database response and corrected committed-state handling. Decimal arithmetic and a Boolean equity interface constrain the supplied prototype, without establishing lending validity or authenticated production boundaries.'
      ],
      outcome:
        'Accepted reviews are 4863109, 4863111, 4864251 and 4863110. Separate historical cohorts retain 31 mocked P01 checks and one four-section HTTP 200 report at 21.295 seconds with 16,591 report tokens; a seven-stage P02 model run at 36.244 seconds using simulated sources; a six-turn P03 session with 15 model calls and 44.699 seconds of top-level execution; and 18 completed P04 requests across 15 threads without recorded RPC/task errors. These counts do not establish legal accuracy, verified external research, complete support-answer correctness or lending accuracy.'
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
        { label: 'P02 Research', sub: '(Simulated Sources)', color: '#059669', icon: 'ai' },
        { label: 'P03 Boutique', sub: '(Tools / No-Match)', color: '#059669', icon: 'search' },
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
      bottomStoreNode: { label: 'Separate Run Cohorts', sub: '(4 Academic Projects)', color: '#7C3AED', icon: 'lock' }
    },
    evidence: {
      credential: 'Google Agentic AI Engineer Nanodegree (Udacity, Issued Nov 4, 2026)',
      sha256: '9285fb71111c9595939f1bf02e6fca097b1f8b4817efa0451338608187da8d7a',
      deliverables: [
        'P01: supplied-starter provenance, actual incorrect party field, corrected role parser/regression, final response, 31 mocked checks and a separately recorded live report.',
        'P02: ADK source/aggregation/refinement implementation and seven-stage live-model trace with nine simulated references; the separate five-method offline log has its own snapshot boundary.',
        'P03: corrected grounding callback, history/catalogue prompts and final six-turn tool session. Contemporary reports retain two earlier semantic errors, but their raw diagnostic sessions are missing.',
        'P04: independent manager/deposit/loan applications, database wire/state corrections, separate 55-test offline log and 18-response live transport cohort without a labelled financial-correctness benchmark.',
        'Complete ND906 evidence ZIP with four accepted submissions and source-specific AI-assistance, supplied-starter and historical-execution records.'
      ],
      filesIncluded: [
        'nd906 Portfolio Evidence.zip',
        'project/starter/main.py',
        'project/starter/tests/test_todos.py',
        'project/starter/api_response.json',
        'project/starter/agents/orchestrator.py',
        'project/starter/workflow_run.json',
        'starter/search_agent.py',
        'starter/agent-prompt.txt',
        'starter/evidence/web-session.json',
        'project/starter/deposit/agent.py',
        'project/starter/loan/loan.py',
        'project/starter/test_results.json'
      ],
      scopeSummary:
        'Four independent academic implementations with documented Codex implementation and execution, distinct from user direction and application model use. The checksum identifies the complete ND906 evidence ZIP. Mocked checks, simulated references and live-model/tool/transport observations remain separate. Legal writing heuristics, provider URLs and completed banking tasks are not semantic-accuracy benchmarks; two support diagnostic raw sessions and current service validation are absent.'
    },
    validationLessons: 'Validation kept four AI-assisted coursework implementations separate. Legal Intelligence named “against” as a party; Codex corrected the supplied parser and added a regression, followed by 31 mocked checks and a recorded live HTTP 200 report. Codex tightened Betty’s history and empty-catalog prompts after reviewing tool responses; the final six-turn run retained the no-match branch. Research completed seven stages using simulated references. Banking’s 18 requests completed without RPC errors after wire/state handling was corrected. Parser regressions, explicit tool-result branches and committed-state checks address bounded mechanisms: successful model calls, citation URLs and completed transport tasks do not establish semantic correctness. Supplied-starter provenance, simulated-source limits and missing diagnostics remain explicit, without claims of legal accuracy, verified research, lending validity, unaided authorship, commercial impact or current availability.'
  },
  {
    id: 'cs-14',
    code: 'CS-14',
    category: 'cloud',
    accent: 'indigo',
    domainBadge: 'AZURE INFRASTRUCTURE, CI/CD & RELEASE QUALITY',
    title: 'Azure Cloud DevOps: Infrastructure, CI/CD & Quality Release Gates',
    subtitle: 'Three separate Azure coursework implementations with supplied applications and historical evidence. P02/P03 document Codex assistance; P01’s specific authoring history is unresolved.',
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
      context: 'Three independent academic scenarios require repeatable infrastructure, traceable delivery and inspectable release checks. Their applications, network paths, test targets and historical evidence have different scopes. The earlier infrastructure project lacks its specific original authoring history; later assistant activity does not establish how it was authored.',
      objective: 'Demonstrate each project’s configuration, service behaviour and validation boundaries using its own retained artefacts, with explicit network/policy scope, source-to-deployment traceability, provider diagnostics and bounded cleanup evidence.',
      execution: [
        'P01 Infrastructure: the accepted Packer/Terraform package provisions tagged private Linux VMs, managed disks and a Standard Load Balancer, with NSG Internet denial and learner-resource-group policy/scope guards. Its specific human/AI authoring history is not established; retained apply, private-VM checks and cleanup records are assessed without inventing that contribution.',
        'P02 CI/CD: Codex adapted the supplied Flask/model example and planning template with payload/readiness validation, request IDs, packaging, GitHub CI and Azure delivery. It corrected reviewer-visible evidence access and retained one demonstrated source commit separately from the later accepted documentation snapshot. Synthetic narration and edited browser frames are not a continuous human screencast.',
        'P03 Release Quality: Codex implemented the pipeline, infrastructure and checks around supplied precompiled FakeRestAPI and separate public Sauce Demo browser workflows. It diagnosed Azure’s rejected ingestion transform and replaced unsupported coalesce with direct timestamp parsing, then retained final API, browser, load, Log Analytics and scoped-cleanup evidence.'
      ],
      outcome: 'P01 records 21 resources applied and destroyed and two private-VM Hello World checks through Run Command; Internet ingress is blocked, tag policy is resource-group scoped and inert policy objects remain. P02’s separate Cloud Shell and GitHub records each report 59 checks, with one demonstrated commit linked to successful Azure Build/Deploy and a request-ID-correlated HTTP 200 prediction. P03 retains 201 API assertion cases across 54 requests, three browser workflows, 969 stress samples over a 10-user/90-second run and 629 endurance samples over a 3-user/180-second run. Each load report has one additional ownership preflight. These layers are not one unit-test or reliability cohort.'
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
          sub: '(P01 Scoped IaC)',
          color: '#7C3AED',
          icon: 'cloud'
        },
        {
          label: 'GitHub CI',
          sub: '(P02 Saved Checks)',
          color: '#059669',
          icon: 'git'
        },
        {
          label: 'Azure Pipelines',
          sub: '(P02 / P03 Runs)',
          color: '#059669',
          icon: 'git'
        },
        {
          label: 'App Service',
          sub: '(P02 / P03 Apps)',
          color: '#059669',
          icon: 'api'
        },
        {
          label: 'Azure Monitor',
          sub: '(P03 Logs / Alerts)',
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
        'P01: accepted Packer/Terraform configuration, separately recorded mock/scope checks, private-VM HTTP readbacks and apply/destroy evidence; resource-group policy and inert cleanup remnants are explicit, while specific authoring history remains unknown.',
        'P02: Codex-adapted supplied application and planning template, pipeline/readiness configuration, separate 59-check CI records and one same-commit deployment/prediction/log chain; later documentation-access checks and edited/synthetic media retain their own provenance.',
        'P03: Codex pipeline/test implementation and exact DCR diagnostic/corrective diff, with 201 API assertions/54 requests, three final browser workflows, separate workload/preflight counts, three ingested passing log records and 17 absent-resource cleanup checks.',
        'Complete ND082 evidence ZIP containing three accepted submissions, source artefacts and historical integrity records, without attributing P01 from the later P02/P03 authoring chat.'
      ],
      filesIncluded: [
        'nd082 Portfolio Evidence.zip',
        'main.tf',
        'server.json',
        '.github/workflows/ci.yml',
        'azure-pipelines.yml',
        'scripts/deploy_existing_training_app.sh',
        'scripts/predict.py',
        'azure-pipelines.yaml',
        'terraform.zip',
        'execution-evidence/postman/TEST-DataValidation.xml',
        'execution-evidence/postman/TEST-Regression.xml',
        'execution-evidence/selenium/selenium.xml',
        'execution-evidence/monitoring/selenium-query-results.json',
        'execution-evidence/cleanup-verification.json',
        'scripts/pipeline_support.py'
      ],
      scopeSummary: 'Three independent accepted ND082 academic projects. The checksum identifies the complete programme evidence ZIP. P01’s original authoring contribution is unresolved; P02/P03 retain documented Codex assistance and supplied-product attribution. Private-VM checks, resource-group policy, 59-check delivery records, API/browser/load cohorts and policy remnants retain their own limits. Earlier failed cart JUnit and some startup-tracker detail are missing; current Azure state, financial-model accuracy and production reliability were not validated.'
    },
    validationLessons: 'Three Azure implementations were checked independently. Infrastructure logs record a 21-resource apply, private-VM HTTP checks and 21-resource destroy, with network and resource-group policy limits retained. P01’s specific authoring history remains unresolved; Codex implementation and correction are documented for P02/P03. When Azure rejected the release pipeline’s ingestion transform, Codex traced the error to unsupported `coalesce`, changed timestamp parsing and verified three published Selenium logs. Release evidence retains 201 API assertions, three browser workflows and separately counted small load tests. CI/CD separately binds 59 checks and a correlated HTTP 200 prediction to one demonstrated commit. Provider diagnostics and run-specific readbacks support narrower conclusions than green summaries, resource names or reviewer acceptance. Supplied applications, mocked checks and retained policy objects remain separately scoped, without current-availability, production-SLA or whole-account cleanup claims.'
  }
];

// ============================================================================
// DATA: FEATURED ARCHITECTURAL IMPLEMENTATIONS
// ============================================================================
const FEATURED_IMPLEMENTATIONS = [
  {
    "projectId": "cs-05",
    "focus": "Private AWS networking and governance",
    "contribution": 'Codex-assisted private VPC peering across two AWS Regions, with route tables, security groups and historical private-VM and flow-log checks. Multi-account governance remains a separate blueprint.',
    "decision": 'A bounded visibility wait checked active peering in both Regions before routing. The OU/SCP and FinOps designs have a separate evidence scope.'
  },
  {
    "projectId": "cs-14",
    "focus": "Azure delivery and release checks",
    "contribution": 'Separate Azure infrastructure, CI/CD and release-quality implementations, with historical evidence, supplied applications and project-specific contribution records.',
    "decision": 'Provisioning, delivery readiness and release testing were checked independently; private-VM, policy and cleanup limits remain explicit in the infrastructure case.'
  },
  {
    "projectId": "cs-01",
    "focus": "LLM routing and modelled cost",
    "contribution": 'A supplied LLM service with retained catalogue, guard-pattern and trace-instrumentation additions. Evidence records 231 mocked checks and a mixed live/seeded 74-row cost ledger.',
    "decision": 'The supplied service combines model routing and a Chroma cache. Its ledger compares routed costs with a hypothetical all-gpt-4o baseline, giving a 65.0% modelled saving.'
  }
];

// ============================================================================
// DATA: OFFICIAL VERIFIED CERTIFICATES (19 Udacity + 29 Categorized Credentials)
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

  // 2. Cloud, Scala & DevOps (7)
  {
    title: 'AWS Security Engineer Advanced Professional Certificate (18 Courses)',
    issuer: 'Coursera | Amazon Web Services',
    date: 'Nov 9, 2026',
    group: 'cloud',
    url: 'https://www.coursera.org/account/accomplishments/specialization/JWB4H05JGSK2',
    summary: 'Includes eight lab courses covering AWS Config, IAM troubleshooting, network controls, WAF, encryption, CloudWatch monitoring and incident response.'
  },
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
    title: 'Cloud, Scala & DevOps (7)',
    shortLabel: 'Cloud, Scala & DevOps (7)'
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
// DATA: QUALITATIVE ENTERPRISE TIMELINE (2015-2026)
// ============================================================================
const ENTERPRISE_TIMELINE = [
  {
    period: 'April 2026-present',
    role: 'Independent Applied AI & Systems Specialist',
    company: 'Self-Directed Technical Practice & Architecture Delivery',
    location: 'London, United Kingdom',
    domainBadge: 'Academic AI, Cloud Architecture & Data Projects',
    accent: 'indigo',
    summary:
      'Self-directed academic practice in cloud, AI and data systems through 19 completed Udacity Nanodegrees and courses, plus AWS, Anthropic, LangChain, IBM and EPFL study. The case studies distinguish supplied starters, coding-assistant contributions and separately recorded validation.',
    highlights: [
      'Explored LangGraph, Claude Agent SDK and FastAPI workflows through supplied-starter adaptations, coding-assistant implementation and project-specific tool, schema and response checks.',
      'Completed academic cloud and data implementations across AWS, five-job MLOps pipelines and Kafka/Spark/Scala coursework, with historical delivery and model-evaluation results separated by project and run.',
      'Directed a coding-assistant-supported five-company public-seed Clay import/review and HubSpot pilot; three recorded replays made no creates or updates, with selected-field checks on pre-existing records.'
    ],
    tags: ['LangGraph', 'Claude Code & MCP', 'AWS Architecture', 'CloudFormation', 'Apache Kafka', 'Scala & Spark', 'PyTorch', 'FastAPI']
  },
  {
    period: '1 May 2024-14 April 2026',
    role: 'Senior Curriculum Curator Executive (Team Lead duties)',
    company: 'DCD Academy',
    location: 'London, United Kingdom',
    domainBadge: 'Technical Learning, SME Collaboration & AI Workflows',
    accent: 'indigo',
    summary:
      'Translated infrastructure specifications with subject matter experts into technical learning, competency frameworks and SOPs. Coached junior peers and integrated AI-assisted production with human technical review.',
    highlights: [
      'Structured data-centre engineering guidance with subject matter experts into competency frameworks and SOPs for technical audiences.',
      'Coached junior peers in technical structuring, troubleshooting scenarios and quality assurance across data-centre engineering programmes.',
      'Integrated Claude, ChatGPT, HeyGen and ElevenLabs into learning workflows, retaining human technical review in Storyline 360 and Thought Industries.'
    ],
    tags: ['Technical Communication', 'Requirements Interpretation', 'SME Collaboration', 'Storyline 360', 'Thought Industries LMS']
  },
  {
    period: 'September 2018-9 November 2023',
    role: '1st to 3rd Line Technical Support Engineer & Team Lead',
    company: 'Tata Consultancy Services (TCS), supporting EDF Energy',
    location: 'London & Croydon, United Kingdom',
    domainBadge: 'Enterprise Support, Incidents & Change Control',
    accent: 'emerald',
    summary:
      'Supported corporate, power-generation and trading systems across segregated networks. Coordinated incidents, stakeholder communications and UK/offshore handovers while reviewing release impacts and deployment risks.',
    highlights: [
      'Supported EDF Energy corporate, power-generation and trading systems using Intune, Active Directory and Aternity for compliance and diagnostics.',
      'Coordinated P1 incidents, stakeholder communications and UK/offshore handovers to support service continuity.',
      'Reviewed release impacts and deployment risks through ServiceNow change control.'
    ],
    tags: ['ServiceNow', 'Segregated Networks', 'Microsoft Intune', 'Active Directory', 'Aternity', 'Incident Coordination']
  },
  {
    period: '4 September 2017-31 August 2018',
    role: 'Systems (Excelicare) Implementation Officer',
    company: "King's College Hospital NHS Foundation Trust",
    location: 'London, United Kingdom',
    domainBadge: 'Clinical Systems, Workflow Mapping & UAT',
    accent: 'emerald',
    summary:
      'Implemented clinical systems across specialist NHS clinics, mapped workflows and supported users through system changes under strict confidentiality requirements.',
    highlights: [
      'Mapped clinical workflows and supported users during clinical system implementation.',
      'Validated requirements, functional specifications and schema migrations through User Acceptance Testing (UAT), identifying defects before system releases.'
    ],
    tags: ['Excelicare', 'Clinical Systems', 'Workflow Mapping', 'UAT', 'Migration Validation', 'Data Confidentiality']
  },
  {
    period: '7 November 2016-1 September 2017',
    role: 'Junior Software Developer',
    company: 'Cohaesus Projects Ltd',
    location: 'London, United Kingdom',
    domainBadge: 'Software Development, Debugging & Testing',
    accent: 'indigo',
    summary:
      'Implemented small changes and bug fixes under senior developer guidance; tested functionality, documented updates and participated in code reviews.',
    highlights: [
      'Implemented small changes and bug fixes under senior developer guidance.',
      'Tested functionality, documented updates and participated in code reviews.'
    ],
    tags: ['Bug Fixing', 'Debugging', 'Software Testing', 'Technical Documentation', 'Code Review']
  },
  {
    period: '23 March 2015-4 November 2016',
    role: 'Data & Systems Support Officer',
    company: "King's College Hospital NHS Foundation Trust",
    location: 'London, United Kingdom',
    domainBadge: 'Clinical Data Support, SQL Server & NHS Reporting',
    accent: 'emerald',
    summary:
      'Supported PAS/PIMS users, investigated clinical data issues and used SQL Server to reconcile patient datasets for NHS reporting.',
    highlights: [
      'Explained system processes and escalated faults to maintain service continuity for PAS/PIMS users.',
      'Reconciled patient datasets with SQL Server queries and cleansed records for NHS statutory submissions and operational reporting.'
    ],
    tags: ['SQL Server', 'PAS / PIMS Support', 'Data Reconciliation', 'NHS Statutory Reporting', 'Clinical Data Integrity']
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
const PROJECT_VIEWS = [
  {
    "id": "cs-01",
    "shortTitle": "LLM guardrails, tracing & cost analysis",
    "summary": "AI-assisted additions to a supplied FAQ service, with mocked checks, retrieval comparisons and a bounded historical cost model.",
    "scopeLabel": "AI-assisted academic extension · supplied service",
    "flowLabel": "Service and separate analysis",
    "flowNodes": [
      "FAQ API",
      "Cache / router",
      "Trace & compare"
    ],
    "metricValue": "65.0%",
    "metricLabel": "Modelled cost difference · 74 mixed rows · hypothetical baseline",
    "contribution": "Added catalogue content, guard patterns and trace instrumentation to the supplied service, with 231 mocked checks retained.",
    "decision": "Compare retrieval quality and cost separately; the modelled ledger mixes live and seeded rows rather than measuring production savings."
  },
  {
    "id": "cs-02",
    "shortTitle": "FinBERT delivery & drift checks",
    "summary": "AI-assisted completion of a supplied sentiment API, checked through historical CI, drift gates and ECS deployment dispatch.",
    "scopeLabel": "AI-assisted coursework · pretrained model",
    "flowLabel": "Historical delivery workflow",
    "flowNodes": [
      "API starter",
      "CI / drift checks",
      "ECS dispatch"
    ],
    "metricValue": "5 / 5",
    "metricLabel": "Historical CI jobs passed · ECS dispatch only",
    "contribution": "Completed starter API and monitoring sections, delivery scripts and container checks around pretrained FinBERT weights.",
    "decision": "Pass an image tag between jobs and reconstruct the deployment URI locally; successful dispatch does not establish a completed rollout."
  },
  {
    "id": "cs-03",
    "shortTitle": "LangGraph support agent",
    "summary": "An AI-assisted support prototype combining persistent conversations, lexical retrieval and guarded local account actions over supplied teaching data.",
    "scopeLabel": "AI-assisted academic prototype · supplied data",
    "flowLabel": "Support workflow",
    "flowNodes": [
      "Support request",
      "LangGraph + tools",
      "Resolve / escalate"
    ],
    "metricValue": "21",
    "metricLabel": "Offline tests · injected deterministic model",
    "contribution": "Implemented stateful support routing, lexical retrieval and tenant-scoped SQLite tools; a separate provider run exercised eight synthetic tickets.",
    "decision": "Check ownership and escalation alongside successful answers; trusted upstream identities and heuristic confidence retain explicit limits."
  },
  {
    "id": "cs-04",
    "shortTitle": "Claude code-review CLI",
    "summary": "AI-assisted review tooling that separates Claude specialist drafts from source adjudication and deterministic report checks.",
    "scopeLabel": "AI-assisted coursework · supplied CLI scaffold",
    "flowLabel": "Review and adjudication",
    "flowNodes": [
      "Supplied PRs",
      "Claude specialists",
      "Source review"
    ],
    "metricValue": "42",
    "metricLabel": "Tool tests passed · paid-model boundary mocked",
    "contribution": "Completed SDK orchestration, constrained read tools, prompts, report rendering and tests around supplied contracts and helpers.",
    "decision": "Check model findings against exact source; valid schemas and deterministic scores cannot establish semantic accuracy."
  },
  {
    "id": "cs-05",
    "shortTitle": "Private AWS networking",
    "summary": "Codex-assisted private connectivity across two AWS Regions in one account, with a separate undeployed governance blueprint.",
    "scopeLabel": "Codex-assisted coursework · one authorised account",
    "flowLabel": "Private regional connectivity",
    "flowNodes": [
      "Private VPC",
      "Regional peering",
      "Private VPC"
    ],
    "metricValue": "2",
    "metricLabel": "Regions · historical private connectivity · one account",
    "contribution": "Added regional routes, scoped security rules and Flow Logs; retained eight mocked safety tests and separate historical private-VM observations.",
    "decision": "Wait for active peering in both Regions before routing; connectivity observations do not establish loss-free networking or failover."
  },
  {
    "id": "cs-06",
    "shortTitle": "Fraud training & model publication",
    "summary": "Codex-assisted adaptation of supplied Glue training, S3 publication and ECS serving interfaces, with separately recorded model and delivery checks.",
    "scopeLabel": "Codex-assisted coursework · supplied interfaces",
    "flowLabel": "Workflow with separate run cohorts",
    "flowNodes": [
      "Glue training",
      "S3 publication",
      "ECS serving"
    ],
    "metricValue": "0.8344",
    "metricLabel": "Held-out F1 · 43,210 rows · historical B run",
    "contribution": "Adapted the trainer, loader and refresh function; added event journalling, immutable model publication and exact-version triggering-object archival.",
    "decision": "Validate model quality separately from serving; localhost HTTP 200 probes establish delivery rather than predictive accuracy."
  },
  {
    "id": "cs-07",
    "shortTitle": "Serverless document summarisation",
    "summary": "A source-matched academic workflow connecting S3 events, Lambda and Amazon Bedrock to encrypted summary outputs.",
    "scopeLabel": "Academic deployment · per-action authorship unverified",
    "flowLabel": "Source-matched event path",
    "flowNodes": [
      "S3 upload",
      "Lambda + Bedrock",
      "Encrypted summary"
    ],
    "metricValue": "447",
    "metricLabel": "Output tokens · one recorded document run",
    "contribution": "Retained CloudFormation and Lambda source, deployment hashes and an upload-to-output receipt for the final matching deployment.",
    "decision": "Separate input and output buckets to avoid recursion; event delivery and token usage do not establish legal correctness or savings."
  },
  {
    "id": "cs-08",
    "shortTitle": "Iceberg medallion lakehouse",
    "summary": "A batch lakehouse over supplied data, with tolerant timestamps, initial materialised layers and a separate later Bronze CDC demonstration.",
    "scopeLabel": "Academic batch design · supplied data and scaffolding",
    "flowLabel": "Initial batch materialisation",
    "flowNodes": [
      "Bronze",
      "Silver",
      "Gold / Athena"
    ],
    "metricValue": "5 + 25",
    "metricLabel": "Historical Glue runs + Athena queries completed",
    "contribution": "Completed four Glue scripts over supplied notebooks and datasets, retaining initial analytics, later Bronze changes and Athena history queries separately.",
    "decision": "Retain malformed raw values and distinguish snapshot populations; successful jobs do not establish a refreshed end-to-end CDC reconciliation."
  },
  {
    "id": "cs-09",
    "shortTitle": "Transit & STEDI streaming",
    "summary": "Two separate classroom implementations: transit event aggregation and a customer-demographics/risk join, with distinct checks and run cohorts.",
    "scopeLabel": "Separate classroom projects · authoring attribution unverified",
    "flowLabel": "Independent projects",
    "flowNodes": [
      "Kafka / KSQL transit",
      "Spark / Redis join",
      "Separate evidence"
    ],
    "metricValue": "36,002",
    "metricLabel": "Transit rider events · exact frozen-offset replay match",
    "contribution": "Retained keyed transit aggregation and STEDI demographics/risk transforms, with frozen-offset counts and five separate native Spark tests.",
    "decision": "Validate event identity and each stream arrival order; STEDI's unwatermarked state and trigger interval provide no production latency guarantee."
  },
  {
    "id": "cs-10",
    "shortTitle": "Scala, parallelism & Spark",
    "summary": "Seventeen separate AI-assisted coursework assignments spanning functional programming, parallel tasks, Spark analysis and limited Observatory rendering.",
    "scopeLabel": "AI-assisted coursework · supplied starters and fixtures",
    "flowLabel": "Independent assignments",
    "flowNodes": [
      "Functional Scala",
      "Parallel tasks",
      "Spark analysis",
      "Observatory"
    ],
    "metricValue": "265",
    "metricLabel": "Recorded test passes · 17 distinct assignment suites",
    "contribution": "Completed supplied-starter assignments with recorded compiler investigation, a bounded Wikipedia corpus run and separately retained optional-run limitations.",
    "decision": "Keep compilation, fixture tests, full-data analysis and rendered output separate; failed or skipped optional runs remain part of the result."
  },
  {
    "id": "cs-11",
    "shortTitle": "Vision models & confidence gating",
    "summary": "Two AI-assisted academic projects: facial-keypoint regression and a separate SageMaker classifier workflow with a confidence-based rejection gate.",
    "scopeLabel": "AI-assisted coursework · two independent projects",
    "flowLabel": "Independent projects",
    "flowNodes": [
      "PyTorch keypoints",
      "SageMaker workflow",
      "Separate validation"
    ],
    "metricValue": "2.69 px",
    "metricLabel": "Keypoint mean error · 770 held-out images",
    "contribution": "Implemented and evaluated facial-keypoint processing; separately prepared Scones inference and confidence gating with retained historical cloud execution.",
    "decision": "Distinguish image-holdout error from unseen-subject performance; confidence rejection and captured payloads do not establish accuracy, calibration or drift detection."
  },
  {
    "id": "cs-12",
    "shortTitle": "HubSpot replay pilot",
    "summary": "An assistant-operated public-seed import/review pilot creating five HubSpot test companies through a custom Python/SQLite bridge, without enrichment.",
    "scopeLabel": "Assistant-operated pilot · user-directed scope",
    "flowLabel": "Checked source to test records",
    "flowNodes": [
      "Reviewed seed",
      "Python / SQLite",
      "HubSpot test records"
    ],
    "metricValue": "3 replays",
    "metricLabel": "Zero creates or updates · after five initial creates",
    "contribution": "Directed an approved five-company pilot; coding assistants implemented the bridge and checked a DOM-derived CSV after native export was blocked.",
    "decision": "Reconcile uncertain writes through reviewed plans and a write ledger; application-enforced scope does not narrow account-wide provider permissions."
  },
  {
    "id": "cs-13",
    "shortTitle": "Google ADK agent systems",
    "summary": "Four independent Codex-assisted academic agents covering legal reports, simulated-source research, tool-grounded support and prototype A2A banking.",
    "scopeLabel": "Codex-assisted coursework · supplied starters",
    "flowLabel": "Independent projects",
    "flowNodes": [
      "Legal report",
      "Simulated research",
      "Boutique support",
      "A2A banking"
    ],
    "metricValue": "4",
    "metricLabel": "Accepted academic projects · distinct validation cohorts",
    "contribution": "Codex completed project-specific orchestration, tools and state handling, with documented parser, callback and database-response corrections.",
    "decision": "Validate each project's contracts and semantic limits separately; simulated references and successful transport are not verified research or lending accuracy."
  },
  {
    "id": "cs-14",
    "shortTitle": "Azure delivery & release checks",
    "summary": "Three separate Azure coursework projects covering private infrastructure, traceable delivery and release checks, with project-specific contribution records.",
    "scopeLabel": "Coursework · P02/P03 Codex-assisted; P01 authorship unknown",
    "flowLabel": "Independent projects",
    "flowNodes": [
      "Infrastructure",
      "CI/CD",
      "Release checks"
    ],
    "metricValue": "3",
    "metricLabel": "Accepted academic projects · separate execution cohorts",
    "contribution": "P02/P03 document Codex implementation and correction. P01 retains private-VM apply/check/destroy evidence without a verified specific authoring history.",
    "decision": "Keep private-VM access, resource-group policy and cleanup limits explicit; pipeline, API, browser and load checks support different conclusions."
  }
];

const DOMAIN_META = {
  cloud: { label: 'Cloud & delivery', icon: Cloud },
  ai: { label: 'AI & agents', icon: Cpu },
  data: { label: 'Data & integration', icon: Database }
};

function MiniFlow({ view, category, compact = false }) {
  const independent = view.flowLabel.startsWith('Independent');
  const DomainIcon = DOMAIN_META[category].icon;
  return <div className={`pv-flow ${independent ? 'parallel' : ''} ${compact ? 'compact' : ''}`}>
    <span className="pv-flow-label">{view.flowLabel}</span>
    <div className="pv-flow-nodes">{view.flowNodes.map((node, i) => <span key={node + i}>
      {independent ? <DomainIcon aria-hidden="true" /> : i === 0 ? <FileCode2 aria-hidden="true" /> : i === view.flowNodes.length - 1 ? <CheckCircle2 aria-hidden="true" /> : <Network aria-hidden="true" />}
      <span>{node}</span>
    </span>)}</div>
  </div>;
}

export default function App() {
  const [activeNav, setActiveNav] = useState('overview');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [projectTab, setProjectTab] = useState('overview');
  const [directoryOpen, setDirectoryOpen] = useState(false);
  const [certGroup, setCertGroup] = useState('all');
  const [certSearch, setCertSearch] = useState('');
  const [openCareer, setOpenCareer] = useState([]);
  const [copiedHash, setCopiedHash] = useState(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLElement>(null);
  const selectedProject = CASE_STUDIES.find(c => c.id === selectedProjectId);
  const selectedView = PROJECT_VIEWS.find(c => c.id === selectedProjectId);
  const projectTabs = ['overview', 'architecture', 'validation', 'evidence'];
  const certificates = useMemo(() => [
    ...UDACITY_CERTIFICATES.map(c => ({...c, issuer: 'Udacity', group: 'udacity', summary: ''})),
    ...COURSERA_AND_INDUSTRY_CERTIFICATES
  ], []);
  const filteredCertificates = certificates.filter(c => (certGroup === 'all' || c.group === certGroup) && `${c.title} ${c.issuer}`.toLowerCase().includes(certSearch.toLowerCase()));
  const filteredProjects = CASE_STUDIES.filter(c => (selectedCategory === 'all' || c.category === selectedCategory) && `${c.title} ${c.code} ${c.stack.join(' ')} ${PROJECT_VIEWS.find(v => v.id === c.id).shortTitle}`.toLowerCase().includes(searchQuery.toLowerCase()));
  const visibleProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 6);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (selectedProjectId) {
      if (!dialog.open) dialog.showModal();
      document.body.classList.add('modal-open');
    } else {
      if (dialog.open) dialog.close();
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [selectedProjectId]);

  const navigate = (section, revealAll = false) => {
    setActiveNav(section);
    if (section === 'credentials') setDirectoryOpen(true);
    if (revealAll) setShowAllProjects(true);
    requestAnimationFrame(() => document.getElementById(`section-${section}`)?.scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'}));
  };
  const openProject = id => {
    openerRef.current = document.activeElement as HTMLElement;
    setProjectTab('overview');
    setCopiedHash(null);
    setSelectedProjectId(id);
  };
  const chooseCategory = category => {
    setSelectedCategory(category);
    setShowAllProjects(true);
    navigate('cases');
  };
  const copyHash = async hash => {
    try { await navigator.clipboard.writeText(hash); setCopiedHash(hash); }
    catch { setCopiedHash('unavailable'); }
  };
  const changeTab = (event, index) => {
    const key = event.key;
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(key)) return;
    event.preventDefault();
    const next = key === 'Home' ? 0 : key === 'End' ? 3 : (index + (key === 'ArrowRight' ? 1 : -1) + 4) % 4;
    setProjectTab(projectTabs[next]);
    document.getElementById(`project-tab-${projectTabs[next]}`)?.focus();
  };

  return <div className="pv-site">
    <a className="pv-skip" href="#main-content">Skip to content</a>
    <header className="pv-header">
      <div className="pv-shell pv-header-inner">
        <button className="pv-brand" onClick={() => navigate('overview')} aria-label="Djessi Jorge, back to overview">
          <span className="pv-brand-mark" aria-hidden="true">DJ<span /></span>
          <span><strong>Djessi Jorge</strong><small><MapPin aria-hidden="true" /> London, UK</small></span>
        </button>
        <nav className="pv-nav" aria-label="Main navigation">
          {[['overview','Overview'],['cases','Projects'],['experience','Experience'],['credentials','Credentials']].map(([id,label]) => <button key={id} className={activeNav === id ? 'active' : ''} onClick={() => navigate(id)}>{label}</button>)}
        </nav>
        <div className="pv-header-links">
          <a href="https://github.com/djessijorge9-ship-it/architecture-evaluation-portfolio" target="_blank" rel="noreferrer" aria-label="Portfolio source on GitHub"><Github aria-hidden="true" /></a>
          <a className="pv-linkedin" aria-label="Connect on LinkedIn" href="https://www.linkedin.com/in/djessijorge/" target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /><span>Connect</span><ArrowUpRight aria-hidden="true" /></a>
        </div>
      </div>
    </header>

    <main id="main-content" className="pv-shell">
      <section id="section-overview" className="pv-hero">
        <div className="pv-hero-copy">
          <span className="pv-eyebrow"><span className="pv-line" /> Enterprise IT. Applied engineering.</span>
          <h1>Engineering for<br /><em>cloud, AI</em><br />&amp; data systems.</h1>
          <p className="pv-lead">Enterprise IT and operational leadership, paired with AI-assisted academic work in cloud, AI and data engineering.</p>
          <div className="pv-actions">
            <button className="pv-button primary" onClick={() => navigate('featured')}>Explore selected work <ArrowDown aria-hidden="true" /></button>
            <button className="pv-button secondary" onClick={() => navigate('experience')}>Career background <ArrowUpRight aria-hidden="true" /></button>
          </div>
        </div>
        <div className="pv-system-map" aria-label="Interactive map of portfolio disciplines">
          <div className="pv-map-grid" aria-hidden="true" />
          <div className="pv-map-top"><span>AREAS OF PRACTICE</span><span>3 disciplines</span></div>
          <svg className="pv-map-lines" viewBox="0 0 500 400" aria-hidden="true"><path d="M250 200 C250 100 100 200 100 100 M250 200 C250 100 400 200 400 100 M250 200 V330" fill="none" stroke="currentColor" strokeWidth="1.4" strokeDasharray="5 6" /></svg>
          <div className="pv-map-orbit" aria-hidden="true" />
          <div className="pv-map-core"><Network aria-hidden="true" /><strong>Systems<br />thinking</strong><small>Design · Build · Verify</small></div>
          {Object.entries(DOMAIN_META).map(([id, meta]) => {const Icon = meta.icon; return <button key={id} className={`pv-map-node ${id}`} onClick={() => chooseCategory(id)} aria-label={`Explore ${meta.label} projects`}><Icon aria-hidden="true" /><strong>{id === 'cloud' ? 'Cloud' : id === 'ai' ? 'AI & agents' : 'Data'}</strong><small>{CASE_STUDIES.filter(c=>c.category===id).length} projects <ArrowUpRight aria-hidden="true" /></small></button>;})}
          <div className="pv-map-caption"><span>Decisions</span><ArrowRight aria-hidden="true" /><span>Implementation</span><ArrowRight aria-hidden="true" /><span>Evidence</span></div>
        </div>
      </section>

      <div className="pv-stat-strip" aria-label="Portfolio at a glance">
        <div className="pv-stat"><strong>14<span> / projects</span></strong><small>Architecture, implementation & validation</small></div>
        <div className="pv-stat"><strong>48<span> / credentials</span></strong><small>Official verification links</small></div>
        <div className="pv-stat"><strong>~10.5<span> / years</span></strong><small>Paid enterprise IT experience</small></div>
      </div>

      <section id="section-featured" className="pv-section">
        <div className="pv-section-heading"><div><span className="pv-eyebrow">01 / Selected work</span><h2>Start with these three.</h2></div><button className="pv-text-link" onClick={() => navigate('cases',true)}>Explore all 14 projects <ArrowUpRight aria-hidden="true" /></button></div>
        <div className="pv-featured">{FEATURED_IMPLEMENTATIONS.map(f => {const c=CASE_STUDIES.find(c=>c.id===f.projectId);const v=PROJECT_VIEWS.find(v=>v.id===c.id);return <button className={`pv-project-card ${c.category}`} key={c.id} onClick={()=>openProject(c.id)} aria-label={`View project ${c.code}: ${v.shortTitle}`}>
          <div className="pv-card-meta"><span className={`pv-domain ${c.category}`}>{DOMAIN_META[c.category].label}</span><span>{c.code}</span></div>
          <div className="pv-feature-art"><MiniFlow view={v} category={c.category} /></div>
          <div className="pv-card-content"><h3>{v.shortTitle}</h3><p>{v.summary}</p><div className="pv-result"><strong>{v.metricValue}</strong><span>{v.metricLabel}</span></div></div>
          <div className="pv-card-footer"><small>{v.scopeLabel}</small><span className="pv-round-arrow"><ArrowUpRight aria-hidden="true" /></span></div>
        </button>;})}</div>
      </section>

      <section id="section-cases" className="pv-section">
        <div className="pv-section-heading"><div><span className="pv-eyebrow">02 / Project library</span><h2>Explore the engineering.</h2></div><p>Pick a project for its decisions,<br />architecture and recorded results.</p></div>
        <div className="pv-filter-bar"><div className="pv-filter-pills" aria-label="Filter projects">
          {[['all','All work'],['cloud','Cloud'],['ai','AI & agents'],['data','Data & integration']].map(([id,label])=><button key={id} className={`pv-pill ${selectedCategory===id?'active':''}`} aria-pressed={selectedCategory===id} onClick={()=>{setSelectedCategory(id);setShowAllProjects(true);}}>{label}<span>{id==='all'?14:CASE_STUDIES.filter(c=>c.category===id).length}</span></button>)}
        </div><label className="pv-search"><Search aria-hidden="true" /><input aria-label="Search projects" placeholder="Find a stack or project…" value={searchQuery} onChange={e=>{setSearchQuery(e.target.value);setShowAllProjects(true);}} />{searchQuery&&<button aria-label="Clear project search" onClick={()=>setSearchQuery('')}><X aria-hidden="true" /></button>}</label></div>
        <div className="pv-project-grid">{visibleProjects.map(c=>{const v=PROJECT_VIEWS.find(v=>v.id===c.id);return <button className={`pv-project-tile ${c.category}`} key={c.id} onClick={()=>openProject(c.id)} aria-label={`View project ${c.code}: ${v.shortTitle}`}>
          <div className="pv-card-meta"><span className={`pv-domain ${c.category}`}>{DOMAIN_META[c.category].label}</span><span>{c.code}</span></div>
          <div className="pv-tile-art"><MiniFlow view={v} category={c.category} compact /></div>
          <div className="pv-tile-body"><h3>{v.shortTitle}</h3><div className="pv-result"><strong>{v.metricValue}</strong><span>{v.metricLabel}</span></div><div className="pv-chips">{c.stack.slice(0,3).map(s=><span key={s}>{s}</span>)}</div></div>
          <div className="pv-card-footer"><small>{v.scopeLabel}</small><ArrowUpRight aria-hidden="true" /></div>
        </button>;})}</div>
        {!filteredProjects.length&&<div className="pv-empty"><Search aria-hidden="true" /><h3>No matching projects</h3><p>Try Python, Azure, Kafka or a case-study number.</p><button className="pv-button secondary" onClick={()=>{setSearchQuery('');setSelectedCategory('all');}}>Reset filters</button></div>}
        {!showAllProjects&&filteredProjects.length>6&&<div className="pv-more"><button className="pv-button secondary" onClick={()=>setShowAllProjects(true)}>Show all 14 projects <ArrowDown aria-hidden="true" /></button><small>Showing 6 of 14 · All evidence remains available</small></div>}
        <p className="pv-scope-note"><FlaskConical aria-hidden="true" />Academic implementations include supplied starters and documented AI assistance. Each project retains its own execution scope and evidence limits.</p>
      </section>

      <section className="pv-skills-ribbon" aria-label="Engineering toolkit">
        <div><Cloud aria-hidden="true" /><span><strong>Cloud & delivery</strong><small>AWS · Azure · Terraform · CI/CD</small></span></div>
        <div><Cpu aria-hidden="true" /><span><strong>AI & backend</strong><small>Python · FastAPI · LangGraph · Claude SDK</small></span></div>
        <div><Database aria-hidden="true" /><span><strong>Data & integration</strong><small>Kafka · Spark · Scala · SQL</small></span></div>
      </section>

      <section id="section-experience" className="pv-section">
        <div className="pv-section-heading"><div><span className="pv-eyebrow">03 / Career background</span><h2>Enterprise experience.<br />Practical perspective.</h2></div><p>Clinical systems, energy support,<br />software development and technical learning.</p></div>
        <div className="pv-timeline">{ENTERPRISE_TIMELINE.map((item,i)=>{const open=openCareer.includes(i);return <article className="pv-career-row" key={item.period}>
          <button className="pv-career-summary" aria-expanded={open} aria-controls={`career-detail-${i}`} onClick={()=>setOpenCareer(rows=>rows.includes(i)?rows.filter(n=>n!==i):[...rows,i])}>
            <span className="pv-career-date">{item.period}</span><span className={`pv-career-mark ${i===0?'academic':''}`} aria-hidden="true">{i===0?<FlaskConical/>:i===1?'DCD':i===2?'TCS':i===4?'C':'NHS'}</span><span className="pv-career-title"><strong>{item.role}</strong><span>{item.company}</span><small>{i===0?'Independent academic practice':item.domainBadge}</small></span><ChevronDown className={open?'rotated':''} aria-hidden="true" />
          </button>
          {open&&<div id={`career-detail-${i}`} className="pv-career-detail"><p>{item.summary}</p><ul>{item.highlights.map(h=><li key={h}>{h}</li>)}</ul><div className="pv-chips">{item.tags.map(t=><span key={t}>{t}</span>)}</div><small>{item.location}</small></div>}
        </article>;})}</div>
      </section>

      <section id="section-credentials" className="pv-section">
        <div className="pv-credential-banner"><div className="pv-credential-number"><Award aria-hidden="true" /><strong>48</strong><span>verified credentials</span></div><div><span className="pv-eyebrow">04 / Continuous learning</span><h2>Knowledge with a paper trail.</h2><p>19 Udacity credentials and 29 industry credentials.<br />Open any certificate to verify it at the source.</p><div className="pv-issuer-row"><span>AWS</span><span>Microsoft Azure</span><span>Google</span><span>Anthropic</span><span>IBM</span><span>EPFL</span></div></div><button className="pv-button primary" aria-expanded={directoryOpen} aria-controls="credential-directory" onClick={()=>setDirectoryOpen(!directoryOpen)}>{directoryOpen?'Close directory':'Browse credentials'}<ChevronDown className={directoryOpen?'rotated':''} aria-hidden="true" /></button></div>
        {directoryOpen&&<div id="credential-directory" className="pv-directory"><div className="pv-filter-bar"><div className="pv-filter-pills" aria-label="Filter credentials">{[['all','All 48'],['udacity','Udacity 19'],...CERT_GROUPS.map(g=>[g.id,g.shortLabel])].map(([id,label])=><button key={id} className={`pv-pill ${certGroup===id?'active':''}`} aria-pressed={certGroup===id} onClick={()=>setCertGroup(id)}>{label}</button>)}</div><label className="pv-search"><Search aria-hidden="true" /><input aria-label="Search credentials" placeholder="Search credentials…" value={certSearch} onChange={e=>setCertSearch(e.target.value)} /></label></div><p className="pv-directory-count" role="status">{filteredCertificates.length} credentials</p><div className="pv-certificate-grid">{filteredCertificates.map(c=><a className="pv-certificate" key={c.url} href={c.url} target="_blank" rel="noreferrer"><span className="pv-cert-icon" aria-hidden="true"><Award /></span><span className="pv-cert-copy"><strong>{c.title}</strong><small>{c.issuer} · {c.date}</small>{c.summary&&<span>{c.summary}</span>}</span><ArrowUpRight aria-hidden="true" /><span className="pv-sr-only">Verify certificate</span></a>)}</div>{!filteredCertificates.length&&<div className="pv-empty">No credentials match this search.</div>}</div>}
      </section>

      <section className="pv-contact"><div><span className="pv-eyebrow">Connect</span><h2>Discuss the work.<br />Explore the opportunity.</h2></div><div className="pv-actions"><a className="pv-button primary" href="https://www.linkedin.com/in/djessijorge/" target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight aria-hidden="true" /></a><a className="pv-button secondary" href="https://github.com/djessijorge9-ship-it/architecture-evaluation-portfolio" target="_blank" rel="noreferrer"><Github aria-hidden="true" />Portfolio source</a></div></section>
      <footer className="pv-footer"><span>Djessi Jorge <span aria-hidden="true">/</span> London, UK</span><span>Cloud · AI · Data</span><button onClick={()=>navigate('overview')}>Back to top <ArrowUp aria-hidden="true" /></button></footer>
    </main>

    <dialog ref={dialogRef} className="pv-dialog" aria-labelledby="project-dialog-title" onCancel={()=>setSelectedProjectId(null)} onClose={()=>{setSelectedProjectId(null);document.body.classList.remove('modal-open');openerRef.current?.focus();}}>
      {selectedProject&&selectedView&&<>
        <div className="pv-dialog-header"><div><span className={`pv-domain ${selectedProject.category}`}>{selectedProject.code} / {DOMAIN_META[selectedProject.category].label}</span><h2 id="project-dialog-title">{selectedView.shortTitle}</h2><p>{selectedView.scopeLabel}</p></div><button className="pv-close" onClick={()=>setSelectedProjectId(null)} aria-label="Close project"><X aria-hidden="true" /></button></div>
        <div className="pv-tabs" role="tablist" aria-label="Project details">{projectTabs.map((tab,i)=><button key={tab} role="tab" id={`project-tab-${tab}`} aria-selected={projectTab===tab} aria-controls="project-panel" tabIndex={projectTab===tab?0:-1} onKeyDown={e=>changeTab(e,i)} onClick={()=>setProjectTab(tab)}>{tab==='overview'?'At a glance':tab==='validation'?'Validation & lessons':tab[0].toUpperCase()+tab.slice(1)}</button>)}</div>
        <div className="pv-tab-panel" role="tabpanel" id="project-panel" aria-labelledby={`project-tab-${projectTab}`} tabIndex={0} key={`${selectedProject.id}-${projectTab}`}>
          {projectTab==='overview'&&<><p className="pv-dialog-intro">{selectedView.summary}</p><div className={`pv-dialog-art ${selectedProject.category}`}><MiniFlow view={selectedView} category={selectedProject.category}/><div className="pv-result"><strong>{selectedView.metricValue}</strong><span>{selectedView.metricLabel}</span></div></div><div className="pv-dialog-overview"><div className="pv-fact"><span>Contribution</span><p>{selectedView.contribution}</p></div><div className="pv-fact"><span>Design decision</span><p>{selectedView.decision}</p></div></div><div className="pv-chips">{selectedProject.stack.map(s=><span key={s}>{s}</span>)}</div><details className="pv-full-notes"><summary>Read the full implementation notes <ChevronDown aria-hidden="true" /></summary><h3>Context and challenge</h3><p>{selectedProject.narrative.context}</p><h3>Objective</h3><p>{selectedProject.narrative.objective}</p><h3>Implementation</h3><ul>{selectedProject.narrative.execution.map(t=><li key={t}>{t}</li>)}</ul><h3>Recorded outcome</h3><p>{selectedProject.narrative.outcome}</p></details></>}
          {projectTab==='architecture'&&<><div className="pv-panel-heading"><h3>System architecture & workflow</h3><span><ArrowRight aria-hidden="true" /> Scroll the diagram on smaller screens</span></div><div className="pv-diagram-scroll"><AwsReferenceArchitectureSVG config={selectedProject.diagramConfig} projectId={selectedProject.id}/></div><p className="pv-project-scope">{selectedView.flowLabel.startsWith('Independent')?'This diagram compares shared engineering patterns across independent projects or assignments. It does not represent one integrated deployment.':selectedProject.diagramConfig.subtitleLine2}</p></>}
          {projectTab==='validation'&&<section className="pv-validation" aria-labelledby={`validation-title-${selectedProject.id}`}><span className="pv-eyebrow"><FlaskConical aria-hidden="true" /> Recorded results & boundaries</span><h3 id={`validation-title-${selectedProject.id}`}>Validation and lessons learned</h3><p>{selectedProject.validationLessons}</p><div className="pv-project-scope"><ShieldCheck aria-hidden="true" /><span>{selectedProject.evidence.scopeSummary}</span></div></section>}
          {projectTab==='evidence'&&<><div className="pv-panel-heading"><h3>Evidence & provenance</h3><a className="pv-text-link" href={selectedProject.certUrl} target="_blank" rel="noreferrer">Verify credential <ArrowUpRight aria-hidden="true" /></a></div><p>{selectedProject.evidence.credential}</p><div className="pv-project-scope">{selectedProject.evidence.scopeSummary}</div><h4>Retained deliverables</h4><ul className="pv-deliverables">{selectedProject.evidence.deliverables.map(t=><li key={t}><CheckCircle2 aria-hidden="true" /><span>{t}</span></li>)}</ul><h4>Representative files</h4><div className="pv-evidence-files">{selectedProject.evidence.filesIncluded.map(f=><code key={f}>{f}</code>)}</div><div className="pv-checksum"><span>Archive SHA256<code>{selectedProject.evidence.sha256}</code></span><button className="pv-button secondary small" onClick={()=>copyHash(selectedProject.evidence.sha256)}>{copiedHash===selectedProject.evidence.sha256?<Check aria-hidden="true"/>:<Copy aria-hidden="true"/>}{copiedHash===selectedProject.evidence.sha256?'Copied':'Copy hash'}</button></div>{copiedHash==='unavailable'&&<p role="status">Copy is unavailable. The full checksum above can be selected manually.</p>}</>}
        </div>
      </>}
    </dialog>
  </div>;
}
