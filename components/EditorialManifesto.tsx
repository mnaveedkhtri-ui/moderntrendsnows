import React from 'react';
import { ShieldCheck, Compass, Sparkles, Feather } from 'lucide-react';

export default function EditorialManifesto() {
  return (
    <section id="curation-manifesto" className="py-16 border-t border-slate-800/80 bg-[#06080c]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-bold tracking-widest uppercase text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            Our Curatorial Standard
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-3">
            The Anti-Clutter Philosophy
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
            99% of consumer electronics and trendy home decor belong in a landfill. We exist to curate the 1% worth keeping on your desk for a decade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-800/90 bg-[#0c0e15] p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400 mb-4">
              <Feather className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-2">Honest Materials Only</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We prioritize sandblasted aluminum, weighted optical glass, Italian grain leather, and solid hardwoods over squeaky hollow plastics.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800/90 bg-[#0c0e15] p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400 mb-4">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-2">Tested In The Studio</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every lamp, dock, and desk accessory has been stress-tested for heat dissipation, decibel levels, and tactile keycap resistance before entering this archive.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800/90 bg-[#0c0e15] p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400 mb-4">
              <Compass className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-2">Direct Fulfillment</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Zero dropshipping delays or sketchy tracking numbers. Every item routes directly through verified Amazon Prime logistics with 30-day return safety.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
