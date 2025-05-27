"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnimationObserverClient() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            const animation = element.getAttribute("data-animate");
            if (animation) {
              element.classList.add(`animate-${animation}`);
              element.classList.remove("start-invisible");
              observer.unobserve(element);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
