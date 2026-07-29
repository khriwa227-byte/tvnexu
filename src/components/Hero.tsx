import React from 'react';
import { Zap, ShoppingCart, Star } from 'lucide-react';
import { PRICING_PLANS } from '../data';

interface HeroProps {
  onPricingClick: () => void;
  onOrderClick: (planId: string) => void;
}

export default function Hero({ onPricingClick, onOrderClick }: HeroProps) {
  // Read the entry plan from the pricing data rather than hardcoding it, so
  // the button's price can never disagree with the plan it opens.
  const entryPlan = PRICING_PLANS.find((p) => p.id === 'basis') ?? PRICING_PLANS[0];

  return (
    <section id="hero-section" className="relative py-12 lg:py-20 overflow-hidden bg-page">

      {/* Background glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-success/8 rounded-full blur-3xl pointer-events-none" />
      {/* Dot grid */}
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="bg-surface rounded-[32px] sm:rounded-[40px] border border-line shadow-xl shadow-ink/5 backdrop-blur-sm p-6 sm:p-10 lg:p-16">
          <div>

            {/* Copy column */}
            <div className="space-y-6 sm:space-y-8 max-w-4xl">

              {/* Badges row */}
              <div className="flex flex-wrap items-center gap-3">
                <div id="badge-official" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-success/10 border border-success/30 text-success rounded-full font-bold text-xs uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                  OFFICIËLE WEBSITE
                  <svg className="w-3.5 h-3.5 text-brand ml-0.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.4-1.4 3.6 3.6 7.6-7.6 1.4 1.4-9 9z"/>
                  </svg>
                </div>

                {/* TrustPilot score */}
                <div className="inline-flex items-center gap-1 bg-brand-tint border border-line rounded-full px-3 py-1 shadow-sm">
                  <span className="text-success font-bold text-xs flex items-center gap-0.5">
                    ★ Trustpilot
                  </span>
                  <div className="flex gap-0.5 text-success text-xs">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span className="text-[10px] text-ink-muted font-bold ml-1">4.7</span>
                </div>
              </div>

              {/* Headlines */}
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-[1.12] text-ink tracking-tight">
                  <span className="text-brand">TvNexu</span> — het beste IPTV abonnement voor Nederland en België 🇳🇱 🇧🇪
                </h1>
                <p id="hero-gradient-text" className="text-xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand via-brand to-brand-deep bg-clip-text text-transparent leading-snug">
                  Kwaliteit en Extra's voor Jouw Entertainment!
                </p>
                <p className="text-sm sm:text-base text-ink-muted leading-relaxed max-w-2xl">
                  Geniet van 4K beeldkwaliteit op elk apparaat, altijd en overal, met 79.000+ kanalen, 249.000+ VOD-opties en 100% beschikbaarheid. We bieden gratis IBO Pro Player activatie 🎁, zodat je direct kunt kijken zonder verborgen kosten.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  id="action-lightning"
                  onClick={onPricingClick}
                  className="rounded-full px-6 py-4 bg-brand hover:bg-brand-hover transition-all font-semibold text-white text-sm sm:text-base shadow-xl shadow-brand/20 flex items-center justify-center gap-2 transform hover:scale-102 active:scale-98 cursor-pointer"
                >
                  <Zap className="w-4 h-4 fill-white" />
                  Onmiddellijke Activering
                </button>
                <button
                  id="action-order-basis"
                  onClick={() => onOrderClick(entryPlan.id)}
                  className="rounded-full px-6 py-4 bg-brand-tint hover:bg-line border border-brand/20 transition-colors font-semibold text-brand-hover text-sm sm:text-base flex items-center justify-center gap-2 transform hover:scale-102 active:scale-98 cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Bestellen - €{entryPlan.price}/Jaar
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
