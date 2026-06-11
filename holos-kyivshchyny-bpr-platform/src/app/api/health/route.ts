import { NextResponse } from "next/server";
import { getPrismaClient } from "@/lib/db/client";

export const dynamic = "force-dynamic";

type QueryablePrisma = {
  $queryRaw: (strings: TemplateStringsArray) => Promise<unknown>;
};

export async function GET() {
  const checks: Record<string, "ok" | "unavailable"> = {};
  let status = "ok";

  try {
    const prisma = (await getPrismaClient()) as QueryablePrisma;
    await prisma.$queryRaw`SELECT 1`;
    checks.database = "ok";
  } catch {
    checks.database = "unavailable";
    status = "degraded";
  }

  return NextResponse.json({
    status,
    checkedAt: new Date().toISOString(),
    service: "holos-kyivshchyny-bpr-platform",
    version: process.env.NEXT_PUBLIC_APP_VERSION ?? "1.0.0",
    checks,
  });
}
