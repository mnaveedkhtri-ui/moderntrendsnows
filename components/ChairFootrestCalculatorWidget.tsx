'use client';

import React, { useState } from 'react';
import { Armchair, Ruler, CheckCircle2, AlertTriangle, Sparkles, ArrowRight } from 'lucide-react';
import { sound } from '../lib/sound';

export default function ChairFootrestCalculatorWidget() {
  const [unit, setUnit] = useState<'imperial' | 'metric'>('imperial');
  const [heightCm, setHeightCm] = useState<number>(173); // 5ft 8in
  const [shoeInches, setShoeInches] = useState<number>(0.5);
  const [deskHeightIn, setDeskHeightIn] = useState<number>(29.0);
  const [mode, setMode] = useState<'upright' | 'reclined' | 'lounge'>('upright');

  // Effective stature in inches
  const heightIn = heightCm / 2.54 + shoeInches;

  // ISO 9241-5 / BIFMA popliteal seat height (floor-to-underside-of-thigh clearance)
  const idealPoplitealSeatIn = +(heightIn * 0.252).toFixed(1);

  // Neutral elbow-to-floor height needed to match desktop without shrugging shoulders
  const elbowClearance = mode === 'upright' ? 9.5 : mode === 'reclined' ? 8.8 : 8.2;
  const requiredSeatForDeskIn = +(deskHeightIn - elbowClearance).toFixed(1);

  // Footrest lift required when desk forces chair higher than ideal popliteal height
  const rawLiftIn = Math.max(0, requiredSeatForDeskIn - idealPoplitealSeatIn);
  const footrestLiftIn = +rawLiftIn.toFixed(1);
  const footrestLiftCm = +(footrestLiftIn * 2.54).toFixed(1);

  // Optimal knee & tilt angle by posture mode
  const kneeAngleLabel =
    mode === 'upright' ? '92° - 100°' : mode === 'reclined' ? '105° - 115°' : '125° - 135°';
  const tiltRecLabel =
    mode === 'upright'
      ? '10° - 15° Floor Rocking Footrest'
      : mode === 'reclined'
      ? '18° Tilted Platform or Half-Extended Rest'
      : 'Built-In Retractable Chair Footrest';

  // Ideal desk height if user has a motorized standing desk instead
  const idealDeskHeightIn = +(idealPoplitealSeatIn + elbowClearance).toFixed(1);

  const feet = Math.floor(heightCm / 2.54 / 12);
  const inches = Math.round(heightCm / 2.54 - feet * 12);

  const fmtLen = (inchVal: number) =>
    unit === 'imperial' ? `${inchVal.toFixed(1)}"` : `${(inchVal * 2.54).toFixed(1)} cm`;

  return (
    <div className="my-8 rounded-2xl border-2 border-amber-400/40 bg-gradient-to-b from-[#101424] to-[#0a0d16] p-5 sm:p-8 shadow-2xl text-left">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400">
            <Armchair className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-xl font-black text-white tracking-tight">
              Ergonomic Office Chair &amp; Footrest Height Calculator
            </h3>
            <p className="text-[11px] font-mono text-amber-300/80">
              ISO 9241-5 &amp; ANSI/BIFMA X5.1 Popliteal &amp; Hip-Angle Engine
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
            Inches
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

      {/* Input Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="chair-stature" className="text-xs font-mono text-slate-300 font-bold uppercase">
                Your Height ({feet}&apos;{inches}&quot; / {heightCm} cm)
              </label>
              <span className="text-xs font-mono text-amber-400 font-bold">{heightCm} cm</span>
            </div>
            <input
              id="chair-stature"
              type="range"
              min={150}
              max={200}
              value={heightCm}
              onChange={(e) => setHeightCm(Number(e.target.value))}
              className="w-full accent-amber-400"
            />
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="desk-surface" className="text-xs font-mono text-slate-300 font-bold uppercase">
                Current Desk Height (Standard Fixed = 29.0&quot;)
              </label>
              <span className="text-xs font-mono text-amber-400 font-bold">{fmtLen(deskHeightIn)}</span>
            </div>
            <input
              id="desk-surface"
              type="range"
              min={24}
              max={33}
              step={0.5}
              value={deskHeightIn}
              onChange={(e) => setDeskHeightIn(Number(e.target.value))}
              className="w-full accent-amber-400"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="text-xs font-mono text-slate-300 font-bold uppercase mb-2.5">
              Footwear Inside Workspace
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: 'Barefoot (0")', val: 0 },
                { label: 'Slippers (0.5")', val: 0.5 },
                { label: 'Sneakers (1.0")', val: 1.0 },
              ].map((opt) => (
                <button
                  key={opt.val}
                  type="button"
                  onClick={() => {
                    sound.playTick();
                    setShoeInches(opt.val);
                  }}
                  className={`py-2 px-2 rounded-lg text-[11px] font-mono border transition ${
                    shoeInches === opt.val
                      ? 'bg-amber-400/20 border-amber-400 text-amber-300 font-bold'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="text-xs font-mono text-slate-300 font-bold uppercase mb-2.5">
              Posture Mode &amp; Backrest Angle
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { key: 'upright', label: 'Task 95°' },
                { key: 'reclined', label: 'Ergonomic 110°' },
                { key: 'lounge', label: 'Rest 130°' },
              ].map((m) => (
                <button
                  key={m.key}
                  type="button"
                  onClick={() => {
                    sound.playTick();
                    setMode(m.key as 'upright' | 'reclined' | 'lounge');
                  }}
                  className={`py-2 px-2 rounded-lg text-[11px] font-mono border transition ${
                    mode === m.key
                      ? 'bg-emerald-400/20 border-emerald-400 text-emerald-300 font-bold'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="p-4 rounded-xl bg-[#07090e] border border-white/10">
          <div className="text-[10px] font-mono uppercase text-slate-400">Natural Seat Height</div>
          <div className="text-2xl font-black text-white mt-1 font-mono">{fmtLen(idealPoplitealSeatIn)}</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Popliteal crease neutral</div>
        </div>

        <div className="p-4 rounded-xl bg-[#07090e] border border-amber-400/30">
          <div className="text-[10px] font-mono uppercase text-amber-300">Desk-Matched Seat</div>
          <div className="text-2xl font-black text-amber-400 mt-1 font-mono">{fmtLen(requiredSeatForDeskIn)}</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Keeps shoulders relaxed</div>
        </div>

        <div
          className={`p-4 rounded-xl border ${
            footrestLiftIn > 0.5
              ? 'bg-rose-500/10 border-rose-500/35'
              : 'bg-emerald-500/10 border-emerald-500/35'
          }`}
        >
          <div className="text-[10px] font-mono uppercase text-slate-300">Footrest Lift Needed</div>
          <div
            className={`text-2xl font-black mt-1 font-mono ${
              footrestLiftIn > 0.5 ? 'text-rose-400' : 'text-emerald-400'
            }`}
          >
            {footrestLiftIn > 0.5 ? `+${fmtLen(footrestLiftIn)}` : '0" (Optional)'}
          </div>
          <div className="text-[11px] text-slate-400 mt-0.5">
            {footrestLiftIn > 0.5 ? `${footrestLiftCm} cm elevation needed` : 'Heels stay flat on floor'}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#07090e] border border-emerald-500/30">
          <div className="text-[10px] font-mono uppercase text-emerald-300">Target Knee Angle</div>
          <div className="text-xl font-black text-emerald-400 mt-1 font-mono">{kneeAngleLabel}</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Ideal desk: {fmtLen(idealDeskHeightIn)}</div>
        </div>
      </div>

      {/* Actionable Ergonomic Verdict */}
      <div className="p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase">
            {footrestLiftIn > 0.5 ? (
              <AlertTriangle className="h-4 w-4 text-amber-400" />
            ) : (
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            )}
            <span>Recommended Footrest Hardware: {tiltRecLabel}</span>
          </div>
          <p className="text-xs text-slate-300 font-light leading-relaxed">
            {mode === 'lounge'
              ? 'At 125°-135° recline, an office chair with a padded retractable leg rest distributes full calf weight and drops lower lumbar pressure. Use a wireless keyboard lapboard or pause heavy mouse work while fully extended.'
              : footrestLiftIn > 0.5
              ? `Because your ${deskHeightIn}" desk forces your seat ${footrestLiftIn}" above your natural leg length, placing feet flat on the floor cuts popliteal blood flow behind the knees. Elevate your feet by ~${footrestLiftIn}" (${footrestLiftCm} cm) on a tilted floor footrest.`
              : 'Your desk height aligns closely with your natural popliteal leg height. Use a rocking under-desk footrest during long calls or extend a built-in chair footrest when reclining past 115°.'}
          </p>
        </div>
        <a
          href="/#catalog"
          className="shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs px-4 py-2.5 transition font-mono"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>View Chairs &amp; Footrests</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
