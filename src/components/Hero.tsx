import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-28 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text column */}
          <div className="order-2 lg:order-1 max-w-xl">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="text-[11px] tracking-[0.35em] uppercase text-olive font-medium mb-8"
            >
              {hero.badge}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.1] text-charcoal font-medium"
            >
              <span className="italic">Flores</span> que cuentan lo que las{' '}
              <span className="italic">palabras</span> no pueden.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mt-8 text-charcoal/60 text-base md:text-lg leading-relaxed max-w-md"
            >
              {hero.subheadline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#coleccion"
                className="group inline-flex items-center gap-2 bg-burgundy text-ivory px-7 py-3.5 text-sm tracking-wide hover:bg-charcoal transition-colors duration-300"
              >
                {hero.ctaPrimary}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-charcoal/20 text-charcoal px-7 py-3.5 text-sm tracking-wide hover:border-burgundy hover:text-burgundy transition-colors duration-300"
              >
                <MessageCircle size={16} />
                {hero.ctaSecondary}
              </a>
            </motion.div>
          </div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden">
              <img
                src={hero.image}
                alt="Arreglo floral premium de Florentia"
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ivory/20 via-transparent to-transparent" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-blush/60 -z-10 hidden lg:block" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-charcoal/40">Descubrir</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-8 bg-charcoal/20"
        />
      </motion.div>
    </section>
  );
}
