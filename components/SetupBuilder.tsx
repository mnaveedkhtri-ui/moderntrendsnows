'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, ExternalLink, RefreshCw, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { Product } from '../data/products';
import { sound } from '../lib/sound';

interface SetupBuilderProps {
  products: Product[];
  onQuickView: (product: Product) => void;
}

export default function SetupBuilder({ products, onQuickView }: SetupBuilderProps) {
  // Candidate items by role
  const lightItems = products.filter((p) => p.category === 'Lighting');
  const techItems = products.filter((p) => p.category === 'Workspace' || p.category === 'Gadgets');
  const livingItems = products.filter((p) => p.category === 'Living' || p.id === 'anti-gravity-lamp');

  const [selectedLight, setSelectedLight] = useState<Product>(
    lightItems[0] || products[0]
  );
  const [selectedTech, setSelectedTech] = useState<Product>(
    techItems[0] || products[1]
  );
  const [selectedLiving, setSelectedLiving] = useState<Product>(
    livingItems[0] || products[2]
  );

  const bundleItems = [selectedLight, selectedTech, selectedLiving];
  const totalPrice = bundleItems.reduce((acc, item) => acc + item.price, 0);
  const totalCompare = bundleItems.reduce((acc, item) => acc + item.compareAtPrice, 0);
  const totalSavings = totalCompare - totalPrice;
  const savingsPct = Math.round((totalSavings / totalCompare) * 100);

  // Preset Configurations
  const applyPreset = (presetName: 'dark-cyber' | 'warm-oak' | 'minimal-pro') => {
    sound.playChime();
    if (presetName === 'dark-cyber') {
      const l = products.find((p) => p.id === 'sound-reactive-rhythm-bar') || lightItems[0];
      const t = products.find((p) => p.id === 'cyberpunk-gan-charger') || techItems[0];
      const k = products.find((p) => p.id === 'kinetic-desk-spinner') || livingItems[0];
      setSelectedLight(l);
      setSelectedTech(t);
      setSelectedLiving(k);
    } else if (presetName === 'warm-oak') {
      const l = products.find((p) => p.id === 'mushroom-glass-lamp') || lightItems[0];
      const t = products.find((p) => p.id === 'magnetic-cable-organizer') || techItems[0];
      const k = products.find((p) => p.id === 'retro-flip-clock') || livingItems[0];
      setSelectedLight(l);
      setSelectedTech(t);
      setSelectedLiving(k);
    } else {
      const l = products.find((p) => p.id === 'screenbar-monitor-light') || lightItems[0];
      const t = products.find((p) => p.id === 'magsafe-charging-stand') || techItems[0];
      const k = products.find((p) => p.id === 'brass-gyroscope-orb') || livingItems[0];
      setSelectedLight(l);
      setSelectedTech(t);
      setSelectedLiving(k);
    }
  };

  return (
    <section id="setup-builder" className="py-14 sm:py-20 border-b border-white/10 bg-[#06080e] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/05 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[11px] font-mono font-bold text-amber-300 mb-2">
              <Sparkles className="h-3 w-3 text-amber-400 animate-spin" />
              <span>Interactive Spatial Studio</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Curate Your Custom 3-Piece Setup
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl font-light">
              Mix and match acoustic lighting, precision docks, and kinetic desk objects. Model live bundle pricing with verified Amazon Prime 2-day delivery.
            </p>
          </div>

          {/* Quick Presets */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="text-slate-500 text-[11px] mr-1">Quick Presets:</span>
            <button
              onClick={() => applyPreset('minimal-pro')}
              className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:border-amber-400/60 hover:text-amber-300 transition text-[11px]"
            >
              Minimal Pro
            </button>
            <button
              onClick={() => applyPreset('warm-oak')}
              className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:border-amber-400/60 hover:text-amber-300 transition text-[11px]"
            >
              Mid-Century Warm
            </button>
            <button
              onClick={() => applyPreset('dark-cyber')}
              className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:border-amber-400/60 hover:text-amber-300 transition text-[11px]"
            >
              Cyber Dark
            </button>
          </div>
        </div>

        {/* 3 Interactive Slots Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          
          {/* Slot 1: Ambient Optics */}
          <div className="rounded-2xl border border-white/10 bg-[#0b0e18] p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                <span className="text-amber-400 font-bold uppercase tracking-wider">Slot 01 : Ambient Light</span>
                <span className="text-[10px] text-slate-500">{lightItems.length} Options</span>
              </div>

              {/* Selected Visual */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-900 border border-white/5 mb-3 group cursor-pointer" onClick={() => onQuickView(selectedLight)}>
                <Image
                  src={selectedLight.imageUrl}
                  alt={selectedLight.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2 left-2 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono text-white px-2 py-0.5 border border-white/10">
                  ${selectedLight.price.toFixed(2)}
                </span>
              </div>

              <h3 className="text-sm font-bold text-white line-clamp-1 mb-1">
                {selectedLight.title}
              </h3>
              <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed mb-4">
                {selectedLight.tagline}
              </p>
            </div>

            {/* Dropdown Selector */}
            <select
              value={selectedLight.id}
              onChange={(e) => {
                const found = lightItems.find((p) => p.id === e.target.value);
                if (found) {
                  sound.playTick();
                  setSelectedLight(found);
                }
              }}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              {lightItems.map((p) => (
                <option key={p.id} value={p.id} className="bg-[#0b0e18] text-white">
                  {p.title} (${p.price.toFixed(2)})
                </option>
              ))}
            </select>
          </div>

          {/* Slot 2: Tech Dock */}
          <div className="rounded-2xl border border-white/10 bg-[#0b0e18] p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                <span className="text-amber-400 font-bold uppercase tracking-wider">Slot 02 : Workspace Dock</span>
                <span className="text-[10px] text-slate-500">{techItems.length} Options</span>
              </div>

              {/* Selected Visual */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-900 border border-white/5 mb-3 group cursor-pointer" onClick={() => onQuickView(selectedTech)}>
                <Image
                  src={selectedTech.imageUrl}
                  alt={selectedTech.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2 left-2 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono text-white px-2 py-0.5 border border-white/10">
                  ${selectedTech.price.toFixed(2)}
                </span>
              </div>

              <h3 className="text-sm font-bold text-white line-clamp-1 mb-1">
                {selectedTech.title}
              </h3>
              <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed mb-4">
                {selectedTech.tagline}
              </p>
            </div>

            {/* Dropdown Selector */}
            <select
              value={selectedTech.id}
              onChange={(e) => {
                const found = techItems.find((p) => p.id === e.target.value);
                if (found) {
                  sound.playTick();
                  setSelectedTech(found);
                }
              }}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              {techItems.map((p) => (
                <option key={p.id} value={p.id} className="bg-[#0b0e18] text-white">
                  {p.title} (${p.price.toFixed(2)})
                </option>
              ))}
            </select>
          </div>

          {/* Slot 3: Living & Kinetic Object */}
          <div className="rounded-2xl border border-white/10 bg-[#0b0e18] p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                <span className="text-amber-400 font-bold uppercase tracking-wider">Slot 03 : Kinetic Object</span>
                <span className="text-[10px] text-slate-500">{livingItems.length} Options</span>
              </div>

              {/* Selected Visual */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-900 border border-white/5 mb-3 group cursor-pointer" onClick={() => onQuickView(selectedLiving)}>
                <Image
                  src={selectedLiving.imageUrl}
                  alt={selectedLiving.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2 left-2 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono text-white px-2 py-0.5 border border-white/10">
                  ${selectedLiving.price.toFixed(2)}
                </span>
              </div>

              <h3 className="text-sm font-bold text-white line-clamp-1 mb-1">
                {selectedLiving.title}
              </h3>
              <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed mb-4">
                {selectedLiving.tagline}
              </p>
            </div>

            {/* Dropdown Selector */}
            <select
              value={selectedLiving.id}
              onChange={(e) => {
                const found = livingItems.find((p) => p.id === e.target.value);
                if (found) {
                  sound.playTick();
                  setSelectedLiving(found);
                }
              }}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              {livingItems.map((p) => (
                <option key={p.id} value={p.id} className="bg-[#0b0e18] text-white">
                  {p.title} (${p.price.toFixed(2)})
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Live Calculation & Direct Checkout Bar */}
        <div className="rounded-2xl border border-amber-400/40 bg-gradient-to-r from-[#121624] via-[#0f131f] to-[#121624] p-5 sm:p-7 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Pricing Math */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 w-full md:w-auto text-left">
            <div>
              <span className="text-[11px] font-mono text-slate-400 block uppercase">Curated 3-Piece Total</span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-2xl sm:text-3xl font-black text-white font-mono">
                  ${totalPrice.toFixed(2)}
                </span>
                <span className="text-xs sm:text-sm text-slate-500 line-through font-mono">
                  ${totalCompare.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="font-bold flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5" />
                Bundle Savings: ${totalSavings.toFixed(2)} ({savingsPct}% Off MSRP)
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-end">
            <a
              href={selectedLight.amazonUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono transition flex items-center gap-1.5"
            >
              <span>Item 1 ({selectedLight.price.toFixed(0)}$)</span>
              <ExternalLink className="h-3 w-3 text-slate-400" />
            </a>
            <a
              href={selectedTech.amazonUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono transition flex items-center gap-1.5"
            >
              <span>Item 2 ({selectedTech.price.toFixed(0)}$)</span>
              <ExternalLink className="h-3 w-3 text-slate-400" />
            </a>
            <a
              href={selectedLiving.amazonUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono transition flex items-center gap-1.5"
            >
              <span>Item 3 ({selectedLiving.price.toFixed(0)}$)</span>
              <ExternalLink className="h-3 w-3 text-slate-400" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
