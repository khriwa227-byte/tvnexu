import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles } from 'lucide-react';

declare function gtag(...args: unknown[]): void;
import { PricingPlan } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: PricingPlan | null;
  initialAdultChannels: boolean;
}

export default function CheckoutModal({ isOpen, onClose, plan }: CheckoutModalProps) {
  if (!plan) return null;

  const handleWhatsApp = () => {
    gtag('event', 'conversion', {
      send_to: 'AW-18195439252',
      value: parseFloat(plan.price),
      currency: 'EUR',
    });
    const text = `Hallo TvLux! Ik wil graag de ${plan.name} bestellen voor €${plan.price}/jaar.`;
    window.open(`https://wa.me/447449708976?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-sm bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-white/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 bg-slate-900/50 border-b border-white/8">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-sky-500/15 flex items-center justify-center text-sky-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Abonnement Activeren</h3>
                  <p className="text-xs text-slate-400">TvLux Premium IPTV 🇳🇱 🇧🇪</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-slate-500 hover:text-slate-300 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Sluiten"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Plan summary */}
            <div className="p-5 space-y-5">
              <div className="flex items-center justify-between p-4 bg-slate-900/50 border border-white/8 rounded-2xl">
                <div>
                  <span className="px-2 py-0.5 text-[10px] font-bold text-sky-400 bg-sky-500/10 rounded-full uppercase tracking-wider">
                    {plan.name} Pakket
                  </span>
                  <h4 className="mt-1 text-base font-bold text-white">{plan.subtitle}</h4>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-black text-sky-400">&euro;{plan.price}</p>
                  <p className="text-[10px] text-slate-500 font-medium">Eenmalige betaling</p>
                </div>
              </div>

              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-2.5 px-6 py-4 bg-[#25D366] hover:bg-[#20ba56] text-white font-bold rounded-xl shadow-lg transition-colors text-sm"
              >
                <span className="text-lg">💬</span>
                <span>Bestellen via WhatsApp</span>
              </button>

              <p className="text-center text-[11px] text-slate-500">
                U wordt doorgestuurd naar WhatsApp om uw bestelling af te ronden.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
