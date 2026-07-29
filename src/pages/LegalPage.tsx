import { FileText } from 'lucide-react';
import PageShell from './PageShell';
import { LEGAL_DOCS, LegalDocKey } from '../legal';

interface LegalPageProps {
  doc: LegalDocKey;
}

export default function LegalPage({ doc }: LegalPageProps) {
  const { title, intro, clauses, slug } = LEGAL_DOCS[doc];
  const others = (Object.keys(LEGAL_DOCS) as LegalDocKey[]).filter((k) => k !== doc);

  return (
    <PageShell crumb={title}>
      <section className="py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface rounded-[32px] border border-line shadow-lg shadow-ink/5 p-6 sm:p-10 lg:p-12">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-brand-tint text-brand flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">{title}</h1>
            </div>

            <p className="mt-6 text-sm sm:text-base text-ink-muted leading-relaxed">{intro}</p>

            <div className="mt-8 space-y-5">
              {clauses.map((clause, i) => (
                <p key={i} className="text-sm text-ink-muted leading-relaxed">
                  {clause}
                </p>
              ))}
            </div>

            <p className="mt-10 pt-6 border-t border-line text-[13px] text-ink-muted">
              Vragen over dit beleid? Neem contact op via{' '}
              <a href="/contact" className="text-brand font-semibold hover:underline">
                onze contactpagina
              </a>
              .
            </p>
          </div>

          {/* Sibling legal documents */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {others.map((key) => (
              <a
                key={key}
                href={`/${LEGAL_DOCS[key].slug}`}
                className="bg-surface rounded-2xl border border-line shadow-sm p-5 hover:border-brand/30 hover:shadow-md transition-all"
              >
                <span className="text-[11px] font-bold uppercase tracking-wide text-ink-muted">
                  Juridisch
                </span>
                <span className="block mt-1 text-base font-semibold text-ink">
                  {LEGAL_DOCS[key].title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
