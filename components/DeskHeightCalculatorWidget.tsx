'use client';

import React, { useState } from 'react';
import { Ruler, CheckCircle2, AlertTriangle, ArrowRight, Monitor, Armchair } from 'lucide-react';
import { sound } from '../lib/sound';

export default function DeskHeightCalculatorWidget() {
  const [unit, setUnit] = useState<'imperial' | 'metric'>('imperial');
  const [heightCm, setHeightCm] = useState<number>(175); // ~5ft 9in
  const [shoeInches, setShoeInches] = useState<number>(0.5);
  const [posture, setPosture] = useState<'upright' | 'reclined'>('upright');
  const [monitorSize, setMonitorSize] = useState<number>(27);

  // Anthropometric ISO 9241-5 & ANSI/BIFMA G1 ratios
  const heightIn = heightCm / 2.54 + shoeInches;
  const totalCm = heightIn * 2.54;

  // Sitting geometry (inches)
  const chairSeatIn = +(heightIn * 0.252).toFixed(1);
  const sittingElbowClearance = posture === 'upright' ? 9.5 : 8.7;
  const sittingDeskIn = +(chairSeatIn + sittingElbowClearance).toFixed(1);
  const sittingDeskCm = +(sittingDeskIn * 2.54).toFixed(1);

  // Standing geometry (inches)
  const standingDeskIn = +(heightIn * 0.618).toFixed(1);
  const standingDeskCm = +(standingDeskIn * 2.54).toFixed(1);

  // Eye level & monitor riser check
  const seatedEyeHeightAboveSeat = heightIn * 0.44;
  const seatedEyeAboveDesk = +(seatedEyeHeightAboveSeat - sittingElbowClearance).toFixed(1);
  // Top bezel of screen should sit right at eye height; standard stand lifts top bezel ~14-18 in depending on size
  const estScreenHeightMap: Record<number, number> = { 24: 13.5, 27: 15.0, 32: 17.2, 34: 15.5, 49: 15.8 };
  const panelHeight = estScreenHeightMap[monitorSize] || 15.0;
  const stockStandBottomGap = 3.5;
  const stockTopBezelAboveDesk = stockStandBottomGap + panelHeight;
  const neededRiserIn = +(Math.max(0, seatedEyeAboveDesk - stockTopBezelAboveDesk)).toFixed(1);

  // Standard 29" fixed desk comparison
  const standardDeskIn = 29.0;
  const footrestGapIn = +(Math.max(0, standardDeskIn - sittingDeskIn)).toFixed(1);

  const feet = Math.floor(heightCm / 2.54 / 12);
  const inches = Math.round(heightCm / 2.54 - feet * 12);

  return (
    <div className="my-8 rounded-2xl border-2 border-amber-400/40 bg-gradient-to-b from-[#101424] to-[#0a0d16] p-5 sm:p-8 shadow-2xl text-left">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400">
            <Ruler className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-xl font-black text-white tracking-tight">
              Ergonomic Desk Height &amp; Eye-Level Calculator
            </h3>
            <p className="text-[11px] font-mono text-amber-300/80">
              ISO 9241-5 &amp; ANSI/BIFMA G1 Anthropometric Ratio Engine
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => {
              sound.playTick();
              setUnit('imperial');
            }}
            className={`px-3 py-1 rounded-lg font-mono text-[11px] border transition ${
              unit === 'imperial'
                ? 'bg-amber-400 text-slate-950 font-bold border-amber-400'
                : 'bg-white/5 text-slate-300 border-white/10'
            }`}
          >
            Feet / Inches
          </button>
          <button
            type="button"
            onClick={() => {
              sound.playTick();
              setUnit('metric');
            }}
            className={`px-3 py-1 rounded-lg font-mono text-[11px] border transition ${
              unit === 'metric'
                ? 'bg-amber-400 text-slate-950 font-bold border-amber-400'
                : 'bg-white/5 text-slate-300 border-white/10'
            }`}
          >
            Centimeters
          </button>
        </div>
      </div>

      {/* Inputs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Stature Slider */}
        <div>
          <div className="flex justify-between text-xs font-mono mb-2">
            <span className="text-slate-300">Your Height (Barefoot)</span>
            <span className="text-amber-400 font-bold">
              {feet}&apos;{inches}&quot; ({heightCm} cm)
            </span>
          </div>
          <input
            type="range"
            min="150"
            max="200"
            step="1"
            value={heightCm}
            onChange={(e) => {
              sound.playTick();
              setHeightCm(Number(e.target.value));
            }}
            className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
            <span>4&apos;11&quot; (150 cm)</span>
            <span>5&apos;9&quot; (175 cm)</span>
            <span>6&apos;7&quot; (200 cm)</span>
          </div>
        </div>

        {/* Footwear & Monitor Size */}
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <label className="font-mono uppercase text-slate-400 text-[10px] block mb-1.5">
              Footwear Allowance
            </label>
            <select
              value={shoeInches}
              onChange={(e) => {
                sound.playTick();
                setShoeInches(Number(e.target.value));
              }}
              className="w-full rounded-xl border border-white/10 bg-[#07090f] px-3 py-2 text-xs text-white font-mono focus:outline-none focus:border-amber-400"
            >
              <option value={0}>Barefoot / Socks (+0&quot;)</option>
              <option value={0.5}>Slippers / Indoor (+0.5&quot;)</option>
              <option value={1}>Sneakers (+1.0&quot;)</option>
              <option value={1.5}>Standing Mat + Shoes (+1.5&quot;)</option>
            </select>
          </div>

          <div>
            <label className="font-mono uppercase text-slate-400 text-[10px] block mb-1.5">
              Primary Monitor Size
            </label>
            <select
              value={monitorSize}
              onChange={(e) => {
                sound.playTick();
                setMonitorSize(Number(e.target.value));
              }}
              className="w-full rounded-xl border border-white/10 bg-[#07090f] px-3 py-2 text-xs text-white font-mono focus:outline-none focus:border-amber-400"
            >
              <option value={24}>24&quot; Standard</option>
              <option value={27}>27&quot; QHD / 4K</option>
              <option value={32}>32&quot; 4K Creator</option>
              <option value={34}>34&quot; Ultrawide</option>
              <option value={49}>49&quot; Super Ultrawide</option>
            </select>
          </div>
        </div>
      </div>

      {/* Posture Toggle */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="text-[11px] font-mono text-slate-400 mr-1">Seated Posture:</span>
        <button
          type="button"
          onClick={() => {
            sound.playTick();
            setPosture('upright');
          }}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition ${
            posture === 'upright'
              ? 'border-amber-400 bg-amber-400/15 text-white font-bold'
              : 'border-white/10 bg-[#07090f] text-slate-400 hover:text-white'
          }`}
        >
          90 deg Active Task Upright
        </button>
        <button
          type="button"
          onClick={() => {
            sound.playTick();
            setPosture('reclined');
          }}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition ${
            posture === 'reclined'
              ? 'border-amber-400 bg-amber-400/15 text-white font-bold'
              : 'border-white/10 bg-[#07090f] text-slate-400 hover:text-white'
          }`}
        >
          105 deg Relaxed Reclined
        </button>
      </div>

      {/* 4 Key Output Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-xl border border-white/10 bg-[#07090f]">
        <div>
          <div className="text-[10px] font-mono uppercase text-slate-400">Sitting Desk Height</div>
          <div className="text-2xl font-black text-amber-400 mt-1 font-mono">
            {unit === 'imperial' ? `${sittingDeskIn}"` : `${sittingDeskCm} cm`}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            {unit === 'imperial' ? `${sittingDeskCm} cm` : `${sittingDeskIn}"`} for 90 deg neutral elbows.
          </p>
        </div>

        <div>
          <div className="text-[10px] font-mono uppercase text-slate-400">Standing Desk Height</div>
          <div className="text-2xl font-black text-emerald-400 mt-1 font-mono">
            {unit === 'imperial' ? `${standingDeskIn}"` : `${standingDeskCm} cm`}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            {unit === 'imperial' ? `${standingDeskCm} cm` : `${standingDeskIn}"`} at total height {Math.round(totalCm)} cm.
          </p>
        </div>

        <div>
          <div className="text-[10px] font-mono uppercase text-slate-400">Chair Seat Height</div>
          <div className="text-2xl font-black text-white mt-1 font-mono">
            {unit === 'imperial' ? `${chairSeatIn}"` : `${(chairSeatIn * 2.54).toFixed(1)} cm`}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Knees at 90-100 deg, feet flat on floor.
          </p>
        </div>

        <div>
          <div className="text-[10px] font-mono uppercase text-slate-400">Monitor Top Eye Level</div>
          <div className="text-2xl font-black text-cyan-400 mt-1 font-mono">
            +{unit === 'imperial' ? `${seatedEyeAboveDesk}"` : `${(seatedEyeAboveDesk * 2.54).toFixed(1)} cm`}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            {neededRiserIn > 0.5
              ? `Add a ${neededRiserIn}" (${(neededRiserIn * 2.54).toFixed(0)} cm) desk shelf/riser.`
              : 'Stock stand clears eye-level target.'}
          </p>
        </div>
      </div>

      {/* Diagnostic Warning + Hardware Links */}
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div
          className={`p-4 rounded-xl border text-xs leading-relaxed flex items-start gap-3 ${
            footrestGapIn > 1.2
              ? 'border-amber-400/30 bg-amber-400/05 text-slate-200'
              : 'border-emerald-500/30 bg-emerald-500/05 text-slate-200'
          }`}
        >
          {footrestGapIn > 1.2 ? (
            <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
          ) : (
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
          )}
          <div>
            <div className="font-mono font-bold text-white uppercase text-[11px] mb-1">
              Standard 29&quot; Fixed Desk Reality Check
            </div>
            {footrestGapIn > 1.2 ? (
              <p>
                A fixed 29&quot; office desk is <strong>{footrestGapIn}&quot; too high</strong> for your seated elbow geometry. Raise your chair by {footrestGapIn}&quot; and place a <strong>{footrestGapIn}&quot; footrest</strong> under your feet, or switch to a sit-stand desk set to {sittingDeskIn}&quot;.
              </p>
            ) : (
              <p>
                Your seated elbow height ({sittingDeskIn}&quot;) sits cleanly within range of standard 28-29.5&quot; desks. Focus on aligning your {monitorSize}&quot; monitor top bezel to +{seatedEyeAboveDesk}&quot; above the desk surface.
              </p>
            )}
          </div>
        </div>

        <div className="p-4 rounded-xl border border-white/10 bg-[#080b12] flex flex-col justify-between gap-3">
          <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-amber-400 uppercase">
            <Monitor className="h-3.5 w-3.5" />
            <span>Matched Ergonomic Hardware</span>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] font-mono">
            <a
              href="/#product-walnut-dual-monitor-stand"
              className="px-3 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-bold hover:bg-amber-300 transition inline-flex items-center gap-1"
            >
              <span>Walnut Monitor Shelf (+4.3&quot;)</span>
              <ArrowRight className="h-3 w-3" />
            </a>
            <a
              href="/#product-ergonomic-split-wrist-rest"
              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/15 text-white hover:border-amber-400 transition inline-flex items-center gap-1"
            >
              <span>Split Wrist Rest</span>
            </a>
            <a
              href="/#product-screenbar-monitor-light"
              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/15 text-white hover:border-amber-400 transition inline-flex items-center gap-1"
            >
              <span>Anti-Glare ScreenBar</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
