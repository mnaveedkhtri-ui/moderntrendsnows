'use client';

import React from 'react';
import { Search, Sparkles, Filter, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  categories: readonly string[];
  totalCount: number;
}

export default function Hero({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
  totalCount,
}: HeroProps) {
  return (
    <div className="relative pt-12 pb-8 sm:pt-16 sm:pb-12 text-center hero-gradient border-b border-slate-800/60 overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Curatorial Seal */}
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300 mb-6 shadow-sm">
          <span className="flex h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span>Independent Design Archive — Zero Sponsored Clutter</span>
        </div>

        {/* Editorial Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
          Design Objects for the <br />
          <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 bg-clip-text text-transparent">
            Modern Desktop & Home
          </span>
        </h1>

        <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          An intentional study of ambient lighting, magnetic levitation, and spatial ergonomics. Every object is independently evaluated for build integrity and sensory delight.
        </p>

        {/* Live Search & Filter Bar */}
        <div className="mt-8 max-w-xl mx-auto relative">
          <div className="relative flex items-center shadow-2xl">
            <Search className="absolute left-4 h-5 w-5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 12 curated objects (e.g. lamp, magsafe, flame, pixel)..."
              className="w-full rounded-2xl border border-slate-700/80 bg-[#0d1017]/90 py-3.5 pl-12 pr-4 text-sm text-white placeholder-slate-400 shadow-xl focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 backdrop-blur-md transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-400/20'
                    : 'border border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Subtle Assurance bar */}
        <div className="mt-6 flex items-center justify-center gap-6 text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Amazon Prime Direct Fulfillment
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> 30-Day Hassle-Free Returns
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> 100% Verified Customer Ratings
          </span>
        </div>
      </div>
    </div>
  );
}
