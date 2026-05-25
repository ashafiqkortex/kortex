import { NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { CASE_STUDIES } from "@/lib/case-studies";

export const runtime = "nodejs";

type Role = "user" | "assistant";
type Message = { role: Role; content: string };

function buildSystemPrompt(slug: string): string | null {
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) return null;

  return `You are the Kortex Consulting case-study agent for the ${cs.client} engagement (${cs.tag}). You help prospective clients understand what Kortex built, why, and how it might apply to their situation.

# CASE STUDY CONTEXT

Client: ${cs.client}
Tag: ${cs.tag}
Headline: ${cs.headline}
Tagline: ${cs.tagline}

Problem the client faced:
${cs.problem}

What Kortex built:
${cs.built.map((b, i) => `${i + 1}. ${b}`).join("\n")}

Outcome:
${cs.outcome}

Thesis in action:
"${cs.thesis}"

Technology stack used:
${cs.stack.join(", ")}

# KORTEX'S FIVE SERVICE DISCIPLINES

1. Workflow Automation — end-to-end operational systems replacing chaos between tools
2. Custom Agents — domain-trained AI agents with tool use, memory, and governance
3. AI Engineering — production-grade LLM systems (RAG, evals, fine-tuning, serving)
4. AI Governance — living systems that monitor drift, leaks, duplication, trust fractures
5. Integrations — deep bidirectional integrations (QuickBooks, Salesforce, DocuSign, etc.)

# KORTEX'S BRAND THESIS

"We build the truth layer under your operations." Every business runs on two layers — the tools (CRMs, dashboards, reports) and the reality underneath. Kortex builds the reality layer. The tools describe what was entered; Kortex's systems observe what's actually happening.

# HOW TO RESPOND

- Answer questions about THIS case study and how its approach might apply to the user's situation.
- Speak technically and precisely — assume the user is a decision-maker (founder, COO, VP Engineering, CTO).
- Keep responses under 150 words unless the user asks for depth.
- No hype. No emojis. No "transform your business," "unlock," "leverage," "seamless."
- If asked about pricing or exact timelines: "those are discovery-call topics. Fair to say engagements typically start at 4–6 weeks to first production milestone." Offer to book a call.
- If asked about unrelated topics (weather, sports, politics, other companies): politely redirect back to this case study or the user's operational challenges.
- When the user seems genuinely interested, close with an invitation to book a 20-minute call. Don't push if they're just browsing.
- If you don't know something specific (exact metrics, client name, contract details), say so: "That's not something I can share without the team on a call."

Begin.`;
}

function sanitizeMessages(raw: unknown): Message[] | null {
  if (!Array.isArray(raw)) return null;
  const out: Message[] = [];
  for (const m of raw) {
    if (!m || typeof m !== "object") return null;
    const msg = m as { role?: string; content?: string };
    if (msg.role !== "user" && msg.role !== "assistant") return null;
    if (typeof msg.content !== "string") return null;
    if (msg.content.length > 4000) return null;
    out.push({ role: msg.role, content: msg.content });
  }
  if (out.length === 0) return null;
  if (out.length > 30) return null;
  if (out[out.length - 1].role !== "user") return null;
  return out;
}

function stubResponse(slug: string, lastUserMessage: string): string {
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) return "I can't find that case study.";
  const first = lastUserMessage.slice(0, 80);
  return `Good question — "${first}${lastUserMessage.length > 80 ? "..." : ""}"

For the ${cs.client} engagement, the short answer lives in how we built it: ${cs.built[0].toLowerCase()}. The thesis we were operating on was that ${cs.thesis.replace(/\.$/, "").toLowerCase()}.

Whether that approach fits your situation comes down to a 10-minute conversation about your current operational surface. Want to book a call?

(Note: this is a stubbed response — set ANTHROPIC_API_KEY to enable the live Haiku agent.)`;
}

function encodeSSE(data: string): string {
  return `data: ${JSON.stringify({ text: data })}\n\n`;
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  const { slug, messages: rawMessages } = body as {
    slug?: string;
    messages?: unknown;
  };

  if (!slug || typeof slug !== "string") {
    return new Response(JSON.stringify({ error: "Missing slug" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  const system = buildSystemPrompt(slug);
  if (!system) {
    return new Response(JSON.stringify({ error: "Unknown case study" }), {
      status: 404,
      headers: { "content-type": "application/json" },
    });
  }

  const messages = sanitizeMessages(rawMessages);
  if (!messages) {
    return new Response(JSON.stringify({ error: "Invalid messages" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  const encoder = new TextEncoder();

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        if (apiKey) {
          const anthropic = new Anthropic({ apiKey });
          const msgStream = await anthropic.messages.stream({
            model: "claude-haiku-4-5-20251001",
            max_tokens: 600,
            system: [
              {
                type: "text",
                text: system,
                cache_control: { type: "ephemeral" },
              },
            ],
            messages,
          });

          for await (const event of msgStream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              controller.enqueue(encoder.encode(encodeSSE(event.delta.text)));
            }
          }
        } else {
          const lastUser = messages[messages.length - 1].content;
          const fake = stubResponse(slug, lastUser);
          for (let i = 0; i < fake.length; i++) {
            controller.enqueue(encoder.encode(encodeSSE(fake[i])));
            if (i % 4 === 0) {
              await new Promise((r) => setTimeout(r, 12 + Math.random() * 20));
            }
          }
        }
        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        controller.close();
      } catch (err) {
        const msg = err instanceof Error ? err.message : "Unknown error";
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ error: msg })}\n\n`),
        );
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}
