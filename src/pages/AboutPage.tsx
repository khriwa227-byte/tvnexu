import { ShieldCheck, Zap, Globe2, CreditCard, Headset, Tv } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const STATS = [
  { id: 'channels', value: '79.000+', label: 'Live zenders' },
  { id: 'vod', value: '249.000+', label: 'Films & series' },
  { id: 'quality', value: '4K / 8K', label: 'Beeldkwaliteit' },
  { id: 'support', value: '24/7', label: 'Nederlandse support' },
];

const VALUES = [
  {
    id: 'servers',
    Icon: Zap,
    title: 'Toegewijde Europese servers',
    body: 'TvNexu draait op eigen servers in Europa in plaats van gedeelde capaciteit. Daardoor openen zenders in minder dan een halve seconde en blijft het beeld stabiel tijdens drukke wedstrijdavonden.',
  },
  {
    id: 'payment',
    Icon: CreditCard,
    title: 'Eenmalig betalen, geen abonnementsval',
    body: 'Bij TvNexu betaal je één keer voor de periode die je kiest. Geen automatische incasso, geen stilzwijgende verlenging en geen onverwachte afschrijvingen. Loopt je periode af, dan stopt hij vanzelf.',
  },
  {
    id: 'region',
    Icon: Globe2,
    title: 'Gemaakt voor Nederland en België',
    body: 'Onze zenderlijst is samengesteld rond wat kijkers in de Lage Landen daadwerkelijk kijken: Eredivisie, Formule 1, Belgian Pro League en de Nederlandse en Vlaamse zenders — niet een generieke internationale lijst.',
  },
  {
    id: 'support',
    Icon: Headset,
    title: 'Support die je in het Nederlands te woord staat',
    body: 'Vragen over installatie of een zender die het even niet doet? Ons team is dag en nacht bereikbaar via WhatsApp en antwoordt gemiddeld binnen vijf minuten.',
  },
];

const FACTS = [
  { id: 'name', label: 'Naam', value: 'TvNexu' },
  { id: 'domain', label: 'Officiële website', value: 'tv-nexu.app' },
  { id: 'since', label: 'Actief sinds', value: '2022' },
  { id: 'area', label: 'Werkgebied', value: 'Nederland, België en Canada' },
  { id: 'languages', label: 'Support in', value: 'Nederlands, Frans en Engels' },
  { id: 'payment', label: 'Betaalmethoden', value: 'iDEAL, Bancontact, PayPal, Visa, Mastercard, Bitcoin' },
];

export default function AboutPage() {
  // On this page the homepage's scroll targets don't exist, so send the
  // shared Navbar/Footer handlers back to the homepage anchor instead.
  const goToHomeSection = (sectionId: string) => {
    window.location.href = `/#${sectionId}`;
  };

  return (
    <div className="min-h-screen bg-page text-ink font-sans antialiased selection:bg-brand selection:text-white">
      <Navbar onPricingClick={() => goToHomeSection('pricing-section')} />

      <main>
        {/* Intro */}
        <section className="py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Kruimelpad" className="text-[13px] text-ink-muted mb-6">
              <a href="/" className="hover:text-brand transition-colors">TvNexu</a>
              <span className="mx-2">/</span>
              <span className="text-ink font-semibold">Over ons</span>
            </nav>

            <div className="bg-surface rounded-[32px] border border-line shadow-lg shadow-ink/5 p-6 sm:p-10 lg:p-14">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-tint border border-brand/20 text-brand rounded-full font-bold text-[11px] uppercase tracking-wide">
                <ShieldCheck className="w-3.5 h-3.5" />
                Over ons
              </span>

              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] tracking-tight text-ink max-w-4xl">
                Over <span className="text-brand">TvNexu</span> — de officiële IPTV-aanbieder voor Nederland en België
              </h1>

              <div className="mt-6 space-y-4 text-sm sm:text-base text-ink-muted leading-relaxed max-w-3xl">
                <p>
                  <strong className="text-ink font-semibold">TvNexu</strong> is een premium
                  IPTV-dienst voor kijkers in Nederland, België en Canada. Wij leveren meer dan
                  79.000 live zenders en 249.000 films en series in kwaliteiten tot 4K en 8K,
                  via toegewijde Europese servers.
                </p>
                <p>
                  Wij zijn begonnen vanuit een simpele frustratie: IPTV was in dit taalgebied
                  vaak traag, onbetrouwbaar en verkocht met kleine lettertjes. TvNexu is gebouwd
                  als het tegenovergestelde daarvan — snel, voorspelbaar en zonder verborgen
                  voorwaarden.
                </p>
                <p>
                  Deze website, <strong className="text-ink font-semibold">tv-nexu.app</strong>,
                  is het enige officiële verkooppunt van TvNexu. Kom je de naam TvNexu elders
                  tegen, controleer dan altijd eerst het adres in je browser.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="pb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {STATS.map((stat) => (
                <div
                  key={stat.id}
                  className="bg-surface rounded-3xl border border-line shadow-lg shadow-ink/5 p-6 text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-brand to-brand-deep bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[13px] font-semibold text-ink-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What makes TvNexu different */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink">
                Waar <span className="text-brand">TvNexu</span> voor staat
              </h2>
              <p className="text-sm sm:text-base text-ink-muted">
                Vier keuzes die bepalen hoe wij onze dienst opbouwen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {VALUES.map(({ id, Icon, title, body }) => (
                <div
                  key={id}
                  className="bg-surface rounded-3xl border border-line shadow-lg shadow-ink/5 p-6 sm:p-8 space-y-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-tint text-brand flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink leading-snug">{title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Facts table */}
        <section className="pb-12 sm:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-surface rounded-3xl border border-line shadow-lg shadow-ink/5 overflow-hidden">
              <div className="px-6 sm:px-8 py-5 border-b border-line flex items-center gap-2.5">
                <Tv className="w-5 h-5 text-brand" />
                <h2 className="text-lg font-bold text-ink tracking-tight">TvNexu in het kort</h2>
              </div>
              <dl className="divide-y divide-line">
                {FACTS.map((fact) => (
                  <div
                    key={fact.id}
                    className="px-6 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6"
                  >
                    <dt className="text-[13px] font-bold uppercase tracking-wide text-ink-muted sm:w-56 shrink-0">
                      {fact.label}
                    </dt>
                    <dd className="text-sm text-ink font-medium">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-16 sm:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-success to-success-deep rounded-3xl shadow-xl shadow-success/25 p-8 sm:p-12 text-center space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Klaar om TvNexu te proberen?
              </h2>
              <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
                Kies een pakket, reken veilig af en ontvang je inloggegevens direct per e-mail.
              </p>
              <a
                href="/#pricing-section"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 bg-white text-success-deep font-bold text-sm sm:text-base tracking-wide shadow-lg hover:scale-[1.02] transition-transform"
              >
                Bekijk de abonnementen
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer onScrollTo={goToHomeSection} />
    </div>
  );
}
