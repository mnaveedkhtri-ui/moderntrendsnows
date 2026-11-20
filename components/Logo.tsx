'use client';

import React from 'react';
import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export default function Logo({ size = 'md', showTagline = true }: LogoProps) {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const titleSizes = {
    sm: 'text-sm',
    md: 'text-base sm:text-lg',
    lg: 'text-xl sm:text-2xl',
  };

  return (
    <Link href="/" className="group flex items-center gap-3 select-none">
      {/* Precision Geometric Monogram */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-b from-[#161a26] to-[#0c0e15] border border-white/15 p-1.5 shadow-lg shadow-black/40 group-hover:border-amber-400/50 transition-colors duration-200`}>
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Subtle Chamfer Frame */}
          <rect x="2" y="2" width="36" height="36" rx="8" stroke="rgba(245,158,11,0.25)" strokeWidth="1.5" />
          {/* Architectural M */}
          <path
            d="M10 30V12L20 23L30 12V30"
            stroke="#f59e0b"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Center Optical Focal Element */}
          <circle cx="20" cy="15" r="2.2" fill="#ffffff" />
          {/* Bottom Precision Accent */}
          <path d="M15 30H25" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" opacity="0.65" />
        </svg>
      </div>

      {/* Brand Typographic Lockup */}
      <div className="text-left flex flex-col justify-center">
        <div className="flex items-center gap-1.5">
          <span className={`font-black tracking-tight text-white ${titleSizes[size]} leading-none`}>
            MODERN TRENDS
          </span>
          <span className="rounded bg-amber-400/15 border border-amber-400/30 px-1.5 py-0.5 text-[9px] font-mono font-bold text-amber-300 uppercase tracking-wider">
            NOW
          </span>
        </div>
        {showTagline && (
          <span className="text-[10px] tracking-[0.18em] text-slate-400 font-mono block mt-1 uppercase">
            Curated Tech & Spatial Archive
          </span>
        )}
      </div>
    </Link>
  );
}
