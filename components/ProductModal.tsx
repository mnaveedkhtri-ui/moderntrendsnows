'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, ExternalLink, Star, CheckCircle, Truck, ShieldCheck, Bookmark, Share2, Check } from 'lucide-react';
import { Product } from '../data/products';
import { sound } from '../lib/sound';

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
  const [copied, setCopied] = useState(false);
  const [modalImg, setModalImg] = useState(product?.imageUrl || '');

  React.useEffect(() => {
    if (product?.imageUrl) setModalImg(product.imageUrl);
  }, [product?.imageUrl]);

  if (!product) return null;

  const discountPercent = Math.round(
    ((product.compareAtPrice - product.price) / product.compareAtPrice) * 100
  );

  const handleShare = () => {
    sound.playPop();
    const url = typeof window !== 'undefined' ? `${window.location.origin}/#catalog` : '';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${product.title} - ${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-150">
      <div className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-[#0d0f16] p-4 sm:p-6 shadow-2xl text-left my-6">
        
        {/* Action Controls: Share, Bookmark & Close */}
        <div className="absolute right-3.5 top-3.5 flex items-center gap-1.5 z-20">
          <button
            onClick={handleShare}
            className="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition"
            title="Share object"
            aria-label="Share product"
          >
            {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Share2 className="h-4 w-4" />}
          </button>

          <button
            onClick={() => {
              sound.playPop();
              onToggleSave(product.id);
            }}
            className={`p-1.5 rounded-lg transition ${
              isSaved
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
            }`}
            title={isSaved ? 'Saved in wishlist' : 'Save to wishlist'}
            aria-label="Save product"
          >
            <Bookmark className={`h-4 w-4 ${isSaved ? 'fill-slate-950' : ''}`} />
          </button>

          <button
            onClick={() => {
              sound.playTick();
              onClose();
            }}
            className="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start mt-2">
          {/* Image */}
          <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-900 border border-white/5">
            <Image
              src={modalImg}
              alt={product.title}
              fill
              className="object-cover"
              onError={() => {
                setModalImg('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80');
              }}
            />
            {product.badge && (
              <span className="absolute top-2.5 left-2.5 rounded bg-amber-400 text-slate-950 font-black text-[10px] px-2 py-0.5 uppercase">
                {product.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block mb-1">
                {product.category}
              </span>

              <h2 className="text-base sm:text-lg font-bold text-white leading-tight mb-2">
                {product.title}
              </h2>

              <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-3">
                <div className="flex text-amber-400">
                  <Star className="h-3.5 w-3.5 fill-amber-400" />
                </div>
                <span className="font-bold">{product.rating}</span>
                <span className="text-slate-500 text-[11px]">({product.reviewsCount} verified reviews)</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {product.description}
              </p>

              {/* Specs */}
              <div className="space-y-1.5 mb-4">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] text-slate-300">
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price & Purchase Action */}
            <div className="pt-3 border-t border-white/10">
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-xl font-black text-white">${product.price.toFixed(2)}</span>
                <span className="text-xs text-slate-500 line-through">${product.compareAtPrice.toFixed(2)}</span>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded ml-auto">
                  Save {discountPercent}%
                </span>
              </div>

              <a
                href={product.amazonUrl}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                onClick={() => sound.playChime()}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-amber-400 hover:bg-amber-300 py-3 text-xs font-black text-slate-950 transition shadow-lg active:scale-95"
              >
                <span>Check Live Price on Amazon</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <p className="mt-2 text-[10px] text-slate-500 text-center font-mono">
                Reference price only. Verify real-time pricing and Prime eligibility on Amazon.
              </p>

              <div className="flex items-center justify-center gap-4 text-[10px] text-slate-400 mt-2.5">
                <span className="flex items-center gap-1">
                  <Truck className="h-3 w-3 text-emerald-400" /> Prime 2-Day Delivery
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3 text-emerald-400" /> 30-Day Free Returns
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
