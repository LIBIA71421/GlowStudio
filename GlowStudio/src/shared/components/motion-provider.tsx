"use client";

import { useEffect, type ReactNode } from "react";
import AOS from "aos";

type MotionProviderProps = Readonly<{
  children: ReactNode;
}>;

export function MotionProvider({ children }: MotionProviderProps) {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
      disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);

  return <>{children}</>;
}
