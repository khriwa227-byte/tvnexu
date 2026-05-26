import React, { useState, useEffect } from 'react';
import { Phone, CheckCircle } from 'lucide-react';

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
    window.open('https://wa.me/447449708976?text=Hallo%20TvLux!%20Ik%20heb%20een%20vraag%20over%20uw%20IPTV%20pakketten.', '_blank');
  };

  return (
    <div className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'pt-2 px-2 sm:px-4' : 'pt-4 px-4 sm:px-6 lg:px-8'}`}>
      <header
        id="app-navbar"
        className={`max-w-7xl mx-auto transition-all duration-300 ${
          isScrolled
            ? 'bg-white/85 backdrop-blur-xl shadow-xl shadow-slate-200/40 rounded-2xl md:rounded-3xl'
            : 'bg-white/70 backdrop-blur-lg shadow-md shadow-slate-100/30 rounded-3xl'
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            
            {/* Left Side: Logo & Verified Badge */}
            <div className="flex items-center gap-3">
              <a href="/" className="flex items-center gap-2 hover:opacity-95 transition-opacity">
                <img src="/tv.png" alt="TvLux Logo" className="w-9 h-9 object-contain rounded-xl" />
                <span className="font-bold text-2xl tracking-tight text-slate-900">
                  Tv<span className="text-emerald-500">Lux</span>
                </span>
              </a>
              
              {/* Verified badge */}
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200/60 rounded-full font-bold text-[10px] tracking-wide uppercase text-blue-700">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                Verified &amp; Trusted
              </div>
            </div>

            {/* Right Side: Contact & CTA */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Phone contact WhatsApp */}
              <button
                id="navbar-whatsapp-contact"
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 py-1.5 px-3 sm:px-4 bg-emerald-50/70 hover:bg-emerald-50 rounded-2xl text-emerald-800 hover:text-emerald-700 text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer border border-emerald-100/50"
              >
                <div className="p-1 text-[#25D366]">
                  <Phone className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="font-mono hidden md:inline">+44 7449 708976</span>
              </button>

              {/* Prijs Button with Blue/Emerald Gradient */}
              <button
                id="navbar-pricing-btn"
                onClick={onPricingClick}
                className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white font-semibold rounded-xl sm:rounded-2xl transition-all shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 text-xs sm:text-sm tracking-widest uppercase transform hover:scale-[1.01] active:scale-99 cursor-pointer"
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
