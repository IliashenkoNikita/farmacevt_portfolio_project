export async function GET() {
  return Response.redirect(
    new URL("/uk/cabinet", process.env.APP_URL ?? "http://localhost:3000"),
  );
}
