'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { NAVBAR_LINKS } from '@/lib/content';
import { WA_LINKS } from '@/lib/whatsapp';
import { BreadDoodle } from './decorative/BreadDoodle';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface/95 backdrop-blur-md shadow-[0_4px_20px_rgba(161,108,55,0.12)] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo Wordmark */}
        <Link
          href="#"
          className="group flex items-center gap-2.5 focus:outline-none"
          aria-label="LilzBake Beranda"
        >
          <div className="flex flex-col">
            <span className="font-display font-semibold text-2xl sm:text-3xl tracking-[0.18em] text-text-primary uppercase leading-tight group-hover:text-text-dark transition-colors duration-200">
              LILZBAKE
            </span>
            <span className="text-[10px] tracking-[0.25em] text-text-secondary font-medium uppercase -mt-0.5">
              Surabaya · Est. 2019
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8" aria-label="Navigasi Utama">
          {NAVBAR_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-text-body hover:text-text-dark transition-colors duration-200 py-1 group"
            >
              {link.label}
              {/* Animated underline expanding from left to right */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-accent-gold rounded-full transition-all duration-300 ease-out group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href={WA_LINKS.admin1General}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium text-surface bg-text-primary hover:bg-text-dark transition-all duration-200 shadow-brand-sm hover:scale-[1.03] active:scale-[0.98]"
          >
            Pesan Sekarang
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-text-primary hover:bg-bg-alt/50 transition-colors focus:outline-none"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Fullscreen Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-bg-alt/98 backdrop-blur-lg z-40 flex flex-col justify-between p-6 sm:p-8 md:hidden overflow-y-auto">
          {/* Subtle line-art watermark in menu */}
          <div className="absolute top-10 right-6 opacity-10 pointer-events-none">
            <BreadDoodle type="roti-sisir" size={140} />
          </div>
          <div className="absolute bottom-20 left-4 opacity-10 pointer-events-none">
            <BreadDoodle type="croissant" size={120} />
          </div>

          <div className="space-y-6 pt-4 relative z-10">
            <div className="text-xs uppercase tracking-[0.2em] text-text-secondary font-semibold">
              Menu Navigasi
            </div>
            <nav className="flex flex-col space-y-4">
              {NAVBAR_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-2xl text-text-dark hover:text-text-primary transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-text-secondary/15 relative z-10 flex flex-col gap-4">
            <a
              href={WA_LINKS.admin1General}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full text-base font-semibold text-surface bg-text-primary hover:bg-text-dark transition-colors shadow-brand text-center"
            >
              Chat Admin via WhatsApp
            </a>
            <p className="text-center text-xs text-text-body">
              Taste Of Nostalgia · Surabaya Timur
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
