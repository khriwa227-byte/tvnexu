import React from 'react';
import { Zap, ShoppingCart, Star } from 'lucide-react';

interface HeroProps {
  onPricingClick: () => void;
  onOrderClick: (planId: string) => void;
}

export default function Hero({ onPricingClick, onOrderClick }: HeroProps) {
  return (
    <section id="hero-section" className="relative py-12 lg:py-20 overflow-hidden bg-slate-50/55">
      
      {/* Background Dots Grid decoration */}
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#333333_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="bg-white rounded-[32px] sm:rounded-[40px] shadow-2xl shadow-slate-200 p-6 sm:p-10 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Headline and Badges */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              
              {/* Badges row */}
              <div className="flex flex-wrap items-center gap-3">
                <div id="badge-official" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-full font-bold text-xs uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  OFFICIËLE WEBSITE
                  <svg className="w-3.5 h-3.5 text-blue-500 ml-0.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.4-1.4 3.6 3.6 7.6-7.6 1.4 1.4-9 9z"/>
                  </svg>
                </div>

                {/* TrustPilot score mockup */}
                <div className="inline-flex items-center gap-1 bg-white border border-gray-150 rounded-full px-3 py-1 shadow-sm">
                  <span className="text-emerald-500 font-bold text-xs flex items-center gap-0.5">
                    ★ Trustpilot
                  </span>
                  <div className="flex gap-0.5 text-emerald-500 text-xs">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span className="text-[10px] text-gray-500 font-bold ml-1">4.7</span>
                </div>
              </div>

              {/* Central Copy and Titles */}
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-[1.12] text-slate-950 tracking-tight">
                  Kies de #1 IPTV provider in Nederland en België! 🇳🇱 🇧🇪
                </h1>
                <p id="hero-gradient-text" className="text-xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent leading-snug">
                  Kwaliteit en Extra's voor Jouw Entertainment!
                </p>
                <p className="text-sm sm:text-base text-slate-650 leading-relaxed max-w-2xl">
                  Geniet van 4K beeldkwaliteit op elk apparaat, altijd en overal, met 79.000+ kanalen, 249.000+ VOD-opties en 100% beschikbaarheid. We bieden gratis IBO Pro Player activatie 🎁, zodat je direct kunt kijken zonder verborgen kosten.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  id="action-lightning"
                  onClick={onPricingClick}
                  className="rounded-full px-6 py-4 bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 transition-all font-semibold text-white text-sm sm:text-base shadow-xl shadow-emerald-500/10 flex items-center justify-center gap-2 transform hover:scale-102 active:scale-98 cursor-pointer"
                >
                  <Zap className="w-4 h-4 fill-white" />
                  Onmiddellijke Activering
                </button>
                <button
                  id="action-order-basis"
                  onClick={() => onOrderClick('basis')}
                  className="rounded-full px-6 py-4 bg-blue-600 hover:bg-blue-700 transition-colors font-semibold text-white text-sm sm:text-base flex items-center justify-center gap-2 transform hover:scale-102 active:scale-98 cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Bestellen - €69.99/Jaar
                </button>
              </div>

            </div>

            {/* Right Column: 4-image collage — 1 big + 3 below */}
            <div className="lg:col-span-5 hidden sm:block">
              <div className="flex flex-col gap-2 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200">
                {/* Big top image */}
                <div className="overflow-hidden rounded-t-3xl">
                  <img src="/images/hero_collage/Formula_1_featured.jpg" alt="Formula 1" className="w-full h-52 sm:h-64 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                {/* 3 small images below */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="overflow-hidden rounded-bl-3xl">
                    <img src="/images/hero_collage/Champions_League.jpg" alt="Champions League" className="w-full h-28 sm:h-36 object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="overflow-hidden">
                    <img src="/images/hero_collage/FIFA_World_Cup.jpg" alt="FIFA World Cup" className="w-full h-28 sm:h-36 object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="overflow-hidden rounded-br-3xl">
                    <img src="/images/hero_collage/Eredivisie.jpg" alt="Eredivisie" className="w-full h-28 sm:h-36 object-cover hover:scale-105 transition-transform duration-500" />
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
