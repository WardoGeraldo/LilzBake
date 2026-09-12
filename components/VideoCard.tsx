'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';

interface VideoCardProps {
  id: string;
  title: string;
  src: string;
  poster: string;
  alt: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  title,
  src,
  poster,
  alt,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Handle playback errors gracefully
      });
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-[340px] sm:max-w-[380px] mx-auto">
      {/* Polaroid frame: thick white border + soft warm shadow */}
      <div className="group relative w-full rounded-[26px] p-3 sm:p-4 bg-surface shadow-polaroid border border-accent-gold/20 transition-all duration-300 hover:shadow-brand-lg">
        
        {/* 9:16 aspect ratio video container */}
        <div className="relative aspect-[9/16] w-full rounded-[18px] overflow-hidden bg-bg-alt">
          
          {/* HTML5 native video with preload="none" and native controls */}
          <video
            ref={videoRef}
            src={src}
            controls={isPlaying}
            preload="none"
            playsInline
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          />

          {/* Poster & Custom Play Button (Visible before playing) */}
          {!isPlaying && (
            <div
              onClick={handlePlay}
              className="absolute inset-0 cursor-pointer z-10"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handlePlay();
                }
              }}
              aria-label={`Putar video: ${title}`}
            >
              {/* Poster Image with dim on hover */}
              <Image
                src={poster}
                alt={alt}
                fill
                sizes="(max-width: 640px) 90vw, 360px"
                className="object-cover transition-all duration-300 group-hover:brightness-90 group-hover:scale-102"
              />

              {/* Center Frosted Glass Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full backdrop-blur-md bg-surface/35 border-2 border-surface/70 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
                  <svg
                    className="w-7 h-7 sm:w-9 sm:h-9 text-surface ml-1 fill-current filter drop-shadow-md"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Gradient overlay at bottom for title visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-text-dark/40 via-transparent to-transparent pointer-events-none" />
            </div>
          )}

        </div>

        {/* Polaroid caption strip at bottom */}
        <div className="pt-3.5 pb-1 px-2 text-center">
          <p className="font-display font-medium text-text-primary text-base sm:text-[17px]">
            {title}
          </p>
        </div>

      </div>
    </div>
  );
};
