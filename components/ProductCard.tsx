'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, Star, Bookmark, Eye, Zap, Check } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onQuickView: (product: Product) => void;
}

export default function ProductCard({
  product,
  isSaved,
  onToggleSave,
  onQuickView,
}: ProductCardProps) {
  const discountPercent = Math.round(
    ((product.compareAtPrice - product.price) / product.compareAtPrice) * 100
  );

  return (
    <article className="product-card group relative flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-[#0d1017] p-4 overflow-hidden">
      {/* Top Media Header */}
      <div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-900 border border-slate-800/60 mb-4">
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />

          {/* Floating Badges */}
          <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 items-start">
            {product.badge && (
              <span className="rounded-md bg-amber-400 text-slate-950 font-black text-[10px] px-2 py-0.5 shadow-md uppercase tracking-wider">
                {product.badge}
              </span>
            )}
            <span className="rounded-md bg-black/75 backdrop-blur-md text-emerald-400 font-bold text-[10px] px-2 py-0.5 border border-emerald-500/30 flex items-center gap-1">
              <Zap className="h-2.5 w-2.5 fill-emerald-400" /> {product.viralScore}% Viral Index
            </span>
          </div>

          {/* Floating Bookmark & Quick View Buttons */}
          <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5">
            <button
              onClick={() => onQuickView(product)}
              className="p-1.5 rounded-lg bg-black/70 backdrop-blur-md text-slate-300 hover:text-white hover:bg-black/90 transition shadow-md"
              title="Quick Specifications"
            >
              <Eye className="h-4 w-4" />
            </button>
            <button
              onClick={() => onToggleSave(product.id)}
              className={`p-1.5 rounded-lg backdrop-blur-md transition shadow-md ${
                isSaved
                  ? 'bg-amber-400 text-slate-950'
                  : 'bg-black/70 text-slate-300 hover:text-white hover:bg-black/90'
              }`}
              title={isSaved ? 'Remove from Saved' : 'Save Object'}
            >
              <Bookmark className={`h-4 w-4 ${isSaved ? 'fill-slate-950' : ''}`} />
            </button>
          </div>
        </div>

        {/* Category & Rating Row */}
        <div className="flex items-center justify-between text-xs mb-1.5">
          <span className="text-[11px] font-semibold text-amber-400/90 tracking-wide uppercase">
            {product.category}
          </span>
          <div className="flex items-center gap-1 text-slate-400 text-[11px] font-medium">
            <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
            <span className="text-white font-bold">{product.rating}</span>
            <span className="text-slate-500">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Title */}
        <h3
          onClick={() => onQuickView(product)}
          className="text-base font-bold text-white leading-snug group-hover:text-amber-300 transition-colors cursor-pointer"
        >
          {product.title}
        </h3>

        {/* Editorial Tagline */}
        <p className="mt-1.5 text-xs text-slate-300 leading-relaxed line-clamp-2">
          {product.tagline}
        </p>

        {/* Key Materials Chips */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.specs.slice(0, 2).map((spec, i) => (
            <span
              key={i}
              className="rounded-md bg-slate-800/80 px-2 py-0.5 text-[10px] font-medium text-slate-300 border border-slate-700/60"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>

      {/* Pricing & Amazon Action Row */}
      <div className="pt-4 mt-4 border-t border-slate-800/80">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-black text-white">${product.price.toFixed(2)}</span>
            <span className="text-xs text-slate-500 line-through">
              ${product.compareAtPrice.toFixed(2)}
            </span>
          </div>
          <span className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-black text-emerald-400 border border-emerald-500/20">
            Save {discountPercent}%
          </span>
        </div>

        {/* Direct Action Button */}
        <a
          href={product.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 bg-size-200 py-2.5 text-xs font-black text-slate-950 shadow-lg shadow-amber-500/15 hover:shadow-amber-500/30 hover:scale-[1.01] active:scale-[0.98] transition-all duration-200"
        >
          <span>Check Availability on Amazon</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}
