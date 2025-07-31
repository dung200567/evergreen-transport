'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingHero from './BookingHero';
import BookingForm from './BookingForm';
import BookingSteps from './BookingSteps';
import BookingContact from './BookingContact';

export default function BookingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <BookingHero />
      <BookingForm />
      <BookingSteps />
      <BookingContact />
      <Footer />
    </div>
  );
}