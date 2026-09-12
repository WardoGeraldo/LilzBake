'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { TICKER_ITEMS } from '@/lib/content';

export const Ticker: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Create duplicate set of items for seamless infinite loop
  const tickerContent = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      className="relative w-full h-12 sm:h-14 bg-text-dark text-bg-main overflow-hidden flex items-center select-none z-20 border-y border-text-dark"
      aria-label="Informasi utama LilzBake"
    >
      {/* Decorative gradient masks at left and right edges for smooth fading */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-text-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-text-dark to-transparent z-10 pointer-events-none" />

      {shouldReduceMotion ? (
        <div className="flex items-center gap-8 px-6 overflow-x-auto whitespace-nowrap">
          {TICKER_ITEMS.map((item, idx) => (
            <span
              key={idx}
              className="font-display italic text-sm sm:text-base tracking-wide inline-flex items-center gap-4"
            >
              <span>{item}</span>
              <span className="text-accent-gold opacity-60">•</span>
            </span>
          ))}
        </div>
      ) : (
        <motion.div
          className="flex items-center gap-8 whitespace-nowrap will-change-transform"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {tickerContent.map((item, idx) => (
            <span
              key={idx}
              className="font-display italic text-sm sm:text-base tracking-wide inline-flex items-center gap-4 text-bg-main/95"
            >
              <span>{item}</span>
              <span className="text-accent-gold text-xs opacity-70">✦</span>
            </span>
          ))}
        </motion.div>
      )}
    </div>
  );
};
