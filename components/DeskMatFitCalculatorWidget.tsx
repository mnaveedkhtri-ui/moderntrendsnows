'use client';

import React, { useState } from 'react';
import { Keyboard, CheckCircle2, AlertTriangle, ArrowRight, Layers } from 'lucide-react';
import { sound } from '../lib/sound';

const KEYBOARD_WIDTHS_IN: Record<string, { label: string; widthIn: number; matchSlug: string }> = {
  '60': { label: '60% Compact (11.6")', widthIn: 11.6, matchSlug: 'nuphy-air75-v2' },
  '75': { label: '75% Gasket/Low-Profile (12.6")', widthIn: 12.6, matchSlug: 'aula-f75-keyboard' },
  'tkl': { label: 'TKL 80% Tenkeyless (14.2")', widthIn: 14.2, matchSlug: 'aula-f75-keyboard' },
  'full': { label: '100% Full-Size (17.5")', widthIn: 17.5, matchSlug: 'nuphy-air75-v2' },
};

export default function DeskMatFitCalculatorWidget() {
  const [deskWidthIn, setDeskWidthIn] = useState<number>(55);
  const [deskDepthIn, setDeskDepthIn] = useState<number>(28);
  const [kbSize, setKbSize] = useState<'60' | '75' | 'tkl' | 'full'>('75');
  const [mouseZoneIn, setMouseZoneIn] = useState<number>(13);
  const [hasSpeakers, setHasSpeakers] = useState<boolean>(true);
  const [hasVerticalLaptop, setHasVerticalLaptop] = useState<boolean>(true);

  const kb = KEYBOARD_WIDTHS_IN[kbSize];
  const speakerTotalIn = hasSpeakers ? 12.0 : 0; // ~6" each left + right studio monitor footprint
  const laptopIn = hasVerticalLaptop ? 3.5 : 14.0; // vertical dock saves ~10.5 inches!
  const accessoryPadIn = 5.5; // coffee mug warmer + MagSafe stand zone

  const requiredActiveZoneIn = +(kb.widthIn + mouseZoneIn + 2).toFixed(1);
  const totalOccupiedIn = +(requiredActiveZoneIn + speakerTotalIn + laptopIn + accessoryPadIn).toFixed(1);
  const spareMarginIn = +(deskWidthIn - totalOccupiedIn).toFixed(1);
  const fitsComfortably = spareMarginIn >= 2.0;

  // Recommended Desk Mat size
  let recommendedMat = 'Medium (31.5" x 11.8")';
  if (deskWidthIn >= 55 && deskDepthIn >= 26) {
    recommendedMat = 'XXL Dual-Sided (35.4" x 15.7")';
  }
  if (deskWidthIn >= 72 && deskDepthIn >= 30 && kbSize !== '60') {
    recommendedMat = 'Studio Mega Pad (47.2" x 23.6")';
  }

  const usedPct = Math.min(100, Math.round((totalOccupiedIn / deskWidthIn) * 100));

  return (
    <div className="my-8 rounded-2xl border-2 border-amber-400/40 bg-gradient-to-b from-[#101424] to-[#0a0d16] p-5 sm:p-8 shadow-2xl text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400">
            <Keyboard className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-xl font-black text-white tracking-tight">
              Desk Width, Keyboard &amp; XXL Desk Mat Fit Planner
            </h3>
            <p className="text-[11px] font-mono text-amber-300/80">
              Millimeter-Accurate Workspace Footprint &amp; Clearance Verifier
            </p>
          </div>
        </div>
        <span className="self-start sm:self-auto px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider">
          Spatial Planner
        </span>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 text-xs">
        <div>
          <label className="font-mono uppercase text-slate-400 text-[10px] block mb-1.5">
            Desk Surface Width
          </label>
          <select
            value={deskWidthIn}
            onChange={(e) => {
              sound.playTick();
              setDeskWidthIn(Number(e.target.value));
            }}
            className="w-full rounded-xl border border-white/10 bg-[#07090f] px-3 py-2.5 text-xs text-white font-mono focus:outline-none focus:border-amber-400"
          >
            <option value={40}>40&quot; Compact (100 cm)</option>
            <option value={48}>48&quot; Standard (120 cm)</option>
            <option value={55}>55&quot; Creator (140 cm)</option>
            <option value={60}>60&quot; Pro Studio (152 cm)</option>
            <option value={72}>72&quot; Executive (183 cm)</option>
          </select>
        </div>

        <div>
          <label className="font-mono uppercase text-slate-400 text-[10px] block mb-1.5">
            Keyboard Form Factor
          </label>
          <select
            value={kbSize}
            onChange={(e) => {
              sound.playTick();
              setKbSize(e.target.value as '60' | '75' | 'tkl' | 'full');
            }}
            className="w-full rounded-xl border border-white/10 bg-[#07090f] px-3 py-2.5 text-xs text-white font-mono focus:outline-none focus:border-amber-400"
          >
            {Object.entries(KEYBOARD_WIDTHS_IN).map(([k, v]) => (
              <option key={k} value={k}>
                {v.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <div className="flex justify-between text-[10px] font-mono mb-1.5">
            <span className="text-slate-400 uppercase">Mouse Sweep Room</span>
            <span className="text-amber-400 font-bold">{mouseZoneIn}&quot;</span>
          </div>
          <input
            type="range"
            min="8"
            max="20"
            step="1"
            value={mouseZoneIn}
            onChange={(e) => {
              sound.playTick();
              setMouseZoneIn(Number(e.target.value));
            }}
            className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer mt-2"
          />
          <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
            <span>8&quot; Trackball</span>
            <span>13&quot; Daily</span>
            <span>20&quot; Low-Sens</span>
          </div>
        </div>

        <div>
          <label className="font-mono uppercase text-slate-400 text-[10px] block mb-1.5">
            Desk Depth
          </label>
          <select
            value={deskDepthIn}
            onChange={(e) => {
              sound.playTick();
              setDeskDepthIn(Number(e.target.value));
            }}
            className="w-full rounded-xl border border-white/10 bg-[#07090f] px-3 py-2.5 text-xs text-white font-mono focus:outline-none focus:border-amber-400"
          >
            <option value={24}>24&quot; Depth (Shallow)</option>
            <option value={28}>28&quot; Depth (Standard)</option>
            <option value={30}>30&quot; Depth (Deep Pro)</option>
          </select>
        </div>
      </div>

      {/* Hardware Toggles */}
      <div className="flex flex-wrap gap-3 mb-6 text-xs font-mono">
        <button
          type="button"
          onClick={() => {
            sound.playTick();
            setHasSpeakers(!hasSpeakers);
          }}
          className={`px-3.5 py-2 rounded-xl border transition ${
            hasSpeakers
              ? 'border-amber-400 bg-amber-400/15 text-white font-bold'
              : 'border-white/10 bg-[#07090f] text-slate-400'
          }`}
        >
          {hasSpeakers ? '✓ Studio Speakers (12" total)' : '+ Add Studio Speakers'}
        </button>

        <button
          type="button"
          onClick={() => {
            sound.playTick();
            setHasVerticalLaptop(!hasVerticalLaptop);
          }}
          className={`px-3.5 py-2 rounded-xl border transition ${
            hasVerticalLaptop
              ? 'border-emerald-400 bg-emerald-400/15 text-emerald-300 font-bold'
              : 'border-rose-400/40 bg-rose-500/10 text-rose-300'
          }`}
        >
          {hasVerticalLaptop ? '✓ Vertical Laptop Stand (3.5" footprint)' : 'Flat Open Laptop (14" footprint)'}
        </button>
      </div>

      {/* Live Width Bar */}
      <div className="mb-6 p-4 rounded-xl border border-white/10 bg-[#07090f]">
        <div className="flex justify-between text-[11px] font-mono mb-2">
          <span className="text-slate-300">
            Desktop Width Occupancy: <strong>{totalOccupiedIn}&quot;</strong> / {deskWidthIn}&quot;
          </span>
          <span className={fitsComfortably ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
            {spareMarginIn >= 0 ? `${spareMarginIn}" Free Margin` : `${Math.abs(spareMarginIn)}" OVERFLOW`}
          </span>
        </div>
        <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-white/10">
          <div
            className={`h-full transition-all duration-300 ${
              fitsComfortably ? 'bg-gradient-to-r from-amber-400 to-emerald-400' : 'bg-rose-500'
            }`}
            style={{ width: `${usedPct}%` }}
          />
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl border border-white/10 bg-[#07090f] mb-5">
        <div>
          <div className="text-[10px] font-mono uppercase text-slate-400">Optimal Desk Mat Fit</div>
          <div className="text-lg sm:text-xl font-black text-amber-400 mt-1 font-mono">
            {recommendedMat}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Covers keyboard ({kb.widthIn}&quot;) + {mouseZoneIn}&quot; mouse sweep cleanly.
          </p>
        </div>

        <div>
          <div className="text-[10px] font-mono uppercase text-slate-400">Active Input Zone</div>
          <div className="text-lg sm:text-xl font-black text-white mt-1 font-mono">
            {requiredActiveZoneIn}&quot; ({Math.round(requiredActiveZoneIn * 2.54)} cm)
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Keyboard + unrestricted horizontal mouse pad travel.
          </p>
        </div>

        <div>
          <div className="text-[10px] font-mono uppercase text-slate-400">Clearance Verdict</div>
          <div className={`text-lg sm:text-xl font-black mt-1 font-mono ${fitsComfortably ? 'text-emerald-400' : 'text-rose-400'}`}>
            {fitsComfortably ? 'CLEAN FIT' : 'CROWDED DESK'}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            {fitsComfortably
              ? 'Balanced symmetrical framing achieved.'
              : 'Dock laptop vertically or step down to 75% board.'}
          </p>
        </div>
      </div>

      {/* Recommendation Strip */}
      <div className="p-4 rounded-xl border border-white/10 bg-[#080b12] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-start gap-2.5 text-xs text-slate-300">
          {fitsComfortably ? (
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
          ) : (
            <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
          )}
          <span>
            {hasVerticalLaptop
              ? 'Vertical docking saves 10.5" of horizontal workspace width compared to keeping a laptop flat.'
              : 'Switching to a Vertical Aluminum Laptop Dock immediately reclaims 10.5" of desk real estate.'}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 text-[11px] font-mono shrink-0">
          <a
            href="/#product-leather-felt-desk-mat"
            className="px-3 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-bold hover:bg-amber-300 transition inline-flex items-center gap-1"
          >
            <span>XXL Leather/Felt Mat</span>
            <ArrowRight className="h-3 w-3" />
          </a>
          <a
            href={`/#product-${kb.matchSlug}`}
            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/15 text-white hover:border-amber-400 transition"
          >
            <span>75% Mechanical Board</span>
          </a>
        </div>
      </div>
    </div>
  );
}
