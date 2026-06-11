"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function AnimatedHero({
  title,
  slogan,
  locale,
}: {
  title: string;
  slogan: string;
  locale: string;
}) {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from("[data-hero]", {
        y: 24,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      });
    },
    { scope },
  );

  return (
    <section ref={scope} className="hero">
      <div className="hero-inner">
        <p data-hero className="eyebrow">
          BPR/CPD provider platform
        </p>
        <h1 data-hero>{title}</h1>
        <p data-hero>{slogan}</p>
        <div data-hero className="actions">
          <a className="primary-link" href={"/" + locale + "/events"}>
            Переглянути події
          </a>
          <a className="secondary-link" href={"/" + locale + "/auth/sign-up"}>
            Зареєструватися
          </a>
        </div>
      </div>
    </section>
  );
}
