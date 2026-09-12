'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GALLERY_ITEMS } from '@/lib/content';
import { GalleryLightbox } from './GalleryLightbox';
import { ScrollReveal } from './ScrollReveal';
import { BreadDoodle } from './decorative/BreadDoodle';

export const Gallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section
      id="galeri"
      className="relative py-20 lg:py-32 bg-bg-main overflow-hidden scroll-mt-16"
    >
      {/* Background line-art watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-4 pointer-events-none">
        <BreadDoodle type="roti-bantal" size={380} strokeWidth={0.9} strokeColor="#a16c37" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <ScrollReveal>
            <h2 className="font-display font-semibold text-text-primary text-3xl sm:text-4xl lg:text-[44px] leading-tight mb-3 text-balance">
              Momen Manis LilzBake
            </h2>
            <p className="text-text-body text-base sm:text-lg leading-relaxed">
              Sebagian kecil dari yang sudah kami panggang, kemas, dan kirim ke pelanggan.
            </p>
          </ScrollReveal>
        </div>

        {/* 9 Photos Grid: 3 columns desktop, 2 columns tablet/mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {GALLERY_ITEMS.map((item, idx) => {
            return (
              <ScrollReveal key={item.slot} delay={idx * 0.05}>
                <button
                  type="button"
                  onClick={() => setActiveImage({ src: item.image, alt: item.alt })}
                  className="group relative w-full text-left rounded-[18px] sm:rounded-[22px] overflow-hidden bg-surface shadow-brand border border-accent-gold/15 focus:outline-none block cursor-pointer transition-all duration-300 hover:shadow-brand-lg"
                  aria-label={`Lihat foto ${item.alt}`}
                >
                  <div className={`relative w-full ${item.aspect} overflow-hidden bg-bg-alt/30`}>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 380px"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    {/* Warm brown overlay on hover */}
                    <div className="absolute inset-0 bg-text-dark/0 group-hover:bg-text-dark/15 transition-colors duration-300 pointer-events-none" />

                    {/* View icon badge appearing on hover */}
                    <div className="absolute bottom-3 right-3 p-2 rounded-full bg-surface/85 backdrop-blur-xs text-text-primary opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            );
          })}
        </div>

      </div>

      {/* Accessible Lightbox Modal */}
      <GalleryLightbox
        isOpen={Boolean(activeImage)}
        image={activeImage}
        onClose={() => setActiveImage(null)}
      />
    </section>
  );
};
