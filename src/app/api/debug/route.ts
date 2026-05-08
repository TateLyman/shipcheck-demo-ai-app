export async function GET(): Promise<Response> {
  return Response.json({
    environment: process.env.NODE_ENV ?? "development",
    note: "Demo-only debug route. Production apps should remove or gate this."
  });
}
