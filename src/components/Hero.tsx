import React from 'react';
import { Zap, ShoppingCart, Star } from 'lucide-react';

interface HeroProps {
  onPricingClick: () => void;
  onOrderClick: (planId: string) => void;
}

export default function Hero({ onPricingClick, onOrderClick }: HeroProps) {
  return (
    <section id="hero-section" className="relative py-12 lg:py-20 overflow-hidden bg-slate-900">

      {/* Background glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />
      {/* Dot grid */}
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="bg-white/4 rounded-[32px] sm:rounded-[40px] border border-white/8 shadow-2xl shadow-black/40 backdrop-blur-sm p-6 sm:p-10 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-8 items-center">

            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">

              {/* Badges row */}
              <div className="flex flex-wrap items-center gap-3">
                <div id="badge-official" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full font-bold text-xs uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  OFFICIËLE WEBSITE
                  <svg className="w-3.5 h-3.5 text-sky-400 ml-0.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.4-1.4 3.6 3.6 7.6-7.6 1.4 1.4-9 9z"/>
                  </svg>
                </div>

                {/* TrustPilot score */}
                <div className="inline-flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-3 py-1 shadow-sm">
                  <span className="text-emerald-400 font-bold text-xs flex items-center gap-0.5">
                    ★ Trustpilot
                  </span>
                  <div className="flex gap-0.5 text-emerald-400 text-xs">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span className="text-[10px] text-slate-400 font-bold ml-1">4.7</span>
                </div>
              </div>

              {/* Headlines */}
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-[1.12] text-white tracking-tight">
                  <span className="text-sky-400">TvLux</span><span className="text-amber-400 text-lg sm:text-2xl">.org</span> — Officiële #1 IPTV provider in Nederland en België 🇳🇱 🇧🇪
                </h1>
                <p id="hero-gradient-text" className="text-xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent leading-snug">
                  Kwaliteit en Extra's voor Jouw Entertainment!
                </p>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
                  Geniet van 4K beeldkwaliteit op elk apparaat, altijd en overal, met 79.000+ kanalen, 249.000+ VOD-opties en 100% beschikbaarheid. We bieden gratis IBO Pro Player activatie 🎁, zodat je direct kunt kijken zonder verborgen kosten.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  id="action-lightning"
                  onClick={onPricingClick}
                  className="rounded-full px-6 py-4 bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-400 hover:to-emerald-400 transition-all font-semibold text-white text-sm sm:text-base shadow-xl shadow-sky-500/20 flex items-center justify-center gap-2 transform hover:scale-102 active:scale-98 cursor-pointer"
                >
                  <Zap className="w-4 h-4 fill-white" />
                  Onmiddellijke Activering
                </button>
                <button
                  id="action-order-basis"
                  onClick={() => onOrderClick('basis')}
                  className="rounded-full px-6 py-4 bg-white/10 hover:bg-white/15 border border-white/15 transition-colors font-semibold text-white text-sm sm:text-base flex items-center justify-center gap-2 transform hover:scale-102 active:scale-98 cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Bestellen - €69.99/Jaar
                </button>
              </div>

            </div>

            {/* Right Column: image collage */}
            <div className="lg:col-span-5">
              <div className="flex flex-col gap-2 rounded-3xl overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/10">
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img src="/images/hero_collage/Formula_1_featured.jpg" alt="Formula 1" className="w-full h-40 sm:h-64 object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-red-400">🔴 Live</span>
                    <span className="block text-white font-bold text-base sm:text-lg leading-tight">Formule 1 Grand Prix</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="relative overflow-hidden rounded-bl-3xl">
                    <img src="/images/hero_collage/Champions_League.jpg" alt="Champions League" className="w-full h-20 sm:h-36 object-cover hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="block text-white font-bold text-[11px] sm:text-xs leading-tight">UEFA Champions League</span>
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <img src="/images/hero_collage/FIFA_World_Cup.jpg" alt="FIFA World Cup" className="w-full h-20 sm:h-36 object-cover hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="block text-white font-bold text-[11px] sm:text-xs leading-tight">FIFA World Cup 2026</span>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-br-3xl">
                    <img src="/images/hero_collage/Eredivisie.jpg" alt="Eredivisie" className="w-full h-20 sm:h-36 object-cover hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="block text-white font-bold text-[11px] sm:text-xs leading-tight">Eredivisie</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
