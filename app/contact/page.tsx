'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import ContactMap from './ContactMap';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <ContactMap />
      <Footer />
    </div>
  );
}