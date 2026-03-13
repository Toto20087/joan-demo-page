"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { easings } from "@/lib/easings";

interface ImageRevealProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function ImageReveal({
  src,
  alt,
  fill = true,
  width,
  height,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: ImageRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div ref={ref} className={`overflow-hidden ${className}`}>
        {fill ? (
          <Image src={src} alt={alt} fill className="object-cover" sizes={sizes} priority={priority} />
        ) : (
          <Image src={src} alt={alt} width={width} height={height} className="object-cover w-full h-full" sizes={sizes} priority={priority} />
        )}
      </div>
    );
  }

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        animate={isInView ? { clipPath: "inset(0% 0 0 0)" } : {}}
        transition={{ duration: 1.0, ease: easings.dramatic }}
        className="relative w-full h-full"
      >
        <motion.div
          initial={{ scale: 1.3 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 1.4, ease: easings.smooth }}
          className="relative w-full h-full"
        >
          {fill ? (
            <Image src={src} alt={alt} fill className="object-cover" sizes={sizes} priority={priority} />
          ) : (
            <Image src={src} alt={alt} width={width} height={height} className="object-cover w-full h-full" sizes={sizes} priority={priority} />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
