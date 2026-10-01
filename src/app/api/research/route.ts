import { runResearch } from "@/lib/research/pipeline";

export const dynamic = "force-dynamic";

interface ResearchRequestBody {
  query?: unknown;
}

export async function POST(request: Request) {
  let body: ResearchRequestBody;
  try {
    body = (await request.json()) as ResearchRequestBody;
  } catch {
    return Response.json({ error: "طلب غير صالح." }, { status: 400 });
  }

  const query = typeof body.query === "string" ? body.query : "";
  const result = await runResearch(query);

  return Response.json(result);
}
