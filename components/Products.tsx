'use client';

import React from 'react';
import Image from 'next/image';
import { PRODUCTS, HAMPERS_BANNER, BRAND } from '@/lib/content';
import { ProductCard } from './ProductCard';
import { ScrollReveal } from './ScrollReveal';
import { BreadDoodle } from './decorative/BreadDoodle';

export const Products: React.FC = () => {
  return (
    <section
      id="produk"
      className="relative py-20 lg:py-32 bg-bg-alt/50 overflow-hidden scroll-mt-16"
    >
      {/* Background line-art watermark */}
      <div className="absolute left-[-50px] top-1/3 opacity-5 pointer-events-none">
        <BreadDoodle type="croissant" size={280} strokeWidth={1} strokeColor="#a16c37" />
      </div>
      <div className="absolute right-[-40px] bottom-10 opacity-5 pointer-events-none">
        <BreadDoodle type="roti-sisir" size={300} strokeWidth={1} strokeColor="#a16c37" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18">
          <ScrollReveal>
            <h2 className="font-display font-semibold text-text-primary text-3xl sm:text-4xl lg:text-[44px] leading-tight mb-3.5 text-balance">
              Produk Favorit
            </h2>
            <p className="text-text-body text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Delapan rasa jadoel andalan kami, dan semuanya bisa dikemas jadi hampers cantik.
            </p>
          </ScrollReveal>
        </div>

        {/* ============================================================ */}
        {/* Mobile Horizontal Carousel (<sm) / Desktop Grid (sm+) */}
        {/* ============================================================ */}
        
        {/* Mobile View: Horizontal Scroll-Snap */}
        <div className="sm:hidden -mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 pt-1 no-scrollbar">
          {PRODUCTS.map((product, idx) => (
            <div
              key={product.id}
              className="min-w-[80vw] max-w-[85vw] snap-center shrink-0"
            >
              <ScrollReveal delay={idx * 0.05}>
                <ProductCard product={product} />
              </ScrollReveal>
            </div>
          ))}
        </div>

        {/* Tablet & Desktop View: 2 cols on md, 4 cols on lg */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 mb-14">
          {PRODUCTS.map((product, idx) => (
            <ScrollReveal key={product.id} delay={idx * 0.06}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>

        {/* ============================================================ */}
        {/* Hampers Banner Row: Full-width bar closing the grid */}
        {/* ============================================================ */}
        <ScrollReveal delay={0.2}>
          <div className="bg-surface rounded-[22px] p-5 sm:p-7 shadow-brand border border-accent-gold/20 mb-12 overflow-hidden flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-full md:w-44 h-36 md:h-28 rounded-[14px] overflow-hidden shrink-0 shadow-sm bg-bg-alt">
              <Image
                src={HAMPERS_BANNER.image}
                alt={HAMPERS_BANNER.alt}
                fill
                sizes="(max-width: 768px) 100vw, 180px"
                className="object-cover"
              />
            </div>
            <div className="flex-grow text-center md:text-left">
              <span className="inline-block text-[11px] font-semibold tracking-wider text-accent-gold uppercase bg-bg-alt/70 px-2.5 py-1 rounded-full mb-1.5">
                Spesial Hampers
              </span>
              <p className="text-text-dark font-medium text-base sm:text-[17px] leading-relaxed">
                {HAMPERS_BANNER.text}
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="#bisnis"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-text-primary border border-text-primary/30 hover:bg-bg-alt transition-colors"
              >
                Lihat Info Hampers →
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA to Instagram */}
        <div className="text-center">
          <ScrollReveal delay={0.25}>
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-base font-semibold text-surface bg-text-primary hover:bg-text-dark transition-all duration-200 shadow-brand hover:scale-[1.03] active:scale-[0.98]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Lihat Semua Produk di Instagram</span>
            </a>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};
