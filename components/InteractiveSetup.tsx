'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Sparkles, Tag, Plus } from 'lucide-react';
import { Product } from '../data/products';

interface InteractiveSetupProps {
  onQuickView: (product: Product) => void;
  products: Product[];
}

interface Hotspot {
  id: string;
  productId: string;
  label: string;
  top: string;
  left: string;
}

export default function InteractiveSetup({ onQuickView, products }: InteractiveSetupProps) {
  const [activeHotspot, setActiveHotspot] = useState<string | null>('spot-1');

  const hotspots: Hotspot[] = [
    {
      id: 'spot-1',
      productId: 'anti-gravity-lamp',
      label: 'Anti-Gravity Levitating Lamp',
      top: '32%',
      left: '18%',
    },
    {
      id: 'spot-2',
      productId: 'screenbar-monitor-light',
      label: 'Asymmetric Optical ScreenBar',
      top: '18%',
      left: '52%',
    },
    {
      id: 'spot-3',
      productId: 'magsafe-charging-stand',
      label: '3-in-1 Floating MagSafe Dock',
      top: '55%',
      left: '78%',
    },
    {
      id: 'spot-4',
      productId: 'leather-felt-desk-mat',
      label: 'Top-Grain Leather Desk Mat',
      top: '72%',
      left: '45%',
    },
  ];

  return (
    <section className="py-16 border-b border-white/10 bg-[#090b10]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title Lockup */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            Interactive Lookbook // Volume 01
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-3">
            Shop The Studio Setup
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 font-normal leading-relaxed">
            Click on any illuminated hotspot below to inspect the exact tactile object integrated into this creative workspace.
          </p>
        </div>

        {/* Interactive Desk Image Container */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-white/15 bg-slate-900 shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=1800&q=85"
            alt="Studio Desk Setup Lookbook"
            fill
            className="object-cover object-center brightness-75"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

          {/* Hotspots */}
          {hotspots.map((spot) => {
            const product = products.find((p) => p.id === spot.productId);
            const isSelected = activeHotspot === spot.id;

            return (
              <div
                key={spot.id}
                style={{ top: spot.top, left: spot.left }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
              >
                {/* Ping / Button */}
                <button
                  onClick={() => setActiveHotspot(isSelected ? null : spot.id)}
                  className={`group relative flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ${
                    isSelected
                      ? 'bg-amber-400 text-slate-950 scale-110 shadow-lg shadow-amber-400/40'
                      : 'bg-black/80 text-white border border-white/30 hover:scale-110 hover:border-amber-400'
                  }`}
                >
                  <span className="absolute -inset-1 rounded-full bg-amber-400/30 animate-ping opacity-60" />
                  <Plus className={`h-4 w-4 transition-transform duration-300 ${isSelected ? 'rotate-45' : ''}`} />
                </button>

                {/* Popover Preview Card */}
                {isSelected && product && (
                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 rounded-2xl border border-white/20 bg-[#0d1017]/95 p-3.5 shadow-2xl backdrop-blur-xl animate-in zoom-in-95 duration-200 text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="rounded bg-amber-400/20 px-1.5 py-0.5 text-[9px] font-mono font-bold text-amber-300 uppercase">
                        {product.category}
                      </span>
                      <span className="text-xs font-mono font-bold text-white ml-auto">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-white leading-snug mb-1">
                      {product.title}
                    </h4>

                    <p className="text-[10px] text-slate-400 line-clamp-2 leading-relaxed mb-3">
                      {product.tagline}
                    </p>

                    <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                      <button
                        onClick={() => onQuickView(product)}
                        className="flex-1 rounded-lg bg-white/10 py-1.5 text-[10px] font-bold text-white hover:bg-white/20 transition text-center"
                      >
                        Inspect
                      </button>
                      <a
                        href={product.amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1 rounded-lg bg-amber-400 py-1.5 text-[10px] font-black text-slate-950 hover:bg-amber-300 transition"
                      >
                        <span>Buy on Amazon</span>
                        <ExternalLink className="h-2.5 w-2.5" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Bottom Callout */}
          <div className="absolute bottom-6 left-6 right-6 hidden sm:flex items-center justify-between text-xs text-white/80 font-mono bg-black/60 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
            <span>STUDIO LOOKBOOK NO. 01 — THE SHADOW REFINERY DESK</span>
            <span className="text-amber-400">Tap Hotspots To Shop Direct</span>
          </div>
        </div>
      </div>
    </section>
  );
}
