"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useLenis } from "lenis/react";
import { Menu, X } from "lucide-react";
import { siteContent } from "@/config/site-content";
import { easings } from "@/lib/easings";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const lenis = useLenis();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileOpen(false);
    lenis?.scrollTo(href, { offset: -80, duration: 1.5 });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-cream/80 backdrop-blur-md border-b border-stone-200/50"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: easings.smooth }}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => lenis?.scrollTo(0, { duration: 1.5 })}
            className="font-display text-2xl font-bold tracking-tight cursor-pointer"
          >
            <span className={`transition-colors duration-300 ${isScrolled ? "text-stone-900" : "text-white"}`}>
              RMA
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative font-body text-body-sm font-medium cursor-pointer group ${
                  isScrolled ? "text-stone-600" : "text-white/80"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-300 ${
                    isScrolled ? "bg-stone-900" : "bg-white"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`md:hidden cursor-pointer ${
              isScrolled ? "text-stone-900" : "text-white"
            }`}
            aria-label={isMobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-stone-950 flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="font-display text-display-sm text-white cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : i * 0.05,
                  duration: 0.4,
                  ease: easings.enter,
                }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
