import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const highlights = [
    {
      name: 'Desk Architecture Notes',
      role: 'Optical & Acoustic Profile',
      location: 'Engineering Digest',
      product: 'Anti-Gravity Levitating Water Drop Lamp',
      review:
        'Synchronized stroboscopic LED frequency paired with ultrasonic mist creates a clean visual centerpiece for night focus sessions without audible pump hum.',
      rating: 5,
      date: '2026 Curation',
    },
    {
      name: 'Minimalist Dock Audit',
      role: 'Thermal & Weight Stability',
      location: 'Workspace Standards',
      product: '3-in-1 Aluminum Magnetic Charging Stand',
      review:
        'Weighted anodized base resists lifting when detaching magnetic phones one-handed, consolidating three desktop charging cables into a single StandBy footprint.',
      rating: 5,
      date: '2026 Curation',
    },
    {
      name: 'Optical Ergonomics Note',
      role: 'Glare & LUX Compliance',
      location: 'IES RP-1 Benchmark',
      product: 'Curved ScreenBar Monitor Desk Light',
      review:
        'Asymmetric front-projection optics illuminate the keyboard and desk pad surface directly while preventing reflected screen glare during evening coding shifts.',
      rating: 5,
      date: '2026 Curation',
    },
  ];

  return (
    <section id="reviews" className="py-16 border-b border-white/10 bg-[#07090e]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            Editorial Hardware Notes
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
            Key Performance Benchmarks
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Practical build, acoustic, and optical takeaways across our most popular workspace selections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((rev, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-[#0d0f16] p-5 text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-2">
                  {[...Array(rev.rating)].map((_, idx) => (
                    <Star key={idx} className="h-3.5 w-3.5 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-normal mb-4">
                  {rev.review}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-bold text-white flex items-center gap-1.5">
                      {rev.name}
                      <CheckCircle className="h-3 w-3 text-emerald-400 inline" />
                    </h4>
                    <span className="text-[10px] text-slate-500 font-mono">{rev.location}</span>
                  </div>
                  <span className="text-[10px] text-amber-400/80 font-mono">{rev.date}</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-1 font-mono truncate">
                  Benchmark: {rev.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
