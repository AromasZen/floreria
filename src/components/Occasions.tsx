import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';

export default function Occasions() {
  return (
    <section className="bg-[#F5F3EF] py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-xs font-sans font-medium uppercase tracking-[0.2em] text-rose">
            Ocasiones
          </span>
          <h2 className="font-serif text-4xl font-light text-charcoal sm:text-5xl md:text-6xl">
            Para cada momento
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-sans text-base text-charcoal/60 md:text-lg">
            Creamos arreglos especiales para las ocasiones que marcan tu vida.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {siteConfig.occasions.map((occasion, index) => (
            <motion.a
              key={occasion.title}
              href={getWhatsAppUrl(
                `Hola, me interesan sus arreglos florales para ${occasion.title.toLowerCase()}. ¿Podrían mostrarme opciones disponibles?`
              )}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="group relative block h-[420px] overflow-hidden md:h-[500px]"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={occasion.image}
                  alt={occasion.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent transition-opacity duration-500 group-hover:from-charcoal/90 group-hover:via-charcoal/35" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col p-6 md:p-8">
                <h3 className="font-serif text-2xl font-light text-ivory md:text-3xl">
                  {occasion.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-ivory/75 md:text-base">
                  {occasion.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-sans text-sm font-medium text-ivory transition-all duration-300 group-hover:gap-3">
                  {occasion.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
