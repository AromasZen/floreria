import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Testimonials() {
  return (
    <section className="py-24 md:py-36 bg-burgundy px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-[11px] tracking-[0.35em] uppercase text-rose/70 font-medium mb-4">
            Testimonios
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ivory italic font-medium">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-ivory/40 text-sm">
            Testimonios de demostración — contenido editable
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {siteConfig.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative border border-ivory/10 p-8 md:p-10"
            >
              {/* Quote icon */}
              <Quote size={28} className="text-rose/40 mb-6" />

              {/* Text */}
              <p className="font-serif text-lg text-ivory/85 italic leading-relaxed mb-8">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-ivory text-sm font-medium">{testimonial.name}</p>
                  <p className="text-ivory/40 text-xs mt-1">{testimonial.occasion}</p>
                </div>
                {/* Star decoration */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-rose/60 text-xs">★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

