import React from 'react';
import { BENEFITS } from '../data';

interface BenefitsProps {
  onPricingClick: () => void;
}

export default function Benefits({ onPricingClick }: BenefitsProps) {
  return (
    <section id="benefits-section" className="relative py-12 bg-slate-50/55">
      
      {/* Background Dots Grid decoration */}
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#333333_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-12">
        
        {/* Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-3" id="toggle-pills-row">
          <button
            id="pills-alle-pakketten"
            onClick={onPricingClick}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white font-semibold text-sm shadow-md shadow-emerald-500/5 hover:shadow-lg transition-all cursor-pointer"
          >
            Alle Pakketten
          </button>
          
          <button
            id="pills-bekijk-abonnementen"
            onClick={onPricingClick}
            className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-blue-600 font-semibold text-sm border border-blue-200 shadow-sm transition-colors cursor-pointer"
          >
            Bekijk Abonnementen
          </button>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.id}
              id={`benefit-${benefit.id}`}
              className="bg-white rounded-3xl p-8 shadow-2xl shadow-slate-200 hover:scale-[1.01] transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Colored Circular Icon wrapper */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl ${benefit.color}`}>
                  {benefit.id === 'money-back' ? (
                    <span className="text-xl font-extrabold">&euro;</span>
                  ) : benefit.id === 'ultrasast-connection' ? (
                    <svg className="w-6 h-6 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-slate-900 leading-snug">
                  {benefit.title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
