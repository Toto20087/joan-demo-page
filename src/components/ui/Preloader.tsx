"use client";

import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { siteContent } from "@/config/site-content";
import { easings } from "@/lib/easings";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || sessionStorage.getItem("preloaded")) {
      setIsLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          sessionStorage.setItem("preloaded", "1");
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        return Math.min(prev + Math.random() * 18 + 4, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-stone-950"
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.8, ease: easings.exit },
          }}
        >
          <motion.span
            className="font-display text-display-sm text-[#FAF8F5] tracking-wide mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {siteContent.company.name}
          </motion.span>

          <div className="w-48 h-[1px] bg-stone-800 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-terracotta-400"
              initial={{ width: "0%" }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          <motion.span
            className="font-body text-caption text-stone-500 mt-4 tabular-nums"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {Math.min(Math.round(progress), 100)}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
