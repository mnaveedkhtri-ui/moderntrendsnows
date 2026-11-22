'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ShieldCheck, ExternalLink, Star, Sparkles } from 'lucide-react';
import { Product } from '../data/products';

interface HeroBannerProps {
  onShopClick: () => void;
  onQuickView?: (product: Product) => void;
}

const HERO_HIGHLIGHTS = [
  {
    id: 'magsafe-charging-stand',
    title: '3-in-1 Floating Aluminum Magnetic Charging Stand',
    category: 'Workspace Tech',
    price: 39.95,
    compareAtPrice: 59.99,
    rating: 4.9,
    reviewsCount: 890,
    tagline: 'Precision-milled CNC aluminum dock for iPhone StandBy, Apple Watch & AirPods.',
    imageUrl: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1200&q=85',
    amazonUrl: 'https://www.amazon.com/s?k=3+in+1+magsafe+charging+station&tag=moderntren08b-20',
    tags: ['CNC 6063 Aluminum', '15W Fast Qi Coils', 'Weighted Anti-Slip Base'],
    reviewer: 'Marcus V. : Austin, TX',
    reviewQuote: 'The weighted CNC aluminum base stays completely grounded when grabbing your iPhone. Zero wobble, zero heat throttle during overnight StandBy charging.',
  },
  {
    id: 'screenbar-monitor-light',
    title: 'Curved ScreenBar Asymmetric Monitor Desk Light',
    category: 'Ambient Optics',
    price: 42.00,
    compareAtPrice: 65.00,
    rating: 4.8,
    reviewsCount: 3020,
    tagline: 'Zero-glare asymmetric optical beam with stepless touch color temperature control.',
    imageUrl: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=1200&q=85',
    amazonUrl: 'https://www.amazon.com/s?k=monitor+screenbar+light&tag=moderntren08b-20',
    tags: ['Anti-Reflective Optics', 'Stepless Color Temp', 'USB-C Powered'],
    reviewer: 'David K. : Denver, CO',
    reviewQuote: 'Working 10-hour coding shifts was giving me severe eye fatigue. This casts light only on my keyboard and documents without reflecting off the monitor.',
  },
  {
    id: 'flame-aroma-diffuser',
    title: 'Fireplace Flame Mist Ultrasonic Aroma Diffuser',
    category: 'Living Atmosphere',
    price: 32.50,
    compareAtPrice: 49.99,
    rating: 4.8,
    reviewsCount: 2150,
    tagline: 'Realistic flickering fireplace flame vapor simulation with soothing essential oils.',
    imageUrl: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=85',
    amazonUrl: 'https://www.amazon.com/s?k=flame+air+diffuser+humidifier&tag=moderntren08b-20',
    tags: ['Dual Amber/Blue Flame', 'Ultra-Quiet 20dB', '8-Hour Auto-Off'],
    reviewer: 'Sarah L. : Seattle, WA',
    reviewQuote: 'The flame illusion is shockingly convincing in a dim room. Ultrasonic cool mist keeps the air comfortable without any burning hazard.',
  },
];

