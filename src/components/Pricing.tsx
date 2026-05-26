import React from 'react';
import { Check, Gift } from 'lucide-react';
import { PRICING_PLANS } from '../data';
import { PricingPlan } from '../types';

interface PricingProps {
  onSelectPlan: (plan: PricingPlan, adultEnabled: boolean) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  return (
    <section id="pricing-section" className="py-16 sm:py-24 bg-slate-50/55 relative">
      
      {/* Background Dots Grid decoration */}
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#333333_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-12">
        
        {/* Headings */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            Onze <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Abonnementen</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500">
            Kies het abonnement dat het beste bij je past.
          </p>

          <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold uppercase tracking-wide rounded-full shadow-sm">
            <Check className="w-4 h-4" />
            Eenmalige betaling: Geen bindend contract
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-8">
          {PRICING_PLANS.map((plan) => {
            // Format price string dynamically from configuration data
            const displayPrice = plan.price;
            
            // Custom Card container styling
            let cardBgClass = "bg-white shadow-xl shadow-slate-200/70 rounded-[32px] p-6 sm:p-8 relative flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-slate-300/80";
            if (plan.id === 'premium') {
              // Custom blue-tint brand style for premium card
              cardBgClass = "bg-[#ebf5ff]/95 rounded-[32px] p-6 sm:p-8 relative flex flex-col justify-between transition-all duration-300 shadow-2xl shadow-blue-500/15 hover:shadow-blue-500/25";
            }

            // Custom Display Title with Emojis
            let displayTitle: React.ReactNode = plan.name;
            if (plan.id === 'goud') {
              displayTitle = (
                <span className="flex items-center gap-1.5">
                  <span className="text-slate-800 text-lg">🖥️🖥️</span> GOUD
                </span>
              );
            } else if (plan.id === 'basis') {
              displayTitle = "BASIS";
            } else if (plan.id === 'premium') {
              displayTitle = "PREMIUM";
            }

            return (
              <div
                key={plan.id}
                id={`plan-card-${plan.id}`}
                className={cardBgClass}
              >
                
                {/* Top Overlapping Badges (Exact Alignment and Styling) */}
                {plan.id === 'premium' && (
                  <div className="absolute -top-3.5 left-5 right-5 flex justify-start items-center gap-2 z-10 select-none">
                    <span className="px-3.5 py-1 bg-[#1e40af] text-white font-extrabold text-[9px] uppercase tracking-wider rounded-full shadow-md shadow-blue-600/15">
                      MEEST POPULAIR
                    </span>
                    <span className="px-3.5 py-1 bg-[#8b5cf6] text-white font-extrabold text-[9px] uppercase tracking-wider rounded-full shadow-md shadow-indigo-600/15">
                      15 MAANDEN
                    </span>
                  </div>
                )}

                {plan.id === 'goud' && (
                  <div className="absolute -top-3.5 left-5 right-5 flex justify-start items-center gap-2 z-10 select-none">
                    <span className="px-3.5 py-1 bg-[#1d4ed8] text-white font-extrabold text-[9px] uppercase tracking-wider rounded-full shadow-md shadow-blue-600/15">
                      BESTE PRIJS
                    </span>
                    <span className="px-3.5 py-1 bg-[#8b5cf6] text-white font-extrabold text-[9px] uppercase tracking-wider rounded-full shadow-md shadow-indigo-600/15">
                      2 SCHERM
                    </span>
                  </div>
                )}

                {/* Card Header Content */}
                <div className="space-y-6 flex-1">
                  
                  <div className="space-y-2.5 mt-2">
                    <h3 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">
                      {displayTitle}
                    </h3>

                    {/* Highly Polished Price structure */}
                    <div className="flex items-baseline gap-1 pt-1">
                      <span className="text-3xl sm:text-4.5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                        &euro;{displayPrice}
                      </span>
                      <span className="text-xs font-bold text-slate-400">/Jaar</span>
                    </div>

                    <p className={`text-[13px] font-medium leading-snug tracking-wide ${plan.id === 'premium' ? 'text-blue-600' : 'text-slate-500'}`}>
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* Special Free activation pill gift badge */}
                  <div className="flex items-center justify-center gap-2 p-3 bg-[#edf5ff] rounded-2xl text-[#009bde] text-xs font-bold border border-blue-100/50 shadow-sm">
                    <span className="text-base shrink-0 select-none">🎁</span>
                    <span className="tracking-wide">+ Gratis IBO Pro-speler!</span>
                  </div>

                  {/* Bullet features items checklist with Elegant Round purple checkmark style */}
                  <ul className="space-y-3 pt-2">
                    {plan.features.map((feat, index) => {
                      const isBoldFeature = feat.includes('PREMIUM SERVER') || feat.includes('BASIC SERVER') || feat.includes('Vertraging') || feat.includes('Gelijktijdige Verbindingen');
                      return (
                        <li key={index} className="flex items-start gap-3 text-[12.5px] text-slate-705 leading-relaxed">
                          <span className="w-5 h-5 rounded-full bg-[#f3f0ff] text-[#8b5cf6] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                          <span className={isBoldFeature ? "font-bold text-slate-900" : "font-medium"}>
                            {feat}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                </div>

                {/* Sub-footer interactive section layout */}
                <div className="space-y-4 pt-6 mt-6 border-t border-slate-100">
                  
                  {/* Bestellen Core CTA button matches exactly the brand styles */}
                  <button
                    id={`btn-order-${plan.id}`}
                    onClick={() => onSelectPlan(plan, false)}
                    className={`w-full py-3.5 px-6 font-semibold rounded-2xl transition-all cursor-pointer transform hover:scale-[1.01] active:scale-99 text-sm tracking-widest uppercase shadow-md ${
                      plan.id === 'goud'
                        ? 'bg-[#10b981] hover:bg-[#0e9f6e] text-white shadow-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/15'
                        : 'bg-[#009bde] hover:bg-[#0089c4] text-white shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/15'
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
