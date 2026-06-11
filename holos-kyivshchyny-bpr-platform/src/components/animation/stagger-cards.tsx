"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
export function StaggerCards({ children }: { children: React.ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(scope.current?.children ?? [], {
        y: 18,
        stagger: 0.08,
        duration: 0.55,
      });
    },
    { scope },
  );
  return (
    <div ref={scope} className="grid-cards">
      {children}
    </div>
  );
}
