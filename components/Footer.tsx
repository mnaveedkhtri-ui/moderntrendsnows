import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-[#050608] py-12 text-xs text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-base font-extrabold text-white tracking-tight">
                ModernTrends<span className="text-amber-400">Now</span>
              </span>
              <span className="rounded bg-amber-400/10 px-1.5 py-0.5 text-[9px] font-bold text-amber-300 border border-amber-400/20">
                .STORE
              </span>
            </div>
            <p className="text-xs text-slate-500 max-w-md">
              An independent archive dedicated to spatial refinement, tactile objects, and intelligent desktop environments.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300">
            <Link href="/" className="hover:text-amber-400 transition">All Curations</Link>
            <a href="#curation-manifesto" className="hover:text-amber-400 transition">Editorial Manifesto</a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition">
              Pinterest Studio
            </a>
            <a href="mailto:curator@moderntrendsnow.store" className="hover:text-amber-400 transition">
              Editorial Inquiries
            </a>
          </div>
        </div>

        {/* Affiliate Disclosure & Legal Notice */}
        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-slate-400">
          <p className="max-w-2xl leading-relaxed">
            <strong>Amazon Associates Disclosure:</strong> Modern Trends Now is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by linking to Amazon.com. Prices, ratings, and availability are subject to change.
          </p>
          <div className="shrink-0 text-slate-400">
            © 2026 Modern Trends Now. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
