import { NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

export const runtime = "nodejs";

const SYSTEM = `You are Kortex Consulting's operational diagnostic AI. The user will describe a bottleneck, friction, or failure in their business operations. Return a structured three-part response:

1. DIAGNOSIS (2-3 sentences): What's actually broken at a systems level. Identify the "truth gap" — where the tools diverge from reality.

2. RECOMMENDED INTERVENTION (3-4 sentences): Which Kortex service fits (Workflow Automation, Custom Agents, AI Engineering, AI Governance, or Integrations — or a combination). Sketch the architecture we'd build.

3. ESTIMATED IMPACT (2 bullets): Qualitative outcome + rough quant where reasonable. Always flag quant as "early-stage estimate; real numbers come after discovery."

Tone: premium, confident, technical. No hype. No emojis. No "transform your business." Speak to a decision-maker who values precision. Keep the entire response under 220 words.

Close with the exact sentence: "This is a 30-second read of the surface. A 20-minute call gives us the ground truth."

Format the response in plain text with clear section labels (DIAGNOSIS:, RECOMMENDED INTERVENTION:, ESTIMATED IMPACT:). Use markdown-style bullets for the impact section.`;

function encodeSSE(data: string) {
  return `data: ${JSON.stringify({ text: data })}\n\n`;
}

async function* stubStream(input: string): AsyncGenerator<string> {
  const cleaned = input.trim().slice(0, 300);
  const topic = cleaned.length > 0 ? cleaned : "your operational friction";

  const response = `DIAGNOSIS:
The symptom — "${topic.split(".")[0].slice(0, 120)}${topic.length > 120 ? "..." : ""}" — is almost certainly a truth-gap problem. Your tools are reporting what was entered, not what's actually happening. The information that would let you resolve this lives in behavior, telemetry, and system edges that no current tool is watching.

RECOMMENDED INTERVENTION:
This fits the intersection of Workflow Automation and Integrations, with a thin Custom Agents layer for surfacing. We'd instrument the operational surface directly (behavior, timestamps, state transitions), build a reconciliation layer that treats source-of-truth as earned rather than declared, and expose the resulting ground truth through dashboards and alerting designed for the people who actually make decisions.

ESTIMATED IMPACT:
• Qualitative: decisions made on evidence instead of self-reported data; fewer surprise failures.
• Quantitative: early-stage estimate of 15–40% reduction in cycle time on the affected workflow; real numbers come after discovery.

This is a 30-second read of the surface. A 20-minute call gives us the ground truth.`;

  const chars = response.split("");
  for (let i = 0; i < chars.length; i++) {
    yield chars[i];
    if (i % 3 === 0) {
      await new Promise((r) => setTimeout(r, 12 + Math.random() * 18));
    }
  }
}

export async function POST(req: NextRequest) {
  const { bottleneck } = await req.json();

  if (!bottleneck || typeof bottleneck !== "string" || bottleneck.trim().length < 10) {
    return new Response(
      JSON.stringify({ error: "Please describe your bottleneck in at least 10 characters." }),
      { status: 400, headers: { "content-type": "application/json" } },
    );
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const encoder = new TextEncoder();
      try {
        if (apiKey) {
          const anthropic = new Anthropic({ apiKey });
          const msgStream = await anthropic.messages.stream({
            model: "claude-haiku-4-5-20251001",
            max_tokens: 800,
            system: [
              {
                type: "text",
                text: SYSTEM,
                cache_control: { type: "ephemeral" },
              },
            ],
            messages: [
              {
                role: "user",
                content: bottleneck,
              },
            ],
          });

          for await (const event of msgStream) {
            if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
              controller.enqueue(encoder.encode(encodeSSE(event.delta.text)));
            }
          }
        } else {
          for await (const chunk of stubStream(bottleneck)) {
            controller.enqueue(encoder.encode(encodeSSE(chunk)));
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