export default function HeroBanner({ onShopClick }: HeroBannerProps) {
  const [selectedHeroIndex, setSelectedHeroIndex] = useState(0);
  const currentHero = HERO_HIGHLIGHTS[selectedHeroIndex];

  const discountPercent = Math.round(
    ((currentHero.compareAtPrice - currentHero.price) / currentHero.compareAtPrice) * 100
  );

  return (
    <section className="relative border-b border-white/10 bg-[#05070d] overflow-hidden">
      {/* Background Architectural Blueprint Grid & Subtle Ambient Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 -z-10 h-80 w-80 rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 -z-10 h-72 w-72 rounded-full bg-blue-500/08 blur-[100px] pointer-events-none" />

      {/* Hero Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-10 sm:pt-10 sm:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Social Proof, Story (7 Cols) */}
          <div className="lg:col-span-7 text-left space-y-5">
            
            {/* Top Live Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1 text-xs font-semibold text-amber-300 w-fit shadow-lg shadow-amber-500/05">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="font-mono uppercase tracking-wider text-[11px]">Vol. 2026 : Curated Desk Archive</span>
              <span className="text-amber-400/50 hidden sm:inline">•</span>
              <span className="text-amber-200/80 text-[11px] font-mono hidden sm:inline">38 Verified Objects</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black text-white tracking-tight leading-[1.12]">
              Tactile Desk Architecture & <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 bg-clip-text text-transparent">Minimalist Spatial Objects.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-light">
              An independent archive of viral desk aesthetics, acoustic lighting, and ergonomic precision. We reject cheap generic plastic to curate objects celebrated for genuine build integrity, tactile feel, and direct <strong>2-Day Amazon Prime</strong> fulfillment.
            </p>

            {/* Product Switcher Tabs */}
            <div className="pt-2">
              <div className="text-[11px] font-mono uppercase text-slate-400 font-bold tracking-wider mb-2.5 flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                <span>Featured Showcase Selections:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {HERO_HIGHLIGHTS.map((item, idx) => {
                  const isActive = idx === selectedHeroIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedHeroIndex(idx)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-2 border ${
                        isActive
                          ? 'bg-amber-400 text-slate-950 font-bold border-amber-400 shadow-md shadow-amber-500/20'
                          : 'bg-white/5 text-slate-300 border-white/10 hover:border-white/25 hover:bg-white/10'
                      }`}
                    >
                      <span>0{idx + 1}.</span>
                      <span className="truncate max-w-[130px] sm:max-w-none">{item.title.split(' ')[0]} {item.title.split(' ')[1]}</span>
                      <span className={`text-[10px] ${isActive ? 'text-slate-900 font-extrabold' : 'text-amber-400 font-bold'}`}>
                        ${item.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTA Row */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onShopClick}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-xl shadow-amber-500/20 hover:from-amber-300 hover:to-amber-400 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
              >
                <span>EXPLORE ALL 22 PRODUCTS</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href={currentHero.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-mono text-slate-200 transition-all flex items-center gap-2"
              >
                <span>Buy Featured on Amazon</span>
                <ExternalLink className="h-3.5 w-3.5 text-amber-400" />
              </a>
            </div>

            {/* Trust Features Row */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>Prime 2-Day Delivery</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                <span>30-Day Hassle-Free Returns</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400 shrink-0" />
                <span>4.8+ Verified Ratings</span>
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Featured Product Hero Card (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-2xl border border-white/15 bg-gradient-to-b from-[#111522] to-[#0a0d16] p-5 sm:p-6 shadow-2xl relative overflow-hidden group">
              
              {/* Subtle Amber Specular Highlight */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

              {/* Card Header */}
              <div className="flex items-center justify-between text-xs font-mono mb-3">
                <span className="text-amber-400 font-bold uppercase tracking-wider">
                  {currentHero.category}
                </span>
                <div className="flex items-center gap-1 text-slate-300 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                  <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                  <span className="font-bold text-white">{currentHero.rating}</span>
                  <span className="text-slate-400">({currentHero.reviewsCount.toLocaleString()})</span>
                </div>
              </div>

              {/* Product Image Container */}
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-900 border border-white/10 mb-4 shadow-inner">
                <Image
                  src={currentHero.imageUrl}
                  alt={currentHero.title}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Floating Discount Tag */}
                <div className="absolute top-3 left-3 rounded-lg bg-amber-400 text-slate-950 px-2.5 py-1 font-black text-xs shadow-lg uppercase tracking-wider">
                  Save {discountPercent}%
                </div>

                {/* Prime Badge */}
                <div className="absolute bottom-3 right-3 rounded-lg bg-black/80 backdrop-blur-md text-white border border-white/10 px-2.5 py-1 font-mono text-[10px] font-bold flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Amazon Prime</span>
                </div>
              </div>

              {/* Product Title & Tagline */}
              <h3 className="text-lg font-bold text-white font-display mb-1.5 leading-snug">
                {currentHero.title}
              </h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                {currentHero.tagline}
              </p>

              {/* Tags Row */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {currentHero.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Price & Direct Buy Button */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Prime Price</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-white">${currentHero.price.toFixed(2)}</span>
                    <span className="text-xs text-slate-500 line-through">${currentHero.compareAtPrice.toFixed(2)}</span>
                  </div>
                </div>

                <a
                  href={currentHero.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs font-mono flex items-center gap-1.5 shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
                >
                  <span>Check on Amazon</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* Reviewer Micro Quote */}
              <div className="mt-4 p-3 rounded-xl bg-black/40 border border-white/5 text-[11px] text-slate-400 leading-relaxed font-mono">
                <span className="text-amber-400 font-bold block mb-0.5">{currentHero.reviewer}</span>
                <span>"{currentHero.reviewQuote}"</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
