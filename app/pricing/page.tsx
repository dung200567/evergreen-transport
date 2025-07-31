'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingHero from './PricingHero';
import PricingPlans from './PricingPlans';
import PricingCalculator from './PricingCalculator';
import PricingFAQ from './PricingFAQ';

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <PricingHero />
      <PricingPlans />
      <PricingCalculator />
      <PricingFAQ />
      <Footer />
    </div>
  );
}