export type CaseStudy = {
  slug: string;
  client: string;
  tag: string;
  headline: string;
  tagline: string;
  problem: string;
  built: string[];
  outcome: string;
  thesis: string;
  stack: string[];
  metrics: Array<{ value: string; label: string }>;
  starterQuestions: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "hvac",
    client: "Regional HVAC Services Co.",
    tag: "Operations Transformation",
    headline: "From seven disconnected tools to one system that runs the business.",
    tagline: "A custom operational system covering everything from a customer call to the invoice landing — replacing seven SaaS tools.",
    problem:
      "A dozen disconnected tools — website, phone app, paper tickets, QuickBooks, a patchwork of spreadsheets. Technicians were double-booked. Invoices lagged service by weeks. Management had no live view of the business. Fuel and drive-time costs were quietly eating margin. Nobody could tell you what the business was actually doing in real time, because the answer lived across seven systems that didn't agree.",
    built: [
      "Custom ticketing system, from scratch, replacing three SaaS products",
      "End-to-end automation: quote → schedule → dispatch → service → invoice → collection",
      "Geo-aware dispatch: technician routing optimized for drive time and fuel",
      "Native phone app for technicians with offline support",
      "Full QuickBooks integration: service tickets, projects, invoices sync bidirectionally",
      "DocuSign integration for contracts, quotes, and approvals",
      "Live pulse dashboard: real-time view of jobs, technicians, revenue, exceptions",
    ],
    outcome:
      "Management moved from reviewing yesterday's reports to watching the business run. Technician utilization and invoice cycle time both improved materially. [Specific numbers available under NDA.]",
    thesis:
      "The HVAC team didn't need better dashboards — they needed a ground-truth system to replace the dashboards. We built the layer underneath.",
    stack: ["Next.js", "PostgreSQL", "Mapbox", "QuickBooks API", "DocuSign API", "React Native"],
    metrics: [
      { value: "7→1", label: "Tools consolidated" },
      { value: "−", label: "Drive time reduced" },
      { value: "Live", label: "Revenue visibility" },
    ],
    starterQuestions: [
      "Would this approach work for a smaller field team (under 10 technicians)?",
      "Can you integrate with an existing CRM instead of replacing everything?",
      "What's a realistic week-one deliverable for something like this?",
    ],
  },
  {
    slug: "truth-layer",
    client: "AI-Native Product Co.",
    tag: "AI Oversight",
    headline: "Real-time visibility into what their AI was actually doing.",
    tagline: "Live monitoring that catches drift, data leaks, and policy violations the moment they happen — not at the next quarterly audit.",
    problem:
      "AI governance was a compliance exercise — a PDF of principles disconnected from the code. Meanwhile, real issues were compounding silently: prompt drift across agents, data bleeds between contexts, duplicated logic producing inconsistent outputs, customer trust fractures invisible until churn. Traditional governance tools couldn't see any of it, because they were never wired into the product in the first place.",
    built: [
      "Continuous ingestion: codebase, prompts, business philosophy, regional compliance rules",
      "Drift detection: flags when agent behavior diverges from stated intent",
      "Gap and duplication scanner across logic surfaces",
      "Data leak surfacing: PII and context bleeds across agent boundaries",
      "Multi-surface trust mapping: customer touchpoints where trust begins eroding",
      "Automated agent review against governance charter",
      "Self-updating: regenerates understanding when code or business logic changes",
    ],
    outcome:
      "Governance moved from a quarterly review meeting to a live system inside the product. Drift events are now caught pre-production. Compliance posture is continuously attested, not annually reconstructed.",
    thesis:
      "Most governance tools describe what an AI system should do. Truth Layer observes what it's actually doing — and surfaces the gap.",
    stack: ["Python", "Claude API", "Vector DB", "Git webhooks", "Custom rule engine"],
    metrics: [
      { value: "0→∞", label: "Drift events caught" },
      { value: "Live", label: "Compliance posture" },
      { value: "Auto", label: "Regeneration on change" },
    ],
    starterQuestions: [
      "How is this different from tools like Credo AI or OneTrust?",
      "What compliance frameworks does the Truth Layer map to out of the box?",
      "How quickly after a prompt change does it detect drift?",
    ],
  },
  {
    slug: "sales-intelligence",
    client: "B2B SaaS Sales Org.",
    tag: "Sales Intelligence",
    headline: "An AI layer that knew which deals were actually dying.",
    tagline: "Behavior-based deal health that surfaced silent churn weeks before the CRM caught up — and got reps acting on it before pipeline collapsed.",
    problem:
      "The CRM was a lie. Reps entered what they wanted to enter. Pipeline forecasts were fiction. Management made decisions on garbage data. Deals died silently while stage-age stayed green. The CRM told you what reps typed. It couldn't tell you what was actually happening in a deal.",
    built: [
      "Behavioral ingestion: email, calendar, call transcripts, product usage, support tickets, CRM data",
      "Funnel truth engine: calculates actual deal health from behavior, not self-reported stage",
      "Gap detection: deals that look healthy in CRM but are dying behaviorally",
      "Rep toolkit: next-best-action recommendations, auto-researched buyer context",
      "End-to-end awareness: each rep sees full buyer-side activity, not just their own touches",
    ],
    outcome:
      "Forecast accuracy moved from guesswork to evidence-backed. Deals close faster because reps see the truth of the funnel in real time.",
    thesis:
      "A CRM is a mirror of what reps type. Sales Intelligence is a window onto what's actually happening in the deal.",
    stack: ["Python", "Claude API", "Gong API", "Salesforce API", "ClickHouse"],
    metrics: [
      { value: "↑", label: "Forecast accuracy" },
      { value: "↓", label: "Cycle time" },
      { value: "Live", label: "Behavioral visibility" },
    ],
    starterQuestions: [
      "What behavioral signals matter most for predicting deal health?",
      "Does this work if we use HubSpot or Pipedrive instead of Salesforce?",
      "How do you handle deals where the buyer-side activity isn't visible to us?",
    ],
  },
];
