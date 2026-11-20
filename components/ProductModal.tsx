'use client';

import React from 'react';
import Image from 'next/image';
import { X, ExternalLink, Star, CheckCircle2, Zap, Bookmark, ShieldCheck, Truck } from 'lucide-react';
import { Product } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
}

export default function ProductModal({
  product,
  onClose,
  isSaved,
  onToggleSave,
}: ProductModalProps) {
  if (!product) return null;

  const discountPercent = Math.round(
    ((product.compareAtPrice - product.price) / product.compareAtPrice) * 100
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-2xl border border-slate-800 bg-[#0e111a] p-6 shadow-2xl text-left my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1.5 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
            <Image
              src={product.imageUrl}
              alt={product.title}
              fill
              className="object-cover object-center"
            />
            {product.badge && (
              <span className="absolute top-3 left-3 rounded-md bg-amber-400 text-slate-950 font-black text-xs px-2.5 py-1 shadow-lg uppercase tracking-wider">
                {product.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  {product.category}
                </span>
                <div className="flex items-center gap-1 text-slate-300 text-xs">
                  <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                  <span className="font-bold text-white">{product.rating}</span>
                  <span className="text-slate-500">({product.reviewsCount})</span>
                </div>
              </div>

              <h2 className="text-xl font-black text-white leading-tight mb-2">
                {product.title}
              </h2>

              <p className="text-xs text-slate-300 mb-4 leading-relaxed font-normal">
                {product.editorialReview}
              </p>

              {/* Material & Feature Checklist */}
              <div className="mb-4">
                <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Key Specifications
                </h4>
                <ul className="space-y-1.5">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pricing & CTA */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-white">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-xs text-slate-500 line-through">
                    ${product.compareAtPrice.toFixed(2)}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 ml-1">
                    Save {discountPercent}%
                  </span>
                </div>
                <button
                  onClick={() => onToggleSave(product.id)}
                  className={`flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg border transition ${
                    isSaved
                      ? 'border-amber-400 bg-amber-400/20 text-amber-300 font-bold'
                      : 'border-slate-700 bg-slate-800/60 text-slate-300 hover:text-white'
                  }`}
                >
                  <Bookmark className={`h-3.5 w-3.5 ${isSaved ? 'fill-amber-400' : ''}`} />
                  <span>{isSaved ? 'Saved' : 'Save'}</span>
                </button>
              </div>

              <a
                href={product.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 py-3 text-xs font-black text-slate-950 shadow-xl shadow-amber-500/20 hover:from-amber-300 hover:to-amber-400 transition-all"
              >
                <span>Purchase on Amazon (Prime Delivery)</span>
                <ExternalLink className="h-4 w-4" />
              </a>

              <div className="flex items-center justify-center gap-4 text-[10px] text-slate-400 mt-2.5">
                <span className="flex items-center gap-1">
                  <Truck className="h-3 w-3 text-emerald-400" /> Fast Prime Shipping
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3 text-emerald-400" /> Secure Amazon Checkout
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
