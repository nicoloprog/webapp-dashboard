export const dynamic = "force-static";

export async function GET() {
  const res = await fetch("https://data.mongodb-api.com/...", {
    headers: {
      "Content-Type": "application/json",
      ...(process.env.DATA_API_KEY && { "API-Key": process.env.DATA_API_KEY }),
    },
  });
  const data = await res.json();

  return Response.json({ data });
}
