import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, Plugin} from 'vite';
import {PRICING_PLANS} from './src/data';

const SITE_URL = 'https://tv-nexu.app';

/**
 * Builds the schema.org Offer list from the same PRICING_PLANS the page
 * renders. Google flags an Offer price that disagrees with the visible page,
 * and keeping a second copy of the prices in index.html is exactly how they
 * drifted apart before — so the markup is generated, never hand-maintained.
 */
function pricingOffersPlugin(): Plugin {
  return {
    name: 'inject-pricing-offers',
    transformIndexHtml(html) {
      if (!html.includes('"__PRICING_OFFERS__"')) return html;

      // Plan names carry display decoration (e.g. '🏆 GOUD'); structured data
      // wants the plain product name.
      const cleanName = (name: string) =>
        name.replace(/[^\p{L}\p{N}\s+/-]/gu, '').replace(/\s+/g, ' ').trim();

      const offers = PRICING_PLANS.map((plan) => ({
        '@type': 'Offer',
        name: `TvNexu ${cleanName(plan.name)}`,
        price: plan.price,
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/#pricing-section`,
      }));

      // Indented to sit correctly inside the surrounding JSON-LD block.
      const json = JSON.stringify(offers, null, 2)
        .split('\n')
        .join('\n          ');

      return html.replace('"__PRICING_OFFERS__"', json);
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), pricingOffersPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        // Multi-page: each entry ships its own crawlable HTML + <head>,
        // so /over-ons has real meta and schema without client-side routing.
        input: {
          main: path.resolve(__dirname, 'index.html'),
          about: path.resolve(__dirname, 'over-ons.html'),
          contact: path.resolve(__dirname, 'contact.html'),
          privacybeleid: path.resolve(__dirname, 'privacybeleid.html'),
          gebruiksvoorwaarden: path.resolve(__dirname, 'gebruiksvoorwaarden.html'),
          restitutiebeleid: path.resolve(__dirname, 'restitutiebeleid.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
