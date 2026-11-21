'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { JOURNAL_ARTICLES, JournalArticle } from '../data/articles';
import { PRODUCTS, Product } from '../data/products';
import { BookOpen, Clock, Calendar, ArrowRight, X, ExternalLink, Star, CheckCircle2, ChevronRight } from 'lucide-react';

interface JournalSectionProps {
  onQuickViewProduct?: (product: Product) => void;
}

export default function JournalSection({ onQuickViewProduct }: JournalSectionProps) {
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);

  // Helper to find products featured in an article
  const getFeaturedProducts = (productIds: string[]): Product[] => {
    return productIds
      .map((id) => PRODUCTS.find((p) => p.id === id))
      .filter((p): p is Product => Boolean(p));
  };

  return (
    <section id="journal" className="py-20 bg-[#06080c] border-b border-white/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/20 bg-amber-400/5 text-amber-400 font-mono text-[11px] font-bold tracking-widest uppercase mb-3">
              <BookOpen className="h-3.5 w-3.5" />
              <span>Studio Journal // Field Guides & Research</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Architectural Guides for Modern Workspaces
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
              Deep-dive breakdowns on cognitive ergonomics, asymmetric optics, and acoustic atmosphere curated for engineers, designers, and high-performance creators.
            </p>
          </div>
          <div className="text-xs font-mono text-slate-400 border border-white/10 rounded-xl px-4 py-2.5 bg-white/[0.02] flex items-center gap-2 self-start md:self-auto">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>EDITORIAL PEER-REVIEWED ARCHIVE</span>
          </div>
        </div>

        {/* Curated Field Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {JOURNAL_ARTICLES.map((article) => {
            const featuredItems = getFeaturedProducts(article.featuredProductIds);

            return (
              <article
                key={article.id}
                className="group flex flex-col rounded-2xl border border-white/10 bg-[#0a0d14] hover:border-amber-400/40 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-amber-500/5"
              >
                {/* Article Cover Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-black/30 to-transparent" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="font-mono text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-amber-400 border border-amber-400/30">
                      {article.tag}
                    </span>
                  </div>

                  {/* Read Time & Date */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-slate-300">
                    <span className="flex items-center gap-1.5 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                      <Clock className="h-3 w-3 text-amber-400" />
                      {article.readTime}
                    </span>
                    <span className="flex items-center gap-1.5 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                      <Calendar className="h-3 w-3 text-slate-400" />
                      {article.publishedDate}
                    </span>
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-400 transition leading-snug">
                      {article.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>

                    {/* Featured Gear Pill Previews */}
                    <div className="mt-5 pt-4 border-t border-white/5">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-2">
                        Evaluated Artifacts:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {featuredItems.map((prod) => (
                          <span
                            key={prod.id}
                            className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/[0.04] border border-white/5 text-[11px] text-slate-300"
                          >
                            <span className="text-amber-400 font-bold">${prod.price.toFixed(2)}</span>
                            <span className="truncate max-w-[130px]">{prod.title}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Read Article Trigger */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => setActiveArticle(article)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition group-hover:translate-x-1 duration-200"
                    >
                      <span>Read Field Guide</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <span className="text-[10px] font-mono text-slate-400">{article.author}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#090c13] border border-white/15 shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-[#0c101a]">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20">
                  {activeArticle.tag}
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-amber-400" />
                  {activeArticle.readTime}
                </span>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="rounded-lg p-2 text-slate-400 hover:text-white hover:bg-white/10 transition"
                aria-label="Close Guide"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body / Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-8 text-slate-200 text-sm leading-relaxed">
              {/* Title & Metadata */}
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                  {activeArticle.title}
                </h1>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 border-b border-white/10 pb-6">
                  <span>Author: {activeArticle.author}</span>
                  <span>•</span>
                  <span>Published: {activeArticle.publishedDate}</span>
                  <span>•</span>
                  <span className="text-amber-400">Verified Prime Affiliate Archive</span>
                </div>
              </div>

              {/* Cover Hero */}
              <div className="relative aspect-[21/9] w-full rounded-xl overflow-hidden border border-white/10">
                <Image
                  src={activeArticle.coverImage}
                  alt={activeArticle.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Lead Summary Callout */}
              <div className="rounded-xl border border-amber-400/30 bg-amber-400/[0.04] p-5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block mb-1">
                  Executive Abstract
                </span>
                <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                  {activeArticle.summary}
                </p>
              </div>

              {/* Article Content Sections */}
              <div className="space-y-8">
                {activeArticle.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-4">
                    <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                      <span className="text-amber-400 font-mono text-sm">0{idx + 1}.</span>
                      <span>{sec.heading}</span>
                    </h2>
                    
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-slate-300 leading-relaxed text-sm sm:text-base">
                        {p}
                      </p>
                    ))}

                    {/* Key Takeaways Box */}
                    {sec.takeaways && sec.takeaways.length > 0 && (
                      <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 space-y-2">
                        <span className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider block">
                          Architectural Takeaways:
                        </span>
                        <ul className="space-y-2">
                          {sec.takeaways.map((point, ptIdx) => (
                            <li key={ptIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Evaluated Hardware Showcase Box */}
              <div className="pt-8 border-t border-white/15">
                <div className="mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
                    Curated Hardware Tested in This Guide
                  </span>
                  <p className="text-xs text-slate-400">
                    Direct Amazon Prime links with real-time stock and 30-day return protection:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {getFeaturedProducts(activeArticle.featuredProductIds).map((prod) => (
                    <div
                      key={prod.id}
                      className="rounded-xl border border-white/10 bg-[#0d1018] p-4 flex gap-4 items-center justify-between group hover:border-amber-400/40 transition"
                    >
                      <div className="relative h-16 w-16 rounded-lg overflow-hidden shrink-0 border border-white/10 bg-black">
                        <Image
                          src={prod.imageUrl}
                          alt={prod.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 text-amber-400 text-xs font-mono">
                          <Star className="h-3 w-3 fill-amber-400" />
                          <span>{prod.rating}</span>
                          <span className="text-slate-400">({prod.reviewsCount})</span>
                        </div>
                        <h4 className="text-xs font-bold text-white truncate mt-0.5 group-hover:text-amber-400 transition">
                          {prod.title}
                        </h4>
                        <div className="flex items-baseline gap-2 mt-1">
                          <span className="text-sm font-black text-white">${prod.price.toFixed(2)}</span>
                          <span className="text-[11px] text-slate-400 line-through">${prod.compareAtPrice.toFixed(2)}</span>
                        </div>
                      </div>
                      <a
                        href={prod.amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 p-2.5 rounded-lg bg-amber-400 text-slate-950 hover:bg-amber-300 font-bold text-xs flex items-center justify-center transition shadow-lg shadow-amber-500/10"
                        title="View on Amazon"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-white/10 bg-[#0a0d14] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] text-slate-400">
                Editorial Disclosure: As an Amazon Associate, Modern Trends Now earns from qualifying purchases.
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="w-full sm:w-auto px-5 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-bold text-white transition"
              >
                Close Guide
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
