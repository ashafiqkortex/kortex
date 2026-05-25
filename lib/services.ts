import {
  Workflow,
  Bot,
  Cpu,
  ShieldCheck,
  Network,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  short: string;
  deep: string;
  deliverables: string[];
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    slug: "workflow-automation",
    name: "Workflow Automation",
    tagline: "Replace the manual work between your tools.",
    short: "Custom systems that handle the operational work eating your team's time — quoting, dispatching, billing, reporting — built into your existing stack.",
    deep: "Most \"automation\" is glue — if-this-then-that rules bolted between SaaS products. It works until it doesn't, and when it breaks, nobody knows where. We build real operational systems: custom backends that orchestrate work end-to-end, with observability, error handling, and the kind of stability that lets you stop thinking about them.",
    deliverables: [
      "Custom ticketing and dispatch systems",
      "End-to-end billing and invoicing pipelines",
      "Geo-aware dispatch and routing",
      "Live pulse dashboards",
      "Queue-based job orchestration",
      "Multi-system state machines",
    ],
    icon: Workflow,
  },
  {
    slug: "custom-agents",
    name: "Custom AI Agents",
    tagline: "AI workers that do the job, not just chat about it.",
    short: "Domain-trained AI agents that act on your behalf — answering customers, processing requests, running research — with the guardrails to do it safely.",
    deep: "The interesting problem with agents isn't \"can they think\" — it's \"can they act safely inside your business.\" We build domain-trained agents with real tool access, persistent memory, and the governance layer to keep them from doing the wrong thing at scale. Sales agents, research agents, ops agents, support agents. Deployed into your stack, not chatted with on a demo site.",
    deliverables: [
      "Tool-using agents with production guardrails",
      "Multi-agent coordination systems",
      "Long-running autonomous workflows",
      "Human-in-the-loop escalation patterns",
      "Agent evaluation and observability",
    ],
    icon: Bot,
  },
  {
    slug: "ai-on-your-data",
    name: "AI on Your Data",
    tagline: "An AI that actually knows your business.",
    short: "Private AI systems trained on your documents, customers, contracts, and history — so when someone asks a question, the answer is grounded in your reality.",
    deep: "Prototyping an LLM feature takes a weekend. Running it in production — with evals, latency budgets, cost controls, hallucination guards, and a path to iterate — takes engineering. We design and build the full stack: retrieval, generation, evaluation, deployment. Your data stays in your environment.",
    deliverables: [
      "Custom RAG systems over your proprietary data",
      "Evaluation and quality pipelines",
      "Fine-tuning and model customization",
      "Cost-optimized routing and caching",
      "Private deployment in your cloud or on-prem",
    ],
    icon: Cpu,
  },
  {
    slug: "ai-governance",
    name: "AI Oversight",
    tagline: "Know what your AI is doing — and that it stays inside the lines.",
    short: "Live monitoring of every AI system in your business: what it's saying, where it's drifting, when it leaks data or breaks policy. Governance you can actually trust.",
    deep: "AI governance fails when it's static — a PDF that says \"we do not allow bias\" sitting in a Notion wiki. Real governance is continuous: it watches your codebase, your prompts, your outputs, your customer trust signals, and surfaces drift the moment it appears. When your business logic changes, governance changes.",
    deliverables: [
      "Continuous governance monitoring",
      "Drift, leak, and duplication detection",
      "Customer-trust fracture surfacing",
      "Regional and regulatory compliance mapping",
      "Agent and model review systems",
    ],
    icon: ShieldCheck,
  },
  {
    slug: "integrations",
    name: "System Integrations",
    tagline: "Make your existing tools work together — properly.",
    short: "Deep integrations across QuickBooks, Salesforce, DocuSign, Slack, custom APIs, and physical systems — so your data agrees with itself across every tool you already pay for.",
    deep: "Every mid-sized company has the same silent problem: a dozen systems that each hold a piece of the truth and none of which agree. QuickBooks says one thing, the CRM says another, the field app says a third. We build the integration layer that reconciles them — bidirectional, real-time, resilient to schema drift.",
    deliverables: [
      "QuickBooks, Salesforce, HubSpot, DocuSign integrations",
      "Custom API orchestration",
      "Physical-to-digital (IoT, telemetry, field hardware)",
      "Webhooks, event buses, streaming pipelines",
      "Reconciliation and de-duplication layers",
    ],
    icon: Network,
  },
];
