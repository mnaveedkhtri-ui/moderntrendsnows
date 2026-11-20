'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ShieldCheck, ExternalLink, Star } from 'lucide-react';
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
    amazonUrl: 'https://www.amazon.com/s?k=3+in+1+magsafe+charging+station&tag=moderntrends-20',
    tags: ['CNC 6063 Aluminum', '15W Fast Qi Coils', 'Weighted Anti-Slip Base'],
    reviewer: 'Marcus V. // Austin, TX',
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
    amazonUrl: 'https://www.amazon.com/s?k=monitor+screenbar+light&tag=moderntrends-20',
    tags: ['Anti-Reflective Optics', 'Stepless Color Temp', 'USB Powered'],
    reviewer: 'David K. // Denver, CO',
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
    amazonUrl: 'https://www.amazon.com/s?k=flame+air+diffuser+humidifier&tag=moderntrends-20',
    tags: ['Dual Amber/Blue Flame', 'Ultra-Quiet 20dB', '8-Hour Auto-Off'],
    reviewer: 'Sarah L. // Seattle, WA',
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
    <section className="relative border-b border-white/10 bg-[#07090e] overflow-hidden">
      {/* Background Architectural Blueprint Grid & Subtle Amber Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 -z-10 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      {/* Hero Container with Tight, Perfectly Symmetrical Height */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-5 pb-8 sm:pt-7 sm:pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Hero Storytelling & Social Proof */}
          <div className="lg:col-span-7 text-left flex flex-col justify-between">
            
            {/* Top Kicker */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300 mb-3 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="font-mono uppercase tracking-wider text-[11px]">Vol. 2026 // Editorial Drop</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[46px] font-black text-white tracking-tight leading-[1.12]">
              Tactile Tech & Spatial Objects for the Modern Space.
            </h1>

            {/* Humanized Subtitle */}
            <p className="mt-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              An independent archive of viral desk architecture, ambient lighting, and everyday utility. We screen out cheap generic plastic to curate objects celebrated for genuine build integrity, tactile feel, and direct Amazon Prime fulfillment.
            </p>

            {/* CTAs */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                onClick={onShopClick}
                className="group flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-xs sm:text-sm font-bold text-slate-950 hover:bg-amber-300 transition-all shadow-lg shadow-amber-400/20 active:scale-95"
              >
                <span>Explore 2026 Collection</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#reviews"
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white hover:bg-white/10 transition active:scale-95"
              >
                Verified Buyer Reviews
              </a>
            </div>

            {/* Quality & Shipping Commitments */}
            <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-3 gap-3 text-left">
              <div>
                <p className="text-white font-bold text-xs sm:text-sm flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>Amazon Prime</span>
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">Direct 2-day delivery</p>
              </div>

              <div>
                <p className="text-white font-bold text-xs sm:text-sm flex items-center gap-1.5">
                  <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400 shrink-0" />
                  <span>4.8+ Rating</span>
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">Authentic reviews only</p>
              </div>

              <div>
                <p className="text-white font-bold text-xs sm:text-sm flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>30-Day Returns</span>
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">Zero hassle guarantee</p>
              </div>
            </div>

            {/* Balanced Social Proof Quote Card (Eliminates the empty gap below!) */}
            <div className="mt-5 rounded-xl border border-white/10 bg-gradient-to-r from-white/[0.04] to-white/[0.01] p-3.5 text-left backdrop-blur-md">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-white">Independent Buyer Review</span>
                </div>
                <span className="rounded bg-emerald-500/10 text-emerald-400 font-mono text-[9px] px-1.5 py-0.5 border border-emerald-500/20">
                  Verified Amazon Purchase
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed italic">
                "{currentHero.reviewQuote}"
              </p>
              <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>{currentHero.reviewer}</span>
                <span className="text-amber-400">Hardware Lab Verified</span>
              </div>
            </div>

          </div>

          {/* Right Hero Product Card with Balanced Aspect Ratio */}
          <div className="lg:col-span-5">
            
            {/* Artifact Selector Tabs */}
            <div className="flex items-center gap-1.5 mb-2.5 overflow-x-auto pb-1 no-scrollbar">
              {HERO_HIGHLIGHTS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedHeroIndex(idx)}
                  className={`text-[11px] font-mono px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                    selectedHeroIndex === idx
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-400/20 scale-[1.02]'
                      : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  0{idx + 1} // {item.category}
                </button>
              ))}
            </div>

            {/* Visual Showcase Card */}
            <div className="group relative rounded-2xl overflow-hidden border border-white/15 bg-[#0e1017] shadow-2xl transition duration-300 hover:border-amber-400/40 hover:shadow-amber-500/10">
              
              {/* Product Photo with Balanced 16/10 Landscape Aspect */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                <Image
                  src={currentHero.imageUrl}
                  alt={currentHero.title}
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="rounded bg-black/75 backdrop-blur-md border border-white/15 text-amber-400 font-mono text-[10px] font-bold px-2 py-0.5 uppercase">
                    FEATURED CURATION
                  </span>
                  <span className="rounded bg-emerald-500/90 text-white font-mono text-[10px] font-bold px-2 py-0.5">
                    SAVE {discountPercent}%
                  </span>
                </div>
              </div>

              {/* Product Details Container */}
              <div className="p-4 text-left border-t border-white/10 bg-[#0c0e15]">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider">
                    {currentHero.category}
                  </span>
                  <div className="flex items-center gap-1 text-slate-300 text-xs font-bold">
                    <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
                    <span>{currentHero.rating}</span>
                    <span className="text-slate-500 font-normal">({currentHero.reviewsCount})</span>
                  </div>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                  {currentHero.title}
                </h3>

                <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                  {currentHero.tagline}
                </p>

                {/* Spec Pills */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {currentHero.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] text-slate-300 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Pricing & Amazon Button */}
                <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg sm:text-xl font-black text-white">
                        ${currentHero.price.toFixed(2)}
                      </span>
                      <span className="text-xs text-slate-500 line-through">
                        ${currentHero.compareAtPrice.toFixed(2)}
                      </span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono font-medium block">
                      Prime 2-Day Shipping Eligible
                    </span>
                  </div>

                  <a
                    href={currentHero.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-xl bg-amber-400 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-amber-300 transition active:scale-95 shadow-md shadow-amber-400/10 shrink-0"
                  >
                    <span>View on Amazon</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
