'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, ExternalLink, Zap, Star } from 'lucide-react';
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
    tagline: 'Precision-milled CNC aluminum dock for iPhone StandBy, Watch & AirPods.',
    imageUrl: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1200&q=85',
    amazonUrl: 'https://www.amazon.com/s?k=3+in+1+magsafe+charging+station&tag=moderntrends-20',
    tags: ['CNC 6063 Aluminum', '15W Fast Qi Coils', 'Weighted Anti-Slip Base'],
  },
  {
    id: 'screenbar-monitor-light',
    title: 'Curved ScreenBar Asymmetric Monitor Desk Light',
    category: 'Ambient Optics',
    price: 42.00,
    compareAtPrice: 65.00,
    rating: 4.8,
    reviewsCount: 3020,
    tagline: 'Zero-glare asymmetric optical beam with stepless touch color temperature.',
    imageUrl: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=1200&q=85',
    amazonUrl: 'https://www.amazon.com/s?k=monitor+screenbar+light&tag=moderntrends-20',
    tags: ['Anti-Reflective Optics', 'Stepless Color Temp', 'USB Powered'],
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
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Storytelling */}
          <div className="lg:col-span-7 text-left">
            
            {/* Human Editorial Kicker */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1 text-xs font-semibold text-amber-300 mb-5">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="font-mono uppercase tracking-wider text-[11px]">Vol. 2026 // Editorial Drop</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-white tracking-tight leading-[1.12]">
              Tactile Tech & Spatial Objects for the Modern Space.
            </h1>

            {/* Humanized Subtitle */}
            <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              An independent archive of viral desk architecture, ambient lighting, and everyday utility. We screen out cheap generic plastic to curate objects celebrated for genuine build integrity, tactile feel, and direct Amazon Prime fulfillment.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={onShopClick}
                className="flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-950 hover:bg-amber-300 transition-all shadow-lg shadow-amber-400/20 active:scale-95"
              >
                <span>Explore 2026 Collection</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="#reviews"
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white hover:bg-white/10 transition"
              >
                Verified Buyer Reviews
              </a>
            </div>

            {/* Real Quality & Shipping Commitments */}
            <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-3 gap-3 text-left">
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

          </div>

          {/* Right Hero Product Card with Interactive Switcher */}
          <div className="lg:col-span-5">
            
            {/* Artifact Selector Tabs */}
            <div className="flex items-center gap-1.5 mb-3 overflow-x-auto pb-1 no-scrollbar">
              {HERO_HIGHLIGHTS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedHeroIndex(idx)}
                  className={`text-[11px] font-mono px-3 py-1.5 rounded-lg transition whitespace-nowrap ${
                    selectedHeroIndex === idx
                      ? 'bg-amber-400 text-slate-950 font-bold shadow'
                      : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  0{idx + 1} // {item.category}
                </button>
              ))}
            </div>

            {/* Visual Showcase Card */}
            <div className="group relative rounded-2xl overflow-hidden border border-white/15 bg-[#0e1017] shadow-2xl transition duration-300">
              
              {/* Product Photo */}
              <div className="relative aspect-[4/3] sm:aspect-square w-full overflow-hidden bg-slate-900">
                <Image
                  src={currentHero.imageUrl}
                  alt={currentHero.title}
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

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
              <div className="p-4 sm:p-5 text-left border-t border-white/10 bg-[#0c0e15]">
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

                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  {currentHero.title}
                </h3>

                <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                  {currentHero.tagline}
                </p>

                {/* Spec Pills */}
                <div className="flex flex-wrap gap-1.5 mt-3">
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
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl sm:text-2xl font-black text-white">
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
                    className="flex items-center gap-1.5 rounded-xl bg-amber-400 px-4 py-2.5 text-xs font-bold text-slate-950 hover:bg-amber-300 transition active:scale-95 shadow-md shadow-amber-400/10 shrink-0"
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
