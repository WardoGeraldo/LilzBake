'use client';

import React from 'react';
import { CONTACT_CARDS } from '@/lib/content';
import { ScrollReveal } from './ScrollReveal';
import { BreadDoodle } from './decorative/BreadDoodle';

export const Contact: React.FC = () => {
  return (
    <section
      id="kontak"
      className="relative py-20 lg:py-32 bg-bg-main overflow-hidden scroll-mt-16"
    >
      {/* Background doodles */}
      <div className="absolute right-0 bottom-6 opacity-5 pointer-events-none">
        <BreadDoodle type="roti-bantal" size={280} strokeWidth={1} strokeColor="#a16c37" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <ScrollReveal>
            <h2 className="font-display font-semibold text-text-primary text-3xl sm:text-4xl lg:text-[44px] leading-tight mb-3.5 text-balance">
              Yuk, Pesan Sekarang
            </h2>
            <p className="text-text-body text-base sm:text-lg leading-relaxed">
              Kami siap bantu dari Surabaya &amp; hingga seluruh Indonesia — chat WhatsApp kami, atau mampir ke Instagram kami.
            </p>
          </ScrollReveal>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
          {CONTACT_CARDS.map((card, idx) => {
            const CardWrapper = card.href ? 'a' : 'div';
            const wrapperProps = card.href
              ? {
                  href: card.href,
                  target: card.isExternal ? '_blank' : undefined,
                  rel: card.isExternal ? 'noopener noreferrer' : undefined,
                }
              : {};

            return (
              <ScrollReveal key={card.id} delay={idx * 0.05}>
                <CardWrapper
                  {...wrapperProps}
                  className={`flex items-center gap-4 bg-surface rounded-[20px] p-5 sm:p-6 shadow-brand border border-accent-gold/15 transition-all duration-300 ${
                    card.href
                      ? 'hover:shadow-brand-lg hover:-translate-y-1 hover:border-accent-gold cursor-pointer group'
                      : ''
                  }`}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-bg-alt/70 flex items-center justify-center text-text-primary shrink-0 transition-colors group-hover:bg-bg-alt">
                    {card.id.startsWith('wa') && (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                    )}
                    {card.id === 'instagram' && (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    )}
                    {card.id === 'email' && (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                  </div>

                  {/* Text details */}
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                      {card.label}
                    </span>
                    <span className="font-display font-medium text-text-dark text-base sm:text-[17px] group-hover:text-text-primary transition-colors">
                      {card.value}
                    </span>
                  </div>
                </CardWrapper>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
