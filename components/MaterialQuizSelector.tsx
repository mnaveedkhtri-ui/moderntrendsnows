'use client';

import React, { useState } from 'react';
import { Layers, CheckCircle2, Shield, Sparkles, Droplets, Volume2, MousePointer } from 'lucide-react';
import { sound } from '../lib/sound';

export default function MaterialQuizSelector() {
  const [beverageHabit, setBeverageHabit] = useState<'yes' | 'no'>('yes');
  const [primaryUse, setPrimaryUse] = useState<'typing' | 'gaming' | 'design'>('typing');
  const [climate, setClimate] = useState<'warm' | 'cool'>('cool');

  const handleSelect = (setter: any, val: any) => {
    sound.playTick();
    setter(val);
  };

  // Determine recommendation
  let winner = 'Reversible Dual-Sided Leather & Suede Felt';
  let badge = 'HYBRID WINNER';
  let rationale = 'Gives you water-repellent leather on top for morning coffee and mouse precision, with acoustic suede felt underneath for night typing.';
  let targetProduct = 'leather-felt-desk-mat';

  if (beverageHabit === 'yes' && primaryUse === 'gaming') {
    winner = 'Full-Grain Smooth Textured Leather';
    badge = 'DURABILITY & GLIDE';
    rationale = 'Impervious to coffee spills with low dynamic friction (0.22) for effortless mouse gliding.';
    targetProduct = 'leather-felt-desk-mat';
  } else if (beverageHabit === 'no' && primaryUse === 'typing' && climate === 'cool') {
    winner = 'Merino Wool Felt / Suede Finish';
    badge = 'ACOUSTIC THOCK';
    rationale = 'Delivers maximum sound absorption for mechanical keyboard switches and cozy tactile skin warmth.';
    targetProduct = 'leather-felt-desk-mat';
  }

  return (
    <div className="my-10 rounded-2xl border-2 border-amber-400/40 bg-gradient-to-b from-[#101424] to-[#0a0d16] p-6 sm:p-8 shadow-2xl text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400">
            <Layers className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-black text-white tracking-tight">
              Interactive Desk Mat Material Selector
            </h3>
            <p className="text-[11px] font-mono text-amber-300/80">
              Personalized Recommendation Based on Friction, Acoustics &amp; Spill Risk
            </p>
          </div>
        </div>
        <span className="self-start sm:self-auto px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider">
          Decision Engine
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6 text-xs">
        {/* Question 1 */}
        <div className="space-y-2">
          <label className="font-mono uppercase text-slate-400 text-[11px] flex items-center gap-1.5">
            <Droplets className="h-3.5 w-3.5 text-blue-400" />
            <span>Do you drink coffee/tea at your desk?</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleSelect(setBeverageHabit, 'yes')}
              className={`p-2.5 rounded-xl border text-center transition font-mono ${
                beverageHabit === 'yes'
                  ? 'border-amber-400 bg-amber-400/15 text-white font-bold'
                  : 'border-white/10 bg-[#080a10] text-slate-400 hover:text-white'
              }`}
            >
              Daily (Spill Risk)
            </button>
            <button
              onClick={() => handleSelect(setBeverageHabit, 'no')}
              className={`p-2.5 rounded-xl border text-center transition font-mono ${
                beverageHabit === 'no'
                  ? 'border-amber-400 bg-amber-400/15 text-white font-bold'
                  : 'border-white/10 bg-[#080a10] text-slate-400 hover:text-white'
              }`}
            >
              Rarely / Water Only
            </button>
          </div>
        </div>

        {/* Question 2 */}
        <div className="space-y-2">
          <label className="font-mono uppercase text-slate-400 text-[11px] flex items-center gap-1.5">
            <MousePointer className="h-3.5 w-3.5 text-amber-400" />
            <span>Primary Workstation Task</span>
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            <button
              onClick={() => handleSelect(setPrimaryUse, 'typing')}
              className={`p-2.5 rounded-xl border text-center transition font-mono text-[11px] ${
                primaryUse === 'typing'
                  ? 'border-amber-400 bg-amber-400/15 text-white font-bold'
                  : 'border-white/10 bg-[#080a10] text-slate-400 hover:text-white'
              }`}
            >
              Writing
            </button>
            <button
              onClick={() => handleSelect(setPrimaryUse, 'gaming')}
              className={`p-2.5 rounded-xl border text-center transition font-mono text-[11px] ${
                primaryUse === 'gaming'
                  ? 'border-amber-400 bg-amber-400/15 text-white font-bold'
                  : 'border-white/10 bg-[#080a10] text-slate-400 hover:text-white'
              }`}
            >
              Gaming
            </button>
            <button
              onClick={() => handleSelect(setPrimaryUse, 'design')}
              className={`p-2.5 rounded-xl border text-center transition font-mono text-[11px] ${
                primaryUse === 'design'
                  ? 'border-amber-400 bg-amber-400/15 text-white font-bold'
                  : 'border-white/10 bg-[#080a10] text-slate-400 hover:text-white'
              }`}
            >
              Code / 3D
            </button>
          </div>
        </div>

        {/* Question 3 */}
        <div className="space-y-2">
          <label className="font-mono uppercase text-slate-400 text-[11px] flex items-center gap-1.5">
            <Volume2 className="h-3.5 w-3.5 text-emerald-400" />
            <span>Room Temperature &amp; Climate</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleSelect(setClimate, 'cool')}
              className={`p-2.5 rounded-xl border text-center transition font-mono ${
                climate === 'cool'
                  ? 'border-amber-400 bg-amber-400/15 text-white font-bold'
                  : 'border-white/10 bg-[#080a10] text-slate-400 hover:text-white'
              }`}
            >
              Cool (AC / Winter)
            </button>
            <button
              onClick={() => handleSelect(setClimate, 'warm')}
              className={`p-2.5 rounded-xl border text-center transition font-mono ${
                climate === 'warm'
                  ? 'border-amber-400 bg-amber-400/15 text-white font-bold'
                  : 'border-white/10 bg-[#080a10] text-slate-400 hover:text-white'
              }`}
            >
              Warm / Humid
            </button>
          </div>
        </div>
      </div>

      {/* Result Card */}
      <div className="p-5 rounded-xl border border-amber-400/30 bg-[#080b14] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 font-mono text-[9px] font-bold uppercase tracking-wider">
              {badge}
            </span>
            <span className="text-white font-black text-sm sm:text-base">{winner}</span>
          </div>
          <p className="text-xs text-slate-300 font-light leading-relaxed max-w-xl">
            {rationale}
          </p>
        </div>

        <a
          href={`/#product-${targetProduct}`}
          className="shrink-0 px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-amber-400/20 flex items-center gap-1.5"
        >
          <span>View Mat &rarr;</span>
        </a>
      </div>
    </div>
  );
}
