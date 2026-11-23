'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, Star, Bookmark, Eye, ShieldCheck } from 'lucide-react';
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
  const [imgSrc, setImgSrc] = React.useState(product.imageUrl);

  React.useEffect(() => {
    setImgSrc(product.imageUrl);
  }, [product.imageUrl]);

  const discountPercent = Math.round(
    ((product.compareAtPrice - product.price) / product.compareAtPrice) * 100
  );

  return (
    <div 
      id={`product-${product.id}`}
      className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0c0f18] p-3 sm:p-4 text-left transition-all duration-300 hover:border-amber-400/50 hover:bg-[#101422] hover:shadow-2xl hover:shadow-amber-500/10 scroll-mt-28"
    >
      
      <div>
        {/* Product Image Container */}
        <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-900 border border-white/5 mb-3 shadow-inner">
          <Image
            src={imgSrc}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
            onError={() => {
              setImgSrc('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80');
            }}
          />

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-2 left-2 rounded-md bg-amber-400 text-slate-950 font-black text-[9px] sm:text-[10px] px-2 py-0.5 shadow-md uppercase tracking-wider">
              {product.badge}
            </span>
          )}

          {/* Bookmark & Quick View Hover Controls */}
          <div className="absolute top-2 right-2 flex items-center gap-1.5 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={() => onQuickView(product)}
              className="p-1.5 rounded-lg bg-black/75 backdrop-blur-md text-slate-300 hover:text-white hover:bg-black/95 transition active:scale-90 shadow-md"
              title="Quick view specs"
            >
              <Eye className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => onToggleSave(product.id)}
              className={`p-1.5 rounded-lg backdrop-blur-md transition active:scale-90 shadow-md ${
                isSaved
                  ? 'bg-amber-400 text-slate-950'
                  : 'bg-black/75 text-slate-300 hover:text-white hover:bg-black/95'
              }`}
              title="Save item"
            >
              <Bookmark className={`h-3.5 w-3.5 ${isSaved ? 'fill-slate-950' : ''}`} />
            </button>
          </div>

          {/* Prime Tag overlay on bottom */}
          <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex items-center gap-1 bg-black/80 backdrop-blur-md text-[9px] font-mono text-cyan-300 px-1.5 py-0.5 rounded border border-white/10">
            <ShieldCheck className="h-3 w-3 text-cyan-400" />
            <span>Prime 2-Day</span>
          </div>
        </div>

        {/* Category & Star Rating */}
        <div className="flex items-center justify-between text-[10px] sm:text-[11px] mb-1 font-mono">
          <span className="text-slate-400 uppercase tracking-wider truncate">
            {product.category}
          </span>
          <div className="flex items-center gap-1 text-slate-200 shrink-0">
            <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
            <span className="font-bold">{product.rating}</span>
            <span className="text-slate-500 text-[10px]">({product.reviewsCount})</span>
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
          <span className="text-[9px] sm:text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded ml-auto">
            Save {discountPercent}%
          </span>
        </div>
      </div>

      {/* Action Footer: Direct Amazon CTA */}
      <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between gap-2">
        <button
          onClick={() => onQuickView(product)}
          className="text-[11px] font-mono text-slate-400 hover:text-white transition"
        >
          Details
        </button>

        <a
          href={product.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-2.5 py-1.5 rounded-lg bg-amber-400/15 hover:bg-amber-400 text-amber-300 hover:text-slate-950 text-[11px] font-mono font-bold flex items-center gap-1 transition-all active:scale-95"
        >
          <span>Amazon</span>
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>

    </div>
  );
}
