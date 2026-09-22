import React from 'react';
import Link from 'next/link';
import { BRAND, NAVBAR_LINKS } from '@/lib/content';
import { WA_LINKS } from '@/lib/whatsapp';
import { BreadDoodle } from './decorative/BreadDoodle';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-text-dark text-bg-main pt-16 pb-12 overflow-hidden border-t border-text-dark">
      {/* Subtle watermark in dark footer */}
      <div className="absolute right-10 bottom-6 opacity-5 pointer-events-none">
        <BreadDoodle type="roti-sisir" size={240} strokeWidth={1} strokeColor="#fde5db" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top brand row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-12 border-b border-bg-main/15">
          <div>
            <span className="font-display font-semibold text-3xl sm:text-4xl tracking-[0.2em] text-bg-main uppercase block mb-1">
              {BRAND.name}
            </span>
            <span className="font-display italic text-accent-gold text-lg sm:text-xl block">
              {BRAND.tagline}
            </span>
          </div>
          <p className="text-sm sm:text-base text-bg-main/80 max-w-md">
            Roti &amp; Cake Jadoel Premium based in Surabaya.
          </p>
        </div>

        {/* Navigation, Social, Contact Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-b border-bg-main/10 text-sm">
          
          {/* Navigation links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-accent-gold font-semibold mb-4">
              Navigasi
            </h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2.5">
              {NAVBAR_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-bg-main/85 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-accent-gold font-semibold mb-4">
              Sosial
            </h4>
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-bg-main/85 hover:text-white transition-colors"
            >
              <span>Instagram</span>
              <span className="text-accent-gold font-medium">{BRAND.instagramHandle}</span>
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-accent-gold font-semibold mb-4">
              Kontak
            </h4>
            <div className="space-y-1.5 text-bg-main/85">
              <p>
                <a href={`mailto:${BRAND.email}`} className="hover:text-white transition-colors">
                  {BRAND.email}
                </a>
              </p>
              <p className="text-xs text-bg-main/70">
                <a href={WA_LINKS.admin1General} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {BRAND.phoneAdmin1}
                </a>{' '}
                /{' '}
                <a href={WA_LINKS.admin2General} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {BRAND.phoneAdmin2}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-bg-main/60">
          <p>© 2019–Present LilzBake. Semua rasa, semua kangen, dari Surabaya.</p>
          <p className="font-display italic text-accent-gold/80">#TasteOfNostalgia</p>
        </div>

      </div>
    </footer>
  );
};
