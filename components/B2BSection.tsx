'use client';

import React from 'react';
import { B2B_SERVICES } from '@/lib/content';
import { WA_LINKS } from '@/lib/whatsapp';
import { ScrollReveal } from './ScrollReveal';
import { BreadDoodle } from './decorative/BreadDoodle';

export const B2BSection: React.FC = () => {
  return (
    <section
      id="bisnis"
      className="relative py-20 lg:py-32 bg-bg-alt overflow-hidden scroll-mt-16"
    >
      {/* Background doodles */}
      <div className="absolute left-[-20px] top-1/3 opacity-5 pointer-events-none">
        <BreadDoodle type="croissant" size={260} strokeWidth={1} strokeColor="#a16c37" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <ScrollReveal>
            <h2 className="font-display font-semibold text-text-primary text-3xl sm:text-4xl lg:text-[44px] leading-tight mb-3.5 text-balance">
              Untuk Bisnis & Acara Spesialmu
            </h2>
            <p className="text-text-body text-base sm:text-lg leading-relaxed">
              Selain melayani pembelian langsung, LilzBake juga jadi mitra terpercaya untuk:
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {B2B_SERVICES.map((service, idx) => (
            <ScrollReveal key={service.id} delay={idx * 0.08}>
              <div className="flex flex-col h-full bg-surface rounded-[24px] p-7 sm:p-8 shadow-brand border border-accent-gold/20 transition-all duration-300 hover:shadow-brand-lg hover:-translate-y-1.5">
                
                {/* Custom Line-art Icon in warm brown */}
                <div className="w-14 h-14 rounded-2xl bg-bg-alt/60 flex items-center justify-center mb-6 text-text-primary border border-accent-gold/30">
                  {service.id === 'supplier' && (
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  )}
                  {service.id === 'hampers' && (
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 12 20 22 4 22 4 12" />
                      <rect x="2" y="7" width="20" height="5" />
                      <line x1="12" y1="22" x2="12" y2="7" />
                      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                    </svg>
                  )}
                  {service.id === 'catering' && (
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                      <line x1="6" y1="1" x2="6" y2="4" />
                      <line x1="10" y1="1" x2="10" y2="4" />
                      <line x1="14" y1="1" x2="14" y2="4" />
                    </svg>
                  )}
                </div>

                {/* Card Title & Description */}
                <h3 className="font-display font-semibold text-text-primary text-xl sm:text-2xl mb-3">
                  {service.title}
                </h3>
                <p className="text-text-dark text-sm sm:text-base leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Small indicator */}
                <div className="pt-5 mt-4 border-t border-bg-alt flex items-center text-xs font-semibold text-text-secondary">
                  <span>Konsultasi & Penawaran Khusus</span>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Button with Pre-filled B2B WhatsApp Message */}
        <div className="text-center">
          <ScrollReveal delay={0.25}>
            <a
              href={WA_LINKS.b2b}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold text-surface bg-text-primary hover:bg-text-dark transition-all duration-200 shadow-brand hover:scale-[1.03] active:scale-[0.98]"
            >
              Diskusikan Kebutuhanmu
            </a>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};
