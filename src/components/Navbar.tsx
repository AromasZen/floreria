import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const closeMobile = () => setIsMobileOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-ivory/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.04)]'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex h-20 items-center justify-between">
            {/* ── Brand ── */}
            <a
              href="#inicio"
              className="group flex flex-col items-start leading-none"
            >
              <span className="font-serif text-2xl tracking-[0.18em] text-burgundy transition-colors group-hover:text-rose">
                {siteConfig.brand.name}
              </span>
              <span className="mt-0.5 text-[10px] tracking-[0.25em] uppercase text-charcoal/50 font-sans">
                {siteConfig.brand.tagline}
              </span>
            </a>

            {/* ── Desktop links ── */}
            <ul className="hidden md:flex items-center gap-10">
              {siteConfig.navigation.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="relative font-sans text-sm tracking-wide text-charcoal/70 transition-colors hover:text-burgundy after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-rose after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* ── Desktop CTA + Hamburger ── */}
            <div className="flex items-center gap-4">
              {/* WhatsApp CTA — desktop */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 rounded-full bg-burgundy px-5 py-2.5 font-sans text-xs tracking-wider uppercase text-ivory transition-all duration-300 hover:bg-burgundy/90 hover:shadow-lg hover:shadow-burgundy/15 active:scale-[0.97]"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                Pedir ahora
              </a>

              {/* Hamburger — mobile */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="relative z-50 md:hidden flex items-center justify-center h-10 w-10 rounded-full text-charcoal transition-colors hover:text-burgundy"
                aria-label={isMobileOpen ? 'Cerrar menú' : 'Abrir menú'}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMobileOpen ? (
                    <motion.span
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="open"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Mobile overlay ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-charcoal/30 backdrop-blur-sm"
              onClick={closeMobile}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-ivory shadow-2xl flex flex-col"
            >
              {/* Brand inside panel */}
              <div className="px-8 pt-24 pb-8 border-b border-blush/40">
                <span className="font-serif text-xl tracking-[0.18em] text-burgundy">
                  {siteConfig.brand.name}
                </span>
                <span className="mt-1 block text-[10px] tracking-[0.25em] uppercase text-charcoal/40 font-sans">
                  {siteConfig.brand.tagline}
                </span>
              </div>

              {/* Links */}
              <nav className="flex-1 px-8 py-10">
                <ul className="flex flex-col gap-1">
                  {siteConfig.navigation.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.06, duration: 0.35, ease: 'easeOut' }}
                    >
                      <a
                        href={link.href}
                        onClick={closeMobile}
                        className="group flex items-center py-3 font-serif text-2xl text-charcoal/80 transition-colors hover:text-burgundy"
                      >
                        <span className="mr-4 inline-block h-px w-0 bg-rose transition-all duration-300 group-hover:w-6" />
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* WhatsApp CTA — mobile */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="px-8 pb-10"
              >
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobile}
                  className="flex items-center justify-center gap-2 rounded-full bg-burgundy px-6 py-3.5 font-sans text-xs tracking-wider uppercase text-ivory transition-all duration-300 hover:bg-burgundy/90 active:scale-[0.97]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Pedir por WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
