'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from '@/lib/content';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <article className="group relative flex flex-col h-full bg-surface rounded-[20px] p-3.5 sm:p-4 shadow-brand transition-all duration-300 hover:-translate-y-1.5 hover:shadow-brand-lg border border-accent-gold/15">
      {/* Product Image 4:5 ratio with overflow hidden and zoom hover */}
      <div className="relative aspect-[4/5] w-full rounded-[14px] overflow-hidden bg-bg-alt/40 mb-3.5">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(max-width: 640px) 75vw, (max-width: 1024px) 45vw, 280px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* Subtle warm gradient vignette at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-text-dark/15 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <h3 className="font-display font-semibold text-text-primary text-xl sm:text-[22px] leading-snug mb-2 group-hover:text-text-dark transition-colors">
          {product.name}
        </h3>
        <p className="text-text-body text-[14px] sm:text-[15px] leading-relaxed text-balance flex-grow">
          {product.description}
        </p>
      </div>

      {/* Subtle bottom border highlight */}
      <div className="mt-3 pt-2.5 border-t border-bg-alt flex items-center justify-between text-xs text-text-secondary font-medium">
        <span>Resep Jadul</span>
        <span className="font-display italic text-accent-gold group-hover:translate-x-0.5 transition-transform">
          Fresh Daily →
        </span>
      </div>
    </article>
  );
};
