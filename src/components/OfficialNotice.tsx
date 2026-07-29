import { CheckCircle2, ShieldCheck, Lock, RotateCcw, Headset } from 'lucide-react';

// Single source of truth for the domain shown to visitors — this block exists to
// tell people which address is genuine, so it must match the live domain exactly.
const OFFICIAL_DOMAIN = 'tv-nexu.app';

const TRUST_POINTS = [
  { id: 'payment', Icon: Lock, label: 'Veilig betalen' },
  { id: 'refund', Icon: RotateCcw, label: 'Geld-terug-garantie' },
  { id: 'support', Icon: Headset, label: '24/7 support' },
];

export default function OfficialNotice() {
  return (
    <section id="official-notice" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-success to-success-deep rounded-3xl shadow-xl shadow-success/25 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">

            {/* Verified mark */}
            <div className="shrink-0">
              <CheckCircle2 className="w-12 h-12 sm:w-14 sm:h-14 text-white" strokeWidth={1.75} />
            </div>

            {/* Body */}
            <div className="flex-1 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 border border-white/30 text-white rounded-full font-bold text-[11px] uppercase tracking-wide">
                <ShieldCheck className="w-3.5 h-3.5" />
                100% Officieel
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Officiële TVNEXU-website
              </h2>

              <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-3xl">
                Dit is de officiële website van TVNEXU. Je bestelt en activeert hier veilig je
                IPTV-abonnement voor Nederland en België. Pas op voor namaaksites — controleer
                altijd dat je op <strong className="font-bold text-white">{OFFICIAL_DOMAIN}</strong> bent.
              </p>
            </div>

            {/* Trust badges */}
            <div className="shrink-0 flex flex-wrap lg:flex-col gap-2.5 lg:border-l lg:border-white/25 lg:pl-8">
              {TRUST_POINTS.map(({ id, Icon, label }) => (
                <span
                  key={id}
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-white"
                >
                  <Icon className="w-4 h-4 text-white/80 shrink-0" />
                  {label}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
