'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, ShieldAlert, Sparkles } from 'lucide-react';
import { sound } from '../lib/sound';

export default function CableSlackCalculator() {
  const [maxHeight, setMaxHeight] = useState<number>(48);
  const [wallDistance, setWallDistance] = useState<number>(18);
  const [surgeJoules, setSurgeJoules] = useState<string>('2100');

  // Formula: H_max + D_horizontal + S_safety (6 inches)
  const safetyBuffer = 6;
  const totalDropInches = maxHeight + wallDistance + safetyBuffer;
  const totalDropFeet = (totalDropInches / 12).toFixed(1);
  const recommendedSpineVertebrae = Math.ceil(maxHeight / 1.5);

  const handleHeightChange = (val: number) => {
    sound.playTick();
    setMaxHeight(val);
  };

  const handleDistanceChange = (val: number) => {
    sound.playTick();
    setWallDistance(val);
  };

  return (
    <div className="my-10 rounded-2xl border-2 border-amber-400/40 bg-gradient-to-b from-[#101424] to-[#0a0d16] p-6 sm:p-8 shadow-2xl text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400">
            <Calculator className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-black text-white tracking-tight">
              Dynamic Standing Desk Cable Slack Calculator
            </h3>
            <p className="text-[11px] font-mono text-amber-300/80">
              ISO 9241-5 &amp; ANSI/BIFMA Compliant Cord Travel Formula
            </p>
          </div>
        </div>
        <span className="self-start sm:self-auto px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
          Interactive Tool
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Input 1: Max Height */}
        <div>
          <div className="flex justify-between text-xs font-mono mb-2">
            <span className="text-slate-300">Max Standing Height (Floor to Desk)</span>
            <span className="text-amber-400 font-bold">{maxHeight} inches ({Math.round(maxHeight * 2.54)} cm)</span>
          </div>
          <input
            type="range"
            min="38"
            max="52"
            step="1"
            value={maxHeight}
            onChange={(e) => handleHeightChange(Number(e.target.value))}
            className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
            <span>38" (Compact)</span>
            <span>45" (Standard)</span>
            <span>52" (Tall / Treadmill)</span>
          </div>
        </div>

        {/* Input 2: Horizontal Distance */}
        <div>
          <div className="flex justify-between text-xs font-mono mb-2">
            <span className="text-slate-300">Distance to Wall Outlet</span>
            <span className="text-amber-400 font-bold">{wallDistance} inches ({Math.round(wallDistance * 2.54)} cm)</span>
          </div>
          <input
            type="range"
            min="6"
            max="36"
            step="2"
            value={wallDistance}
            onChange={(e) => handleDistanceChange(Number(e.target.value))}
            className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
            <span>6" (Directly Behind)</span>
            <span>18" (Standard)</span>
            <span>36" (Lateral Outlet)</span>
          </div>
        </div>
      </div>

      {/* Output Results Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl border border-white/10 bg-[#07090f]">
        <div>
          <div className="text-[10px] font-mono uppercase text-slate-400">Total Cord Length Needed</div>
          <div className="text-2xl font-black text-amber-400 mt-0.5">
            {totalDropInches}&Prime; <span className="text-xs font-mono font-normal text-slate-300">({totalDropFeet} ft)</span>
          </div>
          <p className="text-[10px] text-slate-400 mt-1">
            Select an <strong>8-foot or 10-foot</strong> main power cord.
          </p>
        </div>

        <div>
          <div className="text-[10px] font-mono uppercase text-slate-400">Articulated Spine Vertebrae</div>
          <div className="text-2xl font-black text-white mt-0.5">
            {recommendedSpineVertebrae} <span className="text-xs font-mono font-normal text-slate-400">modules</span>
          </div>
          <p className="text-[10px] text-slate-400 mt-1">
            Requires 4-channel magnetic vertebrae spine.
          </p>
        </div>

        <div>
          <div className="text-[10px] font-mono uppercase text-slate-400">Conductor Gauge &amp; Surge</div>
          <div className="text-2xl font-black text-emerald-400 mt-0.5">
            14 AWG <span className="text-xs font-mono font-normal text-slate-300">/ 2,100J</span>
          </div>
          <p className="text-[10px] text-slate-400 mt-1">
            Safeguards up to 15A / 1875W electrical loads.
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-300 pt-3 border-t border-white/10">
        <div className="flex items-center gap-2 text-emerald-400 font-mono text-[11px]">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <span>Zero motor tensile strain guaranteed at {maxHeight}&Prime; full elevation</span>
        </div>
        <a
          href="/#product-underdesk-cable-spine"
          className="inline-flex items-center gap-1.5 font-mono font-bold text-amber-400 hover:text-amber-300 transition text-[11px] uppercase tracking-wider"
        >
          <span>View Compatible Magnetic Spine Hardware &rarr;</span>
        </a>
      </div>
    </div>
  );
}
