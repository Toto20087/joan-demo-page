"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useLenis } from "lenis/react";
import { siteContent } from "@/config/site-content";
import { SplitText } from "@/components/animations/SplitText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { easings } from "@/lib/easings";

export function Hero() {
  const lenis = useLenis();
  const shouldReduceMotion = useReducedMotion();
  const { hero, company } = siteContent;

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={hero.backgroundImage}
          alt={`${company.name} — ${hero.title}`}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/50 to-stone-950/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-4xl">
          <SplitText
            text={hero.title}
            as="h1"
            className="font-display text-display-xl text-white mb-6"
            delay={0.5}
          />

          <motion.p
            className="font-body text-body-lg text-stone-300 max-w-2xl mb-10"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6, ease: easings.smooth }}
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6, ease: easings.smooth }}
          >
            <MagneticButton>
              <button
                onClick={() => lenis?.scrollTo("#contacto", { offset: -80, duration: 1.5 })}
                data-cursor="Ver"
                className="bg-studio-400 hover:bg-studio-600 text-white font-body font-medium px-8 py-4 rounded-sm transition-colors duration-300 cursor-pointer"
              >
                {hero.cta}
              </button>
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
