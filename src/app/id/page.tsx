'use client';

import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import StatsSection from '@/components/StatsSection';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="absolute top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>
      <Hero />
      <About />
      <Services />
      <StatsSection />
      <Gallery />
      <Testimonials />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
}