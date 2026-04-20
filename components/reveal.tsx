"use client";

import { createElement, useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  as?: "div" | "section" | "article";
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({
  as = "div",
  children,
  className = "",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      className: `reveal ${visible ? "reveal-visible" : ""} ${className}`.trim(),
      style: { transitionDelay: `${delay}ms` },
    },
    children,
  );
}
