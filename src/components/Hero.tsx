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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
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
                <h1 className="text-4xl md:text-5xl font-bold leading-[1.12] text-slate-950 tracking-tight">
                  Kies de #1 IPTV provider in Nederland en België! 🇳🇱 🇧🇪
                </h1>
                <p id="hero-gradient-text" className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent leading-snug">
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

            {/* Right Column: Display / TV Dashboard representation */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-slate-900 rounded-3xl p-3 shadow-2xl relative overflow-hidden border border-slate-850">
                
                {/* Main banner block formula 1 */}
                <div className="relative h-48 sm:h-56 bg-slate-800 rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Overlay text */}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-2 py-0.5 text-[9px] font-black tracking-widest text-[#25D366] bg-[#25D366]/20 border border-[#25D366]/40 rounded-sm uppercase">FORMULE 1 LIVE</span>
                    <h3 className="text-white text-lg font-semibold mt-1">Grand Prix Melbourne</h3>
                  </div>
                </div>

                {/* Grid row for mini channels */}
                <div className="grid grid-cols-3 gap-2 mt-2">
                  
                  {/* Card 1: Champions league */}
                  <div className="bg-slate-950 rounded-xl p-2 text-center flex flex-col justify-between h-24 relative overflow-hidden border border-slate-800">
                    <div className="absolute inset-x-0 top-0 h-1 bg-blue-600" />
                    <p className="text-[9px] font-bold text-slate-400 truncate uppercase mt-1">UEFA</p>
                    <div className="mx-auto w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center my-0.5 text-[8px] font-bold text-white">🏆</div>
                    <p className="text-[10px] font-bold text-white truncate px-0.5">CL League</p>
                  </div>

                  {/* Card 2: World Cup */}
                  <div className="bg-slate-950 rounded-xl p-2 text-center flex flex-col justify-between h-24 relative overflow-hidden border border-slate-800">
                    <div className="absolute inset-x-0 top-0 h-1 bg-amber-500" />
                    <p className="text-[9px] font-bold text-slate-400 truncate uppercase mt-1">FIFA</p>
                    <div className="mx-auto w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center my-0.5 text-[9px]">⚽</div>
                    <p className="text-[10px] font-bold text-white truncate px-0.5">WC Cup 2026</p>
                  </div>

                  {/* Card 3: Eredivisie */}
                  <div className="bg-slate-950 rounded-xl p-2 text-center flex flex-col justify-between h-24 relative overflow-hidden border border-slate-800">
                    <div className="absolute inset-x-0 top-0 h-1 bg-emerald-500" />
                    <p className="text-[9px] font-bold text-[#e1e7ec] truncate uppercase mt-1">NL</p>
                    <div className="mx-auto w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center my-0.5 text-[9px]">🇳🇱</div>
                    <p className="text-[10px] font-bold text-white truncate px-0.5">Eredivisie</p>
                  </div>

                </div>

                {/* Footer Live signal feedback code */}
                <div className="flex items-center justify-center gap-1.5 mt-3 pt-2 border-t border-slate-850">
                  <span className="w-2 h-2 rounded-full bg-red-650 animate-ping inline-block" />
                  <span className="text-[11px] font-black text-slate-400 tracking-wider">LIVE SPORT EVENEMENTEN IN 4K</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
