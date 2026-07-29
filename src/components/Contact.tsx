import React from 'react';
import { Mail, MessageCircle, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function Contact() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/447832486269?text=Hallo%20TvNexu!%20Ik%20heb%20een%20vraag%20over%20uw%20IPTV%20pakketten.', '_blank');
  };

  return (
    <section id="contact-section" className="py-16 bg-page relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-brand-tint/80 rounded-[24px] sm:rounded-[40px] text-ink p-6 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl shadow-ink/5 border border-line">

          {/* Decorative glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-success/8 rounded-full blur-3xl pointer-events-none" />
          {/* Gold accent glow top-left */}
          <div className="absolute top-0 left-1/2 w-60 h-40 bg-accent-tint rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand/10 border border-brand/25 rounded-full text-brand text-xs font-bold uppercase tracking-wide">
                <HeartHandshake className="w-3.5 h-3.5" />
                24/7 Premium Support
              </div>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink leading-tight">
                Neem contact met ons op
              </h2>

              <p className="text-ink-muted text-sm sm:text-base leading-relaxed max-w-lg">
                Hebt u hulp nodig bij het instellen van uw IBO Pro-speler, of wilt u graag een gratis testkanaal aanvragen? Onze support-operators spreken Nederlands en Engels en staan dag en nacht voor u klaar.
              </p>

              <div className="flex flex-col gap-3 text-xs sm:text-sm text-ink-muted">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-success shrink-0" />
                  <span>Reactietijd gemiddeld binnen 5 minuten op WhatsApp!</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-success shrink-0" />
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
                  className="bg-surface/60 hover:bg-surface/90 border border-line hover:border-success/20 shadow-lg shadow-ink/5 p-6 rounded-2xl text-left transition-all hover:scale-[1.01] group flex flex-col justify-between h-40 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink group-hover:text-success transition-colors">WhatsApp Chat</h4>
                    <p className="text-ink-muted text-xs mt-1">Instant support</p>
                  </div>
                </button>
              </div>

              <div className="bg-surface/80 border border-line shadow-md shadow-ink/5 p-4 rounded-2xl flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-ink-muted">
                  <Mail className="w-4 h-4 text-brand" />
                  <span>support@tv-nexu.app</span>
                </div>
                <a
                  href="mailto:support@tv-nexu.app"
                  className="px-4 py-2 bg-brand-tint hover:bg-ink-muted text-ink font-semibold rounded-xl text-[11px] transition-colors"
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
