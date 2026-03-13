"use client";

import { siteContent } from "@/config/site-content";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SplitText } from "@/components/animations/SplitText";
import { ImageReveal } from "@/components/animations/ImageReveal";

export function About() {
  const { about, company } = siteContent;

  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top row: Label + Heading */}
        <div className="grid grid-cols-12 gap-6 mb-16 lg:mb-24">
          <ScrollReveal className="col-span-12 lg:col-span-3">
            <span className="font-body text-caption text-terracotta-500 uppercase tracking-widest">
              Sobre nosotros
            </span>
          </ScrollReveal>
          <div className="col-span-12 lg:col-span-9">
            <SplitText
              text={about.heading}
              as="h2"
              className="font-display text-display-lg text-stone-900"
            />
          </div>
        </div>

        {/* Middle row: Image + Description */}
        <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-16 lg:mb-24">
          <ScrollReveal className="col-span-12 lg:col-span-5">
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
              <ImageReveal
                src={about.founderImage}
                alt={`${company.founderName} — ${company.founderTitle}`}
                className="w-full h-full"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </ScrollReveal>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
            <ScrollReveal delay={0.2}>
              <p className="font-body text-body-lg text-stone-500 leading-relaxed mb-8">
                {about.description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="border-t border-terracotta-200 pt-6">
                <blockquote className="font-display text-display-sm text-terracotta-500 italic">
                  &ldquo;{about.quote}&rdquo;
                </blockquote>
                <p className="font-body text-body-sm text-stone-400 mt-3">
                  {company.founderName} — {company.founderTitle}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {about.values.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 0.1}>
              <div className="border-t border-stone-200 pt-6">
                <h3 className="font-display text-lg font-semibold text-stone-900 mb-2">
                  {value.title}
                </h3>
                <p className="font-body text-body-md text-stone-500">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
