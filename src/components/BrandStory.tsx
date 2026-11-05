import { motion } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const BrandStory = () => {
  const { ref, isVisible } = useScrollAnimation(0.12);

  return (
    <section id="nosotros" className="bg-ivory py-20 md:py-32 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-center">

          {/* Image — editorial offset */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -60 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative lg:-ml-8 xl:-ml-12">
              {/* Decorative background block */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-blush/40 rounded-sm" />
              <img
                src={siteConfig.brandStory.image}
                alt="Nuestro estudio floral"
                className="relative w-full aspect-[3/4] object-cover rounded-sm shadow-lg"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            className="lg:col-span-7 lg:pl-4 xl:pl-8"
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Small label */}
            <span className="inline-block text-olive text-xs tracking-[0.25em] uppercase font-sans font-medium mb-6">
              Nuestra Historia
            </span>

            {/* Decorative accent line */}
            <div className="w-12 h-[2px] bg-burgundy mb-8" />

            {/* Headline */}
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal italic leading-tight mb-10">
              {siteConfig.brandStory.headline}
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6">
              {siteConfig.brandStory.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-charcoal/75 font-sans text-base md:text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.4 + index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Subtle signature detail */}
            <motion.div
              className="mt-12 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.9, ease: 'easeOut' }}
            >
              <div className="w-8 h-[1px] bg-rose" />
              <span className="font-serif text-rose text-sm italic tracking-wide">
                {siteConfig.brand.name}
              </span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BrandStory;
