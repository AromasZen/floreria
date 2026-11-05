import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { getProductWhatsAppUrl, formatPrice } from '../config/siteConfig';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface Props {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/4] mb-5 bg-blush/30">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-xl text-charcoal font-medium">{product.name}</h3>
          <span className="text-sm text-burgundy font-medium whitespace-nowrap mt-1">
            {formatPrice(product.price)}
          </span>
        </div>

        <p className="text-charcoal/50 text-sm leading-relaxed">{product.description}</p>

        <a
          href={getProductWhatsAppUrl(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-burgundy hover:text-charcoal transition-colors duration-300 mt-3 group/btn"
        >
          <MessageCircle size={15} className="transition-transform duration-300 group-hover/btn:scale-110" />
          <span className="border-b border-burgundy/30 hover:border-burgundy transition-colors duration-300">
            Pedir por WhatsApp
          </span>
        </a>
      </div>
    </motion.article>
  );
}

