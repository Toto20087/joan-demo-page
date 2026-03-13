"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { siteContent } from "@/config/site-content";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SplitText } from "@/components/animations/SplitText";
import { easings } from "@/lib/easings";

export function Process() {
  const { process } = siteContent;
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.6"],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="proceso" ref={sectionRef} className="py-24 lg:py-32 bg-parchment overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <ScrollReveal>
            <span className="font-body text-caption text-terracotta-500 uppercase tracking-widest mb-4 block">
              Proceso
            </span>
          </ScrollReveal>
          <SplitText
            text={process.heading}
            as="h2"
            className="font-display text-display-lg text-stone-900 mb-4"
          />
          <ScrollReveal delay={0.2}>
            <p className="font-body text-body-lg text-stone-500 max-w-xl mx-auto">
              {process.subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* Desktop timeline (horizontal) */}
        <div className="hidden lg:block relative">
          {/* Line track — vertically centered on the circles (h-16 = 4rem, center = 2rem = top-8) */}
          <div className="absolute top-8 left-0 right-0 h-[1px] bg-stone-300 z-0">
            <motion.div
              className="absolute inset-y-0 left-0 bg-terracotta-400"
              style={shouldReduceMotion ? { width: "100%" } : { width: lineWidth }}
            />
          </div>

          <div className="grid grid-cols-5 gap-8">
            {process.steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: shouldReduceMotion ? 0 : i * 0.15,
                  duration: 0.5,
                  ease: easings.smooth,
                }}
                className="relative text-center"
              >
                {/* Circle */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-cream border-2 border-terracotta-400 flex items-center justify-center">
                    <span className="font-display text-lg font-bold text-terracotta-500">
                      {step.number}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-lg font-semibold text-stone-900 mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-body-sm text-stone-500">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile timeline (vertical) */}
        <div className="lg:hidden relative pl-12">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-[1px] bg-stone-300">
            <motion.div
              className="absolute inset-x-0 top-0 bg-terracotta-400"
              style={shouldReduceMotion ? { height: "100%" } : { height: lineWidth }}
            />
          </div>

          <div className="space-y-12">
            {process.steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.1}>
                <div className="relative">
                  {/* Circle */}
                  <div className="absolute -left-12 top-0">
                    <div className="w-10 h-10 rounded-full bg-cream border-2 border-terracotta-400 flex items-center justify-center">
                      <span className="font-display text-sm font-bold text-terracotta-500">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-stone-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-body-md text-stone-500">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
