import { MapPin, Phone, Mail, AtSign, Globe, Heart } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-ivory py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="font-serif text-2xl tracking-widest text-ivory mb-1">
              {siteConfig.brand.name}
            </h2>
            <p className="font-sans text-ivory/50 text-sm tracking-wide mb-4">
              {siteConfig.brand.tagline}
            </p>
            <p className="font-sans text-ivory/40 text-sm leading-relaxed max-w-xs">
              {siteConfig.brand.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-sm uppercase tracking-widest text-ivory/60 mb-5">
              Navegación
            </h3>
            <ul className="space-y-3">
              {siteConfig.navigation.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-ivory/50 hover:text-ivory transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-sm uppercase tracking-widest text-ivory/60 mb-5">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={siteConfig.contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-ivory/40 group-hover:text-ivory transition-colors" />
                  <span className="font-sans text-sm text-ivory/50 leading-relaxed group-hover:text-ivory transition-colors">
                    {siteConfig.contact.address}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 group"
                >
                  <Phone className="w-4 h-4 shrink-0 text-ivory/40 group-hover:text-ivory transition-colors" />
                  <span className="font-sans text-sm text-ivory/50 group-hover:text-ivory transition-colors">
                    {siteConfig.contact.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 group"
                >
                  <Mail className="w-4 h-4 shrink-0 text-ivory/40 group-hover:text-ivory transition-colors" />
                  <span className="font-sans text-sm text-ivory/50 group-hover:text-ivory transition-colors">
                    {siteConfig.contact.email}
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-serif text-sm uppercase tracking-widest text-ivory/60 mb-5">
              Síguenos
            </h3>
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 border border-ivory/15 flex items-center justify-center text-ivory/50 hover:text-ivory hover:border-ivory/40 transition-all duration-300"
              >
                <AtSign className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 border border-ivory/15 flex items-center justify-center text-ivory/50 hover:text-ivory hover:border-ivory/40 transition-all duration-300"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="w-10 h-10 border border-ivory/15 flex items-center justify-center text-ivory/50 hover:text-ivory hover:border-ivory/40 transition-all duration-300"
              >
                <Heart className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-ivory/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-ivory/35 text-center md:text-left">
            © {currentYear} Florentia Floral Studio. Todos los derechos reservados.
          </p>
          <p className="font-sans text-xs text-ivory/25 text-center md:text-right">
            Sitio web de demostración
          </p>
        </div>
      </div>
    </footer>
  );
}
