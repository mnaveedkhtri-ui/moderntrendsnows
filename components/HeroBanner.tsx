'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Sparkles, CheckCircle2, Star, ShieldCheck } from 'lucide-react';

interface HeroBannerProps {
  onShopClick: () => void;
}

export default function HeroBanner({ onShopClick }: HeroBannerProps) {
  return (
    <section className="relative border-b border-white/10 bg-[#07090e] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1 text-xs font-semibold text-amber-300 mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Curated 2026 Collection</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Viral Tech Gadgets & <br className="hidden sm:inline" />
              Aesthetic Workspace Essentials.
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              We test hundreds of trending products to curate the top 1% designed with quality materials, smart utility, and stunning ambient aesthetics. Direct fulfillment through Amazon Prime.
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                onClick={onShopClick}
                className="flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-950 hover:bg-amber-300 transition-all shadow-lg shadow-amber-400/15 active:scale-95"
              >
                <span>Shop Best Sellers</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="#reviews"
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white hover:bg-white/10 transition"
              >
                Read Verified Reviews
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-5 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Prime 2-Day Shipping</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Verified Buyer Ratings</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>30-Day Hassle-Free Returns</span>
              </div>
            </div>
          </div>

          {/* Right Visual Banner */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] sm:aspect-square w-full rounded-2xl overflow-hidden border border-white/15 bg-slate-900 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=85"
                alt="Aesthetic Levitating Lamp in Modern Workspace"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Floating Product Badge on Image */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/85 backdrop-blur-md p-3.5 border border-white/15 text-left flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block">Featured Product</span>
                  <h3 className="text-xs sm:text-sm font-bold text-white">Anti-Gravity Levitating Water Lamp</h3>
                  <p className="text-[11px] text-slate-300 font-bold mt-0.5">$49.99 <span className="line-through text-slate-500 font-normal text-[10px]">$79.99</span></p>
                </div>
                <button
                  onClick={onShopClick}
                  className="rounded-lg bg-amber-400 px-3 py-1.5 text-xs font-bold text-slate-950 hover:bg-amber-300 transition shrink-0"
                >
                  View
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
