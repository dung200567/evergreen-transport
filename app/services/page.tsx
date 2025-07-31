'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from './ServicesHero';
import ServicesList from './ServicesList';
import ServiceProcess from './ServiceProcess';
import ServiceBenefits from './ServiceBenefits';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ServicesHero />
      <ServicesList />
      <ServiceProcess />
      <ServiceBenefits />
      <Footer />
    </div>
  );
}