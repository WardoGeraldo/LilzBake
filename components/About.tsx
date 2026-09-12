'use client';

import React from 'react';
import Image from 'next/image';
import { ABOUT_CONTENT } from '@/lib/content';
import { ScrollReveal } from './ScrollReveal';
import { BreadDoodle } from './decorative/BreadDoodle';

export const About: React.FC = () => {
  return (
    <section
      id="tentang"
      className="relative py-20 lg:py-32 bg-bg-main overflow-hidden scroll-mt-16"
    >
      {/* Subtle background doodle watermark */}
      <div className="absolute right-0 top-1/4 translate-x-1/4 opacity-5 pointer-events-none">
        <BreadDoodle type="roti-bantal" size={320} strokeWidth={1} strokeColor="#a16c37" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Mobile Image: displayed first on mobile */}
          <div className="lg:hidden w-full">
            <ScrollReveal>
              <div className="relative mx-auto max-w-lg">
                <div className="relative rounded-[22px] overflow-hidden p-2.5 bg-surface shadow-polaroid transform -rotate-1">
                  <div className="relative aspect-[16/10] w-full rounded-[16px] overflow-hidden">
                    <Image
                      src={ABOUT_CONTENT.image}
                      alt={ABOUT_CONTENT.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Left / Text Content (desktop col-span-6 or 7) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <ScrollReveal>
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-text-secondary/25 bg-surface/80 text-text-primary text-xs font-semibold tracking-wider uppercase mb-4 shadow-xs">
                <span>{ABOUT_CONTENT.badge}</span>
              </div>

              {/* H2 Title */}
              <h2 className="font-display font-semibold text-text-primary text-3xl sm:text-4xl lg:text-[42px] leading-[1.18] tracking-[-0.01em] mb-6 text-balance">
                {ABOUT_CONTENT.title}
              </h2>

              {/* Body paragraphs */}
              <div className="space-y-4 text-text-dark text-base sm:text-lg leading-[1.72] mb-8 max-w-xl">
                {ABOUT_CONTENT.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* 3 Value Tags in pill format, inspired by BREAD | CAKE | SAVOURY packaging tag */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
                {ABOUT_CONTENT.values.map((val, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-accent-gold/40 text-text-primary text-xs sm:text-sm font-semibold tracking-wide shadow-xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                    <span>{val}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Desktop Image: right side with Polaroid style and -2deg rotation */}
          <div className="hidden lg:block lg:col-span-6">
            <ScrollReveal delay={0.1}>
              <div className="relative mx-auto max-w-md xl:max-w-lg">
                {/* Outer polaroid frame with slight -2deg rotation */}
                <div className="relative rounded-[26px] p-3.5 bg-surface shadow-polaroid transform -rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
                  <div className="relative aspect-[16/10] w-full rounded-[18px] overflow-hidden bg-bg-alt">
                    <Image
                      src={ABOUT_CONTENT.image}
                      alt={ABOUT_CONTENT.imageAlt}
                      fill
                      sizes="520px"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  {/* Subtle caption detail like Polaroid photo */}
                  <div className="pt-3 pb-1 px-2 flex justify-between items-center text-xs text-text-secondary/70 font-medium">
                    <span>LilzBake Surabaya</span>
                    <span className="font-display italic">#TasteOfNostalgia</span>
                  </div>
                </div>

                {/* Decorative sticker badge */}
                <div className="absolute -bottom-5 -right-3 bg-bg-alt border border-accent-gold/50 rounded-full px-4 py-1.5 shadow-brand text-xs font-semibold text-text-dark transform rotate-3 select-none">
                  Dipanggang Segar
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
