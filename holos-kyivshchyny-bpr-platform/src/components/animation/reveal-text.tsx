"use client";
export function RevealText({ children }: { children: React.ReactNode }) {
  return <span className="motion-safe:animate-pulse">{children}</span>;
}
