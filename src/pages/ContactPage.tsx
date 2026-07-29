import PageShell from './PageShell';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <PageShell crumb="Contact">
      <section className="pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink max-w-3xl">
            Contact opnemen met <span className="text-brand">TvNexu</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-ink-muted leading-relaxed max-w-2xl">
            Vragen over een abonnement, de installatie of een zender die het niet doet? Ons
            Nederlandstalige team staat dag en nacht voor je klaar en antwoordt gemiddeld binnen
            vijf minuten.
          </p>
        </div>
      </section>

      {/* The homepage contact block, reused verbatim */}
      <Contact />
    </PageShell>
  );
}
