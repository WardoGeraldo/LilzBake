'use client';

import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  location,
}) => {
  return (
    <div className="relative flex flex-col justify-between bg-surface rounded-[24px] p-7 sm:p-8 shadow-brand border border-accent-gold/15 transition-all duration-300 hover:shadow-brand-lg hover:-translate-y-1">
      {/* Decorative large Fraunces quotation mark (not generic icon library) */}
      <span
        className="font-display italic text-6xl sm:text-7xl leading-none text-accent-gold/30 select-none absolute top-4 left-6 pointer-events-none"
        aria-hidden="true"
      >
        “
      </span>

      {/* Quote Text */}
      <div className="relative z-10 pt-4 mb-6">
        <p className="text-text-dark text-base sm:text-lg leading-[1.68] font-normal italic text-balance">
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      {/* Author Attribution */}
      <div className="relative z-10 pt-4 border-t border-bg-alt flex items-center justify-between">
        <div>
          <p className="font-display font-semibold text-text-primary text-base sm:text-[17px]">
            {author}
          </p>
          <p className="text-xs sm:text-sm text-text-body/80">
            {location}
          </p>
        </div>
        <div className="w-8 h-8 rounded-full bg-bg-alt/70 flex items-center justify-center text-text-primary text-xs font-semibold">
          ★
        </div>
      </div>
    </div>
  );
};
