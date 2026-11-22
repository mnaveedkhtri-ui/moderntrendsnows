'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS } from '../data/blog-posts';
import { BookOpen, Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';

export default function JournalSection() {
  const posts = BLOG_POSTS;

  return (
    <section id="journal" className="py-20 bg-[#06080c] border-b border-white/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/20 bg-amber-400/5 text-amber-400 font-mono text-[11px] font-bold tracking-widest uppercase mb-3">
              <BookOpen className="h-3.5 w-3.5" />
              <span>Studio Journal // Field Guides &amp; Research</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Architectural Guides for Modern Workspaces
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl font-light">
              Deep-dive breakdowns on cognitive ergonomics, asymmetric optics, and acoustic atmosphere curated for engineers, designers, and high-performance creators.
            </p>
          </div>
          <Link
            href="/blog"
            className="text-xs font-mono font-bold text-amber-400 hover:text-amber-300 border border-amber-400/30 hover:border-amber-400 rounded-xl px-4 py-2.5 bg-amber-400/10 flex items-center gap-2 self-start md:self-auto transition"
          >
            <span>View All Field Guides</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Curated Field Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0c0f18] p-6 hover:border-amber-400/50 hover:bg-[#101422] transition-all duration-300 text-left shadow-xl"
            >
              <div>
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-900 border border-white/5 mb-5">
                  <Image
                    src={post.coverImage}
                    alt={post.coverImageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <span className="absolute top-3 left-3 rounded-md bg-amber-400 text-slate-950 font-black text-[10px] px-2.5 py-1 uppercase tracking-wider font-mono">
                    {post.category}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mb-2">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-amber-400" />
                    {post.readTime}
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.publishedDate}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition line-clamp-2 leading-snug mb-3">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed mb-6 font-light">
                  {post.tagline}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">{post.author.name}</span>
                <span className="text-amber-400 font-bold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                  <span>Read Guide</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
