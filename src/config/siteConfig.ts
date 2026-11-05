// ============================================================
// FLORENTIA — Configuración centralizada del sitio
// Modifica este archivo para personalizar toda la información
// ============================================================

export const siteConfig = {
  // Marca
  brand: {
    name: 'FLORENTIA',
    tagline: 'Floral Studio',
    description: 'Arte floral premium en Mérida, Yucatán',
  },

  // Contacto
  contact: {
    whatsapp: '5219991234567', // Número placeholder — reemplazar con número real
    whatsappMessage: 'Hola, me gustaría obtener más información sobre sus arreglos florales.',
    instagram: 'https://www.instagram.com/florentia.studio',
    instagramHandle: '@florentia.studio',
    email: 'hola@florentia.mx',
    phone: '+52 999 123 4567',
    location: 'Mérida, Yucatán, México',
    address: 'Calle 60 #456, Centro Histórico, Mérida, Yucatán',
    mapUrl: 'https://maps.google.com/?q=Merida+Yucatan+Mexico',
  },

  // Horarios
  hours: [
    { day: 'Lunes a Viernes', time: '9:00 — 19:00' },
    { day: 'Sábado', time: '10:00 — 16:00' },
    { day: 'Domingo', time: 'Cerrado' },
  ],

  // Navegación
  navigation: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Colección', href: '#coleccion' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ],

  // Hero
  hero: {
    headline: 'Flores que cuentan lo que las palabras no pueden.',
    subheadline:
      'Arreglos florales artesanales, diseñados con dedicación para los momentos que importan. Cada composición es una obra única, creada con las flores más frescas de temporada.',
    ctaPrimary: 'Descubrir colección',
    ctaSecondary: 'Hacer un pedido',
    badge: 'ARTE FLORAL · MÉRIDA, YUCATÁN',
    image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=900&q=85&auto=format',
  },

  // Productos
  products: [
    {
      id: 'aurora',
      name: 'Bouquet Aurora',
      price: 890,
      description: 'Tonos rosados y melocotón en una composición delicada que evoca los primeros rayos del amanecer.',
      image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&q=80&auto=format',
    },
    {
      id: 'rosas-eternas',
      name: 'Rosas Eternas',
      price: 1250,
      description: 'Rosas premium de tallo largo en un arreglo clásico y sofisticado que nunca pasa de moda.',
      image: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=600&q=80&auto=format',
    },
    {
      id: 'jardin-silvestre',
      name: 'Jardín Silvestre',
      price: 980,
      description: 'Una mezcla orgánica de flores silvestres y follaje verde que celebra la belleza natural.',
      image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=600&q=80&auto=format',
    },
    {
      id: 'dulce-encanto',
      name: 'Dulce Encanto',
      price: 750,
      description: 'Flores suaves en tonos pastel, perfectas para expresar ternura y cariño en cualquier ocasión.',
      image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=600&q=80&auto=format',
    },
    {
      id: 'amor-en-flor',
      name: 'Amor en Flor',
      price: 1450,
      description: 'Nuestra composición más romántica: rosas rojas, peonías y detalles exclusivos de temporada.',
      image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=600&q=80&auto=format',
    },
    {
      id: 'primavera',
      name: 'Primavera',
      price: 1100,
      description: 'Un estallido de color y alegría que captura la frescura y vitalidad de la temporada más hermosa.',
      image: 'https://images.unsplash.com/photo-1469259943454-aa100abba749?w=600&q=80&auto=format',
    },
  ],

  // Historia de marca
  brandStory: {
    headline: 'Cada flor tiene una historia. Nosotras ayudamos a contarla.',
    paragraphs: [
      'En Florentia creemos que las flores son mucho más que un regalo — son un lenguaje. Cada arreglo que creamos nace de la intención de quien lo envía y cobra vida en nuestras manos.',
      'Seleccionamos cuidadosamente cada tallo, cada hoja, cada textura. Trabajamos con flores frescas de temporada, privilegiando la calidad y la belleza natural sobre todo lo demás.',
      'Desde nuestro estudio en Mérida, diseñamos composiciones que combinan la tradición floral con una sensibilidad contemporánea, porque creemos que la elegancia está en los detalles.',
    ],
    image: 'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=800&q=80&auto=format',
  },

  // Ocasiones
  occasions: [
    {
      title: 'Cumpleaños',
      description: 'Celebra con color y alegría. Arreglos diseñados para hacer de cada cumpleaños un recuerdo memorable.',
      image: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?w=600&q=80&auto=format',
      cta: 'Ver opciones',
    },
    {
      title: 'Aniversarios',
      description: 'Renueva tus promesas con flores que reflejan la profundidad de tu amor y compromiso.',
      image: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=600&q=80&auto=format',
      cta: 'Ver opciones',
    },
    {
      title: 'Momentos Especiales',
      description: 'Graduaciones, nacimientos, agradecimientos... cada momento merece flores a su altura.',
      image: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&q=80&auto=format',
      cta: 'Ver opciones',
    },
  ],

  // Testimonios (demo)
  testimonials: [
    {
      name: 'María Fernanda G.',
      text: 'El arreglo que recibí superó todas mis expectativas. Las flores estaban perfectas y el diseño era absolutamente hermoso. Sin duda volveré a pedir.',
      occasion: 'Cumpleaños',
    },
    {
      name: 'Carlos R.',
      text: 'Quería sorprender a mi esposa en nuestro aniversario y Florentia lo hizo posible. La atención personalizada y la calidad de las flores fueron excepcionales.',
      occasion: 'Aniversario',
    },
    {
      name: 'Ana Lucía M.',
      text: 'Desde que descubrí Florentia no busco en otro lado. Cada bouquet es una obra de arte. El detalle del empaque y la presentación hacen toda la diferencia.',
      occasion: 'Regalo personal',
    },
  ],

  // Redes sociales
  social: {
    instagram: 'https://www.instagram.com/florentia.studio',
    facebook: 'https://www.facebook.com/florentia.studio',
    pinterest: 'https://www.pinterest.com/florentia.studio',
  },
} as const;

// Helpers
export const getWhatsAppUrl = (message?: string) => {
  const msg = encodeURIComponent(message || siteConfig.contact.whatsappMessage);
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${msg}`;
};

export const getProductWhatsAppUrl = (productName: string) => {
  const msg = encodeURIComponent(
    `Hola, me interesa el arreglo "${productName}". ¿Podrían darme más información sobre disponibilidad y envío?`
  );
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${msg}`;
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

