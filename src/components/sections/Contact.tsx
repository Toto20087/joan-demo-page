"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteContent } from "@/config/site-content";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SplitText } from "@/components/animations/SplitText";

type FormState = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const { contact, company, services } = siteContent;
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setFormState("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          {/* Left: Info */}
          <div className="col-span-12 lg:col-span-5">
            <ScrollReveal>
              <span className="font-body text-caption text-terracotta-500 uppercase tracking-widest mb-4 block">
                Contacto
              </span>
            </ScrollReveal>
            <SplitText
              text={contact.heading}
              as="h2"
              className="font-display text-display-md text-stone-900 mb-4"
            />
            <ScrollReveal delay={0.2}>
              <p className="font-body text-body-lg text-stone-500 mb-10">
                {contact.subtitle}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="space-y-4">
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 font-body text-body-md text-stone-600 hover:text-terracotta-500 transition-colors cursor-pointer"
                >
                  <Mail className="w-5 h-5 text-terracotta-400" />
                  {company.email}
                </a>
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 font-body text-body-md text-stone-600 hover:text-terracotta-500 transition-colors cursor-pointer"
                >
                  <Phone className="w-5 h-5 text-terracotta-400" />
                  {company.phone}
                </a>
                <div className="flex items-center gap-3 font-body text-body-md text-stone-600">
                  <MapPin className="w-5 h-5 text-terracotta-400" />
                  {company.address}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Form */}
          <ScrollReveal className="col-span-12 lg:col-span-7" delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="font-body text-body-sm font-medium text-stone-700 mb-2 block">
                    Nombre completo
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white border border-stone-200 rounded-sm font-body text-body-md text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-terracotta-400 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-body text-body-sm font-medium text-stone-700 mb-2 block">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white border border-stone-200 rounded-sm font-body text-body-md text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-terracotta-400 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="font-body text-body-sm font-medium text-stone-700 mb-2 block">
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full px-4 py-3 bg-white border border-stone-200 rounded-sm font-body text-body-md text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-terracotta-400 transition-colors"
                    placeholder="+54 11 XXXX-XXXX"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="font-body text-body-sm font-medium text-stone-700 mb-2 block">
                    Tipo de servicio
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 bg-white border border-stone-200 rounded-sm font-body text-body-md text-stone-900 focus:outline-none focus:border-terracotta-400 transition-colors cursor-pointer appearance-none"
                  >
                    <option value="">Seleccioná un servicio</option>
                    {services.items.map((service) => (
                      <option key={service.title} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="font-body text-body-sm font-medium text-stone-700 mb-2 block">
                  Contanos sobre el trabajo que necesitás
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  minLength={20}
                  className="w-full px-4 py-3 bg-white border border-stone-200 rounded-sm font-body text-body-md text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-terracotta-400 transition-colors resize-none"
                  placeholder="Describí brevemente qué necesitás..."
                />
              </div>

              <button
                type="submit"
                disabled={formState === "submitting"}
                data-cursor="Enviar"
                className="w-full md:w-auto bg-terracotta-400 hover:bg-terracotta-600 disabled:bg-stone-300 text-white font-body font-medium px-10 py-4 rounded-sm transition-colors duration-300 cursor-pointer"
              >
                {formState === "submitting" ? "Enviando..." : "Enviar solicitud"}
              </button>

              {formState === "success" && (
                <p className="font-body text-body-md text-green-600">{contact.successMessage}</p>
              )}
              {formState === "error" && (
                <p className="font-body text-body-md text-red-600">{contact.errorMessage}</p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
