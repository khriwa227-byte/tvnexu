/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import StreamingReleases from './components/StreamingReleases';
import SportsLeagues from './components/SportsLeagues';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import DeviceCompatibility from './components/DeviceCompatibility';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CheckoutModal from './components/CheckoutModal';
import { PricingPlan } from './types';
import { PRICING_PLANS } from './data';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [adultChannelsChecked, setAdultChannelsChecked] = useState(false);

  // Unified scroll logic helper
  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openCheckoutWithPlan = (plan: PricingPlan, adultChecked: boolean) => {
    setSelectedPlan(plan);
    setAdultChannelsChecked(adultChecked);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Navigation Topbar */}
      <Navbar onPricingClick={() => handleScrollToSection('pricing-section')} />

      <main className="relative">
        {/* Hero Banner Section */}
        <Hero
          onPricingClick={() => handleScrollToSection('pricing-section')}
          onOrderClick={(planId) => {
            const foundPlan = PRICING_PLANS.find(p => p.id === planId) || PRICING_PLANS[0];
            openCheckoutWithPlan(foundPlan, false);
          }}
        />

        {/* Brand Key Benefits list */}
        <Benefits onPricingClick={() => handleScrollToSection('pricing-section')} />

        {/* Media / Movie posters showcase */}
        <StreamingReleases />

        {/* Sports icons and league lists */}
        <SportsLeagues />

        {/* Premium Packages in Dutch */}
        <Pricing onSelectPlan={openCheckoutWithPlan} />

        {/* Tutorial and Multi-Screen guide steps */}
        <HowItWorks onPricingClick={() => handleScrollToSection('pricing-section')} />

        {/* Device compatibility grid of cards */}
        <DeviceCompatibility onPricingClick={() => handleScrollToSection('pricing-section')} />

        {/* Client reviews with mock TVs */}
        <Testimonials />

        {/* Dutch translation accordions FAQs */}
        <FAQ />

        {/* Direct WhatsApp contact drawer block */}
        <Contact />
      </main>

      {/* Accepted payment badges and legal copyright column */}
      <Footer onScrollTo={handleScrollToSection} />

      {/* Checkout details simulation popup */}
      {selectedPlan && (
        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          plan={selectedPlan}
          initialAdultChannels={adultChannelsChecked}
        />
      )}
    </div>
  );
}

