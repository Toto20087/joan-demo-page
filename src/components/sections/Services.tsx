"use client";

import { motion } from "motion/react";
import { Wrench, Hammer, Zap, Paintbrush, Building, Compass, type LucideIcon } from "lucide-react";
import { siteContent } from "@/config/site-content";
import { ScrollReveal, ScrollRevealItem } from "@/components/animations/ScrollReveal";
import { SplitText } from "@/components/animations/SplitText";
import { easings } from "@/lib/easings";

const iconMap: Record<string, LucideIcon> = {
  Wrench,
  Hammer,
  Zap,
  Paintbrush,
  Building,
  Compass,
};

export function Services() {
  const { services } = siteContent;

  return (
    <section id="servicios" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <ScrollReveal>
            <span className="font-body text-caption text-terracotta-500 uppercase tracking-widest mb-4 block">
              Servicios
            </span>
          </ScrollReveal>
          <SplitText
            text={services.heading}
            as="h2"
            className="font-display text-display-lg text-stone-900 mb-4"
          />
          <ScrollReveal delay={0.2}>
            <p className="font-body text-body-lg text-stone-500 max-w-xl">
              {services.subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* Grid */}
        <ScrollReveal stagger staggerDelay={0.08}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.items.map((service) => {
              const Icon = iconMap[service.icon] || Wrench;
              return (
                <ScrollRevealItem key={service.title}>
                  <motion.div
                    className="group p-8 rounded-sm border border-stone-100 hover:border-stone-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3, ease: easings.smooth }}
                  >
                    <div className="w-12 h-12 rounded-sm bg-terracotta-50 flex items-center justify-center mb-6 group-hover:bg-terracotta-100 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-terracotta-500" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-stone-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="font-body text-body-md text-stone-500 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                </ScrollRevealItem>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
