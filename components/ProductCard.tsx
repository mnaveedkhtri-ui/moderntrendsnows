'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, Star, Bookmark, Eye, ArrowRight } from 'lucide-react';
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
    <div className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-[#0c0e15] p-2.5 sm:p-4 text-left transition-all duration-300 hover:border-amber-400/40 hover:bg-[#0f121c] hover:shadow-xl hover:shadow-black/60">
      <div>
        {/* Product Image Container */}
        <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-slate-900 border border-white/5 mb-3">
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
          />

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-2 left-2 rounded bg-amber-400 text-slate-950 font-black text-[9px] sm:text-[10px] px-1.5 py-0.5 shadow-md uppercase tracking-wider">
              {product.badge}
            </span>
          )}

          {/* Bookmark & Quick View Hover Controls */}
          <div className="absolute top-2 right-2 flex items-center gap-1 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={() => onQuickView(product)}
              className="p-1.5 rounded-lg bg-black/70 backdrop-blur-md text-slate-300 hover:text-white hover:bg-black/90 transition active:scale-90"
              title="Quick view"
            >
              <Eye className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => onToggleSave(product.id)}
              className={`p-1.5 rounded-lg backdrop-blur-md transition active:scale-90 ${
                isSaved
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'bg-black/70 text-slate-300 hover:text-white hover:bg-black/90'
              }`}
              title="Save item"
            >
              <Bookmark className={`h-3.5 w-3.5 ${isSaved ? 'fill-slate-950' : ''}`} />
            </button>
          </div>
        </div>

        {/* Category & Rating */}
        <div className="flex items-center justify-between text-[10px] sm:text-[11px] mb-1">
          <span className="font-mono text-slate-400 uppercase tracking-wider truncate">
            {product.category}
          </span>
          <div className="flex items-center gap-1 text-slate-300 shrink-0">
            <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
            <span className="font-bold">{product.rating}</span>
          </div>
        </div>

        {/* Product Title */}
        <h3
          onClick={() => onQuickView(product)}
          className="text-xs sm:text-sm font-bold text-white line-clamp-2 leading-snug group-hover:text-amber-300 transition cursor-pointer"
        >
          {product.title}
        </h3>

        {/* Pricing */}
        <div className="flex items-baseline gap-1.5 mt-2">
          <span className="text-sm sm:text-base font-black text-white">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-[10px] sm:text-xs text-slate-500 line-through">
            ${product.compareAtPrice.toFixed(2)}
          </span>
          <span className="text-[9px] sm:text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-1 rounded ml-auto">
            Save {discountPercent}%
          </span>
        </div>
      </div>

      {/* Buy Button */}
      <div className="mt-3 pt-3 border-t border-white/5">
        <a
          href={product.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn w-full flex items-center justify-center gap-1.5 rounded-lg bg-white/10 hover:bg-amber-400 hover:text-slate-950 py-2 sm:py-2.5 text-xs font-bold text-white transition-all duration-200 active:scale-95 shadow-sm"
        >
          <span>View on Amazon</span>
          <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}
