type PrismaModule = {
  PrismaClient: new () => unknown;
};

const globalForPrisma = globalThis as unknown as { prisma?: unknown };

export async function getPrismaClient() {
  if (globalForPrisma.prisma) return globalForPrisma.prisma;

  const mod = (await import("@prisma/client")) as unknown as PrismaModule;
  const client = new mod.PrismaClient();

  if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = client;
  }

  return client;
}
