"use client";

import { useReducedMotion } from "motion/react";
import { easings } from "@/lib/easings";

export function useAnimationConfig() {
  const shouldReduceMotion = useReducedMotion();

  return {
    shouldReduceMotion,
    initial: shouldReduceMotion ? false : undefined,
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { duration: 0.6, ease: easings.smooth },
  };
}
