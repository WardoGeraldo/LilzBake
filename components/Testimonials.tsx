'use client';

import React from 'react';
import { TESTIMONIALS } from '@/lib/content';
import { TestimonialCard } from './TestimonialCard';
import { ScrollReveal } from './ScrollReveal';
import { BreadDoodle } from './decorative/BreadDoodle';

export const Testimonials: React.FC = () => {
  return (
    <section
      id="testimoni"
      className="relative py-20 lg:py-32 bg-bg-main overflow-hidden scroll-mt-16"
    >
      {/* Background doodles */}
      <div className="absolute right-[-40px] top-1/4 opacity-4 pointer-events-none">
        <BreadDoodle type="roti-sisir" size={320} strokeWidth={1} strokeColor="#a16c37" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <ScrollReveal>
            <h2 className="font-display font-semibold text-text-primary text-3xl sm:text-4xl lg:text-[44px] leading-tight mb-3.5 text-balance">
              Kata Mereka
            </h2>
            <p className="text-text-body text-base sm:text-lg leading-relaxed">
              Bukan kami yang bilang enak — biar pelanggan yang cerita.
            </p>
          </ScrollReveal>
        </div>

        {/* Testimonials 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((item, idx) => (
            <ScrollReveal key={item.id} delay={idx * 0.08}>
              <TestimonialCard
                quote={item.quote}
                author={item.author}
                location={item.location}
              />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
