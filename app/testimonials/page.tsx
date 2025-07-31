'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestimonialsHero from './TestimonialsHero';
import TestimonialsGrid from './TestimonialsGrid';
import TestimonialsVideo from './TestimonialsVideo';
import TestimonialsStats from './TestimonialsStats';

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <TestimonialsHero />
      <TestimonialsGrid />
      <TestimonialsVideo />
      <TestimonialsStats />
      <Footer />
    </div>
  );
}