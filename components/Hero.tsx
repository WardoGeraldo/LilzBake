'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { HERO_CONTENT } from '@/lib/content';
import { WA_LINKS } from '@/lib/whatsapp';
import { BreadDoodle } from './decorative/BreadDoodle';

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isTabVisible, setIsTabVisible] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDesktopPointer, setIsDesktopPointer] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

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
      {/* LAYER 3: Watermark background doodles (opacity 4-6%) */}
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
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 opacity-4">
          <BreadDoodle type="wheat" size={260} strokeWidth={0.8} strokeColor="#a16c37" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ============================================================ */}
          {/* LEFT COLUMN: Text & CTAs (~55% on desktop: 7 cols) */}
          {/* ============================================================ */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* 0.0s: Badge "Baked With Love · Est. 2019" */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-text-secondary/25 bg-surface/70 backdrop-blur-xs text-text-primary text-xs font-semibold tracking-wider uppercase mb-5 shadow-xs"
            >
              <BreadDoodle type="sparkle" size={14} strokeColor="#c9974f" strokeWidth={2} />
              <span>{HERO_CONTENT.badge}</span>
            </motion.div>

            {/* 0.15s: Headline H1 "Rasa yang Bikin Kangen." staggered by word */}
            <h1 className="font-display font-semibold text-text-primary text-4xl sm:text-5xl lg:text-[62px] leading-[1.12] tracking-[-0.015em] mb-3 text-balance">
              {headlineWords.map((word, index) => (
                <span key={index} className="inline-block mr-[0.28em] overflow-hidden">
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
          {/* RIGHT COLUMN: Layered Visual Composition (~45%: 5 cols) */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0">
            
            {/* ---------------------------------------------------------- */}
            {/* LAYER 2: Floating line-art doodles around box + Mouse move */}
            {/* ---------------------------------------------------------- */}
            {!shouldReduceMotion && (
              <>
                {/* Line art doodle 1: Roti Sisir at top right */}
                <motion.div
                  style={{
                    x: mousePos.x * 22,
                    y: mousePos.y * 18,
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
                  className="absolute -top-6 right-2 sm:right-6 z-10 pointer-events-none opacity-40 select-none"
                >
                  <BreadDoodle type="roti-sisir" size={68} strokeColor="#a16c37" strokeWidth={1.8} />
                </motion.div>

                {/* Line art doodle 2: Croissant at bottom left */}
                <motion.div
                  style={{
                    x: mousePos.x * -18,
                    y: mousePos.y * -14,
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
                  className="absolute -bottom-8 -left-4 sm:left-2 z-10 pointer-events-none opacity-40 select-none"
                >
                  <BreadDoodle type="croissant" size={62} strokeColor="#a16c37" strokeWidth={1.8} />
                </motion.div>

                {/* Line art doodle 3: Wheat sparkle at center right */}
                <motion.div
                  style={{
                    x: mousePos.x * 12,
                    y: mousePos.y * 12,
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
                  className="absolute top-1/2 -right-4 sm:right-0 z-10 pointer-events-none opacity-45 select-none"
                >
                  <BreadDoodle type="sparkle" size={28} strokeColor="#c9974f" strokeWidth={2} />
                </motion.div>
              </>
            )}

            {/* ---------------------------------------------------------- */}
            {/* LAYER 1: Main Box Packaging Container */}
            {/* ---------------------------------------------------------- */}
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[540px] flex flex-col items-center">
              
              {/* Box Image with Unboxing Sequence + Idle Floating Loop */}
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
                        // Entry transition
                        opacity: { duration: 0.8, delay: 0.3 },
                        scale: { duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
                        // Floating loops after initial settle (1.0s)
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
                className="relative z-20 will-change-transform filter drop-shadow-[0_12px_24px_rgba(161,108,55,0.18)]"
              >
                <Image
                  src={HERO_CONTENT.boxImage}
                  alt={HERO_CONTENT.boxAlt}
                  width={900}
                  height={600}
                  priority
                  className="w-full h-auto object-contain select-none pointer-events-none"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 520px"
                />
              </motion.div>

              {/* Dynamic Ground Shadow underneath box that scales inversely with floating */}
              {!shouldReduceMotion && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
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
                  className="w-[75%] h-5 bg-[#5c3a1e] rounded-[100%] filter blur-md -mt-4 z-10 select-none pointer-events-none"
                />
              )}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
