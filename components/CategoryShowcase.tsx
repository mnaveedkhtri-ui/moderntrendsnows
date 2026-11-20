'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Layers, Lightbulb, Compass } from 'lucide-react';

interface CategoryShowcaseProps {
  onSelectCategory: (cat: string) => void;
}

export default function CategoryShowcase({ onSelectCategory }: CategoryShowcaseProps) {
  const collections = [
    {
      title: 'Workspace Architecture',
      slug: 'Workspace',
      count: '5 Objects',
      description: 'Precision CNC docks, zero-glare screenbars, and articulated cable conduits designed for focused minds.',
      imageUrl: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80',
      icon: <Layers className="h-4 w-4 text-amber-400" />
    },
    {
      title: 'Atmospheric Lighting',
      slug: 'Lighting',
      count: '4 Objects',
      description: 'Defying gravity and mimicking golden-hour twilights. Sculptural light calibrated for calm evenings.',
      imageUrl: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80',
      icon: <Lightbulb className="h-4 w-4 text-amber-400" />
    },
    {
      title: 'Kinetic Art & Tactile Living',
      slug: 'Kinetic',
      count: '3 Objects',
      description: 'Perpetual celestial motion, authentic mechanical clicky switches, and retro 8-bit companion clocks.',
      imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
      icon: <Compass className="h-4 w-4 text-amber-400" />
    }
  ];

  return (
    <section className="py-12 border-b border-white/10 bg-[#07080b]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-amber-400">
              Curated Series // 2026
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              Curated Design Disciplines
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-md font-mono">
            Every category represents months of physical lab testing, material inspection, and ergonomic review.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((col, idx) => (
            <div
              key={idx}
              onClick={() => {
                onSelectCategory(col.slug);
                document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative h-80 rounded-2xl overflow-hidden border border-white/10 bg-slate-900 cursor-pointer shadow-lg hover:border-amber-400/50 transition-all duration-300"
            >
              {/* Background Photography */}
              <Image
                src={col.imageUrl}
                alt={col.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center brightness-50 group-hover:scale-105 group-hover:brightness-60 transition-all duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Content Block */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-left">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-mono text-white border border-white/10">
                    {col.icon} {col.count}
                  </span>
                  <div className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {col.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 line-clamp-2 font-normal leading-relaxed">
                    {col.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-amber-400 mt-3 group-hover:translate-x-1 transition-transform">
                    View Discipline Collection →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
