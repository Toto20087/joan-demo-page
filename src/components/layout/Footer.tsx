"use client";

import { Instagram, Linkedin, Facebook } from "lucide-react";
import { useLenis } from "lenis/react";
import { siteContent } from "@/config/site-content";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

export function Footer() {
  const { company, footer } = siteContent;
  const lenis = useLenis();

  return (
    <footer className="bg-stone-900 text-stone-400 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-12 lg:col-span-4">
            <h2 className="font-display text-2xl font-bold text-white mb-3">
              {company.name}
            </h2>
            <p className="font-body text-body-md text-stone-400 mb-6 max-w-sm">
              {company.tagline}
            </p>

            {/* Social */}
            <div className="flex gap-4">
              <a
                href={company.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:border-studio-400 hover:text-studio-400 transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={company.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:border-studio-400 hover:text-studio-400 transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={company.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:border-studio-400 hover:text-studio-400 transition-colors cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="col-span-6 lg:col-span-3">
            <h3 className="font-body text-caption text-stone-500 uppercase tracking-widest mb-4">
              Navegación
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => lenis?.scrollTo(link.href, { offset: -80, duration: 1.5 })}
                    className="font-body text-body-sm text-stone-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="col-span-6 lg:col-span-3">
            <h3 className="font-body text-caption text-stone-500 uppercase tracking-widest mb-4">
              Contacto
            </h3>
            <ul className="space-y-3 font-body text-body-sm">
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-white transition-colors">
                  {company.email}
                </a>
              </li>
              <li>
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                  {company.phone}
                </a>
              </li>
              <li>{company.address}</li>
            </ul>
          </div>

          {/* Founder */}
          <div className="col-span-12 lg:col-span-2">
            <h3 className="font-body text-caption text-stone-500 uppercase tracking-widest mb-4">
              Dirección
            </h3>
            <p className="font-body text-body-sm text-stone-400">
              {company.founderName}
            </p>
            <p className="font-body text-body-sm text-studio-400">
              {company.founderTitle}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-body-sm text-stone-500">
            &copy; {new Date().getFullYear()} {company.name}. {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
