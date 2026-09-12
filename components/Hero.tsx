'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { HERO_CONTENT } from '@/lib/content';
import { WA_LINKS } from '@/lib/whatsapp';
import { BreadDoodle } from './decorative/BreadDoodle';

interface HeroProps {
  heroSlotRef?: React.RefObject<HTMLDivElement>;
  isDesktop?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ heroSlotRef, isDesktop = false }) => {
  const shouldReduceMotion = useReducedMotion();
  const [isTabVisible, setIsTabVisible] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDesktopPointer, setIsDesktopPointer] = useState(false);
  const internalSlotRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  const activeSlotRef = heroSlotRef || internalSlotRef;

  // Tab visibility listener to save CPU/battery
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(document.visibilityState === 'visible');
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Check for fine pointer (desktop mouse)
  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)');
    setIsDesktopPointer(media.matches);

    const handler = (e: MediaQueryListEvent) => setIsDesktopPointer(e.matches);
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  // Desktop mouse movement for Layer 2 interactive parallax
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDesktopPointer || shouldReduceMotion || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Headline words for stagger animation
  const headlineWords = HERO_CONTENT.headline.split(' ');

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-gradient-to-br from-bg-main via-bg-main to-bg-alt overflow-hidden"
    >
      {/* ============================================================ */}
      {/* LAYER 3: Watermark background doodles (opacity 3-5%) */}
      {/* ============================================================ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Top right subtle doodle */}
        <div className="absolute -top-10 -right-10 opacity-5">
          <BreadDoodle type="roti-sisir" size={360} strokeWidth={1} strokeColor="#a16c37" />
        </div>
        {/* Bottom left subtle doodle */}
        <div className="absolute -bottom-16 -left-12 opacity-5">
          <BreadDoodle type="croissant" size={320} strokeWidth={1} strokeColor="#a16c37" />
        </div>
        {/* Subtle center wheat */}
        <div className="absolute top-1/3 left-[45%] -translate-x-1/2 opacity-[0.035]">
          <BreadDoodle type="wheat" size={240} strokeWidth={0.8} strokeColor="#a16c37" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* ============================================================ */}
          {/* LEFT COLUMN: Text & CTAs (6 cols on lg/xl) */}
          {/* ============================================================ */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left">
            
            {/* 0.0s: Badge "Baked With Love · Est. 2019" */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0 }}
              className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-text-secondary/25 bg-surface/70 backdrop-blur-xs text-text-primary text-xs font-semibold tracking-wider uppercase mb-5 shadow-xs"
            >
              <span>{HERO_CONTENT.badge}</span>
            </motion.div>

            {/* 0.15s: Headline H1 "Rasa yang Bikin Kangen." staggered by word */}
            <h1 className="font-display font-semibold text-text-primary text-4xl sm:text-5xl lg:text-[62px] leading-[1.2] sm:leading-[1.18] tracking-[-0.015em] mb-4 text-balance pb-1">
              {headlineWords.map((word, index) => (
                <span key={index} className="inline-block mr-[0.28em] py-0.5">
                  <motion.span
                    className="inline-block"
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                    animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: 'easeOut',
                      delay: 0.15 + index * 0.06,
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* 0.4s: Tagline italic "Taste Of Nostalgia" */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
              className="font-display italic font-medium text-text-secondary text-2xl sm:text-3xl lg:text-4xl mb-6"
            >
              {HERO_CONTENT.tagline}
            </motion.div>

            {/* 0.5s: Subheadline */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
              className="text-text-body text-base sm:text-lg lg:text-[19px] leading-[1.68] max-w-xl mb-8"
            >
              {HERO_CONTENT.subheadline}
            </motion.p>

            {/* 0.65s: CTAs (2 buttons) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-6">
              <motion.a
                href={WA_LINKS.admin1General}
                target="_blank"
                rel="noopener noreferrer"
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.65 }}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-base font-semibold text-surface bg-text-primary hover:bg-text-dark transition-all duration-200 shadow-brand hover:scale-[1.03] active:scale-[0.98] text-center"
              >
                {HERO_CONTENT.primaryCta}
              </motion.a>

              <motion.a
                href="#produk"
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.73 }}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-base font-medium text-text-primary border-2 border-text-primary/30 hover:bg-bg-alt/70 hover:border-text-primary transition-all duration-200 text-center"
              >
                {HERO_CONTENT.secondaryCta}
              </motion.a>
            </div>

            {/* Micro-copy */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 0.85 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="text-xs sm:text-sm font-medium tracking-wide text-text-secondary/90 flex items-center gap-2"
            >
              <span>{HERO_CONTENT.microCopy}</span>
            </motion.p>

          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: Layered Visual Composition (6 cols on lg/xl) */}
          {/* ============================================================ */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center pt-8 lg:pt-0">
            
            {/* ---------------------------------------------------------- */}
            {/* LAYER 2: Floating line-art doodles around box + Mouse move */}
            {/* ---------------------------------------------------------- */}
            {!shouldReduceMotion && (
              <>
                {/* Line art doodle 1: Roti Sisir at top right */}
                <motion.div
                  style={{
                    x: mousePos.x * 24,
                    y: mousePos.y * 20,
                  }}
                  animate={
                    isTabVisible
                      ? {
                          y: [0, -7, 0],
                          x: [0, 4, 0],
                        }
                      : { y: 0, x: 0 }
                  }
                  transition={{
                    duration: 6.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -top-10 -right-2 sm:-right-6 z-10 pointer-events-none opacity-40 select-none"
                >
                  <BreadDoodle type="roti-sisir" size={76} strokeColor="#a16c37" strokeWidth={1.8} />
                </motion.div>

                {/* Line art doodle 2: Croissant at bottom left */}
                <motion.div
                  style={{
                    x: mousePos.x * -20,
                    y: mousePos.y * -16,
                  }}
                  animate={
                    isTabVisible
                      ? {
                          y: [0, 8, 0],
                          x: [0, -5, 0],
                        }
                      : { y: 0, x: 0 }
                  }
                  transition={{
                    duration: 7.0,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -bottom-10 -left-6 sm:-left-4 z-10 pointer-events-none opacity-40 select-none"
                >
                  <BreadDoodle type="croissant" size={70} strokeColor="#a16c37" strokeWidth={1.8} />
                </motion.div>

                {/* Line art doodle 3: Wheat sparkle at center right */}
                <motion.div
                  style={{
                    x: mousePos.x * 14,
                    y: mousePos.y * 14,
                  }}
                  animate={
                    isTabVisible
                      ? {
                          y: [0, -5, 0],
                          rotate: [0, 8, 0],
                        }
                      : { y: 0, rotate: 0 }
                  }
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute top-1/2 -right-6 sm:-right-8 z-10 pointer-events-none opacity-45 select-none"
                >
                  <BreadDoodle type="sparkle" size={32} strokeColor="#c9974f" strokeWidth={2} />
                </motion.div>
              </>
            )}

            {/* ---------------------------------------------------------- */}
            {/* ANCHOR SLOT: Coordinates target for desktop morphing / Mobile fallback */}
            {/* ---------------------------------------------------------- */}
            <div
              ref={activeSlotRef}
              className="relative w-full max-w-[460px] sm:max-w-[520px] md:max-w-[580px] lg:max-w-[620px] xl:max-w-[660px] aspect-[1181/981] flex flex-col items-center justify-center"
            >
              {/* MOBILE FALLBACK (< 768px or prefers-reduced-motion): Render native Hero box */}
              {(!isDesktop || shouldReduceMotion) && (
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                  <motion.div
                    initial={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : {
                            opacity: 0,
                            y: -60,
                            rotate: -8,
                            scale: 0.92,
                          }
                    }
                    animate={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : isTabVisible
                        ? {
                            opacity: 1,
                            y: [0, -10, 0],
                            rotate: [-4, -2, -4],
                            scale: 1,
                          }
                        : {
                            opacity: 1,
                            y: 0,
                            rotate: -4,
                            scale: 1,
                          }
                    }
                    transition={
                      shouldReduceMotion
                        ? { duration: 0.4 }
                        : {
                            opacity: { duration: 0.8, delay: 0.3 },
                            scale: { duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
                            y: {
                              duration: 4,
                              repeat: Infinity,
                              repeatType: 'mirror',
                              ease: 'easeInOut',
                              delay: 1.0,
                            },
                            rotate: {
                              duration: 5,
                              repeat: Infinity,
                              repeatType: 'mirror',
                              ease: 'easeInOut',
                              delay: 1.0,
                            },
                          }
                    }
                    className="relative w-full h-full z-20 will-change-transform filter drop-shadow-[0_16px_32px_rgba(161,108,55,0.22)]"
                  >
                    <Image
                      src={HERO_CONTENT.boxImage}
                      alt={HERO_CONTENT.boxAlt}
                      width={1181}
                      height={981}
                      priority
                      className="w-full h-full object-contain select-none pointer-events-none"
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 55vw, 660px"
                    />
                  </motion.div>

                  {/* Fallback Ground Shadow */}
                  {!shouldReduceMotion && (
                    <motion.div
                      animate={
                        isTabVisible
                          ? {
                              opacity: [0.22, 0.15, 0.22],
                              scale: [1, 0.9, 1],
                            }
                          : { opacity: 0.22, scale: 1 }
                      }
                      transition={{
                        opacity: { duration: 4, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: 1.0 },
                        scale: { duration: 4, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: 1.0 },
                      }}
                      className="w-[85%] h-6 bg-[#5c3a1e] rounded-[100%] filter blur-md -mt-5 z-10 select-none pointer-events-none"
                    />
                  )}
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
