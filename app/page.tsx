import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Ticker } from '@/components/Ticker';
import { About } from '@/components/About';
import { Products } from '@/components/Products';
import { Gallery } from '@/components/Gallery';
import { VideoSection } from '@/components/VideoSection';
import { Testimonials } from '@/components/Testimonials';
import { B2BSection } from '@/components/B2BSection';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-bg-main overflow-x-hidden">
      {/* 1. Sticky Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section with unboxing sequence and floating box */}
        <Hero />

        {/* Endless Marquee Ticker right under Hero */}
        <Ticker />

        {/* 3. About Section */}
        <About />

        {/* 4. Products Section with 8 products & hampers banner */}
        <Products />

        {/* 5. Gallery Section with 9 photos & lightbox */}
        <Gallery />

        {/* 6. Video Section with 2 cinematic portrait videos */}
        <VideoSection />

        {/* 7. Testimonials Section */}
        <Testimonials />

        {/* 8. B2B & Supplier Section */}
        <B2BSection />

        {/* 9. Contact Section */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* 11. Persistent Floating WhatsApp button */}
      <FloatingWhatsApp />
    </div>
  );
}
