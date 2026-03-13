"use client";

import { siteContent } from "@/config/site-content";
import { ScrollReveal, ScrollRevealItem } from "@/components/animations/ScrollReveal";
import { SplitText } from "@/components/animations/SplitText";

export function Testimonials() {
  const { testimonials } = siteContent;

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <ScrollReveal>
            <span className="font-body text-caption text-terracotta-500 uppercase tracking-widest mb-4 block">
              Testimonios
            </span>
          </ScrollReveal>
          <SplitText
            text={testimonials.heading}
            as="h2"
            className="font-display text-display-lg text-stone-900"
          />
        </div>

        {/* Grid */}
        <ScrollReveal stagger staggerDelay={0.12}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.items.map((testimonial) => (
              <ScrollRevealItem key={testimonial.author}>
                <div className="relative p-8 bg-cream rounded-sm">
                  {/* Decorative quote */}
                  <span
                    className="absolute top-4 left-6 font-display text-[5rem] leading-none text-terracotta-200 select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>

                  <div className="relative">
                    <p className="font-body text-body-md text-stone-600 leading-relaxed mb-6 pt-8">
                      {testimonial.text}
                    </p>
                    <div className="border-t border-stone-200 pt-4">
                      <p className="font-display text-sm font-semibold text-stone-900">
                        {testimonial.author}
                      </p>
                      <p className="font-body text-body-sm text-stone-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollRevealItem>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
