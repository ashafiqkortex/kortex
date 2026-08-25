import React from "react";
import { v1 } from "./paths";

// Inline markdown used inside lib/blog.ts block text: links, bold, underline,
// italic and code. Ported from the original renderer so post bodies read the
// same; the styling is the Field Industrial one.
type InlineNode = string | React.ReactElement;

function splitByRegex(
  input: InlineNode[],
  source: string,
  make: (m: RegExpExecArray, key: string) => React.ReactNode,
): InlineNode[] {
  const out: InlineNode[] = [];
  input.forEach((chunk, ci) => {
    if (typeof chunk !== "string") { out.push(chunk); return; }
    const re = new RegExp(source, "g");
    let last = 0, i = 0, m: RegExpExecArray | null;
    while ((m = re.exec(chunk)) !== null) {
      if (m.index > last) out.push(chunk.slice(last, m.index));
      out.push(make(m, `${ci}-${i++}`) as React.ReactElement);
      last = m.index + m[0].length;
    }
    if (last < chunk.length) out.push(chunk.slice(last));
  });
  return out;
}

export function inline(text: string): React.ReactNode {
  let n: InlineNode[] = [text];

  // Links first, so URLs are not mangled by the rules below.
  n = splitByRegex(n, "\\[([^\\]]+)\\]\\(([^)]+)\\)", (m, k) => {
    let url = m[2];
    // Post bodies cross-link to canonical paths; inside the preview they must
    // resolve to their /v1 equivalents or the reader falls into the old design.
    if (url.startsWith("/")) url = v1(url);
    const external = /^https?:\/\//.test(url);
    return (
      <a key={k} className="prose-link" href={url}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {m[1]}
      </a>
    );
  });
  n = splitByRegex(n, "\\*\\*([^*]+)\\*\\*", (m, k) => <strong key={k}>{m[1]}</strong>);
  n = splitByRegex(n, "\\+\\+([^+]+)\\+\\+", (m, k) => <span key={k} className="prose-underline">{m[1]}</span>);
  n = splitByRegex(n, "\\*([^*\\n]+)\\*", (m, k) => <em key={k}>{m[1]}</em>);
  n = splitByRegex(n, "(?<![A-Za-z0-9])_([^_\\n]+)_(?![A-Za-z0-9])", (m, k) => <em key={k}>{m[1]}</em>);
  n = splitByRegex(n, "`([^`]+)`", (m, k) => <code key={k}>{m[1]}</code>);

  return n.map((x, i) => (typeof x === "string" ? <React.Fragment key={i}>{x}</React.Fragment> : x));
}
