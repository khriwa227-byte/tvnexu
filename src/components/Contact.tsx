import React from 'react';
import { Mail, MessageCircle, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function Contact() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/447832486269?text=Hallo%20TvLux!%20Ik%20heb%20een%20vraag%20over%20uw%20IPTV%20pakketten.', '_blank');
  };

  return (
    <section id="contact-section" className="py-16 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-slate-800/80 rounded-[24px] sm:rounded-[40px] text-white p-6 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl shadow-black/50 border border-white/8">

          {/* Decorative glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />
          {/* Gold accent glow top-left */}
          <div className="absolute top-0 left-1/2 w-60 h-40 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-500/10 border border-sky-500/25 rounded-full text-sky-400 text-xs font-bold uppercase tracking-wide">
                <HeartHandshake className="w-3.5 h-3.5" />
                24/7 Premium Support
              </div>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                Neem contact met ons op
              </h2>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg">
                Hebt u hulp nodig bij het instellen van uw IBO Pro-speler, of wilt u graag een gratis testkanaal aanvragen? Onze support-operators spreken Nederlands en Engels en staan dag en nacht voor u klaar.
              </p>

              <div className="flex flex-col gap-3 text-xs sm:text-sm text-slate-400">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Reactietijd gemiddeld binnen 5 minuten op WhatsApp!</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>100% tevredenheid of uw geld terug belofte.</span>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="lg:col-span-6 space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <button
                  type="button"
                  id="contact-whatsapp"
                  onClick={handleWhatsApp}
                  className="bg-slate-900/60 hover:bg-slate-900/90 border border-white/5 hover:border-emerald-500/20 shadow-lg shadow-black/30 p-6 rounded-2xl text-left transition-all hover:scale-[1.01] group flex flex-col justify-between h-40 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">WhatsApp Chat</h4>
                    <p className="text-slate-500 text-xs mt-1">Instant support</p>
                  </div>
                </button>
              </div>

              <div className="bg-slate-900/80 border border-white/5 shadow-md shadow-black/20 p-4 rounded-2xl flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span>support@tvlux.org</span>
                </div>
                <a
                  href="mailto:support@tvlux.org"
                  className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl text-[11px] transition-colors"
                >
                  E-mail Nu
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
