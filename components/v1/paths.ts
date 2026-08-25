// While the redesign lives under /v1 the whole preview has to be navigable
// without falling out into the old design. Anything already rebuilt gets its
// /v1 path; anything not yet written points at a stub that says so.
export const BUILT = new Set(["/", "/contact", "/blog", "/case-studies/hot-and-cold"]);

export const PLANNED: Record<string, string> = {
  "/operations-system": "The flagship offer page",
  "/operations-system/what-it-costs": "Cost, process, ownership and timeline",
  "/mep-contractors": "Mechanical, electrical and plumbing",
  "/construction-contractors": "Self-performing trades",
  "/builders-and-general-contractors": "Builders and general contractors",
  "/servicetitan-alternative": "Kortex alongside or instead of ServiceTitan",
  "/procore-alternative": "Kortex alongside or instead of Procore",
  "/field-service-software-quickbooks": "How the QuickBooks sync actually works",
  "/answer-engine-optimization": "AI search visibility",
  "/certified-payroll": "Certified payroll guides",
  "/tools/rent-vs-own": "Rent vs own calculator",
  "/hvac-operations-software": "HVAC",
  "/electrical-contractor-software": "Electrical",
  "/plumbing-software": "Plumbing",
  "/ai-receptionist": "AI receptionist",
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
