// ============================================================
// CONFIGURACIÓN DEL SITIO — RMA Estudio
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
    name: "RMA Estudio",
    tagline: "Arquitectura, construcción y dirección de obra para el sector corporativo, industrial y comercial",
    founderName: "Arq. Francisco Rodríguez Moyano",
    founderTitle: "Arquitecto — Fundador",
    phone: "+54 11 6738 5272",
    email: "info@rmaestudio.com.ar",
    whatsapp: "541167385272",
    address: "Avda Del Libertador 2495 12°A, Olivos, Buenos Aires",
    instagram: "https://instagram.com/rmaestudio",
    linkedin: "https://linkedin.com/company/rmaestudio",
    facebook: "https://facebook.com/rmaestudio",
  },

  // --- HERO ---
  hero: {
    title: "Arquitectura con visión estratégica",
    subtitle:
      "Diseño, construcción y dirección de obra para proyectos corporativos, industriales y comerciales",
    cta: "Consultá tu proyecto",
    backgroundImage: "/images/hero.jpg",
  },

  // --- SERVICIOS ---
  services: {
    heading: "Nuestros servicios",
    subtitle: "Soluciones integrales de arquitectura, construcción y gestión de obra",
    items: [
      {
        title: "Proyecto de arquitectura",
        description:
          "Diseño integral de proyectos corporativos, industriales y comerciales con foco en funcionalidad, normativa y estética.",
        icon: "Compass" as const,
      },
      {
        title: "Dirección de obra",
        description:
          "Supervisión y coordinación de la ejecución en obra, asegurando plazos, calidad y cumplimiento de proyecto.",
        icon: "HardHat" as const,
      },
      {
        title: "Construcción llave en mano",
        description:
          "Ejecución completa de la obra desde la estructura hasta las terminaciones, con gestión unificada.",
        icon: "Building" as const,
      },
      {
        title: "Project management",
        description:
          "Planificación, control de costos y coordinación de equipos para llevar cada proyecto a término con eficiencia.",
        icon: "ClipboardList" as const,
      },
      {
        title: "Representación técnica",
        description:
          "Representante técnico, técnico en seguridad e higiene y coordinador de tareas dedicado a cada obra.",
        icon: "Shield" as const,
      },
      {
        title: "Consultoría y factibilidad",
        description:
          "Estudios de prefactibilidad, análisis normativo y asesoramiento estratégico para la toma de decisiones.",
        icon: "Search" as const,
      },
    ],
  },

  // --- PROYECTOS / PORTFOLIO ---
  projects: {
    heading: "Proyectos",
    subtitle: "Obras ejecutadas en el sector corporativo, industrial y comercial",
    items: [
      {
        title: "Nave Industrial Pilar",
        category: "Industrial",
        description:
          "Diseño y construcción de nave industrial de 2.500m² con oficinas administrativas en Parque Industrial Pilar.",
        image: "/images/projects/local-palermo.jpg",
        year: "2025",
      },
      {
        title: "Oficinas Corporativas Catalinas",
        category: "Corporativo",
        description:
          "Remodelación integral de planta de oficinas de 800m² para empresa multinacional en Catalinas Norte.",
        image: "/images/projects/oficina-microcentro.jpg",
        year: "2025",
      },
      {
        title: "Centro Logístico Ezeiza",
        category: "Industrial",
        description:
          "Ampliación y acondicionamiento de centro de distribución de 5.000m² con sistema de carga y descarga.",
        image: "/images/projects/restaurante-san-telmo.jpg",
        year: "2024",
      },
      {
        title: "Sucursal Bancaria Microcentro",
        category: "Comercial",
        description:
          "Diseño y ejecución de sucursal bancaria de 350m² con área de atención al público y oficinas privadas.",
        image: "/images/projects/showroom-belgrano.jpg",
        year: "2024",
      },
      {
        title: "Planta Farmacéutica Pacheco",
        category: "Industrial",
        description:
          "Construcción de planta de producción con salas limpias y laboratorio bajo normativas GMP.",
        image: "/images/projects/cafe-recoleta.jpg",
        year: "2024",
      },
      {
        title: "Hotel Boutique San Isidro",
        category: "Comercial",
        description:
          "Proyecto completo y dirección de obra para hotel boutique de 24 habitaciones con restaurante.",
        image: "/images/projects/coworking-palermo.jpg",
        year: "2025",
      },
    ],
  },

  // --- SOBRE NOSOTROS ---
  about: {
    heading: "Transparencia, compromiso y efectividad en cada proyecto",
    description:
      "RMA Estudio nace de la convicción de que la arquitectura corporativa e industrial requiere un enfoque integral. Combinamos diseño de calidad con gestión profesional de obra, garantizando que cada proyecto se ejecute en plazo, en presupuesto y con los estándares más altos. Nuestro equipo incluye representante técnico, técnico en seguridad e higiene y coordinador de tareas dedicado.",
    quote: "Construimos confianza a través de resultados.",
    founderImage: "/images/about/founder.jpg",
    values: [
      {
        title: "Personas",
        description:
          "Profesionales especializados en cada disciplina, comprometidos con la excelencia técnica en todas las etapas.",
      },
      {
        title: "Tecnología",
        description:
          "Herramientas y metodologías de gestión actualizadas para optimizar plazos, costos y calidad.",
      },
      {
        title: "Clientes",
        description:
          "Comunicación fluida y alineación total con los objetivos de cada cliente, asegurando resultados a medida.",
      },
    ],
  },

  // --- PROCESO DE TRABAJO ---
  process: {
    heading: "Cómo trabajamos",
    subtitle: "Un proceso profesional de principio a fin",
    steps: [
      {
        number: "01",
        title: "Consulta y factibilidad",
        description: "Analizamos tu necesidad, evaluamos el sitio y la normativa aplicable.",
      },
      {
        number: "02",
        title: "Anteproyecto",
        description:
          "Desarrollamos la propuesta de diseño con plantas, renders y estimación de inversión.",
      },
      {
        number: "03",
        title: "Proyecto ejecutivo",
        description:
          "Documentación técnica completa: planos, pliegos, cómputo y presupuesto detallado.",
      },
      {
        number: "04",
        title: "Ejecución de obra",
        description: "Construcción con supervisión permanente, control de calidad y reportes de avance.",
      },
      {
        number: "05",
        title: "Entrega y postventa",
        description: "Entrega formal con documentación as-built y acompañamiento postventa.",
      },
    ],
  },

  // --- TESTIMONIOS ---
  testimonials: {
    heading: "Lo que dicen nuestros clientes",
    items: [
      {
        text: "RMA Estudio gestionó la construcción de nuestra nave industrial con total profesionalismo. Cumplieron cada hito del cronograma y la calidad de terminaciones fue impecable.",
        author: "Ing. Martín Aráoz",
        role: "Director de Operaciones, empresa industrial",
      },
      {
        text: "La dirección de obra fue clave para que nuestro proyecto se mantuviera dentro del presupuesto. Su equipo técnico es de primer nivel.",
        author: "Lic. Carolina Vidal",
        role: "Gerente de Facilities, empresa multinacional",
      },
      {
        text: "Desde el diseño hasta la entrega, el proceso fue transparente y predecible. Se nota que están acostumbrados a trabajar con corporaciones.",
        author: "Arq. Patricio Solano",
        role: "Desarrollador inmobiliario",
      },
    ],
  },

  // --- CONTACTO ---
  contact: {
    heading: "Contactanos",
    subtitle:
      "Contanos sobre tu proyecto y te respondemos en menos de 24 horas.",
    successMessage:
      "¡Gracias! Recibimos tu consulta. Nos comunicaremos en menos de 24 horas.",
    errorMessage:
      "Hubo un error al enviar. Intentá de nuevo o contactanos por WhatsApp.",
  },

  // --- FOOTER ---
  footer: {
    copyright: "Todos los derechos reservados.",
  },

  // --- WHATSAPP CTA ---
  whatsappMessage:
    "Hola, me contacto desde la web de RMA Estudio. Me interesa consultar sobre un proyecto.",

  // --- SEO / METADATA ---
  seo: {
    title:
      "RMA Estudio | Arquitectura, Construcción y Dirección de Obra",
    description:
      "Estudio de arquitectura especializado en proyectos corporativos, industriales y comerciales. Diseño, construcción y project management con alcance nacional.",
    ogImage: "/images/og-image.jpg",
    url: "https://rmaestudio.com.ar",
    locale: "es_AR",
  },
} as const;

export type SiteContent = typeof siteContent;
