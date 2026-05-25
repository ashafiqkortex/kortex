export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({
    status: "ok",
    service: "kortex-consulting",
    time: new Date().toISOString(),
  });
}
