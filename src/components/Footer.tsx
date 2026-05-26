import React, { useState } from 'react';
import { Mail, Phone, X } from 'lucide-react';

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}

const LEGAL_CONTENT = {
  privacy: {
    title: "Privacybeleid",
    text: [
      "Bij TvLux hechten we grote waarde aan uw privacy. Dit privacybeleid legt uit welke gegevens we verzamelen en hoe we hiermee omgaan.",
      "1. Gegevensverzameling: Wij verzamelen uitsluitend de minimale informatie die nodig is om uw IPTV-abonnement op te zetten. Dit omvat uw opgegeven e-mailadres en de door u gekozen betaalmethode. Wij slaan nooit uw fysieke adres of persoonlijke naam op.",
      "2. Geen Logbestanden: Onze dedicated Europese servers hanteren een strikt 'no-logs' beleid. We loggen geen kijkgeschiedenis, IP-adressen of streaming-activiteiten.",
      "3. Veiligheid: Alle betalingen worden verwerkt via volledig gecertificeerde en anonieme SSL-beveiligde transactiekanalen om uw financiële gegevens te beschermen.",
      "4. Delen met Derden: Wij verkopen, ruilen of verhuren uw persoonlijke gegevens nooit aan derden. Alle systemen zijn anoniem gecentraliseerd."
    ]
  },
  terms: {
    title: "Gebruiksvoorwaarden",
    text: [
      "Welkom bij TvLux. Door onze diensten te gebruiken, gaat u akkoord met de volgende voorwaarden:",
      "1. Licentieverlening: Uw aankoop verleent u een persoonlijke, niet-exclusieve licentie om onze IPTV-streams te bekijken op het aantal ondersteunde schermen horend bij uw pakket.",
      "2. Verbod op Delen: Het is ten strengste verboden om uw inloggegevens te verkopen of openbaar te delen. Schending hiervan resulteert in onmiddellijke IP-blokkering zonder restitutie.",
      "3. Geautomatiseerde Afloop: Al onze pakketten maken gebruik van een eenmalig betalingsmodel. Er zijn geen automatische incasso's of verlengingen. Na afloop van uw periode stopt het abonnement vanzelf.",
      "4. Service Kwaliteit: Hoewel wij streven naar 99.9% uptime met onze hoogwaardige dedicated servers, kunnen tijdelijke downtime of onderhoud aan zenders incidenteel voorkomen."
    ]
  },
  refund: {
    title: "Restitutiebeleid",
    text: [
      "Klanttevredenheid is onze allerhoogste prioriteit bij TvLux. Ons restitutiebeleid is als volgt georganiseerd:",
      "1. Technische Ondersteuning: Mocht u problemen ervaren met de installatie of het afspelen van zenders, neem dan direct contact op met onze WhatsApp helpdesk. 95% van de problemen wordt binnen 10 minuten opgelost.",
      "2. Niet-Goed-Geld-Terug Garantie: Indien onze IPTV-dienst na deskundige begeleiding van onze klantenservice niet functioneert op uw apparaat vanwege server-side problemen, heeft u tot 7 dagen na aankoop recht op een volledige terugbetaling.",
      "3. Geen Kosten Achteraf: Omdat onze abonnementen handmatig en eenmalig worden betaald, riskeert u bij ons nooit onverwachte automatische afschrijvingen."
    ]
  }
};

