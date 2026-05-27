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
  short: string[];
  deep: string;
  deliverables: string[];
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    slug: "operational-workflows",
    name: "Operational Workflows",
    tagline: "From customer call to paid invoice. Automatic.",
    short: [
      "Quoting. Dispatching. Scheduling. Invoicing.",
      "The operational work that slows businesses down becomes connected systems that run automatically — reducing coordination overhead across the business.",
    ],
    deep: "Most automation is duct tape. Zapier rules that break silently. Nobody knows where. We build the real thing: custom systems that handle work end-to-end, tell you when something's wrong, and keep working without babysitting. Your operations run on code, not crossed fingers.",
    deliverables: [
      "End-to-end billing pipelines (quote to cash)",
      "Smart dispatch and routing systems",
      "Custom ticketing that replaces 3+ SaaS tools",
      "Real-time ops dashboards",
      "Queue-based job orchestration",
      "Multi-system state machines",
    ],
    icon: Workflow,
  },
  {
    slug: "operational-ai-agents",
    name: "Operational AI Agents",
    tagline: "AI that does the work, not just answers questions.",
    short: [
      "AI systems that answer customers, schedule jobs, manage follow-up, and execute operational tasks inside your business.",
      "Built around your workflows. Connected to your systems. Designed for production — not demos.",
    ],
    deep: "Making AI think is the easy part. Making it act safely inside your business? That's the job. We build agents with real tool access, memory that persists, and guardrails that stop them from doing damage at scale. Support agents. Sales agents. Research agents. Running in your stack. Not on a demo site.",
    deliverables: [
      "Production-ready agents with safety guardrails",
      "Multi-agent coordination systems",
      "Long-running autonomous workflows",
      "Human escalation when confidence drops",
      "Live monitoring and evaluation",
    ],
    icon: Bot,
  },
  {
    slug: "operational-intelligence",
    name: "Operational Intelligence",
    tagline: "AI that knows your customers, your pricing, your business.",
    short: [
      "Your documents, customer history, operational knowledge, and internal processes become searchable operational intelligence your team can actually use.",
      "Answers grounded in your business — not generic AI output.",
    ],
    deep: "Building an AI demo takes a weekend. Running it in production — with accuracy checks, cost controls, speed requirements, and a way to improve it — takes engineering. We build the full system: how it finds information, how it generates answers, how it knows when it's wrong. Your data never leaves your environment.",
    deliverables: [
      "Custom knowledge systems on your data",
      "Accuracy testing and quality pipelines",
      "Model tuning for your domain",
      "Cost-optimized architecture",
      "Private cloud or on-prem deployment",
    ],
    icon: Cpu,
  },
  {
    slug: "ai-oversight-systems",
    name: "AI Oversight Systems",
    tagline: "Know what your AI is actually doing.",
    short: [
      "Operational AI requires monitoring.",
      "We build the systems layer that tracks performance, detects drift, and maintains operational reliability as your AI systems evolve.",
    ],
    deep: "Governance that lives in a PDF is governance that doesn't exist. Real oversight is continuous: watching what your AI actually outputs, catching drift the moment it happens, flagging data leaks before they become incidents. When your business changes, your governance updates automatically.",
    deliverables: [
      "Real-time output monitoring",
      "Drift and policy violation detection",
      "Data leak and PII exposure alerts",
      "Compliance mapping (SOC2, GDPR, HIPAA)",
      "Automated agent behavior review",
    ],
    icon: ShieldCheck,
  },
  {
    slug: "connected-operations",
    name: "Connected Operations",
    tagline: "Make your seven tools act like one system.",
    short: [
      "Most SMBs operate through disconnected systems.",
      "We build the infrastructure layer that synchronizes customer data, workflows, financial systems, communication, and field operations into one connected operational flow.",
    ],
    deep: "Every growing company has the same silent problem: systems that don't talk to each other. Customer data in five places, none of them matching. Orders that exist in the CRM but not in billing. We build integrations that reconcile everything — and stay working when schemas change.",
    deliverables: [
      "QuickBooks, Salesforce, HubSpot, DocuSign sync",
      "Custom API orchestration",
      "IoT and field hardware integration",
      "Real-time event streaming",
      "Data reconciliation and deduplication",
    ],
    icon: Network,
  },
];
