'use client';

import React from 'react';

export default function TopMarquee() {
  return (
    <div className="relative overflow-hidden border-b border-white/10 bg-[#06070a] py-2 text-[11px] font-mono tracking-widest text-slate-400 select-none">
      <div className="flex w-max animate-marquee space-x-8">
        <span>EDITION 2026 // DROP ARCHIVE</span>
        <span className="text-amber-400">●</span>
        <span>VERIFIED AMAZON PRIME DIRECT DISPATCH</span>
        <span className="text-amber-400">●</span>
        <span>ZERO CHEAP PLASTICS // HONEST ARCHITECTURAL MATERIALS</span>
        <span className="text-amber-400">●</span>
        <span>30-DAY HASSLE-FREE VERIFIED RETURN SAFETY</span>
        <span className="text-amber-400">●</span>
        <span>PINTEREST CERTIFIED STUDIO STORE</span>
        <span className="text-amber-400">●</span>
        <span>EDITION 2026 // DROP ARCHIVE</span>
        <span className="text-amber-400">●</span>
        <span>VERIFIED AMAZON PRIME DIRECT DISPATCH</span>
        <span className="text-amber-400">●</span>
        <span>ZERO CHEAP PLASTICS // HONEST ARCHITECTURAL MATERIALS</span>
        <span className="text-amber-400">●</span>
        <span>30-DAY HASSLE-FREE VERIFIED RETURN SAFETY</span>
        <span className="text-amber-400">●</span>
        <span>PINTEREST CERTIFIED STUDIO STORE</span>
      </div>
    </div>
  );
}
