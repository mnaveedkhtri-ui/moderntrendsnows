'use client';

import React from 'react';
import Link from 'next/link';
import { Bookmark, Search, ShieldCheck, Sparkles, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  savedCount: number;
  onOpenSaved: () => void;
  onOpenSearch: () => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

export default function Navbar({
  savedCount,
  onOpenSaved,
  onOpenSearch,
  selectedCategory,
  onSelectCategory,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#090b10]/90 backdrop-blur-xl transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Brand Lockup */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-950 font-black text-lg shadow-xl group-hover:scale-105 transition-transform duration-300">
            ✦
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-lg tracking-tight text-white group-hover:text-amber-400 transition-colors">
                MODERN TRENDS NOW
              </span>
              <span className="rounded bg-white/10 px-1.5 py-0.5 text-[9px] font-mono font-bold text-amber-300 border border-white/15 uppercase">
                Studio .Store
              </span>
            </div>
            <p className="text-[10px] font-mono tracking-wider text-slate-400 uppercase -mt-0.5">
              Curated Desktop & Living Archive
            </p>
          </div>
        </Link>

        {/* Center Editorial Links */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md">
          {['All Objects', 'Workspace', 'Lighting', 'Kinetic', 'Living'].map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-white text-slate-950 font-bold shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300 hover:border-white/20 hover:text-white hover:bg-white/10 transition-all"
            title="Search Products"
          >
            <Search className="h-4 w-4 text-slate-400" />
            <span className="hidden sm:inline font-mono text-[11px]">Search...</span>
            <kbd className="hidden sm:inline rounded bg-white/10 px-1.5 py-0.5 text-[9px] font-mono text-slate-400">
              ⌘K
            </kbd>
          </button>

          {/* Saved Wishlist Drawer Trigger */}
          <button
            onClick={onOpenSaved}
            className="relative flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300 hover:border-amber-400/40 hover:text-white hover:bg-white/10 transition-all active:scale-95"
            title="Saved Items"
          >
            <Bookmark className={`h-4 w-4 ${savedCount > 0 ? 'text-amber-400 fill-amber-400' : 'text-slate-400'}`} />
            <span className="hidden sm:inline font-semibold">Saved</span>
            {savedCount > 0 && (
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[10px] font-black text-slate-950 animate-pulse">
                {savedCount}
              </span>
            )}
          </button>

          {/* Direct Amazon Verified Action */}
          <a
            href="#catalog"
            className="hidden sm:flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-xs font-black text-slate-950 hover:bg-amber-400 transition-colors shadow-lg active:scale-95"
          >
            <span>Shop Archive</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
