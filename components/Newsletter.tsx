'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section className="py-16 border-b border-white/10 bg-gradient-to-b from-[#07080b] to-[#0a0d14]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
          Private Dispatch // Limited Batches
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-white mt-3">
          Join The Studio Roster
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mt-2 leading-relaxed">
          Receive notification when a verified new aesthetic living object passes our studio stress test. Delivered bi-weekly. Strictly zero spam.
        </p>

        {!subscribed ? (
          <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto flex items-center gap-2">
            <div className="relative flex-1">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full rounded-xl border border-white/15 bg-white/5 py-3 pl-10 pr-4 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded-xl bg-white px-5 py-3 text-xs font-bold text-slate-950 hover:bg-amber-400 transition shadow-lg shrink-0"
            >
              <span>Subscribe</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </form>
        ) : (
          <div className="mt-6 flex items-center justify-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 py-2.5 px-4 rounded-xl border border-emerald-500/20 max-w-md mx-auto">
            <CheckCircle2 className="h-4 w-4" />
            <span>Welcome to the archive dispatch list.</span>
          </div>
        )}
      </div>
    </section>
  );
}