export default function Footer({ onScrollTo }: FooterProps) {
  const [activeDoc, setActiveDoc] = useState<keyof typeof LEGAL_CONTENT | null>(null);

  return (
    <footer id="app-footer" className="bg-[#f8f9fa] border-t border-slate-200/60 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
          
          {/* Column 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3 L21 12 L3 21 Z" fill="url(#outerGrad)" stroke="#10b981" strokeWidth="2" strokeLinejoin="round" />
                <path d="M7 6.5 L17 12 L7 17.5 Z" fill="url(#innerGrad)" stroke="#06b6d4" strokeWidth="2" strokeLinejoin="round" />
                <path d="M10 9.5 L14 12 L10 14.5 Z" fill="#10b981" />
                <defs>
                  <linearGradient id="outerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                  </linearGradient>
                  <linearGradient id="innerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-bold text-xl text-slate-900 tracking-tight font-sans">TvLux</span>
            </div>
            
            <p className="text-[13px] text-slate-500 leading-relaxed font-sans max-w-xs mr-4">
              Premium IPTV-service die wereldwijd een hoogwaardige streaming-ervaring biedt.
            </p>
          </div>

          {/* Column 2: Snelle Links */}
          <div>
            <h4 className="font-bold text-slate-900 text-sm tracking-wide font-sans mb-5">Snelle Links</h4>
            <ul className="space-y-4 font-sans">
              <li>
                <button 
                  onClick={() => onScrollTo('hero-section')} 
                  className="text-[13px] text-slate-500 hover:text-emerald-600 transition-colors cursor-pointer text-left block"
                >
                  Over IPTV
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo('pricing-section')} 
                  className="text-[13px] text-slate-500 hover:text-emerald-600 transition-colors cursor-pointer text-left block"
                >
                  Abonnementen
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Juridisch */}
          <div>
            <h4 className="font-bold text-slate-900 text-sm tracking-wide font-sans mb-5">Juridisch</h4>
            <ul className="space-y-4 font-sans">
              <li>
                <button 
                  onClick={() => setActiveDoc('privacy')} 
                  className="text-[13px] text-slate-500 hover:text-emerald-600 transition-colors cursor-pointer text-left block"
                >
                  Privacybeleid
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveDoc('terms')} 
                  className="text-[13px] text-slate-500 hover:text-emerald-600 transition-colors cursor-pointer text-left block"
                >
                  Gebruiksvoorwaarden
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveDoc('refund')} 
                  className="text-[13px] text-slate-500 hover:text-emerald-600 transition-colors cursor-pointer text-left block"
                >
                  Restitutiebeleid
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold text-slate-900 text-sm tracking-wide font-sans mb-5">Contact</h4>
            <ul className="space-y-4 font-sans">
              <li>
                <a 
                  href="mailto:contact@tvluxurynl.com" 
                  className="flex items-center gap-2.5 text-[13px] text-slate-500 hover:text-emerald-600 transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span>contact@tvluxurynl.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/447449708976?text=Hallo%20TvLux!%20Ik%20heb%20een%20vraag%20over%20uw%20IPTV%20pakketten." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[13px] text-slate-500 hover:text-emerald-600 transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-500" />
                  <span>WhatsApp Ondersteuning</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Payment logos */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-xs text-slate-400 font-sans text-center mb-4">Geaccepteerde betaalmethoden</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['iDEAL', 'Bancontact', 'PayPal', 'Visa', 'Mastercard', 'Bitcoin'].map((method) => (
              <div key={method} className="h-10 px-3 bg-white border border-slate-200 rounded-xl shadow-sm flex items-center justify-center">
                <img
                  src={`/images/payment_logos/${method}.png`}
                  alt={method}
                  className="h-6 max-w-[64px] object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Brand Copyright footer bar */}
        <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-sans">
          <span>&copy; {new Date().getFullYear()} TvLux. Alle rechten voorbehouden.</span>
          <div className="flex gap-4">
            <span className="text-slate-300">|</span>
            <span className="text-slate-400">Gecertificeerde SSL-beveiliging</span>
          </div>
        </div>

      </div>

      {/* Modern Dialog Modal overlay for Privacy and other Documents */}
      {activeDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs font-sans">
          <div className="bg-white rounded-[24px] shadow-2xl max-w-lg w-full p-6 sm:p-8 relative border border-slate-100 flex flex-col max-h-[85vh]">
            <button 
              onClick={() => setActiveDoc(null)} 
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-650 p-1.5 rounded-full hover:bg-slate-50 transition-colors"
              aria-label="Sluiten"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
              {LEGAL_CONTENT[activeDoc].title}
            </h3>
            
            <div className="overflow-y-auto pr-2 space-y-3.5 text-slate-500 text-sm leading-relaxed text-left flex-1 py-1">
              {LEGAL_CONTENT[activeDoc].text.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            
            <div className="mt-6 border-t border-slate-100 pt-4 flex justify-end">
              <button 
                onClick={() => setActiveDoc(null)} 
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs transition-colors cursor-pointer"
              >
                Sluiten
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
