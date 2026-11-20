'use client';

import React from 'react';
import { Zap, ShieldCheck, Star, Truck, Award, Sparkles } from 'lucide-react';

export default function MarqueeTicker() {
  const items = [
    { icon: Truck, text: 'AMAZON PRIME 2-DAY FULFILLMENT', highlight: 'DIRECT' },
    { icon: ShieldCheck, text: '30-DAY ZERO RISK HASSLE-FREE RETURNS', highlight: 'GUARANTEED' },
    { icon: Sparkles, text: 'AEROSPACE GRADE CNC 6063 ALUMINUM & OPTICAL GLASS', highlight: 'TACTILE' },
    { icon: Star, text: '100% INDEPENDENTLY TESTED BUILD INTEGRITY', highlight: 'VERIFIED' },
    { icon: Award, text: 'ZERO DROP-SHIPPING OR SPONSORED CLUTTER', highlight: 'CURATED' },
    { icon: Zap, text: 'HEAT DISSIPATION & 15W THERMAL TESTED', highlight: 'CERTIFIED' },
  ];

  return (
    <div className="relative border-y border-white/10 bg-[#06070b] overflow-hidden py-3 select-none">
      {/* Edge Blur Vignettes for high-end cinematic feel */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-[#06070b] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-[#06070b] to-transparent" />

      <div className="flex animate-marquee whitespace-nowrap">
        {/* Track 1 */}
        <div className="flex items-center gap-8 shrink-0 pr-8">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-center gap-2.5 text-[11px] font-mono tracking-wider text-slate-300">
                <Icon className="h-3.5 w-3.5 text-amber-400" />
                <span>{item.text}</span>
                <span className="rounded bg-amber-400/15 border border-amber-400/30 px-1.5 py-0.2 text-[9px] font-bold text-amber-300">
                  {item.highlight}
                </span>
                <span className="text-white/20 ml-4 font-normal">✦</span>
              </div>
            );
          })}
        </div>

        {/* Track 2 (Duplicate for Seamless Loop) */}
        <div className="flex items-center gap-8 shrink-0 pr-8" aria-hidden="true">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={`dup-${i}`} className="flex items-center gap-2.5 text-[11px] font-mono tracking-wider text-slate-300">
                <Icon className="h-3.5 w-3.5 text-amber-400" />
                <span>{item.text}</span>
                <span className="rounded bg-amber-400/15 border border-amber-400/30 px-1.5 py-0.2 text-[9px] font-bold text-amber-300">
                  {item.highlight}
                </span>
                <span className="text-white/20 ml-4 font-normal">✦</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
