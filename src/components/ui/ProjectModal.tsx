"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { easings } from "@/lib/easings";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
}

interface ProjectModalProps {
  project: Project | null;
  projectKey: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function ProjectModal({ project, projectKey, onClose, onPrev, onNext }: ProjectModalProps) {
  const [direction, setDirection] = useState(0); // -1 = prev, 1 = next

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") { setDirection(-1); onPrev(); }
      if (e.key === "ArrowRight") { setDirection(1); onNext(); }
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (project) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, handleKeyDown]);

  const handlePrev = () => { setDirection(-1); onPrev(); };
  const handleNext = () => { setDirection(1); onNext(); };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "40%" : "-40%",
      opacity: 0,
      scale: 1.08,
    }),
    center: {
      x: "0%",
      opacity: 1,
      scale: 1,
      transition: { duration: 0.55, ease: easings.smooth },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-30%" : "30%",
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.35, ease: easings.exit },
    }),
  };

  const textVariants = {
    enter: { opacity: 0, y: 20, filter: "blur(6px)" },
    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.45, ease: easings.enter },
    },
    exit: {
      opacity: 0,
      y: -10,
      filter: "blur(4px)",
      transition: { duration: 0.25, ease: easings.exit },
    },
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-stone-950/90 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Content shell — stays stable, contents animate */}
          <motion.div
            className="relative z-10 w-[94vw] max-w-7xl h-[85vh] flex flex-col md:flex-row bg-cream rounded-lg overflow-hidden"
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: easings.smooth }}
          >
            {/* Image — animated on project change */}
            <div className="relative w-full md:w-2/3 aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={projectKey}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, 62vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Info — animated on project change */}
            <div className="p-8 md:p-12 flex flex-col justify-center md:w-1/3 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={projectKey}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <motion.span
                    className="font-body text-caption text-terracotta-500 uppercase mb-3 block"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4, ease: easings.enter }}
                  >
                    {project.category} — {project.year}
                  </motion.span>
                  <motion.h3
                    className="font-display text-display-sm text-stone-900 mb-4"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18, duration: 0.4, ease: easings.enter }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="font-body text-body-md text-stone-500"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.26, duration: 0.4, ease: easings.enter }}
                  >
                    {project.description}
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-stone-900/80 text-white flex items-center justify-center hover:bg-stone-900 transition-colors cursor-pointer"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Nav arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-stone-900/80 text-white flex items-center justify-center hover:bg-stone-900 transition-colors cursor-pointer"
              aria-label="Proyecto anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-stone-900/80 text-white flex items-center justify-center hover:bg-stone-900 transition-colors cursor-pointer md:right-[35%]"
              aria-label="Proyecto siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
