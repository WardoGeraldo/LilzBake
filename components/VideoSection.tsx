'use client';

import React from 'react';
import { VIDEOS } from '@/lib/content';
import { VideoCard } from './VideoCard';
import { ScrollReveal } from './ScrollReveal';
import { BreadDoodle } from './decorative/BreadDoodle';

export const VideoSection: React.FC = () => {
  return (
    <section
      id="proses"
      className="relative py-20 lg:py-32 bg-bg-alt/40 overflow-hidden scroll-mt-16"
    >
      {/* Background doodles */}
      <div className="absolute left-6 bottom-10 opacity-5 pointer-events-none">
        <BreadDoodle type="wheat" size={300} strokeWidth={1} strokeColor="#a16c37" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <ScrollReveal>
            <h2 className="font-display font-semibold text-text-primary text-3xl sm:text-4xl lg:text-[44px] leading-tight mb-3.5 text-balance">
              Lihat Prosesnya
            </h2>
            <p className="text-text-body text-base sm:text-lg leading-relaxed">
              Dari oven sampai ke tanganmu — begini LilzBake dibuat.
            </p>
          </ScrollReveal>
        </div>

        {/* 2 Portrait Videos Grid: 2 side by side on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-3xl mx-auto items-center">
          {VIDEOS.map((video, idx) => (
            <ScrollReveal key={video.id} delay={idx * 0.1}>
              <VideoCard
                id={video.id}
                title={video.title}
                src={video.src}
                poster={video.poster}
                alt={video.alt}
              />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
