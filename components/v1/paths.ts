// While the redesign lives under /v1 the whole preview has to be navigable
// without falling out into the old design. Anything already rebuilt gets its
// /v1 path; anything not yet written points at a stub that says so.
export const BUILT = new Set(["/", "/contact", "/blog", "/case-studies/hot-and-cold",
  "/ai-receptionist", "/answer-engine-optimization", "/mep-contractors", "/construction-contractors",
  "/servicetitan-alternative", "/tools", "/tools/rent-vs-own", "/best-answering-service", "/builders-and-general-contractors", "/procore-alternative",
  "/ai-consultant-washington-dc", "/ai-agent-development", "/ai-agents-for-business",
  "/certified-payroll", "/hvac-operations-software", "/electrical-contractor-software",
  "/plumbing-software"]);

export const PLANNED: Record<string, string> = {
  "/operations-system": "The flagship offer page",
  "/operations-system/what-it-costs": "Cost, process, ownership and timeline",
  "/field-service-software-quickbooks": "How the QuickBooks sync actually works",
  "/about": "About Kortex",
};

/** Canonical site path -> the path to use inside the /v1 preview. */
export function v1(path: string): string {
  if (path.startsWith("/v1")) return path;
  if (path.startsWith("#")) return path;
  if (path === "/") return "/v1";
  if (BUILT.has(path) || path.startsWith("/blog/")) return `/v1${path}`;
  if (path in PLANNED) return `/v1/soon${path}`;
  return path;
}
