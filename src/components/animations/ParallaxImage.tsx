"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  sizes?: string;
}

export function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 0.3,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: ParallaxImageProps) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 100}%`, `${speed * 100}%`]);

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <motion.div
        style={shouldReduceMotion ? {} : { y }}
        className="relative w-full h-[120%] -top-[10%]"
      >
        <Image src={src} alt={alt} fill className="object-cover" sizes={sizes} />
      </motion.div>
    </div>
  );
}
