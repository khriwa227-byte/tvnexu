import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, CreditCard, Shield, Send, Sparkles, HelpCircle, AlertCircle } from 'lucide-react';

declare function gtag(...args: unknown[]): void;
import { PricingPlan } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: PricingPlan | null;
  initialAdultChannels: boolean;
}

export default function CheckoutModal({ isOpen, onClose, plan, initialAdultChannels }: CheckoutModalProps) {
  const [step, setStep] = useState(1);
  const [deviceType, setDeviceType] = useState('Smart TV (IBO Player/Smarters)');
  const [adultChannels, setAdultChannels] = useState(initialAdultChannels);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('ideal');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);

  if (!plan) return null;

  // Sync state with parent's choice on opening
  React.useEffect(() => {
    setAdultChannels(initialAdultChannels);
  }, [initialAdultChannels, isOpen]);

  const priceNum = parseFloat(plan.price);
  const vat = 0.00; // IPTV VAT free or included
  const total = priceNum + vat;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(prev => prev + 1);
    } else {
      setIsSubmitting(true);
      const params = new URLSearchParams({
        email,
        phone,
        plan: plan?.name ?? '',
        device: deviceType,
        payment: paymentMethod,
      });
      // Log to sheet in background, redirect to WhatsApp immediately
      fetch(`/api/order?${params.toString()}`).catch(() => {});
      handleWhatsAppRedirect();
      setIsSubmitting(false);
      onClose();
    }
  };

  const handleWhatsAppRedirect = () => {
    gtag('event', 'conversion', { send_to: 'AW-18167605266/SJxRCIblwbMcEJLQ_tZD', value: parseFloat(plan.price), currency: 'EUR' });
    const text = `Hallo TvLux! Ik wil graag de ${plan.name} bestellen voor €${plan.price}/jaar.
Apparaat: ${deviceType}
E-mail: ${email || "Niet opgegeven"}
Betaalmethode: ${paymentMethod.toUpperCase()}`;
    window.open(`https://wa.me/447449708976?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="checkout-modal-overlay" className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
          <motion.div
            id="checkout-modal-container"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-xl bg-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-white/10 my-2 sm:my-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 bg-slate-900/50 border-b border-white/8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-500/15 flex items-center justify-center text-sky-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 id="checkout-title" className="text-base sm:text-xl font-semibold text-white">Abonnement Activeren</h3>
                  <p className="text-xs text-slate-400 font-sans">TvLux Premium IPTV Service 🇳🇱 🇧🇪</p>
                </div>
              </div>
              <button
                id="close-checkout-btn"
                onClick={onClose}
                className="p-2 text-slate-500 hover:text-slate-300 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Sluiten"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Steps Indicator */}
            {!orderCompleted && (
              <div className="flex items-center justify-center gap-2 px-6 py-4 bg-slate-900/30 border-b border-white/8">
                <div className="flex items-center gap-1.5">
                  <div className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${step >= 1 ? 'bg-sky-500 text-white' : 'bg-slate-700 text-slate-400'}`}>1</div>
                  <span className="text-xs font-medium text-slate-400">Configuratie</span>
                </div>
                <div className="w-8 h-px bg-slate-700" />
                <div className="flex items-center gap-1.5">
                  <div className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${step >= 2 ? 'bg-sky-500 text-white' : 'bg-slate-700 text-slate-400'}`}>2</div>
                  <span className="text-xs font-medium text-slate-400">Gegevens</span>
                </div>
                <div className="w-8 h-px bg-slate-700" />
                <div className="flex items-center gap-1.5">
                  <div className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${step >= 3 ? 'bg-sky-500 text-white' : 'bg-slate-700 text-slate-400'}`}>3</div>
                  <span className="text-xs font-medium text-slate-400">Betaling</span>
                </div>
              </div>
            )}

            {/* Body */}
            <div className="p-4 sm:p-6">
              {orderCompleted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                  id="order-success-screen"
                >
                  <div className="w-16 h-16 bg-emerald-500/15 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Bestelling Ontvangen!</h4>
                  <p className="text-sm text-slate-400 max-w-sm mx-auto mb-6">
                    Bedankt voor uw vertrouwen in TvLux. Volg de stappen hieronder om direct te starten.
                  </p>

                  <div className="bg-slate-900/50 border border-white/8 rounded-2xl p-4 text-left max-w-sm mx-auto mb-4 text-xs text-slate-400 space-y-2">
                    <div className="flex justify-between font-bold text-white border-b border-white/8 pb-2 mb-2">
                      <span>Pakket:</span>
                      <span className="text-sky-400">{plan.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Apparaat:</span>
                      <span className="font-semibold text-slate-200">{deviceType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>E-mailadres:</span>
                      <span className="font-semibold text-slate-200">{email}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-white mt-2 pt-2 border-t border-white/8">
                      <span>Te betalen:</span>
                      <span className="text-sky-400">€{plan.price},00</span>
                    </div>
                  </div>

                  {/* Payment via WhatsApp instruction */}
                  <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl p-4 text-left max-w-md mx-auto mb-4 flex gap-3">
                    <span className="text-2xl shrink-0">💬</span>
                    <div className="text-xs space-y-1.5 text-gray-800">
                      <p className="font-bold text-sm text-gray-900">Betaling via WhatsApp</p>
                      <p>Klik op de knop hieronder om ons te bereiken via WhatsApp. Stuur uw betaling via de betaalmethode die u heeft gekozen en stuur ons een betalingsbewijs.</p>
                      <p className="font-semibold text-[#25D366]">✅ Zodra de betaling bevestigd is, ontvangt u uw inloggegevens direct per e-mail — binnen enkele minuten!</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      id="whatsapp-fast-track-btn"
                      onClick={handleWhatsAppRedirect}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20ba56] text-white rounded-xl shadow-md transition-colors text-sm font-semibold"
                    >
                      <span>💬 Betaal via WhatsApp</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} id="checkout-form" className="space-y-6">
                  {/* Summary of Selected Plan */}
                  <div className="flex items-center justify-between p-4 bg-slate-900/50 border border-white/8 rounded-2xl">
                    <div>
                      <span className="px-2 py-0.5 text-[10px] font-bold text-sky-400 bg-sky-500/10 rounded-full uppercase tracking-wider">{plan.name} Pakket</span>
                      <h4 className="mt-1 text-base font-bold text-white">{plan.subtitle}</h4>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-black text-sky-400">&euro;{plan.price}</p>
                      <p className="text-[10px] text-slate-500 font-medium">Eenmalige betaling</p>
                    </div>
                  </div>

                  {step === 1 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-300 mb-2">
                          Voor welk apparaat wilt u de IPTV activeren?
                        </label>
                        <select
                          id="device-select"
                          value={deviceType}
                          onChange={(e) => setDeviceType(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-white/10 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-shadow outline-none text-sm text-white bg-slate-700"
                        >
                          <option>Smart TV (IBO Player/Smarters)</option>
                          <option>Amazon Fire TV Stick</option>
                          <option>Android TV / Google TV Box</option>
                          <option>MAG Box / Formuler (Classic Portal)</option>
                          <option>Apple TV / iPad / iPhone</option>
                          <option>Computer / Laptop (VLC/Web Player)</option>
                          <option>Smartphone (Android/iOS)</option>
                        </select>
                        <p className="text-[11px] text-slate-500 mt-1">Standaard installatie-instructies worden afgestemd op uw apparaat.</p>
                      </div>

                      <div className="bg-sky-500/8 border border-sky-500/20 p-3.5 rounded-2xl flex gap-3 text-sky-400 text-xs">
                        <Shield className="w-5 h-5 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold">IBO Pro Player Activering</p>
                          <p className="mt-0.5 text-slate-400">We verlenen u gratis activering voor de IBO Pro Player app binnen dit abonnement!</p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-300 mb-1.5">
                          E-mailadres <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="bijv. jouwnaam@gmail.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-white/10 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-shadow outline-none text-sm text-white bg-slate-700 placeholder:text-slate-500"
                        />
                        <p className="text-[11px] text-slate-500 mt-1">Hier sturen we je inlogcodes en de handige installatiegids naartoe (binnen 10 min).</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-300 mb-1.5">
                          WhatsApp / Telefoonnummer <span className="text-slate-500 text-xs">(Optioneel voor live hulplijn)</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="bijv. +31 6 12345678"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-white/10 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-shadow outline-none text-sm text-white bg-slate-700 placeholder:text-slate-500"
                        />
                        <p className="text-[11px] text-slate-500 mt-1">Handig als je activering en directe chat support wenst via WhatsApp.</p>
                      </div>

                      <div className="bg-emerald-500/8 text-emerald-400 border border-emerald-500/20 p-3.5 rounded-2xl text-xs flex gap-2.5">
                        <Check className="w-5 h-5 shrink-0" />
                        <p className="font-sans font-medium">Zodra we je order binnen krijgen gaan we gelijk over tot activatie van je IPTV lijn en servers!</p>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                      <p className="text-sm font-semibold text-slate-300 mb-2">Selecteer uw favoriete betaalmethode:</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="payment-methods-grid">
                        <label className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${paymentMethod === 'ideal' ? 'border-pink-400 bg-pink-500/10' : 'border-white/10 hover:bg-white/5'}`}>
                          <input type="radio" name="payment" value="ideal" className="text-pink-500 focus:ring-pink-500" checked={paymentMethod === 'ideal'} onChange={() => setPaymentMethod('ideal')} />
                          <span className="text-sm font-semibold text-slate-200">iDEAL (Nederland)</span>
                        </label>

                        <label className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${paymentMethod === 'bancontact' ? 'border-sky-400 bg-sky-500/10' : 'border-white/10 hover:bg-white/5'}`}>
                          <input type="radio" name="payment" value="bancontact" className="text-sky-500 focus:ring-sky-500" checked={paymentMethod === 'bancontact'} onChange={() => setPaymentMethod('bancontact')} />
                          <span className="text-sm font-semibold text-slate-200">Bancontact (België)</span>
                        </label>

                        <label className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${paymentMethod === 'paypal' ? 'border-indigo-400 bg-indigo-500/10' : 'border-white/10 hover:bg-white/5'}`}>
                          <input type="radio" name="payment" value="paypal" className="text-indigo-500 focus:ring-indigo-500" checked={paymentMethod === 'paypal'} onChange={() => setPaymentMethod('paypal')} />
                          <span className="text-sm font-semibold text-slate-200">PayPal Express</span>
                        </label>

                        <label className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${paymentMethod === 'crypto' ? 'border-amber-400 bg-amber-500/10' : 'border-white/10 hover:bg-white/5'}`}>
                          <input type="radio" name="payment" value="crypto" className="text-amber-500 focus:ring-amber-500" checked={paymentMethod === 'crypto'} onChange={() => setPaymentMethod('crypto')} />
                          <span className="text-sm font-semibold text-slate-200">Bitcoin / Crypto ₿</span>
                        </label>

                        <label className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${paymentMethod === 'banktransfer' ? 'border-slate-400 bg-slate-500/10' : 'border-white/10 hover:bg-white/5'}`}>
                          <input type="radio" name="payment" value="banktransfer" className="text-slate-400 focus:ring-slate-400" checked={paymentMethod === 'banktransfer'} onChange={() => setPaymentMethod('banktransfer')} />
                          <span className="text-sm font-semibold text-slate-200">Bankoverschrijving</span>
                        </label>
                      </div>

                      <div className="bg-slate-900/50 border border-white/8 rounded-2xl p-4 mt-4 text-xs space-y-2">
                        <div className="flex justify-between font-medium">
                          <span className="text-slate-500">Subtotaal:</span>
                          <span className="text-slate-200">&euro;{plan.price},00</span>
                        </div>
                        <div className="flex justify-between font-medium">
                          <span className="text-slate-500">Activatiekosten &amp; BTW:</span>
                          <span className="text-slate-200">&euro;0,00</span>
                        </div>
                        <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-white/8">
                          <span>Totaalbedrag:</span>
                          <span className="text-sky-400">&euro;{total},00</span>
                        </div>
                      </div>

                      <div className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5 pt-2">
                        <Lock className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Beveiligde SSL 256-bit betaling. Uw gegevens worden nooit gedeeld.</span>
                      </div>
                    </motion.div>
                  )}

                  {/* Buttons Navigation */}
                  <div className="flex gap-3 pt-4 border-t border-white/8">
                    {step > 1 && (
                      <button
                        type="button"
                        id="prev-step-btn"
                        onClick={() => setStep(prev => prev - 1)}
                        className="px-5 py-3 hover:bg-white/10 border border-white/10 text-slate-300 font-semibold rounded-xl text-sm transition-all"
                      >
                        Vorige
                      </button>
                    )}

                    <button
                      type="submit"
                      id="next-step-btn"
                      disabled={isSubmitting}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-400 hover:to-emerald-400 text-white font-bold rounded-xl shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 transition-all text-sm disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Even geduld...</span>
                      ) : step < 3 ? (
                        <span>Doorgaan</span>
                      ) : (
                        <span>Bestelling Afronden - &euro;{total},00</span>
                      )}
                    </button>
                  </div>

                  <div className="flex justify-center">
                    <button
                      type="button"
                      id="direct-whatsapp-checkout"
                      onClick={handleWhatsAppRedirect}
                      className="text-xs text-emerald-500 hover:text-emerald-400 border-b border-emerald-600 hover:border-emerald-400 pb-0.5 mt-2 flex items-center gap-1 font-semibold transition"
                    >
                      Of bestel sneller via direct overleg op WhatsApp 💬
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// Simple Lock icon replacement since lucide standard Lock has different weights
function Lock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
