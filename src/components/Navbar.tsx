import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import TvLuxLogo from './TvLuxLogo';

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

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/447454754062?text=Hallo%20TvLux!%20Ik%20heb%20een%20vraag%20over%20uw%20IPTV%20pakketten.', '_blank');
  };

  return (
    <div className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'pt-2 px-2 sm:px-4' : 'pt-4 px-4 sm:px-6 lg:px-8'}`}>
      <header
        id="app-navbar"
        className={`max-w-7xl mx-auto transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/90 backdrop-blur-xl shadow-xl shadow-black/40 rounded-2xl md:rounded-3xl border border-white/8'
            : 'bg-slate-900/70 backdrop-blur-lg shadow-md shadow-black/20 rounded-3xl border border-white/5'
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">

            {/* Left Side: Logo & Verified Badge */}
            <div className="flex items-center gap-3">
              <a href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                <TvLuxLogo size={36} />
                <span className="font-bold text-2xl tracking-tight text-white">
                  Tv<span className="text-sky-400">Lux</span><span className="text-amber-400 text-base font-bold">.org</span>
                </span>
              </a>

              {/* Verified badge */}
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-sky-500/10 border border-sky-400/30 rounded-full font-bold text-[10px] tracking-wide uppercase text-sky-400">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                Verified &amp; Trusted
              </div>
            </div>

            {/* Right Side: Contact & CTA */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* WhatsApp contact */}
              <button
                id="navbar-whatsapp-contact"
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 py-1.5 px-3 sm:px-4 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-2xl text-emerald-400 hover:text-emerald-300 text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer border border-emerald-500/20"
              >
                <div className="p-1 text-[#25D366]">
                  <Phone className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="font-mono hidden md:inline">+44 7454 754062</span>
              </button>

              {/* Pricing CTA */}
              <button
                id="navbar-pricing-btn"
                onClick={onPricingClick}
                className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-400 hover:to-emerald-400 text-white font-semibold rounded-xl sm:rounded-2xl transition-all shadow-md shadow-sky-500/20 hover:shadow-sky-500/30 text-xs sm:text-sm tracking-widest uppercase transform hover:scale-[1.01] active:scale-99 cursor-pointer"
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
