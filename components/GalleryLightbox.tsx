'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  image: {
    src: string;
    alt: string;
  } | null;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  isOpen,
  onClose,
  image,
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink/80 backdrop-blur-md"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            type="button"
            className="absolute top-5 right-5 p-2 rounded-full bg-surface/90 text-text-dark hover:bg-surface hover:scale-105 transition-all shadow-brand focus:outline-none z-10"
            aria-label="Tutup pratinjau foto"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal Content container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center bg-surface p-3 sm:p-4 rounded-[24px] shadow-2xl border border-accent-gold/20 overflow-hidden"
          >
            <div className="relative w-full h-[65vh] max-h-[650px] rounded-[16px] overflow-hidden bg-bg-alt">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 95vw, 900px"
                className="object-contain"
                priority
              />
            </div>
            <div className="w-full pt-3 pb-1 px-3 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-text-dark font-medium">
              <p className="line-clamp-2">{image.alt}</p>
              <span className="font-display italic text-accent-gold shrink-0">
                LilzBake Surabaya
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
