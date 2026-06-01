import React from 'react';
import { Check, Gift } from 'lucide-react';
import { PRICING_PLANS } from '../data';
import { PricingPlan } from '../types';

interface PricingProps {
  onSelectPlan: (plan: PricingPlan, adultEnabled: boolean) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  return (
    <section id="pricing-section" className="py-16 sm:py-24 bg-slate-900 relative">

      {/* Glow blob */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-sky-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-12">

        {/* Headings */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Onze <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">Abonnementen</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Kies het abonnement dat het beste bij je past.
          </p>
          <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold uppercase tracking-wide rounded-full shadow-sm">
            <Check className="w-4 h-4" />
            Eenmalige betaling: Geen bindend contract
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-8">
          {PRICING_PLANS.map((plan) => {
            let cardBgClass = "bg-slate-800 border border-white/8 shadow-xl shadow-black/30 rounded-[32px] p-6 sm:p-8 relative flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:border-white/15";
            if (plan.id === 'premium') {
              cardBgClass = "bg-sky-500/8 border border-sky-400/20 rounded-[32px] p-6 sm:p-8 relative flex flex-col justify-between transition-all duration-300 shadow-2xl shadow-sky-500/10 hover:shadow-sky-500/20";
            }

            let displayTitle: React.ReactNode = plan.name;
            if (plan.id === 'goud') {
              displayTitle = (
                <span className="flex items-center gap-1.5">
                  <span className="text-lg">🖥️🖥️</span> GOUD
                </span>
              );
            } else if (plan.id === 'basis') {
              displayTitle = "BASIS";
            } else if (plan.id === 'premium') {
              displayTitle = "PREMIUM";
            }

            return (
              <div key={plan.id} id={`plan-card-${plan.id}`} className={cardBgClass}>

                {/* Top badges */}
                {plan.id === 'premium' && (
                  <div className="absolute -top-3.5 left-5 right-5 flex justify-start items-center gap-2 z-10 select-none">
                    <span className="px-3.5 py-1 bg-sky-500 text-white font-extrabold text-[9px] uppercase tracking-wider rounded-full shadow-md shadow-sky-500/20">
                      MEEST POPULAIR
                    </span>
                    <span className="px-3.5 py-1 bg-violet-500 text-white font-extrabold text-[9px] uppercase tracking-wider rounded-full shadow-md shadow-violet-500/20">
                      15 MAANDEN
                    </span>
                  </div>
                )}

                {plan.id === 'goud' && (
                  <div className="absolute -top-3.5 left-5 right-5 flex justify-start items-center gap-2 z-10 select-none">
                    <span className="px-3.5 py-1 bg-sky-600 text-white font-extrabold text-[9px] uppercase tracking-wider rounded-full shadow-md shadow-sky-500/20">
                      BESTE PRIJS
                    </span>
                    <span className="px-3.5 py-1 bg-violet-500 text-white font-extrabold text-[9px] uppercase tracking-wider rounded-full shadow-md shadow-violet-500/20">
                      2 SCHERM
                    </span>
                  </div>
                )}

                {/* Card content */}
                <div className="space-y-6 flex-1">
                  <div className="space-y-2.5 mt-2">
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
                      {displayTitle}
                    </h3>
                    <div className="flex items-baseline gap-1 pt-1">
                      <span className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                        &euro;{plan.price}
                      </span>
                      <span className="text-xs font-bold text-slate-500">/Jaar</span>
                    </div>
                    <p className={`text-[13px] font-medium leading-snug tracking-wide ${plan.id === 'premium' ? 'text-sky-400' : 'text-slate-400'}`}>
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* Gift badge */}
                  <div className="flex items-center justify-center gap-2 p-3 bg-sky-500/8 rounded-2xl text-sky-400 text-xs font-bold border border-sky-500/15 shadow-sm">
                    <span className="text-base shrink-0 select-none">🎁</span>
                    <span className="tracking-wide">+ Gratis IBO Pro-speler!</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 pt-2">
                    {plan.features.map((feat, index) => {
                      const isBoldFeature = feat.includes('PREMIUM SERVER') || feat.includes('BASIC SERVER') || feat.includes('Vertraging') || feat.includes('Gelijktijdige Verbindingen');
                      return (
                        <li key={index} className="flex items-start gap-3 text-[12.5px] text-slate-300 leading-relaxed">
                          <span className="w-5 h-5 rounded-full bg-violet-500/15 text-violet-400 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                          <span className={isBoldFeature ? "font-bold text-white" : "font-medium"}>
                            {feat}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* CTA */}
                <div className="space-y-4 pt-6 mt-6 border-t border-white/8">
                  <button
                    id={`btn-order-${plan.id}`}
                    onClick={() => onSelectPlan(plan, false)}
                    className={`w-full py-3.5 px-6 font-semibold rounded-2xl transition-all cursor-pointer transform hover:scale-[1.01] active:scale-99 text-sm tracking-widest uppercase shadow-md ${
                      plan.id === 'goud'
                        ? 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-emerald-500/15 hover:shadow-emerald-500/25'
                        : 'bg-sky-500 hover:bg-sky-400 text-white shadow-sky-500/15 hover:shadow-sky-500/25'
                    }`}
                  >
                    Bestellen
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
