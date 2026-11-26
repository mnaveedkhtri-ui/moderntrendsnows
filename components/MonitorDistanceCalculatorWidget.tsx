'use client';

import React, { useState } from 'react';
import { Monitor, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';
import { sound } from '../lib/sound';

interface DisplayPreset {
  id: string;
  label: string;
  diagIn: number;
  widthPx: number;
  heightPx: number;
  widthIn: number;
  defaultWeightLbs: number;
}

const DISPLAY_PRESETS: DisplayPreset[] = [
  { id: '24-1080p', label: '24" Full HD (1920x1080)', diagIn: 24, widthPx: 1920, heightPx: 1080, widthIn: 20.9, defaultWeightLbs: 9 },
  { id: '27-1440p', label: '27" QHD (2560x1440)', diagIn: 27, widthPx: 2560, heightPx: 1440, widthIn: 23.5, defaultWeightLbs: 12 },
  { id: '27-4k', label: '27" 4K UHD (3840x2160)', diagIn: 27, widthPx: 3840, heightPx: 2160, widthIn: 23.5, defaultWeightLbs: 13 },
  { id: '32-4k', label: '32" 4K UHD (3840x2160)', diagIn: 32, widthPx: 3840, heightPx: 2160, widthIn: 27.9, defaultWeightLbs: 16 },
  { id: '34-uw', label: '34" Ultrawide (3440x1440)', diagIn: 34, widthPx: 3440, heightPx: 1440, widthIn: 31.5, defaultWeightLbs: 18 },
  { id: '49-suw', label: '49" Super Ultrawide (5120x1440)', diagIn: 49, widthPx: 5120, heightPx: 1440, widthIn: 47.0, defaultWeightLbs: 31 },
];

export default function MonitorDistanceCalculatorWidget() {
  const [presetId, setPresetId] = useState<string>('27-1440p');
  const [monitorCount, setMonitorCount] = useState<1 | 2>(2);
  const [weightPerDisplay, setWeightPerDisplay] = useState<number>(12);
  const [deskMaterial, setDeskMaterial] = useState<'hardwood' | 'mdf' | 'honeycomb'>('mdf');

  const preset = DISPLAY_PRESETS.find((p) => p.id === presetId) || DISPLAY_PRESETS[1];

  const handlePresetChange = (id: string) => {
    sound.playTick();
    setPresetId(id);
    const found = DISPLAY_PRESETS.find((p) => p.id === id);
    if (found) setWeightPerDisplay(found.defaultWeightLbs);
  };

  // Calculations
  const ppi = Math.round(Math.hypot(preset.widthPx, preset.heightPx) / preset.diagIn);
  const retinaDistanceIn = Math.round(3438 / ppi);

  // Horizontal span + 35-40 deg ergonomic FOV arc
  const totalWidthIn = +(preset.widthIn * (preset.diagIn >= 34 ? 1 : monitorCount)).toFixed(1);
  const effectiveDisplayCount = preset.diagIn >= 34 ? 1 : monitorCount;
  const totalWeightLbs = weightPerDisplay * effectiveDisplayCount;

  // Minimum comfortable viewing distance based on diagonal & horizontal FOV
  const minDistIn = Math.max(20, Math.round(totalWidthIn * 0.72));
  const idealDistIn = Math.max(24, Math.min(42, Math.round(totalWidthIn * 0.92)));
  const recommendedDeskDepth = idealDistIn >= 31 ? '30" or Deeper' : idealDistIn >= 25 ? '26" - 30"' : '24"+';

  // C-clamp risk check
  const maxSafeClampLbs: Record<string, number> = {
    hardwood: 55,
    mdf: 32,
    honeycomb: 14,
  };
  const clampLimit = maxSafeClampLbs[deskMaterial];
  const clampSafe = totalWeightLbs <= clampLimit;

  return (
    <div className="my-8 rounded-2xl border-2 border-amber-400/40 bg-gradient-to-b from-[#101424] to-[#0a0d16] p-5 sm:p-8 shadow-2xl text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400">
            <Monitor className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-xl font-black text-white tracking-tight">
              Monitor Viewing Distance, PPI &amp; Desk Load Calculator
            </h3>
            <p className="text-[11px] font-mono text-amber-300/80">
              Retina Optical Acuity &amp; C-Clamp Desktop Structural Load Verifier
            </p>
          </div>
        </div>
        <span className="self-start sm:self-auto px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
          Optical &amp; Load Tool
        </span>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 text-xs">
        <div>
          <label className="font-mono uppercase text-slate-400 text-[10px] block mb-1.5">
            Display Panel &amp; Resolution
          </label>
          <select
            value={presetId}
            onChange={(e) => handlePresetChange(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-[#07090f] px-3 py-2.5 text-xs text-white font-mono focus:outline-none focus:border-amber-400"
          >
            {DISPLAY_PRESETS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-mono uppercase text-slate-400 text-[10px] block mb-1.5">
            Screen Count
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                sound.playTick();
                setMonitorCount(1);
              }}
              className={`py-2.5 rounded-xl border font-mono text-xs transition ${
                monitorCount === 1 || preset.diagIn >= 34
                  ? 'border-amber-400 bg-amber-400/15 text-white font-bold'
                  : 'border-white/10 bg-[#07090f] text-slate-400'
              }`}
            >
              Single
            </button>
            <button
              type="button"
              disabled={preset.diagIn >= 34}
              onClick={() => {
                sound.playTick();
                setMonitorCount(2);
              }}
              className={`py-2.5 rounded-xl border font-mono text-xs transition ${
                preset.diagIn >= 34
                  ? 'opacity-40 cursor-not-allowed border-white/5 bg-[#07090f] text-slate-500'
                  : monitorCount === 2
                  ? 'border-amber-400 bg-amber-400/15 text-white font-bold'
                  : 'border-white/10 bg-[#07090f] text-slate-400'
              }`}
            >
              Dual Side
            </button>
          </div>
        </div>

        <div>
          <label className="font-mono uppercase text-slate-400 text-[10px] block mb-1.5">
            Desk Top Material
          </label>
          <select
            value={deskMaterial}
            onChange={(e) => {
              sound.playTick();
              setDeskMaterial(e.target.value as 'hardwood' | 'mdf' | 'honeycomb');
            }}
            className="w-full rounded-xl border border-white/10 bg-[#07090f] px-3 py-2.5 text-xs text-white font-mono focus:outline-none focus:border-amber-400"
          >
            <option value="hardwood">Solid Hardwood (1.0&quot;+)</option>
            <option value="mdf">Laminate / MDF (0.75&quot;-1.0&quot;)</option>
            <option value="honeycomb">Hollow Honeycomb (IKEA)</option>
          </select>
        </div>

        <div>
          <div className="flex justify-between text-[10px] font-mono mb-1.5">
            <span className="text-slate-400 uppercase">Panel Weight (Each)</span>
            <span className="text-amber-400 font-bold">{weightPerDisplay} lbs</span>
          </div>
          <input
            type="range"
            min="6"
            max="35"
            step="1"
            value={weightPerDisplay}
            onChange={(e) => {
              sound.playTick();
              setWeightPerDisplay(Number(e.target.value));
            }}
            className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer mt-2"
          />
        </div>
      </div>

      {/* Results Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-xl border border-white/10 bg-[#07090f]">
        <div>
          <div className="text-[10px] font-mono uppercase text-slate-400">Optimal Viewing Distance</div>
          <div className="text-2xl font-black text-amber-400 mt-1 font-mono">
            {minDistIn}&quot; - {idealDistIn}&quot;
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            {Math.round(minDistIn * 2.54)} - {Math.round(idealDistIn * 2.54)} cm (desk depth: {recommendedDeskDepth}).
          </p>
        </div>

        <div>
          <div className="text-[10px] font-mono uppercase text-slate-400">Pixel Density / Retina</div>
          <div className="text-2xl font-black text-white mt-1 font-mono">
            {ppi} PPI
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Retina sharpness begins at {retinaDistanceIn}&quot; eye distance.
          </p>
        </div>

        <div>
          <div className="text-[10px] font-mono uppercase text-slate-400">Total Display Span</div>
          <div className="text-2xl font-black text-cyan-400 mt-1 font-mono">
            {totalWidthIn}&quot;
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Requires at least a {totalWidthIn > 44 ? '60" or 72"' : '48" or 55"'} desk width.
          </p>
        </div>

        <div>
          <div className="text-[10px] font-mono uppercase text-slate-400">Combined Load Weight</div>
          <div className={`text-2xl font-black mt-1 font-mono ${clampSafe ? 'text-emerald-400' : 'text-rose-400'}`}>
            {totalWeightLbs} lbs
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            {clampSafe ? 'Safe for standard clamp or shelf' : 'Exceeds bare C-clamp desktop limit'}
          </p>
        </div>
      </div>

      {/* Verdict & Product Recommendation */}
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div
          className={`p-4 rounded-xl border text-xs leading-relaxed flex items-start gap-3 ${
            clampSafe
              ? 'border-emerald-500/30 bg-emerald-500/05 text-slate-200'
              : 'border-rose-500/40 bg-rose-500/10 text-slate-200'
          }`}
        >
          {clampSafe ? (
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
          ) : (
            <AlertTriangle className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
          )}
          <div>
            <div className="font-mono font-bold text-white uppercase text-[11px] mb-1">
              Mount Architecture Verdict
            </div>
            {clampSafe ? (
              <p>
                Your {deskMaterial.toUpperCase()} surface handles {totalWeightLbs} lbs. However, a <strong>Solid Walnut Dual Monitor Shelf</strong> distributes weight across wide steel legs and adds 4.3&quot; height plus under-shelf keyboard storage.
              </p>
            ) : (
              <p>
                <strong>Warning:</strong> Clamping {totalWeightLbs} lbs onto a {deskMaterial} core concentrates cantilever torque on a 3-inch patch and risks desktop crushing. Use a <strong>46&quot; Solid Walnut Dual Monitor Shelf</strong> (100 lb capacity) to spread the weight safely.
              </p>
            )}
          </div>
        </div>

        <div className="p-4 rounded-xl border border-white/10 bg-[#080b12] flex flex-col justify-between gap-3">
          <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-amber-400 uppercase">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Recommended Spatial Hardware</span>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] font-mono">
            <a
              href="/#product-walnut-dual-monitor-stand"
              className="px-3 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-bold hover:bg-amber-300 transition inline-flex items-center gap-1"
            >
              <span>Walnut Dual Monitor Shelf</span>
              <ArrowRight className="h-3 w-3" />
            </a>
            <a
              href="/#product-minimalist-monitor-riser"
              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/15 text-white hover:border-amber-400 transition"
            >
              <span>Aluminum Riser Shelf</span>
            </a>
            <a
              href="/#product-screenbar-monitor-light"
              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/15 text-white hover:border-amber-400 transition"
            >
              <span>Curved ScreenBar</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
