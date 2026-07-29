import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface PageShellProps {
  /** Current page name, shown as the last breadcrumb crumb. */
  crumb: string;
  children: ReactNode;
}

/**
 * Chrome shared by every standalone page. The homepage's scroll targets don't
 * exist here, so the Navbar/Footer handlers point back at the homepage anchor.
 */
export default function PageShell({ crumb, children }: PageShellProps) {
  const goToHomeSection = (sectionId: string) => {
    window.location.href = `/#${sectionId}`;
  };

  return (
    <div className="min-h-screen bg-page text-ink font-sans antialiased selection:bg-brand selection:text-white">
      <Navbar onPricingClick={() => goToHomeSection('pricing-section')} />

      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
          <nav aria-label="Kruimelpad" className="text-[13px] text-ink-muted">
            <a href="/" className="hover:text-brand transition-colors">TvNexu</a>
            <span className="mx-2">/</span>
            <span className="text-ink font-semibold">{crumb}</span>
          </nav>
        </div>
        {children}
      </main>

      <Footer onScrollTo={goToHomeSection} />
    </div>
  );
}
