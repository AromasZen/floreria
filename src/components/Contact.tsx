import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Phone, Mail, Clock, AtSign } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';

export default function Contact() {
  return (
    <section id="contacto" className="bg-blush/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-4">
            Hablemos de flores
          </h2>
          <p className="text-charcoal/60 font-sans text-lg md:text-xl max-w-xl mx-auto">
            Estamos aquí para ayudarte a encontrar el arreglo perfecto.
          </p>
        </motion.div>

        {/* Three-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
          {/* Column 1 — WhatsApp CTA */}
          <motion.div
            className="flex flex-col items-center text-center bg-white/60 backdrop-blur-sm p-8 md:p-10 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-16 h-16 rounded-full bg-olive/10 flex items-center justify-center mb-6">
              <MessageCircle className="w-7 h-7 text-olive" />
            </div>
            <h3 className="font-serif text-2xl text-charcoal mb-2">
              Escríbenos por WhatsApp
            </h3>
            <p className="text-charcoal/60 font-sans text-sm leading-relaxed mb-8">
              Respuesta rápida y atención personalizada para tu pedido.
            </p>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-olive text-ivory px-8 py-4 rounded-full font-sans font-medium text-sm tracking-wide hover:bg-olive/90 transition-colors duration-300"
            >
              <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              Iniciar conversación
            </a>
            <span className="mt-4 text-xs text-charcoal/40 font-sans">
              {siteConfig.contact.phone}
            </span>
          </motion.div>

          {/* Column 2 — Contact Info */}
          <motion.div
            className="flex flex-col items-center text-center bg-white/60 backdrop-blur-sm p-8 md:p-10 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="font-serif text-2xl text-charcoal mb-8">
              Información de contacto
            </h3>

            <ul className="space-y-6 w-full">
              <li>
                <a
                  href={siteConfig.contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 text-left group"
                >
                  <span className="mt-0.5 shrink-0 w-9 h-9 rounded-full bg-burgundy/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-burgundy" />
                  </span>
                  <span className="font-sans text-sm text-charcoal/70 leading-relaxed group-hover:text-charcoal transition-colors">
                    {siteConfig.contact.address}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-4 text-left group"
                >
                  <span className="shrink-0 w-9 h-9 rounded-full bg-burgundy/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-burgundy" />
                  </span>
                  <span className="font-sans text-sm text-charcoal/70 group-hover:text-charcoal transition-colors">
                    {siteConfig.contact.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-4 text-left group"
                >
                  <span className="shrink-0 w-9 h-9 rounded-full bg-burgundy/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-burgundy" />
                  </span>
                  <span className="font-sans text-sm text-charcoal/70 group-hover:text-charcoal transition-colors">
                    {siteConfig.contact.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-left group"
                >
                  <span className="shrink-0 w-9 h-9 rounded-full bg-burgundy/10 flex items-center justify-center">
                    <AtSign className="w-4 h-4 text-burgundy" />
                  </span>
                  <span className="font-sans text-sm text-charcoal/70 group-hover:text-charcoal transition-colors">
                    {siteConfig.contact.instagramHandle}
                  </span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 3 — Hours */}
          <motion.div
            className="flex flex-col items-center text-center bg-white/60 backdrop-blur-sm p-8 md:p-10 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="w-16 h-16 rounded-full bg-rose/15 flex items-center justify-center mb-6">
              <Clock className="w-7 h-7 text-rose" />
            </div>
            <h3 className="font-serif text-2xl text-charcoal mb-8">
              Horario de atención
            </h3>

            <ul className="space-y-4 w-full">
              {siteConfig.hours.map((slot) => (
                <li
                  key={slot.day}
                  className="flex items-center justify-between gap-4 font-sans text-sm"
                >
                  <span className="text-charcoal/80 font-medium">{slot.day}</span>
                  <span
                    className={`${
                      slot.time === 'Cerrado'
                        ? 'text-burgundy/70'
                        : 'text-charcoal/60'
                    }`}
                  >
                    {slot.time}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.p
          className="text-center text-xs text-charcoal/35 font-sans mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Información de demostración — datos editables
        </motion.p>
      </div>
    </section>
  );
}
