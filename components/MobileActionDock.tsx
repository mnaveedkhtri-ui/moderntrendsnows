'use client';

import React, { useState, useEffect } from 'react';
import { Compass, Sparkles, Search, Bookmark, Volume2, VolumeX, ArrowUp } from 'lucide-react';
import { sound } from '../lib/sound';

interface MobileActionDockProps {
  savedCount: number;
  onOpenSaved: () => void;
  onOpenSearch: () => void;
  onScrollToCatalog: () => void;
  onScrollToBuilder: () => void;
}

export default function MobileActionDock({
  savedCount,
  onOpenSaved,
  onOpenSearch,
  onScrollToCatalog,
  onScrollToBuilder,
}: MobileActionDockProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    setIsMuted(sound.getMuted());

    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleMute = () => {
    const nextMuted = sound.toggleMute();
    setIsMuted(nextMuted);
  };

  const handleScrollTop = () => {
    sound.playTick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 lg:hidden w-[92%] max-w-sm animate-in slide-in-from-bottom-3 duration-200">
      <div className="flex items-center justify-between rounded-2xl border border-white/15 bg-[#090b12]/90 backdrop-blur-xl px-4 py-2.5 shadow-2xl shadow-black/80">
        
        {/* Catalog Jump */}
        <button
          onClick={() => {
            sound.playTick();
            onScrollToCatalog();
          }}
          className="flex flex-col items-center gap-0.5 text-slate-300 hover:text-amber-400 active:scale-90 transition"
          title="Browse Catalog"
        >
          <Compass className="h-4 w-4" />
          <span className="text-[9px] font-mono font-medium">Catalog</span>
        </button>

        {/* Studio Builder Jump */}
        <button
          onClick={() => {
            sound.playTick();
            onScrollToBuilder();
          }}
          className="flex flex-col items-center gap-0.5 text-slate-300 hover:text-amber-400 active:scale-90 transition"
          title="Setup Studio"
        >
          <Sparkles className="h-4 w-4 text-amber-400" />
          <span className="text-[9px] font-mono font-medium text-amber-300">Studio</span>
        </button>

        {/* Quick Search */}
        <button
          onClick={() => {
            sound.playTick();
            onOpenSearch();
          }}
          className="flex flex-col items-center gap-0.5 text-slate-300 hover:text-white active:scale-90 transition"
          title="Search"
        >
          <Search className="h-4 w-4" />
          <span className="text-[9px] font-mono font-medium">Search</span>
        </button>

        {/* Wishlist Drawer */}
        <button
          onClick={() => {
            sound.playTick();
            onOpenSaved();
          }}
          className="relative flex flex-col items-center gap-0.5 text-slate-300 hover:text-white active:scale-90 transition"
          title="Saved Wishlist"
        >
          <Bookmark className={`h-4 w-4 ${savedCount > 0 ? 'text-amber-400 fill-amber-400' : ''}`} />
          <span className="text-[9px] font-mono font-medium">Saved</span>
          {savedCount > 0 && (
            <span className="absolute -top-1.5 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-amber-400 text-[8px] font-black text-slate-950">
              {savedCount}
            </span>
          )}
        </button>

        {/* Sound FX Toggle */}
        <button
          onClick={handleToggleMute}
          className="flex flex-col items-center gap-0.5 text-slate-400 hover:text-white active:scale-90 transition"
          title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
        >
          {isMuted ? <VolumeX className="h-4 w-4 text-rose-400" /> : <Volume2 className="h-4 w-4 text-emerald-400" />}
          <span className="text-[9px] font-mono font-medium">{isMuted ? 'Muted' : 'Sound'}</span>
        </button>

        {/* Scroll to Top */}
        <button
          onClick={handleScrollTop}
          className="flex flex-col items-center gap-0.5 text-slate-400 hover:text-white active:scale-90 transition border-l border-white/10 pl-2"
          title="Back to Top"
        >
          <ArrowUp className="h-4 w-4" />
          <span className="text-[9px] font-mono font-medium">Top</span>
        </button>

      </div>
    </div>
  );
}
