import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Marcus Vance',
      role: 'Verified Buyer',
      location: 'Austin, TX',
      product: 'Anti-Gravity Levitating Water Lamp',
      review: 'I saw this on TikTok and assumed it was edited footage. Unboxed it two days later through Amazon Prime and it actually works exactly as advertised. The droplets look completely frozen in mid-air. Hypnotic desk piece.',
      rating: 5,
      date: 'November 14, 2026'
    },
    {
      name: 'Sarah Lindqvist',
      role: 'Verified Buyer',
      location: 'Seattle, WA',
      product: 'Minimalist 3-in-1 MagSafe Dock',
      review: 'Solid aluminum weight. Doesn’t slide around your nightstand when detaching the iPhone. Replaced three tangled charging cables with one clean stand. StandBy mode looks great on it.',
      rating: 5,
      date: 'November 08, 2026'
    },
    {
      name: 'David K.',
      role: 'Verified Buyer',
      location: 'Denver, CO',
      product: 'Curved ScreenBar Monitor Lamp',
      review: 'Working 10-hour coding shifts was giving me eye strain from ambient room glare. This casts light only on my keyboard and documents without reflecting off the monitor. Build quality is top notch.',
      rating: 5,
      date: 'October 29, 2026'
    }
  ];

  return (
    <section id="reviews" className="py-16 border-b border-white/10 bg-[#07090e]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            Real Customer Feedback
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
            Verified Community Reviews
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Real feedback from creators and professionals who purchased our curated desk finds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, i) => (
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
                  "{rev.review}"
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
                  Purchased: {rev.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
