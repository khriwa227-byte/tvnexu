import { Mail, Phone } from 'lucide-react';
import TvNexuLogo from './TvNexuLogo';
import { LEGAL_DOCS, LegalDocKey } from '../legal';

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}


export default function Footer({ onScrollTo }: FooterProps) {
  const legalKeys = Object.keys(LEGAL_DOCS) as LegalDocKey[];

  return (
    <footer id="app-footer" className="bg-brand-tint border-t border-line py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <TvNexuLogo size={32} />
              <span className="font-bold text-xl tracking-tight">
                <span className="text-brand-hover">TV</span><span className="text-accent">Nexu</span>
              </span>
            </div>
            <p className="text-[13px] text-ink-muted leading-relaxed max-w-xs mr-4">
              Premium IPTV-service die wereldwijd een hoogwaardige streaming-ervaring biedt.
            </p>
          </div>

          {/* Snelle Links */}
          <div>
            <h4 className="font-bold text-ink text-sm tracking-wide mb-5">Snelle Links</h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => onScrollTo('hero-section')}
                  className="text-[13px] text-ink-muted hover:text-brand transition-colors cursor-pointer text-left block"
                >
                  Over IPTV
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('pricing-section')}
                  className="text-[13px] text-ink-muted hover:text-brand transition-colors cursor-pointer text-left block"
                >
                  Abonnementen
                </button>
              </li>
              <li>
                <a
                  href="/over-ons"
                  className="text-[13px] text-ink-muted hover:text-brand transition-colors text-left block"
                >
                  Over Ons
                </a>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('contact-section')}
                  className="text-[13px] text-ink-muted hover:text-brand transition-colors cursor-pointer text-left block"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Juridisch */}
          <div>
            <h4 className="font-bold text-ink text-sm tracking-wide mb-5">Juridisch</h4>
            <ul className="space-y-4">
              {legalKeys.map((key) => (
                <li key={key}>
                  <a
                    href={`/${LEGAL_DOCS[key].slug}`}
                    className="text-[13px] text-ink-muted hover:text-brand transition-colors text-left block"
                  >
                    {LEGAL_DOCS[key].title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-ink text-sm tracking-wide mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:contact@tv-nexu.app" className="flex items-center gap-2.5 text-[13px] text-ink-muted hover:text-brand transition-colors">
                  <Mail className="w-4 h-4 text-brand" />
                  <span>contact@tv-nexu.app</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/447832486269?text=Hallo%20TvNexu!%20Ik%20heb%20een%20vraag%20over%20uw%20IPTV%20pakketten." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-[13px] text-ink-muted hover:text-brand transition-colors">
                  <Phone className="w-4 h-4 text-brand" />
                  <span>WhatsApp Ondersteuning</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Payment logos */}
        <div className="mt-12 pt-8 border-t border-line">
          <p className="text-xs text-ink-muted text-center mb-4">Geaccepteerde betaalmethoden</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['iDEAL', 'Bancontact', 'PayPal', 'Visa', 'Mastercard', 'Bitcoin'].map((method) => (
              <div key={method} className="h-10 px-3 bg-surface border border-line rounded-xl shadow-sm flex items-center justify-center">
                <img src={`/images/payment_logos/${method}.png`} alt={method} className="h-6 max-w-[64px] object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-muted">
          <span>&copy; {new Date().getFullYear()} <a href="https://tv-nexu.app/" className="hover:text-ink-muted transition-colors">tv-nexu.app</a> — TvNexu IPTV. Alle rechten voorbehouden.</span>
          <div className="flex gap-4">
            <span className="text-ink-muted">|</span>
            <span>Gecertificeerde SSL-beveiliging</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
