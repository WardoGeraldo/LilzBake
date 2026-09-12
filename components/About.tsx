'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, useTransform, useMotionValue, MotionValue } from 'framer-motion';
import { ABOUT_CONTENT } from '@/lib/content';
import { ScrollReveal } from './ScrollReveal';
import { BreadDoodle } from './decorative/BreadDoodle';

interface AboutProps {
  aboutSlotRef?: React.RefObject<HTMLDivElement>;
  isDesktop?: boolean;
  scrollYProgress?: MotionValue<number>;
}

export const About: React.FC<AboutProps> = ({
  aboutSlotRef,
  isDesktop = false,
  scrollYProgress,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const internalSlotRef = useRef<HTMLDivElement>(null);
  const activeSlotRef = aboutSlotRef || internalSlotRef;

  const fallbackProgress = useMotionValue(1);
  const activeProgress = scrollYProgress || fallbackProgress;

  // Micro-badges transform for desktop: pop-in when frame settles at [0.85, 1.0]
  const badgeOpacity = useTransform(activeProgress, [0.85, 1.0], [0, 1]);
  const badgeScale = useTransform(activeProgress, [0.85, 1.0], [0.8, 1]);

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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ============================================================ */}
          {/* Mobile Image: displayed first on mobile (< 768px) */}
          {/* ============================================================ */}
          <div className="md:hidden w-full">
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
                  <div className="pt-2.5 pb-0.5 px-1 flex justify-between items-center text-xs text-text-secondary/70 font-medium">
                    <span>LilzBake Surabaya</span>
                    <span className="font-display italic">#TasteOfNostalgia</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ============================================================ */}
          {/* Left / Text Content: Entrance reveal as specified in A.2 */}
          {/* ============================================================ */}
          <div className="md:col-span-7 lg:col-span-6 flex flex-col items-start">
            
            {/* Badge "SEJAK 2019" */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-text-secondary/25 bg-surface/80 text-text-primary text-xs font-semibold tracking-wider uppercase mb-4 shadow-xs"
            >
              <span>{ABOUT_CONTENT.badge}</span>
            </motion.div>

            {/* H2 Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
              className="font-display font-semibold text-text-primary text-3xl sm:text-4xl lg:text-[42px] leading-[1.18] tracking-[-0.01em] mb-6 text-balance"
            >
              {ABOUT_CONTENT.title}
            </motion.h2>

            {/* Body paragraphs */}
            <div className="space-y-4 text-text-dark text-base sm:text-lg leading-[1.72] mb-8 max-w-xl">
              {ABOUT_CONTENT.paragraphs.map((p, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.16 + idx * 0.08 }}
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* 3 Value Tags in pill format */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.32 }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2"
            >
              {ABOUT_CONTENT.values.map((val, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-accent-gold/40 text-text-primary text-xs sm:text-sm font-semibold tracking-wide shadow-xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                  <span>{val}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ============================================================ */}
          {/* Desktop Image Slot / Morphing Target Area */}
          {/* ============================================================ */}
          <div className="hidden md:block md:col-span-5 lg:col-span-6">
            <div className="relative mx-auto max-w-md xl:max-w-lg">
              
              {/* The Target Slot Frame Container */}
              <div
                ref={activeSlotRef}
                className="relative w-full aspect-[16/10] rounded-[24px]"
              >
                {/* Fallback for when morphing is disabled (e.g. reduced motion) */}
                {(!isDesktop || shouldReduceMotion) && (
                  <div className="relative w-full h-full rounded-[26px] p-3.5 bg-surface border-[8px] border-surface shadow-polaroid transform -rotate-1.5">
                    <div className="relative w-full h-[84%] rounded-[14px] overflow-hidden bg-bg-alt">
                      <Image
                        src={ABOUT_CONTENT.image}
                        alt={ABOUT_CONTENT.imageAlt}
                        fill
                        sizes="520px"
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="pt-2 px-1 flex justify-between items-center text-xs text-text-secondary/70 font-medium">
                      <span>LilzBake Surabaya</span>
                      <span className="font-display italic">#TasteOfNostalgia</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Micro-badge: Sticker "DIPANGGANG SEGAR" (Pops in at scroll [0.85, 1.0]) */}
              {isDesktop && !shouldReduceMotion && (
                <motion.div
                  style={{ opacity: badgeOpacity, scale: badgeScale }}
                  className="absolute -bottom-5 -right-3 z-30 bg-bg-alt border border-accent-gold/50 rounded-full px-4 py-1.5 shadow-brand text-xs font-semibold text-text-dark transform rotate-3 select-none pointer-events-none"
                >
                  Freshly Baked From The Oven
                </motion.div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
