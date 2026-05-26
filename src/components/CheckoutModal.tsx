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
      const webhookUrl = import.meta.env.VITE_SHEETS_URL;
      const payload = {
        email,
        phone,
        plan: plan?.name,
        device: deviceType,
        payment: paymentMethod,
      };
      const finish = () => {
        setIsSubmitting(false);
        setOrderCompleted(true);
      };
      if (webhookUrl) {
        fetch(webhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify(payload),
        }).finally(finish);
      } else {
        setTimeout(finish, 1500);
      }
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
            className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-100 my-2 sm:my-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 bg-slate-50 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 id="checkout-title" className="text-base sm:text-xl font-semibold text-gray-950">Abonnement Activeren</h3>
                  <p className="text-xs text-gray-500 font-sans">TvLux Premium IPTV Service 🇳🇱 🇧🇪</p>
                </div>
              </div>
              <button
                id="close-checkout-btn"
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Sluiten"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Steps Indicator */}
            {!orderCompleted && (
              <div className="flex items-center justify-center gap-2 px-6 py-4 bg-blue-50/50 border-b border-gray-100">
                <div className="flex items-center gap-1.5">
                  <div className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>1</div>
                  <span className="text-xs font-medium text-gray-700">Configuratie</span>
                </div>
                <div className="w-8 h-px bg-gray-200" />
                <div className="flex items-center gap-1.5">
                  <div className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>2</div>
                  <span className="text-xs font-medium text-gray-700">Gegevens</span>
                </div>
                <div className="w-8 h-px bg-gray-200" />
                <div className="flex items-center gap-1.5">
                  <div className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>3</div>
                  <span className="text-xs font-medium text-gray-700">Betaling</span>
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
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-950 mb-2">Bestelling Ontvangen!</h4>
                  <p className="text-sm text-gray-600 max-w-sm mx-auto mb-6">
                    Bedankt voor uw vertrouwen in TvLux. Volg de stappen hieronder om direct te starten.
                  </p>

                  <div className="bg-slate-50 border border-gray-100 rounded-2xl p-4 text-left max-w-sm mx-auto mb-4 text-xs text-gray-600 space-y-2">
                    <div className="flex justify-between font-bold text-gray-900 border-b border-gray-200 pb-2 mb-2">
                      <span>Pakket:</span>
                      <span className="text-blue-600">{plan.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Apparaat:</span>
                      <span className="font-semibold text-gray-800">{deviceType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>E-mailadres:</span>
                      <span className="font-semibold text-gray-800">{email}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-gray-900 mt-2 pt-2 border-t border-gray-200">
                      <span>Te betalen:</span>
                      <span className="text-blue-600">€{plan.price},00</span>
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
                  <div className="flex items-center justify-between p-4 bg-slate-50 border border-gray-100 rounded-2xl">
                    <div>
                      <span className="px-2 py-0.5 text-[10px] font-bold text-blue-700 bg-blue-100 rounded-full uppercase tracking-wider">{plan.name} Pakket</span>
                      <h4 className="mt-1 text-base font-bold text-slate-900">{plan.subtitle}</h4>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-black text-blue-600">&euro;{plan.price}</p>
                      <p className="text-[10px] text-gray-500 font-medium">Eenmalige betaling</p>
                    </div>
                  </div>

                  {step === 1 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Voor welk apparaat wilt u de IPTV activeren?
                        </label>
                        <select
                          id="device-select"
                          value={deviceType}
                          onChange={(e) => setDeviceType(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow outline-none text-sm text-gray-800 bg-white"
                        >
                          <option>Smart TV (IBO Player/Smarters)</option>
                          <option>Amazon Fire TV Stick</option>
                          <option>Android TV / Google TV Box</option>
                          <option>MAG Box / Formuler (Classic Portal)</option>
                          <option>Apple TV / iPad / iPhone</option>
                          <option>Computer / Laptop (VLC/Web Player)</option>
                          <option>Smartphone (Android/iOS)</option>
                        </select>
                        <p className="text-[11px] text-gray-400 mt-1">Standaard installatie-instructies worden afgestemd op uw apparaat.</p>
                      </div>

                      <div className="bg-blue-50 border border-blue-100 p-3.5 rounded-2xl flex gap-3 text-blue-800 text-xs">
                        <Shield className="w-5 h-5 shrink-0 text-blue-600 mt-0.5" />
                        <div>
                          <p className="font-bold">IBO Pro Player Activering</p>
                          <p className="mt-0.5">We verlenen u gratis activering voor de IBO Pro Player app binnen dit abonnement!</p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          E-mailadres <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="bijv. jouwnaam@gmail.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow outline-none text-sm text-gray-800"
                        />
                        <p className="text-[11px] text-gray-400 mt-1">Hier sturen we je inlogcodes en de handige installatiegids naartoe (binnen 10 min).</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          WhatsApp / Telefoonnummer <span className="text-gray-400 text-xs">(Optioneel voor live hulplijn)</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="bijv. +31 6 12345678"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow outline-none text-sm text-gray-800"
                        />
                        <p className="text-[11px] text-gray-400 mt-1">Handig als je activering en directe chat support wenst via WhatsApp.</p>
                      </div>

                      <div className="bg-green-50 text-green-800 border border-green-100 p-3.5 rounded-2xl text-xs flex gap-2.5">
                        <Check className="w-5 h-5 text-green-600 shrink-0" />
                        <p className="font-sans font-medium">Zodra we je order binnen krijgen gaan we gelijk over tot activatie van je IPTV lijn en servers!</p>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Selecteer uw favoriete betaalmethode:</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="payment-methods-grid">
                        <label className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${paymentMethod === 'ideal' ? 'border-pink-500 bg-pink-50/20' : 'border-gray-200 hover:bg-slate-50'}`}>
                          <input
                            type="radio"
                            name="payment"
                            value="ideal"
                            className="text-pink-600 focus:ring-pink-500"
                            checked={paymentMethod === 'ideal'}
                            onChange={() => setPaymentMethod('ideal')}
                          />
                          <span className="text-sm font-semibold text-gray-800">iDEAL (Nederland)</span>
                        </label>

                        <label className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${paymentMethod === 'bancontact' ? 'border-blue-600 bg-blue-50/20' : 'border-gray-200 hover:bg-slate-50'}`}>
                          <input
                            type="radio"
                            name="payment"
                            value="bancontact"
                            className="text-blue-600 focus:ring-blue-500"
                            checked={paymentMethod === 'bancontact'}
                            onChange={() => setPaymentMethod('bancontact')}
                          />
                          <span className="text-sm font-semibold text-gray-800">Bancontact (België)</span>
                        </label>

                        <label className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${paymentMethod === 'paypal' ? 'border-indigo-600 bg-indigo-50/20' : 'border-gray-200 hover:bg-slate-50'}`}>
                          <input
                            type="radio"
                            name="payment"
                            value="paypal"
                            className="text-indigo-600 focus:ring-indigo-500"
                            checked={paymentMethod === 'paypal'}
                            onChange={() => setPaymentMethod('paypal')}
                          />
                          <span className="text-sm font-semibold text-gray-800">PayPal Express</span>
                        </label>

                        <label className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${paymentMethod === 'crypto' ? 'border-amber-600 bg-amber-50/20' : 'border-gray-200 hover:bg-slate-50'}`}>
                          <input
                            type="radio"
                            name="payment"
                            value="crypto"
                            className="text-amber-600 focus:ring-amber-500"
                            checked={paymentMethod === 'crypto'}
                            onChange={() => setPaymentMethod('crypto')}
                          />
                          <span className="text-sm font-semibold text-gray-800">Bitcoin / Crypto ₿</span>
                        </label>

                        <label className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${paymentMethod === 'banktransfer' ? 'border-slate-600 bg-slate-50/40' : 'border-gray-200 hover:bg-slate-50'}`}>
                          <input
                            type="radio"
                            name="payment"
                            value="banktransfer"
                            className="text-slate-600 focus:ring-slate-500"
                            checked={paymentMethod === 'banktransfer'}
                            onChange={() => setPaymentMethod('banktransfer')}
                          />
                          <span className="text-sm font-semibold text-gray-800">Bankoverschrijving</span>
                        </label>
                      </div>

                      <div className="bg-slate-50 border border-gray-100 rounded-2xl p-4 mt-4 text-xs space-y-2">
                        <div className="flex justify-between font-medium">
                          <span className="text-gray-500">Subtotaal:</span>
                          <span className="text-gray-800">&euro;{plan.price},00</span>
                        </div>
                        <div className="flex justify-between font-medium">
                          <span className="text-gray-500">Activatiekosten &amp; BTW:</span>
                          <span className="text-gray-800">&euro;0,00</span>
                        </div>
                        <div className="flex justify-between text-sm font-bold text-gray-950 pt-2 border-t border-gray-200">
                          <span>Totaalbedrag:</span>
                          <span className="text-blue-600">&euro;{total},00</span>
                        </div>
                      </div>

                      <div className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1.5 pt-2">
                        <Lock className="w-3.5 h-3.5 text-green-600" />
                        <span>Beveiligde SSL 256-bit betaling. Uw gegevens worden nooit gedeeld.</span>
                      </div>
                    </motion.div>
                  )}

                  {/* Buttons Navigation */}
                  <div className="flex gap-3 pt-4 border-t border-gray-100">
                    {step > 1 && (
                      <button
                        type="button"
                        id="prev-step-btn"
                        onClick={() => setStep(prev => prev - 1)}
                        className="px-5 py-3 hover:bg-gray-100 border border-gray-200 text-gray-700 font-semibold rounded-xl text-sm transition-all"
                      >
                        Vorige
                      </button>
                    )}

                    <button
                      type="submit"
                      id="next-step-btn"
                      disabled={isSubmitting}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-sm disabled:opacity-50"
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
                      className="text-xs text-green-700 hover:text-green-900 border-b border-green-500 hover:border-green-700 pb-0.5 mt-2 flex items-center gap-1 font-semibold transition"
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
