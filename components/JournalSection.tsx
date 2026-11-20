import React from 'react';
import Image from 'next/image';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';

export default function JournalSection() {
  const articles = [
    {
      issue: 'NOTE // 041',
      readTime: '4 min read',
      title: 'The Optical Physics of Stroboscopic Water Levitation',
      excerpt: 'How pulsed stroboscopic illumination at synchronized hertz frequencies exploits human retinal persistence of vision to visually freeze upward droplets.',
      imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
      date: 'NOVEMBER 2026',
    },
    {
      issue: 'NOTE // 042',
      readTime: '6 min read',
      title: 'The Anti-Clutter Desk: Why Aluminum Beats Plastic',
      excerpt: 'Evaluating structural rigidity, thermal heat dissipation, and acoustic resonance across workstation materials. Why we reject mass-market injection molds.',
      imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
      date: 'NOVEMBER 2026',
    },
    {
      issue: 'NOTE // 043',
      readTime: '5 min read',
      title: 'Circadian Light Calibration in Nocturnal Studios',
      excerpt: 'Designing with 2200K amber spectra to protect melatonin production during deep late-night focus sessions without sacrificing contrast.',
      imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
      date: 'OCTOBER 2026',
    },
  ];

  return (
    <section className="py-16 border-b border-white/10 bg-[#090b10]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-white/10">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-amber-400">
              Studio Journal // Editorial Archive
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              Field Notes & Material Studies
            </h2>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            Observations on spatial design & tactile ergonomics
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((item, idx) => (
            <article
              key={idx}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/40 p-5 hover:border-amber-400/40 transition-all duration-300"
            >
              <div>
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-4 bg-slate-800">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 rounded bg-black/80 backdrop-blur-md px-2 py-0.5 text-[9px] font-mono text-amber-400 border border-white/10">
                    {item.issue}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 mb-2">
                  <span>{item.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <Clock className="h-3 w-3" /> {item.readTime}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                  {item.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="font-mono text-[11px] text-amber-400 font-bold group-hover:underline">
                  Read Study Notes
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
