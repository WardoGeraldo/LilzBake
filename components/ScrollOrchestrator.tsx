'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion, useMotionValueEvent } from 'framer-motion';
import { HERO_CONTENT, ABOUT_CONTENT } from '@/lib/content';
import { Hero } from './Hero';
import { Ticker } from './Ticker';
import { About } from './About';

interface Coordinates {
  heroX: number;
  heroY: number;
  heroW: number;
  heroH: number;
  aboutX: number;
  aboutY: number;
  aboutW: number;
  aboutH: number;
  deltaX: number;
  deltaY: number;
  targetScale: number;
}

export const ScrollOrchestrator: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroSlotRef = useRef<HTMLDivElement>(null);
  const aboutSlotRef = useRef<HTMLDivElement>(null);

  const shouldReduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);
  const [layoutReady, setLayoutReady] = useState(false);
  const [coords, setCoords] = useState<Coordinates>({
    heroX: 0,
    heroY: 0,
    heroW: 500,
    heroH: 333,
    aboutX: 0,
    aboutY: 0,
    aboutW: 500,
    aboutH: 312,
    deltaX: 0,
    deltaY: 0,
    targetScale: 1,
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);

  // Tab visibility listener to save CPU/battery
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(document.visibilityState === 'visible');
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Check desktop viewport (>= 768px as defined in spec)
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // useScroll binding on shared container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Track scroll progress to toggle idle state
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest > 0.05 && !isScrolled) {
      setIsScrolled(true);
    } else if (latest <= 0.02 && isScrolled) {
      setIsScrolled(false);
    }
  });

  // Measure coordinates between Hero slot and About slot relative to containerRef
  const updateMeasurements = () => {
    if (!containerRef.current || !heroSlotRef.current || !aboutSlotRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const heroRect = heroSlotRef.current.getBoundingClientRect();
    const aboutRect = aboutSlotRef.current.getBoundingClientRect();

    const heroX = heroRect.left - containerRect.left;
    const heroY = heroRect.top - containerRect.top;
    const heroW = heroRect.width;
    const heroH = heroRect.height;

    const aboutX = aboutRect.left - containerRect.left;
    const aboutY = aboutRect.top - containerRect.top;
    const aboutW = aboutRect.width;
    const aboutH = aboutRect.height;

    const deltaX = aboutX - heroX;
    const deltaY = aboutY - heroY;
    const targetScale = heroW > 0 ? aboutW / heroW : 1;

    setCoords({
      heroX,
      heroY,
      heroW,
      heroH,
      aboutX,
      aboutY,
      aboutW,
      aboutH,
      deltaX,
      deltaY,
      targetScale,
    });

    setLayoutReady(true);
  };

  useEffect(() => {
    updateMeasurements();
    window.addEventListener('resize', updateMeasurements);

    const t1 = setTimeout(updateMeasurements, 60);
    const t2 = setTimeout(updateMeasurements, 300);
    const t3 = setTimeout(updateMeasurements, 800);

    return () => {
      window.removeEventListener('resize', updateMeasurements);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isDesktop]);

  // Motion transforms: continuous movement from Hero slot to About slot
  const morphX = useTransform(scrollYProgress, (v) => v * coords.deltaX);
  const morphY = useTransform(scrollYProgress, (v) => v * coords.deltaY);
  const morphScale = useTransform(scrollYProgress, (v) => 1 + v * (coords.targetScale - 1));

  // Rotation morphing: -4deg (Hero) smoothly towards -1.5deg (About polaroid tilt)
  const morphRotate = useTransform(scrollYProgress, (v) => {
    if (v <= 0.2) return -4 + (v / 0.2) * 0.5; // -4deg to -3.5deg
    if (v <= 0.8) return -3.5 + ((v - 0.2) / 0.6) * 2.0; // -3.5deg to -1.5deg
    return -1.5;
  });

  // Cross-fade: Box layer fades out [0.3, 0.6]
  const boxOpacity = useTransform(scrollYProgress, [0.3, 0.6], [1, 0]);

  // Cross-fade: Card frame layer fades in [0.5, 0.8]
  const cardOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);

  // Hero ground shadow fades out quickly as box lifts off
  const heroShadowOpacity = useTransform(scrollYProgress, [0, 0.25], [0.22, 0]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* 1. Hero Section */}
      <Hero heroSlotRef={heroSlotRef} isDesktop={isDesktop} />

      {/* 2. Marquee Ticker (z-index 10 so morphing element flies above it) */}
      <Ticker />

      {/* 3. About Section */}
      <About
        aboutSlotRef={aboutSlotRef}
        isDesktop={isDesktop}
        scrollYProgress={scrollYProgress}
      />

      {/* ============================================================ */}
      {/* CONTINUOUS SCROLL MORPHING ELEMENT (Desktop Only: z-index 25) */}
      {/* ============================================================ */}
      {isDesktop && !shouldReduceMotion && layoutReady && (
        <motion.div
          style={{
            x: morphX,
            y: morphY,
            scale: morphScale,
            rotate: morphRotate,
            left: coords.heroX,
            top: coords.heroY,
            width: coords.heroW,
            height: coords.heroH,
          }}
          className="absolute z-25 pointer-events-none origin-center will-change-transform"
        >
          {/* Inner animation container: Initial Unboxing + Idle Floating Loop */}
          <motion.div
            initial={{ opacity: 0, y: -60, scale: 0.92 }}
            animate={
              isScrolled
                ? { opacity: 1, y: 0, scale: 1 }
                : isTabVisible
                ? {
                    opacity: 1,
                    y: [0, -10, 0],
                    scale: 1,
                  }
                : { opacity: 1, y: 0, scale: 1 }
            }
            transition={
              isScrolled
                ? { duration: 0.3, ease: 'easeOut' }
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
                  }
            }
            className="relative w-full h-full flex flex-col items-center justify-center will-change-transform"
          >
            {/* -------------------------------------------------------- */}
            {/* LAYER 1: LilzBake Packaging Box (Opacity 1 -> 0 at [0.3, 0.6]) */}
            {/* -------------------------------------------------------- */}
            <motion.div
              style={{ opacity: boxOpacity }}
              className="absolute inset-0 flex flex-col items-center justify-center filter drop-shadow-[0_16px_32px_rgba(161,108,55,0.22)]"
            >
              <Image
                src={HERO_CONTENT.boxImage}
                alt={HERO_CONTENT.boxAlt}
                width={1181}
                height={981}
                priority
                className="w-full h-full object-contain select-none pointer-events-none"
                sizes="(max-width: 1024px) 55vw, 680px"
              />

              {/* Dynamic ground shadow under box when at Hero */}
              {!isScrolled && (
                <motion.div
                  style={{ opacity: heroShadowOpacity }}
                  animate={
                    isTabVisible
                      ? {
                          scale: [1, 0.9, 1],
                        }
                      : { scale: 1 }
                  }
                  transition={{
                    scale: { duration: 4, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: 1.0 },
                  }}
                  className="w-[85%] h-6 bg-[#5c3a1e] rounded-[100%] filter blur-md -mt-5 select-none pointer-events-none"
                />
              )}
            </motion.div>

            {/* -------------------------------------------------------- */}
            {/* LAYER 2: Polaroid Bread Card Frame (Opacity 0 -> 1 at [0.5, 0.8]) */}
            {/* -------------------------------------------------------- */}
            <motion.div
              style={{ opacity: cardOpacity }}
              className="absolute inset-0 rounded-[24px] p-3 bg-surface border-[8px] border-surface shadow-polaroid overflow-hidden flex flex-col justify-between"
            >
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

              {/* Polaroid bottom caption */}
              <div className="pt-2 px-1 flex justify-between items-center text-xs text-text-secondary/80 font-medium select-none">
                <span>LilzBake Surabaya</span>
                <span className="font-display italic">#TasteOfNostalgia</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};
