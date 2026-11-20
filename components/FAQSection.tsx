'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does shipping and order fulfillment work?',
      a: 'All orders featured on Modern Trends Now route directly through verified Amazon Prime fulfillment centers. This ensures fast 2-day delivery across the United States, complete with real-time courier tracking and insured shipping.'
    },
    {
      q: 'What is your return and refund policy?',
      a: 'Every product comes backed by Amazon’s 30-day no-questions-asked return guarantee. If an item arrives damaged, defective, or simply does not match your setup, you can initiate a free return and receive a 100% full refund.'
    },
    {
      q: 'How does the editorial team test and verify products?',
      a: 'We evaluate hundreds of viral social media products every month. We filter out cheap hollow plastics and test build durability, noise levels (dB), thermal heat dissipation, and genuine user ratings before featuring any object in our archive.'
    },
    {
      q: 'Are these products covered by a warranty?',
      a: 'Yes. All verified brand manufacturers provide a minimum 12-month hardware warranty against defects. Extended protection plans are also selectable during Amazon checkout.'
    }
  ];

  return (
    <section className="py-16 border-b border-white/10 bg-[#090b10]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
            Everything You Need to Know
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-[#0c0e14] overflow-hidden text-left"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-xs sm:text-sm font-bold text-white hover:text-amber-400 transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-400' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs text-slate-300 leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
