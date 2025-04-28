import { cookies } from "next/headers";

export async function GET(request: Request) {
  const cookieStore = await cookies(); // await the promise
  const token = cookieStore.get("token");

  return new Response("Hello, Next.js!", {
    status: 200,
    headers: {
      "Set-Cookie": `token=${token?.value || ""}`,
    },
  });
}

export async function POST(request: Request) {
  try {
    const text = await request.text();
    // Process the webhook payload
    // e.g. JSON.parse(text) if it's a JSON payload
  } catch (error: any) {
    return new Response(`Webhook error: ${error.message}`, {
      status: 400,
    });
  }

  return new Response("Success!", {
    status: 200,
  });
}
