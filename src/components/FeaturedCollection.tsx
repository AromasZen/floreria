import { motion } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';
import ProductCard from './ProductCard';

export default function FeaturedCollection() {
  return (
    <section id="coleccion" className="py-24 md:py-36 bg-ivory px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-[11px] tracking-[0.35em] uppercase text-olive font-medium mb-4">
            Nuestra Colección
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal italic font-medium">
            Un detalle que permanece
          </h2>
          <p className="mt-5 text-charcoal/50 max-w-lg mx-auto leading-relaxed">
            Cada arreglo es diseñado a mano con flores frescas de temporada, cuidando cada detalle para crear algo verdaderamente especial.
          </p>
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {siteConfig.products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

