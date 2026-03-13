// ============================================================
// CONFIGURACIÓN DEL SITIO — RAME Studio
// ============================================================
// Este archivo contiene TODO el contenido del sitio web.
// Para cambiar textos, imágenes o datos, editá este archivo.
//
// INSTRUCCIONES:
// 1. Los textos están entre comillas "así" — cambiá lo que está adentro
// 2. Las rutas de imágenes empiezan con /images/
// 3. Para cambiar una imagen: reemplazá el archivo en public/images/
//    manteniendo el mismo nombre, o cambiá la ruta acá
// 4. Después de guardar, los cambios se ven automáticamente en desarrollo
//    y se publican al hacer deploy en Vercel
// ============================================================

export const siteContent = {
  // --- DATOS DE LA EMPRESA ---
  company: {
    name: "RAME Studio",
    tagline: "Mantenimiento integral para tu local comercial",
    founderName: "Nombre del Arquitecto",
    founderTitle: "Arquitecto matriculado",
    phone: "+54 11 XXXX-XXXX",
    email: "contacto@ramestudio.com.ar",
    whatsapp: "5411XXXXXXXX",
    address: "Buenos Aires, Argentina",
    instagram: "https://instagram.com/ramestudio",
    linkedin: "https://linkedin.com/company/ramestudio",
    facebook: "https://facebook.com/ramestudio",
  },

  // --- HERO ---
  hero: {
    title: "Transformamos espacios comerciales",
    subtitle:
      "Mantenimiento, refacciones y obras menores con visión de arquitecto",
    cta: "Solicitá tu presupuesto",
    backgroundImage: "/images/hero.jpg",
  },

  // --- SERVICIOS ---
  services: {
    heading: "Nuestros servicios",
    subtitle: "Soluciones integrales para tu espacio comercial",
    items: [
      {
        title: "Mantenimiento preventivo",
        description:
          "Programas de mantenimiento periódico para prevenir problemas y mantener tu local en óptimas condiciones.",
        icon: "Wrench" as const,
      },
      {
        title: "Refacciones y remodelaciones",
        description:
          "Renovamos tu espacio comercial adaptándolo a las nuevas necesidades de tu negocio.",
        icon: "Hammer" as const,
      },
      {
        title: "Instalaciones eléctricas y sanitarias",
        description:
          "Instalación y reparación de sistemas eléctricos y sanitarios con profesionales matriculados.",
        icon: "Zap" as const,
      },
      {
        title: "Pintura y terminaciones",
        description:
          "Terminaciones de primera calidad que transforman la imagen de tu local.",
        icon: "Paintbrush" as const,
      },
      {
        title: "Obras menores y ampliaciones",
        description:
          "Ampliaciones, entrepisos y obras menores con dirección técnica de arquitecto.",
        icon: "Building" as const,
      },
      {
        title: "Consultoría de proyecto",
        description:
          "Asesoramiento profesional para optimizar tu espacio comercial con visión arquitectónica.",
        icon: "Compass" as const,
      },
    ],
  },

  // --- PROYECTOS / PORTFOLIO ---
  projects: {
    heading: "Proyectos",
    subtitle: "Espacios que transformamos",
    items: [
      {
        title: "Local Palermo Soho",
        category: "Remodelación",
        description:
          "Remodelación integral de local gastronómico de 120m² en Palermo Soho.",
        image: "/images/projects/local-palermo.jpg",
        year: "2025",
      },
      {
        title: "Oficina Microcentro",
        category: "Mantenimiento",
        description:
          "Programa de mantenimiento preventivo para oficina corporativa de 300m².",
        image: "/images/projects/oficina-microcentro.jpg",
        year: "2025",
      },
      {
        title: "Restaurante San Telmo",
        category: "Obra menor",
        description:
          "Ampliación de terraza y renovación de fachada para restaurante histórico.",
        image: "/images/projects/restaurante-san-telmo.jpg",
        year: "2024",
      },
      {
        title: "Showroom Belgrano",
        category: "Remodelación",
        description:
          "Diseño y ejecución de showroom de 80m² para marca de moda.",
        image: "/images/projects/showroom-belgrano.jpg",
        year: "2024",
      },
      {
        title: "Café Recoleta",
        category: "Refacción",
        description:
          "Refacción completa de cafetería incluyendo instalaciones sanitarias y eléctricas.",
        image: "/images/projects/cafe-recoleta.jpg",
        year: "2024",
      },
      {
        title: "Coworking Palermo Hollywood",
        category: "Obra menor",
        description:
          "Construcción de entrepiso y acondicionamiento de espacio de coworking.",
        image: "/images/projects/coworking-palermo.jpg",
        year: "2025",
      },
    ],
  },

  // --- SOBRE NOSOTROS ---
  about: {
    heading: "Dirigidos por un arquitecto, ejecutados con oficio",
    description:
      "Somos una empresa de mantenimiento y obras menores que combina la visión estratégica de la arquitectura con la ejecución precisa del oficio. Cada proyecto recibe atención de un profesional matriculado que entiende no solo cómo reparar, sino cómo mejorar.",
    quote: "No solo reparamos espacios, los mejoramos.",
    founderImage: "/images/about/founder.jpg",
    values: [
      {
        title: "Visión profesional",
        description:
          "Cada intervención está respaldada por criterio arquitectónico.",
      },
      {
        title: "Cumplimiento",
        description:
          "Plazos claros, presupuestos respetados, sin sorpresas.",
      },
      {
        title: "Calidad",
        description: "Materiales de primera y mano de obra especializada.",
      },
    ],
  },

  // --- PROCESO DE TRABAJO ---
  process: {
    heading: "Cómo trabajamos",
    subtitle: "Un proceso claro de principio a fin",
    steps: [
      {
        number: "01",
        title: "Consulta inicial",
        description: "Nos contactás y nos contás qué necesitás. Sin compromiso.",
      },
      {
        number: "02",
        title: "Relevamiento",
        description:
          "Visitamos tu local para evaluar el trabajo y tomar medidas.",
      },
      {
        number: "03",
        title: "Presupuesto",
        description:
          "Te enviamos un presupuesto detallado con plazos y costos.",
      },
      {
        number: "04",
        title: "Ejecución",
        description: "Realizamos el trabajo con supervisión de arquitecto.",
      },
      {
        number: "05",
        title: "Entrega",
        description: "Entregamos el trabajo terminado con garantía de calidad.",
      },
    ],
  },

  // --- TESTIMONIOS ---
  testimonials: {
    heading: "Lo que dicen nuestros clientes",
    items: [
      {
        text: "Excelente trabajo en la remodelación de nuestro local. Cumplieron con los plazos y el resultado superó nuestras expectativas.",
        author: "María González",
        role: "Dueña de boutique, Palermo",
      },
      {
        text: "El mantenimiento preventivo nos ahorró muchos dolores de cabeza. Muy profesionales y siempre disponibles.",
        author: "Carlos Méndez",
        role: "Gerente de oficina, Microcentro",
      },
      {
        text: "La diferencia de trabajar con un equipo dirigido por un arquitecto se nota. Propusieron soluciones que no habíamos considerado.",
        author: "Laura Fernández",
        role: "Propietaria de restaurante, San Telmo",
      },
    ],
  },

  // --- CONTACTO ---
  contact: {
    heading: "Solicitá tu presupuesto",
    subtitle:
      "Contanos sobre tu proyecto y te respondemos en menos de 24 horas.",
    successMessage:
      "¡Gracias! Recibimos tu solicitud. Nos comunicaremos en menos de 24 horas.",
    errorMessage:
      "Hubo un error al enviar. Intentá de nuevo o contactanos por WhatsApp.",
  },

  // --- FOOTER ---
  footer: {
    copyright: "Todos los derechos reservados.",
  },

  // --- WHATSAPP CTA ---
  whatsappMessage:
    "Hola, me contacto desde la web de RAME Studio. Me interesa solicitar un presupuesto.",

  // --- SEO / METADATA ---
  seo: {
    title:
      "RAME Studio | Mantenimiento de Locales Comerciales en Buenos Aires",
    description:
      "Mantenimiento integral, refacciones y obras menores para locales comerciales en Buenos Aires. Dirigidos por un arquitecto matriculado.",
    ogImage: "/images/og-image.jpg",
    url: "https://ramestudio.com.ar",
    locale: "es_AR",
  },
} as const;

export type SiteContent = typeof siteContent;
