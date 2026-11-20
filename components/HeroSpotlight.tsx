'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Zap, Star, ShieldCheck, Truck, Sparkles, Eye, Check } from 'lucide-react';
import { Product } from '../data/products';

interface HeroSpotlightProps {
  spotlightProduct: Product;
  onQuickView: (product: Product) => void;
}

export default function HeroSpotlight({ spotlightProduct, onQuickView }: HeroSpotlightProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = [
    spotlightProduct.imageUrl,
    spotlightProduct.secondaryImageUrl || spotlightProduct.imageUrl,
  ];

  const discountPercent = Math.round(
    ((spotlightProduct.compareAtPrice - spotlightProduct.price) / spotlightProduct.compareAtPrice) * 100
  );

  return (
    <section className="relative border-b border-white/10 bg-gradient-to-b from-[#0b0e14] via-[#090b10] to-[#07080b] py-12 lg:py-20 overflow-hidden">
      {/* Background Architectural Ambient Glow */}
      <div className="absolute top-1/4 right-10 -z-10 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left: Editorial Narrative & Purchase Action */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Curatorial Header Tag */}
            <div className="flex items-center gap-3 mb-5">
              <span className="rounded-full bg-amber-400 text-slate-950 px-3 py-0.5 text-[11px] font-mono font-black uppercase tracking-wider">
                Featured Drop 01
              </span>
              <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Verified Amazon Prime Available
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] mb-4">
              Anti-Gravity Levitating <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">
                Optical Water Luminaire.
              </span>
            </h1>

            {/* Subtitle / Narrative */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-xl mb-6">
              Harnesses stroboscopic optical frequency paired with ultrasonic cool-mist atomization. Water droplets appear to physically freeze and rise upward in mid-air, creating a hypnotic centerpiece for modern workspaces and quiet nocturnal rooms.
            </p>

            {/* Specifications Matrix */}
            <div className="grid grid-cols-2 gap-3 max-w-lg mb-8">
              {spotlightProduct.specs.map((spec, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-xs text-slate-200 backdrop-blur-sm"
                >
                  <Check className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span className="font-medium text-[11px] sm:text-xs">{spec}</span>
                </div>
              ))}
            </div>

            {/* Pricing Bar & Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-white/10 max-w-xl">
              <div>
                <div className="flex items-baseline gap-2.5">
                  <span className="text-3xl font-black text-white">
                    ${spotlightProduct.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-slate-500 line-through font-mono">
                    ${spotlightProduct.compareAtPrice.toFixed(2)}
                  </span>
                  <span className="rounded bg-emerald-400/15 px-2 py-0.5 text-xs font-mono font-bold text-emerald-400 border border-emerald-400/25">
                    Save {discountPercent}%
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                  <div className="flex text-amber-400">
                    {'★★★★★'.split('').map((s, i) => (
                      <span key={i} className="text-xs">★</span>
                    ))}
                  </div>
                  <span className="font-bold text-white">4.9 / 5.0</span>
                  <span className="text-slate-500 font-mono">(1,420 Verified Reviews)</span>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="flex flex-1 items-center gap-2.5 sm:ml-auto">
                <a
                  href={spotlightProduct.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 py-3.5 px-5 text-xs font-black text-slate-950 shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>Order on Amazon</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>

                <button
                  onClick={() => onQuickView(spotlightProduct)}
                  className="rounded-xl border border-white/15 bg-white/5 p-3 text-slate-200 hover:text-white hover:bg-white/10 hover:border-white/30 transition shadow-md"
                  title="Inspect Full Specs"
                >
                  <Eye className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Trust Assurances */}
            <div className="flex flex-wrap items-center gap-5 text-[11px] font-mono text-slate-400 mt-6 pt-4 border-t border-white/5">
              <span className="flex items-center gap-1.5">
                <Truck className="h-3.5 w-3.5 text-emerald-400" /> Free Prime 2-Day Shipping
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> 30-Day Money-Back Guarantee
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-amber-400" /> Genuine Optical Glass
              </span>
            </div>
          </div>

          {/* Right: High-Resolution Product Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square w-full rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-3 shadow-2xl overflow-hidden group">
              <div className="relative h-full w-full rounded-2xl overflow-hidden bg-slate-900">
                <Image
                  src={images[activeImageIndex]}
                  alt={spotlightProduct.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Floating Optical Badge */}
                <div className="absolute top-4 left-4 rounded-xl bg-black/80 backdrop-blur-md px-3 py-1.5 border border-white/15 text-left">
                  <p className="text-[9px] font-mono uppercase tracking-widest text-slate-400">Optical Resonance</p>
                  <p className="text-xs font-bold text-white">400Hz Strobe Frequency</p>
                </div>

                <div className="absolute bottom-4 left-4 rounded-xl bg-black/80 backdrop-blur-md px-3 py-1.5 border border-white/15 text-left">
                  <p className="text-[9px] font-mono uppercase tracking-widest text-slate-400">Dimensions</p>
                  <p className="text-xs font-mono font-bold text-amber-400">{spotlightProduct.dimensions}</p>
                </div>
              </div>
            </div>

            {/* Thumbnail Switcher */}
            <div className="flex items-center justify-center gap-3 mt-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative h-14 w-14 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImageIndex === idx
                      ? 'border-amber-400 scale-105 shadow-lg shadow-amber-400/20'
                      : 'border-white/10 opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image src={img} alt="Thumbnail view" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
