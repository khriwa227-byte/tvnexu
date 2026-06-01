import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data';

export default function FAQ() {
  const [activeId, setActiveId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq-section" className="py-16 bg-slate-900 relative">

      {/* Dot grid */}
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-[0.03]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-12">

        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Veelgestelde Vragen
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-lg mx-auto">
            Heeft u een vraag over de IPTV zenders, betalingsopties of installatie? Bekijk hieronder de antwoorden.
          </p>
        </div>

        <div className="space-y-4" id="faq-accordions">
          {FAQ_ITEMS.map((item) => {
            const isOpen = activeId === item.id;
            return (
              <div
                key={item.id}
                id={`faq-item-${item.id}`}
                className="bg-slate-800 rounded-2xl overflow-hidden border border-white/8 shadow-xl shadow-black/20 hover:border-white/15 transition-all"
              >
                <button
                  type="button"
                  id={`faq-btn-${item.id}`}
                  onClick={() => toggleFaq(item.id)}
                  className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 text-left font-semibold text-white text-sm sm:text-base hover:text-sky-400 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium leading-snug">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180 text-sky-400' : ''
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-[300px] border-t border-white/8' : 'max-h-0'
                  }`}
                >
                  <div className="px-5 py-4 sm:px-6 sm:py-5 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans bg-slate-900/40">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
