'use client';

import React from 'react';
import Link from 'next/link';
import { Bookmark, Sparkles, Compass, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  savedCount: number;
  onOpenSaved: () => void;
}

export default function Navbar({ savedCount, onOpenSaved }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 glass-nav">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand Identity */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 font-black text-base shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
            ✦
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-tight text-white text-lg">
                ModernTrends<span className="text-amber-400">Now</span>
              </span>
              <span className="rounded-md bg-amber-400/10 px-1.5 py-0.5 text-[10px] font-bold text-amber-300 border border-amber-400/20 tracking-wider">
                CURATED .STORE
              </span>
            </div>
            <p className="text-[11px] text-slate-400 -mt-0.5 font-medium flex items-center gap-1.5">
              <span>Vol. 2026</span>
              <span className="text-slate-600">•</span>
              <span>Aesthetic Living & Workspace Objects</span>
            </p>
          </div>
        </Link>

        {/* Navigation Elements */}
        <div className="flex items-center gap-3">
          <a
            href="#curation-manifesto"
            className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-slate-800/50 transition-colors"
          >
            <ShieldCheck className="h-4 w-4 text-amber-400" />
            Curatorial Standard
          </a>

          {/* Saved Items Pill */}
          <button
            onClick={onOpenSaved}
            className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-3.5 py-1.5 text-xs font-semibold text-slate-200 hover:border-amber-500/50 hover:text-white transition-all active:scale-95 shadow-sm"
          >
            <Bookmark className={`h-4 w-4 ${savedCount > 0 ? 'text-amber-400 fill-amber-400' : 'text-slate-400'}`} />
            <span>Saved Objects</span>
            {savedCount > 0 && (
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[10px] font-black text-slate-950">
                {savedCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
