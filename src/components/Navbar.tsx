import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import TvNexuLogo from './TvNexuLogo';

interface NavbarProps {
  onPricingClick: () => void;
}

export default function Navbar({ onPricingClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // The contact block lives on the homepage, so link to the anchor directly
  // when we're already there and to the homepage anchor when we're not.
  const onHomepage = typeof window !== 'undefined' && window.location.pathname === '/';
  const contactHref = onHomepage ? '#contact-section' : '/#contact-section';

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/447832486269?text=Hallo%20TvNexu!%20Ik%20heb%20een%20vraag%20over%20uw%20IPTV%20pakketten.', '_blank');
  };

  return (
    <div className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'pt-2 px-2 sm:px-4' : 'pt-4 px-4 sm:px-6 lg:px-8'}`}>
      <header
        id="app-navbar"
        className={`max-w-7xl mx-auto transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-deep/95 backdrop-blur-xl shadow-xl shadow-brand-deep/25 rounded-2xl md:rounded-3xl border border-surface/10'
            : 'bg-brand-deep backdrop-blur-lg shadow-lg shadow-brand-deep/20 rounded-3xl border border-surface/10'
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">

            {/* Left Side: Logo & Verified Badge */}
            <div className="flex items-center gap-3">
              <a href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                <TvNexuLogo size={36} />
                <span className="font-bold text-2xl tracking-tight">
                  <span className="text-brand-light">TV</span><span className="text-accent">Nexu</span>
                </span>
              </a>

              {/* Verified badge */}
              <div className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1 bg-brand/15 border border-brand/30 rounded-full font-bold text-[10px] tracking-wide uppercase text-brand-tint">
                <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                Verified &amp; Trusted
              </div>
            </div>

            {/* Primary navigation */}
            <nav aria-label="Hoofdnavigatie" className="hidden md:flex items-center gap-6 lg:gap-8">
              <a
                href="/over-ons"
                className="text-sm font-semibold text-brand-tint hover:text-white transition-colors"
              >
                Over Ons
              </a>
              <a
                href={contactHref}
                className="text-sm font-semibold text-brand-tint hover:text-white transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Right Side: Contact & CTA */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* WhatsApp contact */}
              <button
                id="navbar-whatsapp-contact"
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 py-1.5 px-3 sm:px-4 bg-success/15 hover:bg-success/25 rounded-2xl text-brand-tint text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer border border-success/25"
              >
                <div className="p-1 text-[#25D366]">
                  <Phone className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="font-mono hidden md:inline">+44 7832 486269</span>
              </button>

              {/* Pricing CTA */}
              <button
                id="navbar-pricing-btn"
                onClick={onPricingClick}
                className="px-4 sm:px-5 py-2 sm:py-2.5 bg-brand hover:bg-brand-hover text-white font-semibold rounded-xl sm:rounded-2xl transition-all shadow-md shadow-brand/20 hover:shadow-brand/30 text-xs sm:text-sm tracking-widest uppercase transform hover:scale-[1.01] active:scale-99 cursor-pointer"
              >
                PRIJZEN
              </button>
            </div>

          </div>
        </div>
      </header>
    </div>
  );
}
