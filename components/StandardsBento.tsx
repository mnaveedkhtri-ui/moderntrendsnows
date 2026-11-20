'use client';

import React from 'react';
import { Layers, ShieldCheck, Zap, ArrowUpRight } from 'lucide-react';

export default function StandardsBento() {
  return (
    <section className="py-12 sm:py-16 border-b border-white/10 bg-[#080a10]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 text-left">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-0.5 text-[10px] font-mono font-bold text-amber-300 uppercase tracking-widest mb-2">
              <span>Hardware Evaluation Protocol</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Why Our Curations Never Feel Generic.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
            Every object in our archive undergoes physical build testing. We filter out cheap social media drops to present tactile artifacts engineered for longevity.
          </p>
        </div>

        {/* 3-Column Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left">
          
          {/* Bento Card 1 */}
          <div className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-[#111420] to-[#0c0e15] p-6 transition duration-300 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/10">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 mb-4 group-hover:scale-110 transition-transform">
              <Layers className="h-5 w-5" />
            </div>
            <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block mb-1">
              Standard 01 // Tactility
            </span>
            <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
              Aircraft Aluminum & Optical Glass
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We eliminate cheap hollow plastics. Every stand, dock, and lamp utilizes weighted bases, CNC-machined finishes, and optical crystal lenses for deliberate desktop presence.
            </p>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Weighted Bases Only</span>
              <span className="text-emerald-400 font-bold">100% Inspected</span>
            </div>
          </div>

          {/* Bento Card 2 */}
          <div className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-[#111420] to-[#0c0e15] p-6 transition duration-300 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/10">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 mb-4 group-hover:scale-110 transition-transform">
              <Zap className="h-5 w-5" />
            </div>
            <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block mb-1">
              Standard 02 // Performance
            </span>
            <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
              Thermal Safety & Acoustic Silence
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Charging docks are benchmarked for overnight thermal regulation with zero coil whine. Ultrasonic humidifiers operate below 25dB for tranquil deep focus sessions.
            </p>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Whisper Silent &lt;25dB</span>
              <span className="text-emerald-400 font-bold">Lab Verified</span>
            </div>
          </div>

          {/* Bento Card 3 */}
          <div className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-[#111420] to-[#0c0e15] p-6 transition duration-300 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/10">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block mb-1">
              Standard 03 // Reliability
            </span>
            <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
              Domestic Prime 2-Day Shipping
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Zero 3-week dropshipping delays or sketchy overseas customs. Every item routes directly through verified Amazon fulfillment with 30-day no-questions-asked refunds.
            </p>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>30-Day Money Back</span>
              <span className="text-emerald-400 font-bold">Zero Risk</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
