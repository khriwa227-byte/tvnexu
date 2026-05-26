import React from 'react';
import { Smartphone } from 'lucide-react';
import { STATE_STEPS } from '../data';

interface HowItWorksProps {
  onPricingClick: () => void;
}

export default function HowItWorks({ onPricingClick }: HowItWorksProps) {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/447449708976?text=Hallo%20TvLux!%20Ik%20wil%20graag%20een%20IPTV%20abonnement%20op%20maat%20aanvragen.', '_blank');
  };

  return (
    <section id="how-it-works-section" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Warning banner alerts from screenshot 5 */}
        <div className="bg-emerald-50/50 border border-emerald-300 rounded-3xl p-5 sm:p-6" id="custom-plan-alert-banner">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-emerald-800 text-sm sm:text-base font-semibold leading-relaxed">
              Als je een abonnement op maat wilt (land, taal, scherm), neem dan contact met ons op via WhatsApp of e-mail.
            </p>
            <button
              onClick={handleWhatsAppClick}
              id="alert-whatsapp-btn"
              className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba56] text-white rounded-2xl text-xs sm:text-sm font-extrabold flex items-center gap-1.5 shadow-md shadow-emerald-550/10 cursor-pointer"
            >
              <span>💬 WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Multi-scherm badge & title */}
        <div className="text-center space-y-4 max-w-lg mx-auto pt-6">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-blue-50 text-blue-700 font-bold text-xs rounded-full uppercase tracking-wide shadow-sm">
            <Smartphone className="w-4.5 h-4.5" />
            Multi-scherm
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Hoe werkt het?
          </h2>
        </div>

        {/* Steps sequence */}
        <div className="relative pt-6 max-w-2xl mx-auto">
          {/* Vertical connection line */}
          <div className="absolute left-[27px] top-10 bottom-10 w-[2px] bg-slate-100 hidden md:block" />

          <div className="space-y-10">
            {STATE_STEPS.map((item, idx) => (
              <div
                key={item.step}
                id={`step-row-${item.step}`}
                className="flex flex-col md:flex-row items-start gap-4 md:gap-8 relative"
              >
                {/* Visual Number circle */}
                <div className="w-14 h-14 rounded-full bg-blue-500 text-white font-extrabold text-xl flex items-center justify-center shadow-lg shadow-blue-500/10 shrink-0 border-4 border-white z-10">
                  {item.step}
                </div>

                {/* Text Content */}
                <div className="space-y-1 pt-1 text-left">
                  <h4 className="text-xl font-semibold text-slate-950">
                    {item.title}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-650 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="pt-8" id="how-it-works-cta-banner">
          <div className="bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 text-center max-w-xl mx-auto space-y-6 shadow-2xl shadow-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 leading-snug">
              Kies de #1 <span className="text-blue-600">I.P.T.V</span> provider in Nederland, België en Canada
            </h3>
            
            <button
              id="cta-nu-beginnen"
              onClick={onPricingClick}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white font-semibold rounded-2xl shadow-md tracking-wider transition-colors duration-200 uppercase text-xs sm:text-sm cursor-pointer transform hover:scale-102 active:scale-98"
            >
              Nu beginnen
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
