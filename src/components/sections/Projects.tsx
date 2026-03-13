"use client";

import { useState, useCallback } from "react";
import { siteContent } from "@/config/site-content";
import { ImageReveal } from "@/components/animations/ImageReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SplitText } from "@/components/animations/SplitText";
import { ProjectModal } from "@/components/ui/ProjectModal";

export function Projects() {
  const { projects } = siteContent;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedProject = selectedIndex !== null ? projects.items[selectedIndex] : null;

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + projects.items.length) % projects.items.length : null
    );
  }, [projects.items.length]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % projects.items.length : null
    );
  }, [projects.items.length]);

  return (
    <section id="proyectos" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <ScrollReveal>
            <span className="font-body text-caption text-terracotta-500 uppercase tracking-widest mb-4 block">
              Portfolio
            </span>
          </ScrollReveal>
          <SplitText
            text={projects.heading}
            as="h2"
            className="font-display text-display-lg text-stone-900 mb-4"
          />
          <ScrollReveal delay={0.2}>
            <p className="font-body text-body-lg text-stone-500 max-w-xl">
              {projects.subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {/* Row 1: Large + Small */}
          <ScrollReveal className="col-span-12 lg:col-span-7">
            <button
              onClick={() => setSelectedIndex(0)}
              data-cursor="Ver"
              className="relative aspect-[4/3] w-full overflow-hidden rounded-sm cursor-pointer group"
            >
              <ImageReveal
                src={projects.items[0].image}
                alt={projects.items[0].title}
                className="w-full h-full"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-body text-caption text-terracotta-300 block mb-1">
                  {projects.items[0].category}
                </span>
                <span className="font-display text-xl text-white">
                  {projects.items[0].title}
                </span>
              </div>
            </button>
          </ScrollReveal>

          <ScrollReveal className="col-span-12 lg:col-span-5 lg:mt-16" delay={0.15}>
            <button
              onClick={() => setSelectedIndex(1)}
              data-cursor="Ver"
              className="relative aspect-[3/4] w-full overflow-hidden rounded-sm cursor-pointer group"
            >
              <ImageReveal
                src={projects.items[1].image}
                alt={projects.items[1].title}
                className="w-full h-full"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-body text-caption text-terracotta-300 block mb-1">
                  {projects.items[1].category}
                </span>
                <span className="font-display text-xl text-white">
                  {projects.items[1].title}
                </span>
              </div>
            </button>
          </ScrollReveal>

          {/* Row 2: Small + Large */}
          <ScrollReveal className="col-span-12 lg:col-span-5" delay={0.1}>
            <button
              onClick={() => setSelectedIndex(2)}
              data-cursor="Ver"
              className="relative aspect-[4/3] w-full overflow-hidden rounded-sm cursor-pointer group"
            >
              <ImageReveal
                src={projects.items[2].image}
                alt={projects.items[2].title}
                className="w-full h-full"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-body text-caption text-terracotta-300 block mb-1">
                  {projects.items[2].category}
                </span>
                <span className="font-display text-xl text-white">
                  {projects.items[2].title}
                </span>
              </div>
            </button>
          </ScrollReveal>

          <ScrollReveal className="col-span-12 lg:col-span-7 lg:-mt-8" delay={0.2}>
            <button
              onClick={() => setSelectedIndex(3)}
              data-cursor="Ver"
              className="relative aspect-[4/3] w-full overflow-hidden rounded-sm cursor-pointer group"
            >
              <ImageReveal
                src={projects.items[3].image}
                alt={projects.items[3].title}
                className="w-full h-full"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-body text-caption text-terracotta-300 block mb-1">
                  {projects.items[3].category}
                </span>
                <span className="font-display text-xl text-white">
                  {projects.items[3].title}
                </span>
              </div>
            </button>
          </ScrollReveal>

          {/* Row 3: Two equal */}
          <ScrollReveal className="col-span-12 lg:col-span-6" delay={0.1}>
            <button
              onClick={() => setSelectedIndex(4)}
              data-cursor="Ver"
              className="relative aspect-[3/2] w-full overflow-hidden rounded-sm cursor-pointer group"
            >
              <ImageReveal
                src={projects.items[4].image}
                alt={projects.items[4].title}
                className="w-full h-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-body text-caption text-terracotta-300 block mb-1">
                  {projects.items[4].category}
                </span>
                <span className="font-display text-xl text-white">
                  {projects.items[4].title}
                </span>
              </div>
            </button>
          </ScrollReveal>

          <ScrollReveal className="col-span-12 lg:col-span-6" delay={0.2}>
            <button
              onClick={() => setSelectedIndex(5)}
              data-cursor="Ver"
              className="relative aspect-[3/2] w-full overflow-hidden rounded-sm cursor-pointer group"
            >
              <ImageReveal
                src={projects.items[5].image}
                alt={projects.items[5].title}
                className="w-full h-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-body text-caption text-terracotta-300 block mb-1">
                  {projects.items[5].category}
                </span>
                <span className="font-display text-xl text-white">
                  {projects.items[5].title}
                </span>
              </div>
            </button>
          </ScrollReveal>
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject ? { ...selectedProject } : null}
        projectKey={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
