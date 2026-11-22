import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS } from '../../data/blog-posts';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { BookOpen, Clock, Calendar, ArrowRight, Sparkles, ChevronRight, Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Field Guides & Architectural Research | Modern Trends Now',
  description:
    'Deep-dive architectural breakdowns on cognitive ergonomics, asymmetric desktop optics, acoustic atmosphere, and tactile focus tools for creators and engineers.',
  alternates: {
    canonical: 'https://www.moderntrendsnow.store/blog',
  },
  openGraph: {
    title: 'Field Guides & Architectural Research | Modern Trends Now',
    description:
      'Curated research papers and buying guides on ergonomic workspace setups, optical physics, and minimalist desk architecture.',
    url: 'https://www.moderntrendsnow.store/blog',
    type: 'website',
  },
};

export default function BlogIndexPage() {
  const posts = BLOG_POSTS;
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] text-slate-100 selection:bg-amber-400 selection:text-black">
      {/* Sticky Global Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb Header */}
        <div className="border-b border-white/10 bg-[#05070d]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <ChevronRight className="h-3 w-3 text-slate-600" />
              <span className="text-amber-400 font-bold">Field Guides &amp; Research</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 border-b border-white/10 bg-[#06080f] overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/05 rounded-full blur-[140px] pointer-events-none" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1 text-xs font-mono font-bold text-amber-300 mb-4">
              <BookOpen className="h-3.5 w-3.5 text-amber-400" />
              <span>Studio Journal // Field Guides &amp; Research</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mb-4">
              Architectural Guides for Modern Workspaces
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-light mb-8">
              Deep-dive breakdowns on cognitive ergonomics, asymmetric optics, and acoustic atmosphere. Every guide is written for engineers, designers, and creators who refuse cheap hollow plastic.
            </p>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="text-slate-500 text-[11px] mr-1">Categories:</span>
              <span className="px-3 py-1 rounded-lg bg-amber-400 text-slate-950 font-bold">All Guides ({posts.length})</span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300">Workspace Architecture</span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300">Optical Ergonomics</span>
            </div>
          </div>
        </section>

        {/* Featured Masterclass Article (Large Hero Card) */}
        {featuredPost && (
          <section className="py-10 border-b border-white/10 bg-[#07090e]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-left mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3" /> Featured Deep-Dive
                </span>
              </div>

              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 rounded-3xl border border-white/10 bg-[#0c0f18] p-5 sm:p-8 hover:border-amber-400/50 hover:bg-[#101422] transition-all duration-300 text-left shadow-2xl"
              >
                {/* Visual Cover (7 cols) */}
                <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-900 border border-white/5">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.coverImageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3 rounded-lg bg-amber-400 text-slate-950 font-black text-[10px] px-2.5 py-1 uppercase tracking-wider font-mono">
                    {featuredPost.category}
                  </div>
                </div>

                {/* Editorial Content (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-amber-400" />
                        {featuredPost.readTime}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {featuredPost.publishedDate}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-amber-300 transition leading-snug mb-3">
                      {featuredPost.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6">
                      {featuredPost.tagline}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full overflow-hidden bg-amber-400 relative">
                        <Image
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-xs text-slate-300 font-mono">{featuredPost.author.name}</span>
                    </div>

                    <span className="text-xs font-mono font-bold text-amber-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Read Guide</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* All Remaining Articles Grid */}
        <section className="py-12 sm:py-16 border-b border-white/10 bg-[#07090e]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-8">
              All Architectural Field Guides
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0c0f18] p-5 hover:border-amber-400/50 hover:bg-[#101422] transition-all duration-300 shadow-lg text-left"
                >
                  <div>
                    {/* Cover Image */}
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-900 border border-white/5 mb-4">
                      <Image
                        src={post.coverImage}
                        alt={post.coverImageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-2.5 left-2.5 rounded bg-black/80 backdrop-blur-md text-amber-300 font-bold text-[9px] px-2 py-0.5 uppercase tracking-wider font-mono border border-white/10">
                        {post.category}
                      </span>
                    </div>

                    {/* Metadata */}
                    <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400 mb-2">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-amber-400" />
                        {post.readTime}
                      </span>
                      <span>&bull;</span>
                      <span>{post.publishedDate}</span>
                    </div>

                    {/* Title */}
                    <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition line-clamp-2 leading-snug mb-2">
                      {post.title}
                    </h4>

                    {/* Tagline / Excerpt */}
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                      {post.tagline}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">{post.author.name}</span>
                    <span className="text-amber-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Read</span>
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
